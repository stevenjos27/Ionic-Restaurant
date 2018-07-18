import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  comment: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController,
  private formBuilder: FormBuilder
  ) {
    this.comment = this.formBuilder.group({
      author: ['', Validators.required],
      rating: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss(){
    console.log(this.comment.valid);
    this.viewCtrl.dismiss();
  }
  
  onSubmit(data){
    console.log(data);
    let d = new Date();
    let date = d.toISOString();
    data.date = date;
    this.viewCtrl.dismiss(data);
  }
}
