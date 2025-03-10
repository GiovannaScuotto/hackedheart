import React from 'react';
import sensitiveImage from './images/sensitive.png';
import userImage from './images/user.png';
import member1Image from './images/member (1).jpg';
import member2Image from './images/member (2).jpg';
import member3Image from './images/member (3).jpg';
import member4Image from './images/member (4).jpg';

function Page1({ setCurrentPage }) {
  return (
    <div className="container animate">
      <button className="back-button animate" onClick={() => setCurrentPage('home')}>
      ← TORNA INDIETRO
      </button>

      <h1 className="animate">HOME PAGE</h1>

        <div className="homepage-box animate">
          <p>COSA SI CELA DIETRO LA STORIA DELLA <b>WINTERHAVEN HIGH SCHOOL?</b></p>
        </div>
        <div className="sensitive-box animate">
          <img 
            className="img-sensitive" 
            src={sensitiveImage} 
            alt="Contenuto Sensibile" 
            max-width= "250px" 
            max-height="230px"
          />
          <h2>SENSITIVE CONTENT</h2>
          <p>
            This phone contains sensitive content which some people may find offensive or disturbing.
          </p>
      </div>
      <button className="click-button animate" onClick={() => setCurrentPage('page2')}>
        CLICCA QUI!
      </button>

        <div className="moderator-box animate">
          <img 
            className="moderatore-img" 
            src={userImage} 
            alt="Moderatore" 
          />
         <a href="https://www.instagram.com/imalwayssdaydreaming/" target="_blank" rel="noopener noreferrer">MODERATORE 🤍</a>
        </div>

        <div className="member-box animate">
  <p>MEMBRI ISCRITTI</p>
  <div className="member-content animate">
    <img className="member-img" src={member1Image} alt="Membro 1" />
    <img className="member-img" src={member2Image} alt="Membro 2" />
    <img className="member-img" src={member3Image} alt="Membro 3" />
    <img className="member-img" src={member4Image} alt="Membro 4" />
    <button className="view-all" onClick={() => setCurrentPage('page3')}>
  VEDI TUTTO →
</button>
  </div>
</div>
      </div>
  );
}

export default Page1;
