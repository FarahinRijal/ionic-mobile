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
  },
  {
    path: 'kemaskini',
    loadChildren: () => import('./pages/user/kemaskini/kemaskini.module').then( m => m.KemaskiniPageModule)
  },
  {
    path: 'lokasi',
    loadChildren: () => import('./pages/user/lokasi/lokasi.module').then( m => m.LokasiPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/user/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/user/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/user/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'masterhome',
    loadChildren: () => import('./pages/master/masterhome/masterhome.module').then( m => m.MasterhomePageModule)
  },
  {
    path: 'adminrequest',
    loadChildren: () => import('./pages/master/adminrequest/adminrequest.module').then( m => m.AdminrequestPageModule)
  },
  {
    path: 'enquiry',
    loadChildren: () => import('./pages/master/enquiry/enquiry.module').then( m => m.EnquiryPageModule)
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./pages/admin/adminhome/adminhome.module').then( m => m.AdminhomePageModule)
  },
  {
    path: 'semakandata',
    loadChildren: () => import('./pages/admin/semakandata/semakandata.module').then( m => m.SemakandataPageModule)
  },
  {
    path: 'laporandata',
    loadChildren: () => import('./pages/admin/laporandata/laporandata.module').then( m => m.LaporandataPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./pages/admin/calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'admin-lokasi',
    loadChildren: () => import('./pages/admin/admin-lokasi/admin-lokasi.module').then( m => m.AdminLokasiPageModule)
  },
  {
    path: 'admin-modalpopup',
    loadChildren: () => import('./pages/admin/admin-modalpopup/admin-modalpopup.module').then( m => m.AdminModalpopupPageModule)
  },
  {
    path: 'admin-search',
    loadChildren: () => import('./pages/admin/admin-search/admin-search.module').then( m => m.AdminSearchPageModule)
  },
  {
    path: 'admin-daftarkematian',
    loadChildren: () => import('./pages/admin/admin-daftarkematian/admin-daftarkematian.module').then( m => m.AdminDaftarkematianPageModule)
  },
  {
    path: 'ar',
    loadChildren: () => import('./pages/user/ar/ar.module').then( m => m.ArPageModule)
  },
  {
    path: 'admin-ar',
    loadChildren: () => import('./pages/admin/admin-ar/admin-ar.module').then( m => m.AdminArPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
