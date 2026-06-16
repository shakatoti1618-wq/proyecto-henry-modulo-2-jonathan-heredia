# MiniBlog API

API REST para gestionar autores y posts, construida con Node.js, Express y PostgreSQL.

## 🚀 Demo en producción

- **API:** https://proyecto-henry-modulo-2-jonathan-heredia-production.up.railway.app/authors
- **Documentación Swagger:** https://proyecto-henry-modulo-2-jonathan-heredia-production.up.railway.app/api-docs

## Descripción

MiniBlog es una API desarrollada para DevSpark que permite gestionar usuarios y publicaciones. Implementa operaciones CRUD completas para las entidades `authors` y `posts`.

## Requisitos

- Node.js v18 o superior
- PostgreSQL v14 o superior
- npm

## Instalación y ejecución local

### 1. Clonar el repositorio
```bash
git clone https://github.com/shakatoti1618-wq/proyecto-henry-modulo-2-jonathan-heredia.git
cd proyecto-henry-modulo-2-jonathan-heredia
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
cp .env.example .env
```
Edita el archivo `.env` con tus datos de PostgreSQL.

### 4. Crear la base de datos
```bash
psql -U tu_usuario -d tu_base_de_datos -f sql/setup.sql
psql -U tu_usuario -d tu_base_de_datos -f sql/seed.sql
```

### 5. Ejecutar el servidor
```bash
npm run dev
```
El servidor estará disponible en `http://localhost:3000`

## Documentación OpenAPI

![Swagger UI](img/swagger.png)

Con el servidor corriendo, abre en el navegador:

`http://localhost:3000/api-docs`

O en producción:

`https://proyecto-henry-modulo-2-jonathan-heredia-production.up.railway.app/api-docs`

## API en producción

![API Authors](img/authors.png)

## Ejecutar tests

![Tests](img/tests.png)

```bash
npm test
```

## Deploy en Railway

![Railway Dashboard](img/railway.png)

1. Crear cuenta en [Railway](https://railway.app)
2. Crear nuevo proyecto → Deploy from GitHub
3. Conectar este repositorio
4. Agregar servicio PostgreSQL en Railway
5. Configurar variables de entorno:
   - `DB_HOST` → Internal host de PostgreSQL en Railway
   - `DB_PORT` → 5432
   - `DB_NAME` → railway
   - `DB_USER` → postgres
   - `DB_PASSWORD` → contraseña de Railway
6. Ejecutar los scripts SQL:
```bash
psql -h HOST_PUBLICO -U postgres -p PUERTO -d railway -f sql/setup.sql
psql -h HOST_PUBLICO -U postgres -p PUERTO -d railway -f sql/seed.sql
```

## Endpoints disponibles

### Authors
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /authors | Listar autores |
| GET | /authors/:id | Obtener autor |
| POST | /authors | Crear autor |
| PUT | /authors/:id | Actualizar autor |
| DELETE | /authors/:id | Eliminar autor |

### Posts
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /posts | Listar posts |
| GET | /posts/:id | Obtener post |
| GET | /posts/author/:authorId | Posts de un autor |
| POST | /posts | Crear post |
| PUT | /posts/:id | Actualizar post |
| DELETE | /posts/:id | Eliminar post |

## Variables de entorno

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=miniblog_db
DB_USER=miniblog_user
DB_PASSWORD=tu_contraseña
PORT=3000
```

## Uso de IA

![Uso de IA](img/IA01.png)

![Uso de IA](img/IA02.png)

![Uso de IA](img/IA03.png)


Este proyecto fue desarrollado con asistencia de Claude (Anthropic) como herramienta de apoyo para:
- Estructurar el proyecto siguiendo buenas prácticas de arquitectura backend
- Implementar consultas SQL parametrizadas para evitar SQL injection
- Configurar middlewares de validación y manejo de errores
- Escribir tests con jest y supertest
- Documentar la API con OpenAPI/Swagger

Todos los conceptos fueron comprendidos y aplicados por el estudiante Jonathan Heredia siguiendo la guía del módulo.