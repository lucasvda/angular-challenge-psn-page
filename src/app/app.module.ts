import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './src/app/components/menu-bar/menu-bar.component';
import { CardComponent } from './src/app/components/card/card.component';
import { CardImgComponent } from './src/app/components/card/card-img/card-img.component';
import { CardTagComponent } from './src/app/components/card/card-tag/card-tag.component';
import { CardInfoComponent } from './src/app/components/card/card-info/card-info.component';
import { HomeComponent } from './src/app/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CardComponent,
    CardImgComponent,
    CardTagComponent,
    CardInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
