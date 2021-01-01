import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarkematianPage } from './daftarkematian.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarkematianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarkematianPageRoutingModule {}
