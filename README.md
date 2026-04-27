# Calculadora REST - Practica 04

API REST en Node.js + Express con pipeline CI/CD a Kubernetes en EKS.

## Endpoints

- `GET /health` - health check

## Correr en local

```bash
npm install
npm start
```

La app escucha en el puerto 3000.

## Tests

```bash
npm test
```

## Docker

```bash
docker build -t calculadora .
docker run -p 3000:3000 calculadora
```

## Pipeline

- `integrate` corre en cada PR a `main` y ejecuta los tests.
- `delivery` corre al hacer push de un tag `v*`, construye la imagen y la sube a Docker Hub.
- `deploy` corre cuando `delivery` termina con exito y aplica los manifests al cluster de EKS.
