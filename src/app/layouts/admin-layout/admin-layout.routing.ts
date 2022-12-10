import { Routes } from "@angular/router";
import { ContratsComponent } from "src/app/pages/contrats/contrats.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { DepartementsComponent } from "src/app/pages/departements/departements.component";
import { EquipesComponent } from "src/app/pages/equipes/equipes.component";
import { EtudiantComponent } from "src/app/pages/etudiant/etudiant.component";
import { UniversitesComponent } from "src/app/pages/universites/universites.component";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
    
   { path: "dashboard", component: DashboardComponent },
   { path: "etudiant", component: EtudiantComponent },
   { path: "equipes", component: EquipesComponent },
   { path: "contrat", component: ContratsComponent },
   { path: "universite", component: UniversitesComponent },
      { path: "departement", component: DepartementsComponent },
//   { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
