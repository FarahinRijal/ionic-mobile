import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { Employee } from 'src/app/services/app.service';
import { AuthService } from 'src/app/services/auth.service';
import { NavController, ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { ModalpopupPage } from '../modalpopup/modalpopup.page';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @Input() public isClicked: boolean;
  p: number = 1;
  currentName: Data = new Employee();
  data = [];
  popupVisible = false;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private modalController: ModalController,
    private env: EnvService
  ) { }

  ngOnInit(): void {
    this.isClicked = true;
  }

  response = [];
  locList: any = ['Kangkar Pulai',
                  'Impian Emas', ]
 
  form = new FormGroup({
   location: new FormControl('', Validators.required),
   name: new FormControl('', Validators.required)
 });
   
 get f(){
   return this.form.controls;
 }

 searchChanged(selectedValue:string){   
  let location = this.form.value.location;
  // this._cdr.detectChanges();
  console.log('Location: ',location);
     console.log('value is ',selectedValue);
  
     }

  
 submit(){
      let data = this.form.value;
      console.log("chck data",data);
      let locationselected = this.form.value.location;
      console.log("search-->", this.form.value.name);
      
      if (locationselected == "Kangkar Pulai") {
        var body = {
          location: "Kangkar Pulai",
          nama: this.form.value.name,
        } 
        console.log("KP selected");
        
      } 
      else    
      {
        var body = {
          location: "Impian Emas",
          nama: this.form.value.name,
        } 
        console.log("IE selected");
      }
    
      this.http.post(this.env.API_URL + '/php/searchloc.php', JSON.stringify(body))
      .subscribe((response: any[]) => {
        this.response = response;
    //  .subscribe(response => {
    //    this.response.push(response);
       console.log("response ==> ", response);
     },
  // })
    error => {
         console.log(error.status);
         console.log("error");
        //  console.log(error);
         this.alertService.presentToast("Tiada dalam rekod!");
       });
 }


 async OpenModal(kubur) {  
  this.currentName = kubur;
  console.log("current search data->", this.currentName);  
  const modal = await this.modalController.create({
  component : ModalpopupPage,
  componentProps : {
    currentData: this.currentName
  } 
  });
  modal.present();
}

}
