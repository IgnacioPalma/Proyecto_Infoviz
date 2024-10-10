## Visualización de la Información 🗺️
¡Hola! Este es el proyecto del **grupo 25**, cuyos integrantes son:
- Maira Acevedo
- Ignacio Palma

### Links Importantes
- [Kaggle Dataset](https://www.kaggle.com/datasets/asaniczka/top-spotify-songs-in-73-countries-daily-updated)

por mientras pondré las cosas que hay que hacer, avanzando con ideas, de todas formas creo que esto se entrega por canvas:
## Por Hacer 

### 1. Diseño (3%)
IMPORTANTE JEJE: estoy poniendo ideas de respuestas para avanzar.

-  Mensaje Principal (máximo 10 líneas): Identifica claramente cuál es el mensaje principal que
deseas comunicar con la visualización. ¿Qué historia o análisis estás presentando a través de
los datos? (igual exagere un poco JWSWJJ poniendole color)

El objetivo de la visualización es destacar que los países latinoamericanos tienden a preferir canciones con un tono más alegre (en spotify) en comparación con el resto del mundo. Esta diferencia puede estar reflejando un aspecto cultural interesante, pues a pesar de los desafíos socioeconómicos que enfrenta la región, la música alegre sigue siendo una expresión fuerte de la identidad latinoamericana. Queremos mostrar que esta alegría, presente en la música popular, es una manifestación (en cierta parte), de la cultura y el espíritu de la región.

- **Origen y Procesamiento de Datos (máximo 6 líneas): Explica de dónde provienen los datos
utilizados en la visualización. Si los datos fueron procesados, describe brevemente cómo lo
hiciste.**

Maira: Los datos utilizados provienen de la API de Spotify, aunque fueron obtenidos y procesados por un usuario en Kaggle. Este conjunto incluye información sobre las canciones más populares en 73 países. Para nuestra visualización, decidimos enfocarnos en el atributo "Valence", el cual es un porcentaje que indica cuán alegre es una canción. Durante el procesamiento, limpiamos datos erróneos, eliminando aquellos sin nombre, sin ID o sin país. También se redujo la cantidad de datos a 5000 canciónes por país, así nos aseguramos de tener la misma cantidad de datos para cada país. Posteriormente, almacenamos las columnas necesarias: "valence", "spotify_id", "country" y "name", en un nuevo archivo CSV. Todo este proceso fue realizado utilizando la librería pandas de Python. Falta por: Decidir como tratar datos duplicados

- **Razonamiento Detrás de la Visualización (máximo 10 líneas): Describe el razonamiento
detrás del diseño de la visualización. ¿Por qué elegiste este tipo de gráfico o visualización?
¿Cómo crees que este formato ayuda a transmitir el mensaje de manera efectiva?** (por mejorar redacción)

Nos basamos en la naturaleza de los datos: estamos representando datos nominales (países) en el eje X con una escala ordinal, y datos cuantitativos (promedio de valence) en el eje Y. Un gráfico de barras es una buena opción para representar este tipo de información, permite una comparación clara entre cada país. Una de las principales ventajas de este tipo de  gráfico es que la longitud de las barras ofrece una señal visual clara que facilita la identificación rápida de los países con los promedios de valence más altos. En este caso se observa cómo los  países de latinoamerica se agrupan hacia la izquierda del gráfico, lo que refuerza visualmente nuestra historia.
Además, el uso de un color para destacar a los países latinoamericanos añade un elemento adicional, ayudando a resaltar visualmente los valores de valence de los países de latinoamericanos. 
El gráfico de barras es una herramienta que permite una  precisión visual y permite ver lo datos de forma clara y sin distracciones. 

### Implementación (50%)
- Enlace a la Visualización: Proporciona un enlace a la página web donde se puede visualizar
tu trabajo, utilizando plataformas de hosting para sitios web estáticos como GitHub Pages u
otras plataformas adecuadas que permitan acceder a la visualización mediante un enlace.

### Evaluación (10%)
- Público Evaluador (máximo 2 líneas): Especifica a quiénes mostraste la visualización para
evaluación (amigos, compañeros de clase, usuarios potenciales).

- Proceso de Evaluación (máximo 15 líneas): Describe el procedimiento que seguiste para
evaluar la efectividad de la visualización utilizando la técnica de pensar en voz alta (thinking
aloud). ¿Qué tipo de comentarios recibiste durante esta evaluación?

### Mejoramiento (10%)
- Aplicación de Retroalimentación (máximo 6 líneas): Discute la retroalimentación recibida y
cómo afectó el producto final. ¿Realizaste modificaciones en la visualización basadas en los
comentarios obtenidos? Si no realizaste cambios, explica por qué.


## Recomendaciónes del profesor:
### Checklist para la Entrega

● `Ciclo de Diseño:` Asegúrate de utilizar el ciclo de diseño mencionado en la clase 6.

● `Revisión de Clases:` Revisa también la clase 7 para indicaciones sobre el proceso de
diseño y tipos de visualizaciones para preguntas diferentes.

● `Errores Comunes:` Verifica que no haya errores comunes no justificados discutidos en
las clases 4 y 5.

● `Principios de Diseño:` Confirma que se han aplicado los principios discutidos en la
clase 8 (resaltar puntos, jerarquías, fuente, menos es más, etc).

● `Coherencia de la Comunicación:` Asegúrate de que lo que deseas comunicar y la
manera en que lo haces (la visualización en sí) tenga sentido, revisando la clase 2 y
clase 3.

● Asegúrate de que el resultado visual esté alineado en general.




