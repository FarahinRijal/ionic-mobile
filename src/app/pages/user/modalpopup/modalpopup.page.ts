import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Employee } from 'src/app/services/app.service';
import { KemaskiniPage } from '../kemaskini/kemaskini.page';

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

  ) {

  //   this.http.post('http://localhost/php_ara/searchloc.php', JSON.stringify(body))
  //   .subscribe((response: any[]) => {
  //     this.response = response;
  //   // this.response.push(response);
  //   console.log("response ==> ", response);
  // },
  //   error => {
  //     console.log("error");
  //     console.log(error);
  //     const allInfo = `Tiada dalam rekod.`;
  //     alert(allInfo);
  //   });
   }

  currentName: Data = new Employee();
  // response = [];
  popupVisible = false;
  passedId = null;

  ngOnInit() {
    // this.currentEmployee = kubur;
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
    // console.log("current lat->", this.currentName.latitude);  
    let lat = this.currentName.latitude; 
    let lng = this.currentName.longitude; 
    let nama = this.currentName.nama; 
    let plot = this.currentName.plot;
  //  this.navCtrl.navigateRoot(['/map']); 
  //  this.modalController.dismiss();
  console.log("pass info to modal user->", lat, lng, nama, plot);
  this.navCtrl.navigateRoot(['/lokasi'], {queryParams: {data1 : lat, data2 : lng, data3 : nama, data4 : plot}});
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
