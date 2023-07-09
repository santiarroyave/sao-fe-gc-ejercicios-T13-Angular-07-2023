import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datos-formulario',
  templateUrl: './datos-formulario.component.html',
  styleUrls: ['./datos-formulario.component.css']
})
export class DatosFormularioComponent {
  @Input() datos:any;
}
