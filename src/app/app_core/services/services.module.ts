import { FuncionesService } from './hogwarts-service/funciones.service';

import { NgModule } from '@angular/core';
import { HogwartsService } from './hogwarts-service/hogwarts.service';

@NgModule({
  providers: [
    HogwartsService,
    FuncionesService
  ]
})
export class ServicesModule {
  constructor() { }
}
