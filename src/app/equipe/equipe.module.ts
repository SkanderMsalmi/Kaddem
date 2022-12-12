import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { AjouterEquipeComponent } from './ajouter-equipe/ajouter-equipe.component';
import { EquipeCardComponent } from './equipe-card/equipe-card.component';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterEquipPipe } from '../pipes/filter-equip.pipe';


@NgModule({
  declarations: [
    EquipeComponent,
    ListEquipeComponent,
    FormEquipeComponent,
    AjouterEquipeComponent,
    EquipeCardComponent,
    DetailEquipeComponent,
    FilterEquipPipe

  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class EquipeModule { }
