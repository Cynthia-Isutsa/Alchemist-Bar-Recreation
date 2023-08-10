import React from 'react'
import './Header.css'
import { images } from '../../constants'
import { SubHeading } from '../../components'

const Header = () => {
  return (
    <div className ='app__header app__wrapper section__padding' id= 'home'>
      <div className ='app__wrapper_info'>
        <SubHeading title = 'Chase the new Flavour'/>
        <h1 className ='app__header-h1'>The Creative Hub in the Heart of Nairobi</h1>
        <p className = 'p__opensans' style = {{margin: '2rem 0'}}>We are a diverse collective of wacky and determined entrepreneurs in food, fashion, music and more. With food trucks, restaurants, shops, cocktail bars, stages and meeting spaces.</p>
        <button type = 'button' className = 'custom__button'>Explore Menu</button>      
      </div>
     
      <div className ='app__wrapper_img'>
        <img src={images.header04} alt = 'header' />

      </div>

    </div>

  ) 
}

export default Header
