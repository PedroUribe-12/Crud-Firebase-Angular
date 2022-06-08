import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from 'src/app/shared/modelos/empleado.interface';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados!: Observable<Empleado[]>;

  private empleadoColeccion!: AngularFirestoreCollection<Empleado>;

  constructor(private readonly afs: AngularFirestore) { 
    this.empleadoColeccion = afs.collection<Empleado>('empleados');
    this.obtenerEmpleado();
  }

  eliminarEmpleados(empId:string): Promise<void>{
    return new Promise (async (resolve, reject) => {
      try {
        const resultados = await this.empleadoColeccion.doc(empId).delete();
        resolve(resultados)
      } catch (error) {
        reject(error)
      }
    });
  }

  guardarEmpleado(empleado:Empleado, empId:string): Promise<void>{
    return new Promise (async(resolve, reject) => {
      try {

        const id = empId || this.afs.createId();
        const data = {id, ... empleado};
        const resultados = await this.empleadoColeccion.doc(id).set(data);
        resolve(resultados);

      } catch (err) {
        reject(err);
      }
    })
  }

  private obtenerEmpleado():void{
    this.empleados =  this.empleadoColeccion.snapshotChanges().pipe(
      map(actions => actions.map( a => a.payload.doc.data() as Empleado))
    );
  }

}