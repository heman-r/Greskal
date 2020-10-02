import React from 'react';
import pic_me from './t2.jpg';
import './App.css';

function App() {
  
  return (
    <div className="page">
      <div className="intro">
        <div className="data-section">
          <div className="show-check">
            <ul className="link-set-1">
              <a className="hover" href="#about-me">
                About me
              </a >
              <a className="hover" href="#experience">
                Work experience
              </a>
              <a className="hover" href="#skills">
                Skills
              </a>
              <a className="hover" href="#projects">
                Projects
              </a>
            </ul>
            <ul className="link-set-2">
              <a className="hover" href="#Education">
                Education
              </a>
              <a className="hover" href="#about-me">
                Why you hire me
              </a>
              <a className="hover" href="#about-me">
                Styles
              </a>
              <a className="hover" href="#about-me">
                Software
              </a>
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
          <img className="pic-img" src={pic_me}>
          </img>
        </div>
      </div>

      <div className="data-section show">
          <div>
            <ul className="link-set-1">
              <a className="" href="#about-me">
                About me
              </a >
              <a className="" href="#experience">
                Work experience
              </a>
              <a className="" href="#skills">
                Skills
              </a>
              <a className="" href="#projects">
                Projects
              </a>
            </ul>
            <ul className="link-set-2">
              <a className="" href="#Education">
                Education
              </a>
              <a className="" href="#about-me">
                Why you hire me
              </a>
              <a className="" href="#about-me">
                Styles
              </a>
              <a className="" href="#about-me">
                Software
              </a>
            </ul>
          </div>
          
        </div>

      <section id="about-me" className="about-me">
        <div className="about-head">
          About me
        </div>
        <div className="about-view">
          "Dive deeper, rather than a swim"
        </div>
        <div className="about-para">
        I am a Business analyst and a software developer, who likes to understand and watch things closely. I believe in the fact that we should make our decisions after having a good knowledge about a subject. Meaningful communication always leads to a successful project and I always try to establish the same. I am an energetic, optimistic and self motivated fellow. I have gone through a lot of failures and convoluted scenarios. The most beautiful part of those painful times is that I gained new insights from them and it changed my perceptions about life. Innovative ideas pave the path for change in the world, I always try to analyze and approach situations in different ways. Sometimes it may lead to failure, but I always believe in the fact that failures are the basic steps to success.

I am a huge fan of Elon Musk and how he brings his innovative ideas to reality. One of his quotes that inspired me is 
“"When something is important enough, you do it even if the odds are not in your favor."”
I always try to uphold this motto everyday in my life. The greatest obstacle a person faces is to work on things he wants to grow in a consistent manner. We should always try to find the time to put input towards the goals we want to achieve in our life. I always try to break my long term goals to short milestones, this will help you to learn and enjoy the path you are taking towards your destiny.

        </div>
        
      </section>
      <section id="Education" className="education">
        <div className="education-head">
          Education
        </div>

        <div className="edu-view">
          <div className="education-view">
            <span className="edu-view-bl-1">
              Conestoga College, Kitchener
            </span>
            <span className="edu-year">
              2020 - 2021
            </span>
          </div>
          <div className="education-para">
            <div className="edu-block-1">
            <div>Major</div><div>Information Technology Business Analysis</div>
            </div>
          
            <div className="edu-block-2">
            <div>Coursework</div><div>Project Management, Business process analysis, Effective communication, Requirement analysis</div> 
            </div>
          </div>
        </div>

        <div className="edu-view">
          <div className="education-view">
            <span className="edu-view-bl-1">
            Calicut university
            </span>
            <span className="edu-year">
              2011 - 2015
            </span>
          </div>
          <div className="education-para">
            <div className="edu-block-1">
            <div>Major</div><span>Bachelors in Computer Science Engineering</span>
            </div>
          
            <div className="edu-block-2">
            <div>Coursework</div><div>Compiler Theory, Data structures and algorithms,
          Programming languages, Theory of computation</div> 
            </div> 
          </div>
        </div>

        

        <div className="edu-view">
          <div className="education-view">
            <span className="edu-view-bl-1">
            St Thomas HSS Malayattor
            </span>
            <span className="edu-year">
              2009-2011
            </span>
          </div>
          <div className="education-para">
            <div className="edu-block-1">
              <div>
              Major
              </div>
              <div>
              Higher secondary education in Computer Science
              </div>
            </div>
            <div className="edu-block-2">
              <div>
              Coursework
              </div>
              <div>
              Basics of computer science, Programming in C and C++ language
              </div>
            </div>
          </div>
        </div>
        
      </section>

      <section id="experience" className="about-me exp">
        <div className="about-head">
          Experience
        </div>
        <div className="exp-body">
        <div className="education-view-1">
        <span>Qburst Technologies pvt limited</span>
        <span className="edu-year">2015-2020</span>
        </div>
        <div className="about-para">
        I worked as a software engineer for 5 years at Qbusrst technologies. Qburst is the place where I
moulded myself and it officially marked the starting of my professional career. As a newbie, I
got a lot of support and guidance from the experienced and refined professionals in Qburst
technologies.
<br></br>
<br></br>
I started as an associate Engineer in Fasttrack a Honeywell project for inventory management
with a small team of 3 members. Small teams always help to get a lot of exposure to the
Information technology industry and mould yourself as a professional. Later in my career I got
promoted as a Junior developer and started working in lot of innovative projects.
<br></br>
<br></br>
My experience in Qburst helped to work on various aspects of the IT industry. Client
management and effective client communications are some of the challenging areas, I got a
handful of experience. Communication within the team and among clients are inevitable for the
successful delivery of a project. Proper client meetings and team internal meetings helped us in
Qburst to excel in these critical phase of Project development. Client demo of the developed
project slices helped us to be inline with the client expectations of our project. Another critical
aspect I got trained was in conduction retrospective meetings within the team. Retrospective
meetings helps you to analyze a sprints development and to brainstorm on the areas of
improvement based on the past performance. These meetings at Qburst helped to understand
about grooming a set of people to adept professionals.
        </div>
        </div>
        
      </section>

      <section id="projects" className="about-me">
        <div className="about-head">
          Projects
        </div>
        <div className="about-view">
          Mobile SPA EU
        </div>
        <div className="about-para">
        Nowadays mobile web applications is trending among the user communities. SPA EU is a
single page mobile application for the e-commerce giants, Uniqlo clothing. This is a Japan
based company, who has achieved world recognition due to their innovative approach to the
textile industry. Following are my key contributions to that project in its various platforms
        </div>
        <div className="projects-block">
          <div className="p-bl-1">
          Front end mobile
          <br></br><br></br>
          <div>
          Developed Mobile shopping website for textile industry. This is a single page
application.<br></br>
Implemented Akamai routing for the site<br></br>
Integrated payment functionality<br></br>
Built shopping cart functionality to add products for checkout for the users<br></br>
Leveraged knowledge in Full stack web development, Javascript, Git, Angular.js,
Akamai, Demandware
</div>
          </div>
          <div className="p-bl-1">
          Catalog Platform
          <br></br><br></br>
          <div>
          Created server platform to manage products, categories and inventory details
required for e-commerce<br></br>
Implemented user accounts management facility<br></br>
Deployment and management of databases<br></br>
Leveraged knowledge in Node.js, Mongo db, Express, Jenkins, third party
integrations
            </div>
          </div>

          <div className="p-bl-1">
          Content Management System
          <br></br><br></br>
          <div>          Implemented server platform for dynamic management of contents in mobile
websites.<br></br>Integrated content database and provided functionality for content creation
<br></br>Leveraged knowledge in Amazon web services, SQL, Pyhton, Html, Css
          </div>
          </div>


          <div>

          </div>
          <div>

          </div>
        </div>

        <div className="project-2-view">
        Qburst Device tracker
        </div>
        <div className="about-para">
        Device tracker is an indigenous product developed at Qburst technologies. This project
helps to track the test devices used within an IT industry like mobile phones, tablets, smart
watches, laptops etc. The main components of the project are android and ios mobile
applications and a fast reliable to server to handle the live trackings.
        </div>
        
      </section>

      <section id="skills" className="about-me">
        <div className="about-head">
          Skills
        </div>
        
        <div className="about-para">
          <br></br>
          During my professional experience as a software developer and as a student in various learning
institutions, I got proficient in a lot of skills. These skills help me to stand up as a professional,
with valuable knowledge in various fields. I am both talented as a software developer who is
adept in various cutting edge software development technologies and as an analyst who have
the soft skills to properly manage a projects.
        </div>
        <div className="project-2-view">
        Technologies
        </div>
        <div className="skill-label">
        <span>Javascript</span><span>Html</span><span>Nodejs</span><span>Python</span><span>Mongo db</span><span>C</span><span>C++</span><span>Angular js</span><span>Akamai</span><span>Git</span><span>Linux CLI</span>
        <span>React js</span><span>CSS</span><span>SASS</span><span>Express</span>
        <span>Demandware</span><span>AWS</span>
        </div>
        <div className="project-2-view">
        Operating systems
        </div>
        <div className="skill-label">
        <span>Windows</span><span>Ubuntu</span><span>Kali Linux</span><span>Kubuntu</span>
        <span>Android</span><span>Debian</span>
        </div>
        <div className="project-2-view">
        Soft skills
        </div>
        <div className="skill-label-ss">
        <span>Client communications</span><span>Project management</span><span>Team management</span><span>Meeting
management</span>
        
        </div>
        <div className="project-2-view">
        Software tools
        </div>
        <div className="skill-label">
        <span>Pivotal tracker</span><span>Jira</span><span>Google docs</span><span>Zoom</span>
        <span>Microsoft office</span><span>Powerpoin</span><span>Gephi</span><span>Adobe Photoshop</span>
        </div>

      </section>

    </div>
  );
}

export default App;
