import event1 from '../assets/images/event-1.jpg';
import event2 from '../assets/images/event-2.jpg';
import event3 from '../assets/images/event-3.jpg';

const Event = () => {
  return (
    <section className="section event bg-black-10" aria-label="event">
      <div className="container">

        <p className="section-subtitle label-2 text-center">Atualizações Recentes</p>

        <h2 className="section-title headline-1 text-center">Próximo Evento</h2>

        <ul className="grid-list">

          <li>
            <div className="event-card has-before hover:shine">

              <div className="card-banner img-holder" style={{ width: '350px', height: '450px' }}>
                <img src={event1} width="350" height="450" loading="lazy"
                  alt="Sabor tão bom que você vai tentar comer com os olhos." className="img-cover" />

                <time className="publish-date label-2" dateTime="2024-09-15">15/09/2024</time>
              </div>

              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Comida, Sabor</p>

                <h3 className="card-title title-2 text-center">
                  Sabor tão bom que você vai tentar comer com os olhos.
                </h3>
              </div>

            </div>
          </li>

          <li>
            <div className="event-card has-before hover:shine">

              <div className="card-banner img-holder" style={{ width: '350px', height: '450px' }}>
                <img src={event2} width="350" height="450" loading="lazy"
                  alt="Sabor tão bom que você vai tentar comer com os olhos." className="img-cover" />

                <time className="publish-date label-2" dateTime="2024-09-08">08/09/2024</time>
              </div>

              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Comida Saudável</p>

                <h3 className="card-title title-2 text-center">
                  Sabor tão bom que você vai tentar comer com os olhos.
                </h3>
              </div>

            </div>
          </li>

          <li>
            <div className="event-card has-before hover:shine">

              <div className="card-banner img-holder" style={{ width: '350px', height: '450px' }}>
                <img src={event3} width="350" height="450" loading="lazy"
                  alt="Sabor tão bom que você vai tentar comer com os olhos." className="img-cover" />

                <time className="publish-date label-2" dateTime="2024-09-03">03/09/2024</time>
              </div>

              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Receita</p>

                <h3 className="card-title title-2 text-center">
                  Sabor tão bom que você vai tentar comer com os olhos.
                </h3>
              </div>

            </div>
          </li>

        </ul>

        <a href="#" className="btn btn-primary">
          <span className="text text-1">Ver Nosso Blog</span>

          <span className="text text-2" aria-hidden="true">Ver Nosso Blog</span>
        </a>

      </div>
    </section>
  );
};

export default Event;
