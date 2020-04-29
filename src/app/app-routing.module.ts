import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'seller',
    loadChildren: () => import('./seller/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cashier',
    loadChildren: () => import('./cashier/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'generate',
    loadChildren: () => import('./cashier/generate/generate.module').then( m => m.GeneratePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./cashier/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./seller/transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'sell-history',
    loadChildren: () => import('./seller/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'regis-seller',
    loadChildren: () => import('./cashier/regis-seller/regis-seller.module').then( m => m.RegisSellerPageModule)
  },
  {
    path: 'isi-saldo',
    loadChildren: () => import('./user/isi-saldo/isi-saldo.module').then( m => m.IsiSaldoPageModule)
  },
  {
    path: 'create-qr',
    loadChildren: () => import('./seller/create-qr/create-qr.module').then( m => m.CreateQrPageModule)
  },
  {
    path: 'riwayatsaldo',
    loadChildren: () => import('./user/riwayatsaldo/riwayatsaldo.module').then( m => m.RiwayatsaldoPageModule)
  },
  { path: 'transaksi', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'riwayat-saldo',
    loadChildren: () => import('./user/riwayat-saldo/riwayat-saldo.module').then( m => m.RiwayatSaldoPageModule)
  },
  {
    path: 'riwayat-transaksi',
    loadChildren: () => import('./user/riwayat-transaksi/riwayat-transaksi.module').then( m => m.RiwayatTransaksiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
