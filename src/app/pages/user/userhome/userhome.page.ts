import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.page.html',
  styleUrls: ['./userhome.page.scss'],
})
export class UserhomePage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  search () {
    this.router.navigate(['/search'])
  }

  login () {
    this.router.navigate(['/login'])
  }

  register () {
    this.router.navigate(['/register'])
  }

  setting () {
    this.router.navigate(['/setting'])
  }

  analysis () {
    this.router.navigate(['/analysis'])
  }

  registerkematian () {
    this.router.navigate(['/daftarkematian'])
  }
}
