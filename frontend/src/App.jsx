import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DocumentViewerModal } from './components/DocumentViewerModal';
import { RecruiterQuickViewModal } from './components/RecruiterQuickViewModal';
// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EducationVaultPage } from './pages/EducationVaultPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { FoodyHubCaseStudyPage } from './pages/FoodyHubCaseStudyPage';
import { PackSureCaseStudyPage } from './pages/PackSureCaseStudyPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { NotFoundPage } from './pages/NotFoundPage';
// Scroll to top on route change helper
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);
    return null;
};
// Smooth page transition wrapper
const PageTransition = ({ children }) => {
    const location = useLocation();
    return (<AnimatePresence mode="wait">
      <motion.div key={location.pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: 'easeInOut' }}>
        {children}
      </motion.div>
    </AnimatePresence>);
};
export const App = () => {
    return (<ThemeProvider>
      <PortfolioProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[#120914] text-[#E8EDF2] font-sans antialiased selection:bg-[#F4B942] selection:text-[#301934]">
            {/* Global Navigation */}
            <Navbar />

            {/* Main Page Viewport */}
            <main className="flex-1">
              <PageTransition>
                <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/about" element={<AboutPage />}/>
                  <Route path="/education" element={<EducationVaultPage />}/>
                  <Route path="/achievements" element={<AchievementsPage />}/>
                  <Route path="/certificates" element={<CertificatesPage />}/>
                  <Route path="/projects" element={<ProjectsPage />}/>
                  <Route path="/projects/foodyhub" element={<FoodyHubCaseStudyPage />}/>
                  <Route path="/projects/packsure" element={<PackSureCaseStudyPage />}/>
                  <Route path="/resume" element={<ResumePage />}/>
                  <Route path="/contact" element={<ContactPage />}/>
                  <Route path="/admin" element={<AdminDashboardPage />}/>
                  <Route path="*" element={<NotFoundPage />}/>
                </Routes>
              </PageTransition>
            </main>

            {/* Global Footer */}
            <Footer />

            {/* Global Modals */}
            <DocumentViewerModal />
            <RecruiterQuickViewModal />
          </div>
        </BrowserRouter>
      </PortfolioProvider>
    </ThemeProvider>);
};
export default App;
