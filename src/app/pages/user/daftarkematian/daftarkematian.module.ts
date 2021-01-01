import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarkematianPageRoutingModule } from './daftarkematian-routing.module';

import { DaftarkematianPage } from './daftarkematian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarkematianPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DaftarkematianPage]
})
export class DaftarkematianPageModule {}
