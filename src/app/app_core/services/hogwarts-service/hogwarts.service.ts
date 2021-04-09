import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceBase } from '../service-base';
import config from '../app-admin/configuracion/config';
import { Observable } from 'rxjs';

/**
 * Servicio que contiene las rutas para acceder a la infomación de Hogwarts
 */
@Injectable()
export class HogwartsService extends ServiceBase {

  /**
   * Constructor de HogwartsService
   * @param http variable para acceder a HttpClient
   */
  constructor(protected http: HttpClient) {
    super(http);
    this.ApiUrl = [config.ApiUrl].join('/');
  }

  /**
   * Función que contiene la ruta para acceder a la información de los personajes
   * @param casa Variable que contiene la casa seleccionada
   * @returns retorna los personajes
   */
  getPersonajes(casa): Observable<any>{
    const ruta = [this.ApiUrl, 'house',casa].join('/');
    return this.http.get(ruta);
  }

  /**
   * Función que contiene la ruta para acceder a la infornación de los estudiantes
   * @returns retorna los estudiantes
   */
  getEstudiantes(): Observable<any>{
    const ruta = [this.ApiUrl, 'students'].join('/');
    return this.http.get(ruta);
  }

  /**
   * Función que contiene la ruta para acceder a la información de los docentes
   * @returns retorna los docentes
   */
  getDocentes(): Observable<any>{
    const ruta = [this.ApiUrl, 'staff'].join('/');
    return this.http.get(ruta);
  }

}
