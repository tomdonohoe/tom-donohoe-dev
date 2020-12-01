import React from 'react'
import Menu from './Menu/Menu.js'
import Footer from './Footer/Footer.js'

const Layout = ({ children }) => {
  return (
    <div className='site'>
        <Menu />
        <div className='site-content'>{children}</div>
        <Footer />
    </div>
  )
}

export default Layout