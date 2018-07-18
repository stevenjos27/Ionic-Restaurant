webpackJsonp([8],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header color="primary">\n      Location Information\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n        <i>\n          <h4>121, Clear Water Bay Road Clear Water Bay, Kowloon HONG KONG\n          </h4>\n        </i>\n      </p>\n      <ion-row>\n        <ion-icon name="call"><i> : +852 1234 5678</i></ion-icon>\n      </ion-row>\n      <ion-row>\n        <ion-icon name="print"><i> : +852 8765 4321</i></ion-icon>\n      </ion-row>\n      <ion-row>\n        <ion-icon name="mail"><i> :confusion@food.net</i></ion-icon>\n      </ion-row>\n    </ion-card-content>\n    <ion-row>\n        <ion-col>\n          <button ion-button icon-left clear small>\n            <ion-icon name="call">&nbsp; CALL</ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-left clear small>\n            <ion-icon name="mail">&nbsp; EMAIL</ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_leader_leader__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, leaderservice, BaseURL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.leaderservice = leaderservice;
        this.BaseURL = BaseURL;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderservice.getLeaders()
            .subscribe(function (leaders) { return _this.leaders = leaders; }, function (errmess) { return _this.errMess = errmess; });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header color="primary">\n      Our History\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n          Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.\n\n          The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world\'s best cuisines in a pan.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <div *ngIf="leaders">\n  <ion-card>\n    <ion-card-header color="primary">\n      Corporate Leadership\n    </ion-card-header>\n\n    <ion-list *ngFor="let leader of leaders">\n      <ion-item text-wrap>\n        <ion-avatar item-start>\n          <img src="{{BaseURL + leader.image}}" alt="">\n        </ion-avatar>\n        <h2>{{ leader.name }}</h2>\n        <h3>{{ leader.designation }}</h3>\n        <p>{{ leader.description }}</p>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\about\about.html"*/,
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_leader_leader__["a" /* LeaderProvider */], Object])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentPage = /** @class */ (function () {
    function CommentPage(navCtrl, navParams, viewCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.comment = this.formBuilder.group({
            author: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rating: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            comment: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    CommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentPage');
    };
    CommentPage.prototype.dismiss = function () {
        console.log(this.comment.valid);
        this.viewCtrl.dismiss();
    };
    CommentPage.prototype.onSubmit = function (data) {
        console.log(data);
        var d = new Date();
        var date = d.toISOString();
        data.date = date;
        this.viewCtrl.dismiss(data);
    };
    CommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comment',template:/*ion-inline-start:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\comment\comment.html"*/'<ion-header>\n\n  <ion-toolbar color="primary-pale">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Comment</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="comment" (ngSubmit)="onSubmit(comment.value)">\n    <ion-item>\n      <ion-label floating>Your Name</ion-label>\n      <ion-input formControlName="author"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Your Rating</ion-label>\n      <ion-range min="1" max="5" steps="1" snaps="true" pin="true" formControlName="rating">\n        <!-- <ion-label range-left>1</ion-label>\n        <ion-label range-right>5</ion-label> -->\n        <ion-icon name="sad" range-left></ion-icon>\n        <ion-icon name="happy" range-right></ion-icon>      \n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Your Comment</ion-label>\n      <ion-textarea formControlName="comment"></ion-textarea>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!comment.valid">Submit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\comment\comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_favorite_favorite__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(navCtrl, navParams, favoriteservice, toastCtrl, loadCtrl, alertCtrl, BaseURL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoriteservice = favoriteservice;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.BaseURL = BaseURL;
    }
    FavoritesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.favoriteservice.getFavorites()
            .subscribe(function (favorites) { return _this.favorites = favorites; }, function (errmess) { return _this.errMess = errmess; });
    };
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage.prototype.deleteFavorite = function (item, id) {
        var _this = this;
        console.log('delete', id);
        var alert = this.alertCtrl.create({
            title: 'Confirm Title',
            message: 'Do you want to delete Favorite ' + id,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Delete cancelled');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        var loading = _this.loadCtrl.create({
                            content: 'Deleting . . . '
                        });
                        var toast = _this.toastCtrl.create({
                            message: 'Dish ' + id + ' deleted successfully',
                            duration: 3000
                        });
                        loading.present();
                        _this.favoriteservice.deleteFavorite(id)
                            .subscribe(function (favorites) { _this.favorites = favorites; loading.dismiss(); toast.present(); }, function (errmess) { _this.errMess = errmess; loading.dismiss(); });
                    }
                }
            ]
        });
        alert.present();
        item.close();
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\favorites\favorites.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Favorites</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="favorites">\n    <ion-list>\n      <ion-item-sliding *ngFor="let favorite of favorites" #item>\n        <ion-item>\n          <ion-thumbnail item-left>\n            <img src="{{BaseURL + favorite.image}}" alt="">\n          </ion-thumbnail>\n          <h3>{{ favorite.name }}</h3>\n          <p>{{ favorite.description }}</p>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="danger" (click)="deleteFavorite(item, favorite.id)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n  <div [hidden]="favorites || errMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMess">\n    <h2>Error</h2>\n    <h4>{{ errMess }}</h4>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\favorites\favorites.html"*/,
        }),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_favorite_favorite__["a" /* FavoriteProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], Object])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_favorite_favorite__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comment_comment__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DishdetailPage = /** @class */ (function () {
    function DishdetailPage(navCtrl, navParams, toastCtrl, actionCtrl, modalCtrl, BaseURL, favoriteservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.actionCtrl = actionCtrl;
        this.modalCtrl = modalCtrl;
        this.BaseURL = BaseURL;
        this.favoriteservice = favoriteservice;
        debugger;
        this.dish = navParams.get('dish');
        this.favorite = favoriteservice.isFavorite(this.dish.id);
        this.numcomments = this.dish.comments.length;
        var total = 0;
        this.dish.comments.forEach(function (comment) { return total += comment.rating; });
        this.avgstars = (total / this.numcomments).toFixed(2);
    }
    DishdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DishdetailPage');
    };
    DishdetailPage.prototype.addToFavorites = function () {
        console.log('Adding to favorites', this.dish.id);
        this.favorite = this.favoriteservice.addFavorite(this.dish.id);
        this.toastCtrl.create({
            message: 'Dish ' + this.dish.id + ' added as a favorite successfully',
            position: 'middle',
            duration: 3000
        }).present();
    };
    DishdetailPage.prototype.moreOptions = function () {
        var _this = this;
        var actionSheet = this.actionCtrl.create({
            title: 'Select Actions',
            buttons: [
                {
                    text: 'Add to Favorites',
                    handler: function () {
                        console.log("Add to Favorites");
                        _this.addToFavorites();
                    }
                },
                {
                    text: 'Add Comment',
                    handler: function () {
                        console.log("Add Comment");
                        _this.openComment();
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log("Cancel");
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DishdetailPage.prototype.openComment = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__comment_comment__["a" /* CommentPage */]);
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.dish.comments.push(data);
            _this.numcomments = _this.dish.comments.length;
            var total = 0;
            _this.dish.comments.forEach(function (comment) { return total += comment.rating; });
            _this.avgstars = (total / _this.numcomments).toFixed(2);
        });
        modal.present();
    };
    DishdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-dishdetail',template:/*ion-inline-start:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\dishdetail\dishdetail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>dishdetail</ion-title>\n    <ion-buttons end>\n      <button ion-button (click) = "moreOptions()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="dish">\n    <img src="{{BaseURL + dish.image}}" />\n    <ion-card-content>\n      <ion-card-title>\n        {{ dish.name | uppercase }}\n      </ion-card-title>\n      <p>\n        {{ dish.description }}\n      </p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="star"></ion-icon>\n          <div>{{ avgstars }} stars</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>{{ numcomments }} Comments</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <div [hidden]="dish || errMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMess">\n    <h2>Error</h2>\n    <h4>{{ errMess }}</h4>\n  </div>\n\n  <ion-list *ngIf="dish">\n    <ion-list-header>\n      Comments\n    </ion-list-header>\n    <ion-item *ngFor="let comment of dish.comments" text-wrap>\n      <h4>{{ comment.comment }}</h4>\n      <p>{{ comment.rating }} Stars</p>\n      <p>\n        <span> -- {{ comment.author }} {{ comment.date | date}} </span>\n      </p>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab bottom right [hidden]="favorite">\n    <button ion-fab (click)="addToFavorites()">\n      <ion-icon name="heart-outline"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-fab bottom right *ngIf="favorite">\n    <button ion-fab>\n      <ion-icon name="heart"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\dishdetail\dishdetail.html"*/,
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */], Object, __WEBPACK_IMPORTED_MODULE_0__providers_favorite_favorite__["a" /* FavoriteProvider */]])
    ], DishdetailPage);
    return DishdetailPage;
}());

//# sourceMappingURL=dishdetail.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_favorite_favorite__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dish_dish__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dishdetail_dishdetail__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, toastCtrl, dishservice, favoriteservice, BaseURL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.dishservice = dishservice;
        this.favoriteservice = favoriteservice;
        this.BaseURL = BaseURL;
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.dishSelected = function (event, dish) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dishdetail_dishdetail__["a" /* DishdetailPage */], {
            dish: dish
        });
    };
    MenuPage.prototype.addToFavorites = function (dish) {
        console.log('Adding to favorites', dish.id);
        this.favoriteservice.addFavorite(dish.id);
        this.toastCtrl.create({
            message: 'Dish ' + dish.id + ' added as a favorite successfully',
            duration: 3000
        }).present();
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\menu\menu.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Menu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-image">\n  <div *ngIf="dishes">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 col-lg-4 *ngFor="let dish of dishes">\n          <ion-card (click)="dishSelected($event,dish)" (pan)="addToFavorites(dish)">\n            <img src="{{BaseURL + dish.image}}" alt="">\n            <div class="card-title">{{ dish.name }}</div>\n            <div class="card-subtitle">{{ dish.description }}</div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div [hidden]="dishes || errMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMess">\n    <h2>Error</h2>\n    <h4>{{ errMess }}</h4>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\menu\menu.html"*/,
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dish_dish__["a" /* DishProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_favorite_favorite__["a" /* FavoriteProvider */], Object])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservationPage = /** @class */ (function () {
    function ReservationPage(navCtrl, navParams, viewCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.reservation = this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    ReservationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservationPage');
    };
    ReservationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReservationPage.prototype.onSubmit = function () {
        console.log(this.reservation.value);
        this.viewCtrl.dismiss();
    };
    ReservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservation',template:/*ion-inline-start:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\reservation\reservation.html"*/'<ion-header>\n\n  <ion-toolbar color="primary-pale">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Reserve Table</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="reservation" (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label>No. of Guests</ion-label>\n      <ion-select formControlName="guests">\n        <ion-option value=1>1</ion-option>\n        <ion-option value=2>2</ion-option>\n        <ion-option value=3>3</ion-option>\n        <ion-option value=4>4</ion-option>\n        <ion-option value=5>5</ion-option>\n        <ion-option value=6>6</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Smoking?</ion-label>\n      <ion-toggle formControlName="smoking" checked="true"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Date and Time</ion-label>\n      <ion-datetime displayFormat="MMM DD, YYYY hh:mm A" pickerFormat="MMM DD, YYYY hh:mm A" formControlName="dateTime"></ion-datetime>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!reservation.valid">Reserve</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\reservation\reservation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ReservationPage);
    return ReservationPage;
}());

//# sourceMappingURL=reservation.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, formBuilder, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.user = { username: '', password: '' };
        this.loginForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            remember: true
        });
        storage.get('user').then(function (user) {
            if (user) {
                _this.user = user;
                _this.loginForm.patchValue({
                    'username': _this.user.username,
                    'password': _this.user.password
                });
            }
            else
                console.log("User not defined");
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.onSubmit = function () {
        this.user.username = this.loginForm.get('username').value;
        this.user.password = this.loginForm.get('password').value;
        if (this.loginForm.get('remember').value) {
            this.storage.set('user', this.user);
        }
        else {
            this.storage.remove('user');
        }
        this.viewCtrl.dismiss();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-toolbar color="primary-pale">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" formControlName="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Remember Me</ion-label>\n      <ion-checkbox type="primary" formControlName="remember" checked="true"></ion-checkbox>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!loginForm.valid">Login</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		311,
		7
	],
	"../pages/comment/comment.module": [
		312,
		6
	],
	"../pages/contact/contact.module": [
		310,
		5
	],
	"../pages/dishdetail/dishdetail.module": [
		314,
		4
	],
	"../pages/favorites/favorites.module": [
		313,
		3
	],
	"../pages/login/login.module": [
		317,
		2
	],
	"../pages/menu/menu.module": [
		315,
		1
	],
	"../pages/reservation/reservation.module": [
		316,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_leader_leader__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_promotion_promotion__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, dishservice, promotionservice, leaderservice, BaseURL) {
        this.navCtrl = navCtrl;
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderservice = leaderservice;
        this.BaseURL = BaseURL;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promoErrMess = errmess; });
        this.leaderservice.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row align-items-center>\n      <ion-col col-12 col-lg-4>\n        <ion-card *ngIf="dish">\n          <img src="{{BaseURL + dish.image}}" />\n          <ion-card-content>\n            <ion-card-title>\n              {{ dish.name | uppercase }}\n            </ion-card-title>\n            <p>\n              {{ dish.description }}\n            </p>\n          </ion-card-content>\n        </ion-card>\n        <div [hidden]="dish || dishErrMess">\n          <ion-spinner></ion-spinner>\n          <h4>Loading . . . Please Wait</h4>\n        </div>\n        <div *ngIf="dishErrMess">\n          <h2>Error</h2>\n          <h4>{{ dishErrMess }}</h4>\n        </div>\n      </ion-col>\n      <ion-col col-12 col-lg-4>\n        <ion-card *ngIf="promotion">\n          <img src="{{BaseURL + promotion.image}}" />\n          <ion-card-content>\n            <ion-card-title>\n              {{ promotion.name | uppercase }}\n            </ion-card-title>\n            <p>\n              {{ promotion.description }}\n            </p>\n          </ion-card-content>\n        </ion-card>\n        <div [hidden]="promotion || promotionErrMess">\n          <ion-spinner></ion-spinner>\n          <h4>Loading . . . Please Wait</h4>\n        </div>\n        <div *ngIf="promoErrMess">\n          <h2>Error</h2>\n          <h4>{{ promoErrMess }}</h4>\n        </div>\n      </ion-col>\n      <ion-col col-12 col-lg-4>\n        <ion-card *ngIf="leader">\n          <img src="{{BaseURL + leader.image}}" />\n          <ion-card-content>\n            <ion-card-title>\n              {{ leader.name | uppercase }}\n            </ion-card-title>\n            <p>\n              {{ leader.designation }}\n            </p>\n            <p>\n              {{ leader.description }}\n            </p>\n          </ion-card-content>\n        </ion-card>\n        <div [hidden]="leader || leaderErrMess">\n          <ion-spinner></ion-spinner>\n          <h4>Loading . . . Please Wait</h4>\n        </div>\n        <div *ngIf="leaderErrMess">\n          <h2>Error</h2>\n          <h4>{{ leaderErrMess }}</h4>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab right bottom>\n    <button ion-fab color="accent">\n      <ion-icon name="arrow-dropup"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab class="btn-mail">\n        <ion-icon name="mail"></ion-icon>\n      </button>\n      <button ion-fab class="btn-google-plus">\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </button>\n      <button ion-fab class="btn-youtube">\n        <ion-icon name="logo-youtube"></ion-icon>\n      </button>\n      <button ion-fab class="btn-twitter">\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-fab class="btn-facebook">\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-fab class="btn-linkedin">\n        <ion-icon name="logo-linkedin"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\pages\home\home.html"*/
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__["a" /* DishProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_promotion_promotion__["a" /* PromotionProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_leader_leader__["a" /* LeaderProvider */], Object])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_process_httpmsg__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PromotionProvider = /** @class */ (function () {
    function PromotionProvider(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        console.log('Hello PromotionProvider Provider');
    }
    PromotionProvider.prototype.getPromotions = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + '/promotions')
            .map(function (res) { return _this.processHttpmsgService.extractData(res); })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    PromotionProvider.prototype.getPromotion = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + '/promotions/' + id)
            .map(function (res) { return _this.processHttpmsgService.extractData(res); })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    PromotionProvider.prototype.getFeaturedPromotion = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + '/promotions?featured=true')
            .map(function (res) { return _this.processHttpmsgService.extractData(res)[0]; })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    PromotionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], PromotionProvider);
    return PromotionProvider;
}());

//# sourceMappingURL=promotion.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dishdetail_dishdetail__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_favorites_favorites__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_reservation_reservation__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_comment_comment__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_dish_dish__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_leader_leader__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_promotion_promotion__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_process_httpmsg_process_httpmsg__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_baseurl__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_favorite_favorite__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dishdetail_dishdetail__["a" /* DishdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_reservation_reservation__["a" /* ReservationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comment/comment.module#CommentPageModule', name: 'CommentPage', segment: 'comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dishdetail/dishdetail.module#DishdetailPageModule', name: 'DishdetailPage', segment: 'dishdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservation/reservation.module#ReservationPageModule', name: 'ReservationPage', segment: 'reservation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dishdetail_dishdetail__["a" /* DishdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_reservation_reservation__["a" /* ReservationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_dish_dish__["a" /* DishProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_leader_leader__["a" /* LeaderProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_promotion_promotion__["a" /* PromotionProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
                { provide: 'BaseURL', useValue: __WEBPACK_IMPORTED_MODULE_22__shared_baseurl__["a" /* baseURL */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_favorite_favorite__["a" /* FavoriteProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_favorites_favorites__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_reservation_reservation__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'About Us', icon: 'information-circle', component: __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */] },
            { title: 'Menu', icon: 'list-box', component: __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */] },
            { title: 'Contact Us', icon: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'My Favorites', icon: 'heart', component: __WEBPACK_IMPORTED_MODULE_8__pages_favorites_favorites__["a" /* FavoritesPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openReserve = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_reservation_reservation__["a" /* ReservationPage */]);
        modal.present();
    };
    MyApp.prototype.openLogin = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]);
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\app\app.html"*/'<ion-split-pane>\n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar color="primary-dark">\n        <ion-title>Ristorante Con Fusion</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="background-pale">\n      <ion-list>\n        <ion-list-header color="primary-light" text-wrap>\n          <ion-thumbnail item-left>\n            <img src="../assets/images/logo.png" alt="">\n          </ion-thumbnail>\n          <h3>Ristorante Con Fusion</h3>\n        </ion-list-header>\n        <button color="primary-pale" menuClose ion-item (click)="openLogin()">\n          <ion-icon name="log-in" item-left></ion-icon>\n          Login\n        </button>\n        <button color="primary-pale" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon [name]="p.icon" item-left></ion-icon>\n          {{p.title}}\n        </button>\n        <button color="primary-pale" menuClose ion-item (click)="openReserve()">\n          <ion-icon name="restaurant" item-left></ion-icon>\n          Reserve Table\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"C:\Users\Steven\Desktop\Study\Coursera\Ionic-Cordova\conFusion\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHttpmsgProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ProcessHttpmsgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProcessHttpmsgProvider = /** @class */ (function () {
    function ProcessHttpmsgProvider(http) {
        this.http = http;
        console.log('Hello ProcessHttpmsgProvider Provider');
    }
    ProcessHttpmsgProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProcessHttpmsgProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Response */]) {
            var body = error.json();
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_observable__["Observable"].throw(errMsg);
    };
    ProcessHttpmsgProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ProcessHttpmsgProvider);
    return ProcessHttpmsgProvider;
}());

//# sourceMappingURL=process-httpmsg.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
var baseURL = 'http://192.168.1.13:3000';
//# sourceMappingURL=baseurl.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dish_dish__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoriteProvider = /** @class */ (function () {
    function FavoriteProvider(http, dishservice) {
        this.http = http;
        this.dishservice = dishservice;
        console.log('Hello FavoriteProvider Provider');
        this.favorites = [];
    }
    FavoriteProvider.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id))
            this.favorites.push(id);
        return true;
    };
    FavoriteProvider.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteProvider.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice.getDishes()
            .map(function (dishes) { return dishes.filter(function (dish) { return _this.favorites.some(function (el) { return el === dish.id; }); }); });
    };
    FavoriteProvider.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            return this.getFavorites();
        }
        else {
            console.log("Deleting non-existant favorite " + id);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_observable__["Observable"].throw("Deleting non-existant favorite " + id);
        }
    };
    FavoriteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0__dish_dish__["a" /* DishProvider */]])
    ], FavoriteProvider);
    return FavoriteProvider;
}());

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_process_httpmsg__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DishProvider = /** @class */ (function () {
    function DishProvider(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        console.log('Hello DishProvider Provider');
    }
    DishProvider.prototype.getDishes = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + '/dishes')
            .map(function (res) { return _this.processHttpmsgService.extractData(res); })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    DishProvider.prototype.getDish = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + '/dishes/' + id)
            .map(function (res) { return _this.processHttpmsgService.extractData(res); })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    DishProvider.prototype.getFeaturedDish = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + '/dishes?featured=true')
            .map(function (res) { return _this.processHttpmsgService.extractData(res)[0]; })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    DishProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], DishProvider);
    return DishProvider;
}());

//# sourceMappingURL=dish.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_process_httpmsg__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_baseurl__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LeaderProvider = /** @class */ (function () {
    function LeaderProvider(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
        console.log('Hello LeaderProvider Provider');
    }
    LeaderProvider.prototype.getLeaders = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + '/leaders')
            .map(function (res) { return _this.processHttpmsgService.extractData(res); })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    LeaderProvider.prototype.getLeader = function (id) {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + '/leader/' + id)
            .map(function (res) { return _this.processHttpmsgService.extractData(res); })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    LeaderProvider.prototype.getFeaturedLeader = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_baseurl__["a" /* baseURL */] + '/leaders?featured=true')
            .map(function (res) { return _this.processHttpmsgService.extractData(res)[0]; })
            .catch(function (error) { return _this.processHttpmsgService.handleError(error); });
    };
    LeaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], LeaderProvider);
    return LeaderProvider;
}());

//# sourceMappingURL=leader.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map