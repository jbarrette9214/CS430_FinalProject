import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../estimate/step1/step1.module').then(m => m.Step1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../estimate/step2/step2.module').then(m => m.Step2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../estimate/step3/step3.module').then(m => m.Step3PageModule)
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
