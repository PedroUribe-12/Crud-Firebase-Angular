import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarComponent } from './editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadoFormModule } from 'src/app/shared/components/empleado-form/empleado-form.module';


@NgModule({
  declarations: [
    EditarComponent
  ],
  imports: [
    CommonModule,
    EditarRoutingModule,
    ReactiveFormsModule,
    EmpleadoFormModule
  ]
})
export class EditarModule { }
