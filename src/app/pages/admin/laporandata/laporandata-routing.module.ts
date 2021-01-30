import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaporandataPage } from './laporandata.page';

const routes: Routes = [
  {
    path: '',
    component: LaporandataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaporandataPageRoutingModule {}
