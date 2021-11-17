import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge,
  Button
} from 'reactstrap'

const HomeNavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { totalItems } = useCart()

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
          <NavLink>
            <Button color='primary' outline>
              Cart{' '}
              <Badge href='#' color='secondary'>
                {totalItems}
              </Badge>
            </Button>
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default HomeNavBar
