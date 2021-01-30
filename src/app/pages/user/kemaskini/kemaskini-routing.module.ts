import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KemaskiniPage } from './kemaskini.page';

const routes: Routes = [
  {
    path: '',
    component: KemaskiniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KemaskiniPageRoutingModule {}
