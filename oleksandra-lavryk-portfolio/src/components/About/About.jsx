import "./About.css";

export default function About() {
  return (
    <section id="about-section">
      <div className="container">
        <div className="about-text">
          <h3>Hi, My name is Oleksandra.</h3>
          <h3>I am Frontend developer based in Denmark.</h3>
          <div className="about-photo--mobile">
            <img src="assets/photo.png" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            totam nulla aliquam, necessitatibus temporibus veritatis aperiam
            voluptate facilis aspernatur nihil repudiandae doloribus sed esse
            voluptatem quos illum neque quia. Autem.
          </p>
        </div>
        <div className="about-photo">
          <img src="assets/photo.png" alt="" />
        </div>
      </div>
    </section>
  );
}
