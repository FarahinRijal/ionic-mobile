import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { Employee } from 'src/app/services/app.service';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';
import { AdminModalpopupPage } from '../admin-modalpopup/admin-modalpopup.page';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.page.html',
  styleUrls: ['./admin-search.page.scss'],
})
export class AdminSearchPage implements OnInit {

  numTimesLeft = 4;
  @Input() public isClicked: boolean;
  p: number = 1;
  currentName: Data = new Employee();
  data = [];
  popupVisible = false;
  postData = {
    name: '',
    location: ''
    };
  

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private modalController: ModalController,
    private env: EnvService
  ) 
  { }

  logout() {
    this.navCtrl.navigateRoot('/userhome');
  }

  
  ngOnInit(): void {
    this.isClicked = true;
  }

  slice: number = 5;
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.slice += 5;
      infiniteScroll.complete();
    }, 200);
    
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
      .subscribe(response => {
        this.response.push(response);
        console.log("response ==> ", response);
      },
        error => {
          console.log("error");
          console.log(error);
          this.alertService.presentToast("Tiada dalam rekod!");
        });
  }
  
  public toggle(): void { 
   this.isClicked = !this.isClicked; 
   console.log(this.isClicked);
 } 
 
 public backTogle(): void { 
   this.isClicked = true;
 } 
 
 show(kubur){
   console.log("data->", this.currentName);    
   this.currentName = kubur;
   this.popupVisible = true;
 }

 update(nama,dob,dod,plot,corrnama,corrdob,corrdod,corrplot){
  console.log("kemaskini",this.data);
    this.auth.correctionkubur(nama,dob,dod,plot,corrnama,corrdob,corrdod,corrplot).subscribe(result => {
    console.log("result");
    console.log(result)
    },
    error => {
      console.log("error: ",error.status);
      console.log("data: ",this.currentName);
      
      if(error.status==200){        
        this.alertService.presentToast("Laporan ${nama} berjaya dihantar!");
        this.navCtrl.navigateRoot(['/adminhome']);
      }
    })
}

async OpenModal(kubur) {  
  this.currentName = kubur;
  console.log("current search data->", this.currentName);  
  const modal = await this.modalController.create({
  component : AdminModalpopupPage,
  componentProps : {
    currentData: this.currentName
  } 
  });
  modal.present();
}

}
