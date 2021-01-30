import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  postData = {
    q1: '',
    q2: '',
    q3:'',
    q4:'',
    q5:'',
    q6:'',
    q7:'',
    q8:'',
    q9:'',
    q10:'',
    q11:'',
    q12:'',
    };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
  ) { 

  }

  fbForm = new FormGroup({
    q1: new FormControl('', Validators.required),
    q2: new FormControl('', Validators.required),
    q3: new FormControl('', Validators.required),
    q4: new FormControl('', Validators.required),
    q5: new FormControl('', Validators.required),
    q6: new FormControl('', Validators.required),
    q7: new FormControl('', Validators.required),
    q8: new FormControl('', Validators.required),
    q9: new FormControl('', Validators.required),
    q10: new FormControl('', Validators.required),
    q11: new FormControl('', Validators.required),
    q12: new FormControl('', Validators.required),

  });
  

  ngOnInit() {
  
  }


  //data and error tertukar, popup tidak berjaya tapi data masuk db
    submit() {
      let data = this.fbForm.value;
      console.log("submit:",data);
        this.authService.feedback(this.postData.q1, this.postData.q2, this.postData.q3, this.postData.q4, this.postData.q5, this.postData.q6, this.postData.q7, this.postData.q8, this.postData.q9, this.postData.q10, this.postData.q11, this.postData.q12).subscribe(
          // error => {
          //   console.log(error);
          //   this.alertService.presentToast("Maklum balas anda tidak berjaya dihantar!");
          // },
          data => {
            console.log(data);
            this.alertService.presentToast("Maklum balas anda berjaya dihantar. Terima kasih!");
            this.navCtrl.navigateRoot('/userhome');
          },
          error => {
            console.log(error);
            this.alertService.presentToast("Maklum balas anda tidak berjaya dihantar!");
          },
          // data => {
          //     console.log(data);
          //     this.alertService.presentToast("Maklum balas anda berjaya dihantar. Terima kasih!");
          //     this.navCtrl.navigateRoot('/userhome');
            // }
            );
    } 


}
