// EntreSkill Hub - Dashboards Component (Entrepreneur, Mentor, and Admin Views)

import { BUSINESS_IDEAS } from '../data/skillsData.js';

export function renderDashboards(state) {
  const currentRole = state.currentRole || 'user';
  const savedIdeaIds = state.savedIdeaIds || [];
  const completedSteps = state.completedSteps || [];
  const bookedSessions = state.bookedSessions || [];

  const savedIdeas = BUSINESS_IDEAS.filter(idea => savedIdeaIds.includes(idea.id));

  if (currentRole === 'mentor') {
    return renderMentorDashboard(state);
  } else if (currentRole === 'admin') {
    return renderAdminDashboard(state);
  }

  // Default: Entrepreneur / Mentee View
  return renderEntrepreneurDashboard(state, savedIdeas, completedSteps, bookedSessions);
}

function renderEntrepreneurDashboard(state, savedIdeas, completedSteps, bookedSessions) {
  return `
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span class="px-3 py-1 rounded-full badge-indigo text-xs font-semibold uppercase tracking-wider mb-2 inline-block">Entrepreneur Hub</span>
          <h1 class="text-3xl font-extrabold font-heading text-white">My Progress & Saved Startups</h1>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-xs text-slate-400">Account Type: <strong class="text-indigo-400">Aspiring Micro-Entrepreneur</strong></span>
        </div>
      </div>

      <!-- Quick Metrics Summary -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div class="glass-card p-5 border-l-4 border-l-indigo-500">
          <div class="text-xs text-slate-400">Saved Business Ideas</div>
          <div class="text-2xl font-bold text-white mt-1">${savedIdeas.length} Ideas</div>
        </div>
        <div class="glass-card p-5 border-l-4 border-l-emerald-500">
          <div class="text-xs text-slate-400">Completed Roadmap Steps</div>
          <div class="text-2xl font-bold text-emerald-400 mt-1">${completedSteps.length} Steps</div>
        </div>
        <div class="glass-card p-5 border-l-4 border-l-amber-500">
          <div class="text-xs text-slate-400">Upcoming Mentor Sessions</div>
          <div class="text-2xl font-bold text-amber-400 mt-1">${bookedSessions.length} Sessions</div>
        </div>
      </div>

      <!-- Bookmarked Business Ideas Section -->
      <div class="glass-card p-6 mb-8">
        <h2 class="text-lg font-bold text-white mb-4 border-b border-slate-700/60 pb-2">Bookmarked Startup Ideas</h2>
        ${savedIdeas.length === 0 ? `
          <div class="text-center py-8 text-slate-400 text-xs">
            No saved business ideas yet. Explore the recommendation engine to bookmark opportunities.
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${savedIdeas.map(idea => `
              <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80 flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-bold text-white">${idea.title}</h3>
                  <div class="text-xs text-emerald-400 mt-0.5">${idea.investmentRange} &bull; ${idea.timeToLaunch}</div>
                </div>
                <button class="view-roadmap-btn bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1.5 rounded-lg font-semibold" data-idea-id="${idea.id}">
                  Open Roadmap &rarr;
                </button>
              </div>
            `).join('')}
          </div>
        `}
      </div>

      <!-- Booked Mentor Sessions -->
      <div class="glass-card p-6">
        <h2 class="text-lg font-bold text-white mb-4 border-b border-slate-700/60 pb-2">Upcoming Mentor Appointments</h2>
        ${bookedSessions.length === 0 ? `
          <div class="text-center py-8 text-slate-400 text-xs">
            No active mentor appointments. Visit the Mentor Directory to schedule a free 1-on-1 session.
          </div>
        ` : `
          <div class="space-y-3">
            ${bookedSessions.map(session => `
              <div class="p-4 rounded-xl bg-slate-800/50 border border-indigo-500/30 flex items-center justify-between">
                <div>
                  <div class="text-sm font-bold text-white">Mentor ID: ${session.mentorId}</div>
                  <div class="text-xs text-indigo-300">Scheduled Time: ${session.slot}</div>
                </div>
                <span class="px-2.5 py-1 rounded badge-emerald text-xs font-semibold">Confirmed</span>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

function renderMentorDashboard(state) {
  return `
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div class="flex items-center justify-between mb-8">
        <div>
          <span class="px-3 py-1 rounded-full badge-emerald text-xs font-semibold uppercase tracking-wider mb-2 inline-block">Mentor Control Panel</span>
          <h1 class="text-3xl font-extrabold font-heading text-white">Mentor Workspace & Mentees</h1>
        </div>
      </div>

      <!-- Mentor Overview Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
        <div class="glass-card p-5">
          <div class="text-xs text-slate-400">Assigned Mentees</div>
          <div class="text-2xl font-bold text-white mt-1">28 Mentees</div>
        </div>
        <div class="glass-card p-5">
          <div class="text-xs text-slate-400">Pending Q&A Messages</div>
          <div class="text-2xl font-bold text-amber-400 mt-1">4 Questions</div>
        </div>
        <div class="glass-card p-5">
          <div class="text-xs text-slate-400">Completed Sessions</div>
          <div class="text-2xl font-bold text-emerald-400 mt-1">62 Sessions</div>
        </div>
        <div class="glass-card p-5">
          <div class="text-xs text-slate-400">Rating Score</div>
          <div class="text-2xl font-bold text-indigo-400 mt-1">4.9 / 5.0</div>
        </div>
      </div>

      <!-- Pending Q&A Questions Queue -->
      <div class="glass-card p-6 mb-8">
        <h2 class="text-lg font-bold text-white mb-4 border-b border-slate-700/60 pb-2">Pending Mentee Questions</h2>
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
            <div class="flex justify-between text-xs text-slate-400 mb-1">
              <span>From: Kavita (Aspiring Boutique Owner)</span>
              <span>2 hours ago</span>
            </div>
            <p class="text-xs text-slate-200 font-medium mb-3">"Hi mentor, how do I apply for Udyam MSME registration without a separate commercial shop electricity bill?"</p>
            <button class="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1.5 rounded-lg font-semibold">Reply to Mentee</button>
          </div>

          <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
            <div class="flex justify-between text-xs text-slate-400 mb-1">
              <span>From: Ramesh (Tiffin Service)</span>
              <span>5 hours ago</span>
            </div>
            <p class="text-xs text-slate-200 font-medium mb-3">"What packaging container is best for preventing curry leaks during 5km bike delivery?"</p>
            <button class="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1.5 rounded-lg font-semibold">Reply to Mentee</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAdminDashboard(state) {
  return `
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div class="flex items-center justify-between mb-8">
        <div>
          <span class="px-3 py-1 rounded-full badge-amber text-xs font-semibold uppercase tracking-wider mb-2 inline-block">Platform Admin Console</span>
          <h1 class="text-3xl font-extrabold font-heading text-white">System Analytics & Management</h1>
        </div>
      </div>

      <!-- KPI Matrix -->
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
        <div class="glass-card p-5 border-l-4 border-l-indigo-500">
          <div class="text-xs text-slate-400">Total Registered Users</div>
          <div class="text-2xl font-bold text-white mt-1">1,482 Users</div>
          <div class="text-[10px] text-emerald-400 mt-1">+18% this month</div>
        </div>
        <div class="glass-card p-5 border-l-4 border-l-emerald-500">
          <div class="text-xs text-slate-400">Roadmap Completion Rate</div>
          <div class="text-2xl font-bold text-emerald-400 mt-1">68.4%</div>
          <div class="text-[10px] text-emerald-400 mt-1">Target: &gt; 60%</div>
        </div>
        <div class="glass-card p-5 border-l-4 border-l-amber-500">
          <div class="text-xs text-slate-400">Mentor Interaction Rate</div>
          <div class="text-2xl font-bold text-amber-400 mt-1">82.1%</div>
          <div class="text-[10px] text-emerald-400 mt-1">High Engagement</div>
        </div>
        <div class="glass-card p-5 border-l-4 border-l-rose-500">
          <div class="text-xs text-slate-400">User Satisfaction Score</div>
          <div class="text-2xl font-bold text-rose-400 mt-1">4.8 / 5.0</div>
          <div class="text-[10px] text-slate-400 mt-1">94% Positive Feedback</div>
        </div>
      </div>

      <!-- Curation & Moderation Panel -->
      <div class="glass-card p-6">
        <h2 class="text-lg font-bold text-white mb-4 border-b border-slate-700/60 pb-2">Pending Mentor Verifications & Content Approvals</h2>
        <div class="space-y-3 text-xs">
          <div class="p-3 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-between">
            <div>
              <div class="font-bold text-white">New Mentor Application: Dr. Sunil Mehta (Agricultural Tech)</div>
              <div class="text-slate-400">Submitted 1 day ago &bull; Credentials Attached</div>
            </div>
            <div class="flex items-center gap-2">
              <button class="bg-emerald-600 text-white px-3 py-1.5 rounded-lg font-semibold">Approve</button>
              <button class="bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg font-semibold">Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
