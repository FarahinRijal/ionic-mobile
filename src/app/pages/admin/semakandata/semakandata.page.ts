import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-semakandata',
  templateUrl: './semakandata.page.html',
  styleUrls: ['./semakandata.page.scss'],
})
export class SemakandataPage implements OnInit {
  
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
      this.http.get(this.env.API_URL +  '/php/getkubur.php').subscribe(data => {
        this.data.push(data);
        console.log(this.data);
       
        }, 
        error => console.error(error));    

   }

  ngOnInit() {
  }

  refresh() {
    // setTimeout(() => {
        window.location.reload();
      // }, 3000);
  }

  logout() {
    this.navCtrl.navigateRoot('/userhome');
  }

  accept(userid, name, dob, dod, plot, latitude, longitude) {
    console.log("accept");
    this.authservice.acceptkubur(userid, name, dob, dod, plot, latitude, longitude).subscribe(result => {
    console.log("result");
    console.log(result)
    },
    error => {
      console.log("admin accepted");
      console.log(error.status);
      this.alertService.presentToast(" Pendaftaran baru berjaya ditambah"); 
      // setTimeout(() => {
      //   window.location.reload();
      //   }, 3000);

      if(error.status==200){
           this.navCtrl.navigateRoot(['/adminhome']);
      }
    }
   )
   }

   reject(userid, name, dob, dod, plot) {
    console.log("reject");
    this.authservice.rejectkubur(userid, name, dob, dod, plot).subscribe(result => {
    console.log("result");
    console.log(result);    
    this.alertService.presentToast(" Pendaftaran baru tidak berjaya ditambah");    
    this.navCtrl.navigateRoot(['/adminhome']);
    // setTimeout(() => {
    //   window.location.reload();
    //   }, 3000);
    },
    error => {
      console.log("admin rejected");
      console.log(error.status);

      if(error.status==200){
           this.navCtrl.navigateRoot(['/adminhome']);
      }
    }
   )
   }
}
