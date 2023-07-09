# T13 Angular

## Apuntes
### Pasar datos a componente hijo
1. Componente padre (*.component.ts): Crear variable/objeto a utilizar
    - `variable1 = "¡Hola mundo!";` `ej. variable`
    - `array1 = [123, 123, "123", "123"];` `ej. objeto`
2. Componente hijo (*.component.ts): Importar el Input
    - `import { Component, Input } from '@angular/core';`
    - `import { Input } from '@angular/core';`
3. Componente hijo (*.component.ts): Importar una variable con el nombre que queramos y elegir de qué tipo es
    - `@Input() valor: any;`
    - `@Input() valor: number;`
    - `@Input() valor: number | string | undefined;`
4. Componente padre (*.component.html): Pasar valores al componente hijo
    - `[variable-hija]="variable/objeto-padre"`
    - `<app-ejemplo [valor] = "variable1"></app-ejemplo>` `ej. variable`
    - `<app-ejemplo [valor] = "array1"></app-ejemplo>` `ej. objeto`
5. Componente hijo (*.component.html): Mostrar datos
    - `<p>{{valor}}</p>` `ej. variable`
    - `<p>{{valor[0]}}</p>` `ej. objeto`

### Tipos de Data Binding
![tipos de data binding](https://github.com/santiarroyave/sao-fe-gc-ejercicios-T13-Angular-07-2023/assets/135848692/27edc7dc-9422-4fec-bdee-a7890a7c9127)

## Ejercicios
### Ejercicio 1
![imagen](https://github.com/santiarroyave/sao-fe-gc-ejercicios-T13-Angular-07-2023/assets/135848692/53bc5d2b-d2ed-4373-8618-7f822771f754)

### Ejercicio 2
![imagen](https://github.com/santiarroyave/sao-fe-gc-ejercicios-T13-Angular-07-2023/assets/135848692/faca97c1-f7a6-4cc9-a2c1-b3d9afcd61b9)
