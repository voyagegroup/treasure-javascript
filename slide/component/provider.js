import React from 'react'
import Footer from './footer'

const Provider = ({ children, index, slides }) => (
  <div css={{
    a: {
      textDecoration: 'underline'
    },
  }}>
    {children}
    <Footer index={index} />
  </div>
)

export default {
  Provider
}