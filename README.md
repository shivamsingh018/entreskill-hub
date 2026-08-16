# EntreSkill Hub – Skill-to-Startup Platform

EntreSkill Hub is a responsive, client-side web application designed to help aspiring micro-entrepreneurs identify viable startup concepts based on their practical skills and interests, providing them with step-by-step guidance roadmaps, interactive costing tools, educational courses, and peer mentorship.

---

## 🚀 Getting Started

Since the platform is built using a clean, self-contained **Single Page Application (SPA)** architecture with **Vanilla HTML5, CSS3, and JavaScript**, there is zero installation required.

### How to Run Locally

You can open the project in any of the following ways:

#### Option 1: Direct File Open
Double-click the [index.html](file:///Users/shivamsingh/.gemini/antigravity/scratch/entreskill-hub/index.html) file to open it directly in Google Chrome, Safari, or any modern web browser.

#### Option 2: Run a Local Development Server
For the best experience (and to preview standard relative paths accurately), run a light HTTP server inside the project directory:

```bash
# Using Python 3 (Installed by default on macOS)
python3 -m http.server 8000

# Using Node.js npx runner
npx serve .
```
Then open your browser to `http://localhost:8000`.

---

## 🛠️ Technology Stack & Architecture

- **Frontend Core**: HTML5 and modular JavaScript (ES6+).
- **Styling Layout**: Vanilla CSS3 using:
  - HSL-tailored custom properties for consistent premium branding.
  - Responsive **Flexbox** and **Grid** alignments adjusting from smartphones to desktops.
  - **Glassmorphism** cards, backdrop filters, and subtle ambient shadows.
  - WCAG 2.1 AA compliant color contrasts and large target click states.
- **State & Data Store**: A centralized `STATE` reactive tree inside [app.js](file:///Users/shivamsingh/.gemini/antigravity/scratch/entreskill-hub/app.js) with:
  - Centralized state mutation triggers rendering the UI reactively.
  - Complete sync to `localStorage` ensuring onboarding selections, checklist checkmarks, booked sessions, and quiz achievements persist across window refreshes.
  - Real-time calculator pricing sliders.

---

## 🌟 Implemented Features

1. **Interactive Assessor Wizard**: A multi-step questionnaire mapping selected skills (sewing, baking, repair, etc.) and interests (home-based, fast cash flows, tech) to startup ideas.
2. **Business Recommendation Engine**: Custom score calculator sorting business opportunities by skill-to-interest percentages.
3. **Checklist Startup Roadmaps**: Complete step-by-step phases covering Demand Validation, Sourcing Tools, Legal Permits, Cost Calculators, and Launch Marketing.
4. **Smart Financial Calculator**: Interactive pricing helper estimating unit cost, markup profit margin, recommended sale prices, and monthly break-even quotas.
5. **Micro-Learning Hub**: Class cards with slide narration and interactive validation quizzes tracking grading and badge completions.
6. **Mentorship Directory & Q&A**: Active directory of local specialists allowing scheduling of advisory sessions and advisory board text postings.
7. **Admin Dashboard Console**: Console to inspect platform KPIs (number of users, roadmaps, course scores) and add custom startup templates dynamically.

---

## 💡 Role-Based Testing Accounts

To test the role-specific features (Admin Dashboard access or Mentor directories), you can sign in with mock email domains:

- **Admin Account**: Sign in with an email containing the word `admin` (e.g., `admin@hub.com`) to unlock the **Admin Panel** in the top navigation menu.
- **Mentor Account**: Sign in with an email containing the word `mentor` (e.g., `mentor@hub.com`) to register mock sessions and view platform KPIs.
- **Standard User**: Sign in with any standard email (e.g., `mariam@gmail.com`) to create personal roadmaps, track checklists, and book sessions.
