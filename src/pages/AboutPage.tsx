import myphoto from "../assets/photo1.jpg";

function AboutPage() {
  return (
    <div id="aboutPage" className="container">
      <h2>Informācija par mani</h2>
      <p>Šeit būs informācija par mani...</p>
      <img className="photo" src={myphoto} alt="me" />
    </div>
  );
}

export default AboutPage;
