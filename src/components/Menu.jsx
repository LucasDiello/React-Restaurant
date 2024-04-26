import menu1 from '../assets/images/menu-1.png';
import menu2 from '../assets/images/menu-2.png';
import menu3 from '../assets/images/menu-3.png';
import menu4 from '../assets/images/menu-4.png';
import menu5 from '../assets/images/menu-5.png';
import menu6 from '../assets/images/menu-6.png';
import shape5 from '../assets/images/shape-5.png';
import shape6 from '../assets/images/shape-6.png';

const menuItems = [
    {
      id: 1,
      name: "Salada Grega",
      image: menu1,
      alt: "Greek Salad",
      price: "$25.50",
      description: "Tomates, pimentão verde, pepino em rodelas, cebola, azeitonas e queijo feta.",
      badge: "Seasonal"
    },
    {
      id: 2,
      name: "Lasanha",
      image: menu2 ,
      alt: "Lasagne",
      price: "$40.00",
      description: "Vegetais, queijos, carnes moídas, molho de tomate, temperos e especiarias."
    },
    {
      id: 3,
      name: "Abóbora Butternut",
      image: menu3 ,
      alt: "Butternut Pumpkin",
      price: "$10.00",
      description: "Indústria de composição lorem Lorem Ipsum é simplesmente texto fictício da priand."
    },
    {
      id: 4,
      name: "Tokusen Wagyu",
      image: menu4 ,
      alt: "Tokusen Wagyu",
      price: "$39.00",
      description: "Vegetais, queijos, carnes moídas, molho de tomate, temperos e especiarias.",
      badge: "New"
    },
    {
      id: 5,
      name: "Olivas Rellenas",
      image: menu5 ,
      alt: "Olivas Rellenas",
      price: "$25.00",
      description: "Abacates com carne de caranguejo, cebola vermelha, salada de caranguejo recheada com pimentão vermelho e pimentão verde."
    },
    {
      id: 6,
      name: "Peixe Opu",
      image: menu6,
      alt: "Opu Fish",
      price: "$49.00",
      description: "Vegetais, queijos, carnes moídas, molho de tomate, temperos e especiarias."
    }
  ];

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
