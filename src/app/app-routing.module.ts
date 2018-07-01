import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

export const Approutes: Routes = [
{ path: '', component: LoginComponent},
{ path: 'signup', component: SignupComponent },
{
    path: 'starter',
    component: FullComponent,
    children: [
       // { path: '', redirectTo: '/starter', pathMatch: 'full' },
        { path: 'starter',   loadChildren: './starter/starter.module#StarterModule' },
        { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
        { path: 'panel',     loadChildren: './pannel/panel.module#PanelModule'}
    ]
},
{
  path: 'component',
  component: FullComponent,
  children: [
      { path: '', loadChildren: './component/component.module#ComponentsModule' },
  ]
},
 {
   path: 'panel',
   component: FullComponent,
   children: [
     { path: '', loadChildren: './pannel/panel.module#PanelModule' },
   ]
 },
{
    path: '**',
    component: NotFoundComponent
   // redirectTo: '/starter'
}
];


