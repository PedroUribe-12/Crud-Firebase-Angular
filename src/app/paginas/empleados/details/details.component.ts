import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Empleado } from 'src/app/shared/modelos/empleado.interface';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  empleado: Empleado;

  constructor(private router:Router, private empleadosSvc: EmpleadosService) {
    const navegacion = this.router.getCurrentNavigation();
    this.empleado = navegacion?.extras?.state?.['value']
  }

  navegacionesExtras: NavigationExtras|any = {
    state:{
      value : null   
    }
  }

  ngOnInit(): void {

    if(typeof this.empleado == 'undefined'){
      this.router.navigate(['list']);
    }else{

    }

  }

  onGoToEditar():void{
    this.navegacionesExtras.state.value = this.empleado;
    this.router.navigate(['editar'], this.navegacionesExtras)
  }

  async onGoToEliminar():Promise<void>{

    try {
      await this.empleadosSvc.eliminarEmpleados(this.empleado?.id!);
      alert('Eliminado');
      this.volverAlListado();
    } catch (error) {
      console.log(error)
    }
    
  }

  volverAlListado():void{
    this.router.navigate(['list'])
  }

}
