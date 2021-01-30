import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminSearchPageRoutingModule } from './admin-search-routing.module';

import { AdminSearchPage } from './admin-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminSearchPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminSearchPage]
})
export class AdminSearchPageModule {}
