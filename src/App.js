import React, { useState } from 'react';
import './App.css';
import backgroundImage from './images/background.jpeg';
import HomePage from './HomePage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';  // Aggiunto per la pagina "Vedi Tutto"

function App() {
  const [currentPage, setCurrentPage] = useState('home');

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
        {currentPage === 'page1' && <Page1 />}
        {currentPage === 'page2' && <Page2 />}
        {currentPage === 'page3' && <Page3 />}
      </div>
    </div>
  );
}

export default App;
