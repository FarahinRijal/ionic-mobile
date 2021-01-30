import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { RegisterPage } from '../register/register.page';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  invalidLogin = false;
  loginForm: FormGroup;
  postData = {
    username: '',
    password: ''
    };

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  )
   {
    this.loginForm = formBuilder.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])],
    });
   }

  ngOnInit() {

  }
  
  // Dismiss Login Modal
  // dismissLogin() {
  //   this.modalController.dismiss();
    // this.navCtrl.navigateRoot('/landing');
  // }

  // On Register button tap, dismiss login modal and open register modal
  async registerModal() {
    // this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

  validateInputs() {
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    return (
    this.postData.username &&
    this.postData.password &&
    username.length > 0 &&
    password.length > 0
    );
    }

    loginAction() {
      if (this.validateInputs()){
        this.authService.login(this.postData.username, this.postData.password).subscribe(
          data => {
           
            this.invalidLogin = false;
            if(data=="admin"){
              this.alertService.presentToast("Anda berjaya log masuk sebagai admin!");
               this.navCtrl.navigateRoot(['/adminhome']);
            }
            else if(data=="master"){
              this.alertService.presentToast("Anda berjaya log masuk sebagai master!");
              this.navCtrl.navigateRoot(['/masterhome']);
            }
            else{
              this.alertService.presentToast("Akaun tidak wujud/masih dalam proses!");
            }
          },
          error => {
            console.log(error);
            this.invalidLogin = true;
            this.alertService.presentToast("Log Masuk tidak berjaya!");
          },
        );
      } else {
        this.alertService.presentToast("Sila masukkan nama pengguna/kata laluan");
        console.log('Please enter username or password');
      }
    }

}

