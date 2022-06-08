import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadosService } from 'src/app/paginas/empleados/empleados.service';
import { Empleado } from '../../modelos/empleado.interface';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.scss']
})
export class EmpleadoFormComponent implements OnInit {

  
  empleado: Empleado;
  empleadoForm!: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;
  constructor(private router:Router, private fb:FormBuilder, private empleadosSvc: EmpleadosService) {

    const navegacion = this.router.getCurrentNavigation();
    this.empleado = navegacion?.extras?.state?.['value'];
    this.initForm();
  }

  ngOnInit(): void {

    if(typeof this.empleado == 'undefined'){
      //redireccionar
      this.router.navigate(['new'])
    }else{
      this.empleadoForm.patchValue(this.empleado)
    }

  }

  volverAlListado():void{
    this.router.navigate(['list'])
  }

  onSave():void {
    console.log('Saved', this.empleadoForm.value);
    if(this.empleadoForm.valid){
      const empleado = this.empleadoForm.value;
      const empleadoId: any = this.empleado?.id || null;
      this.empleadosSvc.guardarEmpleado(empleado, empleadoId);
      this.empleadoForm.reset();
    }
  }

  private initForm():void{
    this.empleadoForm = this.fb.group({
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.pattern(this.isEmail)]],
      fechaDeInicio: ['',[Validators.required]],
    });
  }
}
