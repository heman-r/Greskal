import React from 'react';
import pic_me from './pic_profile.jpg';
import './App.css';

function App() {
  return (
    <div className="page">
      <section className="heading">
        PORTFOLIO
      </section>
      <section className="intro">
        <div className="data-section">
          <div>
            <div className="link-set-1">
              <a className="hover">
                About me
              </a >
              <a className="hover">
                Work experience
              </a>
              <a className="hover">
                Skills
              </a>
              <a className="hover">
                Projects
              </a>
            </div>
            <ul className="link-set-2">
              <li className="hover">
                Education
              </li>
              <li className="hover">
                Why you hire me
              </li>
              <li className="hover">
                Styles
              </li>
              <li className="hover">
                Software
              </li>
            </ul>
          </div>
          <div className="intro-line">
            <ul>
              <li className="intro-1">
                Hey, I'm
              </li>
              <li className="intro-2">
                Rony 
              </li>
              <li className="intro-3">
                Cherian
              </li>
            </ul>
          </div>
        </div>
        <div className="pic">
          <img src={pic_me  }>
          </img>
        </div>
      </section>
      <section>

      </section>
   
    </div>
  );
}

export default App;
