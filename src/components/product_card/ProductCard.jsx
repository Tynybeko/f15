import React from 'react'
import './style.scss'

export default function ProductCard({title, image, variant}) {
  return (
    <div className={'product ' + (variant ? `product--${variant}` : 'product--default')}>
        <img className='picture' src={image} alt="Food Image" />
        <p className='review'>1 1 1 1 1 1</p>
        <h2 className='title'>{title}</h2>
    </div>
  )
}
