import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminrequestPageRoutingModule } from './adminrequest-routing.module';

import { AdminrequestPage } from './adminrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminrequestPageRoutingModule
  ],
  declarations: [AdminrequestPage]
})
export class AdminrequestPageModule {}
