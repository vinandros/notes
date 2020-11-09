# IndexedDB

- Base de datos en le explorador
- Casi simpre se inicia al cargar la página, con el "DOMContentLoaded" Listener.

## Code

```javascript
let crmDB = windows.indexedDB.open("crm", 1);

crmDB.onerror() = function () {
  console.log("Error creando la base de datos");
};

crmDB.onesuccess() = function () {
  console.log("Base de datos creada!.");
};

crmDB.onupgradeneeded = function () {
  // Se ejecuta una sola vez cuando se crea la base de datos.
  const db = e.target.result;

  const objectStore = db.createObjectStore("crm", {
    keyPath: "crm",
    autoIncrement: true,
  });

  //Definir columnas

  objectStore.createIndex("nombre", "nombre", { unique: false });
  objectStore.createIndex("email", "email", { unique: true });
  objectStore.createIndex("telefono", "telefono", { unique: false });
};

function crearCliente() {
  let transaction = db.transaction(["crm"], "readwrite");

  transaction.oncomplete() = function () {
    console.log("Transaction realizada!");
  };

  transaction.onerror() = function () {
    console.log("Error en transaction!");
  };

  const objectStore = transaction.objectStore("crm");

  const nuevocliente = {
    telefono: 23423423,
    nombre: "kevin",
    email: "kevinandres.126@gmail.com",
  };

  const peticion = objectStore.add(nuevocliente); // put to update , delete to delete
}
```
