import React from 'react'
import './AboutUs.css'
import { images } from '../../constants'


const AboutUs = () => {
  return (
    <div className = 'app__aboutus app__bg flex__center section__padding' id='about'>
      <div className ='app__aboutus-content flex__center'>
        <div className = 'app__aboutus-content_about'>
          <h1 className = 'headtext__cormorant'>About Us</h1>
          <img src = {images.spoon} alt = 'about__spoon' className = '.spoon__img' />
          <p className = 'p__opensans'> We are a diverse collective of wacky and determined entrepreneurs in food, fashion, music and more. With food trucks, restaurants, shops, cocktail bars, stages and meeting spaces. WE provide the canvas on which Nairobi's leading event organizers paint their creative visions.</p>
          <button type= 'button' className = 'custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-content_art flex__center' >
          <img src={images.aboutUs} alt='art' style = {{width: '203px', height: '510px'}}/>
        </div>

        <div className = 'app__aboutus-content_history'>
          <h1 className = 'headtext__cormorant'>We are home</h1>
          <img src = {images.spoon} alt = 'about__spoon' className = '.spoon__img' />
          <p className = 'p__opensans'> We are home to people who love their craft, who believe success comes from taking creative risks. We are part of the creative fabric in Nairobi, providing the space for ideas to grow.</p>
          <button type= 'button' className = 'custom__button'>Know More</button>
        </div>
      </div>
      
    </div>
  )
}

export default AboutUs
