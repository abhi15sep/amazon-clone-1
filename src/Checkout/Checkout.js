import checkStyle from './Checkout.module.css'
import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'
import Subtotal from './Subtotal/Subtotal'

function Checkout() {

  const [{basket}] = useStateValue()
  console.log(basket);
  return (
    <div className={checkStyle.checkout}>
      <div className={checkStyle.checkout__left}>
        {
          basket.length === 0 ? (
            <div className={checkStyle.checkout__title}>
              <h2>Your $hopping Basket is empty</h2>
            </div>
          ) : (
            <div className={checkStyle.checkout__title}>
              <h2 style={{borderBottom: '1px solid lightgray', padding: '20px 0'}}>$hopping Basket</h2>
              { basket &&
                basket.map(({id, title, image, price, rating}) => (
                  <CheckoutProduct 
                    id={id}
                    title={title}
                    image={image}
                    price={price}
                    rating={rating}
                  />
                ))
              }
            </div>
            
          )
        }
      </div>
      
      { basket &&
        basket.length > 0 && (
          <div className={checkStyle.checkout__right}>
            <Subtotal />
          </div>
        )
      }
    </div>
  )
}

export default Checkout
