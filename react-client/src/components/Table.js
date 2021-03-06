import React from 'react'
import { Table, Button } from 'reactstrap'

const CartTable = ({ items, updateItemQuantity, removeItem }) => {
  return (
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
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </Button>
              <Button
                className='ms-2'
                color='success'
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
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
  )
}

export default CartTable
