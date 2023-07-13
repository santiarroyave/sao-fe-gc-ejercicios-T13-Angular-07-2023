import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problema04';
  
  tareas:any = new Array;
  
  // JSON con tareas de ejemplo
  // tareas:any = [{titulo:"comida",descripcion:"Mirar la receta de las croquetas 1",completado: false},{titulo:"comida",descripcion:"Mirar la receta de las croquetas 2",completado: true},{titulo:"comida",descripcion:"Mirar la receta de las croquetas 3",completado: false}];

  agregarTarea(tarea:any){
    this.tareas.unshift({
      titulo:tarea.titulo,
      descripcion:tarea.descripcion,
      completado:tarea.compleatado
    });
  };
}

// Notas
// - Las tareas las añade al principio
