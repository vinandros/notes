# Functional JS

- Programación basada en funciones.
- Los datos no se deben de modificar, se hacen copias (inmutabilidad).
- Las funciones tienen entrada y salida de datos.

# First-class Functions

- Similar a function expresions -> funciones expresadas como variables, que luego son asignadas a otras variables.

# Higer Orden Functions

- Funciones que reciben funciones como parametros, por ejemplo, map, filter,every.

# Pure Functions

- Funciones que retornan un dato, sin modificar ninguna variable global.
- La cantidad de parametros es igual a la cantidad de retorno.
- Mantienen el resto de la aplicacion sin ninguna modificación.

# Funciones que retornan funciones.

- Simpre retornan una función, por lo que lleva doble arrow function.
- Muy poco utilizada en projectos.

# Closures

- Es diferente del Scope, el scope separa el binding de los segmentos.
- Los clouses permiter acceder a funciones o valores desde el exterior del scope del binding deseado.
- Para crearlo debes hacer una funcion que exponga el binding que deseas(dentro del scope de dicho binding) y retornar dicha función.

# Currying

- Dividir una función que toma más de un parametro de forma parcial.

# Composition

- Alternativa nueva para crear "clases".
- Creas funciones que guardan las propiedades en objectos.
- Luego crears funciones externas que asignas en el return de la función de la clase al object de la propiedades.
