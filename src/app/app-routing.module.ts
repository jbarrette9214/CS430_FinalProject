import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'estimatetabs',
    loadChildren: () => import('./tabs/estimateTabs/tabs.module').then( m => m.TabsPageModule)
    
  },
  {
    path: 'contacttow',
    loadChildren: () => import('./pages/contacttow/contacttow.module').then( m => m.ContacttowPageModule)
  },
 /* {
    path: 'contact',
    loadChildren: () => import('./tabs/contact-tabs/contact-tabs.module').then( m => m.ContactTabsPageModule)
  }
  ,
  {
    path: 'step1',
    loadChildren: () => import('./tabs/contactpages/step1/step1.module').then( m => m.Step1PageModule)
  },
  {
    path: 'step2',
    loadChildren: () => import('./tabs/contactpages/step2/step2.module').then( m => m.Step2PageModule)
  }
  /*,
  {
    path: 'tabs/step1',
    loadChildren: () => import('./tabs/estimate/step1/step1.module').then( m => m.Step1PageModule)
  },

  {
    path: 'step2',
    loadChildren: () => import('./tabs/estimate/step2/step2.module').then( m => m.Step2PageModule)
  },
  {
    path: 'step3',
    loadChildren: () => import('./tabs/estimate/step3/step3.module').then( m => m.Step3PageModule)
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
