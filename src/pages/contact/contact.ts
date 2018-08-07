import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private emailComposer:EmailComposer, private callNumber: CallNumber) {
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

  callRestaurant(){
    this.callNumber.callNumber("+852 1234 5678", true)
    .then( res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
}
