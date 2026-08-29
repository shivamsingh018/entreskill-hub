// EntreSkill Hub - Assessment Wizard & Business Recommendation Component

import { SKILL_CATEGORIES, recommendIdeas } from '../data/skillsData.js';

export function renderAssessmentWizard(state) {
  const selectedSkills = state.selectedSkills || [];
  const savedIdeaIds = state.savedIdeaIds || [];
  const recommendedList = recommendIdeas(selectedSkills);

  return `
    <!-- Hero Section -->
    <div class="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-indigo text-xs font-semibold uppercase tracking-wider mb-6">
        <span>🚀 Skill-to-Startup Enablement</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4 leading-tight">
        Turn Your Practical Skills into a <span class="gradient-text">Sustainable Micro-Business</span>
      </h1>
      <p class="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8">
        Select your existing skills and interests below to get instant personalized business recommendations, step-by-step roadmaps, and mentor guidance.
      </p>

      <!-- Skill Selection Chips Grid -->
      <div class="glass-card p-6 sm:p-8 text-left mb-12">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span class="w-7 h-7 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center text-xs">1</span>
            Select Your Practical Skills & Interests:
          </h2>
          <span class="text-xs text-slate-400 font-medium">${selectedSkills.length} selected</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          ${SKILL_CATEGORIES.map(cat => {
            const isSelected = selectedSkills.includes(cat.id);
            return `
              <div class="skill-chip border rounded-xl p-3.5 cursor-pointer transition-all flex items-start gap-3 ${isSelected ? 'bg-indigo-600/20 border-indigo-500 shadow-md shadow-indigo-500/10' : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600'}" data-skill-id="${cat.id}">
                <input type="checkbox" class="mt-1 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-0" ${isSelected ? 'checked' : ''}>
                <div>
                  <div class="text-sm font-semibold text-white">${cat.name}</div>
                  <div class="text-xs text-slate-400 mt-0.5">${cat.description}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Business Recommendations Heading -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 text-left">
        <div>
          <h2 class="text-2xl font-bold font-heading text-white">Recommended Business Ideas</h2>
          <p class="text-xs text-slate-400">Matched based on your skill profile (${recommendedList.length} opportunities found)</p>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs text-slate-400">Filter by Budget:</span>
          <select id="filter-budget" class="bg-slate-800 text-slate-200 border border-slate-700 text-xs rounded-xl px-3 py-1.5">
            <option value="all">All Capital Ranges</option>
            <option value="low">Under ₹15,000</option>
            <option value="medium">₹15,000 - ₹35,000</option>
          </select>
        </div>
      </div>

      <!-- Recommendations Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        ${recommendedList.map(idea => {
          const isSaved = savedIdeaIds.includes(idea.id);
          return `
            <div class="glass-card p-6 flex flex-col justify-between hover:scale-[1.01] transition-transform">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-1 rounded-full badge-emerald text-xs font-semibold">${idea.badge}</span>
                  <button class="save-idea-btn text-slate-400 hover:text-rose-400 transition-colors p-1" data-idea-id="${idea.id}" title="${isSaved ? 'Remove Bookmark' : 'Bookmark Idea'}">
                    <svg class="w-5 h-5 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </button>
                </div>

                <h3 class="text-lg font-bold text-white mb-2 leading-snug">${idea.title}</h3>
                <p class="text-xs text-slate-300 mb-4 line-clamp-2">${idea.shortDescription}</p>

                <div class="space-y-2 mb-6 border-t border-b border-slate-700/50 py-3 text-xs">
                  <div class="flex justify-between">
                    <span class="text-slate-400">Starting Investment:</span>
                    <span class="font-semibold text-emerald-400">${idea.investmentRange}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-400">Est. Profit Margin:</span>
                    <span class="font-semibold text-indigo-300">${idea.estimatedMargin}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-400">Time to Launch:</span>
                    <span class="font-semibold text-slate-200">${idea.timeToLaunch}</span>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <button class="view-roadmap-btn flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-all shadow-md shadow-indigo-600/20 text-center" data-idea-id="${idea.id}">
                  Start Roadmap &rarr;
                </button>
                <button class="open-calc-btn bg-slate-800 hover:bg-slate-700 text-slate-300 p-2.5 rounded-xl border border-slate-700 text-xs" data-idea-id="${idea.id}" title="Estimate Startup Cost">
                  🧮
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}
