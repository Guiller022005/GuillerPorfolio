# Portfolio Personal - Guiller

## 📋 Descripción

Este es mi portafolio personal desarrollado con Vue 3 y Vite, que presenta una interfaz moderna y responsive con un diseño elegante y profesional. El proyecto utiliza un esquema de colores basado en tonos azules y cuenta con animaciones suaves para mejorar la experiencia del usuario.

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (versión 14.0.0 o superior)
- npm (incluido con Node.js)

### Instalación

1. Clona el repositorio

```
bashCopygit clone [URL-de-tu-repositorio]
cd GUILLERPORFOLIO
```

1. Instala las dependencias

```
bash

Copy

npm install
```

1. Inicia el servidor de desarrollo

```
bash

Copy

npm run dev
```

1. Abre tu navegador y visita:

```
Copy

http://localhost:5173/GUILLERPORFOLIO/
```

## 🛠️ Construido Con

- [Vue 3](https://vuejs.org/) - Framework de JavaScript progresivo
- [Vite](https://vitejs.dev/) - Build tool y servidor de desarrollo
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript

## 📁 Estructura del Proyecto

```
CopyGUILLERPORFOLIO/
├── src/
│   ├── components/
│   │   ├── Contact.vue
│   │   ├── HelloWorld.vue
│   │   ├── NavBar.vue
│   │   ├── Profile.vue
│   │   ├── Projects.vue
│   │   └── Skills.vue
│   ├── assets/
│   ├── App.vue
│   ├── main.js
│   ├── main.ts
│   └── shims-vue.d.ts
├── public/
├── .vscode/
├── node_modules/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.tsbuildinfo
└── README.md
```

## 🎨 Características y Diseño

### Diseño Responsive

- Diseño completamente responsive que se adapta a móviles, tablets y escritorio
- Sistema de grid flexible para diferentes tamaños de pantalla
- Menú de navegación adaptativo con soporte para móviles

### Componentes Principales

1. Header y Navegación
   - Barra de navegación fija con fondo semi-transparente
   - Menú responsive que se convierte en menú hamburguesa en móviles
2. Perfil
   - Imagen de perfil con borde personalizado y efectos de sombra
   - Diseño flexible que se adapta a diferentes tamaños de pantalla
   - Botón CTA (Call-to-Action) con efectos hover
3. Sección de Habilidades
   - Grid de 4 columnas en escritorio, 3 en tablets y 2 en móviles
   - Tarjetas con efecto de rotación 3D al hover
   - Diseño de dos caras con información adicional en el reverso
4. Sección de Proyectos
   - Grid responsive de proyectos
   - Tarjetas con efectos de hover y escala
   - Imágenes optimizadas con object-fit
5. Sección de Soft Skills
   - Diseño de pirámide en escritorio
   - Se transforma en grid en dispositivos móviles
   - Elementos interactivos con efectos hover
6. Sección de Contacto
   - Iconos sociales con efectos de transición
   - Diseño centrado y limpio

### Estilo Visual

- Gradiente de fondo dinámico: `linear-gradient(to bottom right, #000203, #006DA3, #5CC9FF, #000203)`
- Esquema de colores:
  - Primario: `#006DA3`
  - Secundario: `#0D456E`
  - Fondos: `#2d3748`
  - Texto: `#f7fafc`
- Animaciones y transiciones suaves
- Efectos de hover en elementos interactivos
