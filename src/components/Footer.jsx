import logo from '../assets/images/logo.svg'; 
import footerBg from '../assets/images/footer-bg.jpg'; 

function Footer() {
  return (
    <footer className="footer section has-bg-image text-center"
      style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="container">

        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <a href="#" className="logo">
              <img src={logo} width="160" height="50" alt="Logotipo da Grilli" />
            </a>
            <address className="body-4">
              Rua do Restaurante, Cidade Deliciosa, POA 9578, RS
            </address>
            <a href="mailto:booking@grilli.com" className="body-4 contact-link">booking@borcelle.com</a>
            <a href="tel:+88123123456" className="body-4 contact-link">Reservas: +88-123-123456</a>
            <p className="body-4">
              Aberto: 09:00 - 13:00
            </p>
            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>
            <p className="title-1">Receba Notícias & Ofertas</p>
            <p className="label-1">
              Inscreva-se & Ganhe <span className="span">25% de Desconto.</span>
            </p>
            <form action="" className="input-wrapper">
              <div className="icon-wrapper">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                <input type="email" name="email_address" placeholder="Seu email" autoComplete="off" className="input-field" />
              </div>
              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Inscrever-se</span>
                <span className="text text-2" aria-hidden="true">Inscrever-se</span>
              </button>
            </form>
          </div>

          <ul className="footer-list">
            <li><a href="#" className="label-2 footer-link hover-underline">Início</a></li>
            <li><a href="#" className="label-2 footer-link hover-underline">Cardápios</a></li>
            <li><a href="#" className="label-2 footer-link hover-underline">Sobre Nós</a></li>
            <li><a href="#" className="label-2 footer-link hover-underline">Nossos Chefs</a></li>
            <li><a href="#" className="label-2 footer-link hover-underline">Contato</a></li>
          </ul>

          <ul className="footer-list">
            <li><a href="#" className="label-2 footer-link hover-underline">Facebook</a></li>
            <li><a href="#" className="label-2 footer-link hover-underline">Instagram</a></li>
            <li><a href="#" className="label-2 footer-link hover-underline">Twitter</a></li>
            <li><a href="#" className="label-2 footer-link hover-underline">Youtube</a></li>
            <li><a href="#" className="label-2 footer-link hover-underline">Mapa do Google</a></li>
          </ul>
        </div>

      

      </div>
    </footer>
  );
}

export default Footer;
