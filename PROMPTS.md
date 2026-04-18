# 📝 PROMPTS.md - Historial de Desarrollo del Proyecto AulasCentro

Este documento contiene los prompts más destacables utilizados durante la creación del proyecto AulasCentro.

---

## 🎯 Fase 1: Configuración Inicial del Proyecto

### Prompt 1: Crear proyecto con tecnologías base

```
Crea un proyecto React con las siguientes tecnologías:
- React Router DOM para enrutamiento
- Tailwind CSS para estilos
- shadcn/ui para componentes (Button, Card, Dialog, Input, Badge)
- Vite como build tool
- Context API para gestión de estado global

El proyecto se llama "AulasCentro" y es un gestor de aulas y centros educativos con autenticación JWT.
```

### Prompt 2: Instalar dependencias necesarias

```
Instala las siguientes dependencias en el proyecto React + Vite:
- react-router-dom para navegación
- tailwindcss para estilos
- shadcn/ui components para css
- class-variance-authority para CVA
- tailwind-merge para utilidades
- lucide-react para iconos
```

---

## 🔐 Fase 2: Autenticación y Seguridad

### Prompt 3: Implementar Context de Autenticación

```
Crea un AuthContext.jsx que maneje lo siguiente:
- Almacenamiento del token JWT en localStorage
- Estados: user, token, isAuthenticated, loading
- Funciones: login, register, logout
- Persistencia automática del token al recargar la página
- Uso de hooks personalizados (useAuth)
```

### Prompt 4: Crear componente ProtectedRoute

```
Implementa un componente ProtectedRoute que:
- Valide si el usuario está autenticado
- Redirija a login si no hay token válido
- Permita acceso a rutas protegidas si hay token
- Muestre loading mientras valida el token
```

### Prompt 5: Implementar servicios de API

```
Crea un archivo api.js con servicios para:
- Autenticación: register y login
- CRUD de aulas: getAll, getById, create, update, delete
- CRUD de centros: getAll, getById, create, update, delete
- Incluye headers con Authorization Bearer token
- Manejo de errores global
```

---

## 🏠 Fase 3: Estructura de Páginas

### Prompt 6: Crear páginas de autenticación

```
Crea LoginPage.jsx y RegisterPage.jsx con:
- Formularios con inputs validados
- Uso de componentes shadcn/ui (Input, Button, Card)
- Integración con AuthContext
- Redirección automática al dashboard tras login exitoso
- Manejo de errores y mensajes
```

### Prompt 7: Implementar página de gestión de aulas

```
Crea AulasPage.jsx con:
- Tabla de aulas con paginación/scroll
- Botones de crear, editar, eliminar
- Modal para crear/editar aulas
- Modal de confirmación para eliminar
- Estados de carga y errores
- Usa componentes: Card, Table, Dialog, Button, Badge
```

### Prompt 8: Implementar página de gestión de centros

```
Crea CentrosPage.jsx con:
- Lista de centros educativos
- Botón "Nuevo Centro" con ícono
- Modal para crear/editar centros
- Tabla con nombre y localidad
- Funcionalidad CRUD completa
- Confirmar antes de eliminar
```

### Prompt 9: Crear página de inicio

```
Implementa HomePage.jsx que:
- Muestre bienvenida al usuario logueado
- Links a las secciones principales (Aulas, Centros)
- Información del proyecto
- Navbar con logout
```

---

## 🎨 Fase 4: Componentes y UI

### Prompt 10: Crear componentes shadcn/ui personalizados

```
Implementa los siguientes componentes de shadcn/ui:
- Button.jsx: con variantes default, destructive, outline, ghost, green
- Card.jsx: para contenedores
- Dialog.jsx: para modales
- Input.jsx: para formularios
- Badge.jsx: para etiquetas

Todos basados en Radix UI y Tailwind CSS.
```

### Prompt 11: Crear Navbar

```
Implementa Navbar.jsx que muestre:
- Logo/Nombre del proyecto
- Links de navegación (Inicio, Aulas, Centros)
- Nombre del usuario logueado
- Botón Logout
- Responsivo y con Tailwind CSS
```

### Prompt 12: Crear formulario de aulas reutilizable

```
Implementa FormularioAula.jsx que:
- Sea reutilizable en modal
- Valide campos requeridos
- Maneje estados internos con useState
- Integre con la API de aulas
- Muestre opciones de centros en desplegable
```

---

## 📐 Fase 5: Estilos y Configuración

### Prompt 13: Configurar Tailwind CSS

```
Configura Tailwind CSS con:
- PostCSS para compilación
- Varias configuraciones de colores
- Temas dark/light
- Configuración de breakpoints responsive
- Importar en index.css y App.css
```

### Prompt 14: Aumentar padding de botones

```
Modifica Button.jsx para que los botones tengan más padding interno.
Cambia el tamaño default de "px-4 py-2" a "px-8 py-2" para mayor separación
entre el texto y los bordes del botón.
```

### Prompt 15: Aumentar espaciado entre elementos

```
En CentrosPage.jsx, aumenta el gap entre "Gestión de Centros" y el botón
"Nuevo Centro" usando gap-16 para que haya más espacio en blanco entre ellos.
```

---

## ✅ Fase 6: Testing y Validación

### Prompt 16: Verificar requisitos del profesor

```
Valida que el proyecto cumpla con:
✅ Usar Tailwind CSS para los estilos generales
✅ Usar una biblioteca de componentes React (shadcn/ui)
✅ Usar al menos 3 componentes distintos (Button, Card, Dialog, Input, Badge)
✅ Implementar autenticación segura
✅ Crear CRUD de recursos
✅ Proteger rutas por autenticación
```

### Prompt 17: Documentar endpoints de API

```
Crea tabla de endpoints de la API con:
- Métodos HTTP (GET, POST, PUT, DELETE)
- URLs de endpoints
- Descripción de cada uno
- Indicar cuales son públicos y cuales requieren autenticación
- Incluir ejemplos de cuerpo JSON para POST/PUT
```

---

## 📚 Fase 7: Documentación

### Prompt 18: Crear README.md profesional

```
Genera un README.md que incluya:
- Descripción del proyecto
- Características principales
- Requisitos previos
- Instrucciones de instalación (npm install)
- Cómo ejecutar (npm run dev)
- API endpoints detallados
- Tecnologías utilizadas
- Estructura del proyecto
- Scripts disponibles
- Requisitos cumplidos
```

### Prompt 19: Actualizar AGENTS.md con documentación completa

```
Actualiza AGENTS.md con:
- Descripción completa del proyecto
- Todas las tecnologías con versiones exactas
- Estructura de carpetas detallada
- Catálogo de endpoints de API (Autenticación, Aulas, Centros, Usuarios)
- Notas importantes para el frontend
- Scripts disponibles
```

---

## 🚀 Fase 8: Mejoras Finales

### Prompt 20: Agregar icono a botón

```
En el botón "Nuevo Centro" o similar, agrega el icono "+" usando:
- Lucide React (Plus icon)
- Posicionado antes del texto
- Con espaciado adecuado (mr-2)
```

### Prompt 21: Mejorar responsividad

```
Asegúrate de que todos los componentes sean responsive:
- Tables con overflow-x-auto en móvil
- Modales adaptables
- Navbar con menú hamburguesa si es necesario
- Padding y margin proporcionales
```

---

## 📋 Resumen de Flujo de Desarrollo

```
1️⃣  Configuración inicial (Vite + React + Router + Tailwind)
    ↓
2️⃣  Autenticación (JWT + Context API + LocalStorage)
    ↓
3️⃣  Estructura de páginas (Login, Register, Dashboard, Aulas, Centros)
    ↓
4️⃣  Componentes shadcn/ui (Button, Card, Dialog, Input, Badge)
    ↓
5️⃣  Servicios de API (CRUD para Aulas y Centros)
    ↓
6️⃣  Estilos y Tailwind CSS (Padding, gaps, colores)
    ↓
7️⃣  Validación de requisitos del profesor
    ↓
8️⃣  Documentación (README, AGENTS.md, PROMPTS.md)
    ↓
9️⃣  Pruebas finales y mejoras
```

---

## 💡 Notas Importantes

- Todos los prompts fueron iterativos y refinados durante el desarrollo
- Se ajustaron según feedback y requisitos del proyecto
- La documentación fue generada al final para reflejar el estado final del proyecto
- Cada prompt resolvía un problema específico o implementaba una característica

---

## 🔄 Comandos Utilizados Durante el Desarrollo

```bash
# Instalación de dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview

# Validación de código
npm run lint
```

---

**Fecha de generación:** 18 de abril de 2026
**Proyecto:** AulasCentro - Gestor de Aulas y Centros Educativos
**Módulo:** Frameworks - DAM2
