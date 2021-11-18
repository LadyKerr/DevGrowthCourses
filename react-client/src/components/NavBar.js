import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const HomeNavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div id='courses'>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Dev Growth Courses</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <NavLink href='/about-us/'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/LadyKerr/DevGrowthCourses'>
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default HomeNavBar
