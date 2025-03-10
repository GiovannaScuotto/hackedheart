import React, { useState, useEffect } from 'react';
import './App.css';
import backgroundImage from './images/background.jpeg';
import HomePage from './HomePage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const elements = document.querySelectorAll('.animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      overflowY: 'auto'
    }}>
      <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'page1' && <Page1 setCurrentPage={setCurrentPage} />}
        {currentPage === 'page2' && <Page2 setCurrentPage={setCurrentPage} />}
        {currentPage === 'page3' && <Page3 setCurrentPage={setCurrentPage} />}
      </div>
    </div>
  );
}

export default App;
