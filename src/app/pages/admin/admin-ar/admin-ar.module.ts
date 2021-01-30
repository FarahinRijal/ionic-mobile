import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminArPageRoutingModule } from './admin-ar-routing.module';

import { AdminArPage } from './admin-ar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminArPageRoutingModule
  ],
  declarations: [AdminArPage]
})
export class AdminArPageModule {}
