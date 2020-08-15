import subStyle from './Subtotal.module.css'
import React from 'react'
import { Button } from '@material-ui/core'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../StateProvider/StateProvider'
import { totalPrice } from '../../StateProvider/Reducer'



function Subtotal() {

  const [{basket}, dispatch] = useStateValue()

  return (
    <div className={subStyle.subtotal}>
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p style={{margin: '0'}}>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small>
              <input type='checkbox'/>
              This order contains a gift
            </small>
          </>
          
        )}
        decimalScale={2}
        value={totalPrice(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <div>
      <Button variant="contained" style={{fontSize: '12px', backgroundColor: '#f8bb6c'}}>
        Proceed to Checkout
      </Button> 
      </div>
    </div>
  )
}

export default Subtotal
