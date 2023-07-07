import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'problema01';

  // Resuelto en clase
  nombre = "";
  cif = "";
  direccion = "";
  grupo = "";
  clientes:any = [];

  // METODOS
  addCliente(){
    this.clientes.push({
      nombre:this.nombre,
      cif:this.cif,
      direccion:this.direccion,
      grupo:this.grupo
    });

    // Reseteo de datos
    this.nombre = "";
    this.cif = "";
    this.direccion = "";
    this.grupo = "";
  };

}
