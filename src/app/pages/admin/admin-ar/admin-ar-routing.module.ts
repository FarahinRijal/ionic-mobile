import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminArPage } from './admin-ar.page';

const routes: Routes = [
  {
    path: '',
    component: AdminArPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminArPageRoutingModule {}
