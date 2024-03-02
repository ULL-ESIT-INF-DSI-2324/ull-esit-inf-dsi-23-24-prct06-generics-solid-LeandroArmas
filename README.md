[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-LeandroArmas/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-LeandroArmas?branch=main) 

# Práctica 6 - Clases e interfaces genéricas. Principios SOLID

## Índice

1. [Introducción](#introducción)
2. [Ejercicio 1 - La mudanza](#ejercicio-1---la-mudanza)
3. [Ejercicio 2 - Facturas en diferentes formatos](#ejercicio-2---facturas-en-diferentes-formatos)
4. [Ejercicio 3 - Gestor de ficheros](#ejercicio-3---gestor-de-ficheros)
5. [Ejercicio 4 - Impresoras y escáneres](#ejercicio-4---impresoras-y-escáneres)
6. [Ejercicio 5 - Servicio de mensajería](#ejercicio-5---servicio-de-mensajería)
7. [Conclusiones](#conclusiones)
8. [Referencias](#referencias)

## Introducción

Esta práctica aborda la aplicación de los principios SOLID, clases e interfaces en el lenguaje TypeScript para resolver problemas específicos de programación. El objetivo es aplicar los conocimientos adquiridos sobre los principios SOLID, el diseño orientado a objetos, metodologías de desarrollo dirigido por pruebas y buenas prácticas de programación para crear soluciones efectivas y robustas.

## Ejercicio 1 - La mudanza

Para llevar a cabo este ejercicio he creado una clase Enser, que representa los enseres por su nombre. 

A continuación, he creado una clase Caja con un método para listar los enseres que hay en la caja, y como queremos respetar los principios SOLID he procedido a crear tres clases para cada tipo de acción: añadir, eliminar y buscar, las cuales crean una instancia de una caja y realizan las correspondientes operaciones. 

## Ejercicio 2 - Facturas en diferentes formatos

Para realizar este ejercicio primeramente he creado una clase Factura que almacena los parámetros: númeroFactura, cliente, total y fecha. 

A continuación, he procedido a crear una interfaz generadorFacturas con un método generarfacturas, el cual va a ser implemento luego con las clases generadorPDF y generadorHTML.

Esto permite que en un futuro podamos añadir nuevos formatos de generación, sin necesidad de modificar el resto del código, es decir, nos estamos segurando de cumplir el principio Open-closed que se basa en poder extender las funcionalidades pero sin modificar el código. 

## Ejercicio 3 - Gestor de ficheros

Este ejercicio que nos ha propuesto revisar el profesor incumple el primer principio SOLID (Single Respnsability principle) ya que contiene una clase con varias funcionalidades. 

Para ello, he propuesto una solución donde se divide la clase en dos clases más sencillas que solo tienen una única función: 

- Una clase fileReader: que lee el contenido de un archivo.
- Una clase fileWriter: que escribe datos en un archivo. 

## Ejercicio 4 - Impresoras y escáneres

En este ejercicio se puede ver cómo se incumple el cuarto principio SOLID (Interface segragation principle), ya que existe una interfaz que realiza dos funciones, lo cual nos obliga a tener implementaciones vacías en las demás clases. 

Para ello he propuesto una solución donde se divide la interfaz PrintableScannable en dos interfaces más sencillas: 
- Una interfaz Printable
- Una interfaz Scannable

De esta manera, las demás clases solo tienen que implementar su correspondiente interfaz o ambas cuando sea necesario. 

## Ejercicio 5 - Servicio de mensajería

Por último, en este ejercicio vemos que se incumple el quinto principio SOLID (Dependency inversion principle) ya que las clases no están dependiendo de la abstracción sino de la praticularización. 

Para solucionar este problema, he propuesto una solución donde se crea una interfaz notificationService la cual será implementada posteriormente por las clases EmailService y ShortMessageService. Así la clase Notifier puede instanciar ambos objetos instanciando nptificationService, basándose en la abstracción.

## Conclusiones

En esta práctica, se ha demostrado la importancia de los principios SOLID para tener un buen código que sea sobretodo escalable y mejorable. Con esto se ha enfatizado la importancia de seguir buenas prácticas de diseño y desarrollo, así como la aplicación de metodologías de prueba para garantizar la calidad y robustez del software desarrollado. Además he aprendido sobre el cubrimiento del código gracias a [Instanbul](https://istanbul.js.org) y [Coveralls](https://coveralls.io).

## Referencias

[Principios SOLID](https://profile.es/blog/principios-solid-desarrollo-software-calidad/)

[Apuntes de la asignatura DSI, ULL](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-solid.html)