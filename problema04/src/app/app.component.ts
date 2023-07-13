import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problema04';

  // JSON con tareas de ejemplo
  tareas:any = [
    {
      titulo:"comida",
      descripcion:"Mirar la receta de las croquetas"
    },
    {
      titulo:"comida",
      descripcion:"Mirar la receta de las croquetas"
    },
    {
      titulo:"comida",
      descripcion:"Mirar la receta de las croquetas"
    }
  ];
}
