'use client'

import React from 'react'
import classes from './nav.module.scss'

const Nav = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <nav className={classes.nav} data-is-open={open}>
      <div className={classes.navMain}>
        <ul className={classes.navList}>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
      <div className={classes.navRight}>
        <input type="checkbox" id="nav-toggle" className={classes.navToggle} />
        <label
          htmlFor="nav-toggle"
          tabIndex={1}
          className={classes.navButton}
          aria-label="Toggle menu"
          onKeyUp={(e) => e.key === 'Enter' && e.currentTarget.click()}
          onClick={() => setOpen(() => true)}
        ></label>
      </div>
    </nav>
  )
}

export default Nav
