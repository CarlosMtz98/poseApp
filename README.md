# PoseApp

[![release](https://img.shields.io/github/v/release/CarlosMtz98/PoseApp)](https://pose-app.herokuapp.com/)

## Integrantes del equipo

Pedro Cortés Soberanes A01374919\
Carlos Martínez Rodríguez A01375577\
Eduardo Gallegos Solís A01745776\
Luis Fernando Figueroa Rendón A01746139\
Alejandro Guerrero Estrada A01374895\
Mariana Gonzalez Zamudio A01745779

## Introducción

El ejercicio debe ser un pilar importante en la vida de los seres humanos, dentro de sus principales beneficios se encuentra el prevalecer condiciones de vida digna de las personas. En un estudio realizado por el INEGI[2], se encontró que la principal motivación para hacer ejercicio es por un tema relacionado con la salud, seguidos por diversión y apariencia.

El problema es que muchas veces se realiza actividad física sin la supervisión adecuada de un experto, por lo que se cometen errores que pueden causar lesiones en el cuerpo y convierte a esta actividad en un factor que atenta contra la misma salud.
Algunos de los factores que ocasionan lesiones al realizar actividad física son malas posturas, técnicas incorrectas, sobreexigencia al cuerpo, no respetar la biomecánica del cuerpo, movimientos erróneos repetitivos, entre otros. La falta de calentamiento o estirar los músculos también puede causar lesiones.
Las lesiones deportivas más comunes son:
- Torceduras y distensiones
- Esguinces
- Inflamación muscular
- Tendinitis
- Calambres
- Fracturas (huesos rotos)
- Dislocaciones

## Objetivo
Se ha desarrollado Sport Technic, con el objetivo de ayudar a reducir las malas técnicas mediante el reconocimiento del ejercicio a realizar. Mediante tutoriales, se explicarán los puntos de más cuidado a la hora de entrenar, y con la ayuda de un modelo de Machine Learning se ayudará a reflejar los movimientos realizados. 
Ciencia de datos / Evaluación de modelos

Para la creación de los modelos realizamos tres diferentes bases de datos, una para cada modelo y específica por ejercicio (sentadilla, lagartija y abdominal). Dentro de cada base de datos descompusimos el ejercicio en diferentes partes para así lograr que nuestro modelo reconociera las distintas fases del ejercicio.

Para realizar los modelos de reconocimiento de imágenes, utilizamos una herramienta llamada Teachable Machine, la cual nos permitió cargar nuestros bancos de imágenes y  hacer un modelo de Machine Learning, que sigue la técnica de clasificación, entrenado que reconociera las partes del ejercicio para integrarlo fácil y rápidamente a nuestro front end.
