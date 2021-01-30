import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminModalpopupPageRoutingModule } from './admin-modalpopup-routing.module';

import { AdminModalpopupPage } from './admin-modalpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminModalpopupPageRoutingModule
  ],
  declarations: [AdminModalpopupPage]
})
export class AdminModalpopupPageModule {}
