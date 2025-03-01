import React, { useState } from 'react';
import './App.css';
import backgroundImage from './images/background.jpeg';
import HomePage from './HomePage';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const goToHome = () => setCurrentPage('home');
  const goToPage1 = () => setCurrentPage('page1');
  const goToPage2 = () => setCurrentPage('page2');

  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={goToHome} style={{ margin: "10px", padding: "10px 20px" }}>Home</button>
        <button onClick={goToPage1} style={{ margin: "10px", padding: "10px 20px" }}>Page 1</button>
        <button onClick={goToPage2} style={{ margin: "10px", padding: "10px 20px" }}>Page 2</button>
      </div>

      <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'page1' && <Page1 />}
        {currentPage === 'page2' && <Page2 />}
      </div>
    </div>
  );
}

export default App;
