import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostActiveComponent } from './most-active-quib/most-active.component';
import { AuthGuardService as AuthGuard } from '../_services/auth-guard.service';
import { RecentQuibComponent } from './recent-quib/recent-quib.component';

const routes: Routes = [
  {
    path: '',
    component: MostActiveComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'most-active', component: MostActiveComponent
  },
  {
    path: 'recent-quib', component: RecentQuibComponent
  },
  
 
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostActiveRoutingModule { }
