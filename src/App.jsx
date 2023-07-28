import { useState } from 'react'

import './App.css'
import foto from './assets/foto.jpg'

import { Mynavbar } from './components/Mynavbar'
import { Habilidades } from './components/Habilidades'
import { SobreMim } from './components/SobreMim'
import { Project1 } from './components/project1'
import { Formacao } from './components/Formacao'
import { Experiencia } from './components/Experiencia'

function App() {
  const [count, setCount] = useState(0)

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideItems = [
    'https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png',
    foto,
    'https://www.develer.com/wp-content/uploads/2022/12/React.js-100.jpg',
  ];

  const handlePreviousSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? slideItems.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === slideItems.length - 1 ? 0 : prevSlide + 1));
  };

  // console.log(currentSlide);
  return (
    <div className={`bg-lightbg`}>

      <Mynavbar />

      <SobreMim />

      <Habilidades />

      <Project1 />

      <Formacao />
      
      <Experiencia />

     


    </div>
  )

}

export default App
