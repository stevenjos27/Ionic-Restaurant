import { FavoriteProvider } from './../../providers/favorite/favorite';
import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController, ModalController } from 'ionic-angular';
import { Dish } from './../../shared/dish';
import { Comment } from './../../shared/comment';
import { CommentPage } from './../comment/comment';

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {
  dish: Dish;
  errMess: string;
  avgstars: string;
  numcomments: number;
  favorite: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController,
    private actionCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    @Inject('BaseURL') private BaseURL, private favoriteservice: FavoriteProvider) {
    debugger;
    this.dish = navParams.get('dish');
    this.favorite = favoriteservice.isFavorite(this.dish.id);
    this.numcomments = this.dish.comments.length;

    let total = 0;
    this.dish.comments.forEach(comment => total += comment.rating);
    this.avgstars = (total / this.numcomments).toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  addToFavorites() {
    console.log('Adding to favorites', this.dish.id);
    this.favorite = this.favoriteservice.addFavorite(this.dish.id);
    this.toastCtrl.create({
      message: 'Dish ' + this.dish.id + ' added as a favorite successfully',
      position: 'middle',
      duration: 3000
    }).present();
  }

  moreOptions() {
    let actionSheet = this.actionCtrl.create({
      title: 'Select Actions',
      buttons: [
        {
          text: 'Add to Favorites',
          handler: () => {
            console.log("Add to Favorites");
            this.addToFavorites();
          }
        },
        {
          text: 'Add Comment',
          handler: () => {
            console.log("Add Comment");
            this.openComment();
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log("Cancel");
          }
        }
      ]
    });

    actionSheet.present();
  }

  openComment() {
    let modal = this.modalCtrl.create(CommentPage);

    modal.onDidDismiss(data => {
      console.log(data);
      this.dish.comments.push(data);
      this.numcomments = this.dish.comments.length;

      let total = 0;
      this.dish.comments.forEach(comment => total += comment.rating);
      this.avgstars = (total / this.numcomments).toFixed(2);
    });
    modal.present();
  }
}
