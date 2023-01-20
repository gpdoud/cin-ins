import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorChangeComponent } from './vendor/vendor-change/vendor-change.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full' },

  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },

  { path:'vendor/list', component: VendorListComponent },
  { path:'vendor/create', component: VendorCreateComponent },
  { path:'vendor/detail/:id', component: VendorDetailComponent },
  { path:'vendor/change/:id', component: VendorChangeComponent },

  { path:'**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
