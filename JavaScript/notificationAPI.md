# API para enviar notificaciones

- Se pide el permiso.
- Luego se valida y se manda la notificación

```javascript
const notificationBtn = document.querySelector("#notificar");

notificationBtn.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    console.log("El resultado es ", result);
  });
});

const showNotificationBtn = document.querySelector("#verNotificacion");

showNotificationBtn.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    const notification = new Notification("Esta es la notificación", {
      icon: "img/ccj.png",
      body: "Hola mi nombre es Kevin, Welcome Back! from Costa Rica.",
    });

    notification.onclick = function () {
      window.open("https://www.vinandros.com");
    };
  }
});
```
