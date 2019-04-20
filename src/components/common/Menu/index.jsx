import React from 'react'
import { Context } from '../../common'
import SelectLanguage from './SelectLanguage'
import MenuItem from './MenuItem'
import MenuSubItem from './MenuSubItem'
import config from '../../../../data/config.js'

import { MenuGrid, MenuLanguage } from './styles'

const Menu = () => (
	<Context.Consumer>
		{({ toggleLanguage, lang }) => (
			<MenuGrid>
				<MenuItem position="home" icon="home" to="/"></MenuItem>
				<MenuItem position="about" icon="address-card" to="/about"></MenuItem>
				<MenuItem position="resume" icon="book" to="/resume"></MenuItem>
				<MenuSubItem position="xing" icon="xing" to={config.socialLinks.xing}></MenuSubItem>
				<MenuSubItem position="linkedin" icon="linkedin-in" to={config.socialLinks.linkedin}></MenuSubItem>
				<MenuSubItem position="twitter" icon="twitter" to={config.socialLinks.twitter}></MenuSubItem>
				<MenuSubItem position="github" icon="github" to={config.socialLinks.github}></MenuSubItem>
				<MenuLanguage>
					<SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
				</MenuLanguage>
			</MenuGrid>
		)}
	</Context.Consumer>
)

export default Menu
