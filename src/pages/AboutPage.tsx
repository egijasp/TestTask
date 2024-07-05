import "../styles/AboutPage.scss";
import myphoto from "../assets/photo.jpg";

function AboutPage() {
  return (
    <div id="aboutPage" className="container about">
      <div className="about_info">
        <div className="about_hello">
          <span>Hello!</span>
          <br />
          <span>I'm Egija</span>
        </div>
        <img className="photo" src={myphoto} alt="me" />
      </div>
    </div>
  );
}

export default AboutPage;
