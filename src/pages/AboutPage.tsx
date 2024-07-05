import "../styles/AboutPage.scss";
import myphoto from "../assets/photo.jpg";

function AboutPage() {
  return (
    <div id="aboutPage" className="container">
      <div className="about_tilte">
        <h2>About me</h2>
        <p>Here will be information about me...</p>
      </div>
      <div className="about_info">
        <img className="photo" src={myphoto} alt="me" />
        <div>
          <h3>My name is Egija</h3>
          <p>
            I am a front-end developer. I have been working in this field for
            more than 2 years. I have experience with React, Angular, and Vue.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
