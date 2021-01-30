import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaporandataPageRoutingModule } from './laporandata-routing.module';

import { LaporandataPage } from './laporandata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaporandataPageRoutingModule
  ],
  declarations: [LaporandataPage]
})
export class LaporandataPageModule {}
