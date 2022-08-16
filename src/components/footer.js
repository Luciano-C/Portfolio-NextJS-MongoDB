import React from 'react'
// Font Awesome
// Fuente: https://dev.to/vuongddang/how-to-use-fontawesome-in-next-js-5bl5
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link'
import { usePortfolioContext } from '../context/PortfolioContext'

export const Footer = () => {

  const { variables } = usePortfolioContext();

  return (
    <div className='bg-black text-white h-100 w-100 d-inline-block h-100'>
      <h2 className='m-3'>{variables.isSpanish ? "Contacto" : "Contact"}</h2>
      <p className='m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis earum quae aut tenetur,
         facilis a repudiandae est voluptates labore id nobis nulla, dolorum eveniet voluptate. 
         Exercitationem, veniam! Voluptates, adipisci!</p>
      
      <div className='d-flex m-2 justify-content-around align-items-center row'>
        <div className='d-flex align-items-center col-md-2'>
          <Link href="https://github.com/Luciano-C">
            <a target="_blank" className='text-white'><FontAwesomeIcon icon={faGithub} className="h1 mt-2" /></a>
          </Link>
          <span className='ms-2'>Github</span>
        </div>


        <div className='d-flex align-items-center col-md-2'>
          <Link href="https://www.linkedin.com/in/luciano-cabrales-ferrer/" >
            <a target="_blank" className='text-white'><FontAwesomeIcon icon={faLinkedin} className="h1 mt-2" /></a>
          </Link>
          <span className='ms-2'>LinkedIn</span>
        </div>

        <div className='d-flex align-items-center col-md-2'>
          <Link href="mailto:luciano.cabrales@gmail.com" >
            <a className='text-white'><FontAwesomeIcon icon={faEnvelope} className="h1 mt-2" /></a>
          </Link>
          <span className='ms-2'>luciano.cabrales@gmail.com</span>
        </div>

      </div>

    </div>


  )
}

