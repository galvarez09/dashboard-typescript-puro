// Vistas del dashboard
export const dashboardView = (): string => `
  <!-- Stats Cards -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon">
        <i class="fas fa-users"></i>
      </div>
      <div class="stat-info">
        <h3>Total Usuarios</h3>
        <p class="stat-number">12,847</p>
        <span class="stat-change positive">+12.5%</span>
      </div>
    </div>
    
    <div class="stat-card">
      <div class="stat-icon">
        <i class="fas fa-shopping-cart"></i>
      </div>
      <div class="stat-info">
        <h3>Ventas</h3>
        <p class="stat-number">$45,231</p>
        <span class="stat-change positive">+8.2%</span>
      </div>
    </div>
    
    <div class="stat-card">
      <div class="stat-icon">
        <i class="fas fa-eye"></i>
      </div>
      <div class="stat-info">
        <h3>Visitas</h3>
        <p class="stat-number">89,234</p>
        <span class="stat-change negative">-2.1%</span>
      </div>
    </div>
    
    <div class="stat-card">
      <div class="stat-icon">
        <i class="fas fa-star"></i>
      </div>
      <div class="stat-info">
        <h3>Rating</h3>
        <p class="stat-number">4.8</p>
        <span class="stat-change positive">+0.3</span>
      </div>
    </div>
  </div>

  <!-- Charts Section -->
  <div class="charts-section">
    <div class="chart-container">
      <div class="chart-header">
        <h3>Ventas Mensuales</h3>
        <div class="chart-controls">
          <select id="chartPeriod">
            <option value="7">7 días</option>
            <option value="30" selected>30 días</option>
            <option value="90">90 días</option>
          </select>
        </div>
      </div>
      <canvas id="salesChart" width="400" height="200"></canvas>
    </div>
    
    <div class="chart-container">
      <div class="chart-header">
        <h3>Distribución de Usuarios</h3>
      </div>
      <canvas id="usersChart" width="400" height="200"></canvas>
    </div>
  </div>

  <!-- Recent Activity -->
  <div class="recent-activity">
    <h3>Actividad Reciente</h3>
    <div class="activity-list" id="activityList">
      <!-- Activity items will be populated by JavaScript -->
    </div>
  </div>
`;

export const analyticsView = (): string => `
  <div class="section-content">
    <div class="section-header">
      <h2>Analytics Avanzados</h2>
      <p>Análisis detallado del rendimiento de tu negocio</p>
    </div>

    <!-- Analytics Overview -->
    <div class="analytics-overview">
      <div class="metric-card">
        <div class="metric-header">
          <h3>Conversión de Usuarios</h3>
          <i class="fas fa-chart-line"></i>
        </div>
        <div class="metric-value">23.4%</div>
        <div class="metric-change positive">+2.1% vs mes anterior</div>
      </div>

      <div class="metric-card">
        <div class="metric-header">
          <h3>Tiempo en Sesión</h3>
          <i class="fas fa-clock"></i>
        </div>
        <div class="metric-value">4m 32s</div>
        <div class="metric-change positive">+18s vs mes anterior</div>
      </div>

      <div class="metric-card">
        <div class="metric-header">
          <h3>Bounce Rate</h3>
          <i class="fas fa-bounce-rate"></i>
        </div>
        <div class="metric-value">34.2%</div>
        <div class="metric-change negative">+1.8% vs mes anterior</div>
      </div>
    </div>

    <!-- Detailed Charts -->
    <div class="detailed-charts">
      <div class="chart-container large">
        <div class="chart-header">
          <h3>Análisis de Tendencias</h3>
          <div class="chart-filters">
            <button class="filter-btn active" data-period="7d">7 días</button>
            <button class="filter-btn" data-period="30d">30 días</button>
            <button class="filter-btn" data-period="90d">90 días</button>
          </div>
        </div>
        <canvas id="trendsChart" width="600" height="300"></canvas>
      </div>

      <div class="chart-container">
        <div class="chart-header">
          <h3>Distribución por Dispositivos</h3>
        </div>
        <canvas id="devicesChart" width="400" height="250"></canvas>
      </div>
    </div>

    <!-- Performance Metrics -->
    <div class="performance-metrics">
      <h3>Métricas de Rendimiento</h3>
      <div class="metrics-grid">
        <div class="metric-item">
          <span class="metric-label">Page Load Time</span>
          <span class="metric-value">1.2s</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">First Contentful Paint</span>
          <span class="metric-value">0.8s</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">Largest Contentful Paint</span>
          <span class="metric-value">2.1s</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">Cumulative Layout Shift</span>
          <span class="metric-value">0.05</span>
        </div>
      </div>
    </div>
  </div>
`;

export const usersView = (): string => `
  <div class="section-content">
    <div class="section-header">
      <h2>Gestión de Usuarios</h2>
      <p>Administra y analiza tu base de usuarios</p>
    </div>

    <!-- User Stats -->
    <div class="user-stats">
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-user-plus"></i>
        </div>
        <div class="stat-info">
          <h3>Nuevos Usuarios</h3>
          <p class="stat-number">342</p>
          <span class="stat-change positive">+15.2%</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-user-check"></i>
        </div>
        <div class="stat-info">
          <h3>Usuarios Activos</h3>
          <p class="stat-number">8,456</p>
          <span class="stat-change positive">+8.7%</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-crown"></i>
        </div>
        <div class="stat-info">
          <h3>Usuarios Premium</h3>
          <p class="stat-number">1,234</p>
          <span class="stat-change positive">+12.3%</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-user-clock"></i>
        </div>
        <div class="stat-info">
          <h3>Usuarios Inactivos</h3>
          <p class="stat-number">2,156</p>
          <span class="stat-change negative">-5.2%</span>
        </div>
      </div>
    </div>

    <!-- User Table -->
    <div class="user-table-container">
      <div class="table-header">
        <h3>Usuarios Recientes</h3>
        <div class="table-actions">
          <button class="btn btn-primary">
            <i class="fas fa-plus"></i>
            Agregar Usuario
          </button>
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Buscar usuarios..." id="userSearch">
          </div>
        </div>
      </div>

      <div class="table-wrapper">
        <table class="user-table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Plan</th>
              <th>Última Actividad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="userTableBody">
            <!-- User rows will be populated by JavaScript -->
          </tbody>
        </table>
      </div>
    </div>

    <!-- User Demographics -->
    <div class="user-demographics">
      <div class="chart-container">
        <div class="chart-header">
          <h3>Distribución por Edad</h3>
        </div>
        <canvas id="ageChart" width="400" height="250"></canvas>
      </div>

      <div class="chart-container">
        <div class="chart-header">
          <h3>Distribución por País</h3>
        </div>
        <canvas id="countryChart" width="400" height="250"></canvas>
      </div>
    </div>
  </div>
`;

export const productsView = (): string => `
  <div class="section-content">
    <div class="section-header">
      <h2>Gestión de Productos</h2>
      <p>Administra tu catálogo de productos</p>
    </div>

    <!-- Product Stats -->
    <div class="product-stats">
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-box"></i>
        </div>
        <div class="stat-info">
          <h3>Total Productos</h3>
          <p class="stat-number">1,247</p>
          <span class="stat-change positive">+23</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-fire"></i>
        </div>
        <div class="stat-info">
          <h3>Productos Populares</h3>
          <p class="stat-number">89</p>
          <span class="stat-change positive">+12</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-tags"></i>
        </div>
        <div class="stat-info">
          <h3>Categorías</h3>
          <p class="stat-number">24</p>
          <span class="stat-change positive">+2</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="stat-info">
          <h3>Rating Promedio</h3>
          <p class="stat-number">4.6</p>
          <span class="stat-change positive">+0.2</span>
        </div>
      </div>
    </div>

    <!-- Product Management -->
    <div class="product-management">
      <div class="management-header">
        <h3>Gestión de Productos</h3>
        <div class="management-actions">
          <button class="btn btn-primary">
            <i class="fas fa-plus"></i>
            Nuevo Producto
          </button>
          <button class="btn btn-secondary">
            <i class="fas fa-upload"></i>
            Importar
          </button>
          <button class="btn btn-secondary">
            <i class="fas fa-download"></i>
            Exportar
          </button>
        </div>
      </div>

      <!-- Product Filters -->
      <div class="product-filters">
        <div class="filter-group">
          <label>Categoría:</label>
          <select id="categoryFilter">
            <option value="">Todas</option>
            <option value="electronics">Electrónicos</option>
            <option value="clothing">Ropa</option>
            <option value="books">Libros</option>
            <option value="home">Hogar</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Estado:</label>
          <select id="statusFilter">
            <option value="">Todos</option>
            <option value="active">Activo</option>
            <option value="inactive">Inactivo</option>
            <option value="draft">Borrador</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Precio:</label>
          <input type="range" id="priceRange" min="0" max="1000" value="1000">
          <span id="priceValue">$1000</span>
        </div>
      </div>

      <!-- Product Grid -->
      <div class="product-grid" id="productGrid">
        <!-- Product cards will be populated by JavaScript -->
      </div>
    </div>

    <!-- Product Performance -->
    <div class="product-performance">
      <h3>Rendimiento de Productos</h3>
      <div class="performance-charts">
        <div class="chart-container">
          <div class="chart-header">
            <h4>Ventas por Categoría</h4>
          </div>
          <canvas id="categoryChart" width="400" height="250"></canvas>
        </div>

        <div class="chart-container">
          <div class="chart-header">
            <h4>Productos Más Vendidos</h4>
          </div>
          <canvas id="topProductsChart" width="400" height="250"></canvas>
        </div>
      </div>
    </div>
  </div>
`;

export const settingsView = (): string => `
  <div class="section-content">
    <div class="section-header">
      <h2>Configuración del Sistema</h2>
      <p>Personaliza y configura tu dashboard</p>
    </div>

    <!-- Settings Navigation -->
    <div class="settings-navigation">
      <div class="settings-tabs">
        <button class="tab-btn active" data-tab="general">
          <i class="fas fa-cog"></i>
          General
        </button>
        <button class="tab-btn" data-tab="appearance">
          <i class="fas fa-palette"></i>
          Apariencia
        </button>
        <button class="tab-btn" data-tab="notifications">
          <i class="fas fa-bell"></i>
          Notificaciones
        </button>
        <button class="tab-btn" data-tab="security">
          <i class="fas fa-shield-alt"></i>
          Seguridad
        </button>
        <button class="tab-btn" data-tab="integrations">
          <i class="fas fa-plug"></i>
          Integraciones
        </button>
      </div>
    </div>

    <!-- Settings Content -->
    <div class="settings-content">
      <!-- General Settings -->
      <div class="tab-content active" id="general">
        <div class="setting-group">
          <h3>Información de la Empresa</h3>
          <div class="form-group">
            <label>Nombre de la Empresa</label>
            <input type="text" value="Mi Empresa" class="form-input">
          </div>
          <div class="form-group">
            <label>Email de Contacto</label>
            <input type="email" value="contacto@miempresa.com" class="form-input">
          </div>
          <div class="form-group">
            <label>Zona Horaria</label>
            <select class="form-select">
              <option value="UTC-5">UTC-5 (América del Este)</option>
              <option value="UTC-6">UTC-6 (América Central)</option>
              <option value="UTC-8">UTC-8 (Pacífico)</option>
            </select>
          </div>
        </div>

        <div class="setting-group">
          <h3>Configuración del Dashboard</h3>
          <div class="form-group">
            <label>Actualización Automática</label>
            <div class="toggle-switch">
              <input type="checkbox" id="autoUpdate" checked>
              <label for="autoUpdate"></label>
            </div>
          </div>
          <div class="form-group">
            <label>Intervalo de Actualización (segundos)</label>
            <input type="number" value="30" min="10" max="300" class="form-input">
          </div>
        </div>
      </div>

      <!-- Appearance Settings -->
      <div class="tab-content" id="appearance">
        <div class="setting-group">
          <h3>Tema</h3>
          <div class="theme-options">
            <div class="theme-option">
              <input type="radio" name="theme" id="light" value="light" checked>
              <label for="light">
                <div class="theme-preview light"></div>
                <span>Claro</span>
              </label>
            </div>
            <div class="theme-option">
              <input type="radio" name="theme" id="dark" value="dark">
              <label for="dark">
                <div class="theme-preview dark"></div>
                <span>Oscuro</span>
              </label>
            </div>
            <div class="theme-option">
              <input type="radio" name="theme" id="auto" value="auto">
              <label for="auto">
                <div class="theme-preview auto"></div>
                <span>Automático</span>
              </label>
            </div>
          </div>
        </div>

        <div class="setting-group">
          <h3>Colores</h3>
          <div class="color-options">
            <div class="color-option">
              <label>Color Primario</label>
              <input type="color" value="#6366f1" class="color-picker">
            </div>
            <div class="color-option">
              <label>Color Secundario</label>
              <input type="color" value="#f8fafc" class="color-picker">
            </div>
          </div>
        </div>
      </div>

      <!-- Notifications Settings -->
      <div class="tab-content" id="notifications">
        <div class="setting-group">
          <h3>Preferencias de Notificaciones</h3>
          <div class="form-group">
            <label>Notificaciones por Email</label>
            <div class="toggle-switch">
              <input type="checkbox" id="emailNotif" checked>
              <label for="emailNotif"></label>
            </div>
          </div>
          <div class="form-group">
            <label>Notificaciones Push</label>
            <div class="toggle-switch">
              <input type="checkbox" id="pushNotif" checked>
              <label for="pushNotif"></label>
            </div>
          </div>
          <div class="form-group">
            <label>Notificaciones de Sistema</label>
            <div class="toggle-switch">
              <input type="checkbox" id="systemNotif" checked>
              <label for="systemNotif"></label>
            </div>
          </div>
        </div>
      </div>

      <!-- Security Settings -->
      <div class="tab-content" id="security">
        <div class="setting-group">
          <h3>Seguridad de la Cuenta</h3>
          <div class="form-group">
            <label>Autenticación de Dos Factores</label>
            <div class="toggle-switch">
              <input type="checkbox" id="2fa">
              <label for="2fa"></label>
            </div>
          </div>
          <div class="form-group">
            <label>Cambiar Contraseña</label>
            <button class="btn btn-secondary">Cambiar</button>
          </div>
        </div>
      </div>

      <!-- Integrations Settings -->
      <div class="tab-content" id="integrations">
        <div class="setting-group">
          <h3>Integraciones Disponibles</h3>
          <div class="integration-list">
            <div class="integration-item">
              <div class="integration-info">
                <i class="fab fa-google"></i>
                <span>Google Analytics</span>
              </div>
              <div class="toggle-switch">
                <input type="checkbox" id="googleAnalytics">
                <label for="googleAnalytics"></label>
              </div>
            </div>
            <div class="integration-item">
              <div class="integration-info">
                <i class="fab fa-slack"></i>
                <span>Slack</span>
              </div>
              <div class="toggle-switch">
                <input type="checkbox" id="slack">
                <label for="slack"></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div class="settings-actions">
      <button class="btn btn-primary" id="saveSettings">
        <i class="fas fa-save"></i>
        Guardar Cambios
      </button>
      <button class="btn btn-secondary" id="resetSettings">
        <i class="fas fa-undo"></i>
        Restablecer
      </button>
    </div>
  </div>
`;
