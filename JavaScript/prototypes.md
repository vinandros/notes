# Prototypes

- Relacionados a los objectos.
- Todo objeto tiene un prototype.
- Agrega funciones a ojetos.
- Los objetos más utilizados son los literal, pero no permiten la creación dinamica.
- Los menos utilizados son los conocidos para la creación de class o programación orientada a objetos, estos utilizan constructores para la creación dinamica de objectos y deben ser instanciador por mendio de la keyword "new".

## Agregando las funciones

- Se crea constructor
- Se accede al prototype -> Object.prototype.newFunction = function(){}
- Intance.newFunction();

## Herencia

- Se usa ObjectClass.call(this, UnaPropiedadDelObjetoDelQueSeHereda, ...) dentro del costructor
- Para copiar el prototype de un objeto se una Object.create(ObjectClass.prototype)
- Para copiar constructor NewObjectClass.prototype = ObjectClass.
- Hacerlo antes de instanciar la clase.
