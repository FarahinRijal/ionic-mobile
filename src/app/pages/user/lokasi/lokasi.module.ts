import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LokasiPageRoutingModule } from './lokasi-routing.module';

import { LokasiPage } from './lokasi.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LokasiPageRoutingModule,
    AgmCoreModule
  ],
  declarations: [LokasiPage]
})
export class LokasiPageModule {}
