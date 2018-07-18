import { baseURL } from './../../shared/baseurl';
import { LeaderProvider } from './../../providers/leader/leader';
import { Leader } from './../../shared/leader';
import { PromotionProvider } from './../../providers/promotion/promotion';
import { Promotion } from './../../shared/promotion';
import { DishProvider } from './../../providers/dish/dish';
import { Dish } from './../../shared/dish';
import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;

  constructor(public navCtrl: NavController,
  private dishservice: DishProvider,
  private promotionservice: PromotionProvider,
  private leaderservice: LeaderProvider,
  @Inject('BaseURL') private BaseURL) {

  }

  ngOnInit(){
    this.dishservice.getFeaturedDish()
    .subscribe(dish => this.dish = dish,
       errmess => this.dishErrMess = <any>errmess);

    this.promotionservice.getFeaturedPromotion()
    .subscribe(promotion => this.promotion = promotion,
       errmess => this.promoErrMess = <any>errmess);
       
    this.leaderservice.getFeaturedLeader()
    .subscribe(leader => this.leader = leader,
       errmess => this.leaderErrMess = <any>errmess);     
  }
}
