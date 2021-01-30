import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-lokasi',
  templateUrl: './lokasi.page.html',
  styleUrls: ['./lokasi.page.scss'],
})
export class LokasiPage implements OnInit {

  latitude: number;
  longitude: number;
  nama: string;
  plot:string;

  lat : number;
  lng : number;
  nam : number;
  plo : number;
  previous;
  start:string;

  // lat = 1.554812; 1.554720
  // lng =  103.584084; 103.584594

  constructor(
    private route: ActivatedRoute,
    private launchNavigator:LaunchNavigator,
    private router: Router
  ) { }

  ngOnInit() { 
    this.latitude = this.route.snapshot.queryParams.data1;
    this.longitude = this.route.snapshot.queryParams.data2;
    this.nama = this.route.snapshot.queryParams.data3;
    this.plot = this.route.snapshot.queryParams.data4;
    console.log("receive info-> ", "lat:",this.route.snapshot.queryParams.data1, "lng:",this.route.snapshot.queryParams.data2, "nama:",this.route.snapshot.queryParams.data3, "plot:",this.route.snapshot.queryParams.data4); 
    this.lat = parseFloat(this.route.snapshot.queryParams.data1);
    this.lng = parseFloat(this.route.snapshot.queryParams.data2);
    this.nam = parseFloat(this.route.snapshot.queryParams.data3);
    this.plo = parseFloat(this.route.snapshot.queryParams.data4);

    this.start = "";

  }

  clickedMarker(infowindow) {
    if (this.previous) {
        this.previous.close();
    }
    this.previous = infowindow;
 }

 navigateLocation(){
  console.log("this lat:", this.lat);
  console.log("this lng:", this.lng);
  // console.log("this latitude:", this.latitude);
  // console.log("this longitude:", this.longitude);
  let destination = [this.lat,this.lng];  
  console.log("destination:", destination);
  let options: LaunchNavigatorOptions = {
   app: this.launchNavigator.APP.GOOGLE_MAPS,
            // start:[this.latitude,this.longitude]
            start: this.start
     };
 this.launchNavigator.navigate(destination,options)
 .then(success =>{
   console.log(success);
 },error=>{
   console.log(error);
 })

}

ar() {
  this.router.navigate(['/ar']);
}

}

