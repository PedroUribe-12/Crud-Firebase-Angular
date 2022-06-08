import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { EmpleadoFormModule } from 'src/app/shared/components/empleado-form/empleado-form.module';


@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    EmpleadoFormModule
  ]
})
export class NewModule { }
