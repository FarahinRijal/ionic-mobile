import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLokasiPage } from './admin-lokasi.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLokasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLokasiPageRoutingModule {}
