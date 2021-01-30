import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterhomePageRoutingModule } from './masterhome-routing.module';

import { MasterhomePage } from './masterhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasterhomePageRoutingModule
  ],
  declarations: [MasterhomePage]
})
export class MasterhomePageModule {}
