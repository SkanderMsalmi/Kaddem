import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEquipeComponent } from './ajouter-equipe/ajouter-equipe.component';
import { EquipeComponent } from './equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';

const routes: Routes = [{ path: '', component: EquipeComponent ,children:[
  {path:'',component:ListEquipeComponent},
  {path:'niveau/:niveau',component:ListEquipeComponent},
  {path:'ajout',component:AjouterEquipeComponent},
  {path:'editEquipe/:id',component:FormEquipeComponent}

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
