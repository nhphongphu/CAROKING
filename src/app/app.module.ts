import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableComponent } from './Pages/table/table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material

// Import Header module:

// Import Main Module
import { MainModule } from './Pages/main/main.module'

// Import Footer module:
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu'
// import flex layout module
import { FlexLayoutModule } from '@angular/flex-layout';
import { WinnerDialogComponent } from './Pages/winner-dialog/winner-dialog.component';
import { FooterComponent } from '../app/components/footer/footer.component'
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../src/environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    WinnerDialogComponent,
    NavbarComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MainModule,
    FlexLayoutModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
