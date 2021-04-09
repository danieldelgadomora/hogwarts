import { FuncionesService } from '../../../app_core/services/hogwarts-service/funciones.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Component, OnInit, Output, TemplateRef, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HogwartsService } from '../../../app_core/services/hogwarts-service/hogwarts.service';

/**
 * Componente para la gestión de estudiantes.
 */
@Component({
  selector: 'app-tabla-info',
  templateUrl: './tabla-info.component.html',
  styleUrls: ['./tabla-info.component.scss']
})
export class TablaInfo{

  /**
   * Función que importa la información de un método seleccionado y cargarlo en la tabla
   */
  @Input() infoPer: any;

}
