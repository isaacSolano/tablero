// Util modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Default modules
import { AppComponent } from './app.component';
import { CasillaComponent } from './casilla/casilla.component';

// Simple modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    CasillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
