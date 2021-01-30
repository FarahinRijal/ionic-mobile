import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLokasiPageRoutingModule } from './admin-lokasi-routing.module';

import { AdminLokasiPage } from './admin-lokasi.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLokasiPageRoutingModule,
    AgmCoreModule
  ],
  declarations: [AdminLokasiPage]
})
export class AdminLokasiPageModule {}
