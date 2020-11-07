# Sets

- Para crear una lista de valores sin duplicados.
- Los set son iterables
- Se puede agregar cualquier tipo de valor

```javascript
	const var = new Set();
    var.add("dato1")
    var.add(100)
    var.add(true)
    var.add("dato1") //no se agrega
    var.size //devuelve tamaño de set
    var.has("dato1") //no se agrega
    var.delete("dato1") // elimina "dato1"
    var.clear() // elimina todos los datos


    var.forEach(value =>{
        console.log(value); // si agregas el index, este tendra el mismo valor de value
    })

    const nums = [1,1,5,1,3,6]
    const noDupliNums = new Set(nums)
```

# WeakSets

- Solo aceptan objetos.
- Mismos métodos de Set normal, menos el método size.
- No son iterables.

```javascript
    const object = {
        propetyuno:"Jonh Dow"
    }
	const var = new WeakSet();
    var.add("dato1") //error
    var.add(object) // ok
    var.size // error método invalido
    var.clear() // elimina todos los datos
```
