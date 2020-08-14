import React from 'react'
import proStyle from './Product.module.css'

function Product({id, image, title, price, rating}) {
  return (
    <div className={proStyle.product}>
      <p className={proStyle.product__title}>{title}</p>
      <p className={proStyle.product__price}>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className={proStyle.product__rating}>
        {
          Array(rating)
            .fill()
            .map((_) => (
              <span aria-label='star'>⭐</span>
            ))
        }
      </div>
      <img className={proStyle.product__img} src={image} alt='' />
      <div className={proStyle.product__button}>
        <button >Add to basket</button>
      </div>
    </div>
  )
}

export default Product
