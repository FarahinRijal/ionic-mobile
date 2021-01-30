import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSearchPage } from './admin-search.page';

const routes: Routes = [
  {
    path: '',
    component: AdminSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSearchPageRoutingModule {}
