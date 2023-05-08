# Documentación de API RESTful con NodeJs,MongoDB y Docker.

Este documento es una guía de uso para poder instalar el API y desplegarla correctamente en distintos entornos.

# Descripción de ficheros 

controllers: código de muestra las funciones para ejecutar las peticiones HTTP: Get, Post, Put y Delete.
db_sample: colección con 10 ficheros de productos en formato json y csv.
docker-intro: Dentro se encuentran los archivos Docker.
models: En la carpeta se encuentra un archivo .js con las constantes de la biblioteca Moongose.
routes: Contiene dentro de la carpeta las constantes de Express y de las funciones Get, Post, Put y Delete, constante de controladores y router.
Archivo app.js: Es el archivo donde se definen las constantes de express, bodyParser, se estable el puerto que ejecutará el app en este caso es el puerto 3001 y se configura moongose para que conecte con la base de datos de MongoDB
Adicionalmente en la carpeta raíz del proyecto encontramos el archivo package-lock.json y package.json donde se encuentran las dependencias requeridas por la aplicación.

License
MIT License Copyright (c) 2023
