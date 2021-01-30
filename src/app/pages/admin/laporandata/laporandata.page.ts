import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-laporandata',
  templateUrl: './laporandata.page.html',
  styleUrls: ['./laporandata.page.scss'],
})
export class LaporandataPage implements OnInit{

  data = [];
  mySubscription: any;

  constructor(
    private navCtrl: NavController,  
    private authservice: AuthService,
    private alertService: AlertService,
    private http: HttpClient,
    private router: Router,
    private env: EnvService
  ) 
  
  {  
        this.http.get(this.env.API_URL +  '/php/correctionlist.php').subscribe(data => {
        this.data.push(data);
        console.log(this.data);
       
        }, 
        error => console.error(error));   

        // this.router.routeReuseStrategy.shouldReuseRoute = function () {
        // return false;
        // };
        
        // this.mySubscription = this.router.events.subscribe((event) => {
        // if (event instanceof NavigationEnd) {
        //  this.router.navigated = false;
        //   }
        // });
 }

 ngOnInit() {
    this.http.get(this.env.API_URL +  '/php/correctionlist.php').subscribe(data => {
      this.data.push(data);
      console.log(this.data);
     
      }, 
      error => console.error(error));  

       this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
        };
        
        this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
         this.router.navigated = false;
          }
        });
  }

  refresh() {
    window.location.reload();
}

  logout() {
    this.navCtrl.navigateRoot('/userhome');
  }

  //  accept(id,name,dob,dod,plot,corrname,corrdob,corrdod,corrplot,testkubur_id) {
  //   console.log("accept -> user id", testkubur_id );
  //   this.authservice.acceptlaporan(id,name,dob,dod,plot,corrname,corrdob,corrdod,corrplot,testkubur_id).subscribe(result => {
  //   console.log("result");
  //   console.log(result)
  //   // this.alertService.presentToast(" Laporan berjaya diterima!");
  //   // this.navCtrl.navigateRoot('/adminhome');
  //   },
  //   error => {
  //     console.log("error:");
  //     console.log(error.status);
  //     this.alertService.presentToast(" Laporan berjaya diterima");
  //     this.ngOnInit();
  //     this.router.navigate(['/adminhome']);
  //     // setTimeout(() => {
  //     // window.location.reload();
  //     // }, 3000);
  //     // this.router.navigate(['/adminhome']);
  //   }
  //  )
  //  }

   accept(id,name,dob, dod, plot,corrname, corrdob, corrdod, corrplot,testkubur_id) {
    console.log("'reject' -> user id", testkubur_id);
    this.authservice.acceptlaporan(id,name,dob,dod,plot,corrname,corrdob,corrdod,corrplot,testkubur_id).subscribe(result => {
    console.log("result");
    console.log(result)
    this.alertService.presentToast(" Laporan berjaya diterima");
    this.navCtrl.navigateRoot('/adminhome');
    },
    error => {
      console.log("error:");
      console.log(error.status)
      this.alertService.presentToast(" Laporan berjaya diterima");
      this.navCtrl.navigateRoot('/adminhome');
      // }
    }
   )
   }

   reject(name,dob, dod, plot,corrname, corrdob, corrdod, corrplot,testkubur_id) {
    console.log("'reject' -> user id", testkubur_id);
    this.authservice.rejectlaporan(name,dob,dod,plot,corrname,corrdob,corrdod,corrplot,testkubur_id).subscribe(result => {
    console.log("result");
    console.log(result)
    this.alertService.presentToast(" Laporan ditolak");
    this.navCtrl.navigateRoot('/adminhome');
    },
    error => {
      console.log("error:");
      console.log(error.status)
      this.navCtrl.navigateRoot('/adminhome');
      // }
    }
   )
   }



}
