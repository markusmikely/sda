import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AboutPage from './components/pages/AboutPage';
import ClassesPage from './components/pages/ClassesPage';
import ContactPage from './components/pages/ContactPage';
import CookiesPage from './components/pages/CookiesPage';
import ErrorPage from './components/pages/ErrorPage';
import HomePage from './components/pages/HomePage';
import TeachersPage from './components/pages/TeachersPage';
import TermsPage from './components/pages/TermPage';
import TimetablePage from './components/pages/Timetable';

import './App.scss'
import AcademyRulesPage from './components/pages/AcademyRules';
import InsurancePage from './components/pages/InsurancePage';
import FirstAidPage from './components/pages/FirstAidPage';
import DanceCurriculumPage from './components/pages/DanceCurriculumPage';
import ClassStructurePage from './components/pages/ClassStructurePage';
import FaqsPage from './components/pages/FaqsPage';
import PrivacyPage from './components/pages/PrivacyPage';

function App() {

  return (
    <Layout>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/teaching" element={<TeachersPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/timetable" element={<TimetablePage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/class-structure" element={<ClassStructurePage />} />
        <Route path="/curriculum" element={<DanceCurriculumPage />} />
        <Route path="/first-aid" element={<FirstAidPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
        <Route path="/our-rules" element={<AcademyRulesPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/*" element={<ErrorPage />} />
    </Layout>
  );
}

export default App;
