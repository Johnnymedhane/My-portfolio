import { SocialMedia } from "./SocialMedia";
import intro from "./images/intro.png";
// import { a } from "react-router-dom";

export function Hero({ showIndicator, setSelectedNav }) {

const handleScroll = (sectionId) => {
    setSelectedNav(sectionId);
    // document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-image">
        <img src={intro} alt="my-pic" />
        </div>

        <div className="hero-content">
          <h1> <span>Hello👋 I'm,</span>Johnny Medhane</h1>
          <h2> Interactive <span>Front-End Developer</span></h2>
          <p>Building beautiful, responsive web experiences.</p>
          <div className="cta-buttons">
            <a href="#projects"  onClick={() => handleScroll('projects')}    className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline" onClick={() => setSelectedNav('contact')}>Contact me</a>
          </div>

          <SocialMedia marginTop={26} />
        </div>

      </div>
      {showIndicator && <Indicator />}
    </section>
  );
}export function Indicator() {
  return (
    <div className="indicator" data-title="Explore me">
      <a href="#about">
       <span className="material-symbols-outlined">
keyboard_double_arrow_down
</span>
      </a>
    </div>
  );
}

