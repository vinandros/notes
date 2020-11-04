# Storage

## local Storage

- Se mantiene luego de cerrar el brower.
- Solo almacena Strings
- API key-> value, localStorage.setItem("key", "value") or localStorage.getItem("key")
- JSON.stringify(object|array) -> para convertir a String(JSONFormat) los Objetos o Arrays.
- JSON.parse(string) -> para convertir string(JSONFormat) en arrays ó objetos.
- Eliminar -> localStorage.removeItem("key")
- Para actualizar un registro debes hacerlo por medio de una copia y editarlo desde js, por último reescribir el valor.
- localStorage.clear() -> limpia todo el storage.
