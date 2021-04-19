import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {
  const history = useHistory();
  const [{basket,user}, dispatch] = useStateValue();
  console.log( 'user', user);
    return (
        <div className="subtotal">
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      
       {!user && <button onClick={e => history.push('/login')}>Proceed to Login</button>}
      
       {user && <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>}
    
        </div>
    )
}

export default Subtotal
