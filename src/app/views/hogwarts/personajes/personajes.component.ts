import { FuncionesService } from './../../../app_core/services/hogwarts-service/funciones.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HogwartsService } from '../../../app_core/services/hogwarts-service/hogwarts.service';

/**
 * Componente para el modulo de activar libretas.
 */
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class Personajes implements OnInit{

  /**
   * Variable que contiene el formulario de las casas
   */
  formCasa: FormGroup
  /**
   * Variable donde se alamacenan las casas
   */
  casas: any;
  /**
   * Variable donde se alamacena los personajes registrados
   */
  personajes: any;

  constructor(
    private fb: FormBuilder,
    private serviceHogwarts: HogwartsService,
    private serviceFunciones: FuncionesService
  ) {
    this.formCasa = this.fb.group({
      casa: ""
    })
  }

  /**
   * Función que permite iniciar y cargar las casas
   */
  async ngOnInit() {

    this.casas = [
      {nombre: 'slytherin'},
      {nombre: 'gryffindor'},
      {nombre: 'ravenclaw'},
      {nombre: 'hufflepuff'}
    ]

  }

  /**
   * Función que carga los pesonajes registrados dependiendo de la casa seleecionada y los ordena
   */
  async selectCasa(){
    this.personajes = await this.serviceHogwarts.getPersonajes(this.formCasa.value.casa).toPromise();
    for(let personaje of this.personajes){
      if(personaje.dateOfBirth != ''){
        personaje.age = this.serviceFunciones.calcularEdad(personaje.dateOfBirth)
      }
    }
    this.personajes.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

}
