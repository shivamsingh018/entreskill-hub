// EntreSkill Hub - Learning Hub Component (Videos, Guides, Downloadable Checklists)

import { LEARNING_RESOURCES } from '../data/learningData.js';

export function renderResourceHub(state) {
  const activeCategory = state.learningCategory || 'all';

  const filtered = activeCategory === 'all' 
    ? LEARNING_RESOURCES 
    : LEARNING_RESOURCES.filter(r => r.category === activeCategory);

  return `
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div class="text-center mb-8">
        <span class="px-3 py-1 rounded-full badge-indigo text-xs font-semibold uppercase tracking-wider mb-2 inline-block">Free Training Hub</span>
        <h1 class="text-3xl font-extrabold font-heading text-white">Beginner Training & Actionable Resources</h1>
        <p class="text-sm text-slate-400 mt-1">Watch step-by-step videos, download business plan templates, and follow legal checklists.</p>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-8">
        <button class="res-cat-pill px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeCategory === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}" data-cat="all">All Resources</button>
        <button class="res-cat-pill px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeCategory === 'Legal & Permits' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}" data-cat="Legal & Permits">Legal & Permits</button>
        <button class="res-cat-pill px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeCategory === 'Financial Management' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}" data-cat="Financial Management">Financial Management</button>
        <button class="res-cat-pill px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeCategory === 'Marketing & Branding' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}" data-cat="Marketing & Branding">Marketing & Branding</button>
        <button class="res-cat-pill px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeCategory === 'Operations' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}" data-cat="Operations">Operations</button>
      </div>

      <!-- Resource Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.map(res => {
          return `
            <div class="glass-card overflow-hidden flex flex-col justify-between hover:scale-[1.01] transition-transform">
              <div>
                <!-- Resource Header Image / Thumbnail -->
                <div class="relative h-44 bg-slate-800 overflow-hidden">
                  <img src="${res.thumbnail}" alt="${res.title}" class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity">
                  <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-indigo-300 border border-slate-700">
                    ${res.type.toUpperCase()}
                  </span>
                  ${res.duration ? `
                    <span class="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] text-white font-mono">
                      ▶ ${res.duration}
                    </span>
                  ` : ''}
                </div>

                <div class="p-5">
                  <div class="text-[11px] text-indigo-400 font-semibold mb-1">${res.category} &bull; ${res.author}</div>
                  <h3 class="text-base font-bold text-white mb-2 leading-snug">${res.title}</h3>
                  <p class="text-xs text-slate-300 mb-4 line-clamp-3">${res.description}</p>

                  ${res.topics ? `
                    <div class="flex flex-wrap gap-1 mb-4">
                      ${res.topics.map(t => `<span class="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">${t}</span>`).join('')}
                    </div>
                  ` : ''}
                </div>
              </div>

              <div class="p-5 pt-0">
                <button class="open-resource-modal w-full bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white font-semibold text-xs py-2.5 rounded-xl border border-slate-700/80 hover:border-indigo-500 transition-all flex items-center justify-center gap-2" data-res-id="${res.id}">
                  <span>${res.type === 'video' ? 'Watch Tutorial Video' : 'Read & Download Toolkit'}</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}
