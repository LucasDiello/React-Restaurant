import service1 from '../assets/images/service-1.jpg';
import service2 from '../assets/images/service-2.jpg';
import service3 from '../assets/images/service-3.jpg';
import shape1 from '../assets/images/shape-1.png';
import shape2 from '../assets/images/shape-2.png';

function Servicos() {
  return (
    <section className="section service bg-black-10 text-center" aria-label="serviço">
      <div className="container">

        <p className="section-subtitle label-2">Sabores Para a Realeza</p>

        <h2 className="headline-1 section-title">Oferecemos o Melhor</h2>

        <p className="section-text">
          Lorem Ipsum é simplesmente o texto fictício da indústria de impressão e composição de texto lorem Ipsum tem sido o texto fictício padrão da indústria.
        </p>

        <ul className="grid-list">

          <li>
            <div className="service-card">

              <a href="#" className="has-before hover:shine">
                <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                  <img src={service1} width="285" height="336" loading="lazy" alt="Café da Manhã" className="img-cover" />
                </figure>
              </a>

              <div className="card-content">

                <h3 className="title-4 card-title">
                  <a href="#">Café da Manhã</a>
                </h3>

                <a href="#" className="btn-text hover-underline label-2">Ver Menu</a>

              </div>

            </div>
          </li>

          <li>
            <div className="service-card">

              <a href="#" className="has-before hover:shine">
                <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                  <img src={service2} width="285" height="336" loading="lazy" alt="Entradas" className="img-cover" />
                </figure>
              </a>

              <div className="card-content">

                <h3 className="title-4 card-title">
                  <a href="#">Entradas</a>
                </h3>

                <a href="#" className="btn-text hover-underline label-2">Ver Menu</a>

              </div>

            </div>
          </li>

          <li>
            <div className="service-card">

              <a href="#" className="has-before hover:shine">
                <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                  <img src={service3} width="285" height="336" loading="lazy" alt="Bebidas" className="img-cover" />
                </figure>
              </a>

              <div className="card-content">

                <h3 className="title-4 card-title">
                  <a href="#">Bebidas</a>
                </h3>

                <a href="#" className="btn-text hover-underline label-2">Ver Menu</a>

              </div>

            </div>
          </li>

        </ul>

        <img src={shape1} width="246" height="412" loading="lazy" alt="formato" className="shape shape-1 move-anim" />
        <img src={shape2} width="343" height="345" loading="lazy" alt="formato" className="shape shape-2 move-anim" />

      </div>
    </section>
  );
}

export default Servicos;
