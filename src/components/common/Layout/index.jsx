import React from 'react'
import en from 'react-intl/locale-data/en'
import de from 'react-intl/locale-data/de'
import { addLocaleData, IntlProvider } from 'react-intl'
import localEng from '../../../../data/en.json'
import localDe from '../../../../data/de.json'
import { Context } from '../Context'
import Provider from './Provider'
import { Global } from './styles'
import './layout.css'
import Menu from '../Menu';

addLocaleData([...en, ...de])

const messages = {
	en: localEng,
	de: localDe
}

const Layout = ({ children }) => (
	<div className="container">
		<div className="content-container">

			<Provider>
				<Context.Consumer>
					{({ lang }) => (
						<IntlProvider locale={lang} messages={messages[lang]}>
							<Global lang={lang}>
								<div className="content-grid">
									<Menu></Menu>
									{children}
								</div>
							</Global>
						</IntlProvider>
					)
					}
				</Context.Consumer>
			</Provider>

		</div>
	</div>
)

export { Layout }
