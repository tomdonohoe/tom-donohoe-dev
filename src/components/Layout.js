import React from 'react'
import Container from '../components/Container/Container.js'
import Menu from './Menu/Menu.js'
import Footer from './Footer/Footer.js'

const Layout = ({ children }) => {
  return (
      <Container>
        <Menu />
        <div className='site-content'>{children}</div>
        <Footer />
        </Container>
  )
}

export default Layout