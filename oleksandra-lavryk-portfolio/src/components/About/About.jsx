import "./About.css";

export default function About() {
  return (
    <section id="about-section">
      <div className="container">
        <div className="about-text">
          <h3>Hi, My name is Oleksandra.</h3>
          <h3>I am Frontend Developer based in Denmark.</h3>
          <div className="about-photo--mobile">
            <img src="assets/photo.png" alt="" />
          </div>
          <p>
            I am educated in Computer Science and Project Management. I really
            enjoy HTML and CSS and I have experience as a markup developer. In
            August 2022 I completed the HackYourFuture full-stack coding
            bootcamp in Aarhus and continue to improve my acquired skills.
          </p>
        </div>
        <div className="about-photo">
          <img src="assets/photo.png" alt="" />
        </div>
      </div>
    </section>
  );
}
