import { FuncionesService } from './../../../app_core/services/hogwarts-service/funciones.service';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Componente para que contiene el formulario ya sea para registrar un docente o un estuudiante.
 */
@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAdd{


  /**
   * Varible que contiene los valores del formulario
   */
  formAdd: FormGroup

  /**
   * Variable que contiene la la infomación del modal
   */
  @Input() modalRef: any;

  /**
   * Variable que contiene la información de los estudiantes desde el componente de estudiantes
   */
  @Input() estudiantes: any;

  /**
   * Variable que contiene la información de los docentes desde el componente de docentes
   */
  @Input() docentes: any;

  /**
   * Variable boolenana para mostrar el mensaje de requerido
   */
  msgReq: Boolean = false;

  /**
   * Construtor del módulo qut contiene el formulario para el registo
   * @param fb variable para acceder a FormBuilder
   */
  constructor(
    private fb: FormBuilder,
    private serviceFunciones: FuncionesService,
  ) {
    this.formAdd = this.fb.group({
      name: "",
      patronus: "",
      dateOfBirth: "",
      image: ""
    })
  }

  /**
   * Función que permite adicionar un nuevo personaje
  */
   btnAdd(){
    let personaje = this.formAdd.value;
    if(personaje.name && personaje.patronus && personaje.dateOfBirth){
      personaje.fecNac = (personaje.dateOfBirth.getMonth() + 1) + "-" + personaje.dateOfBirth.getDay() + "-" + personaje.dateOfBirth.getFullYear()
      personaje.age = this.serviceFunciones.calcularEdad(personaje.fecNac)
      if(this.estudiantes){
        this.estudiantes.push(personaje)
        this.serviceFunciones.mensajeExito('estudiante')
      }else{
        this.docentes.push(personaje)
        this.serviceFunciones.mensajeExito('docente')
      }
      this.modalRef.hide()
    }else{
      this.msgReq = true;
    }


  }

}
