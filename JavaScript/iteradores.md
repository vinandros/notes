# Iteradores

Para recorrer arrays y objetos

- for -> break rompe loop, continue, rompe inner scope
- while
- do while
- forEach
- map -> devulve array
- for of -> sobre arreglo
- for in -> para objetos

## Creando un iterador

```javascript
function newIterador(array) {
  let i = 0;
  return {
    siguiente: () => {
      const fin = i >= array.length;
      const valor = !fin ? array[i++] : undefined;

      return {
        fin,
        valor,
      };
    },
  };
}

const carrito = ["P1", "P2", "P3"];
```
