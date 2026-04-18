# 🎓 Proyecto AulasCentro - Documentación Completa

## 📋 Descripción del Proyecto

AulasCentro es una aplicación web moderna para la **gestión integral de aulas y centros educativos**. Permite a los usuarios registrarse, autenticarse y gestionar recursos educativos de forma segura mediante JWT.

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 19.2.4** - Librería de UI
- **Vite 8.0.0** - Build tool y dev server
- **Tailwind CSS 4.2.2** - Framework CSS
- **shadcn/ui** - Librería de componentes React
  - Button, Card, Dialog, Input, Badge
  - Basados en Radix UI (@radix-ui/react-dialog)
- **Lucide React 1.8.0** - Iconos SVG
- **React Router DOM 7.14.1** - Enrutamiento
- **Class Variance Authority 0.7.1** - Utilidad para CVA
- **Tailwind Merge 3.5.0** - Merge de clases Tailwind

### Backend

- **Spring Boot** - Framework Java
- **JWT (JSON Web Token)** - Seguridad y autenticación
- **Spring Security** - Control de acceso

### Base de Datos

- **MySQL** - Base de datos relacional

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                       # Componentes de shadcn/ui
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Dialog.jsx
│   │   ├── Input.jsx
│   │   └── Badge.jsx
│   ├── FormularioAula.jsx        # Formulario para crear aulas
│   ├── Navbar.jsx                # Barra de navegación
│   └── ProtectedRoute.jsx        # Rutas protegidas por JWT
├── context/
│   └── AuthContext.jsx           # Gestión global de autenticación
├── pages/
│   ├── AulasPage.jsx            # Gestión de aulas
│   ├── CentrosPage.jsx          # Gestión de centros
│   ├── HomePage.jsx             # Página de inicio
│   ├── LoginPage.jsx            # Login
│   ├── RegisterPage.jsx         # Registro
│   └── Page404.jsx              # Página no encontrada
├── services/
│   └── api.js                   # Llamadas a la API
├── utils/
│   ├── cn.js                    # Utilidad para merge de clases
│   └── tokenUtils.js            # Utilidades de tokens JWT
├── App.jsx                      # Componente raíz
├── App.css                      # Estilos globales
├── main.jsx                     # Punto de entrada
└── index.css                    # Estilos iniciales

public/                          # Archivos estáticos
```

---

# 🔌 Catálogo de Endpoints - API AulaCentros

## 🔐 Autenticación (Públicos)

Estos endpoints **NO** llevan el prefijo `/api`. Se usan para obtener el token.

| Método   | Endpoint         | Descripción                  | Cuerpo (JSON)                        |
| :------- | :--------------- | :--------------------------- | :----------------------------------- |
| **POST** | `/auth/register` | Registrar un nuevo usuario   | `nombre, apellidos, email, password` |
| **POST** | `/auth/login`    | Iniciar sesión y obtener JWT | `email, password`                    |

---

## 🏫 Gestión de Aulas (Privados)

Requieren Header: `Authorization: Bearer <token>`. Llevan prefijo `/api`.

| Método     | Endpoint          | Descripción               |
| :--------- | :---------------- | :------------------------ |
| **GET**    | `/api/aulas`      | Listar todas las aulas    |
| **GET**    | `/api/aulas/{id}` | Ver detalle de una aula   |
| **POST**   | `/api/aulas`      | Crear una nueva aula      |
| **PUT**    | `/api/aulas/{id}` | Actualizar aula existente |
| **DELETE** | `/api/aulas/{id}` | Eliminar una aula         |

---

## 🏢 Gestión de Centros (Privados)

Requieren Header: `Authorization: Bearer <token>`. Llevan prefijo `/api`.

| Método     | Endpoint            | Descripción                 |
| :--------- | :------------------ | :-------------------------- |
| **GET**    | `/api/centros`      | Listar todos los centros    |
| **GET**    | `/api/centros/{id}` | Ver detalle de un centro    |
| **POST**   | `/api/centros`      | Crear un nuevo centro       |
| **PUT**    | `/api/centros/{id}` | Actualizar centro existente |
| **DELETE** | `/api/centros/{id}` | Eliminar un centro          |

---

## 👥 Usuarios (Privados)

| Método  | Endpoint        | Descripción                 |
| :------ | :-------------- | :-------------------------- |
| **GET** | `/api/usuarios` | Listar usuarios del sistema |

---

## 💡 Notas para el Frontend (React)

- **Base URL**: `http://localhost:8080`
- **Registro/Login**: Usa `fetch("http://localhost:8080/auth/...")`
- **Datos (CRUD)**: Usa `fetch("http://localhost:8080/api/...")`
- **Seguridad**: Todas las rutas `/api/**` devolverán `401 Unauthorized` si no se envía el token JWT correcto en las cabeceras.

---

## 🔧 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye para producción
npm run lint     # Verifica el código con ESLint
npm run preview  # Previsualizador de la versión construida
```
