import React from 'react'
import './Footer.css'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { images } from '../../constants'

const Footer = () => {
  return (
    <div className='app__footer section__padding app__bg'>
      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className= 'app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>Parklands Road, Westlands Nairobi, Kenya</p>
          <p className='p__opensans'>info@alchemist254.com</p>
          <p className='p__opensans'>+254 727 591116 </p>

        </div>
        <div className='app__footer-links_logo'>
          <img src={images.logo} alt='logo' style = {{width: '80px', height: '100%'}} />
          <p className='p__opensans'>Eat. Drink. Shop. Play</p>

        </div>
        <div className='app__footer-links_socials'>
          <h1 className='app__footer-headtext'> Explore our Socials</h1>
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
      </div>
      <div className = 'footer__copyright'>
        <p className='p__opensans'>2023 Alchemist Bar. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
