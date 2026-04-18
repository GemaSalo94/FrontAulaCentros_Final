Gestor de Aulas y Centros Educativos

Una aplicación web moderna para la gestión integral de aulas y centros educativos con autenticación segura mediante JWT.

## Características Principales

✅ Autenticación y autorización con JWT
✅ Gestión completa de aulas (CRUD)
✅ Gestión completa de centros educativos (CRUD)
✅ Interfaz moderna y responsiva con Tailwind CSS
✅ Componentes reutilizables con shadcn/ui
✅ Rutas protegidas por autenticación
✅ Gestión de estado global con Context API

## Requisitos Previos

- Node.js v16 o superior
- npm (viene con Node.js)
- Backend en ejecución (Spring Boot en http://localhost:8080)

## Instalación Rápida

```bash
npm install
```

Este comando instala:

- React 19.2.4
- Vite 8.0.0
- Tailwind CSS 4.2.2
- shadcn/ui (Button, Card, Dialog, Input, Badge)
- React Router DOM 7.14.1

## Ejecución

```bash
npm run dev
```

Abre http://localhost:5173 en tu navegador.

## API Endpoints

### Autenticación (Públicos)

- POST `/auth/register` - Registrar nuevo usuario
- POST `/auth/login` - Iniciar sesión y obtener JWT

### Aulas (Privados - requieren token)

- GET `/api/aulas` - Listar todas las aulas
- GET `/api/aulas/{id}` - Ver detalle de aula
- POST `/api/aulas` - Crear nueva aula
- PUT `/api/aulas/{id}` - Actualizar aula
- DELETE `/api/aulas/{id}` - Eliminar aula

### Centros (Privados - requieren token)

- GET `/api/centros` - Listar todos los centros
- GET `/api/centros/{id}` - Ver detalle de centro
- POST `/api/centros` - Crear nuevo centro
- PUT `/api/centros/{id}` - Actualizar centro
- DELETE `/api/centros/{id}` - Eliminar centro

## Tecnologías Utilizadas

### Frontend

- React 19.2.4 - Librería de UI
- Vite 8.0.0 - Build tool
- Tailwind CSS 4.2.2 - Framework CSS
- shadcn/ui - Componentes React
- React Router DOM 7.14.1 - Enrutamiento
- Lucide React 1.8.0 - Iconos SVG

### Backend

- Spring Boot - Framework Java
- JWT - Autenticación segura
- Spring Security - Control de acceso

### Base de Datos

- MySQL - Base de datos relacional

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Dialog.jsx
│   │   ├── Input.jsx
│   │   └── Badge.jsx
│   ├── FormularioAula.jsx
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── AulasPage.jsx
│   ├── CentrosPage.jsx
│   └── Page404.jsx
├── services/
│   └── api.js
├── utils/
│   ├── cn.js
│   └── tokenUtils.js
└── App.jsx
```

## Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción
npm run lint     # Valida código con ESLint
npm run preview  # Previsualiza compilación
```

## Notas Importantes

Base URL API: http://localhost:8080
Token JWT: Guardado en localStorage bajo la clave 'authToken'
Hard Refresh: Ctrl + Shift + R (Windows)

## Licencia

Proyecto educativo del módulo de Frameworks - DAM2
