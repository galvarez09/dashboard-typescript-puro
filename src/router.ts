// Tipos para el sistema de enrutamiento
export interface Route {
  path: string;
  title: string;
  component: () => string;
  onMount?: () => void;
}

export interface RouterConfig {
  routes: Route[];
  defaultRoute: string;
}

// Clase principal del Router
export class Router {
  private routes: Route[];
  private defaultRoute: string;
  private currentRoute: string;
  private contentContainer: HTMLElement | null = null;

  constructor(config: RouterConfig) {
    this.routes = config.routes;
    this.defaultRoute = config.defaultRoute;
    this.currentRoute = this.defaultRoute;
    this.initializeRouter();
  }

  private initializeRouter(): void {
    // Obtener el contenedor de contenido
    this.contentContainer = document.querySelector('.dashboard-content');
    
    // Configurar el historial del navegador
    this.setupHistory();
    
    // Manejar navegación inicial
    this.navigateTo(this.getCurrentPath() || this.defaultRoute);
  }

  private setupHistory(): void {
    // Interceptar clics en enlaces del sidebar
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const path = link.getAttribute('href')?.substring(1);
        if (path) {
          this.navigateTo(path);
        }
      }
    });

    // Manejar navegación del navegador (botones atrás/adelante)
    window.addEventListener('popstate', () => {
      const path = this.getCurrentPath();
      if (path) {
        this.navigateTo(path, false);
      }
    });
  }

  private getCurrentPath(): string {
    return window.location.hash.substring(1) || this.defaultRoute;
  }

  public navigateTo(path: string, updateHistory: boolean = true): void {
    const route = this.routes.find(r => r.path === path);
    
    if (!route) {
      console.warn(`Ruta no encontrada: ${path}`);
      this.navigateTo(this.defaultRoute, updateHistory);
      return;
    }

    // Actualizar la ruta actual
    this.currentRoute = path;
    
    // Actualizar el historial del navegador
    if (updateHistory) {
      window.history.pushState({ path }, '', `#${path}`);
    }
    
    // Actualizar la URL activa en el sidebar
    this.updateActiveNavigation(path);
    
    // Renderizar el contenido
    this.renderContent(route);
    
    // Actualizar el título de la página
    this.updatePageTitle(route.title);
    
    // Ejecutar función onMount si existe
    if (route.onMount) {
      route.onMount();
    }
  }

  private updateActiveNavigation(path: string): void {
    // Remover clase active de todos los items
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });

    // Agregar clase active al item correspondiente
    const activeLink = document.querySelector(`[href="#${path}"]`);
    if (activeLink) {
      const navItem = activeLink.closest('.nav-item');
      if (navItem) {
        navItem.classList.add('active');
      }
    }
  }

  private updatePageTitle(title: string): void {
    const header = document.querySelector('.top-header h1') as HTMLElement;
    if (header) {
      header.textContent = title;
    }
  }

  private renderContent(route: Route): void {
    if (!this.contentContainer) return;

    // Limpiar el contenedor
    this.contentContainer.innerHTML = '';
    
    // Renderizar el nuevo contenido
    const content = route.component();
    this.contentContainer.innerHTML = content;
    
    // Aplicar animaciones de entrada
    this.animateContentEntry();
  }

  private animateContentEntry(): void {
    const elements = this.contentContainer?.querySelectorAll('.stat-card, .chart-container, .recent-activity, .section-content');
    
    if (elements) {
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }
  }

  public getCurrentRoute(): string {
    return this.currentRoute;
  }

  public getRoutes(): Route[] {
    return this.routes;
  }
}
