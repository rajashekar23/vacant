import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { AddRoomPageComponent } from './modules/add-room-page/add-room-page.component';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/services/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddRoomPageComponent,
    RoomCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
