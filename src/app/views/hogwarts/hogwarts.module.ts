import { TablaInfo } from './tabla-info/tabla-info.component';
import { Docentes } from './docentes/docentes.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { Estudiantes } from './estudiantes/estudiantes.component';
import { PanelModule } from 'primeng/panel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ViewsRoutes } from './hogwarts.routing';
import { Personajes } from './personajes/personajes.component';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { ModalModule} from 'ngx-bootstrap/modal';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalAdd } from './modalAdd/modal-add.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ViewsRoutes),
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    TableModule,
    AutoCompleteModule,
    MatSelectModule,
    ModalModule.forRoot(),
    TooltipModule,
    MatInputModule,
    MatNativeDateModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [
    Personajes,
    Estudiantes,
    Docentes,
    TablaInfo,
    ModalAdd
  ],
  providers: [
    // { provide: MAT_DATE_LOCALE, useValue: 'es-CO' },
  ],
})
export class HowartsModule { }
