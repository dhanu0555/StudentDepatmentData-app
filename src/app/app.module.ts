import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EEEComponent } from './eee/eee.component';
import { ECEComponent } from './ece/ece.component';
import { CSEComponent } from './cse/cse.component';

@NgModule({
  declarations: [
    AppComponent,
    EEEComponent,
    ECEComponent,
    CSEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
