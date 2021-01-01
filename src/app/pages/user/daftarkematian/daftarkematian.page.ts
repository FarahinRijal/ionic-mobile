import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-daftarkematian',
  templateUrl: './daftarkematian.page.html',
  styleUrls: ['./daftarkematian.page.scss'],
})
export class DaftarkematianPage implements OnInit {

  invalidRegister = false;
  dkForm: FormGroup;
  locationCoords: any;
  timetest: any;
  postData = {
    userid: '',
    name: '',
    dob: '',
    dod: '',
    plot: '',
    location: '',
    latitude: '',
    longitude: ''
    };

    locList: any = ['Kangkar Pulai',
    'Impian Emas', ]
    
  constructor(
    private http: HttpClient,
    private env: EnvService,
    private fb: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private geolocation: Geolocation,
  )
   { 
    this.dkForm = fb.group({
      'userid': ['', Validators.compose([Validators.required])],
      'name': ['', Validators.compose([Validators.required])],
      'dob': ['', Validators.compose([Validators.required])], // Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      'dod': ['', Validators.compose([Validators.required])],
      'plot': ['', Validators.compose([Validators.required])],
      'location': ['', Validators.compose([Validators.required])],
      'latitude': [''],
      'longitude': ['']
    });

    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: ""
   }
   this.timetest = Date.now();
  }

  ngOnInit() {
  }

  onClick() {
    this.http.get(this.env.API_URL + '/php/getjangkamasa.php').subscribe(data2 => {
      console.log("Jangka Masa",data2);
      }, 
        error => console.error(error)
        ); 
  }

  validateInputs() {
    let userid = this.postData.userid.trim();
    let name = this.postData.name.trim();
    let dob = this.postData.dob.trim();
    let dod = this.postData.dod.trim();
    let plot = this.postData.plot.trim(); 
    let location = this.postData.plot.trim();    
    // let latitude = this.postData.latitude.trim();
    // let longitude = this.postData.longitude.trim();
    return (
    this.postData.userid &&
    this.postData.name &&
    this.postData.dob &&
    this.postData.dod &&
    this.postData.plot &&
    this.postData.location &&
    // this.postData.latitude &&
    // this.postData.longitude &&
    userid.length > 0 &&
    name.length > 0 &&
    dob.length > 0 &&
    dod.length > 0 &&
    plot.length > 0 &&
    location.length > 0 
    // &&
    // latitude.length > 0 &&
    // longitude.length > 0
    );
    }

    latitude;
    longitude;

    daftar(){
      if(this.validateInputs()){
        console.log("lat: ", this.latitude);
        this.authService.insertKubur(this.postData.userid, this.postData.name, this.postData.dob, this.postData.dod, this.postData.plot, this.postData.location, this.latitude, this.longitude).subscribe( 
          data => {
            console.log(data);            
            this.invalidRegister = false;
            this.alertService.presentToast("Rekod baru berjaya didaftar!");
            this.navCtrl.navigateRoot('/userhome');
          
        },
          error => {
            console.log(error);
            this.invalidRegister = true;
            this.alertService.presentToast("Rekod baru gagal didaftar!");
            this.navCtrl.navigateRoot('/userhome');
        }); 
        
      } else {
        this.alertService.presentToast("Sila isi ruangan yang kosong!");
      console.log('Invalid field');
      }
    }

    detect() {
      console.log("current loc");
      this.geolocation.getCurrentPosition({
        timeout: 25000,
        enableHighAccuracy: true,
        maximumAge: 3600
      }).then((res) => {
        this.latitude = res.coords.latitude;
        this.longitude = res.coords.longitude;
        console.log("locs:", this.latitude, this.longitude);
      }).catch((e) => {
        console.log(e);
      });
    }
}
