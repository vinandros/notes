# Arrays o Arreglos

- Inician en cero.
- Se declaran con "[]".
- Se pueden mezclar elemento de diferente tipo.
- Se acceden a los valores con "[position]".

## Métodos

### Para iterar

- Usar For -> recorrer.
- Usar While -> recorrer.
- ArrayVariable.includes(valueToFound) -> devuelve true or false, para array de valores sin objetos y arrays
- ArrayVariable.forEach() -> solo itera
- ArrayVariable.map() -> devuelve arreglo
- ArrayVariable.some(condition) -> devuelve true or false, para array de objetos cuando al menos uno cumple la condición
- ArrayVariable.every(condition). -> devuelve true ó false si todo los elementos cumplen la condición
- ArrayVariable.reduce(elem). -> igual a map pero lleva el carry de una variable como primer parametro.
- ArrayVariable.filter(carry, elem). -> similar a map, pero permite filtrar los datos de retorno bajo una condición
- ArrayVariable.find(condition). -> devuelve nuevo arreglo con el primer elemento que cumpla la condición
- ArrayVariable.findIndex(condition). -> devuelve el index del primer elemento que cumpla la condición
- ArrayVariable.concat(array, array, ...). -> concatenar arreglos.
  . Con el spread operator también se puede concatenar arrays.

### Propios

- .push() -> agrega al final.
- .pop() -> elimina del final.
- .shift() -> elimina al inicio.
- .unshfit() -> agrega al inicio.
- .splice(indexInicio, numberOfElements) -> eliminar elementos
- .splice(indexInicio, numberOfElements, elemForReplace) -> eliminar elementos
