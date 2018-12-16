import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularReactBrowserModule } from '@angular-react/core';
import { ButtonModule } from './angular-components/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularReactBrowserModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
