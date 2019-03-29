import React from 'react'
import { Link } from 'gatsby'
import { Context } from '../../common'
import SelectLanguage from './SelectLanguage'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitter, faGithub, faXing, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCircle, faHome, faAddressCard, faBook } from '@fortawesome/free-solid-svg-icons'

import { MenuGrid, MenuHome, MenuAbout, MenuResume, MenuXing, MenuTwitter, MenuLinkedin, MenuGithub, MenuLanguage } from './styles'
import "./menu.css"

library.add(fab, faCircle, faHome, faAddressCard, faTwitter, faGithub, faXing, faLinkedinIn, faBook)

const Menu = () => (
	<Context.Consumer>
		{({ toggleLanguage, lang }) => (
			<MenuGrid>
				<MenuHome>
					<Link to="/" activeClassName="active">
						<span className="fa-layers fa-fw fa-2x">
							<FontAwesomeIcon icon={["fas", "circle"]} />
							<FontAwesomeIcon className="icon" icon="home" transform="shrink-10" inverse />
						</span>
					</Link>
				</MenuHome>
				<MenuAbout>
					<Link className="link" to="/about" activeClassName="active" partiallyActive={true}>
						<span className="fa-layers fa-fw fa-2x">
							<FontAwesomeIcon icon={["fas", "circle"]} />
							<FontAwesomeIcon className="icon" icon="address-card" transform="shrink-10" inverse />
						</span>
					</Link>
				</MenuAbout>
				<MenuResume>
					<Link className="link" to="/resume" activeClassName="active" partiallyActive={true}>
						<span className="fa-layers fa-fw fa-2x">
							<FontAwesomeIcon icon={["fas", "circle"]} />
							<FontAwesomeIcon className="icon" icon="book" transform="shrink-10" inverse />
						</span>
					</Link>
				</MenuResume>
				<MenuXing>
					<a href="https://www.xing.com/profile/Thomas_Cybulski2/cv"
						title="Xing - Thomas Cybulski">
						<FontAwesomeIcon className="icon" icon={["fab", "xing"]} />
					</a>
				</MenuXing>
				<MenuLinkedin>
					<a href="https://www.linkedin.com/in/thomas-cybulski/"
						title="LinkedIn - Thomas Cybulski">
						<FontAwesomeIcon className="icon" icon={["fab", "linkedin-in"]} />
					</a>
				</MenuLinkedin>
				<MenuTwitter>
					<a href="https://twitter.com/tho_cyb"
						title="Twitter - Thomas Cybulski">
						<FontAwesomeIcon className="icon" icon={["fab", "twitter"]} />
					</a>
				</MenuTwitter>
				<MenuGithub>
					<a href="https://github.com/ThomasCybulski"
						title="Github - Thomas Cybulski">
						<FontAwesomeIcon className="icon" icon={["fab", "github"]} />
					</a>
				</MenuGithub>
				<MenuLanguage>
					<SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
				</MenuLanguage>
			</MenuGrid>
		)}
	</Context.Consumer>
)

export default Menu
