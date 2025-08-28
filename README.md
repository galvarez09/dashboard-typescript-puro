# Dashboard Moderno con TypeScript y Vite

Un dashboard elegante y moderno construido con **TypeScript puro**, **HTML5**, **CSS3** y **Vite** como bundler. Sin frameworks externos, solo tecnologías web nativas.

## 🚀 Características

- **Diseño Responsivo**: Se adapta perfectamente a todos los dispositivos
- **Sidebar Navegable**: Menú lateral con navegación fluida
- **Tarjetas de Estadísticas**: Métricas clave con animaciones
- **Gráficos Interactivos**: Gráficos de línea y dona usando Canvas API
- **Actividad en Tiempo Real**: Lista de actividades recientes
- **Sistema de Notificaciones**: Toast notifications elegantes
- **Búsqueda Integrada**: Barra de búsqueda funcional
- **Modo Oscuro**: Soporte automático para preferencias del sistema
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **TypeScript Completo**: Tipado fuerte y código robusto

## 🛠️ Tecnologías Utilizadas

- **TypeScript** - Tipado estático y desarrollo robusto
- **HTML5** - Estructura semántica moderna
- **CSS3** - Variables CSS, Grid, Flexbox, animaciones
- **Vite** - Bundler rápido y moderno
- **Canvas API** - Gráficos personalizados sin librerías externas
- **Font Awesome** - Iconografía profesional
- **Google Fonts** - Tipografía Inter para mejor legibilidad

## 📁 Estructura del Proyecto

```
vite-project-typescript/
├── index.html              # Página principal del dashboard
├── package.json            # Dependencias y scripts
├── tsconfig.json          # Configuración de TypeScript
├── src/
│   ├── main.ts            # Lógica principal del dashboard
│   └── style.css          # Estilos y diseño
└── README.md              # Este archivo
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone <tu-repositorio>
   cd vite-project-typescript
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - El proyecto se abrirá automáticamente en `http://localhost:5173`
   - O navega manualmente a la URL mostrada en la terminal

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con hot reload
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build de producción

## 🎨 Características del Diseño

### Paleta de Colores
- **Primario**: Indigo (#6366f1)
- **Éxito**: Verde (#10b981)
- **Advertencia**: Amarillo (#f59e0b)
- **Error**: Rojo (#ef4444)
- **Acento**: Cian (#06b6d4)

### Componentes Principales

#### 1. Sidebar
- Logo y branding
- Navegación principal
- Menú responsive para móviles

#### 2. Header Superior
- Título de la página
- Barra de búsqueda
- Notificaciones
- Perfil de usuario

#### 3. Dashboard Principal
- **Tarjetas de Estadísticas**: 4 métricas clave con iconos y cambios porcentuales
- **Gráficos**: 
  - Gráfico de línea para ventas (con selector de período)
  - Gráfico de dona para distribución de usuarios
- **Actividad Reciente**: Lista de eventos del sistema

## 🔧 Funcionalidades Técnicas

### Sistema de Gráficos
- **Canvas API nativo**: Sin dependencias externas
- **Gráficos responsivos**: Se adaptan al tamaño del contenedor
- **Interactividad**: Cambio de períodos en tiempo real
- **Animaciones**: Transiciones suaves entre datos

### Gestión de Estado
- **TypeScript interfaces**: Tipado fuerte para datos
- **Event listeners**: Manejo eficiente de eventos del DOM
- **Observers**: Animaciones basadas en intersección

### Responsividad
- **Mobile-first**: Diseño optimizado para móviles
- **Breakpoints**: 1024px, 768px, 480px
- **Sidebar móvil**: Menú hamburguesa funcional

## 📱 Responsividad

El dashboard está completamente optimizado para todos los dispositivos:

- **Desktop** (>1024px): Layout completo con sidebar fijo
- **Tablet** (768px-1024px): Sidebar colapsable
- **Mobile** (<768px): Sidebar overlay, elementos apilados

## 🎯 Personalización

### Cambiar Colores
Edita las variables CSS en `src/style.css`:

```css
:root {
  --primary-color: #6366f1;    /* Color principal */
  --success-color: #10b981;    /* Color de éxito */
  --warning-color: #f59e0b;    /* Color de advertencia */
  --danger-color: #ef4444;     /* Color de error */
}
```

### Agregar Nuevas Secciones
1. Añade el enlace en el sidebar
2. Crea el contenido en el HTML
3. Implementa la lógica en `main.ts`

### Modificar Gráficos
Los gráficos están implementados en métodos separados:
- `drawLineChart()` - Para gráficos de línea
- `drawDoughnutChart()` - Para gráficos de dona

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

### Servidor de Producción
```bash
npm run preview
```

### Despliegue en Servidores
El proyecto genera archivos estáticos que se pueden desplegar en:
- Netlify
- Vercel
- GitHub Pages
- Cualquier servidor web estático

## 🔍 Funcionalidades Avanzadas

### Sistema de Notificaciones
- Toast notifications automáticas
- Diferentes tipos: éxito, error, información
- Animaciones de entrada/salida

### Búsqueda en Tiempo Real
- Filtrado instantáneo
- Eventos de teclado optimizados
- Logging de consultas

### Actualizaciones Automáticas
- Estadísticas que se actualizan cada 30 segundos
- Animaciones de números
- Simulación de datos en tiempo real

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Gráficos no se muestran**
   - Verifica que los elementos canvas existan en el DOM
   - Revisa la consola del navegador para errores

2. **Sidebar no funciona en móvil**
   - Asegúrate de que el botón de menú tenga el ID correcto
   - Verifica que los eventos estén correctamente vinculados

3. **Estilos no se cargan**
   - Verifica la ruta del archivo CSS en `index.html`
   - Asegúrate de que Vite esté funcionando correctamente

### Debugging
- Usa `console.log()` para debugging
- Revisa la consola del navegador
- Verifica que TypeScript compile sin errores

## 🤝 Contribuciones

Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **Vite** por el bundler increíblemente rápido
- **TypeScript** por el tipado estático robusto
- **Font Awesome** por los iconos profesionales
- **Google Fonts** por la tipografía Inter

## 📞 Contacto

Si tienes preguntas o sugerencias:
- Abre un issue en GitHub
- Contribuye con código
- Comparte tu experiencia

---

**¡Disfruta construyendo tu dashboard moderno! 🎉**
