# Eventos

Son funciones ó interfaces para detectar acciones y movimientos en el sitio web.

## Agregar eventos

### Generales

- elem.addEventListener('DOMContentLoaded', funtion);

### Mouse events

- elem.addEventListener('click', function);
- elem.addEventListener('mouseenter', function);
- elem.addEventListener('mouseout', function);
- elem.addEventListener('mousedown', function);
- elem.addEventListener('mouseup', function);
- elem.addEventListener('dblclick', function)

### Eventos de Formulario

- elemFormulario.addEventListener('submit', function(event))

### Eventos Scroll

- windows.addEventListener('scroll', function)
- windwos.scrollY -> devuelve valor en pixeles de la cantidad de scroll.
- elem.getBoundingClientRect() -> devuelve varoles de ubicación del elemento seleccionado.

### Eventos de teclado.

- elem.addEventListener('keydown',function)
- elem.addEventListener('keyup',function)
- elem.addEventListener('blur',function)
- elem.addEventListener('copy',function)
- elem.addEventListener('paste',function)
- elem.addEventListener('cut',function)
- elem.addEventListener('input',function(event)) -> todo los anteriores menos blur

#### Atributos de event

- event.type
- event.target.value
- event.target.method
- event.target.action
- event.preventDefault()
- event.stopPropagation() -> evitar Bubbling

## Event Bubbling

Propagación del evento hacia elementos padres.

### Detener Bubbling

- event.stopPropagation();
- usando Delegation; un solo evento, y a partir del target y su contenido se identifica y realiza la función deseada.
