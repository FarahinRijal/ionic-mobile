import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDaftarkematianPageRoutingModule } from './admin-daftarkematian-routing.module';

import { AdminDaftarkematianPage } from './admin-daftarkematian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDaftarkematianPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminDaftarkematianPage]
})
export class AdminDaftarkematianPageModule {}
