# symbols

- No se declaran con la keyword "new".
- Todos son diferentes, aunque se declaren con los mismos valores.
- Las propiedades que utilizan symbol no son iterables.

```javascript
const sym = Symbol("1");
const sym2 = Symbol("1");

if (sym === sym2) {
  console.log("iguales");
} else {
  console.log("diferentes"); // simpre van a se diferentes
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};
persona[nombre] = "Kevin"; // Este es una propiedad tipo symbol, solo se puede asignar y acceder de esta manera
persona[apellido] = "Alvarado"; // Este es una propiedad tipo symbol, solo se puede asignar y acceder de esta manera
persona.tipo = "Premiun";
persona.saldo = 8000;
```
