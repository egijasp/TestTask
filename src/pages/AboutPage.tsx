import "../styles/AboutPage.scss";
import myphoto from "../assets/photo.webp";

function AboutPage() {
  return (
    <main className="main">
      <div className="container">
        <section className="about">
          <div className="about__info">
            <div className="about__hello">
              <span>Hello!</span>
              <br />
              <span>I'm Egija</span>
            </div>
            <div className="about__photo-container">
              <img className="about__photo" src={myphoto} alt="me" />
            </div>
          </div>
          <div className="about__description">
            <span className="about__description-title">
              <strong>Who am I?</strong>
            </span>
            <p>
              I'm a{" "}
              <strong className="about__description-accent">
                Front-end Developer
              </strong>{" "}
              with a passion for creating user-friendly and responsive web
              applications. I am a quick learner and always looking for new
              challenges to improve my skills. I'm proficient in HTML, CSS,
              JavaScript, Typescript, React, Angular, Vue, Redux.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;
