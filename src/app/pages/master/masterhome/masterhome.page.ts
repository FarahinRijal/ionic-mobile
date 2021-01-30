import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';;

@Component({
  selector: 'app-masterhome',
  templateUrl: './masterhome.page.html',
  styleUrls: ['./masterhome.page.scss'],
})
export class MasterhomePage implements OnInit {

  constructor(
    private navCtrl: NavController
   )
     {  }

  ngOnInit() {
  }

  request() {
    this.navCtrl.navigateRoot('/adminrequest');
  }

  enquiry() {
    this.navCtrl.navigateRoot('/enquiry');
  }

  logout() {
    this.navCtrl.navigateRoot('/userhome');
  }

}
