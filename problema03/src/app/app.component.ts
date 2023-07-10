import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problema03';

  codigo = "";
  descripcion = "";
  precio = "";
  datosTabla:any = [{"codigo": "1","descripcion": "Manzana","precio": 1.5},{"codigo": "2","descripcion": "Plátano","precio": 0.75},{"codigo": "3","descripcion": "Naranja","precio": 0.95},{"codigo": "4","descripcion": "Pera","precio": 1.2},{"codigo": "5","descripcion": "Sandía","precio": 3.5}];

  // Este atributo almacenará el dato que hemos seleccionado
  datoSeleccionado = [];

  agregar(){
    this.datosTabla.push({
      codigo:this.codigo,
      descripcion:this.descripcion,
      precio:this.precio
    });

    // Resetear Datos
    this.codigo = "";
    this.descripcion = "";
    this.precio = "";
  };

  // Muestra los datos dentro de los Inputs para que puedan ser modificados
  mostrarSeleccion(articulo:any){
    this.codigo = articulo.codigo;
    this.descripcion = articulo.descripcion;
    this.precio = articulo.precio;
    
    this.datoSeleccionado = articulo;
  };

  modificar(){
    // 1. Encontrar su posición dentro de la lista
    let posicion = this.datosTabla.indexOf(this.datoSeleccionado);

    // Condicional para modificar solo si hay alguno seleccionado
    if(posicion != -1){
      // 2. Borra elemento antiguo
      this.datosTabla.splice(posicion, 1);
      // 3. Agrega elemento nuevo
      this.datosTabla.splice(posicion, 0, {
        codigo:this.codigo,
        descripcion:this.descripcion,
        precio:this.precio
      });
  
      // 4. Resetear Datos
      this.codigo = "";
      this.descripcion = "";
      this.precio = "";
    }
  };

}
