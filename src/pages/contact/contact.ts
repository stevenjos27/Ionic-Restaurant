import { EmailComposer, EmailComposer } from '@ionic-native/email-composer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private emailComposer:EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  
  sendEmail(){
    let email = {
      to: 'confusion@food.net',
      subject: '[ConFusion] Query',
      body: 'Dear Sir,Madam:',
      isHtml: true
    };
    this.emailComposer.open(email);
  }
}
