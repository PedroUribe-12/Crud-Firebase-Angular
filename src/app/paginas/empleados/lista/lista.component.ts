import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'; 
import { EmpleadosService } from '../empleados.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  empleados$ = this.empleadosSvc.empleados;

  constructor(private router: Router, private empleadosSvc: EmpleadosService) { }

  navegacionesExtras: NavigationExtras|any = {
    state:{
      value : null   
    }
  }

  ngOnInit(): void {
  }

  onGoToEditar(item:any):void{
    this.navegacionesExtras.state.value = item;
    this.router.navigate(['editar'], this.navegacionesExtras)
  }

  onGoToVer(item:any):void{
    this.navegacionesExtras.state.value = item;
    this.router.navigate(['details'], this.navegacionesExtras)
  }

  async onGoToEliminar(empId:any):Promise<void>{

    try {
      await this.empleadosSvc.eliminarEmpleados(empId);
      alert('Eliminado')
    } catch (error) {
      console.log(error)
    }
    
  }

}
