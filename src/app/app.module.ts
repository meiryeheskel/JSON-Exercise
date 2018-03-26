import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PeopleinfoComponent } from './peopleinfo/peopleinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleinfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
