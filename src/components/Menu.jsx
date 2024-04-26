import shape5 from '../assets/images/shape-5.png';
import shape6 from '../assets/images/shape-6.png';
import { menuItems } from './menuItems';

const Menu = () => {
  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">Seleção Especial</p>
        <h2 className="headline-1 section-title text-center">Cardápio Delicioso</h2>
        <ul className="grid-list">
        {menuItems.map(item => (
            <li key={item.id}>
              <div className="menu-card hover:card">
                <figure className="card-banner img-holder" style={{ "--width": 100, "--height": 100 }}>
                  <img src={item.image} width="100" height="100" loading="lazy" alt={item.alt} className="img-cover" />
                </figure>
                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="#" className="card-title">{item.name}</a>
                    </h3>
                    {item.badge && <span className="badge label-1">{item.badge}</span>}
                    <span className="span title-2">{item.price}</span>
                  </div>
                  <p className="card-text label-1">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="menu-text text-center">
          Durante o inverno, diariamente das <span className="span">19:00</span> às <span className="span">21:00</span>
        </p>
        <a href="#" className="btn btn-primary">
          <span className="text text-1">Ver Todo o Menu</span>
          <span className="text text-2" aria-hidden="true">Ver Todo o Menu</span>
        </a>
        <img src={shape5} width="921" height="1036" loading="lazy" alt="forma" className="shape shape-2 move-anim" />
        <img src={shape6} width="343" height="345" loading="lazy" alt="forma" className="shape shape-3 move-anim" />
      </div>
    </section>
  );
};

export default Menu;
