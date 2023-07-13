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
  
  eliminar(){
    alert("Se ha eliminado");
  };
}
