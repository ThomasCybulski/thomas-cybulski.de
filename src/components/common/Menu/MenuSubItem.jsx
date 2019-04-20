import React from 'react'
import "./menu.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitter, faGithub, faXing, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faTwitter, faGithub, faXing, faLinkedinIn)

const MenuSubItem = ({ position, icon, to }) => (
  <div style={{ gridArea: position }}>
    <a href={to}>
      <FontAwesomeIcon className="menu-sub-icon" icon={["fab", icon]} />
    </a>
  </div>
)

export default MenuSubItem