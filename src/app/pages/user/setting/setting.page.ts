import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  contact () {
    this.router.navigate(['/contact']);
  }

  feedback() {
    this.router.navigate(['/feedback']);
  }

  info () {
    this.router.navigate(['/info']);
  }
}
