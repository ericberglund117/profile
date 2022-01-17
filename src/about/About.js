import "./About.css"

function About() {
  return(
    <section className="about-section">
      <div class="card-container">
        <div class="card card0">
          <div class="border">
            <h2>Al Pacino</h2>
          <div class="icons">
            <i class="fa fa-codepen" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-dribbble" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
      <section className="skills-section">
          <h2>Skills</h2>
          <p className="skills">
              Frontend Software Developer skilled in JavaScript, HTML/CSS, SASS, Styled Components, React, React-Hooks, React-Router, Redux, React-Redux Hooks, Typescript, Salesforce (Apex, Visualforce, SOQL, Triggers, Integrations, Testing), Test Driven Development, Jest, Mocha/Chai, Object Oriented Programing, TravisCI, Heroku, Webpack, Babel, and Fetch/AJAX API Calls.
          </p>
      </section>
      <section className="text-section">
        <h2>About Me</h2>
        <p className="about">
            Former high school Social Studies teacher turned front-end developer in Denver, CO. 
            I am a person who views any problem as an opportunity to learn, grow, and build connections. 
            As a 'forever student and teacher', my goal is to create/update/maintain software that can be used to advance a community or an individual based on THEIR needs. 
            Helping people has always been a passion and one I intend to continue pursuing. 
            Thanks to my personal experiences, I am rooted in logical, empathetic, and collaborative tactics that can be used to solve countless problems. 
            Give me a challenge and I'll respond with determination, enthusiasm, cooperation, patience, and a fun-loving attitude.
        </p>
      </section>
    </section>
  ) 
} 

export default About;