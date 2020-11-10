# CallBack

- Es una función enviada por parametro, para ser ejecutada ,apenas termine la función que se ha llamado.
- Se utiliza para condicionar la ejecución de las funciones deacuerdo a la necesidad.

# Promise

- Es lo mismo que un callback, pero estructuralmente definido por javascript.
- Se utiliza como una promesa bajo sideEffect, y devuelve un resultado decuardo a la condiciónde la promesa.
- Se declara así:

```javascript
const promiseExample = new Promise((resolve, reject) => {
  if (true) {
    // condicionardor de la promesa
    resolve("promesa aceptada");
  } else {
    reject("promesa rechazada");
  }
});
```

- La promesa devuelve tres valores posibles

  1. fulfilled -> la promesa se cumplio.
  2. rejectd -> la promesa se rechazo.
  3. pending -> la promesa esta pendiente de ser evaluada.

- Obtener resultado de la promesa:

```javascript
promiseExample
  .then((resultado) => {
    // para cuando la promesa es exitosa
    console.log(resultado);
  })
  .catch((error) => {
    // para cuando la promesa falla
    console.log(error);
  });
```

- Las funciones "then" y "catch" del promise reciben callbacks.
