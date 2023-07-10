import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() datosTabla:any;
  @Output() seleccion = new EventEmitter();

  borrar(articulo:any){
    console.log(`Eliminado: ${articulo.codigo} ${articulo.descripcion} ${articulo.precio}`);
    // 1. Encontrar su posición dentro de la lista
    let posicion = this.datosTabla.indexOf(articulo);
    // 2. Borrar elemento
    this.datosTabla.splice(posicion, 1);
  };
  
  
  seleccionar(articulo:any){
    // Envia los datos del articulo al elemento padre
    this.seleccion.emit(articulo);
  };
}
