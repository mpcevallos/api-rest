# Documentación de API RESTful con NodeJs,MongoDB y Docker.

Este documento es una guía de uso para poder instalar el API y desplegarla correctamente en distintos entornos.

# Descripción de ficheros 

- controllers: código de muestra las funciones para ejecutar las peticiones HTTP: Get, Post, Put y Delete.
- db_sample: colección con 10 ficheros de productos en formato json y csv.
- docker-intro: Dentro se encuentran los archivos Docker.
- models: En la carpeta se encuentra un archivo .js con las constantes de la biblioteca Moongose.
- routes: Contiene dentro de la carpeta las constantes de Express y de las funciones Get, Post, Put y Delete, constante de controladores y router.
- Archivo app.js: Es el archivo donde se definen las constantes de express, bodyParser, se estable el puerto que ejecutará el app en este caso es el puerto 3001 y se configura moongose para que conecte con la base de datos de MongoDB.

Adicionalmente en la carpeta raíz del proyecto encontramos el archivo package-lock.json y package.json donde se encuentran las dependencias requeridas por la aplicación.

## Tecnologías utilizadas

- NodeJS v18.16.0
- MongoDB-Community@4.2
- Docker 20.10.8

## Instalación

1. Clona el repositorio y abre el folder en tu IDE (Recomendado VS Code).
3. Ejecuta desde tu terminal el comando `npm install` para instalar todas las dependencias, esto creará la carpeta node-modules
5. Ejecuta MongoDB en tu terminal escribiendo mongo y mongod, adicionalmente puedes utilizar Mongo Compass para desplegar la base de datos en el puerto localhost:27017
6. Ejecuta en tu terminal el comando `npm start` o node app.js
6. Prueba las funciones del app en Postman utilizando las rutas: http://localhost:3001/api/product para las peticiones GET y POST,  http://localhost:3001/api/product/id para las peticiones PUT y DELETE.
7. Ve a la carpeta docker-intro desde la terminal con cd docker-intro y luego escribe npm install para instalar las dependencias y probar el app usando el comando node server.js

## Uso

El APP RESTful es un proyecto de tienda e-Commerce Web con el fin de poder visualizar y almacenar todos los productos existentes, ingresar nuevos productos, actualizar su información o eliminar productos.

## Créditos

Este proyecto fue realizado para el Bootcamp Introductorio del Máster en Full Stack Web Development de ThreePoints, Edición Mayo 2023.

## License
MIT License Copyright (c) 2023
