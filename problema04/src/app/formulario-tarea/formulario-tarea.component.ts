import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent {

  // Variable para enviar datos al componente padre
  @Output() tareaNueva:any = new EventEmitter();

  // Atributos
  titulo = "";
  descripcion = "";
  defCompletado = false;

  agregarTarea(){
    if(this.titulo == ""){
      alert("Debes introducir al menos un título");
    }else{
      // Agregar datos al @Output
      this.tareaNueva.emit({
        titulo:this.titulo,
        descripcion:this.descripcion,
        completado:this.defCompletado
      });

      // Resetear datos de los inputs
      this.titulo = "";
      this.descripcion = "";
    }
  }
}

// Recordatorios
// - Importar clases necesarias "Output", "EventEmitter"
// - Usar el metodo "emit()" para agregar datos al @Output