import React from 'react'
import { Link } from 'gatsby'

import { navigate } from '@reach/router'

import { logout, isLoggedIn } from "../utils/auth"
import { Auth } from 'aws-amplify'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'grey',
      marginBottom: '1.45rem',
      
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={styles.headerTitle}
        >
          {siteTitle}
          
        </Link>
        
      </h1>
      <ul>
        <li><a class="active" href="#home">Home</a></li>
        <li><a class="active" href="login"></a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <h3 style={{ margin: 0 }}>
        <Link to="/app/login">Login</Link><br /></h3>
     
      {
        isLoggedIn() && (
          <p
            onClick={
              () => Auth.signOut().then(logout(() => navigate('/app/login'))).catch(err => console.log('eror:', err))
            }
            style={styles.link}
          >Sign Out</p>
        )
      }
    </div>
  </div>
)

const styles = {
  headerTitle: {
    color: 'white',
    textDecoration: 'none',
  },
  link: {
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'underline'
  },

}

export default Header
