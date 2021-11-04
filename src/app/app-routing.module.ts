import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
// import { DashboardModule } from './components/dashboard/dashboard.module';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent },
  {path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path: '**',pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
