Este proyecto implementa una API RESTful sencilla para gestionar tareas (To-Do List), construida utilizando Node.js y el framework Express. La arquitectura sigue el patrón Modelo-Controlador-Ruta (MCR) para asegurar la modularidad y el fácil mantenimiento del código.

Instalación 

---------------------
Prerrequisitos
----------------------
Node.js (versión 18+ recomendada)
npm (gestor de paquetes de Node)
-------------------------------
1. Inicialización
2. Instalación de Dependencias para instalar las dependencias de producción (express) y de desarrollo (nodemon) definidas en el package.json
3. Iniciar el Servidor usando el script de desarrollo (dev). 

-------------------------------------------------------------------------
Estructura del Proyecto
-------------------------------------------------------------------------
El proyecto está organizado según el patrón Modelo-Controlador-Ruta:

Archivo/Carpeta    | Propósito|
src/app.js         | Archivo principal. Configura Express, middlewares y 
                   | monta las rutas de la API.
-------------------------------------------------------------------------
routes/tasks.routes| Define las rutas de la API y mapea cada URL a su
                   | función de controlador.                
-------------------------------------------------------------------------
controllers/tasks. | Contiene la lógica de negocio y maneja la solicitud
controller.js      |  y la respuesta (Request/Response). Llama a las
                   | funciones del Modelo.
-------------------------------------------------------------------------
models/task.model. | Maneja la lógica de datos. Contiene el array de 
js                 | tareas y las funciones CRUD para interactuar con 
                   | esos datos.
-------------------------------------------------------------------------
