import { SecondPage } from './../second/second';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FristPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frist',
  templateUrl: 'frist.html',
})
export class FristPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotosecond(){
    this.navCtrl.push(SecondPage);
  }


}
