import myphoto from "../assets/photo.jpg";

function AboutPage() {
  return (
    <div id="aboutPage" className="container flex">
      <h2>About me</h2>
      <p>Here will be information about me...</p>
      <img className="photo" src={myphoto} alt="me" />
    </div>
  );
}

export default AboutPage;
