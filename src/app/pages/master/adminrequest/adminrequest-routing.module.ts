import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminrequestPage } from './adminrequest.page';

const routes: Routes = [
  {
    path: '',
    component: AdminrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminrequestPageRoutingModule {}
