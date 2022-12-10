import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { EtudiantComponent } from '../../pages/etudiant/etudiant.component';
import { EquipesComponent } from '../../pages/equipes/equipes.component';
import { ContratsComponent } from '../../pages/contrats/contrats.component';
import { DepartementsComponent } from '../../pages/departements/departements.component';
import { UniversitesComponent } from '../../pages/universites/universites.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
  
    // RtlComponent
  
    DashboardComponent,
       EtudiantComponent,
       EquipesComponent,
       ContratsComponent,
       DepartementsComponent,
       UniversitesComponent
  ]
})
export class AdminLayoutModule {}
