import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { Employee } from 'src/app/services/app.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-kemaskini',
  templateUrl: './kemaskini.page.html',
  styleUrls: ['./kemaskini.page.scss'],
})
export class KemaskiniPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  currentName: Data = new Employee();
  passedId = null;
  

  ngOnInit() {
    console.log("modal kemaskini");
    this.passedId = this.navParams.get('currentData');    
    console.log("current ID: ",this.passedId.id); 
  }

  dismiss() {
    this.modalController.dismiss();
  }

  close() {
    this.modalController.dismiss();
    this.alertService.presentToast("Pembetulan rekod dibatalkan");
    // this.router.navigate(['/search']);
  }

  

  updateForm = new FormGroup({
    nama : new FormControl('', Validators.required),
    dob : new FormControl('', Validators.required),
    dod : new FormControl('', Validators.required),
    plot : new FormControl('', Validators.required),
    corrnama: new FormControl('', Validators.required),
    corrdob:new FormControl('', Validators.required),
    corrdod: new FormControl('', Validators.required),
    corrplot: new FormControl('', Validators.required),
});

update(){
  console.log("old data ->",this.passedId);
  let oldname = this.passedId.nama;
  let olddob = this.passedId.dob;
  let olddod = this.passedId.dod;
  let oldplot = this.passedId.plot;
  let testkubur_id = this.passedId.id;
  // console.log("nama lama:", oldname);
  // console.log("dob lama:", olddob);
  // console.log("dod lama:", olddod);
  // console.log("plot lama:", oldplot);
  // console.log("testkubur_id:", testkubur_id);
  this.updateForm.value.nama = oldname;
  this.updateForm.value.dob = olddob;
  this.updateForm.value.dod = olddod;
  this.updateForm.value.plot = oldplot;
  this.updateForm.value.id = testkubur_id;
  // var dateFormat = olddob.split('T')[0]; 
  // console.log("DOB:",dateFormat);
  let edit = this.updateForm.value;
  console.log("updated data",edit);
    this.authService.correction(edit.nama,edit.dob,edit.dod,edit.plot,edit.corrnama,edit.corrdob,edit.corrdod,edit.corrplot,edit.id).subscribe(result => {
    console.log("result");
    console.log(result['message']);
    if(result['message']=='success'){
      this.alertService.presentToast("Laporan berjaya dihantar");
      this.modalController.dismiss();
      }
   
   else{
    this.alertService.presentToast("Laporan terdahulu masih dalam proses");
    this.modalController.dismiss();
   }
   },
   error => {
     console.log("error: ",error);
     this.modalController.dismiss();
   })
  }


}
