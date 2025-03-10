import React from "react";
import "./App.css";
import hkheart from './images/heart.png';

function HomePage({ setCurrentPage }) {
  return (
    <div className="container">
      {/* Pulsante per tornare indietro alla Home */}
      <button className="go-button" onClick={() => setCurrentPage('page1')}>
      AVANTI ⭢
      </button>
      <div className="firsthome-box">
    Benvenuto/a su
    <img src={hkheart} alt="HK" width="100%" height="auto" />
    <h1>Hacked Heart</h1>
    <info>Dove i segreti sono la quotidianità e la fiducia è la prima cosa che perdi.</info>
    </div>
    </div>
  );
}
export default HomePage;
