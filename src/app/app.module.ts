import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DossierpersonnelComponent } from './dossierpersonnel/dossierpersonnel.component';
import { CongesComponent } from './conges/conges.component';
import { SalairesComponent } from './salaires/salaires.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilComponent } from './profil/profil.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    DashboardComponent,
    DossierpersonnelComponent,
    CongesComponent,
    SalairesComponent,
    HeaderComponent,
    FooterComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
