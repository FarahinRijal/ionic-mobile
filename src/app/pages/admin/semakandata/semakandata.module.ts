import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemakandataPageRoutingModule } from './semakandata-routing.module';

import { SemakandataPage } from './semakandata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemakandataPageRoutingModule
  ],
  declarations: [SemakandataPage]
})
export class SemakandataPageModule {}
