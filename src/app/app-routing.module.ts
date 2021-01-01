import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'userhome',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'userhome',
    loadChildren: () => import('./pages/user/userhome/userhome.module').then( m => m.UserhomePageModule)
  },
  {
    path: 'daftarkematian',
    loadChildren: () => import('./pages/user/daftarkematian/daftarkematian.module').then( m => m.DaftarkematianPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/user/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'analysis',
    loadChildren: () => import('./pages/user/analysis/analysis.module').then( m => m.AnalysisPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/user/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/user/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'modalpopup',
    loadChildren: () => import('./pages/user/modalpopup/modalpopup.module').then( m => m.ModalpopupPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
