import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import CoursesCard from './CoursesCard'

const Courses = () => {
  const [courses, setCourses] = useState([])

  const getCourses = () => {
    axios
      .get('http://localhost:1337/courses')
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
    <Fragment>
      <h1 className='text-center mt-3'>Browse Courses</h1>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
          {courses.map(course => {

            return (
              <CoursesCard
                key={course.id}
                course={course}
              />
            )
          })}
        </div>
      </section>
    </Fragment>
  )
}

export default Courses
