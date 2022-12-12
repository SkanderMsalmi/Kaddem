import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEquipeComponent } from '../equipe/list-equipe/list-equipe.component';
import { EtudiantComponent } from './etudiant.component';

const routes: Routes = [{ path: '', component: EtudiantComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
