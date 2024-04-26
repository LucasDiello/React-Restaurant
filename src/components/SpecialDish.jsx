import specialDishBanner from "../assets/images/special-dish-banner.jpg";
import badge1 from "../assets/images/badge-1.png";
import shape4 from "../assets/images/shape-4.png";
import shape9 from "../assets/images/shape-9.png";


const SpecialDish = () => {
  return (
    <section className="special-dish text-center" aria-labelledby="dish-label">
      <div className="special-dish-banner">
        <img src={specialDishBanner} width="940" height="900" loading="lazy" alt="prato especial" className="img-cover" />
      </div>

      <div className="special-dish-content bg-black-10">
        <div className="container">
          <img src={badge1} width="28" height="41" loading="lazy" alt="emblema" className="abs-img" />

          <p className="section-subtitle label-2">Prato Especial</p>
          <h2 className="headline-1 section-title">Tortellini</h2>

          <p className="section-text">
            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
          </p>

          <div className="wrapper">
            <del className="del body-3">R$40.00</del>
            <span className="span body-1">R$20.00</span>
          </div>

          <a href="#" className="btn btn-primary">
            <span className="text text-1">Ver Todo o Menu</span>
            <span className="text text-2" aria-hidden="true">Ver Todo o Menu</span>
          </a>
        </div>
      </div>

      <img src={shape4} width="179" height="359" loading="lazy" alt="" className="shape shape-1" />
      <img src={shape9} width="351" height="462" loading="lazy" alt="" className="shape shape-2" />
    </section>
  );
};

export default SpecialDish;
