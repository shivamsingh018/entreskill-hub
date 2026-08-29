// EntreSkill Hub - Core SPA Application Engine

import { renderNavbar } from './components/navbar.js';
import { renderAssessmentWizard } from './components/assessmentWizard.js';
import { renderRoadmapViewer } from './components/roadmapViewer.js';
import { renderCostEstimator } from './components/costEstimator.js';
import { renderResourceHub } from './components/resourceHub.js';
import { renderMentorDirectory } from './components/mentorDirectory.js';
import { renderDashboards } from './components/dashboards.js';
import { initLowBandwidthMode, toggleLowBandwidthState } from './components/lowBandwidthMode.js';
import { LEARNING_RESOURCES } from './data/learningData.js';

// Application State Store
const state = {
  currentView: 'home',
  currentRole: 'user', // 'user', 'mentor', 'admin'
  isLowBandwidth: false,
  selectedSkills: ['food_prep'],
  savedIdeaIds: ['idea_tiffin_cloud_kitchen'],
  activeIdeaId: 'idea_tiffin_cloud_kitchen',
  completedSteps: ['val_step_1'],
  bookedSessions: [],
  estimator: {
    equipmentCost: 12000,
    materialsCostPerUnit: 45,
    packagingCostPerUnit: 8,
    sellingPricePerUnit: 100,
    monthlyFixedOverhead: 3500,
    expectedMonthlyUnits: 300
  }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  initLowBandwidthMode(state);
  renderApp();
  attachGlobalEventListeners();
});

function loadStateFromStorage() {
  try {
    const saved = localStorage.getItem('entreskill_hub_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(state, parsed);
    }
  } catch (e) {
    console.warn('Could not load saved state', e);
  }
}

function saveStateToStorage() {
  try {
    localStorage.setItem('entreskill_hub_state', JSON.stringify(state));
  } catch (e) {
    console.warn('Could not save state', e);
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : '💡'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function renderApp() {
  const headerContainer = document.getElementById('app-header');
  const mainContainer = document.getElementById('app-main');

  if (headerContainer) {
    headerContainer.innerHTML = renderNavbar(state);
  }

  if (!mainContainer) return;

  switch (state.currentView) {
    case 'home':
      mainContainer.innerHTML = renderAssessmentWizard(state);
      break;
    case 'roadmaps':
      mainContainer.innerHTML = renderRoadmapViewer(state);
      break;
    case 'estimator':
      mainContainer.innerHTML = renderCostEstimator(state);
      break;
    case 'learning':
      mainContainer.innerHTML = renderResourceHub(state);
      break;
    case 'mentors':
      mainContainer.innerHTML = renderMentorDirectory(state);
      break;
    case 'dashboard':
      mainContainer.innerHTML = renderDashboards(state);
      break;
    default:
      mainContainer.innerHTML = renderAssessmentWizard(state);
  }

  attachViewEventListeners();
}

function attachGlobalEventListeners() {
  // Navigation event delegation
  document.addEventListener('click', (e) => {
    // Brand click -> Home
    if (e.target.closest('#nav-brand')) {
      state.currentView = 'home';
      renderApp();
      return;
    }

    // Nav button click
    const navBtn = e.target.closest('.nav-btn, .nav-btn-mobile');
    if (navBtn) {
      const target = navBtn.dataset.target;
      state.currentView = target;
      renderApp();
      saveStateToStorage();
      return;
    }

    // Mobile menu toggle
    if (e.target.closest('#mobile-menu-btn')) {
      const menu = document.getElementById('mobile-menu');
      if (menu) menu.classList.toggle('hidden');
      return;
    }

    // Low bandwidth toggle
    if (e.target.closest('#toggle-low-bandwidth')) {
      const isNowLow = toggleLowBandwidthState(state);
      renderApp();
      showToast(isNowLow ? 'Data Saver Mode Enabled (Optimized for Low Internet)' : 'Standard High-Fidelity Mode Enabled', 'info');
      saveStateToStorage();
      return;
    }

    // Skill chip click
    const skillChip = e.target.closest('.skill-chip');
    if (skillChip) {
      const skillId = skillChip.dataset.skillId;
      if (state.selectedSkills.includes(skillId)) {
        state.selectedSkills = state.selectedSkills.filter(id => id !== skillId);
      } else {
        state.selectedSkills.push(skillId);
      }
      renderApp();
      saveStateToStorage();
      return;
    }

    // Save / Bookmark Idea button
    const saveBtn = e.target.closest('.save-idea-btn');
    if (saveBtn) {
      const ideaId = saveBtn.dataset.ideaId;
      if (state.savedIdeaIds.includes(ideaId)) {
        state.savedIdeaIds = state.savedIdeaIds.filter(id => id !== ideaId);
        showToast('Business idea removed from bookmarks', 'info');
      } else {
        state.savedIdeaIds.push(ideaId);
        showToast('Business idea saved to your dashboard!', 'success');
      }
      renderApp();
      saveStateToStorage();
      return;
    }

    // View Roadmap button
    const roadmapBtn = e.target.closest('.view-roadmap-btn');
    if (roadmapBtn) {
      const ideaId = roadmapBtn.dataset.ideaId;
      state.activeIdeaId = ideaId;
      state.currentView = 'roadmaps';
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      saveStateToStorage();
      return;
    }

    // Open Calculator button
    const calcBtn = e.target.closest('.open-calc-btn');
    if (calcBtn) {
      state.currentView = 'estimator';
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Back to ideas button
    if (e.target.closest('#back-to-ideas')) {
      state.currentView = 'home';
      renderApp();
      return;
    }

    // Resource Category Pill
    const catPill = e.target.closest('.res-cat-pill');
    if (catPill) {
      state.learningCategory = catPill.dataset.cat;
      renderApp();
      return;
    }

    // Open Resource Modal
    const resModalBtn = e.target.closest('.open-resource-modal');
    if (resModalBtn) {
      const resId = resModalBtn.dataset.resId;
      openResourceModal(resId);
      return;
    }

    // Book Mentor Slot button
    const bookSlotBtn = e.target.closest('.book-slot-btn');
    if (bookSlotBtn) {
      const mentorId = bookSlotBtn.dataset.mentorId;
      openBookingModal(mentorId);
      return;
    }

    // Ask Q&A button
    const qaBtn = e.target.closest('.ask-qa-btn');
    if (qaBtn) {
      const mentorId = qaBtn.dataset.mentorId;
      openQAModal(mentorId);
      return;
    }
  });

  // Role select change handler
  document.addEventListener('change', (e) => {
    if (e.target.id === 'role-select') {
      state.currentRole = e.target.value;
      showToast(`Switched view to ${state.currentRole.toUpperCase()} mode`, 'info');
      renderApp();
      saveStateToStorage();
      return;
    }

    // Roadmap step checkbox toggle
    if (e.target.classList.contains('step-toggle-checkbox')) {
      const stepId = e.target.dataset.stepId;
      if (e.target.checked) {
        if (!state.completedSteps.includes(stepId)) state.completedSteps.push(stepId);
        showToast('Progress updated! Step marked completed.', 'success');
      } else {
        state.completedSteps = state.completedSteps.filter(id => id !== stepId);
      }
      renderApp();
      saveStateToStorage();
      return;
    }
  });
}

function attachViewEventListeners() {
  // Attach input sliders for cost estimator
  if (state.currentView === 'estimator') {
    const inputs = ['equipment', 'materials', 'packaging', 'price', 'overhead', 'units'];
    inputs.forEach(key => {
      const el = document.getElementById(`calc-${key}`);
      if (el) {
        el.addEventListener('input', (e) => {
          const val = parseInt(e.target.value, 10);
          switch(key) {
            case 'equipment': state.estimator.equipmentCost = val; break;
            case 'materials': state.estimator.materialsCostPerUnit = val; break;
            case 'packaging': state.estimator.packagingCostPerUnit = val; break;
            case 'price': state.estimator.sellingPricePerUnit = val; break;
            case 'overhead': state.estimator.monthlyFixedOverhead = val; break;
            case 'units': state.estimator.expectedMonthlyUnits = val; break;
          }
          renderApp();
          saveStateToStorage();
        });
      }
    });
  }
}

function openResourceModal(resId) {
  const res = LEARNING_RESOURCES.find(r => r.id === resId);
  if (!res) return;

  const modalHtml = `
    <div id="modal-container" class="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay">
      <div class="glass-card max-w-2xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto relative">
        <button id="close-modal-btn" class="absolute top-4 right-4 text-slate-400 hover:text-white text-lg">✕</button>

        <span class="px-2.5 py-1 rounded badge-indigo text-xs font-bold">${res.category}</span>
        <h2 class="text-xl font-bold text-white">${res.title}</h2>

        ${res.embedUrl ? `
          <div class="aspect-video w-full rounded-xl overflow-hidden bg-black">
            <iframe class="w-full h-full" src="${res.embedUrl}" title="${res.title}" frameborder="0" allowfullscreen></iframe>
          </div>
        ` : ''}

        <p class="text-xs text-slate-300">${res.description}</p>

        ${res.contentSummary ? `
          <div class="p-3 bg-slate-800/60 rounded-xl space-y-1 text-xs">
            <div class="font-bold text-indigo-300">Key Takeaways:</div>
            ${res.contentSummary.map(item => `<div class="text-slate-300">&bull; ${item}</div>`).join('')}
          </div>
        ` : ''}

        <div class="flex justify-end gap-3 pt-4 border-t border-slate-700/60">
          ${res.downloadableFile ? `
            <button class="download-doc-btn bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-4 py-2 rounded-xl font-semibold">
              📥 Download ${res.downloadableFile}
            </button>
          ` : ''}
          <button id="close-modal-btn-2" class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-4 py-2 rounded-xl font-semibold">Close</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  document.getElementById('close-modal-btn').onclick = closeModal;
  document.getElementById('close-modal-btn-2').onclick = closeModal;
  const dBtn = document.querySelector('.download-doc-btn');
  if (dBtn) {
    dBtn.onclick = () => {
      showToast(`Downloading template ${res.downloadableFile}...`, 'success');
    };
  }
}

function openBookingModal(mentorId) {
  const modalHtml = `
    <div id="modal-container" class="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay">
      <div class="glass-card max-w-md w-full p-6 space-y-4 relative">
        <button id="close-modal-btn" class="absolute top-4 right-4 text-slate-400 hover:text-white text-lg">✕</button>

        <h2 class="text-lg font-bold text-white">Schedule 1-on-1 Advisory Call</h2>
        <p class="text-xs text-slate-300">Select an available slot for your free consultation session:</p>

        <div class="space-y-2 text-xs">
          <label class="block p-3 rounded-xl bg-slate-800/80 border border-slate-700 cursor-pointer hover:border-indigo-500">
            <input type="radio" name="slot" value="Mon 3:00 PM" checked class="text-indigo-600">
            <span class="ml-2 font-semibold text-white">Monday at 3:00 PM</span>
          </label>
          <label class="block p-3 rounded-xl bg-slate-800/80 border border-slate-700 cursor-pointer hover:border-indigo-500">
            <input type="radio" name="slot" value="Wednesday 11:00 AM" class="text-indigo-600">
            <span class="ml-2 font-semibold text-white">Wednesday at 11:00 AM</span>
          </label>
          <label class="block p-3 rounded-xl bg-slate-800/80 border border-slate-700 cursor-pointer hover:border-indigo-500">
            <input type="radio" name="slot" value="Saturday 10:00 AM" class="text-indigo-600">
            <span class="ml-2 font-semibold text-white">Saturday at 10:00 AM</span>
          </label>
        </div>

        <div class="pt-2 flex justify-end gap-2">
          <button id="confirm-booking-btn" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold py-2.5 rounded-xl">
            Confirm & Reserve Appointment
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  document.getElementById('close-modal-btn').onclick = closeModal;
  document.getElementById('confirm-booking-btn').onclick = () => {
    const selectedSlot = document.querySelector('input[name="slot"]:checked')?.value || 'Mon 3:00 PM';
    state.bookedSessions.push({ mentorId, slot: selectedSlot });
    closeModal();
    renderApp();
    showToast(`Appointment confirmed for ${selectedSlot}! Check your Dashboard.`, 'success');
    saveStateToStorage();
  };
}

function openQAModal(mentorId) {
  const modalHtml = `
    <div id="modal-container" class="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay">
      <div class="glass-card max-w-md w-full p-6 space-y-4 relative">
        <button id="close-modal-btn" class="absolute top-4 right-4 text-slate-400 hover:text-white text-lg">✕</button>

        <h2 class="text-lg font-bold text-white">Submit Question to Mentor</h2>
        <p class="text-xs text-slate-300">Ask specific questions about licensing, machinery, cost estimation, or registration.</p>

        <textarea id="qa-question-text" rows="4" class="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500" placeholder="Type your detailed question here..."></textarea>

        <button id="submit-qa-btn" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold py-2.5 rounded-xl">
          Send Question to Mentor Queue
        </button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  document.getElementById('close-modal-btn').onclick = closeModal;
  document.getElementById('submit-qa-btn').onclick = () => {
    const text = document.getElementById('qa-question-text')?.value;
    if (text && text.trim().length > 0) {
      closeModal();
      showToast('Question sent to mentor! You will receive notification on your dashboard.', 'success');
    } else {
      showToast('Please type a question before submitting.', 'info');
    }
  };
}

function closeModal() {
  const container = document.getElementById('modal-container');
  if (container) container.remove();
}
