import { Leader } from './../../shared/leader';
import { baseURL } from './../../shared/baseurl';
import { Component, Inject, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeaderProvider } from './../../providers/leader/leader';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  leaders: Leader[];
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private leaderservice: LeaderProvider,
    @Inject('BaseURL') private BaseURL) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  
  ngOnInit(){
    this.leaderservice.getLeaders()
    .subscribe( leaders => this.leaders = leaders,
    errmess => this.errMess = errmess )
  }
}
