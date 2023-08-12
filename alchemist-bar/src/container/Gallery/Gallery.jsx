import React from 'react'
import './Gallery.css'
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

import { images } from '../../constants'
import { SubHeading } from '../../components'

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
      const { current } = scrollRef

      if (direction === 'left' ){
        current.scrollLeft -= 300
      } else {
        current.scrollLeft += 300
      }
  }


  return(
    <div className= 'app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title = 'Instagram'/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className = 'p__opensans' style = {{color: '#AAA', marginTop: '2rem'}}>Explore the timeless memories created at the Alchemist </p>
        <button type= 'button' className='custom__button' style = {{marginTop: '2rem'}}>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className= 'app__gallery-images_card flex__center' key = {`gallery_image-${index + 1}`}>
              <img src= {image} alt = 'galleryImages' />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick = {() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick = {() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery
