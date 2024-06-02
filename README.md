Inmobiliaria FGT - Frontend Web Application
Descripción

Este proyecto es el desarrollo del frontend de una aplicación web totalmente responsive para la inmobiliaria "Inmobiliaria FGT". Está enfocado en la venta de inmuebles y propiedades particulares, con el objetivo de crear una página web visualmente atractiva y funcional para presentar a posibles clientes y facilitar la venta de sus servicios. La interfaz de usuario está diseñada con HTML, CSS (utilizando SASS para una gestión eficiente del estilo), JavaScript y Modernizr para garantizar una experiencia de navegación óptima en dispositivos de todos los tamaños.
Tecnologías Utilizadas

    HTML5: Utilizado para la estructura base de la página web.
    CSS3 y SASS: Utilizados para el estilo y apariencia visual.
    JavaScript: Añade interactividad a la página web.
    Modernizr: Detecta características del navegador del usuario.
    Sharp: Para la optimización de imágenes.
    Gulp: Herramienta de automatización de tareas.
    Netlify: Para el despliegue del sitio web.

Estructura del Proyecto

src/
├── img/
├── js/
│ ├── app.js
│ └── modernizr.js
├── scss/
│ ├── base/
│ │ ├── _botones.scss
│ │ ├── _globales.scss
│ │ ├── _mixins.scss
│ │ ├── _normalize.scss
│ │ ├── _utilidades.scss
│ │ └── _variables.scss
│ ├── internas/
│ │ └── _nosotros.scss
│ ├── layout/
│ │ ├── _anuncios.scss
│ │ ├── _contactar.scss
│ │ ├── _footer.scss
│ │ ├── _formularios.scss
│ │ ├── _header.scss
│ │ ├── _iconos.scss
│ │ ├── _inferior.scss
│ │ ├── _navegacion.scss
│ │ └── _testimonios.scss
│ ├── app.scss
│ └── app.css
build/
├── css/
│ ├── app.css
│ └── app.css.map
├── img/
├── js/
│ └── bundle.min.js
.gitattributes
anuncio.html
anuncios.html
base.html
blog.html
contacto.html
entrada.html
index.html
nosotros.html
gulpfile.js
netlify.toml


Implementación
HTML

El HTML se ha utilizado para crear la estructura básica del sitio web, utilizando etiquetas semánticas para mejorar la accesibilidad y el SEO.
CSS y SASS

Se ha utilizado SASS para una gestión más eficiente del CSS, permitiendo el uso de variables, mixins y anidamiento. La organización modular del CSS mejora la legibilidad y el mantenimiento del código.
JavaScript

JavaScript nativo se ha utilizado para añadir interactividad y mejorar la experiencia del usuario, evitando el uso de librerías pesadas que puedan ralentizar la carga de la página.
Optimización de Imágenes

Sharp se ha utilizado para optimizar las imágenes y generar versiones en formatos modernos como WebP y AVIF para navegadores compatibles.
Gulp

Gulp se ha utilizado para automatizar tareas como la compilación de SASS, la minificación de JavaScript y la optimización de imágenes.
Pruebas
Pruebas Funcionales

Se realizaron pruebas funcionales utilizando Responsively App para asegurar que cada funcionalidad del sitio web funcionara correctamente en diferentes dispositivos y tamaños de pantalla.
Pruebas de Rendimiento

Se utilizaron herramientas como Google PageSpeed Insights para medir el rendimiento del sitio web. Los resultados mostraron un rendimiento excelente tanto en escritorio como en dispositivos móviles.
Pruebas de Compatibilidad

Se utilizó la herramienta web Comparium para asegurar que el sitio web funcionara correctamente en diferentes navegadores y dispositivos.
Resultados de Pruebas de Rendimiento
Escritorio

    First Contentful Paint (FCP): 0.8 segundos
    Largest Contentful Paint (LCP): 0.8 segundos
    Total Blocking Time (TBT): 0 ms
    Speed Index: 1.3 segundos
    Cumulative Layout Shift (CLS): 0

Móvil

    First Contentful Paint (FCP): 2.6 segundos
    Largest Contentful Paint (LCP): 2.8 segundos
    Total Blocking Time (TBT): 0 ms
    Speed Index: 3.4 segundos
    Cumulative Layout Shift (CLS): 0

Conclusiones

El desarrollo del frontend de la "Inmobiliaria FGT" ha resultado en un sitio web atractivo, funcional y rápido que cumple con los objetivos establecidos. Las pruebas de rendimiento y compatibilidad han confirmado que el sitio es eficiente y accesible en diversos dispositivos y navegadores. Las lecciones aprendidas y propuestas de mejora servirán para futuras iteraciones del proyecto.
Referencias

    Google. (2022). Google PageSpeed Insights. https://developers.google.com/speed/pagespeed/insights/
    Keith, J. (2010). HTML5 for web designers. A Book Apart.
    Cederholm, D. (2011). CSS3 for web designers. A Book Apart.
    Duckett, J. (2014). HTML and CSS: Design and Build Websites. Wiley.
    Flanagan, D. (2020). JavaScript: The Definitive Guide (7th ed.). O'Reilly Media.
    Gulp.js. (n.d.). Automate and enhance your workflow. https://gulpjs.com/
    Modernizr. (n.d.). Modernizr Documentation. https://modernizr.com/docs
    Mozilla Developer Network (MDN). (n.d.-a). CSS: Cascading Style Sheets. https://developer.mozilla.org/en-US/docs/Web/CSS
    Mozilla Developer Network (MDN). (n.d.-b). HTML: HyperText Markup Language. https://developer.mozilla.org/en-US/docs/Web/HTML
    Mozilla Developer Network (MDN). (n.d.-c). JavaScript. https://developer.mozilla.org/en-US/docs/Web/JavaScript
    Netlify. (n.d.). Netlify Documentation. https://docs.netlify.com/
    Node.js. (n.d.). Sharp: High performance Node.js image processing. https://sharp.pixelplumbing.com/
    Nielsen Norman Group. (2023). User Experience. https://www.nngroup.com/
    Responsively App. (n.d.). Responsively App. https://responsively.app/
    Sass. (n.d.). Sass: Syntactically Awesome Style Sheets. https://sass-lang.com/
    World Wide Web Consortium (W3C). (n.d.). Web Standards. https://www.w3.org/
    Hogan, B. (2013). SMACSS: Scalable and Modular Architecture for CSS. https://smacss.com/
