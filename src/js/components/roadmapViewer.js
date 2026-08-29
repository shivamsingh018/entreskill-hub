// EntreSkill Hub - Step-by-Step Business Roadmap Viewer Component

import { getRoadmapByIdeaId } from '../data/roadmapsData.js';

export function renderRoadmapViewer(state) {
  const ideaId = state.activeIdeaId || 'idea_tiffin_cloud_kitchen';
  const roadmap = getRoadmapByIdeaId(ideaId);
  const completedSteps = state.completedSteps || [];

  // Calculate completion percentage
  let totalStepsCount = 0;
  let finishedCount = 0;
  roadmap.stages.forEach(stage => {
    stage.steps.forEach(step => {
      totalStepsCount++;
      if (completedSteps.includes(step.id)) {
        finishedCount++;
      }
    });
  });
  const progressPercent = totalStepsCount > 0 ? Math.round((finishedCount / totalStepsCount) * 100) : 0;

  return `
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <!-- Top Breadcrumb & Back Button -->
      <div class="flex items-center justify-between mb-6">
        <button id="back-to-ideas" class="flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300">
          &larr; Back to Idea Recommendations
        </button>
        <span class="text-xs text-slate-400">Roadmap ID: ${ideaId}</span>
      </div>

      <!-- Roadmap Hero Header -->
      <div class="glass-card p-6 sm:p-8 mb-8 border-l-4 border-l-indigo-500">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <span class="px-2.5 py-1 rounded-full badge-indigo text-xs font-semibold uppercase tracking-wider mb-2 inline-block">Micro-Startup Roadmap</span>
            <h1 class="text-2xl sm:text-3xl font-extrabold font-heading text-white">${roadmap.title}</h1>
          </div>

          <!-- Overall Progress Badge -->
          <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 min-w-[200px]">
            <div class="flex justify-between text-xs mb-1.5">
              <span class="text-slate-400">Completion Status</span>
              <span class="font-bold text-indigo-400">${progressPercent}%</span>
            </div>
            <div class="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full transition-all duration-500" style="width: ${progressPercent}%"></div>
            </div>
            <div class="text-[11px] text-slate-400 mt-1.5 text-right">${finishedCount} of ${totalStepsCount} steps completed</div>
          </div>
        </div>
        <p class="text-sm text-slate-300">${roadmap.overview}</p>
      </div>

      <!-- Roadmap Stages & Steps -->
      <div class="space-y-8">
        ${roadmap.stages.map(stage => {
          return `
            <div class="glass-card p-6 sm:p-8">
              <div class="flex items-center gap-3 mb-4 pb-3 border-b border-slate-700/60">
                <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-indigo-600/30">
                  ${stage.number}
                </span>
                <div>
                  <h2 class="text-lg font-bold text-white">${stage.title}</h2>
                  <span class="text-xs text-indigo-300 font-medium">${stage.duration}</span>
                </div>
              </div>
              <p class="text-xs text-slate-400 mb-6">${stage.description}</p>

              <!-- Stage Steps List -->
              <div class="space-y-4">
                ${stage.steps.map(step => {
                  const isDone = completedSteps.includes(step.id);
                  return `
                    <div class="p-4 rounded-xl border transition-all ${isDone ? 'bg-emerald-950/20 border-emerald-500/40' : 'bg-slate-800/40 border-slate-700/60'}">
                      <div class="flex items-start gap-3">
                        <input type="checkbox" class="step-toggle-checkbox mt-1.5 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-0 cursor-pointer w-4 h-4" data-step-id="${step.id}" ${isDone ? 'checked' : ''}>
                        <div class="flex-1">
                          <div class="flex items-center justify-between">
                            <h3 class="text-sm font-bold ${isDone ? 'text-emerald-300 line-through' : 'text-white'}">${step.title}</h3>
                            ${step.resourceLink ? `
                              <a href="#" class="download-resource-btn text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                                📎 ${step.resourceLink}
                              </a>
                            ` : ''}
                          </div>
                          <p class="text-xs text-slate-300 mt-1">${step.details}</p>

                          ${step.checklist && step.checklist.length > 0 ? `
                            <div class="mt-3 pl-3 border-l-2 border-slate-700 space-y-1">
                              ${step.checklist.map(item => `
                                <div class="text-[11px] text-slate-400 flex items-center gap-1.5">
                                  <span class="text-indigo-400">&bull;</span> ${item}
                                </div>
                              `).join('')}
                            </div>
                          ` : ''}
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}
