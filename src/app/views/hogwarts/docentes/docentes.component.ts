import { FuncionesService } from '../../../app_core/services/hogwarts-service/funciones.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { HogwartsService } from '../../../app_core/services/hogwarts-service/hogwarts.service';

/**
 * Componente para la gestión de docentes.
 */
@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.scss']
})
export class Docentes implements OnInit{

  /**
   * Variable que contiene las funciones de BsModalRef
   */
  modalRef: BsModalRef;
  /**
   * Variable donde se almacenan los docentes registrados
   */
  docentes: any;

  /**
   * Constructor del módulo de gestión de docentes
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
   * Funcion que permite iniciar el módulo la cual carga los docentes registrados y los ordena
   */
  async ngOnInit() {
    try {
      this.docentes = await this.serviceHogwarts.getDocentes().toPromise();
      for(let docente of this.docentes){
        if(docente.dateOfBirth != ''){
          docente.age = this.serviceFunciones.calcularEdad(docente.dateOfBirth)
        }
      }
      this.docentes.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    } catch (error) {
      console.log(error)
    }


  }

  /**
   * Función que permite abrir el modal para adicionar un docente
   * @param template  variable que contine el modal
   */
  modalAddEstudiante(template: TemplateRef<any>){
      this.modalRef = this.serviceModal.show(template,Object.assign({}, { class: 'modal-lg' }));
  }

}
