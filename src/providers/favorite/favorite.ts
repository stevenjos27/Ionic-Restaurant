import { DishProvider } from './../dish/dish';
import { Observable } from 'rxjs/observable';
import { Dish } from './../../shared/dish';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class FavoriteProvider {
  favorites: Array<any>;

  constructor(public http: Http, private dishservice: DishProvider, private storage: Storage) {
    console.log('Hello FavoriteProvider Provider');
    this.favorites = [];
  }

  addFavorite(id:number): boolean {
    if(!this.isFavorite(id)){
      this.favorites.push(id);
      this.storage.set('favorites', this.favorites);
    }
    return true;
  }

  isFavorite(id:number): boolean{
    return this.favorites.some(el => el === id);
  }

   getFavorites(): Observable<Dish[]>{
     return this.dishservice.getDishes()
     .map(dishes => dishes.filter(dish => this.favorites.some(el => el === dish.id)));
   }

  // getFavorites(){
  //   this.storage.get('favorites').then(dish => {
  //     console.log("dish: "+dish);
  //     return dish;
  //   })
  // }
  
  deleteFavorite(id: number): Observable<Dish[]>{
    let index = this.favorites.indexOf(id);
    if(index >= 0 ){
      this.favorites.splice(index,1);
      this.storage.set('favorites', this.favorites);
      return this.getFavorites();
    }else{
      console.log("Deleting non-existant favorite "+ id);
      return Observable.throw("Deleting non-existant favorite "+ id);
    }
  }
}
