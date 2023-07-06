import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent {

  @Input() formularioEnviado: any;
  // @Input() valor: any;

  ngOnInit(){
    console.log(this.formularioEnviado);
    // console.log("Esto es una prueba");
    
    // console.log(this.formularioEnviado);
    // console.log("Fin prueba");
    
    // console.log(this.formularioEnviado.value["nombre"]);
    // console.log("Fin prueba2");
  }
}
