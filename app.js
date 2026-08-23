// ==========================================
// EntreSkill Hub - Core State & Logic Manager
// ==========================================

// --- MOCK DATABASE TEMPLATES ---
const MOCK_DATA = {
  skills: [
    { id: 'sk-tailoring', name: 'Sewing & Tailoring', category: 'Crafts & Production' },
    { id: 'sk-baking', name: 'Baking & Cooking', category: 'Food & Beverage' },
    { id: 'sk-repair', name: 'Electronics & Mobile Repair', category: 'Technical Services' },
    { id: 'sk-handicrafts', name: 'Handicrafts & Decor', category: 'Crafts & Production' },
    { id: 'sk-digital', name: 'Basic Computer & Social Media', category: 'Digital Services' },
    { id: 'sk-gardening', name: 'Gardening & Horticulture', category: 'Agricultural Services' },
  ],
  interests: [
    { id: 'int-home', name: 'Work from Home', category: 'Style' },
    { id: 'int-fast', name: 'Quick Cash Flow', category: 'Finance' },
    { id: 'int-community', name: 'Help Local Community', category: 'Values' },
    { id: 'int-creative', name: 'Creative Design', category: 'Style' },
    { id: 'int-tech', name: 'Working with Technology', category: 'Style' },
  ],
  businessIdeas: [
    {
      id: 'idea-tailoring',
      title: 'Custom Alterations & Dressmaking',
      description: 'Start a small custom sewing and alterations service from your home. Ideal for creating custom cultural attire and minor clothes repair.',
      category: 'Crafts & Production',
      skills_required: ['sk-tailoring'],
      interests_required: ['int-home', 'int-creative'],
      estimated_startup_cost: 150.00,
      complexity: 'Easy',
      duration: '1-2 Weeks',
      steps: [
        { id: 'tailor-val-1', title: 'Survey Neighborhood Clothing Needs', description: 'Ask 10 neighbors if they need alteration services or custom clothing, and what they typically pay.', phase: 'validation' },
        { id: 'tailor-val-2', title: 'Understand Pricing & Competitors', description: 'Visit local market tailors and note their price list for hems, zippers, and custom tailoring.', phase: 'validation' },
        { id: 'tailor-tool-1', title: 'Source Basic Sewing Kit & Machine', description: 'Get a reliable domestic sewing machine, needles, threads, measuring tape, and high-quality shears.', phase: 'skills_tools' },
        { id: 'tailor-tool-2', title: 'Practice Advanced Stitches', description: 'Complete mock sewing runs on scrap fabrics to ensure perfect hems, invisible zippers, and buttonholes.', phase: 'skills_tools' },
        { id: 'tailor-legal-1', title: 'Check Local Home Business Permit rules', description: 'Check with municipal offices on licensing requirements for running a small repair shop from home.', phase: 'legal' },
        { id: 'tailor-legal-2', title: 'Register as a Sole Proprietor', description: 'Register a basic sole-trading license to operate legally and open a separate payment account.', phase: 'legal' },
        { id: 'tailor-cost-1', title: 'Calculate Material Costs & Profit Margins', description: 'Use the EntreSkill Calculator to set alteration pricing that covers threads, needles, and electrical utilities.', phase: 'cost' },
        { id: 'tailor-market-1', title: 'Create WhatsApp Business Catalog', description: 'Set up a professional profile showing high-quality pictures of your previous tailoring work.', phase: 'marketing' },
        { id: 'tailor-market-2', title: 'Offer 10% Launch Discount to Neighbors', description: 'Drop flyers in local mailboxes or share a launch catalog in family and local community chat groups.', phase: 'marketing' }
      ]
    },
    {
      id: 'idea-baking',
      title: 'Home Bakery & Snack Service',
      description: 'Bake fresh bread, cookies, and local snack specialties to sell directly to local offices, neighbors, and schools.',
      category: 'Food & Beverage',
      skills_required: ['sk-baking'],
      interests_required: ['int-fast', 'int-community'],
      estimated_startup_cost: 250.00,
      complexity: 'Medium',
      duration: '2-3 Weeks',
      steps: [
        { id: 'bake-val-1', title: 'Conduct Snack Taste Test', description: 'Bake a batch of your signature cookies or bread, share them with friends, and ask what they would pay.', phase: 'validation' },
        { id: 'bake-tool-1', title: 'Review Kitchen Capacity', description: 'Evaluate your home oven, trays, mixing bowls, and measurement scales. Source durable packaging materials.', phase: 'skills_tools' },
        { id: 'bake-legal-1', title: 'Complete Food Safety Certification', description: 'Attend a basic online local food handling course to get certified.', phase: 'legal' },
        { id: 'bake-legal-2', title: 'Apply for Home Kitchen Inspection', description: 'Obtain approval from local health authorities to pack food from your home kitchen safely.', phase: 'legal' },
        { id: 'bake-cost-1', title: 'Calculate Recipe Costing', description: 'Use the calculator to cost ingredients per cookie or loaf, including baking gas and packaging box costs.', phase: 'cost' },
        { id: 'bake-market-1', title: 'Partner with Local Cafe or School Counter', description: 'Offer to supply a test batch of snacks daily on commission to test demand.', phase: 'marketing' }
      ]
    },
    {
      id: 'idea-repair',
      title: 'Local Mobile & Gadget Repair Shop',
      description: 'Provide quick mobile screen, battery, and software debugging services to community members who cannot travel to main city centers.',
      category: 'Technical Services',
      skills_required: ['sk-repair'],
      interests_required: ['int-tech', 'int-fast'],
      estimated_startup_cost: 300.00,
      complexity: 'Hard',
      duration: '3-4 Weeks',
      steps: [
        { id: 'rep-val-1', title: 'Establish Spare Part Sources', description: 'Research online wholesalers or wholesale markets to find affordable, high-quality spare screens and batteries.', phase: 'validation' },
        { id: 'rep-tool-1', title: 'Purchase Electronics Repair Kit', description: 'Buy specialized opening tools, soldering irons, precision screwdrivers, and ESD safety mats.', phase: 'skills_tools' },
        { id: 'rep-legal-1', title: 'Register Business Name & Tax ID', description: 'Register a micro-enterprise business tax license and set up transparent client transaction books.', phase: 'legal' },
        { id: 'rep-cost-1', title: 'Design Repair Service Fees', description: 'Calculate startup tools depreciation and formulate flat-rate service charges for screens and battery swaps.', phase: 'cost' },
        { id: 'rep-market-1', title: 'Post in Local Facebook/Community Groups', description: 'Share tips on battery health and advertise quick diagnostics with a direct contact number.', phase: 'marketing' }
      ]
    },
    {
      id: 'idea-decor',
      title: 'Handmade Craft & Gift Boutique',
      description: 'Design and sell unique local gifts, hand-crafted jewelry, pottery, or festival decorations online and at weekend flea markets.',
      category: 'Crafts & Production',
      skills_required: ['sk-handicrafts'],
      interests_required: ['int-creative', 'int-home'],
      estimated_startup_cost: 100.00,
      complexity: 'Easy',
      duration: '1-2 Weeks',
      steps: [
        { id: 'craft-val-1', title: 'Check Flea Market Feasibility', description: 'Visit local weekend markets, see what crafts sell well, and check table/stall rental costs.', phase: 'validation' },
        { id: 'craft-tool-1', title: 'Accumulate Sourcing Directory', description: 'Identify affordable wholesalers for beads, clay, ribbons, or raw craft materials.', phase: 'skills_tools' },
        { id: 'craft-cost-1', title: 'Establish Unit Sourcing Cost', description: 'Add raw material costs and hours of labor to verify the break-even selling price per item.', phase: 'cost' },
        { id: 'craft-market-1', title: 'Launch Instagram Showcase Profile', description: 'Record short video clips of the making process (Reels) to build a community and secure orders.', phase: 'marketing' }
      ]
    },
    {
      id: 'idea-social',
      title: 'Social Media Management for Local Shops',
      description: 'Help neighborhood grocery stores, salons, and bakeries set up Google Maps listings, run WhatsApp channels, and schedule basic posts.',
      category: 'Digital Services',
      skills_required: ['sk-digital'],
      interests_required: ['int-tech', 'int-home', 'int-creative'],
      estimated_startup_cost: 50.00,
      complexity: 'Medium',
      duration: '2 Weeks',
      steps: [
        { id: 'soc-val-1', title: 'Interview Local Shop Owners', description: 'Ask 5 local business owners how they promote their shop and if they have a Google Maps business listing.', phase: 'validation' },
        { id: 'soc-tool-1', title: 'Learn Basic Graphics Tools', description: 'Familiarize yourself with free graphic editors like Canva and simple video editing smartphone apps.', phase: 'skills_tools' },
        { id: 'soc-cost-1', title: 'Formulate Retainer Packages', description: 'Create basic packages (e.g., $100/month for Google listing support + 3 social posts per week).', phase: 'cost' },
        { id: 'soc-market-1', title: 'Offer Free Profile Setup Audit', description: 'Build trust by setting up the Google Maps listing for one shop for free to get a reference.', phase: 'marketing' }
      ]
    }
  ],
  lessons: [
    {
      id: 'less-pricing',
      title: 'Pricing for Profit',
      summary: 'Learn how to cover raw materials, pay yourself for labor, and set a profitable selling price.',
      icon: '💰',
      readTime: '5 mins',
      sections: [
        { title: 'The Common Mistake', content: 'Many micro-entrepreneurs only calculate the cost of raw ingredients/materials, forgetting to charge for their own labor or overheads (like electricity, rent, or transport).' },
        { title: 'The Cost Formula', content: 'Selling Price = Raw Material Cost + Labor Cost (Hours spent × Hourly rate) + Overhead + Profit Margin markup.' },
        { title: 'Understanding Overhead', content: 'Overheads include items that are not directly in the product but keep the business running (e.g. gas used for baking, electricity for the sewing machine, or travel to buy materials).' }
      ],
      quiz: {
        question: 'Which of the following is considered an "Overhead Cost" for a tailoring business?',
        options: [
          'The exact fabric for the dress',
          'Electricity for the sewing machine and ironing',
          'The custom buttons ordered for the dress',
          'The owner\'s direct profit'
        ],
        answerIndex: 1
      }
    },
    {
      id: 'less-whatsapp',
      title: 'Selling via WhatsApp Business',
      summary: 'Leverage WhatsApp catalogs, quick replies, and status updates to securely secure orders.',
      icon: '📱',
      readTime: '4 mins',
      sections: [
        { title: 'Why WhatsApp Business?', content: 'WhatsApp Business is free and runs well even on low-bandwidth networks. It lets you create a storefront catalog directly on your phone.' },
        { title: 'Setting Up Your Catalog', content: 'Take clear photos of your products in daylight. Write simple descriptions showing sizes, materials, prices, and delivery terms.' },
        { title: 'Using Status Updates', content: 'Share behind-the-scenes videos of your craft or happy customer reviews. Don\'t spam; update 2-3 times a day for maximum engagement.' }
      ],
      quiz: {
        question: 'What is the best way to showcase products on WhatsApp Business?',
        options: [
          'Sending 50 photos directly to every contact',
          'Setting up a high-quality Catalog inside the App settings',
          'Only posting on your personal social feeds',
          'Waiting for clients to ask for photos'
        ],
        answerIndex: 1
      }
    },
    {
      id: 'less-bookkeeping',
      title: 'Basic Cash Bookkeeping',
      summary: 'Differentiate cash in hand from business profit and log daily transactions.',
      icon: '📝',
      readTime: '6 mins',
      sections: [
        { title: 'The Golden Rule', content: 'Never mix personal money with business money. Keep a separate box or digital pocket for all business cash received.' },
        { title: 'The Cash Book Ledger', content: 'Record every cent: Date, Description, Cash In (sales), Cash Out (expenses), and Balance.' }
      ],
      quiz: {
        question: 'Why should you keep personal and business finances separate?',
        options: [
          'To avoid spending business capital on personal needs',
          'Because the bank mandates it for all profiles',
          'It is legally required for everyone immediately',
          'To make the app run faster'
        ],
        answerIndex: 0
      }
    }
  ],
  mentors: [
    { id: 'men-1', name: 'Amina Shah', specialty: 'Apparel & Handcrafts', experience: '15 years', bio: 'Owner of Amina Custom Tailoring. Volunteering to guide home-based dressmakers with pricing and sizing systems.', activeMentees: 14 },
    { id: 'men-2', name: 'Robert Chen', specialty: 'Small Business Bookkeeping', experience: '20 years', bio: 'Retired certified accountant. Expert in setting up cash logs, managing tax files, and filing micro-business registrations.', activeMentees: 8 },
    { id: 'men-3', name: 'Devendra Joshi', specialty: 'Electronics & Hardware', experience: '12 years', bio: 'Proprietor of Joshi Electronics. Helps young service providers source genuine spare parts and structure repair workflows.', activeMentees: 19 },
    { id: 'men-4', name: 'Sarah Miller', specialty: 'Food Safety & Compliance', experience: '10 years', bio: 'Former health inspector. Guide on local home kitchen compliance, hygiene certifications, and food packaging regulations.', activeMentees: 11 }
  ],
  qna: [
    { question: 'What registration do I need to sell cookies from my kitchen in California?', answer: 'You typically need a Class A Cottage Food Permit, which allows direct sales from home. It requires a food handler course and product label checks.', author: 'Elena (Aspiring Baker)', answeredBy: 'Sarah Miller (Mentor)' },
    { question: 'Where can I buy affordable high-quality wholesale sewing buttons and zips?', answer: 'Check local wholesale markets (like the Garment District) or search for verified vendors on bulk online sites. Ordering in packs of 100 reduces cost by 60%.', author: 'Mariam (Home Tailor)', answeredBy: 'Amina Shah (Mentor)' }
  ]
};

// --- CORE APP STATE ---
let STATE = {
  currentUser: null, // { name: '', role: 'user'/'mentor'/'admin', email: '' }
  currentView: 'splash',
  profiling: {
    skills: [],
    interests: []
  },
  savedIdeas: [], // Array of idea IDs
  activeRoadmaps: {}, // { 'idea-id': { completedStepIds: [] } }
  activeRoadmapId: null, // Current active roadmap tracking ID
  bookedSessions: [], // Array of scheduled sessions
  qnaThreads: [],
  quizScores: {}, // { 'lesson-id': score }
  lessonsVerified: [], // List of lesson IDs verified by admin
  mentorRegistrations: [], // List of pending mentor registrations
  chatHistory: [] // Chatbot message history
};

// --- INITIALIZATION & LOCALSTORAGE ---
function initApp() {
  loadStateFromLocalStorage();
  setupEventListeners();
  renderApp();
  renderChatbotMessages();
}

function loadStateFromLocalStorage() {
  const savedState = localStorage.getItem('entreskill_hub_state');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      // Merge with default state structure in case of schema updates
      STATE = { ...STATE, ...parsed };
    } catch (e) {
      console.error('Error loading local storage state, using defaults.', e);
    }
  }
  
  // Set default Q&A data if empty
  if (!STATE.qnaThreads || STATE.qnaThreads.length === 0) {
    STATE.qnaThreads = [...MOCK_DATA.qna];
  }

  // Set default Chatbot welcome message if empty
  if (!STATE.chatHistory || STATE.chatHistory.length === 0) {
    STATE.chatHistory = [
      {
        sender: 'assistant',
        text: "Hello! 🌱 I'm your EntreSkill AI Startup Assistant. Ask me anything about finding business ideas, legal permits, unit pricing calculations, or finding customers!",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  }
}

function saveStateToLocalStorage() {
  localStorage.setItem('entreskill_hub_state', JSON.stringify(STATE));
}

// --- APP STATE MUTATIONS & VIEW ROUTING ---
function navigateTo(viewId) {
  STATE.currentView = viewId;
  saveStateToLocalStorage();
  renderApp();
  window.scrollTo(0, 0);
}

function selectSkill(skillId) {
  const index = STATE.profiling.skills.indexOf(skillId);
  if (index === -1) {
    STATE.profiling.skills.push(skillId);
  } else {
    STATE.profiling.skills.splice(index, 1);
  }
  saveStateToLocalStorage();
  renderAssessorWizard();
}

function selectInterest(interestId) {
  const index = STATE.profiling.interests.indexOf(interestId);
  if (index === -1) {
    STATE.profiling.interests.push(interestId);
  } else {
    STATE.profiling.interests.splice(index, 1);
  }
  saveStateToLocalStorage();
  renderAssessorWizard();
}

function toggleBookmarkIdea(ideaId) {
  const index = STATE.savedIdeas.indexOf(ideaId);
  if (index === -1) {
    STATE.savedIdeas.push(ideaId);
    showToast('Idea bookmarked successfully!');
  } else {
    STATE.savedIdeas.splice(index, 1);
    showToast('Bookmark removed.');
  }
  saveStateToLocalStorage();
  
  // Re-render recommendations or bookmarks if needed
  if (STATE.currentView === 'recommendations') {
    renderRecommendations();
  } else {
    renderApp();
  }
}

function startRoadmap(ideaId) {
  if (!STATE.activeRoadmaps[ideaId]) {
    STATE.activeRoadmaps[ideaId] = {
      completedStepIds: []
    };
  }
  STATE.activeRoadmapId = ideaId;
  saveStateToLocalStorage();
  navigateTo('dashboard');
}

function toggleStepCompleted(stepId) {
  const roadmap = STATE.activeRoadmaps[STATE.activeRoadmapId];
  if (!roadmap) return;
  
  const index = roadmap.completedStepIds.indexOf(stepId);
  if (index === -1) {
    roadmap.completedStepIds.push(stepId);
    showToast('Step completed! Keep it up.');
  } else {
    roadmap.completedStepIds.splice(index, 1);
  }
  saveStateToLocalStorage();
  renderDashboard();
}

// --- MATCHMAKING ALGORITHM ---
function getMatchScore(idea) {
  let score = 0;
  
  // Calculate skills matches
  const skillMatches = idea.skills_required.filter(s => STATE.profiling.skills.includes(s));
  if (skillMatches.length > 0) {
    score += (skillMatches.length / idea.skills_required.length) * 60; // Skills are weighted heavily (60%)
  }
  
  // Calculate interests matches
  const interestMatches = idea.interests_required.filter(i => STATE.profiling.interests.includes(i));
  if (interestMatches.length > 0) {
    score += (interestMatches.length / idea.interests_required.length) * 40; // Interests are weighted (40%)
  }
  
  return Math.round(score);
}

function getMatchingIdeas() {
  return MOCK_DATA.businessIdeas
    .map(idea => ({ ...idea, matchScore: getMatchScore(idea) }))
    .sort((a, b) => b.matchScore - a.matchScore);
}

// --- VIEW RENDERING ENGINE ---
function renderApp() {
  // Update nav UI & role badges
  updateNavigationUI();
  
  // Hide all views
  document.querySelectorAll('.app-view').forEach(view => {
    view.classList.remove('active');
  });
  
  // Show active view
  const activeViewEl = document.getElementById(`view-${STATE.currentView}`);
  if (activeViewEl) {
    activeViewEl.classList.add('active');
  }
  
  // View-specific initialization
  switch (STATE.currentView) {
    case 'splash':
      // Reset profiling state on landing if desired or keep it
      break;
    case 'assessor':
      renderAssessorWizard();
      break;
    case 'recommendations':
      renderRecommendations();
      break;
    case 'dashboard':
      renderDashboard();
      break;
    case 'learning':
      renderLearningHub();
      break;
    case 'mentorship':
      renderMentorship();
      break;
    case 'admin':
      renderAdminDashboard();
      break;
  }
}

function updateNavigationUI() {
  const authNavBtn = document.getElementById('auth-nav-btn');
  const userIndicator = document.getElementById('user-indicator');
  const adminNavLink = document.getElementById('nav-link-admin');
  
  // Highlight active link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.view === STATE.currentView) {
      link.classList.add('active');
    }
  });

  if (STATE.currentUser) {
    authNavBtn.textContent = 'Sign Out';
    userIndicator.innerHTML = `
      <span class="role-badge">${STATE.currentUser.role}</span>
      <span style="font-weight:600; font-size:0.9rem;">${STATE.currentUser.name}</span>
    `;
    
    // Show admin link if role is admin
    if (STATE.currentUser.role === 'admin') {
      adminNavLink.style.display = 'block';
    } else {
      adminNavLink.style.display = 'none';
    }
  } else {
    authNavBtn.textContent = 'Sign In / Register';
    userIndicator.innerHTML = '';
    adminNavLink.style.display = 'none';
  }
}

// --- WIZARD ASSESSOR RENDER ---
let currentWizardStep = 1;
function renderAssessorWizard() {
  const wizardContainer = document.getElementById('view-assessor');
  wizardContainer.innerHTML = `
    <div class="wizard-container">
      <div class="progress-bar-container">
        <div class="progress-bar-fill" style="width: ${currentWizardStep * 50}%"></div>
      </div>
      
      <!-- Step 1: Skills -->
      <div class="wizard-step ${currentWizardStep === 1 ? 'active' : ''}">
        <h2>What skills do you have?</h2>
        <p class="step-subtitle">Select all practical skills you already possess or want to use.</p>
        
        <div class="options-grid">
          ${MOCK_DATA.skills.map(skill => {
            const isSelected = STATE.profiling.skills.includes(skill.id);
            let icon = '🛠️';
            if (skill.id === 'sk-tailoring') icon = '🧵';
            if (skill.id === 'sk-baking') icon = '🍳';
            if (skill.id === 'sk-repair') icon = '🔌';
            if (skill.id === 'sk-handicrafts') icon = '🏺';
            if (skill.id === 'sk-digital') icon = '💻';
            if (skill.id === 'sk-gardening') icon = '🌱';
            
            return `
              <div class="select-card ${isSelected ? 'selected' : ''}" onclick="selectSkill('${skill.id}')" tabindex="0" aria-checked="${isSelected}">
                <div class="card-icon">${icon}</div>
                <span>${skill.name}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
      
      <!-- Step 2: Interests -->
      <div class="wizard-step ${currentWizardStep === 2 ? 'active' : ''}">
        <h2>What are your business preferences?</h2>
        <p class="step-subtitle">Select parameters that align with your lifestyle and budget.</p>
        
        <div class="options-grid">
          ${MOCK_DATA.interests.map(interest => {
            const isSelected = STATE.profiling.interests.includes(interest.id);
            let icon = '💡';
            if (interest.id === 'int-home') icon = '🏡';
            if (interest.id === 'int-fast') icon = '⚡';
            if (interest.id === 'int-community') icon = '🤝';
            if (interest.id === 'int-creative') icon = '🎨';
            if (interest.id === 'int-tech') icon = '🖥️';
            
            return `
              <div class="select-card ${isSelected ? 'selected' : ''}" onclick="selectInterest('${interest.id}')" tabindex="0" aria-checked="${isSelected}">
                <div class="card-icon">${icon}</div>
                <span>${interest.name}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
      
      <div class="wizard-actions">
        ${currentWizardStep > 1 
          ? `<button class="btn btn-secondary" onclick="prevWizardStep()"><span style="font-size:1.1rem;">←</span> Back</button>` 
          : `<div></div>`}
        
        ${currentWizardStep < 2 
          ? `<button class="btn btn-primary" onclick="nextWizardStep()">Continue <span style="font-size:1.1rem;">→</span></button>` 
          : `<button class="btn btn-primary" onclick="submitAssessor()">Show Recommendations <span style="font-size:1.1rem;">✨</span></button>`}
      </div>
    </div>
  `;
}

window.nextWizardStep = function() {
  if (STATE.profiling.skills.length === 0) {
    showToast('Please select at least one skill to continue.');
    return;
  }
  currentWizardStep++;
  renderAssessorWizard();
};

window.prevWizardStep = function() {
  currentWizardStep--;
  renderAssessorWizard();
};

window.submitAssessor = function() {
  if (STATE.profiling.interests.length === 0) {
    showToast('Please select at least one interest to proceed.');
    return;
  }
  navigateTo('recommendations');
};

// --- RECOMMENDATIONS RENDER ---
function renderRecommendations() {
  const recommendationsContainer = document.getElementById('view-recommendations');
  const matchedList = getMatchingIdeas();
  
  recommendationsContainer.innerHTML = `
    <div class="recommendations-header">
      <h2>Recommended Startups For You</h2>
      <p style="color: var(--text-muted);">Based on your selection of ${STATE.profiling.skills.length} skills and ${STATE.profiling.interests.length} interests.</p>
    </div>
    
    <div class="reco-grid">
      ${matchedList.map(idea => {
        const isBookmarked = STATE.savedIdeas.includes(idea.id);
        const matchPct = idea.matchScore;
        
        return `
          <div class="reco-card">
            <div class="reco-header">
              <span class="reco-badge">${matchPct}% Match</span>
              <h3>${idea.title}</h3>
            </div>
            
            <div class="reco-body">
              <p>${idea.description}</p>
              
              <div class="reco-metrics">
                <div class="reco-metric-item">
                  <span class="metric-label">Startup Cost</span>
                  <span class="metric-value">$${idea.estimated_startup_cost.toFixed(2)}</span>
                </div>
                <div class="reco-metric-item">
                  <span class="metric-label">Complexity</span>
                  <span class="metric-value">${idea.complexity}</span>
                </div>
                <div class="reco-metric-item">
                  <span class="metric-label">Launch in</span>
                  <span class="metric-value">${idea.duration}</span>
                </div>
              </div>
              
              <div class="reco-actions">
                <button class="btn btn-primary" style="flex:1;" onclick="startRoadmap('${idea.id}')">Start Setup Roadmap</button>
                <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleBookmarkIdea('${idea.id}')" title="Bookmark Idea">
                  ★
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// --- DASHBOARD & ROADMAP RENDER ---
let currentDashboardPhase = 'validation';
function renderDashboard() {
  const dashboardContainer = document.getElementById('view-dashboard');
  
  // Find active idea
  let activeIdea = MOCK_DATA.businessIdeas.find(i => i.id === STATE.activeRoadmapId);
  
  // Fallback if no roadmap selected yet
  if (!activeIdea) {
    // Select first bookmarked or default to first database idea
    if (STATE.savedIdeas.length > 0) {
      STATE.activeRoadmapId = STATE.savedIdeas[0];
      activeIdea = MOCK_DATA.businessIdeas.find(i => i.id === STATE.activeRoadmapId);
    } else {
      STATE.activeRoadmapId = MOCK_DATA.businessIdeas[0].id;
      activeIdea = MOCK_DATA.businessIdeas[0];
    }
    
    // Save instantiated roadmap
    if (!STATE.activeRoadmaps[STATE.activeRoadmapId]) {
      STATE.activeRoadmaps[STATE.activeRoadmapId] = { completedStepIds: [] };
    }
    saveStateToLocalStorage();
  }
  
  const roadmapData = STATE.activeRoadmaps[activeIdea.id] || { completedStepIds: [] };
  
  // Filter steps by selected phase
  const phaseSteps = activeIdea.steps.filter(step => step.phase === currentDashboardPhase);
  
  // Calculate completion percentage
  const totalStepsCount = activeIdea.steps.length;
  const completedStepsCount = activeIdea.steps.filter(s => roadmapData.completedStepIds.includes(s.id)).length;
  const completionPercentage = totalStepsCount > 0 ? Math.round((completedStepsCount / totalStepsCount) * 100) : 0;
  
  dashboardContainer.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="hero-tag">Active Setup</span>
          <h2 style="font-size:2.2rem; margin-top:0.25rem;">${activeIdea.title} Roadmap</h2>
        </div>
        
        <div style="display:flex; gap:1rem;">
          <select id="roadmap-selector" onchange="switchRoadmap(this.value)" style="width:240px; height:40px;">
            ${MOCK_DATA.businessIdeas.map(idea => `
              <option value="${idea.id}" ${idea.id === activeIdea.id ? 'selected' : ''}>
                ${idea.title}
              </option>
            `).join('')}
          </select>
        </div>
      </div>
    </div>
    
    <div class="dashboard-layout">
      <!-- Sidebar navigation -->
      <div class="dashboard-sidebar">
        <div class="progress-widget">
          <div class="progress-circle" style="background: radial-gradient(closest-side, var(--bg-main) 79%, transparent 80% 100%), conic-gradient(var(--primary) ${completionPercentage}%, rgba(255,255,255,0.05) ${completionPercentage}%);">${completionPercentage}%</div>
          <span style="color:var(--text-muted); font-size:0.9rem;">${completedStepsCount} of ${totalStepsCount} steps done</span>
        </div>
        
        <div class="phase-tabs">
          <div class="phase-tab ${currentDashboardPhase === 'validation' ? 'active' : ''}" onclick="switchDashboardTab('validation')">
            <span>1. Market Validation</span>
            <div class="tab-indicators">
              <div class="indicator-dot"></div>
            </div>
          </div>
          <div class="phase-tab ${currentDashboardPhase === 'skills_tools' ? 'active' : ''}" onclick="switchDashboardTab('skills_tools')">
            <span>2. Tools & Skills</span>
            <div class="tab-indicators">
              <div class="indicator-dot"></div>
            </div>
          </div>
          <div class="phase-tab ${currentDashboardPhase === 'legal' ? 'active' : ''}" onclick="switchDashboardTab('legal')">
            <span>3. Legal Licensing</span>
            <div class="tab-indicators">
              <div class="indicator-dot"></div>
            </div>
          </div>
          <div class="phase-tab ${currentDashboardPhase === 'cost' ? 'active' : ''}" onclick="switchDashboardTab('cost')">
            <span>4. Financial Canvas</span>
            <div class="tab-indicators">
              <div class="indicator-dot"></div>
            </div>
          </div>
          <div class="phase-tab ${currentDashboardPhase === 'marketing' ? 'active' : ''}" onclick="switchDashboardTab('marketing')">
            <span>5. Marketing Basics</span>
            <div class="tab-indicators">
              <div class="indicator-dot"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Steps panel -->
      <div class="dashboard-content">
        <div class="roadmap-header">
          <h3>
            ${currentDashboardPhase === 'validation' ? 'Phase 1: Demand Validation' : ''}
            ${currentDashboardPhase === 'skills_tools' ? 'Phase 2: Sourcing Equipment & Practice' : ''}
            ${currentDashboardPhase === 'legal' ? 'Phase 3: Business Setup & Permits' : ''}
            ${currentDashboardPhase === 'cost' ? 'Phase 4: Cost Estimating & Selling Price' : ''}
            ${currentDashboardPhase === 'marketing' ? 'Phase 5: Reaching Your First Customers' : ''}
          </h3>
        </div>
        
        <!-- Render Financial Sliders directly into Cost phase -->
        ${currentDashboardPhase === 'cost' ? renderCostCalculatorMarkup() : ''}
        
        <div class="roadmap-steps-list">
          ${phaseSteps.map((step, idx) => {
            const isChecked = roadmapData.completedStepIds.includes(step.id);
            return `
              <div class="roadmap-step-item ${isChecked ? 'completed' : ''}">
                <div class="step-checkbox ${isChecked ? 'checked' : ''}" onclick="toggleStepCompleted('${step.id}')">
                  ${isChecked ? '✓' : ''}
                </div>
                <div class="step-details">
                  <h4>${idx + 1}. ${step.title}</h4>
                  <p>${step.description}</p>
                  
                  <div class="step-meta">
                    <span class="role-badge" style="border-color:rgba(255,255,255,0.1); color:var(--text-muted); padding:0.1rem 0.5rem; font-size:0.7rem;">Task</span>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
          
          ${phaseSteps.length === 0 ? `
            <div style="text-align:center; padding: 2rem; color:var(--text-muted);">
              No specific checklist items defined for this phase yet. Complete other tasks or contact a mentor for advice.
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
  
  // Attach event hooks for inputs if in Cost Tab
  if (currentDashboardPhase === 'cost') {
    bindCalculatorEvents();
  }
}

window.switchRoadmap = function(ideaId) {
  STATE.activeRoadmapId = ideaId;
  if (!STATE.activeRoadmaps[ideaId]) {
    STATE.activeRoadmaps[ideaId] = { completedStepIds: [] };
  }
  saveStateToLocalStorage();
  renderDashboard();
};

window.switchDashboardTab = function(tabId) {
  currentDashboardPhase = tabId;
  renderDashboard();
};

// --- COST CALCULATOR MODULE ---
let calcState = {
  raw: 15.00,
  laborHour: 20.00,
  hoursSpent: 2,
  overhead: 5.00,
  markup: 30 // 30%
};

function renderCostCalculatorMarkup() {
  const directLabor = calcState.laborHour * calcState.hoursSpent;
  const totalUnitCost = calcState.raw + directLabor + calcState.overhead;
  const profitAmount = totalUnitCost * (calcState.markup / 100);
  const sellingPrice = totalUnitCost + profitAmount;
  
  // Break-even based on total monthly fixed expenses (assumed $300 overhead placeholder for break-even math)
  const monthlyFixedCost = 300.00;
  const breakEvenUnits = profitAmount > 0 ? Math.ceil(monthlyFixedCost / profitAmount) : 0;

  return `
    <div class="calculator-container" style="margin-bottom: 2.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 2.5rem;">
      <div class="calculator-sliders">
        <h4 style="margin-bottom: 1rem; color: var(--primary);">Interactive Business Modeler</h4>
        
        <div class="slider-group">
          <div class="slider-header">
            <label for="slide-raw">Material Cost per Unit</label>
            <span class="slider-value" id="val-raw">$${calcState.raw.toFixed(2)}</span>
          </div>
          <input type="range" id="slide-raw" min="1" max="150" value="${calcState.raw}" step="0.5">
        </div>
        
        <div class="slider-group">
          <div class="slider-header">
            <label for="slide-labor">Your Hourly Labor Value</label>
            <span class="slider-value" id="val-labor">$${calcState.laborHour.toFixed(2)}/hr</span>
          </div>
          <input type="range" id="slide-labor" min="5" max="100" value="${calcState.laborHour}" step="1">
        </div>
        
        <div class="slider-group">
          <div class="slider-header">
            <label for="slide-hours">Hours Spent per Item</label>
            <span class="slider-value" id="val-hours">${calcState.hoursSpent} hrs</span>
          </div>
          <input type="range" id="slide-hours" min="0.5" max="10" value="${calcState.hoursSpent}" step="0.5">
        </div>
        
        <div class="slider-group">
          <div class="slider-header">
            <label for="slide-overhead">Indirect Overhead (Utility/Rent/Unit)</label>
            <span class="slider-value" id="val-overhead">$${calcState.overhead.toFixed(2)}</span>
          </div>
          <input type="range" id="slide-overhead" min="0" max="50" value="${calcState.overhead}" step="0.5">
        </div>
        
        <div class="slider-group">
          <div class="slider-header">
            <label for="slide-markup">Desired Profit Markup</label>
            <span class="slider-value" id="val-markup">${calcState.markup}%</span>
          </div>
          <input type="range" id="slide-markup" min="5" max="200" value="${calcState.markup}" step="5">
        </div>
      </div>
      
      <div class="calculator-results">
        <h4 style="color:var(--text-muted); margin-bottom:-0.5rem;">Calculated Pricing Canvas</h4>
        
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="result-card">
            <h4>Total Unit Cost</h4>
            <div class="result-val" id="res-cost">$${totalUnitCost.toFixed(2)}</div>
          </div>
          <div class="result-card">
            <h4>Profit per Unit</h4>
            <div class="result-val" id="res-profit" style="color:var(--accent);">$${profitAmount.toFixed(2)}</div>
          </div>
        </div>
        
        <div class="result-card highlight">
          <h4>Recommended Selling Price</h4>
          <div class="result-val" id="res-selling">$${sellingPrice.toFixed(2)}</div>
        </div>
        
        <div class="result-card">
          <h4>Monthly Break-Even Sales</h4>
          <div class="result-val" id="res-breakeven">${breakEvenUnits} items</div>
          <p style="font-size:0.75rem; color:var(--text-muted); margin-top:0.25rem;">(To cover $${monthlyFixedCost} fixed monthly overheads)</p>
        </div>
      </div>
    </div>
  `;
}

function bindCalculatorEvents() {
  const sliders = ['raw', 'labor', 'hours', 'overhead', 'markup'];
  
  sliders.forEach(key => {
    const el = document.getElementById(`slide-${key}`);
    if (el) {
      el.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (key === 'raw') calcState.raw = val;
        if (key === 'labor') calcState.laborHour = val;
        if (key === 'hours') calcState.hoursSpent = val;
        if (key === 'overhead') calcState.overhead = val;
        if (key === 'markup') calcState.markup = val;
        
        // Quick update result display without full dashboard re-render
        updateCalculatorOutputs();
      });
    }
  });
}

function updateCalculatorOutputs() {
  document.getElementById('val-raw').textContent = `$${calcState.raw.toFixed(2)}`;
  document.getElementById('val-labor').textContent = `$${calcState.laborHour.toFixed(2)}/hr`;
  document.getElementById('val-hours').textContent = `${calcState.hoursSpent} hrs`;
  document.getElementById('val-overhead').textContent = `$${calcState.overhead.toFixed(2)}`;
  document.getElementById('val-markup').textContent = `${calcState.markup}%`;
  
  const directLabor = calcState.laborHour * calcState.hoursSpent;
  const totalUnitCost = calcState.raw + directLabor + calcState.overhead;
  const profitAmount = totalUnitCost * (calcState.markup / 100);
  const sellingPrice = totalUnitCost + profitAmount;
  
  const monthlyFixedCost = 300.00;
  const breakEvenUnits = profitAmount > 0 ? Math.ceil(monthlyFixedCost / profitAmount) : 0;
  
  document.getElementById('res-cost').textContent = `$${totalUnitCost.toFixed(2)}`;
  document.getElementById('res-profit').textContent = `$${profitAmount.toFixed(2)}`;
  document.getElementById('res-selling').textContent = `$${sellingPrice.toFixed(2)}`;
  document.getElementById('res-breakeven').textContent = `${breakEvenUnits} items`;
}

// --- LEARNING HUB MODULE ---
let activeCourseId = null;
let currentLessonState = {
  activeQuizAnswer: null,
  quizSubmitted: false,
  quizCorrect: null
};

function renderLearningHub() {
  const container = document.getElementById('view-learning');
  
  if (activeCourseId) {
    renderCoursePlayer(container);
    return;
  }
  
  container.innerHTML = `
    <div style="margin-bottom: 2.5rem;">
      <span class="hero-tag">Knowledge Base</span>
      <h2 style="font-size:2.2rem; margin-top:0.25rem;">Micro-Learning Library</h2>
      <p style="color:var(--text-muted); margin-top:0.25rem;">Quick interactive classes to master critical micro-business skills.</p>
    </div>
    
    <div class="courses-grid">
      ${MOCK_DATA.lessons.map(lesson => {
        const hasCompleted = STATE.quizScores[lesson.id] !== undefined;
        return `
          <div class="course-card">
            <div class="course-banner">${lesson.icon}</div>
            <div class="course-body">
              <h3>${lesson.title}</h3>
              <p>${lesson.summary}</p>
              
              <div class="course-meta">
                <span>⏱️ ${lesson.readTime}</span>
                <span>${hasCompleted ? `🟢 Completed (${STATE.quizScores[lesson.id]}%)` : '⚪ Not started'}</span>
              </div>
              
              <button class="btn btn-secondary" style="margin-top:1.5rem;" onclick="openCourse('${lesson.id}')">
                ${hasCompleted ? 'Review Class' : 'Start Class'}
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

window.openCourse = function(courseId) {
  activeCourseId = courseId;
  currentLessonState.activeQuizAnswer = null;
  currentLessonState.quizSubmitted = false;
  currentLessonState.quizCorrect = null;
  renderLearningHub();
};

function renderCoursePlayer(container) {
  const lesson = MOCK_DATA.lessons.find(l => l.id === activeCourseId);
  if (!lesson) return;
  
  container.innerHTML = `
    <div class="course-player">
      <button class="btn btn-secondary" onclick="closeCourse()" style="margin-bottom: 1.5rem;">
        ← Back to Learning Library
      </button>
      
      <div class="lesson-content">
        <h2 style="font-size:2rem; border-bottom:1px solid var(--border-color); padding-bottom:1rem;">
          ${lesson.title}
        </h2>
        
        <div class="lesson-text-body">
          ${lesson.sections.map(sec => `
            <h4>${sec.title}</h4>
            <p>${sec.content}</p>
          `).join('')}
        </div>
        
        <div class="quiz-container">
          <h3 style="font-size:1.25rem; color:var(--accent); margin-bottom:1rem;">Lesson Evaluation</h3>
          <p style="font-weight:600; margin-bottom:1rem;">${lesson.quiz.question}</p>
          
          <div id="quiz-options-list">
            ${lesson.quiz.options.map((opt, idx) => {
              let optClass = '';
              if (currentLessonState.activeQuizAnswer === idx) optClass = 'selected';
              
              if (currentLessonState.quizSubmitted) {
                if (idx === lesson.quiz.answerIndex) {
                  optClass = 'correct';
                } else if (currentLessonState.activeQuizAnswer === idx) {
                  optClass = 'incorrect';
                }
              }
              
              return `
                <div class="quiz-option-item ${optClass}" 
                     onclick="${currentLessonState.quizSubmitted ? '' : `selectQuizOption(${idx})`}">
                  ${opt}
                </div>
              `;
            }).join('')}
          </div>
          
          <div style="margin-top:1.5rem; display:flex; justify-content:space-between; align-items:center;">
            <div>
              ${currentLessonState.quizSubmitted 
                ? (currentLessonState.quizCorrect 
                    ? `<span style="color:var(--primary); font-weight:700;">✓ Correct Answer! Badge Earned.</span>` 
                    : `<span style="color:var(--danger); font-weight:700;">✗ Incorrect. Try reviewing the lesson text above.</span>`)
                : ''}
            </div>
            
            ${currentLessonState.quizSubmitted 
              ? `<button class="btn btn-primary" onclick="closeCourse()">Finish Course</button>`
              : `<button class="btn btn-primary" onclick="submitQuiz()">Submit Answer</button>`}
          </div>
        </div>
      </div>
    </div>
  `;
}

window.closeCourse = function() {
  activeCourseId = null;
  renderLearningHub();
};

window.selectQuizOption = function(idx) {
  currentLessonState.activeQuizAnswer = idx;
  const container = document.getElementById('view-learning');
  renderCoursePlayer(container);
};

window.submitQuiz = function() {
  if (currentLessonState.activeQuizAnswer === null) {
    showToast('Please select an option first.');
    return;
  }
  
  const lesson = MOCK_DATA.lessons.find(l => l.id === activeCourseId);
  const isCorrect = currentLessonState.activeQuizAnswer === lesson.quiz.answerIndex;
  
  currentLessonState.quizSubmitted = true;
  currentLessonState.quizCorrect = isCorrect;
  
  // Save completion score
  STATE.quizScores[lesson.id] = isCorrect ? 100 : 0;
  saveStateToLocalStorage();
  
  // Re-render
  const container = document.getElementById('view-learning');
  renderCoursePlayer(container);
};

// --- MENTORSHIP MODULE ---
function renderMentorship() {
  const container = document.getElementById('view-mentorship');
  
  container.innerHTML = `
    <div style="margin-bottom: 2.5rem;">
      <span class="hero-tag">Support Ecosystem</span>
      <h2 style="font-size:2.2rem; margin-top:0.25rem;">Mentorship Directory & Help</h2>
      <p style="color:var(--text-muted); margin-top:0.25rem;">Ask questions to experienced business guides or browse verified mentors.</p>
    </div>
    
    <div class="mentors-layout">
      <!-- Left side: Mentors and logs -->
      <div>
        <h3 style="font-size:1.35rem; margin-bottom:1.25rem; color:var(--primary);">Verified Volunteers</h3>
        <div class="mentor-directory-grid">
          ${MOCK_DATA.mentors.map(mentor => `
            <div class="mentor-card">
              <div class="mentor-avatar">${mentor.name[0]}</div>
              <h4>${mentor.name}</h4>
              <div class="mentor-spec">${mentor.specialty}</div>
              <div class="mentor-exp">${mentor.experience} Experience</div>
              <p>"${mentor.bio}"</p>
              
              <button class="btn btn-secondary btn-primary" style="width:100%; min-height:40px; padding:0.5rem 1rem; font-size:0.9rem;" onclick="openBookingModal('${mentor.name}')">
                Book Session
              </button>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Right side: Q&A Board -->
      <div class="qna-box">
        <h3 style="font-size:1.25rem; color:var(--accent);">Public Advisory Board</h3>
        
        <div class="qna-input-group">
          <label style="font-size:0.85rem; color:var(--text-muted);">Ask a Business Question</label>
          <textarea id="qna-textarea" placeholder="Describe your business problem, e.g., 'How do I cost delivery for bakery items?'"></textarea>
          <button class="btn btn-primary" onclick="submitQuestion()" style="min-height:40px; padding:0.5rem; font-size:0.95rem;">
            Submit Question
          </button>
        </div>
        
        <div class="qna-threads" id="qna-threads-container">
          ${STATE.qnaThreads.map(thread => `
            <div class="qna-thread-item">
              <div class="qna-question">🙋‍♂️ ${thread.question}</div>
              ${thread.answer ? `
                <div class="qna-answer">
                  <strong>Advice:</strong> ${thread.answer}
                  <div class="qna-answer-meta">
                    <span>By: ${thread.answeredBy || 'Anonymous'}</span>
                  </div>
                </div>
              ` : `
                <div style="font-size:0.8rem; color:var(--text-muted); font-style:italic;">
                  ⌛ Pending mentor response...
                </div>
              `}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

window.submitQuestion = function() {
  const txtarea = document.getElementById('qna-textarea');
  const question = txtarea.value.trim();
  
  if (!question) {
    showToast('Please type your question before submitting.');
    return;
  }
  
  // Add question thread
  const newThread = {
    question: question,
    answer: null,
    author: STATE.currentUser ? STATE.currentUser.name : 'Guest User',
    answeredBy: null
  };
  
  STATE.qnaThreads.unshift(newThread);
  saveStateToLocalStorage();
  
  // Show confirmation toast
  showToast('Question posted! Mentors will be notified.');
  txtarea.value = '';
  
  // Re-render
  renderMentorship();
  
  // Simulate mentor response after 4 seconds
  setTimeout(() => {
    newThread.answer = "Thank you for asking! For this stage, we recommend launching a micro-pilot batch to test local demand with zero capital risk.";
    newThread.answeredBy = "Robert Chen (Mentor)";
    saveStateToLocalStorage();
    
    // Notify if user is on the mentorship tab
    if (STATE.currentView === 'mentorship') {
      renderMentorship();
    }
    showToast('New mentor advice posted on the advisory board!');
  }, 4000);
};

// --- BOOKING MODAL HANDLERS ---
let activeBookingMentor = '';
window.openBookingModal = function(mentorName) {
  if (!STATE.currentUser) {
    showToast('Please Sign In / Register to book a session.');
    openAuthModal();
    return;
  }
  activeBookingMentor = mentorName;
  
  // Create and inject booking modal markup dynamically if not exists
  let modalEl = document.getElementById('booking-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'booking-modal';
    modalEl.className = 'auth-modal';
    document.body.appendChild(modalEl);
  }
  
  modalEl.innerHTML = `
    <div class="auth-card" style="max-width: 480px;">
      <button class="auth-close" onclick="closeBookingModal()">×</button>
      <h2 style="font-size:1.8rem; margin-bottom:1.5rem; color:var(--primary);">Book Guidance Call</h2>
      <p style="color:var(--text-muted); margin-bottom:1.5rem;">Schedule a 15-minute phone advice call with <strong>${activeBookingMentor}</strong>.</p>
      
      <div class="form-group">
        <label>Select Date</label>
        <select id="booking-date">
          <option value="2026-07-06">Monday, July 6, 2026</option>
          <option value="2026-07-07">Tuesday, July 7, 2026</option>
          <option value="2026-07-08">Wednesday, July 8, 2026</option>
        </select>
      </div>
      
      <div class="form-group">
        <label>Select Time Slot</label>
        <select id="booking-time">
          <option value="10:00 AM">10:00 AM - 10:15 AM</option>
          <option value="11:30 AM">11:30 AM - 11:45 AM</option>
          <option value="03:00 PM">03:00 PM - 03:15 PM</option>
        </select>
      </div>
      
      <div class="form-group">
        <label>Describe what you need help with</label>
        <textarea id="booking-notes" placeholder="e.g. 'Struggling with sewing pricing structure...'" style="height:80px;"></textarea>
      </div>
      
      <button class="btn btn-primary" onclick="submitBooking()" style="width:100%; margin-top:1rem;">
        Confirm Free Booking
      </button>
    </div>
  `;
  
  modalEl.classList.add('active');
};

window.closeBookingModal = function() {
  const modalEl = document.getElementById('booking-modal');
  if (modalEl) {
    modalEl.classList.remove('active');
  }
};

window.submitBooking = function() {
  const date = document.getElementById('booking-date').value;
  const time = document.getElementById('booking-time').value;
  const notes = document.getElementById('booking-notes').value;
  
  const booking = {
    id: 'book-' + Date.now(),
    mentor: activeBookingMentor,
    date: date,
    time: time,
    notes: notes,
    status: 'scheduled'
  };
  
  STATE.bookedSessions.push(booking);
  saveStateToLocalStorage();
  
  showToast(`Guidance call scheduled with ${activeBookingMentor}!`);
  closeBookingModal();
  
  if (STATE.currentView === 'admin') {
    renderAdminDashboard();
  }
};

// --- ADMIN / MENTOR DASHBOARD MODULE ---
function renderAdminDashboard() {
  const container = document.getElementById('view-admin');
  
  // Basic platform calculations
  const totalUsersCount = 42; // static + mock representation
  const activeRoadmapsCount = Object.keys(STATE.activeRoadmaps).length + 3;
  const coursesCompletedCount = Object.keys(STATE.quizScores).length;
  const bookingsCount = STATE.bookedSessions.length;
  
  container.innerHTML = `
    <div style="margin-bottom: 2.5rem;">
      <span class="hero-tag">Platform Control Center</span>
      <h2 style="font-size:2.2rem; margin-top:0.25rem;">Admin Management Console</h2>
      <p style="color:var(--text-muted); margin-top:0.25rem;">Monitor platform growth, review registrations, and verify course uploads.</p>
    </div>
    
    <div class="admin-metrics-grid">
      <div class="admin-metric-card">
        <div class="label">Total Registered Users</div>
        <div class="value">${totalUsersCount}</div>
      </div>
      <div class="admin-metric-card">
        <div class="label">Active Business Roadmaps</div>
        <div class="value">${activeRoadmapsCount}</div>
      </div>
      <div class="admin-metric-card">
        <div class="label">Completed Courses</div>
        <div class="value">${coursesCompletedCount}</div>
      </div>
      <div class="admin-metric-card">
        <div class="label">Booked Mentor Calls</div>
        <div class="value">${bookingsCount}</div>
      </div>
    </div>
    
    <div class="admin-sections">
      <!-- Section 1: Booked Guidance Sessions -->
      <div class="admin-section">
        <h3>Scheduled Guidance Calls</h3>
        <div class="admin-list">
          ${STATE.bookedSessions.map(session => `
            <div class="admin-list-item">
              <div>
                <h5>Call with ${session.mentor}</h5>
                <p>Date: ${session.date} | Time: ${session.time}</p>
                <p style="font-style:italic; font-size:0.8rem; margin-top:0.25rem;">"${session.notes || 'No custom notes'}"</p>
              </div>
              <span class="badge verified">${session.status}</span>
            </div>
          `).join('')}
          
          ${STATE.bookedSessions.length === 0 ? `
            <div style="text-align:center; color:var(--text-muted); padding:1rem;">
              No consultations scheduled yet. Book sessions in the Mentorship tab!
            </div>
          ` : ''}
        </div>
      </div>
      
      <!-- Section 2: Manage Curation -->
      <div class="admin-section">
        <h3>Curation Controls</h3>
        <div style="display:flex; flex-direction:column; gap:1.25rem;">
          <div class="admin-list-item" style="flex-direction:column; align-items:stretch; gap:0.5rem;">
            <h5 style="margin-bottom:0.25rem;">Add New Startup Roadmap Template</h5>
            <div style="display:flex; gap:0.5rem;">
              <input type="text" id="admin-new-roadmap-title" placeholder="Roadmap Title (e.g. Handmade Soap)" style="height:38px; font-size:0.85rem;">
              <button class="btn btn-primary" onclick="adminAddRoadmap()" style="min-height:38px; height:38px; padding:0 1rem; font-size:0.85rem;">
                Create
              </button>
            </div>
          </div>
          
          <div class="admin-list-item">
            <div>
              <h5>System Content Health</h5>
              <p>Lessons verified: 3 modules active</p>
            </div>
            <span class="badge verified">Running</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.adminAddRoadmap = function() {
  const titleInput = document.getElementById('admin-new-roadmap-title');
  const title = titleInput.value.trim();
  
  if (!title) {
    showToast('Please type a roadmap title.');
    return;
  }
  
  // Instantiate dynamic template
  const newIdea = {
    id: 'idea-dyn-' + Date.now(),
    title: title,
    description: 'Custom added business template via Admin controls.',
    category: 'General Service',
    skills_required: ['sk-digital'],
    interests_required: ['int-home'],
    estimated_startup_cost: 100.00,
    complexity: 'Easy',
    duration: '2 Weeks',
    steps: [
      { id: 'dyn-val-1', title: 'Survey customers', description: 'Validate the market locally.', phase: 'validation' },
      { id: 'dyn-tool-1', title: 'Accumulate equipment', description: 'Obtain tools.', phase: 'skills_tools' },
      { id: 'dyn-legal-1', title: 'Fulfill licensing rules', description: 'Incorporate sole-trading parameters.', phase: 'legal' }
    ]
  };
  
  MOCK_DATA.businessIdeas.push(newIdea);
  STATE.activeRoadmaps[newIdea.id] = { completedStepIds: [] };
  STATE.activeRoadmapId = newIdea.id;
  saveStateToLocalStorage();
  
  titleInput.value = '';
  showToast(`Startup template "${title}" created successfully!`);
  
  renderAdminDashboard();
};

// --- AUTHENTICATION MODAL LOGIC ---
let isSignUpMode = false;
window.openAuthModal = function() {
  isSignUpMode = false;
  const modalEl = document.getElementById('auth-modal');
  renderAuthModalMarkup(modalEl);
  modalEl.classList.add('active');
};

window.closeAuthModal = function() {
  const modalEl = document.getElementById('auth-modal');
  modalEl.classList.remove('active');
};

window.toggleAuthMode = function() {
  isSignUpMode = !isSignUpMode;
  const modalEl = document.getElementById('auth-modal');
  renderAuthModalMarkup(modalEl);
};

function renderAuthModalMarkup(modalEl) {
  modalEl.innerHTML = `
    <div class="auth-card">
      <button class="auth-close" onclick="closeAuthModal()">×</button>
      <h2 style="font-size:1.8rem; margin-bottom:1.25rem; text-align:center; background: linear-gradient(135deg, #ffffff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        ${isSignUpMode ? 'Register Account' : 'Sign In'}
      </h2>
      
      <!-- Quick Demo Role Switcher -->
      <div style="margin-bottom: 1.25rem; padding: 0.75rem; background: rgba(30, 41, 59, 0.6); border-radius: 12px; border: 1px solid var(--border-color);">
        <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.5rem; text-align:center; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">⚡ Quick 1-Click Demo Login</div>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:0.4rem;">
          <button type="button" class="btn btn-secondary" onclick="quickLogin('user', 'Shivam (User)', 'shivam@entreskill.org')" style="font-size:0.75rem; padding:0.4rem 0.2rem; min-height:34px;">
            👤 User
          </button>
          <button type="button" class="btn btn-secondary" onclick="quickLogin('mentor', 'Sarah (Mentor)', 'mentor@entreskill.org')" style="font-size:0.75rem; padding:0.4rem 0.2rem; min-height:34px;">
            👨‍🏫 Mentor
          </button>
          <button type="button" class="btn btn-secondary" onclick="quickLogin('admin', 'Admin Manager', 'admin@entreskill.org')" style="font-size:0.75rem; padding:0.4rem 0.2rem; min-height:34px; color:var(--accent);">
            🛡️ Admin
          </button>
        </div>
      </div>
      
      <div style="text-align:center; color:var(--text-muted); font-size:0.8rem; margin-bottom:1rem; position:relative;">
        <span style="background:var(--bg-main); padding:0 0.5rem; position:relative; z-index:1;">Or enter account details</span>
      </div>

      <div class="form-group" style="margin-bottom:0.85rem;">
        <label style="font-size:0.82rem;">Full Name</label>
        <input type="text" id="auth-name" placeholder="Enter your full name (e.g. Shivam Singh)">
      </div>
      
      <div class="form-group" style="margin-bottom:0.85rem;">
        <label style="font-size:0.82rem;">Email Address</label>
        <input type="email" id="auth-email" placeholder="user@example.com">
      </div>
      
      <div class="form-group" style="margin-bottom:0.85rem;">
        <label style="font-size:0.82rem;">Password</label>
        <input type="password" id="auth-pass" placeholder="••••••••">
      </div>
      
      ${isSignUpMode ? `
        <div class="form-group" style="margin-bottom:0.85rem;">
          <label style="font-size:0.82rem;">Select Role</label>
          <select id="auth-role">
            <option value="user">Aspiring Entrepreneur</option>
            <option value="mentor">Volunteer Mentor</option>
            <option value="admin">System Administrator</option>
          </select>
        </div>
      ` : ''}
      
      <button class="btn btn-primary" onclick="submitAuth()" style="width:100%; margin-top:1.25rem; font-size:1rem; min-height:42px;">
        ${isSignUpMode ? 'Sign Up & Continue' : 'Sign In to Account'}
      </button>
      
      <p style="text-align:center; font-size:0.85rem; color:var(--text-muted); margin-top:1.25rem;">
        ${isSignUpMode ? 'Already have an account?' : 'New to the platform?'}
        <span style="color:var(--primary); cursor:pointer; font-weight:600;" onclick="toggleAuthMode()">
          ${isSignUpMode ? 'Sign In' : 'Register Here'}
        </span>
      </p>
    </div>
  `;
}

window.quickLogin = function(role, name, email) {
  STATE.currentUser = {
    name: name,
    email: email,
    role: role
  };
  saveStateToLocalStorage();
  closeAuthModal();
  showToast(`Signed in successfully as ${name}!`);
  renderApp();
};

window.submitAuth = function() {
  const nameInput = document.getElementById('auth-name') ? document.getElementById('auth-name').value.trim() : '';
  const email = document.getElementById('auth-email').value.trim();
  const pass = document.getElementById('auth-pass').value.trim();
  
  if (!email) {
    showToast('Please enter an email address.');
    return;
  }
  
  let role = isSignUpMode ? (document.getElementById('auth-role')?.value || 'user') : 'user';
  let userName = nameInput;

  // Infer role & default name if not manually specified
  if (email.includes('admin')) {
    role = 'admin';
    if (!userName) userName = 'Admin Manager';
  } else if (email.includes('mentor')) {
    role = 'mentor';
    if (!userName) userName = 'Verified Mentor';
  }

  if (!userName) {
    userName = email.split('@')[0];
    // Capitalize first letter
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
  }

  STATE.currentUser = {
    name: userName,
    email: email,
    role: role
  };
  
  showToast(`Welcome ${userName}! Signed in as ${role}.`);
  saveStateToLocalStorage();
  closeAuthModal();
  renderApp();
};

window.handleAuthNavClick = function() {
  if (STATE.currentUser) {
    // Logout
    STATE.currentUser = null;
    saveStateToLocalStorage();
    showToast('Signed out successfully.');
    navigateTo('splash');
  } else {
    openAuthModal();
  }
};

// --- NOTIFICATION TOAST LOGIC ---
function showToast(message) {
  let toastEl = document.getElementById('toast-notification');
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.id = 'toast-notification';
    toastEl.className = 'notification-toast';
    document.body.appendChild(toastEl);
  }
  
  toastEl.innerHTML = `
    <span class="toast-icon">✨</span>
    <span>${message}</span>
  `;
  
  toastEl.classList.add('active');
  
  // Clear previous timeout if fast action clicks occur
  if (window.toastTimeout) {
    clearTimeout(window.toastTimeout);
  }
  
  window.toastTimeout = setTimeout(() => {
    toastEl.classList.remove('active');
  }, 3000);
}

// --- GLOBAL EVENT BINDING ---
function setupEventListeners() {
  // Bind global navigation anchors
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = link.dataset.view;
      if (targetView) {
        navigateTo(targetView);
      }
    });
  });
}

// Initialize on load
window.addEventListener('DOMContentLoaded', initApp);

// ==========================================
// AI ASSISTANT CHATBOT CONTROLLER LOGIC
// ==========================================

window.toggleChatbot = function(forceState) {
  const windowEl = document.getElementById('chatbot-window');
  if (!windowEl) return;

  if (typeof forceState === 'boolean') {
    if (forceState) {
      windowEl.classList.add('active');
    } else {
      windowEl.classList.remove('active');
    }
  } else {
    windowEl.classList.toggle('active');
  }

  if (windowEl.classList.contains('active')) {
    const inputEl = document.getElementById('chatbot-input');
    if (inputEl) inputEl.focus();
    renderChatbotMessages();
  }
};

window.renderChatbotMessages = function() {
  const container = document.getElementById('chatbot-messages');
  if (!container) return;

  if (!STATE.chatHistory || STATE.chatHistory.length === 0) {
    STATE.chatHistory = [
      {
        sender: 'assistant',
        text: "Hello! 🌱 I'm your EntreSkill AI Startup Assistant. Ask me anything about finding business ideas, legal permits, unit pricing calculations, or finding customers!",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  }

  container.innerHTML = STATE.chatHistory.map(msg => `
    <div class="chat-bubble ${msg.sender}">
      <div>${msg.text}</div>
      <div class="msg-time">${msg.time}</div>
    </div>
  `).join('');

  // Scroll to bottom
  container.scrollTop = container.scrollHeight;
};

window.handleChatbotSubmit = function(e) {
  if (e) e.preventDefault();

  const inputEl = document.getElementById('chatbot-input');
  if (!inputEl) return;

  const queryText = inputEl.value.trim();
  if (!queryText) return;

  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Add User Message
  STATE.chatHistory.push({
    sender: 'user',
    text: queryText,
    time: currentTime
  });

  inputEl.value = '';
  renderChatbotMessages();
  saveStateToLocalStorage();

  // Show Typing Indicator
  const messagesContainer = document.getElementById('chatbot-messages');
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'typing-indicator';
  typingIndicator.id = 'chatbot-typing-indicator';
  typingIndicator.innerHTML = `
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  `;
  messagesContainer.appendChild(typingIndicator);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Simulate AI Response with knowledge engine
  setTimeout(() => {
    const indicatorEl = document.getElementById('chatbot-typing-indicator');
    if (indicatorEl) indicatorEl.remove();

    const responseText = generateAIResponse(queryText);
    STATE.chatHistory.push({
      sender: 'assistant',
      text: responseText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    saveStateToLocalStorage();
    renderChatbotMessages();
  }, 1000);
};

window.sendQuickPrompt = function(promptText) {
  const inputEl = document.getElementById('chatbot-input');
  if (inputEl) {
    inputEl.value = promptText;
    handleChatbotSubmit();
  }
};

window.clearChatbotHistory = function() {
  STATE.chatHistory = [
    {
      sender: 'assistant',
      text: "Chat reset. 🌱 How else can I assist you with your startup journey?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ];
  saveStateToLocalStorage();
  renderChatbotMessages();
  showToast('Chat history cleared.');
};

function generateAIResponse(query) {
  const q = query.toLowerCase();

  if (q.includes('price') || q.includes('cost') || q.includes('profit') || q.includes('calculat')) {
    return "💡 **Pricing Strategy Tip:** To set your selling price, use our formula: `Selling Price = (Raw Materials + Labor Hours × Hourly Rate + Overhead) ÷ (1 - Profit Margin %)`. Visit our **My Roadmap** tab (Phase 4) to use our live interactive pricing sliders!";
  } else if (q.includes('license') || q.includes('permit') || q.includes('legal') || q.includes('bakery') || q.includes('food')) {
    return "📜 **Legal & Permit Guide:** For home bakeries or food services, complete basic food safety handling training and apply for home kitchen health inspection. For repair or tailoring shops, register a micro-enterprise sole proprietorship license to operate legally.";
  } else if (q.includes('client') || q.includes('customer') || q.includes('marketing') || q.includes('sell')) {
    return "📣 **Getting First 10 Customers:** Start locally! 1) Set up a professional WhatsApp Business catalog. 2) Offer a 10% neighborhood launch discount. 3) Ask early customers for photo reviews to post on Instagram or local community groups.";
  } else if (q.includes('tool') || q.includes('spare') || q.includes('repair') || q.includes('sourc')) {
    return "🔧 **Tool & Parts Sourcing:** Research wholesale electronics component suppliers online or visit regional wholesale tool hubs. Always buy ESD safety mats and high-precision screwdrivers for mobile repair.";
  } else if (q.includes('budget') || q.includes('money') || q.includes('capital')) {
    return "💰 **Low Capital Startups:** Most micro-businesses on EntreSkill Hub require under $150–$300 to start. You can use our **Find Your Idea** assessor wizard to filter business concepts based on your budget limit!";
  } else if (q.includes('mentor') || q.includes('session') || q.includes('help')) {
    return "🤝 **Mentorship Access:** You can book 1-on-1 advice sessions with verified industry mentors or post your business questions directly to our Public Advisory Q&A board under the **Mentorship** tab!";
  } else if (q.includes('tailor') || q.includes('sew')) {
    return "✂️ **Tailoring Startup:** Custom alterations have high profit margins. Focus first on basic hem repairs, zipper replacements, and local dressmaking before taking bulk wedding attire orders!";
  } else {
    return "🌱 Great question! On EntreSkill Hub, you can take our **Skill Assessor** to discover matched business templates, follow structured 5-phase roadmaps, calculate prices, or book sessions with experienced mentors under the **Mentorship** tab.";
  }
}
