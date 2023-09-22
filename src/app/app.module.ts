import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from "./shared/shared.module";

import { AppComponent } from './app.component';

// Locales config for the app
import localeES from '@angular/common/locales/es'
import localeDeCh from '@angular/common/locales/de-CH'
import { registerLocaleData } from '@angular/common'

registerLocaleData(localeES)
registerLocaleData(localeDeCh)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
