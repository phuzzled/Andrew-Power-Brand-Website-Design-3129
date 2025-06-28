import React from 'react';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import {ThemeProvider} from './context/ThemeContext';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Podcast from './pages/Podcast';
import Resources from './pages/Resources';
import Consulting from './pages/Consulting';
import Footer from './components/Footer';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProjects from './pages/admin/AdminProjects';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          
          {/* Public Routes */}
          <Route path="/*" element={
            <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
              <Header />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/podcast" element={<Podcast />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/consulting" element={<Consulting />} />
              </Routes>
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;