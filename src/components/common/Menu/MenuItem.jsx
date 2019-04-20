import React from 'react'
import { Link } from 'gatsby'
import "./menu.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faHome, faAddressCard, faBook } from '@fortawesome/free-solid-svg-icons'

library.add(faCircle, faHome, faAddressCard, faBook)

const MenuItem = ({ position, icon, to }) => (
  <div style={{ gridArea: position }}>
    <Link to={to} activeClassName="active">
      <span className="fa-layers fa-fw fa-2x">
        <FontAwesomeIcon icon={["fas", "circle"]} />
        <FontAwesomeIcon className="menu-icon" icon={icon} transform="shrink-10" inverse />
      </span>
    </Link>
  </div>
)

export default MenuItem