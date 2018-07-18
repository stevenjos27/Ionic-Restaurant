import { FavoriteProvider } from './../../providers/favorite/favorite';
import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Dish } from './../../shared/dish';
import { DishProvider } from './../../providers/dish/dish';
import { DishdetailPage } from './../dishdetail/dishdetail';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit{
  dishes: Dish[];
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController,
    private dishservice: DishProvider,
    private favoriteservice: FavoriteProvider,
    @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit(){
    this.dishservice.getDishes()
    .subscribe( dishes => this.dishes = dishes,
    errmess => this.errMess = errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  dishSelected(event, dish){
    this.navCtrl.push(DishdetailPage,{
      dish: dish
    });
  }
  
  addToFavorites(dish: Dish){
    console.log('Adding to favorites', dish.id);
    this.favoriteservice.addFavorite(dish.id);
    this.toastCtrl.create({
      message:'Dish '+dish.id+' added as a favorite successfully',
      duration:3000
    }).present();
  }
}
