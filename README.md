# EntreSkill Hub – Skill-to-Startup Enablement Platform

**Platform Owner & Super Admin**: Shivam Singh  
**Live Application**: [https://shivamsingh018.github.io/entreskill-hub/](https://shivamsingh018.github.io/entreskill-hub/)  
**GitHub Repository**: [https://github.com/shivamsingh018/entreskill-hub](https://github.com/shivamsingh018/entreskill-hub)

EntreSkill Hub is a multi-role web platform designed to empower aspiring micro-entrepreneurs to transform practical skills (tailoring, food preparation, mobile repair, handicrafts, digital services) into sustainable micro-businesses through skill assessment, 5-phase operational roadmaps, interactive unit pricing calculators, byte-sized courses, and volunteer mentorship.

---

## 👑 Ownership Model & Role Architecture

The platform is configured with an explicit ownership model and 3 distinct roles:

1. **Super Admin / Platform Owner (`Shivam Singh`)**:
   - Platform Owner: **Shivam Singh** (`shivam@entreskill.org`).
   - Protected Access to Super Admin Control Panel (`#admin` / `/admin`).
   - Features Total Users, Mentors, Students statistics, User Access Management (Activate/Deactivate, Promote Roles), Content Curation, and Audit Activity Logs.
2. **Mentor (`/mentor`)**:
   - Volunteer mentor portal to manage specialties, host Q&A advisory sessions, and review mentee setup progress. Restricted from Super Admin settings.
3. **Student / User (`/student`)**:
   - Default role for public sign-ups. Access to Skill Assessor, active setup roadmaps, unit pricing calculator, course player & quizzes, session bookings, and student profile.

---

## 🔐 Authentication, Security & OTP System

- **Production Backend Support**: Integrates with Supabase Auth & PostgreSQL database via Supabase Client JS SDK (`@supabase/supabase-js@2`).
- **Secure Password Hashing**: Server-side Argon2 / bcrypt password hashing via authentication backend.
- **Real 6-Digit OTP Verification**: Email OTP verification for sign-up and password reset with 60-second countdown timer, single-use validation, and resend cooldowns.
- **Route Authorization Guard**: Enforces role permissions at client (`checkRoutePermissions()`) and database Row Level Security (RLS) levels. Unauthorized access attempts to `/admin` are immediately blocked and redirected.
- **JWT Session Persistence**: Authenticated sessions (`access_token`, `refresh_token`) persist across tab refreshes without storing plain text credentials in localStorage.

---

## 📊 Database Schema (`schema.sql`)

The database script `schema.sql` sets up PostgreSQL tables with Row-Level Security (RLS):

- `profiles`: User accounts, full name, email, phone, avatar, role (`super_admin`, `mentor`, `student`), and status.
- `mentors`: Mentor profiles, specialty, experience, bio, rating, and verification status.
- `platform_activity`: System audit logs tracking registrations, logins, role changes, and content updates.
- `roadmap_progress`: Step checkmark completions per user and business idea.

---

## 🚀 How to Run & Deploy

### Local Development
```bash
# Run local HTTP server
python3 -m http.server 8080
# Open http://localhost:8080
```

### GitHub Pages Deployment
The project is configured for static hosting on GitHub Pages:
1. Enable GitHub Pages on `main` branch root (`/`).
2. Public site URL: `https://shivamsingh018.github.io/entreskill-hub/`
