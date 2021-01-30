import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.page.html',
  styleUrls: ['./enquiry.page.scss'],
})
export class EnquiryPage implements OnInit {

  data = [];
  mySubscription : any;

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private router: Router,
    private authservice: AuthService,
    private alertService: AlertService,
    private env: EnvService
  ) 

  {   this.http.get(this.env.API_URL +  '/php/listenquiry.php').subscribe(data => {
      this.data.push(data);
      console.log(this.data);
      
     
      
      }, 
      error => console.error(error));
      
      // this.router.routeReuseStrategy.shouldReuseRoute = function () {
      //   return false;
      // };
      
      // this.mySubscription = this.router.events.subscribe((event) => {
      //   if (event instanceof NavigationEnd) {
      //     // Trick the Router into believing it's last link wasn't previously loaded
      //     this.router.navigated = false;
      //   }
      // });
  }
  
  // ngOnDestroy() {
  //   if (this.mySubscription) {
  //     this.mySubscription.unsubscribe();
  //   }
  // }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateRoot('/userhome');
  }

  refresh() {
    window.location.reload();
}

 reply(name,email, enquiry, status){
  console.log("reply");
  this.authservice.replyenq(name,email, enquiry, status).subscribe(result => {
  console.log("result",result);
  this.alertService.presentToast("Selesai membalas!");
  this.navCtrl.navigateRoot(['/masterhome']);
  },
  error => {
  //  console.log("reply");
  // console.log("result");
  // this.alertService.presentToast("Selesai membalas!");
  // setTimeout(() => {
  //   window.location.reload();
  //   }, 4000);
    console.log("error",error.status);
    
    if(error.status==200){
      this.navCtrl.navigateRoot(['/enquiry']);
    }
  }
 )
}

}
