import React from 'react'
import { images } from '../../constants'
import { SubHeading } from '../../components'


const FindUs = () => {
  return (
    <div className='app__bg app__wrapper flex__center section__padding'>
      <div className = 'app__wrapper_info'>
        <SubHeading title='contact' />
        <h1 className='headtext__cormorant' style = {{marginBottom: '3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className ='p__opensans' style = {{marginBottom : '0.5rem'}}>Parklands Road, Westlands, Nairobi, Kenya</p>
        <p className='p__cormorant' style = {{color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
        <p className ='p__opensans' style = {{marginBottom: '2rem'}}>Monday to Sunday: 12: 00pm - Late</p>
      </div>

      <button type= 'button' className = 'custom__button' style = {{marginTop: '2rem'}}>Visit Us</button>
    </div>
      <div className= 'app__wrapper_img'>
        <img src= { images.Findus } alt = 'contact' />
      </div>

    </div>
  )
}

export default FindUs
