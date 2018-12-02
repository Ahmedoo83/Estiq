import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AddressComponent } from './address/address.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { SkillLevelMgmtComponent } from './skill-level-mgmt/skill-level-mgmt.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashComponent },
  {path: 'address' , component: AddressComponent},
 {path: 'about' , component: AboutComponent},
 {path: 'skill' , component: AboutComponent},
 {path: 'skillLevel' , component: SkillLevelMgmtComponent},
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
