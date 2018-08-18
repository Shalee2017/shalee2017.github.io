import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBoxComponent } from './top-box/top-box.component';
import { MainbodyComponent } from './mainbody/mainbody.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBoxComponent,
    MainbodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
