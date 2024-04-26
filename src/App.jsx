import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import './assets/css/style.css'
import HeroSlider from './components/HeroSlider'
import Servicos from './components/Servicos'
import About from './components/About'
import SpecialDish from './components/SpecialDish'
import Menu from './components/Menu'
import Testimonials from './components/Testimonials'
import Reservation from './components/Reservation'
import Features from './components/Features'

function App() {

  useEffect(() => {
    const preload = document.querySelector('.preload')
    const circle = document.querySelector('.circle')
    const text = document.querySelector('.text')

    setTimeout(() => {
      preload.style.backgroundColor = 'rgba(0, 0, 0, 0)'
      preload.style.transition = 'background-color 1s'
      circle.style.display = 'none'
      text.style.display = 'none'
      setTimeout(() => {
        preload.style.display = 'none'
      }, 1000)
    }, 1000)
  })

  return (
    <div className='scroll'>
      <div className="preload" data-preaload>
    <div className="circle"></div>
    <p className="text">Grilli</p>
  </div>
    <TopBar />
    <Header />
    <HeroSlider />
    <Servicos />
    <About />
    <SpecialDish />
    <Menu />
    <Testimonials />
    <Reservation />
    <Features />
    </div>
  )
}

export default App
