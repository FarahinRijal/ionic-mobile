import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemakandataPage } from './semakandata.page';

const routes: Routes = [
  {
    path: '',
    component: SemakandataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemakandataPageRoutingModule {}
