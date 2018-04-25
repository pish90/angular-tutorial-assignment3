import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClicksComponent } from './clicks/clicks.component';
import { ClickComponent } from './click/click.component';


@NgModule({
  declarations: [
    AppComponent,
    ClicksComponent,
    ClickComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
