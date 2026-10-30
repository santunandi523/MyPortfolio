# Santu Nandi — Premium Developer Portfolio & Academic Vault

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2.3-green.svg)](https://spring.io/projects/spring-boot)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8.svg)](https://tailwindcss.com/)
[![Java](https://img.shields.io/badge/Java-17%2F21_LTS-orange.svg)](https://www.oracle.com/java/)
[![LeetCode](https://img.shields.io/badge/LeetCode-1618_Rating-FFA116.svg)](https://leetcode.com/u/Santu_2004/)
[![Codolio](https://img.shields.io/badge/Codolio-850+_Solved-purple.svg)](https://codolio.com/profile/santunandi)

A high-performance personal portfolio, developer command center, and academic document vault designed and engineered for **Santu Nandi**, a Java Full Stack Developer and Computer Science Engineering student at **Chandigarh University**.

---

## 🎨 Strict Visual Identity & Color Palette

The interface is built strictly around three signature identity colors, delivering a luxury digital identity suitable for recruiters at top product-based organizations:

- **Ice Silver (`#E8EDF2`)**: Primary light surfaces, crisp typography on dark panels, document frames, and subtle border highlights.
- **Deep Aubergine (`#301934`)**: Primary brand color, dark backgrounds, navigation bars, hero sections, and executive cards.
- **Marigold (`#F4B942`)**: Strategic accent for important call-to-actions, contest rankings, active tabs, verified beacons, and interactive details.

Supporting shades include midnight aubergine (`#120914`, `#1E0F21`), muted lavender (`#A592AD`), and accessible neutrals. Both Dark and Light themes are supported seamlessly.

---

## 🏛️ Signature Features

### 1. The Academic Vault (`/education`)
Unlike traditional portfolios that only display simple bullet timelines, **The Academic Vault** is a digital archive presenting original educational credentials with authentic interactive document renders:
- **Chandigarh University**: B.E. in Computer Science & Engineering (Current CGPA: **8.3 / 10.0**, semester-by-semester SGPA & CGPA timeline from Semester I to VII).
- **Class 12 Higher Secondary**: Pure Science (**82.8%**, WBCHSE Board).
- **Class 10 Secondary Education**: Madhyamik Pariksha (**94.14%**, Top 0.5% statewide distinction with 98 in Math and 97 in Science).
- **Custom Document Viewer**:
  - Zoom in, zoom out (50% to 220%), and reset zoom.
  - Multi-page navigation (e.g. Page 1: Consolidated Statement, Page 2: Curriculum Ledger).
  - Full-screen mode.
  - **Redaction Privacy Mode**: Toggle between official full view and redacted public view.
  - Cryptographic verification hashes (`SHA-256`) and authorized download controls.

### 2. Coding Hall of Fame & Achievement Constellation (`/achievements`)
- **850+ Total DSA Problems Solved** across LeetCode, Codolio, Codeforces, CodeChef, and GeeksforGeeks.
- **LeetCode Contest Rating: 1618** (Top 15% worldwide, handle: `Santu_2004`).
- **Codolio Unified Profile**: [codolio.com/profile/santunandi](https://codolio.com/profile/santunandi).
- **Achievement Constellation**: Interactive mapping connecting coding streak badges (50-Day, 100-Day), contest milestones, and academic honors to the exact projects and skills they substantiate.

### 3. Production Software Architecture Case Studies (`/projects`)
- **FoodyHub — AI-Powered Food Delivery Platform** (`/projects/foodyhub`):
  - Stack: Java 17, Spring Boot 3, React 19, Spring Security, JWT, MySQL/MongoDB, Razorpay, AWS S3, Google Gemini API.
  - Features: Pessimistic inventory locking, cryptographic HMAC-SHA256 payment verification, and an **Interactive Gemini AI Food Assistant Simulator**.
- **PackSure — Automated Product Compliance Scanner** (`/projects/packsure`):
  - Stack: Java 17, Spring Boot 3, Python FastAPI, React 19, PostgreSQL, OpenCV, PaddleOCR, Docker, JWT.
  - Features: Decoupled vision service, Legal Metrology compliance rules engine, and an **Interactive Bounding Box Canvas Inspector**.

### 4. Recruiter Quick View (Accessible site-wide)
- 60-second executive summary for engineering hiring managers:
  - Immediate access to ATS resume download.
  - University education and CGPA snapshot.
  - Verified technical stack (Java, Spring Boot, React, PostgreSQL).
  - Direct contact triggers.

### 5. Resume Center (`/resume`)
- ATS-optimized single-column curriculum vitae.
- Direct PDF download and print-ready stylesheets.
- Last-updated timestamp (October 2026).

### 6. Protected Admin Command Center (`/admin`)
- Secured with passkey authentication (Default PIN: `admin2026`).
- Live management of projects, resume records, academic documents, visibility permissions (Public / Redacted / Private), and coding statistics.
- Full state export to JSON backup and restoration.

---

## 🚀 Quickstart Guide

### Prerequisites
- **Node.js**: v18+ (tested on Node v24)
- **npm**: v9+
- **Java**: 17 or 21 LTS (for Spring Boot backend)

### 1. Frontend Development (Client-Side)

```powershell
# From project root (d:\Portfolio)
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

To generate an optimized production bundle:
```powershell
npm run build
npm run preview
```

### 2. Spring Boot 3 Backend Service (Optional / Production API)

The backend is housed in the `backend/` directory:

```powershell
# In a separate terminal
cd backend
mvn spring-boot:run
```

- REST API runs at `http://localhost:8080/api`
- H2 In-Memory DB Console: `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:portfoliodb`)
- Swagger / Endpoints:
  - Public profile: `GET /api/public/profile`
  - Academic records: `GET /api/public/academic-vault`
  - Projects: `GET /api/public/projects`
  - Contact submissions: `POST /api/public/contact`
  - Admin login: `POST /api/auth/login` (body: `{"passkey":"admin2026"}`)

*Note: The frontend includes a smart fallback layer (`src/services/api.ts`). If the Spring Boot backend is not running, the application seamlessly operates in persistent local storage mode.*

---

## 📂 Project Directory Structure

```
d:\Portfolio
├── backend/                             # Enterprise Spring Boot 3 Backend (MongoDB)
│   ├── src/main/java/com/santunandi/portfolio/
│   │   ├── config/                      # SecurityConfig, JwtUtil, JwtAuthFilter
│   │   ├── controller/                  # Public, Admin, Auth, DocumentStream Controllers
│   │   ├── model/                       # MongoDB Documents (Academic, Project, Certificate, Contact)
│   │   ├── repository/                  # Spring Data MongoDB Repositories
│   │   ├── service/                     # DocumentStorageService, DataInitializer
│   │   └── PortfolioApplication.java
│   ├── src/main/resources/
│   │   └── application.properties       # MongoDB URI (localhost:27017/portfoliodb)
│   └── pom.xml
└── frontend/                            # React 19 JavaScript Client
    ├── src/
    │   ├── components/                  # Authentic SVG/Canvas document renders, UI widgets
    │   ├── context/                     # Global state & Dark/Light theme providers (.jsx)
    │   ├── data/                        # Authentic dataset (portfolioData.js)
    │   ├── pages/                       # All route pages (.jsx)
    │   ├── services/                    # api.js & storageService.js
    │   ├── App.jsx
    │   └── main.jsx
    ├── public/                          # Static assets and verified documents
    ├── index.html
    ├── vite.config.js
    └── package.json
```

---

## 🔒 Security & Privacy Model

1. **Document Visibility**:
   - `PUBLIC`: Full document preview available to recruiters and visitors.
   - `REDACTED`: Candidate roll numbers and registration keys are visually censored.
   - `PRIVATE`: Original master file is access-restricted behind authenticated backend endpoints (`/api/documents/stream-original/{id}`).
2. **Stateless JWT Security**:
   - Admin authentication uses `HMAC-SHA256` signed JWTs with expiration controls.
3. **Document File Validation**:
   - Backend enforces strict MIME-type allowlists (PDF, PNG, JPEG, SVG) and a 10MB maximum request threshold.
   - Every stored document computes a SHA-256 cryptographic checksum for legal and academic authenticity.

---

## 👤 Santu Nandi — Contact Information

- **Email**: `santunandi523@gmail.com`
- **Phone**: `+91 90832 94038`
- **GitHub**: [github.com/santunandi523](https://github.com/santunandi523)
- **LeetCode**: [leetcode.com/u/Santu_2004/](https://leetcode.com/u/Santu_2004/)
- **Codolio**: [codolio.com/profile/santunandi](https://codolio.com/profile/santunandi)
- **Institution**: Chandigarh University, Punjab, India (B.E. CSE, Expected 2026)
