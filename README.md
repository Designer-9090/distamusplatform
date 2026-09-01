# Distamus Platform

Plataforma web desarrollada con **Astro** que presenta información sobre la solución Distamus y su evolución a lo largo del tiempo.

## 📋 Descripción

Distamus Platform es una aplicación web estática optimizada construida con Astro que proporciona:

- **Página de inicio**: Presentación de la plataforma Distamus
- **Sección de productos**: Información detallada sobre productos y servicios
- **Evolución del producto**: Timeline interactivo que muestra la evolución de Distamus
- **Información corporativa**: Página "Sobre nosotros" con detalles de la empresa

## ✨ Características

- 🚀 Sitio estático ultra-rápido con Astro
- 📱 Diseño responsivo
- ⚡ Optimización de rendimiento
- 🎨 Componentes reutilizables
- 📊 Datos estructurados en TypeScript

## 🔧 Requisitos Previos

- **Node.js**: v22.12.0 o superior
- **npm** o **pnpm**

## 📦 Instalación

1. Clona o accede al repositorio:
```bash
cd distamus-platform
```

2. Instala las dependencias:
```bash
npm install
```

## 🚀 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación
npm run preview

# Ejecutar comandos de Astro directamente
npm run astro
```

### Modo de Desarrollo en Background

Para ejecutar el servidor de desarrollo en background:

```bash
astro dev --background
```

Gestiona el servidor con:
```bash
astro dev stop      # Detener el servidor
astro dev status    # Ver estado del servidor
astro dev logs      # Ver logs del servidor
```

## 📁 Estructura del Proyecto

```
src/
├── pages/
│   ├── index.astro              # Página de inicio
│   ├── sobre-nosotros.astro     # Página de información corporativa
│   └── producto/                # Sección de productos
├── components/
│   ├── ProductoEvolucion.astro  # Componente de timeline de evolución
│   └── Topbar.astro             # Barra de navegación superior
├── layouts/
│   └── [Layouts compartidos]
├── data/
│   └── evolucion.ts             # Datos de evolución del producto
└── pages/
public/                          # Archivos estáticos

dist/                            # Compilación final (generado)
```

## 🛠️ Desarrollo

### Trabajar con Componentes Astro

Los componentes están ubicados en `src/components/`. Consulta la [documentación de Astro](https://docs.astro.build/en/basics/astro-components/) para más detalles.

### Agregar Nuevas Páginas

Las páginas se crean en `src/pages/` siguiendo el patrón de enrutamiento de Astro.

Referencia: [Routing en Astro](https://docs.astro.build/en/guides/routing/)

### Gestionar Datos

Los datos del proyecto se encuentran en `src/data/` y se importan en los componentes necesarios.

### Estilos

Puedes usar:
- CSS tradicional
- Tailwind CSS
- CSS Modules
- Sass/SCSS

Consulta la [guía de estilos](https://docs.astro.build/en/guides/styling/)

## 🏗️ Build y Despliegue

### Compilar para Producción

```bash
npm run build
```

Esto genera una carpeta `dist/` con los archivos estáticos optimizados listos para desplegar.

### Previsualizar la Compilación

```bash
npm run preview
```

Permite visualizar cómo se vería en producción en tu máquina local.

## 🛠️ Tecnologías

- **Astro 7.2.10**: Framework SSG (Static Site Generation)
- **TypeScript**: Tipado estático
- **Node.js**: v22.12.0+
- **npm**: Gestor de paquetes

## 📚 Documentación y Recursos

- [Documentación oficial de Astro](https://docs.astro.build)
- [Guides de Astro](https://docs.astro.build/en/guides/)
- [Ejemplos de Astro](https://astro.build/showcase)

### Guías Relevantes

- [Routing y páginas dinámicas](https://docs.astro.build/en/guides/routing/)
- [Componentes Astro](https://docs.astro.build/en/basics/astro-components/)
- [Componentes de frameworks](https://docs.astro.build/en/guides/framework-components/)
- [Gestión de contenido](https://docs.astro.build/en/guides/content-collections/)
- [Internacionalización](https://docs.astro.build/en/guides/internationalization/)

## 📝 Información Adicional

Para más información sobre desarrollo y arquitectura del proyecto, consulta:
- [AGENTS.md](./AGENTS.md) - Información de desarrollo
- [CLAUDE.md](./CLAUDE.md) - Guías técnicas

## 📄 Licencia y Copyright

© 2026 **Distamus**. Todos los derechos reservados.

**Aviso Importante**: Este proyecto es de uso exclusivo interno de Distamus. Está prohibida la distribución, reproducción, modificación o cualquier otro uso sin autorización expresa de Distamus.

Acceso restringido solo al personal interno de Distamus.

---

**Última actualización**: 2026