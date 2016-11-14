import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './sideMenu/sideMenu.component';
import { MapComponent } from './map/map.component';

import { EventService } from './events/event.service';

@NgModule({
  imports: [BrowserModule, HttpModule ],
  declarations: [AppComponent, HeaderComponent, SideMenuComponent, MapComponent],
  bootstrap: [AppComponent],
  providers: [
      EventService
  ]
})
export class AppModule { }
