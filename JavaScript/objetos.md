# Objetos

- Se usa "{}" para definirlo, dentro van las propiedades asignadas por ":".
- Se accede a las propiedades con sus propiedades de punto ó con "[]".
- Se pueden apregar las propiedades cuando se inicializa ó por propiedades de punto y asignación.
- Para eliminar se usa la reserved key "delete object.propety".
- Se pueden reasignar las propiedades aunque se declare con const.
- Object literal and Object constructor.

## Métodos

### Cuando se usa "use strict"

- Object.freeze( objeto ) -> inhabilita los CRUD sobre el objeto
- Object.isFrozen()
- Object.seal( objeto ) -> solo habilita el update.
- Object.isSealed()

### Cuando no

- Object.assign(object1, object2) -> unir dos objetos.
- Se puede usar el spread operator "...".
- Object.keys( object ) -> devuelve las llaves del objeto
- Object.values( object ) -> devuelve los valores de las llaves o propiedades del objeto
- Object.entries( object ) -> devuelve todo como un array.

## Destructuring

- Para acceder a los valores por extracción sobre el objeto.
