import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card, CardBody, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap'

const Courses = () => {
    const [courses, setCourses] = useState([])

    const getCourses = () => {
        axios.get('http://localhost:1337/courses')
        .then(response => {
        setCourses(response.data)
    })
    .catch(err => console.log(err))
    }

    // get courses on render
    useEffect(() => {
        getCourses()
    }, [])
    
    return (
        courses.map(course => {
            const { title, id, instructor, image, price, description } = course

            return (
                <Row key={id}>
                    <Col>
                        <Card id="courses">
                        <CardImg
                            alt={title}
                            bottom
                            src={`http://localhost:1337${image.url}`}
                            />
                            <CardBody>
                                <CardTitle tag="h5">{title}</CardTitle>
                                <CardText>{description}</CardText>
                                <CardText>
                                    <small className="text-muted">
                                        Created by: {instructor}
                                    </small>
                                </CardText>
                                <Button color="primary" href="#">{`Purchase for $${price}`}</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            )
        })
            
    )
}

export default Courses