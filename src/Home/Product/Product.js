import React from 'react'
import proStyle from './Product.module.css'
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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
          Array((rating > 5 && 5) || (rating < 0 && 1) || rating)
            .fill()
            .map(() => (
              <span aria-label='star'>⭐</span>
            ))
        }
      </div>
      <img className={proStyle.product__img} src={image} alt='' />
      <div className={proStyle.product__button}>
        <Button variant="contained" style={{fontSize: '12px', backgroundColor: '#f8bb6c'}} >
          <AddShoppingCartIcon style={{marginRight: '5px'}} />Add to basket
        </Button>
      </div>
    </div>
  )
}

export default Product
