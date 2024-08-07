import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MyButton from './components/Mybutton/Mybutton';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="landing">
          <MyButton onClick={() => window.location.href = "/"}>Enter Portfolio</MyButton>
        </div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
