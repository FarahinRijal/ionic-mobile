import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterhomePage } from './masterhome.page';

const routes: Routes = [
  {
    path: '',
    component: MasterhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterhomePageRoutingModule {}
