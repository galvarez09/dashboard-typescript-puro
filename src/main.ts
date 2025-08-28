import { Router } from './router';
import type { RouterConfig, Route } from './router';
import { 
  dashboardView, 
  analyticsView, 
  usersView, 
  productsView, 
  settingsView 
} from './views';

// Tipos para el dashboard
interface ActivityItem {
  id: number;
  type: 'users' | 'sales' | 'views' | 'rating';
  title: string;
  time: string;
  icon: string;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
}

// Clase principal del Dashboard
class Dashboard {
  private router!: Router;
  private sidebar!: HTMLElement;
  private menuToggle!: HTMLElement;
  private chartPeriod!: HTMLSelectElement;
  private activityList!: HTMLElement;
  private salesChart!: HTMLCanvasElement;
  private usersChart!: HTMLCanvasElement;

  constructor() {
    this.initializeRouter();
    this.initializeElements();
    this.bindEvents();
    this.initializeAnimations();
  }

  private initializeRouter(): void {
    // Configurar las rutas del dashboard
    const routes: Route[] = [
      {
        path: 'dashboard',
        title: 'Dashboard',
        component: dashboardView,
        onMount: () => {
          this.initializeDashboardCharts();
          this.loadActivityData();
        }
      },
      {
        path: 'analytics',
        title: 'Analytics',
        component: analyticsView,
        onMount: () => {
          this.initializeAnalyticsCharts();
        }
      },
      {
        path: 'users',
        title: 'Usuarios',
        component: usersView,
        onMount: () => {
          this.initializeUsersCharts();
          this.loadUsersData();
        }
      },
      {
        path: 'products',
        title: 'Productos',
        component: productsView,
        onMount: () => {
          this.initializeProductsCharts();
          this.loadProductsData();
        }
      },
      {
        path: 'settings',
        title: 'Configuración',
        component: settingsView,
        onMount: () => {
          this.initializeSettingsTabs();
        }
      }
    ];

    const routerConfig: RouterConfig = {
      routes,
      defaultRoute: 'dashboard'
    };

    this.router = new Router(routerConfig);
  }

  private initializeElements(): void {
    this.sidebar = document.querySelector('.sidebar') as HTMLElement;
    this.menuToggle = document.getElementById('menuToggle') as HTMLElement;
    this.chartPeriod = document.getElementById('chartPeriod') as HTMLSelectElement;
    this.activityList = document.getElementById('activityList') as HTMLElement;
    this.salesChart = document.getElementById('salesChart') as HTMLCanvasElement;
    this.usersChart = document.getElementById('usersChart') as HTMLCanvasElement;
  }

  private bindEvents(): void {
    // Toggle del menú móvil
    this.menuToggle?.addEventListener('click', () => {
      this.sidebar.classList.toggle('open');
    });

    // Cerrar sidebar al hacer clic fuera en móvil
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024 && 
          !this.sidebar.contains(e.target as Node) && 
          !this.menuToggle.contains(e.target as Node)) {
        this.sidebar.classList.remove('open');
      }
    });

    // Búsqueda
    const searchInput = document.querySelector('.search-bar input') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.handleSearch((e.target as HTMLInputElement).value);
      });
    }

    // Notificaciones
    const notifications = document.querySelector('.notifications') as HTMLElement;
    if (notifications) {
      notifications.addEventListener('click', () => {
        this.showNotifications();
      });
    }

    // Perfil de usuario
    const userProfile = document.querySelector('.user-profile') as HTMLElement;
    if (userProfile) {
      userProfile.addEventListener('click', () => {
        this.showUserMenu();
      });
    }
  }

  private handleSearch(query: string): void {
    if (query.length > 0) {
      console.log(`Buscando: ${query}`);
      // Aquí implementarías la lógica de búsqueda global
      this.showToast(`Buscando: ${query}`, 'info');
    }
  }

  private showNotifications(): void {
    // Simular notificaciones
    const notifications = [
      'Nuevo usuario registrado',
      'Venta completada por $1,250',
      'Actualización del sistema disponible'
    ];

    this.showToast(`Tienes ${notifications.length} notificaciones nuevas`, 'info');
  }

  private showUserMenu(): void {
    // Simular menú de usuario
    this.showToast('Menú de usuario', 'info');
  }

  private showToast(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
    // Crear toast notification
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
      </div>
    `;

    // Estilos del toast
    Object.assign(toast.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1',
      color: 'white',
      padding: '1rem 1.5rem',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      zIndex: '10000',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease-out'
    });

    document.body.appendChild(toast);

    // Animar entrada
    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
    }, 100);

    // Remover después de 3 segundos
    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }

  // Inicialización de gráficos del dashboard
  private initializeDashboardCharts(): void {
    setTimeout(() => {
      this.salesChart = document.getElementById('salesChart') as HTMLCanvasElement;
      this.usersChart = document.getElementById('usersChart') as HTMLCanvasElement;
      this.chartPeriod = document.getElementById('chartPeriod') as HTMLSelectElement;

      if (this.salesChart && this.usersChart) {
        this.createSalesChart();
        this.createUsersChart();
      }

      if (this.chartPeriod) {
        this.chartPeriod.addEventListener('change', () => {
          this.updateSalesChart();
        });
      }
    }, 100);
  }

  // Inicialización de gráficos de analytics
  private initializeAnalyticsCharts(): void {
    setTimeout(() => {
      this.createTrendsChart();
      this.createDevicesChart();
      this.bindAnalyticsFilters();
    }, 100);
  }

  // Inicialización de gráficos de usuarios
  private initializeUsersCharts(): void {
    setTimeout(() => {
      this.createAgeChart();
      this.createCountryChart();
    }, 100);
  }

  // Inicialización de gráficos de productos
  private initializeProductsCharts(): void {
    setTimeout(() => {
      this.createCategoryChart();
      this.createTopProductsChart();
      this.bindProductFilters();
    }, 100);
  }

  // Inicialización de pestañas de configuración
  private initializeSettingsTabs(): void {
    setTimeout(() => {
      this.bindSettingsTabs();
      this.bindSettingsActions();
    }, 100);
  }

  private createSalesChart(): void {
    const ctx = this.salesChart.getContext('2d');
    if (!ctx) return;

    const data: ChartData = {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
      datasets: [{
        label: 'Ventas ($)',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2
      }]
    };

    this.drawLineChart(ctx, data, 'Ventas Mensuales');
  }

  private createUsersChart(): void {
    const ctx = this.usersChart.getContext('2d');
    if (!ctx) return;

    const data: ChartData = {
      labels: ['Activos', 'Inactivos', 'Nuevos', 'Premium'],
      datasets: [{
        label: 'Usuarios',
        data: [65, 20, 10, 5],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)'
        ]
      }]
    };

    this.drawDoughnutChart(ctx, data, 'Distribución de Usuarios');
  }

  private createTrendsChart(): void {
    const canvas = document.getElementById('trendsChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const data: ChartData = {
      labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
      datasets: [{
        label: 'Visitas',
        data: [1200, 1900, 1500, 2500, 2200, 3000, 2800],
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2
      }]
    };

    this.drawLineChart(ctx, data, 'Tendencias de Visitas');
  }

  private createDevicesChart(): void {
    const canvas = document.getElementById('devicesChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const data: ChartData = {
      labels: ['Desktop', 'Mobile', 'Tablet'],
      datasets: [{
        label: 'Dispositivos',
        data: [45, 40, 15],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)'
        ]
      }]
    };

    this.drawDoughnutChart(ctx, data, 'Distribución por Dispositivos');
  }

  private createAgeChart(): void {
    const canvas = document.getElementById('ageChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const data: ChartData = {
      labels: ['18-25', '26-35', '36-45', '46-55', '55+'],
      datasets: [{
        label: 'Usuarios',
        data: [25, 35, 20, 15, 5],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)'
        ]
      }]
    };

    this.drawDoughnutChart(ctx, data, 'Distribución por Edad');
  }

  private createCountryChart(): void {
    const canvas = document.getElementById('countryChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const data: ChartData = {
      labels: ['México', 'España', 'Colombia', 'Argentina', 'Chile'],
      datasets: [{
        label: 'Usuarios',
        data: [40, 25, 15, 12, 8],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)'
        ]
      }]
    };

    this.drawDoughnutChart(ctx, data, 'Distribución por País');
  }

  private createCategoryChart(): void {
    const canvas = document.getElementById('categoryChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const data: ChartData = {
      labels: ['Electrónicos', 'Ropa', 'Libros', 'Hogar'],
      datasets: [{
        label: 'Ventas',
        data: [35, 28, 22, 15],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)'
        ]
      }]
    };

    this.drawDoughnutChart(ctx, data, 'Ventas por Categoría');
  }

  private createTopProductsChart(): void {
    const canvas = document.getElementById('topProductsChart') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const data: ChartData = {
      labels: ['Producto A', 'Producto B', 'Producto C', 'Producto D', 'Producto E'],
      datasets: [{
        label: 'Ventas',
        data: [120, 98, 87, 76, 65],
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2
      }]
    };

    this.drawLineChart(ctx, data, 'Productos Más Vendidos');
  }

  private bindAnalyticsFilters(): void {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        filterBtns.forEach(b => b.classList.remove('active'));
        target.classList.add('active');
        
        const period = target.getAttribute('data-period');
        console.log(`Cambiando período a: ${period}`);
        // Aquí actualizarías el gráfico según el período
      });
    });
  }

  private bindProductFilters(): void {
    const categoryFilter = document.getElementById('categoryFilter') as HTMLSelectElement;
    const statusFilter = document.getElementById('statusFilter') as HTMLSelectElement;
    const priceRange = document.getElementById('priceRange') as HTMLInputElement;
    const priceValue = document.getElementById('priceValue') as HTMLElement;

    if (categoryFilter) {
      categoryFilter.addEventListener('change', () => {
        console.log(`Filtro de categoría: ${categoryFilter.value}`);
      });
    }

    if (statusFilter) {
      statusFilter.addEventListener('change', () => {
        console.log(`Filtro de estado: ${statusFilter.value}`);
      });
    }

    if (priceRange && priceValue) {
      priceRange.addEventListener('input', () => {
        priceValue.textContent = `$${priceRange.value}`;
      });
    }
  }

  private bindSettingsTabs(): void {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const tabName = target.getAttribute('data-tab');

        // Remover clases activas
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Activar tab seleccionado
        target.classList.add('active');
        const activeContent = document.getElementById(tabName || 'general');
        if (activeContent) {
          activeContent.classList.add('active');
        }
      });
    });
  }

  private bindSettingsActions(): void {
    const saveBtn = document.getElementById('saveSettings');
    const resetBtn = document.getElementById('resetSettings');

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        this.showToast('Configuración guardada exitosamente', 'success');
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.showToast('Configuración restablecida', 'info');
      });
    }
  }

  private drawLineChart(ctx: CanvasRenderingContext2D, data: ChartData, title: string): void {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const padding = 40;

    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);

    // Encontrar valores máximos y mínimos
    const maxValue = Math.max(...data.datasets[0].data);
    const minValue = Math.min(...data.datasets[0].data);
    const range = maxValue - minValue;

    // Dibujar ejes
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    
    // Eje Y
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.stroke();

    // Eje X
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Dibujar línea de datos
    ctx.strokeStyle = data.datasets[0].borderColor as string;
    ctx.lineWidth = 3;
    ctx.beginPath();

    data.datasets[0].data.forEach((value, index) => {
      const x = padding + (index * (width - 2 * padding)) / (data.labels.length - 1);
      const y = height - padding - ((value - minValue) / range) * (height - 2 * padding);
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();

    // Dibujar puntos
    ctx.fillStyle = data.datasets[0].borderColor as string;
    data.datasets[0].data.forEach((value, index) => {
      const x = padding + (index * (width - 2 * padding)) / (data.labels.length - 1);
      const y = height - padding - ((value - minValue) / range) * (height - 2 * padding);
      
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Dibujar etiquetas del eje X
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    data.labels.forEach((label, index) => {
      const x = padding + (index * (width - 2 * padding)) / (data.labels.length - 1);
      ctx.fillText(label, x, height - padding + 20);
    });

    // Dibujar título
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 16px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(title, width / 2, padding - 10);
  }

  private drawDoughnutChart(ctx: CanvasRenderingContext2D, data: ChartData, title: string): void {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 60;

    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);

    const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
    let currentAngle = -Math.PI / 2; // Empezar desde arriba

    // Dibujar sectores
    data.datasets[0].data.forEach((value, index) => {
      const sliceAngle = (2 * Math.PI * value) / total;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      
      const backgroundColor = Array.isArray(data.datasets[0].backgroundColor) 
        ? data.datasets[0].backgroundColor[index] 
        : data.datasets[0].backgroundColor;
      ctx.fillStyle = backgroundColor as string;
      ctx.fill();

      currentAngle += sliceAngle;
    });

    // Dibujar círculo central
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    // Dibujar título
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 16px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(title, centerX, centerY - 10);

    // Dibujar total
    ctx.fillStyle = '#64748b';
    ctx.font = '14px Inter';
    ctx.fillText(`${total} total`, centerX, centerY + 15);

    // Dibujar leyenda
    let legendY = 40;
    data.labels.forEach((label, index) => {
      const value = data.datasets[0].data[index];
      const percentage = ((value / total) * 100).toFixed(1);
      
      const backgroundColor = Array.isArray(data.datasets[0].backgroundColor) 
        ? data.datasets[0].backgroundColor[index] 
        : data.datasets[0].backgroundColor;
      ctx.fillStyle = backgroundColor as string;
      ctx.fillRect(20, legendY, 15, 15);
      
      ctx.fillStyle = '#1e293b';
      ctx.font = '12px Inter';
      ctx.textAlign = 'left';
      ctx.fillText(`${label}: ${percentage}%`, 45, legendY + 12);
      
      legendY += 25;
    });
  }

  private updateSalesChart(): void {
    const period = parseInt(this.chartPeriod.value);
    let labels: string[];
    let data: number[];

    switch (period) {
      case 7:
        labels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
        data = [1200, 1900, 1500, 2500, 2200, 3000, 2800];
        break;
      case 30:
        labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];
        data = [12000, 19000, 15000, 25000];
        break;
      case 90:
        labels = ['Mes 1', 'Mes 2', 'Mes 3'];
        data = [45000, 52000, 48000];
        break;
      default:
        labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
        data = [12000, 19000, 15000, 25000, 22000, 30000];
    }

    const chartData: ChartData = {
      labels,
      datasets: [{
        label: 'Ventas ($)',
        data,
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2
      }]
    };

    const ctx = this.salesChart.getContext('2d');
    if (ctx) {
      this.drawLineChart(ctx, chartData, 'Ventas');
    }
  }

  private loadActivityData(): void {
    const activities: ActivityItem[] = [
      {
        id: 1,
        type: 'users',
        title: 'Nuevo usuario registrado: Juan Pérez',
        time: 'Hace 5 minutos',
        icon: 'fas fa-user-plus'
      },
      {
        id: 2,
        type: 'sales',
        title: 'Venta completada por $1,250',
        time: 'Hace 15 minutos',
        icon: 'fas fa-shopping-cart'
      },
      {
        id: 3,
        type: 'views',
        title: 'Página de productos visitada 150 veces',
        time: 'Hace 1 hora',
        icon: 'fas fa-eye'
      },
      {
        id: 4,
        type: 'rating',
        title: 'Nueva reseña 5 estrellas recibida',
        time: 'Hace 2 horas',
        icon: 'fas fa-star'
      },
      {
        id: 5,
        type: 'users',
        title: 'Usuario premium actualizado: María García',
        time: 'Hace 3 horas',
        icon: 'fas fa-crown'
      }
    ];

    this.renderActivityList(activities);
  }

  private loadUsersData(): void {
    const userTableBody = document.getElementById('userTableBody');
    if (!userTableBody) return;

    const users = [
      { name: 'Juan Pérez', email: 'juan@email.com', status: 'Activo', plan: 'Premium', lastActivity: 'Hace 2 horas' },
      { name: 'María García', email: 'maria@email.com', status: 'Activo', plan: 'Básico', lastActivity: 'Hace 1 día' },
      { name: 'Carlos López', email: 'carlos@email.com', status: 'Inactivo', plan: 'Básico', lastActivity: 'Hace 1 semana' },
      { name: 'Ana Martínez', email: 'ana@email.com', status: 'Activo', plan: 'Premium', lastActivity: 'Hace 3 horas' },
      { name: 'Luis Rodríguez', email: 'luis@email.com', status: 'Activo', plan: 'Básico', lastActivity: 'Hace 6 horas' }
    ];

    if (userTableBody) {
      userTableBody.innerHTML = users.map(user => `
        <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td><span class="status-badge ${user.status.toLowerCase()}">${user.status}</span></td>
          <td>${user.plan}</td>
          <td>${user.lastActivity}</td>
          <td>
            <button class="btn-icon" title="Editar"><i class="fas fa-edit"></i></button>
            <button class="btn-icon" title="Eliminar"><i class="fas fa-trash"></i></button>
          </td>
        </tr>
      `).join('');
    }
  }

  private loadProductsData(): void {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;

    const products = [
      { name: 'Laptop Gaming', category: 'Electrónicos', price: '$1,299', status: 'Activo', rating: 4.8 },
      { name: 'Camiseta Premium', category: 'Ropa', price: '$45', status: 'Activo', rating: 4.5 },
      { name: 'Libro de Programación', category: 'Libros', price: '$35', status: 'Activo', rating: 4.9 },
      { name: 'Sofá Moderno', category: 'Hogar', price: '$599', status: 'Activo', rating: 4.7 }
    ];

    if (productGrid) {
      productGrid.innerHTML = products.map(product => `
        <div class="product-card">
          <div class="product-image">
            <i class="fas fa-box"></i>
          </div>
          <div class="product-info">
            <h4>${product.name}</h4>
            <p class="product-category">${product.category}</p>
            <p class="product-price">${product.price}</p>
            <div class="product-meta">
              <span class="status-badge ${product.status.toLowerCase()}">${product.status}</span>
              <span class="rating">⭐ ${product.rating}</span>
            </div>
          </div>
          <div class="product-actions">
            <button class="btn-icon" title="Editar"><i class="fas fa-edit"></i></button>
            <button class="btn-icon" title="Eliminar"><i class="fas fa-trash"></i></button>
          </div>
        </div>
      `).join('');
    }
  }

  private renderActivityList(activities: ActivityItem[]): void {
    if (!this.activityList) return;

    this.activityList.innerHTML = activities.map(activity => `
      <div class="activity-item" data-id="${activity.id}">
        <div class="activity-icon ${activity.type}">
          <i class="${activity.icon}"></i>
        </div>
        <div class="activity-content">
          <div class="activity-title">${activity.title}</div>
          <div class="activity-time">${activity.time}</div>
        </div>
      </div>
    `).join('');

    // Agregar eventos a los items de actividad
    this.activityList.querySelectorAll('.activity-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        console.log(`Actividad seleccionada: ${id}`);
      });
    });
  }

  private initializeAnimations(): void {
    // Animación de entrada para las tarjetas de estadísticas
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observar elementos para animación
    document.querySelectorAll('.stat-card, .chart-container, .recent-activity, .section-content').forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });
  }

  // Método público para actualizar datos en tiempo real
  public updateStats(): void {
    // Simular actualización de estadísticas
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat) => {
      const currentValue = parseInt(stat.textContent?.replace(/[^\d]/g, '') || '0');
      const newValue = currentValue + Math.floor(Math.random() * 100);
      
      // Animar el cambio de número
      this.animateNumber(stat as HTMLElement, currentValue, newValue);
    });
  }

  private animateNumber(element: HTMLElement, start: number, end: number): void {
    const duration = 1000;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const current = Math.floor(start + (end - start) * this.easeOutQuart(progress));
      element.textContent = this.formatNumber(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }

  private easeOutQuart(t: number): number {
    return 1 - Math.pow(1 - t, 4);
  }

  private formatNumber(num: number): string {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  }

  // Método público para obtener el router
  public getRouter(): Router {
    return this.router;
  }
}

// Inicializar el dashboard cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const dashboard = new Dashboard();
  
  // Simular actualizaciones en tiempo real cada 30 segundos
  setInterval(() => {
    dashboard.updateStats();
  }, 30000);
  
  console.log('Dashboard con enrutamiento inicializado correctamente');
});

// Exportar para uso en otros módulos si es necesario
export { Dashboard };
