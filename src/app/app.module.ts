import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common'

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    AppComponent, 
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  entryComponents: [
      ButtonComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}]

})
export class AppModule { 
  constructor (private injector: Injector) {}

  ngDoBootstrap() {
    const customElement = createCustomElement(ButtonComponent, {injector: this.injector});
    customElements.define('app-button', customElement);
  }
} 
