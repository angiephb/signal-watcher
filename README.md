# Signal Watcher - Frontend Prototype

Este repositorio contiene la Prueba de Concepto (PoC) del frontend para **Signal Watcher**, un sistema diseñado para el monitoreo y procesamiento de eventos de seguridad.

La implementación prioriza la arquitectura de la Interfaz de Usuario (UI) y la gestión de estado global. Se integra un **Mock API** liviano para simular latencia de red y proporcionar respuestas dinámicas desde el motor de análisis, garantizando un entorno de pruebas fiel a un escenario de producción.

---

## 🚀 Despliegue (Live Demo)

Puede revisar el proyecto en funcionamiento a través de los siguientes enlaces:

*   **Frontend (Vercel):** [https://signal-watcher-h6uq-h3cty1d1u-angiephbs-projects.vercel.app/](https://signal-watcher-h6uq-h3cty1d1u-angiephbs-projects.vercel.app/)
*   **Backend API (Render):** [https://signal-watcher-api-htbu.onrender.com](https://signal-watcher-api-htbu.onrender.com)

> **Nota sobre el rendimiento:** Es probable que el servidor entre en estado de suspensión por inactividad. Si los datos no cargan de inmediato al abrir la aplicación, espere entre **30 y 50 segundos** para que el servicio se active automáticamente.

---

## 🚀 Ejecución del Proyecto (Entorno de Desarrollo Local)

El proyecto se encuentra estructurado en dos capas independientes que deben ejecutarse de forma simultánea: el Frontend (Next.js) y el Mock API (Express).

### Requisitos Previos
* **Node.js**: v18 o superior.
* **Gestor de paquetes**: npm.

### 1. Inicialización del API Mock (Simulador Backend)
Desde la consola de comandos, es necesario situarse en la raíz del proyecto y navegar hacia el directorio del servicio mock para realizar la instalación de dependencias e iniciar el servidor:

```bash

cd api-mock
npm install
npm run dev
```

El servicio quedará disponible en http://localhost:3001, exponiendo la ruta POST necesaria para el análisis de términos.

### 2. Iniciar el Frontend (Next.js App Router)

En una terminal paralela, se debe acceder al directorio principal de la aplicación (signal-watcher) para su despliegue:

```bash
cd signal-watcher
npm install
npm run dev
```

La interfaz de usuario será accesible a través del navegador en http://localhost:3000.
