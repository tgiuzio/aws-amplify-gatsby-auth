import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <h1>Hi there</h1>
    <p>Rapton3D Ecosystem. <a href="https://www.rapton3d.com">Site</a></p>
    <p>Create a new account: <Link to="/app/signup">Sign Up</Link></p>  
    <Link to="/app/login">Sign In</Link><br />
    <Link to="/app/home">Home</Link><br />
    <Link to="/app/profile">Your profile</Link>
  </Layout>
   
)

export default IndexPage
