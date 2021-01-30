import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.page.html',
  styleUrls: ['./adminhome.page.scss'],
})
export class AdminhomePage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

   logout() {
    this.navCtrl.navigateRoot('/userhome');
  }

  carian() {
    this.navCtrl.navigateRoot('/admin-search');
  }

  analysis() {
    this.navCtrl.navigateRoot('/dashboard');
  }
  daftarkematian() {
    this.navCtrl.navigateRoot('/admin-daftarkematian');
  }

  semakan() {
    this.navCtrl.navigateRoot('/semakandata');
  }

  laporan() {
    this.navCtrl.navigateRoot('/laporandata');
  }
}
