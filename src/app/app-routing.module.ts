import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  { path: 'equipes', loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule) },
  { path: 'etudiants', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },
  { path: 'contrats', loadChildren: () => import('./contrat/contrat.module').then(m => m.ContratModule) },
  { path: 'universites', loadChildren: () => import('./universite/universite.module').then(m => m.UniversiteModule) },
  { path: 'departements', loadChildren: () => import('./departement/departement.module').then(m => m.DepartementModule) },
 
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
