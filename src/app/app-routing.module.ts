import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalairesComponent } from './salaires/salaires.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DossierpersonnelComponent } from './dossierpersonnel/dossierpersonnel.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CongesComponent } from './conges/conges.component';
import {ProfilComponent} from "./profil/profil.component";

const routes: Routes = [
    {path:'connexion',component:ConnexionComponent},
    {path:'',component:ConnexionComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"salaires",component:SalairesComponent},
    {path:"dossierpersonnel",component:DossierpersonnelComponent},
    {path:"conges",component:CongesComponent},
    {path:"profil",component: ProfilComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
