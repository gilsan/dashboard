import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatGridListModule,
  MatCheckboxModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule
  ]
})
export class MaterialModule {
}
