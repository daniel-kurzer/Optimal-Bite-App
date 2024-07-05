import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='Your First Name...'/>
          <input type="text" placeholder='Your Last Name...'/>
        </div>
          <input type="email" placeholder='Your Emailadress...'/>
          <input type="text" placeholder='Your Street...'/>
        <div className="multi-fields">
          <input type="text" placeholder='Your City...'/>
          <input type="text" placeholder='Your State...'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Your Zip Code...'/>
          <input type="text" placeholder='Your Country...'/>
        </div>
        <input type="text" placeholder='Your Phonenumber...'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>$ {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>$ {getTotalCartAmount() === 0 ? 0 : 4.95}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>$ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 4.95}</b>
              </div>
            </div>
            <button onClick={() => navigate('/order')}>PROCEED TO PAYMENT</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder