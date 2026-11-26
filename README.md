# Pre-entrega 1

## Descripción

Gestor de servicios de jardinería. Permite ver, agregar, editar y eliminar servicios.

## Instalación

Necesitás tener Node instalado.

```bash
npm install
```

## Ejecución

1. Copiá `.env.example` como `.env` y completá las variables.
2. Corré:

```bash
npm start
```

## Variables de entorno

| Variable   | Descripción                  
| ---------- | ---------------------------- | 
| `PORT`     | Puerto de la aplicación      | 
| `NODE_ENV` | Entorno de ejecución         | 

## Recurso `services`

Lista de servicios guardada en `src/data/services.json`. Cada servicio tiene:

- `id`: número único (number).
- `name`: nombre (string).
- `description`: descripción (string).
- `duration`: duración (string).
- `price`: precio (number).
- `category`: categoría (string).
- `available`: disponible o no (boolean).

## Ejemplos de uso

Los métodos están en `ServiceManager`.

```js

// Ver todos los servicios
manager.getServices();

// Buscar un servicio por id
manager.getServiceById(2);

// Agregar un servicio
manager.addService({
  name: "Poda de árboles",
  description: "Poda de ramas y árboles frutales.",
  duration: "1 día",
  price: 200,
  category: "Mantenimiento"
});

// Editar un servicio
manager.updateService(3, { available: true });

// Eliminar un servicio
manager.deleteService(3);
```
