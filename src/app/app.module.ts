import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Approutes } from './app-routing.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { Config } from './config/config';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule  } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './service/auth.service';
import { FullComponent } from './layouts/full/full.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';
import { SpinnerComponent } from './shared/spinner.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavigationComponent } from './shared/header-navigation/navigation.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FullComponent,
    NotFoundComponent,
    SpinnerComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(Config.config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterialModule,
    PerfectScrollbarModule
  ],
  providers: [
    AuthService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
