import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problema02';

  nombre = "";
  email = "";
  mensaje = "";
  suma = "";
  listaDatos:any = [];

  enviar(){
    if(this.validar(this.suma)==true){
      this.listaDatos.push({
        nombre:this.nombre,
        email:this.email,
        mensaje:this.mensaje
      });

      // Reseteo de variables
      this.nombre="";
      this.email="";
      this.mensaje="";
      this.suma="";
    }
  };

  validar(dato:string):boolean{
    if(dato=="5"){
      return true;
    }else{
      return false;
    }
  };
}
