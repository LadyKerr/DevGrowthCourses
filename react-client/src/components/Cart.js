import React from 'react'
import { useCart } from 'react-use-cart'
import { Table, Button } from 'reactstrap'

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
  console.log(items)

  return (
    <section className='py-4 container'>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <h5 className='text-center'>Your Cart</h5>
          <Table striped>
            <thead>
              <tr>
                <th></th>
                <th>Course Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={`http://localhost:1337${item.image.url}`}
                      alt={item.title}
                      style={{ height: '6rem', width: '8rem' }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      className='ms-2'
                      color='info'
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </Button>
                    <Button
                      className='ms-2'
                      color='success'
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                    <Button
                      className='ms-2'
                      color='danger'
                      onClick={() => removeItem(item.id)}
                    >
                      remove course
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
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
