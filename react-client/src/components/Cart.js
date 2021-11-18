import React from 'react'
import { useCart } from 'react-use-cart'
import { Button } from 'reactstrap'
import CartTable from './Table'

const Cart = () => {
  const {
    items,
    isEmpty,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart()

  if (isEmpty) {
    return <h1 className='text-center'>Your cart is empty</h1>
  }

  return (
    <section className='py-4 container'>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <h5 className='text-center'>Your Cart</h5>
          <CartTable
            items={items}
            updateItemQuantity={updateItemQuantity}
            removeItem={removeItem}
          />
        </div>
        <div className='col-auto ms-auto'>
          <h2>{`Total Price: $${cartTotal}`}</h2>
        </div>
        <div className='col-auto'>
          <Button color='danger' onClick={() => emptyCart()}>
            Empty Cart
          </Button>
          <Button className='ms-2' color='success'>
            Checkout
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Cart
