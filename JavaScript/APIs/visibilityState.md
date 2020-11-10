# VisibilityState

- API para verificar el estado de visibilidad de la aplicación web, es decir, si el usuario esta en la tab de la página ó cambio a otra.

```javascript
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.log("visibilityState = visible");
  } else {
    console.log("visibilityState = hidden");
  }
});
```
