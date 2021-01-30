import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModalpopupPage } from './admin-modalpopup.page';

const routes: Routes = [
  {
    path: '',
    component: AdminModalpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModalpopupPageRoutingModule {}
