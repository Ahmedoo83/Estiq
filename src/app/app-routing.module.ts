import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AddressComponent } from './address/address.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashComponent },
  {path: 'address' , component: AddressComponent},
  // {path: 'skillLevel' , component: SkilLevelListComponent},
  // {path: 'skills' , component: SkillListComponent},
  // { path: '',
  //   redirectTo: '/about',
  //   pathMatch: 'full'
  // },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
