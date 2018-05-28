import React from 'react'
import { withSiteData } from 'react-static'
import logoImg from '../logo.png'

let Home = withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
  </div>
))

export default Home;
