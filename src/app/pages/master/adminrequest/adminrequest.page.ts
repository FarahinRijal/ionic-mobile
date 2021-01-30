import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-adminrequest',
  templateUrl: './adminrequest.page.html',
  styleUrls: ['./adminrequest.page.scss'],
})
export class AdminrequestPage implements OnInit {

  data = [];
  mySubscription: any;

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private authservice: AuthService,
    private alertService: AlertService,
    private env: EnvService
  )
     { 
      this.http.get(this.env.API_URL +  '/php/getadmin.php').subscribe(data => {
      this.data.push(data);
      console.log(this.data);
       
        }, 
        error => console.error(error));  
   }

  refresh() {
        window.location.reload();
  }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateRoot('/userhome');
  }

   addRow(fullname,username,email, password, phone, job){
      console.log("accept");
      this.authservice.accept(fullname,username,email, password, phone, job).subscribe(result => {
      console.log("result");
      console.log(result)

    },
    error => {
      console.log("admin accepted");
      console.log("result");
      this.alertService.presentToast("Berjaya menjadi admin!");
      console.log(error.status);
        
      if(error.status==200){
        this.navCtrl.navigateRoot(['/masterhome']);
        }
    }
   )
}

   deleteRow(fullname,username,email, password, phone, job){
    console.log("reject");
    this.authservice.reject(fullname,username,email, password, phone, job).subscribe(result => {
    console.log("result");
    console.log(result)
    this.alertService.presentToast("Tidak berjaya menjadi admin!");
    // setTimeout(() => {
    //   window.location.reload();
    // }, 4000);
    },

    error => {
      console.log("admin rejected");
      this.alertService.presentToast("Tidak berjaya menjadi admin!");
      console.log(error.status);
      
      if(error.status==200){
        this.navCtrl.navigateRoot(['/masterhome']);
      }
    }
   )
}
}
