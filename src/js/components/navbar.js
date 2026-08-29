// EntreSkill Hub - Navbar Component & Navigation Control

export function renderNavbar(state, onNavigate, onRoleChange, onLowBandwidthToggle) {
  const currentView = state.currentView || 'home';
  const activeRole = state.currentRole || 'user';
  const isLowBandwidth = state.isLowBandwidth || false;

  return `
    <header class="glass-nav sticky top-0 z-50 px-4 lg:px-8 py-3.5 flex items-center justify-between transition-all">
      <!-- Logo & Brand -->
      <div class="flex items-center gap-3 cursor-pointer" id="nav-brand">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-emerald-500 to-amber-400 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <div class="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
            <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
        </div>
        <div>
          <span class="text-xl font-bold font-heading gradient-text tracking-tight">EntreSkill Hub</span>
          <span class="hidden sm:inline-block ml-2 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full badge-emerald">Micro-Startup</span>
        </div>
      </div>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-1 bg-slate-800/40 p-1.5 rounded-2xl border border-slate-700/50">
        <button class="nav-btn px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentView === 'home' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}" data-target="home">
          Discover Ideas
        </button>
        <button class="nav-btn px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentView === 'roadmaps' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}" data-target="roadmaps">
          Business Roadmaps
        </button>
        <button class="nav-btn px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentView === 'estimator' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}" data-target="estimator">
          Cost Estimator
        </button>
        <button class="nav-btn px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentView === 'learning' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}" data-target="learning">
          Training Hub
        </button>
        <button class="nav-btn px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentView === 'mentors' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}" data-target="mentors">
          Mentors
        </button>
        <button class="nav-btn px-4 py-2 rounded-xl text-sm font-medium transition-all ${currentView === 'dashboard' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}" data-target="dashboard">
          Dashboard
        </button>
      </nav>

      <!-- Action Controls: Role Switcher & Low-Bandwidth Mode -->
      <div class="flex items-center gap-2.5">
        <!-- Low Bandwidth Mode Toggle Button -->
        <button id="toggle-low-bandwidth" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${isLowBandwidth ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'}" title="Toggle Low-Bandwidth Mode for slow internet connection">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          <span class="hidden sm:inline">${isLowBandwidth ? 'Low-Data ON' : 'Data Saver'}</span>
        </button>

        <!-- Role Selector (User / Mentor / Admin) -->
        <div class="relative">
          <select id="role-select" class="bg-slate-800/90 text-slate-200 border border-slate-700 text-xs font-semibold rounded-xl px-3 py-1.5 focus:outline-none focus:border-indigo-500 cursor-pointer">
            <option value="user" ${activeRole === 'user' ? 'selected' : ''}>Role: Entrepreneur</option>
            <option value="mentor" ${activeRole === 'mentor' ? 'selected' : ''}>Role: Mentor</option>
            <option value="admin" ${activeRole === 'admin' ? 'selected' : ''}>Role: Admin</option>
          </select>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button id="mobile-menu-btn" class="md:hidden p-2 text-slate-300 hover:text-white rounded-xl bg-slate-800 border border-slate-700">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Drawer Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-slate-900/95 border-b border-slate-800 px-4 py-4 space-y-2">
      <button class="nav-btn-mobile w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800" data-target="home">Discover Ideas</button>
      <button class="nav-btn-mobile w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800" data-target="roadmaps">Business Roadmaps</button>
      <button class="nav-btn-mobile w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800" data-target="estimator">Cost Estimator</button>
      <button class="nav-btn-mobile w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800" data-target="learning">Training Hub</button>
      <button class="nav-btn-mobile w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800" data-target="mentors">Mentors Directory</button>
      <button class="nav-btn-mobile w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800" data-target="dashboard">Dashboard (${activeRole.toUpperCase()})</button>
    </div>
  `;
}
