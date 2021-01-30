import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDaftarkematianPage } from './admin-daftarkematian.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDaftarkematianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDaftarkematianPageRoutingModule {}
