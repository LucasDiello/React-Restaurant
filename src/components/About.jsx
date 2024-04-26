import banner from "../assets/images/about-banner.jpg";
import absImage from "../assets/images/about-abs-image.jpg";
import badge2 from "../assets/images/badge-2.png";
import shape3 from "../assets/images/shape-3.png";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const parallaxItems = document.querySelectorAll("[data-parallax-item]");
      let x = (event.clientX / window.innerWidth) * 10 - 5;
      let y = (event.clientY / window.innerHeight) * 10 - 5;

      x = x - x * 2;
      y = y - y * 2;

      parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.parallaxSpeed);
        const transformedX = x * speed;
        const transformedY = y * speed;
        item.style.transform = `translate3d(${transformedX}px, ${transformedY}px, 0px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section
      className="section about text-center"
      aria-labelledby="about-label"
      id="about"
    >
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">
            Nossa História
          </p>
          <h2 className="headline-1 section-title">
            Cada Sabor Conta uma História
          </h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint
            distinctio reiciendis nemo dolores laboriosam expedita facilis? Enim
            similique quisquam ullam eaque ipsum? Ut neque alias ex, placeat
            eligendi repellat.
          </p>
          <div className="contact-label">Reserve por Telefone</div>
          <a
            href="tel:+804001234567"
            className="body-1 contact-number hover-underline"
          >
            +80 (400) 123 4567
          </a>
          <a href="#" className="btn btn-primary">
            <span className="text text-1">Leia Mais</span>
            <span className="text text-2" aria-hidden="true">
              Leia Mais
            </span>
          </a>
        </div>

        <figure className="about-banner">
          <img
            src={banner}
            width="570"
            height="570"
            loading="lazy"
            alt="banner sobre"
            className="w-100"
            data-parallax-item
            data-parallax-speed="1"
          />
          <div
            className="abs-img abs-img-1 has-before"
            data-parallax-item
            data-parallax-speed="1.75"
          >
            <img
              src={absImage}
              width="285"
              height="285"
              loading="lazy"
              alt=""
              className="w-100"
            />
          </div>
          <div className="abs-img abs-img-2 has-before">
            <img src={badge2} width="133" height="134" loading="lazy" alt="" />
          </div>
        </figure>

        <img
          src={shape3}
          width="197"
          height="194"
          loading="lazy"
          alt=""
          className="shape"
        />
      </div>
    </section>
  );
};

export default About;
