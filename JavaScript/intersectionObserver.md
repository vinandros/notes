# Intersection Observer

- Sirve para detectar cuando un elemento esta visible en pantalla ó cuando se esconde.

```javascript
document.addEventListener("DOMContentLoaded", () => {
  // se inicia el observer
  const observer = new IntersectionObserver((entries) => {
    // se verifica es estado de visible
    if (entries[0].isIntersecting) {
      console.log("El elemento ya es visible");
    }
  });

  observer.observe(document.querySelector(".premium")); // elemento a verficar
});
```
