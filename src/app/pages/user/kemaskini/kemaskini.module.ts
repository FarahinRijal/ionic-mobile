import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KemaskiniPageRoutingModule } from './kemaskini-routing.module';

import { KemaskiniPage } from './kemaskini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KemaskiniPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [KemaskiniPage]
})
export class KemaskiniPageModule {}
