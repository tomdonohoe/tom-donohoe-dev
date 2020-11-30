import React from 'react'
import Menu from './Menu/Menu.js'
import Footer from './Footer.js'

const Layout = ({ children }) => {
  return (
    <div>
        <Menu />
        {children}
        <Footer />
    </div>
  )
}

export default Layout