
import { FuncionesService } from './../../../app_core/services/hogwarts-service/funciones.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { HogwartsService } from '../../../app_core/services/hogwarts-service/hogwarts.service';


/**
 * Componente para la gestión de estudiantes.
 */
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class Estudiantes implements OnInit{

  /**
   * Variable que contiene las funciones de BsModalRef
  */
  modalRef: BsModalRef;
  /**
   * Variable donde se almacenan los estudiantes registrados
   */
  estudiantes: any;

  /**
   * Constructor del módulo de gestión de estudiantes
   * @param serviceHogwarts varable para acceder a HogwartsService
   * @param serviceFunciones variable para acceder a FuncionesService
   * @param serviceModal variable para acceder a BsModalService
  */
  constructor(
    private serviceHogwarts: HogwartsService,
    private serviceModal: BsModalService,
    private serviceFunciones: FuncionesService
  ) {
  }

  /**
   * Funcion que permite iniciar el módulo la cual carga los estudiantes registrados y los ordena
  */
  async ngOnInit() {
    try {
      this.estudiantes = await this.serviceHogwarts.getEstudiantes().toPromise();
      for(let estudiante of this.estudiantes){
        if(estudiante.dateOfBirth != ''){
          estudiante.age = this.serviceFunciones.calcularEdad(estudiante.dateOfBirth)
        }
      }
      this.estudiantes.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    } catch (error) {
      console.log(error)
    }

  }

  /**
   * Función que permite abrir el modal para adicionar un estudiante
   * @param template  variable que contine el modal
  */
  async modalAddEstudiante(template: TemplateRef<any>){
      this.modalRef = this.serviceModal.show(template,Object.assign({}, { class: 'modal-lg' }));
  }


  /**
   * Función que permite adicionar el nuevo docente
   * @param infoPer variable que contiene la información del estudiante a adicionar
  */
  btnAddEstudiante(infoPer){
    this.estudiantes.push(infoPer)
  }

}
