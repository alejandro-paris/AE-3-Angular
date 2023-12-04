import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { PanelControlComponent } from './components/panel-control/panel-control.component';
import { PanelControlModule } from './components/panel-control/panel-control.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PanelControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
