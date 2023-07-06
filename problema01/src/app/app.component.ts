import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'problema01';
  // ATRIBUTOS
  formularioUsuario = new FormGroup({
    nombre:new FormControl(''),
    cif:new FormControl(''),
    direccion: new FormControl(''),
    grupo:new FormControl('')
  });

  listaDatos = new Array();

  // CONSTRUCTORES
  constructor(){}

  // METODOS
  onSubmit(){
    // this.listaDatos[0] = this.formularioUsuario.value["nombre"];
    // this.listaDatos[1] = this.formularioUsuario.value["cif"];
    // this.listaDatos[2] = this.formularioUsuario.value["direccion"];
    // this.listaDatos[3] = this.formularioUsuario.value["grupo"];
    this.listaDatos.push(this.formularioUsuario.value);
  }
}
