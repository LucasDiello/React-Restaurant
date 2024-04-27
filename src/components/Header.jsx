import { useEffect, useState } from 'react';
import logoSVG from "../assets/images/logo.svg";
import { IoCloseCircleOutline } from 'react-icons/io5';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if(currentScrollPos < 100) {
        setIsTop(true);
      } else {
        setIsTop(false);
      };

      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isTop]);

  return (
      <header className={`header ${!isTop && (!visible && 'active' )} ${!isTop && (visible && 'hide' )}
      ${!isTop && (visible && 'active' )}
      `}>
      <div className="container">
        <a href="#" className="logo">
          <img src={logoSVG} width="160" height="50" alt="Grilli - Início" />
        </a>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
          <button className="close-btn" aria-label="fechar menu" onClick={toggleNav}>
            <IoCloseCircleOutline size={40}/>
          </button>

          <a href="#" className="logo">
            <img src={logoSVG} width="160" height="50" alt="Grilli - Início" />
          </a>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Início</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#menu" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Cardápio</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#about" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Sobre Nós</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Nossos Chefs</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Contato</span>
              </a>
            </li>
          </ul>

          <div className="text-center">
            <p className="headline-1 navbar-title">Visite-nos</p>
            <address className="body-4">
              Rua do Restaurante, Cidade Deliciosa, <br />
              Londres 9578, Reino Unido
            </address>
            <p className="body-4 navbar-text">Aberto: 9:30 - 14:30</p>
            <a href="mailto:reservas@grilli.com" className="body-4 sidebar-link">
              reservas@grilli.com
            </a>
            <div className="separator"></div>
            <p className="contact-label">Solicitação de Reserva</p>
            <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
              +88-123-123456
            </a>
          </div>
        </nav>

        <a href="#" className="btn btn-secondary">
          <span className="text text-1">Encontre uma Mesa</span>
          <span className="text text-2" aria-hidden="true">
            Encontre uma Mesa
          </span>
        </a>

        <button className="nav-open-btn" aria-label="abrir menu" onClick={toggleNav}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <div className={`overlay ${isNavOpen ? 'active' : ''}`}></div>
      </div>
    </header>
  );
};

export default Header;
