import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { ProcessHttpmsgProvider } from './../process-httpmsg/process-httpmsg';
import { baseURL } from './../../shared/baseurl';
import { Observable } from 'rxjs/observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Dish } from '../../shared/dish';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';


/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DishProvider {

  constructor(public http: Http, private processHttpmsgService: ProcessHttpmsgProvider) {//@Inject('BaseURL') private BaseURL){//
    console.log('Hello DishProvider Provider');
  }
 
  getDishes(): Observable<Dish[]> {
    return this.http.get(baseURL + '/dishes')
    .map(res => { return this.processHttpmsgService.extractData(res)})
    .catch(error => { return this.processHttpmsgService.handleError(error)});
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get(baseURL + '/dishes/' + id)
    .map(res => { return this.processHttpmsgService.extractData(res)})
    .catch(error => { return this.processHttpmsgService.handleError(error)});
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseURL + '/dishes?featured=true')
    //.map(data => data[0]);
    .map(res => { return this.processHttpmsgService.extractData(res)[0];})
    .catch(error => { return this.processHttpmsgService.handleError(error)});
  }

}
