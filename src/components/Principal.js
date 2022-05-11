import About from "./About"
import Image3 from "../utils/codigo2.jpg"
import Image2 from '../utils/codigo.png'
import React from 'react'

const Principal = () => {
  return (
    <div>
        <img
            src={Image2}
            alt="codigo"
            height="auto"
          />
          <img
            src={Image3}
            alt="codigo2"
            height="527px"
            width="960px"
          />
          <About/>
    </div>
  )
}

export default Principal