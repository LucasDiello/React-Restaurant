import pattern from '../assets/images/form-pattern.png';

const Reservation = () => {
  return (
    <section className="section reservation">
      <div className="container">
        <div className="form reservation-form bg-black-10">
          <form action="#" className="form-left">

            <h2 className="headline-1 text-center">Reserva Online</h2>

            <p className="form-text text-center">
              Solicitação de reserva <a href="tel:+88123123456" className="link">+88-123-123456</a> ou preencha o formulário abaixo
            </p>

            <div className="input-wrapper">
              <input type="text" name="name" placeholder="Seu Nome" autoComplete="off" className="input-field" />

              <input type="tel" name="phone" placeholder="Número de Telefone" autoComplete="off" className="input-field" />
            </div>

            <div className="input-wrapper">

              <div className="icon-wrapper">
                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                <select name="person" className="input-field">
                  <option value="1-person">1 Pessoa</option>
                  <option value="2-person">2 Pessoas</option>
                  <option value="3-person">3 Pessoas</option>
                  <option value="4-person">4 Pessoas</option>
                  <option value="5-person">5 Pessoas</option>
                  <option value="6-person">6 Pessoas</option>
                  <option value="7-person">7 Pessoas</option>
                </select>

                <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
              </div>

              <div className="icon-wrapper">
                <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>

                <input type="date" name="reservation-date" className="input-field" />

                <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
              </div>

              <div className="icon-wrapper">
                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                <select name="time" className="input-field">
                  <option value="08:00am">08 : 00</option>
                  <option value="09:00am">09 : 00</option>
                  <option value="10:00am">10 : 00</option>
                  <option value="11:00am">11 : 00</option>
                  <option value="12:00am">12 : 00</option>
                  <option value="01:00pm">01 : 00</option>
                  <option value="02:00pm">02 : 00</option>
                  <option value="03:00pm">03 : 00</option>
                  <option value="04:00pm">04 : 00</option>
                  <option value="05:00pm">05 : 00</option>
                  <option value="06:00pm">06 : 00</option>
                  <option value="07:00pm">07 : 00</option>
                  <option value="08:00pm">08 : 00</option>
                  <option value="09:00pm">09 : 00</option>
                  <option value="10:00pm">10 : 00</option>
                </select>

                <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
              </div>

            </div>

            <textarea name="message" placeholder="Mensagem" autoComplete="off" className="input-field"></textarea>

            <button type="submit" className="btn btn-secondary">
              <span className="text text-1">Reservar uma Mesa</span>
              <span className="text text-2" aria-hidden="true">Reservar uma Mesa</span>
            </button>

          </form>

          <div className="form-right text-center" style={
            {
              backgroundImage: `url(${pattern})`
            }
          }>

            <h2 className="headline-1 text-center">Contate-nos</h2>

            <p className="contact-label">Solicitação de Reserva</p>

            <a href="tel:+88123123456" className="body-1 contact-number hover-underline">+88-123-123456</a>

            <div className="separator"></div>

            <p className="contact-label">Localização</p>

            <address className="body-4">
              Rua do Restaurante, Cidade Deliciosa, <br />
              Londres 9578, Reino Unido
            </address>

            <p className="contact-label">Horário de Almoço</p>

            <p className="body-4">
              Segunda a Domingo <br />
              11:00 - 14:30
            </p>

            <p className="contact-label">Horário de Jantar</p>

            <p className="body-4">
              Segunda a Domingo <br />
              17:00 - 22:00
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Reservation;
