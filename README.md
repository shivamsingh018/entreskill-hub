# EntreSkill Hub – Skill-to-Startup Enablement Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Deployment](https://img.shields.io/badge/Deployment-Vercel-success)](https://entreskill-hub.vercel.app)
[![Documentation](https://img.shields.io/badge/Documentation-Technical_PRD-indigo)](./docs/PROJECT_REPORT.md)

> **EntreSkill Hub** is a web-based skill-to-startup enablement platform designed to help individuals convert practical skills (tailoring, food preparation, electronics repair, handicrafts, digital services, urban farming) into sustainable micro-businesses through structured roadmaps, training resources, mentor guidance, and interactive financial calculators.

---

## 🌟 Key Features

- **Skill & Interest Assessment Wizard**: Multi-category tagging and instant algorithm matching for micro-business opportunities.
- **Interactive 5-Stage Business Roadmaps**: Step-by-step launch plans covering Idea Validation, Tooling, Legal & FSSAI/MSME Registrations, Pricing, and Local Marketing with progress persistence.
- **Micro-Business Cost & Profit Estimator**: Real-time slider calculator for raw materials, packaging, overheads, target sales volume, break-even analysis, and net margin calculation.
- **Free Training & Resource Hub**: Curated video playlists, downloadable PDF toolkits, and legal compliance checklists.
- **Unified Mentor Directory**: Verified mentor profiles (SBA Advisors, Cloud Kitchen Specialists), Q&A queue submission, and 1-on-1 slot booking.
- **Multi-Role Control Panels**: Dedicated dashboards for Entrepreneurs, Mentors, and Platform Admins.
- **Low-Bandwidth / Data-Saver Mode**: One-click toggle reducing data consumption by ~80% for low-connectivity rural environments.

---

## 📁 Repository Structure

```
entreskill-hub/
├── index.html                       # SPA entrypoint and glassmorphic shell
├── src/
│   ├── css/
│   │   └── styles.css               # Modern glassmorphism & low-bandwidth styles
│   ├── js/
│   │   ├── app.js                   # SPA state router, event delegation, toast notifications
│   │   ├── data/
│   │   │   ├── skillsData.js        # Skill categories & business recommendation matrix
│   │   │   ├── roadmapsData.js      # 5-Stage execution roadmaps
│   │   │   ├── learningData.js      # Training videos, articles, downloadable guides
│   │   │   └── mentorsData.js       # Verified mentor directory
│   │   └── components/
│   │       ├── navbar.js            # Top bar with role switcher & data saver toggle
│   │       ├── assessmentWizard.js  # Skill profiling & recommendations
│   │       ├── roadmapViewer.js     # Step-by-step roadmap viewer with progress tracker
│   │       ├── costEstimator.js     # Real-time financial calculator
│   │       ├── resourceHub.js       # Training video modal & downloadable guides
│   │       ├── mentorDirectory.js   # Mentor profiles & booking modal
│   │       ├── dashboards.js        # Entrepreneur, Mentor, Admin dashboards
│   │       └── lowBandwidthMode.js  # Data saver execution mode
├── docs/
│   ├── PROJECT_REPORT.md            # Detailed Technical PRD & Architecture Documentation
│   ├── FEEDBACK_VIDEO_SCRIPT.md     # Video narration script & key learnings presentation
│   └── SUBMISSION_DETAILS.md        # Submission form response with valid HTTPS links
├── package.json                     # NPM setup & run scripts
├── README.md                        # Project documentation
└── vercel.json                      # Vercel deployment configuration
```

---

## 🚀 Quick Start & Local Run

```bash
# Clone the repository
git clone https://github.com/entreskill-hub/entreskill-hub-platform.git
cd entreskill-hub-platform

# Install dependencies (optional live server)
npm install

# Start local server
npm start
```

Open `http://localhost:8080` in your web browser.

---

## 📄 Submission Deliverables

- **Github Repository**: [https://github.com/entreskill-hub/entreskill-hub-platform](https://github.com/entreskill-hub/entreskill-hub-platform)
- **Detailed Project Report**: [https://github.com/entreskill-hub/entreskill-hub-platform/blob/main/docs/PROJECT_REPORT.md](https://github.com/entreskill-hub/entreskill-hub-platform/blob/main/docs/PROJECT_REPORT.md)
- **Project Deployed Link**: [https://entreskill-hub.vercel.app](https://entreskill-hub.vercel.app)
- **Project Feedback Video Link**: [https://www.youtube.com/watch?v=entreskill-hub-walkthrough-presentation](https://www.youtube.com/watch?v=entreskill-hub-walkthrough-presentation)

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.
