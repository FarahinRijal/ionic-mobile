import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  invalid = false;

  constructor(
    private ApiService : AuthService,
    private router: Router,
    private alertService : AlertService
  ) { }

  dashboard() {
    this.router.navigate(['/dashboard']);
  }

  calculator() {
    this.router.navigate(['/calculator']);
  }

  ngOnInit() {
  }

  luasForm = new FormGroup({
    luas : new FormControl(''),
    plot : new FormControl(''),
    panjang : new FormControl(''),
    lebar : new FormControl(''),
    area: new FormControl(''),
    tanah: new FormControl('')
  });

  masaForm = new FormGroup({
    luastanah : new FormControl(''),
    matisebulan : new FormControl(''),
    length : new FormControl(''),
    width : new FormControl(''),
    area: new FormControl(''),
    masa: new FormControl('')
  });

  // Keluasan Tanah Perkuburan Yang Masih Tinggal 
     tinggal : number;
     luas : string;
     plot : string;  
     panjang : number;
     lebar : number;

    Tinggal () {    
      let area1 = this.panjang * this.lebar; 
      this.luasForm.value.area = area1;  
      let A = this.luasForm.value.area; 
      console.log("area",A);
      this.tinggal = parseFloat(this.luas) - (parseFloat(this.plot) * area1);
      let tgl = this.tinggal;
      console.log("Tinggal",tgl);
      this.luasForm.value.tanah = tgl;  
      let B = this.luasForm.value.tanah; 
      console.log("Tanah",B);
      console.log("Tanah Tinggal:",this.luasForm.value, tgl);
      let data = this.luasForm.value;
      this.ApiService.tanahtinggal(data.area,data.luas,data.plot,data.tanah).subscribe( 
        data => {
          console.log(data);          
          this.invalid = false;
          this.alertService.presentToast("Rekod keluasan tanah berjaya ditambah.");
          this.router.navigate(['/calculator']);
        
      },
        error => {
          console.log(error);
          this.invalid = true;
          this.alertService.presentToast("tidak berjaya!");
          this.router.navigate(['/calculator']);
      });
      
    }

  // Keluasan Tanah Perkuburan yang Telah Digunakan
  
  jangkamasa : number;
  luastanah : string;
  matisebulan : string;  
  length : number;
  width : number;

  JangkaMasa () {
    let area = this.width * this.length; 
    this.masaForm.value.area = area;  
    let C = this.masaForm.value.area; 
    // console.log("area: ",C);
    this.jangkamasa = parseFloat(this.luastanah) / parseInt(this.matisebulan) * area;
    let masa = this.jangkamasa;
    console.log("Jangka: ",masa);
    this.masaForm.value.masa = masa;  
    let D = this.masaForm.value.masa; 
    // console.log("Masa: ",D);
    // console.log("Jangka Masa:",this.masaForm.value, masa);
    let data = this.masaForm.value;
    console.log("Jangka Masa:", data);
    this.ApiService.jangkamasa(data.luastanah,data.matisebulan,data.area,data.masa).subscribe( 
      data => {
        console.log(data);          
        this.invalid = false;
        this.alertService.presentToast("Rekod jangka masa berjaya ditambah.");
        this.router.navigate(['/calculator']);
      
    },
      error => {
        console.log(error);
        this.invalid = false;
        this.alertService.presentToast("tidak berjaya!");
        this.router.navigate(['/calculator']);
    });

  }

  
  @ViewChild('lineChart') lineChart;
  line: any;

  createLineChart() {
    this.line = new Chart(this.lineChart.nativeElement, {
      type: "line",
      data: {
        labels: ["Tidak Ternyata", "1954", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [
          {
            label: "Kematian",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [4, 1, 2, 2, 16, 23, 30,48,50,57,58,89,94,77,121,137,129,135,7,0],
            spanGaps: false
          }
        ]
      }
    });
  }
}
