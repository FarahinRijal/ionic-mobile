import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { LoginPage } from '../login/login.page';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  postData = {
    fullname: '',
    email: '',
    phone: '',
    job: '',
    username: '',
    password: ''
    };

  constructor(private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private fb: FormBuilder
  ) 
  { 
    this.registerForm = fb.group({
      'fullname': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required])], // Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      'phone': ['', Validators.compose([Validators.required])],
      'job': ['', Validators.compose([Validators.required])],
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });
  }
  ngOnInit() {
 
  }

  // On Login button tap, dismiss Register modal and open login Modal
  async loginModal() {
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }

  validateInputs() {
    let fullname = this.postData.fullname.trim();
    let email = this.postData.email.trim();
    // let phone = this.postData.phone.trim();
    let job = this.postData.job.trim();
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    return (
    this.postData.fullname &&
    this.postData.email &&
    this.postData.phone &&
    this.postData.job &&
    this.postData.username &&
    this.postData.password &&
    fullname.length > 0 &&
    email.length > 0 &&
    // phone.length > 0 &&
    job.length > 0 &&
    username.length > 0 &&
    password.length > 0
    );
    }

  registerAction() {
    if(this.validateInputs()){
      this.authService.register(this.postData.username, this.postData.fullname, this.postData.email, this.postData.password, this.postData.job, this.postData.phone).subscribe(
        data => {
          console.log(data);
          this.alertService.presentToast("Pendaftaran Berjaya. Akaun anda sedang diproses. Sila tunggu. Terima kasih!");
          this.navCtrl.navigateRoot('/userhome');
        },
        error => {
          console.log(error);
          this.alertService.presentToast("Pendaftaran tidak berjaya. Nama pengguna dan kata laluan telah wujud!");
        },
      );
    } else {
      this.alertService.presentToast("Sila isi ruangan yang kosong!");
      console.log('Invalid field');
    }
  }

}
   

