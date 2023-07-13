import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  // Obtenemos el array de tareas del componente padre
  @Input() tareas:any;

  completar(tarea:any){
    
    // 1. Encontrar su posición dentro de la lista
    let posicion = this.tareas.indexOf(tarea);
    // 2. Alterna entre valor completado o no
    if(tarea.completado == true){
      tarea.completado = false;
    }else{
      tarea.completado = true;
    }
    
    // 3. Actualiza el array
    // Nota: cuando la tarea se completa se mueve hasta el final del array. Si se desmarca, sigue en su posición
    if(tarea.completado == true){
      this.tareas.splice(posicion,1);
      this.tareas.push(tarea);
    }else{
      this.tareas.splice(posicion,1,tarea);
    }
  };
  
  eliminar(tarea:any){
    // 1. Encontrar su posición dentro de la lista
    let posicion = this.tareas.indexOf(tarea);
    // 2. Borrar elemento
    this.tareas.splice(posicion, 1);
  };
}

// Dudas (en el caso de que la tarea completada no se mueva hasta el final de la lista)
// - ¿Que otros métodos se pueden usar en la función completar() que no implique actualizar el objeto completo sino solo el boleano?
// - ¿Deberia usar ID en cada tarea para evitar pasar el objeto como argumento o hay más métodos?

// Notas
// - Importamos el NgClass para poder agregar la clase en el html si la tarea está completada