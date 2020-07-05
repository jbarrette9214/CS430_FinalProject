import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContacttowPage } from './contacttow.page';

const routes: Routes = [
  {
    path: '',
    component: ContacttowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContacttowPageRoutingModule {}
