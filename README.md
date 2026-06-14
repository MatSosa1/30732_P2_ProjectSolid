# Cambios

## SRP

En esta clase, se podía observar una super clase que mantenía funciones que no estaban de acuerdo a su nombre o responsabilidad.

Para que sea más legible y mantenible, se decidió generar una nueva clase que se encargue únicamente de las notificaciones en email.
Así, si se desease utilizar un nuevo notificador como por mensaje o por llamada, sería más fácil diferenciarlos

## OCP

Axios funciona para este caso.
Sin embargo, es probable que, si es que ocurriese un fallo de seguridad en la librería, se desee migrar a otra.
O incluso crear una desde cero.

El cambio realizado fue el de crear una interfaz general para el procedimiento, con las funciones necesarias para poder consultar datos como lo hace Axios.
Así, si se desea cambiar de librería, no sería complicado, puesto que la interfaz dispondría de los mismos métodos siempre y cuando la nueva clase implemente correctamente los mismos.

## LSP

Tener clases diferentes de autos genera demasiada carga, más cuando estos no han sido debidamente seccionados para que se puedan realizar procesos u operaciones con uno de ellos, interpretándolos como uno solo con la misma funcionalidad.

Para ello, se generó una interfaz con funciones que podían generar la información que cada una de ellas daba a través de un `if` enorme y poco mantenible.
Además, las clases ya existentes implementaron la interfaz y la clase `VehicleManager` puede ser más sencilla y sin necesidad de abrirla al crear un nuevo tipo de auto.

## ISP

Muchas veces existen interfaces que toman demasiadas responsabilidades para ciertos casos, donde son tan globales que sus funciones no corresponden a todos los objetos que deben implementarlas.
Esto hace que muchas de ellas emitan errores cuando se trata de implementarlas.

La solución planteada fue crear interfaces más específicas para cada caso, haciendo uso de los errores que podían dar en cada una de las clases implementadas.
Así se pudo determinar qué tan específico se necesita ser para poder implementar las clases correctamente.

## DIP

La inyección de dependencias es demasiado útil cuando se sabe que es posible que muchos servicios pueden ser fácilmente reemplazables.
Cuando se necesita cambiar de forma de obtener resultados con funcionalidades diferentes pero con el mismo nombre, es totalmente necesario tener en cuenta este principio.
En el código se podía observar que la dependencia no estaba siendo inyectada, sino usada dentro de la función.
Si esta debía cambiarse mucho más tarde, hubiese sido tedioso tener que cambiar en todos los lugares donde se la implementaba.

Para corregir esto, se creó una interfaz `DatabaseService` que servía como abstracta de los servicios de base de datos.
Además, se implementó en el constructor de la clase que la usaba para que pueda ser fácilmente reemplazable al momento de querer utilizar el servicio.
