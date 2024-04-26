import avatar from "../assets/images/testi-avatar.jpg"; 
import bgImage from "../assets/images/testimonial-bg.jpg";
    
const Testimonials = () => {
  return (
    <section className="section testi text-center has-bg-image"
    style={{backgroundImage: `url(${bgImage})`}} aria-label="testimonials">
      <div className="container">
        <div className="quote">”</div>
        <p className="headline-2 testi-text">
          Eu queria agradecer por me convidar para aquele jantar incrível na outra noite. A comida estava extraordinária.
        </p>
        <div className="wrapper">
          <div className="separator"></div>
          <div className="separator"></div>
          <div className="separator"></div>
        </div>
        <div className="profile">
          <img src={avatar} width="100" height="100" loading="lazy" alt="Sam Jhonson" className="img" />
          <p className="label-2 profile-name">Sam Jhonson</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
