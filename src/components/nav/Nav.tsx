import React from 'react'
import classes from './nav.module.scss'

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.navMain}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
      <div className={classes.navRight}>
        <input type="checkbox" id="nav-toggle" className={classes.navToggle} />
        <label htmlFor="nav-toggle" className={classes.navButton}></label>
      </div>
    </nav>
  )
}

export default Nav
