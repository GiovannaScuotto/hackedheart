import React from 'react';
import member1Image from './images/member (1).jpg';
import member2Image from './images/member (2).jpg';
import member3Image from './images/member (3).jpg';
import member4Image from './images/member (4).jpg';
import member5Image from './images/member (5).jpg';
import member6Image from './images/member (6).jpg';
import member7Image from './images/member (7).jpg';
import member8Image from './images/member (8).jpg';
import member9Image from './images/member (9).jpg';
import member10Image from './images/member (10).jpg';
import member11Image from './images/member (11).jpg';
import member12Image from './images/member (12).jpg';
import member13Image from './images/member (13).jpg';
import member14Image from './images/member (14).jpg';
import member15Image from './images/member (15).jpg';
import member16Image from './images/member (16).jpg';

function Page3({ setCurrentPage }) {
  return (
    <div className="container">
      <button className="back-button" onClick={() => setCurrentPage('page1')}>
        ← TORNA INDIETRO
      </button>

      <div className="member-title">MEMBRI ISCRITTI</div>
      <div className="member-page">
      <div className="member-item"><img className="member-img" src={member3Image} alt="Membro 3" /> <p>Cayden Axel O'Connor</p></div>
      <div className="member-item"><img className="member-img" src={member16Image} alt="Membro 16" /> <p>Rochelle Ava Turner</p></div>
      <div className="member-item"><img className="member-img" src={member14Image} alt="Membro 14" /> <p>Liam Martin</p></div>
      <div className="member-item"><img className="member-img" src={member1Image} alt="Membro 1" /> <p>Alexa Martin</p></div>
      <div className="member-item"><img className="member-img" src={member12Image} alt="Membro 12" /> <p>Ophelia Lancaster</p></div>
      <div className="member-item"><img className="member-img" src={member2Image} alt="Membro 2" /> <p>Asher Thornhill</p></div>
      <div className="member-item"><img className="member-img" src={member15Image} alt="Membro 15" /> <p>Roxy Eve Collins</p></div>
      <div className="member-item"><img className="member-img" src={member9Image} alt="Membro 9" /> <p>Jacob Orion Davis</p></div>
      <div className="member-item"><img className="member-img" src={member13Image} alt="Membro 13" /> <p>Brooke Liv Collins</p></div>
      <div className="member-item"><img className="member-img" src={member5Image} alt="Membro 5" /> <p>Nathan Blaze Collins</p></div>
      <div className="member-item"><img className="member-img" src={member6Image} alt="Membro 6" /> <p>Bryan Nate Turner</p></div>
      <div className="member-item"><img className="member-img" src={member8Image} alt="Membro 8" /> <p>Noah Stevens</p></div>
      <div className="member-item"><img className="member-img" src={member11Image} alt="Membro 11" /> <p>Adam Carter</p></div>
      <div className="member-item"><img className="member-img" src={member4Image} alt="Membro 4" /> <p>Alan Fox Murphy</p></div>
      <div className="member-item"><img className="member-img" src={member7Image} alt="Membro 7" /> <p>Harmony Jade Murphy</p></div>
      <div className="member-item"><img className="member-img" src={member10Image} alt="Membro 10" /> <p>Kimberly Wolfe</p>
      </div></div>
    </div>
  );
}

export default Page3;
