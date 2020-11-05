# Clases

Muy similar a prototypes, pero con algunas excepciones

- Se declaran así -> class Client {} ó const Client = class {}
- Se puede agregar el constructor dentro de la clase -> class Client { constructor (nombre, saldo){ this.nombre = nombre,this.saldo = saldo}}

## Agregando métodos

- Se agregan dentro de la clase como funciones, pero sin agregar ninguna palabra reservada, solo el nombre de la función.
- Estos métodos de igual manera se agregaran al prototype.
- Se pueden agregar métodos a la clase como tal, no sus instancias, esto se hace agregando la palabra "static" antes del método.

## Herencia

- Se usa la reservedkey "extends" -> class cliente extends Persona
- Se extienden los atributos y los métodos
- Para agregar las propiedades del padre se agrega el método "super(atributos a heredar del padre)" al constructor
- Métodos de igual nombre resescriben el método del padre.

## Modificadores de acceso

- Se usa el signo de gato "#" para declarar la propiedad privada.
- Se declara la variable al inicio de la clase con el gato #nombre.
- Las propiedades solo se pueden acceder desde dentro de la clase.
