import { useState, useEffect, useRef } from 'react';
import slider1 from '../assets/images/hero-slider-1.jpg';
import slider2 from '../assets/images/hero-slider-2.jpg';
import slider3 from '../assets/images/hero-slider-3.jpg';
import iconTable from '../assets/images/hero-icon.png';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';

function HeroSlider() {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const autoSlideIntervalRef = useRef(null);

  const heroSliderItems = [
    {
      imgSrc: slider1,
      subtitle: "Tradicional & Higiene",
      title: "Comida deliciosa",
      text: `Venha com a família e sinta a alegria da comida deliciosa`,
    },
    {
      imgSrc: slider2,
      subtitle: "Experiência encantadora",
      title:"Sabor e alegria juntos",
      text: "Venha com a família e sinta a alegria da comida deliciosa",
    },
    {
      imgSrc: slider3,
      subtitle: "Incrível & delicioso",
      title: "Onde cada sabor conta uma história",
      text: "Venha com a família e sinta a alegria da comida deliciosa",
    }
  ];

  const slideNext = () => {
    setCurrentSlidePos((prevPos) => (prevPos === heroSliderItems.length - 1 ? 0 : prevPos + 1));
    resetAutoSlide();
  };

  const slidePrev = () => {
    setCurrentSlidePos((prevPos) => (prevPos === 0 ? heroSliderItems.length - 1 : prevPos - 1));
    resetAutoSlide();
  };

  const autoSlide = () => {
    autoSlideIntervalRef.current = setInterval(slideNext, 7000);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideIntervalRef.current);
    autoSlide();
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideIntervalRef.current); 
  };

  useEffect(() => {
    autoSlide(); 
    return () => clearInterval(autoSlideIntervalRef.current); 
  }, []);

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider">
        {heroSliderItems.map((item, index) => (
          <li key={index} className={`slider-item ${index === currentSlidePos ? 'active' : ''}`}>
            <div className="slider-bg">
              <img src={item.imgSrc} width="1880" height="950" alt="" className="img-cover" />
            </div>
            <p className="label-2 section-subtitle slider-reveal">{item.subtitle}</p>
            <h1 className="display-1 hero-title slider-reveal">{item.title}</h1>
            <p className="body-2 hero-text slider-reveal">{item.text}</p>
            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">Veja nosso menu</span>
              <span className="text text-2" aria-hidden="true">Veja nosso menu</span>
            </a>
          </li>
        ))}
      </ul>
      <button className="slider-btn prev" aria-label="slide to previous" onClick={slidePrev}>
      <GrFormPrevious className='rotate' />
      </button>
      <button className="slider-btn next" aria-label="slide to next" onClick={slideNext}>
      <MdOutlineNavigateNext className='rotate' />
      </button>
      <a href="#" className="hero-btn has-after" onMouseOver={stopAutoSlide} onMouseOut={resetAutoSlide}>
        <img src={iconTable} width="48" height="48" alt="Ícone de reserva" />
        <span className="label-2 text-center span">Reserve uma mesa</span>
      </a>
    </section>
  );
}

export default HeroSlider;
