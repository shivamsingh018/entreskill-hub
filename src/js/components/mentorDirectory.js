// EntreSkill Hub - Mentor Directory & Booking Component

import { MENTORS } from '../data/mentorsData.js';

export function renderMentorDirectory(state) {
  const bookedSessions = state.bookedSessions || [];

  return `
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div class="text-center mb-8">
        <span class="px-3 py-1 rounded-full badge-emerald text-xs font-semibold uppercase tracking-wider mb-2 inline-block">Expert Mentorship Directory</span>
        <h1 class="text-3xl font-extrabold font-heading text-white">Connect with SBA & Industry Mentors</h1>
        <p class="text-sm text-slate-400 mt-1">Get 1-on-1 guidance, ask questions about licenses or loans, and schedule free advisory sessions.</p>
      </div>

      <!-- Mentors Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${MENTORS.map(mentor => {
          const isBooked = bookedSessions.some(s => s.mentorId === mentor.id);
          return `
            <div class="glass-card p-6 flex flex-col justify-between">
              <div>
                <div class="flex items-start gap-4 mb-4">
                  <img src="${mentor.avatar}" alt="${mentor.name}" class="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-500/40 shadow-lg">
                  <div>
                    <div class="flex items-center gap-2">
                      <h3 class="text-lg font-bold text-white">${mentor.name}</h3>
                      <span class="px-2 py-0.5 rounded badge-indigo text-[10px] font-bold">${mentor.badge}</span>
                    </div>
                    <div class="text-xs text-indigo-300 font-medium">${mentor.title}</div>
                    <div class="text-xs text-slate-400">${mentor.organization} &bull; ${mentor.location}</div>
                    <div class="flex items-center gap-2 mt-1 text-xs">
                      <span class="text-amber-400 font-bold">★ ${mentor.rating}</span>
                      <span class="text-slate-500">(${mentor.reviewsCount} reviews)</span>
                      <span class="text-slate-400">&bull; ${mentor.experienceYears} yrs exp</span>
                    </div>
                  </div>
                </div>

                <p class="text-xs text-slate-300 mb-4 bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">${mentor.bio}</p>

                <div class="space-y-2 text-xs mb-6">
                  <div>
                    <span class="text-slate-400 font-medium">Areas of Expertise:</span>
                    <div class="flex flex-wrap gap-1 mt-1">
                      ${mentor.expertise.map(exp => `<span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] border border-slate-700/60">${exp}</span>`).join('')}
                    </div>
                  </div>
                  <div class="flex justify-between text-slate-400 pt-1">
                    <span>Languages: <strong class="text-slate-200">${mentor.languages.join(', ')}</strong></span>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-3 border-t border-slate-700/60 pt-4">
                <button class="book-slot-btn flex-1 ${isBooked ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50' : 'bg-indigo-600 hover:bg-indigo-500 text-white'} font-semibold text-xs py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5" data-mentor-id="${mentor.id}">
                  <span>${isBooked ? '✓ Session Booked' : '📅 Book Free 1-on-1 Session'}</span>
                </button>
                <button class="ask-qa-btn bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3.5 py-2.5 rounded-xl border border-slate-700 font-semibold" data-mentor-id="${mentor.id}">
                  💬 Ask Q&A
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}
