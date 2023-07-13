import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  // Obtenemos el array de tareas del componente padre
  @Input() tareas:any;

  completar(){
    alert("Se ha completado");
  };
  
  eliminar(tarea:any){
    // 1. Encontrar su posición dentro de la lista
    let posicion = this.tareas.indexOf(tarea);
    // 2. Borrar elemento
    this.tareas.splice(posicion, 1);
  };
}
