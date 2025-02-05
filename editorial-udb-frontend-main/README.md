Estructura del Proyecto
Este repositorio utiliza un enfoque modular basado en el diseño atómico para construir interfaces de usuario escalables, reutilizables y mantenibles. La estructura está organizada en componentes divididos en moléculas, organismos y plantillas, facilitando el desarrollo y la comprensión del proyecto.

Estructura de Carpetas
components/atoms
Esta carpeta contiene los elementos básicos e indivisibles de la interfaz, como botones, etiquetas e inputs. Los átomos son los bloques fundamentales que se combinan para formar moléculas. (Actualmente no hay átomos en la estructura visible de este proyecto).
components/molecules
Aquí se encuentran componentes reutilizables que combinan varios átomos para formar unidades más complejas y funcionales. Ejemplos de moléculas en este proyecto:

carrusel:
carrusel.html: Define la estructura HTML del carrusel.
carrusel.css: Contiene los estilos específicos para el diseño del carrusel.
searchButton:
searchButton.html: Estructura HTML para el botón de búsqueda.
searchButton.css: Estilos personalizados para el botón de búsqueda.

components/organisms
Los organismos son componentes más grandes formados por una combinación de moléculas, diseñados para secciones específicas de la aplicación. Ejemplos incluidos:

footer:
footer.html: Estructura del pie de página.
footer.css: Estilos correspondientes al footer.
index_coleccionesDestacadas:
index_coleccionesDestacadas.html: Contiene la estructura de la sección de colecciones destacadas.
index_coleccionesDestacadas.css: Estilos específicos para esta sección.
Otras secciones: Incluyen detalles de publicaciones, búsqueda y editoriales, cada una con su propio HTML y CSS.
templates
Esta carpeta contiene la plantilla principal del proyecto:

index.html: Es la base donde se ensamblan todos los organismos y moléculas para formar la interfaz final. Actúa como punto de partida para la aplicación o página web.
