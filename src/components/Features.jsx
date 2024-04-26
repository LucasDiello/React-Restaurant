import icon1 from '../assets/images/features-icon-1.png';
import icon2 from '../assets/images/features-icon-2.png';
import icon3 from '../assets/images/features-icon-3.png';
import icon4 from '../assets/images/features-icon-4.png';
import shape7 from '../assets/images/shape-7.png';
import shape8 from '../assets/images/shape-8.png';

const Features = () => {
  return (
    <section className="section features text-center" aria-label="features">
      <div className="container">

        <p className="section-subtitle label-2">Por que nos escolher</p>

        <h2 className="headline-1 section-title">Nossa Força</h2>

        <ul className="grid-list">

          <li className="feature-item">
            <div className="feature-card">

              <div className="card-icon">
                <img src={icon1}
                 width="100" height="80" loading="lazy" alt="ícone" />
              </div>

              <h3 className="title-2 card-title">Comida Higiênica</h3>

              <p className="label-1 card-text">Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.</p>

            </div>
          </li>

          <li className="feature-item">
            <div className="feature-card">

              <div className="card-icon">
                <img src={icon2} width="100" height="80" loading="lazy" alt="ícone" />
              </div>

              <h3 className="title-2 card-title">Ambiente Fresco</h3>

              <p className="label-1 card-text">Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.</p>

            </div>
          </li>

          <li className="feature-item">
            <div className="feature-card">

              <div className="card-icon">
                <img src={icon3} width="100" height="80" loading="lazy" alt="ícone" />
              </div>

              <h3 className="title-2 card-title">Chefes Qualificados</h3>

              <p className="label-1 card-text">Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.</p>

            </div>
          </li>

          <li className="feature-item">
            <div className="feature-card">

              <div className="card-icon">
                <img src={icon4} width="100" height="80" loading="lazy" alt="ícone" />
              </div>

              <h3 className="title-2 card-title">Evento e Festa</h3>

              <p className="label-1 card-text">Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.</p>

            </div>
          </li>

        </ul>

        <img src={shape7} width="208" height="178" loading="lazy" alt="forma" className="shape shape-1" />

        <img src={shape8} width="120" height="115" loading="lazy" alt="forma" className="shape shape-2" />

      </div>
    </section>
  );
};

export default Features;
