
import NavBar from './NavBar'
import Image from '../utils/codigo.png'
import React from 'react'

const Principal = () => {
  return (
    <div>
        <NavBar/>
        <img
            src={Image}
            alt="codigo"
            width="1700px"
            height="1700px"
            style={{
              marginRight: "20px",
              marginBottom: "20px",
              marginTop: "20px",
              borderRadius: "35px"
            }}
          />
    </div>
  )
}

export default Principal