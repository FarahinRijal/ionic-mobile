import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.page.html',
  styleUrls: ['./modalpopup.page.scss'],
})
export class ModalpopupPage implements OnInit {

  latitude:number;
  longitude:number;

  constructor(
    private modalController:ModalController,
    private navParams: NavParams,
    private http : HttpClient,
    private navCtrl: NavController,     
    private launchNavigator:LaunchNavigator,
  ) { }

  ngOnInit() {
  }

}
