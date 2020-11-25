# Pasos

- Identificar elemento
- Definir la acción sobre el
- Realizar la válidaciones que permitan validar el resultado esperado.

## Casos ideales

- Casos más comunes
- Casos de prueba manuales largos
- Compatibilidad de herramientas
- Sostenibilidad en los requerimientos

## Tipo de selectores

Para identificar los objetos

- ID -> consistencia en los IDs
- Xpath -> Se usa cuando hay id's dinamicos
- Linktext -> Se busca en base al texto de elemento
- tagName -> Se utiliza para contar elementos en la página

## Acciones más utilizadas

- Click()
- sendKeys()
- Clear()
- Submit()
- getSize()
- getText()
- isEnable()
- isSelected()

### Validaciones fuertes

- Detienen los tests

### Validaciones debiles

- No detienen el resto de tests,para tests que duran más de un día corriendo

### Validaciones más usadas

- aseertEquals/NotEquals
- assertTrue/False
- assertNull/NotNull

# Waits

Utilizados para dar tiempo a los sistemas, para que estos puedan cumplir con el resultado esperado.

## Tipos

### Implicito

Generico para todos los elementos.

### Explicito

- Para esperar un determinado tiempo.
- Wait Until -> espera a que este listo y luego sigue.

# Estructura del proyecto

- Tecnologias utilizadas.
- Manejo de datos.

## Estructura ideal

### Patron de diseño Page Object Model (POM)

- Clase para selectores -> facilitar los accesos a elementos comunes
- Respuesta mas rápida para actualizar los casos de prueba
- Clase para métodos genéricos -> métodos de login, usado en muchas pruebas, se debe poder reutilizar en cualquier momento.
- Clase para métodos específicos -> para casos especiales de un test.
- Mantener los test bien modulador, como los componentes de React, para poder reutilizarlos y actualizarlos.

# Estructura del Test

- Describe -> Se establece el nombre del caso de prueba
- It-> Define cada uno de los casos.
