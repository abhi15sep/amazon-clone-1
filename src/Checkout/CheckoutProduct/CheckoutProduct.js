import style from './CheckoutProduct.module.css'
import React from 'react'
import { Button } from '@material-ui/core'
import { useStateValue } from '../../StateProvider/StateProvider'

function CheckoutProduct({id, image, title, price, rating}) {
  
  const [, dispatch] = useStateValue()
  const removeItem = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }

  return (
    <div className={style.checkoutProduct}>
      <img className={style.checkout__productImg} src={image} alt='' />
      <span className={style.description}>
        <p><strong>{title}</strong></p>
        <p>$ <strong>{price}</strong></p>
        <p>
          {
            Array((rating > 5 && 5) || (rating < 0 && 1) || rating)
              .fill()
              .map(() => (
                <span aria-label='star'>⭐</span>
              ))
          }
        </p>
        <div>
        <Button onClick={removeItem} variant="contained" style={{fontSize: '12px', backgroundColor: '#f8bb6c'}} >
          Remove from basket
        </Button>
      </div>
      </span>
    </div>
  )
}

export default CheckoutProduct
