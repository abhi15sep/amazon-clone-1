import React from 'react'
import {Link} from 'react-router-dom'
import logoStyle from './LogoAmazon.module.css'

function LogoAmazon(props) {
  return (
    <div style={props.style}>
      <Link to='/' className={logoStyle.logo__wrapper}>
      <img src='http://pngimg.com/uploads/amazon/amazon_PNG25.png' alt='logo' 
        className={logoStyle.header__logo}
      />
      </Link>
    </div>
    
  )
}

export default LogoAmazon
