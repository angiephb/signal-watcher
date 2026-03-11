# Decisiones de Arquitectura (ADR)
## Análisis de Seguridad - Signal Watcher Frontend

Este documento describe las decisiones técnicas clave adoptadas durante el desarrollo de **Signal Watcher**, justificando la selección de herramientas y patrones de diseño en función de la escalabilidad y la experiencia de usuario.

---

## 📌 Decisión 1: Estrategia de Desarrollo Frontend-First
**Contexto:**
El planteamiento inicial sugería la integración de APIs externas de Inteligencia Artificial. Sin embargo, para garantizar la estabilidad, el control de latencias y la disponibilidad de la solución durante la fase de evaluación, se optó por desacoplar la dependencia de servicios de terceros.

**Justificación:**
Se decidió **priorizar la solidez del Frontend**, implementando un servicio de Mock API independiente para simular el procesamiento de datos. Este enfoque permitió:
1. Garantizar una respuesta inmediata y estable de la interfaz, eliminando errores de red externos.
2. Demostrar una integración Fullstack completa mediante el manejo de contratos de API, políticas de CORS y variables de entorno configuradas manualmente.

---

## 📌 Decisión 2: Gestión de Estado Global con Redux Toolkit
**Contexto:**
Una herramienta de análisis de seguridad requiere una gestión de estados asíncronos compleja (estados de carga, éxito y error) que sea consistente en toda la plataforma.

**Justificación:**
Se seleccionó **Redux Toolkit (RTK)** para centralizar la lógica de negocio por las siguientes razones:
1. **Escalabilidad y Consistencia:** Se proyectó la aplicación como un Dashboard escalable donde múltiples componentes (gráficas de riesgo, logs, indicadores) deben consumir la misma "fuente de verdad".
2. **Abstracción de la Lógica Asíncrona:** El uso de **Async Thunks** (`fetchEvent`) permitió extraer la lógica de las llamadas HTTP fuera de los componentes de la interfaz, facilitando el mantenimiento y la legibilidad del código.

---

## 📌 Decisión 3: Arquitectura de UI Atómica con Tailwind CSS
**Contexto:**
Se requería una interfaz moderna, ligera y de alta legibilidad que permitiera a los analistas de seguridad identificar niveles de riesgo de forma instantánea.

**Justificación:**
Se implementó un sistema de diseño basado en **Tailwind CSS** y efectos de **Glassmorphism**, fundamentado en tres principios:
1. **Eficiencia en el Bundle:** Se prescindió de librerías de componentes pre-construidas para evitar el exceso de código no utilizado, logrando una carga de página significativamente más rápida.
2. **Principio de Responsabilidad Única (SRP):** Se segmentó la interfaz en componentes especializados. El buscador gestiona la interacción, mientras que la `AnalysisCard` se encarga exclusivamente de la visualización de datos mediante props, desacoplando la lógica de la presentación.
3. **Semántica Visual de Riesgo:** Se incorporó una lógica de colores dinámicos (`getSeverityColor`) para asegurar que la severidad de los eventos sea comunicada de forma intuitiva y estandarizada (ej. CRITICAL en rojo, LOW en verde).