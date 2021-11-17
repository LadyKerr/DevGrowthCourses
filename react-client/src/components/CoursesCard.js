import React from 'react'
import { useCart } from 'react-use-cart'
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from 'reactstrap'

const CoursesCard = ({ course }) => {
  const { addItem } = useCart()

  // console.log(course)

  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
      <Card id='courses' className='p-0 overflow-hidden h-100 shadow'>
        <CardImg
          alt={course.title}
          bottom
          src={`http://localhost:1337${course.image.url}`}
          style={{ height: '222px' }}
        />
        <CardBody>
          <CardTitle tag='h5'>{course.title}</CardTitle>
          <CardText>{course.description}</CardText>
          <CardText>
            <small className='text-muted'>
              Created by: {course.instructor}
            </small>
          </CardText>
          <CardText>{`$${course.price}`}</CardText>
          <Button color='primary' onClick={() => addItem(course)}>
            Add to cart
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default CoursesCard
