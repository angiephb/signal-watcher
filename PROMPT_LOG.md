# PROMPT LOG – Uso de IA en el Desarrollo de Signal Watcher

Este archivo documenta el proceso de desarrollo asistido con IA durante la construcción del proyecto. Las interacciones se registran para evidenciar un uso crítico de la herramienta como **Pair Programmer**, enfocado en la toma de decisiones arquitectónicas, optimización de flujos y resolución de problemas específicos de integración.

---

## Sesión 1 – Arquitectura y Configuración del Entorno

**Contexto:**
Definición de la estructura del proyecto siguiendo un enfoque de separación de responsabilidades (*Separation of Concerns*). Se optó por una arquitectura desacoplada para demostrar la integración real entre una SPA moderna y un servicio de datos independiente.

**Instrucción / Prompt clave:**
> "Estructura un proyecto Fullstack desglosado en dos capas independientes: un cliente con Next.js y un servicio de Mock API utilizando Express con TypeScript. Configura el entorno para permitir comunicación vía CORS y organiza la jerarquía de carpetas de forma escalable."

---

## Sesión 2 – Gestión de Estado Global (Redux Toolkit)

**Contexto:**
Implementación de Redux Toolkit para centralizar el estado del análisis de seguridad. El objetivo fue asegurar que la aplicación pueda escalar y mantener la consistencia de los datos en diferentes vistas del App Router de Next.js.

**Instrucción / Prompt clave:**
> "Implementa la configuración de Redux Toolkit para Next.js (App Router). Define un `eventSlice` que gestione estados asíncronos (`pending`, `fulfilled`, `rejected`) mediante `createAsyncThunk` y configura el Provider necesario para la correcta hidratación del estado en componentes del cliente."

---

## Sesión 3 – Identidad Visual y Tipografías

**Contexto:**
Personalización del sistema de diseño base para alinear la interfaz con una estética profesional de ciberseguridad, priorizando la legibilidad y el impacto visual de las alertas.

**Instrucción / Prompt clave:**
> "Configura el soporte de fuentes personalizadas en Next.js usando `next/font/google`. Sustituye las fuentes por defecto por Roboto (Primaria) y Montserrat (Secundaria), asegurando que las variables CSS estén correctamente mapeadas en el archivo global de Tailwind CSS."

---

## Sesión 4 – Optimización de Rendimiento (Debounce)

**Contexto:**
Reducción de la carga computacional y de red mediante la implementación de un patrón de *debouncing*. Esto evita ejecuciones innecesarias de la lógica de análisis durante la escritura activa del usuario.

**Instrucción / Prompt clave:**
> "Desarrolla una lógica de debounce para el input de búsqueda. El sistema debe retrasar el despacho de la acción de Redux 500ms tras la última pulsación de tecla para optimizar las llamadas al servicio de análisis de términos."

---

## Sesión 5 – Componentización y UI Dinámica (AnalysisCard)

**Contexto:**
Refactorización de la interfaz bajo el principio de responsabilidad única. Se crearon componentes de presentación especializados con estilos condicionales basados en los datos recibidos.

**Instrucción / Prompt clave:**
> "Extrae la lógica de visualización a un componente funcional `AnalysisCard`. Implementa un diseño basado en *glassmorphism* con Tailwind CSS y desarrolla una función de utilidad que asigne colores dinámicos según el nivel de severidad (CRITICAL, HIGH, MEDIUM, LOW)."

---

## Sesión 6 – Abstracción de Datos y Variables de Envorno

**Contexto:**
Finalización de la integración backend-frontend. Se automatizó la gestión de URLs para facilitar el despliegue en diferentes entornos (local y producción) y se limpió la lógica de rutas del servidor.

**Instrucción / Prompt clave:**
> "Refactoriza el servicio de Mock API para abstraer la lógica de negocio a un módulo independiente (`mockData.ts`). Configura el manejo de variables de entorno (`.env`) tanto en el cliente como en el servidor para gestionar las URLs de API de forma dinámica según el ambiente de ejecución."

---

## Reflexión sobre el uso de la herramienta

El uso de IA en este proyecto se centró en la aceleración de tareas de configuración y la consulta de mejores prácticas en Next.js. Cada bloque de código sugerido fue auditado, refactorizado y validado manualmente. La herramienta funcionó como un soporte técnico, pero las decisiones de arquitectura, el flujo de datos y la implementación visual final fueron ejecutadas bajo mi supervisión directa para garantizar un código defendible y profesional.