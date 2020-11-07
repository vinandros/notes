# Maps

- Listas ordenadas en llave - valor.
- Mejor rendimiento que objetos.
- Son iterables

```javascript
    const object = {
        propetyuno:"Jonh Dow"
    }
	const var = new Map();
    var.set("nombre","Kevin") //error
    var.set("tipo","Premium") // ok
    var.set("saldo",5000) // ok
    var.set([0],true) // ok
    var.size // devuelve la cantidad de elem del map
    var.has("nombre") // verifica si la llave existe -> devuelve true or false
    var.get("nombre") // devuelve el valor de la llave
    var.delete("nombre") // elimina el el valor y la llave
    var.clear() // elimina el map

    const newMap = new Map([['nombre','paciente'],['cuarto','no definido']])

```

# WeakMaps
