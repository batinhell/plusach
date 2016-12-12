import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout';
import { SignInComponent } from './sign-in/sign-in';

export const COMPONENTS = [
  LayoutComponent,
  SignInComponent
];

@NgModule({
  imports: [CommonModule],
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers: [],
})
export class ComponentsModule { }
