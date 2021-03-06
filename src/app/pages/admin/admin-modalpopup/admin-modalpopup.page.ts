import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Employee } from 'src/app/services/app.service';
import { KemaskiniPage } from '../../user/kemaskini/kemaskini.page';

@Component({
  selector: 'app-admin-modalpopup',
  templateUrl: './admin-modalpopup.page.html',
  styleUrls: ['./admin-modalpopup.page.scss'],
})
export class AdminModalpopupPage implements OnInit {

  latitude:number;
  longitude:number;

  constructor(
    private modalController:ModalController,
    private navParams: NavParams,
    private navCtrl: NavController,     
    private launchNavigator:LaunchNavigator,

  ) { }

  currentName: Data = new Employee();
  popupVisible = false;
  passedId = null;

  ngOnInit() {
    console.log("modal admin");
    this.passedId = this.navParams.get('currentData');    
    console.log("current ID: ",this.passedId.id); 
  }

  CloseModal() {
    this.modalController.dismiss();
  }

  async kemaskini(kubur) {  
    this.currentName = kubur;
    console.log("current data->", this.currentName);  
    const modal = await this.modalController.create({
    component : KemaskiniPage,
    componentProps : {
      currentData: this.currentName
    } 
    });
    modal.present();
  }


  lokasi (kubur) {     
    this.currentName = kubur;   
    let lat = this.currentName.latitude; 
    let lng = this.currentName.longitude; 
    let nama = this.currentName.nama; 
    let plot = this.currentName.plot;
  console.log("pass info to modal admin->", lat, lng, nama, plot);
  this.navCtrl.navigateRoot(['/admin-lokasi'], {queryParams: {data1 : lat, data2 : lng, data3 : nama, data4 : plot}});
   this.modalController.dismiss();
  }

  navigateLocation(){
    let options: LaunchNavigatorOptions = {
     app: this.launchNavigator.APP.GOOGLE_MAPS,
              start:[this.latitude,this.longitude]
       };
   this.launchNavigator.navigate('London, ON',options)
   .then(success =>{
     console.log(success);
   },error=>{
     console.log(error);
   })
 }

  
}

