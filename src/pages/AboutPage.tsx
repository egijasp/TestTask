import "../styles/AboutPage.scss";
import myphoto from "../assets/photo.webp";

function AboutPage() {
  return (
    <main className="main">
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
    </main>
  );
}

export default AboutPage;
