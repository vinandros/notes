# DOM Document Object Model

Es una arból de estructura de la página o sitio web que brinda acceso a todos los elementos, permitiendo la edición de la página por medio de interfaces propias de cada elemento.
-DOM scripting -> manipulación del DOM.

## Seleccionando elementos del DOM

- document.getElementsByClassName("className")
- document.getElementById("id")
- document.getElementById("id")
- document.querySelector("CSSselector") -> devuelve el primer elemento encontrado
- document.querySelectorAA("CSSselector") -> devuelve todos los elmentos

## Accediendo y modificando propiedades del elemento seleccionado

- elem.innerText; -> devuelve text del elem y permite cambiarlo// no encuentra elementos con visibility: hidden;
- elem.textContent -> devuelve text del elem y permite cambiarlo
- elem.innerHTML -> devuelve texto con html interno y permite cambiarlo.
- elem.styles.anyCSSproperty -> actualiza los estilos.
- elem.classList -> devuelve un array con las clases del elem
- elem.classList.add("new-class","other-class") -> agrega clases CSS al elemento
- elem.classList.reomve("class") -> remueve CSS clases del elem

### notas

- Los métodos que devuelven un elemento devolveran null cuando no encuentren nada.
- Los métodos que devenlven varios elementod devolveran un array vación cuando no encuentran nada.

## Traversing the DOM, navegar en el DOM.

- elem.childNodes -> enlista todo los elemento hijos, incluido espacios
- elem.parentNode -> devuelve el elemento ó nodo padre(este puede devolver espacios).
- elem.parentElement -> devuelve el elemento ó nodo padre(mejor usar este).
- elem.children -> enlista solo elementos reales de HTML.
- elem.children.[1].nodeName -> devuelve el tag de la etiqueta HTML.
- elem.children.[1].nodeType -> devuelve el tipo de la etiqueta HTML.
- elem.children.[1].children.[0].textContent -> puedes navegar hasta cualquier elemento.
- elem.nextElementSibling -> devuele el siguiete hermano del nodo seleccionado.
- elem.previousElementSibling -> devuelve hermano previo del elemento seleccionado.
- elem.firstElementChild -> devuelve primer elemento hijo de elemento seleccionado.
- elem.lastElementChild -> devuelve último elemento hijo de elemento seleccionado.

## Eliminar elementos.

- elem.remove() -> remueve el elemento selecionado.
- elem.removeChild(elem.children[elemIndexToDelete]) -> eliminar elemento hijo del elemento seleccionado.

## Crear HTML.

- document.createElement("html_tag") -> crea nuevo elemento, luego se deben de agregar las propiedades del tag especifico(href, src,...)
- elem.appedChild(elem)
- elem.insertBefore(elem, nodoReferencia)
-

## Agregar propiedades o atributos al elemento

- elem.setAttribute("propiedad")
- elem.classList.add("cssClass")
