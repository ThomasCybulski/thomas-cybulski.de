import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import styled from 'styled-components'
import "./menu.css"
import germanFlagColoured from "../../../images/german_flag_coloured.png"
import englishlagColoured from "../../../images/english_flag_coloured.png"
import germanFlagSW from "../../../images/german_flag_sw.png"
import englishlagSW from "../../../images/english_flag_sw.png"

const SelectLanguage = ({ selectLanguage, lang }) => (
	<SelectLanguageGrid>
		<img className="language-icon" src={lang === 'de' ? germanFlagColoured : germanFlagSW} alt="German Language" onClick={() => selectLanguage("de")}></img>
		<img className="language-icon" src={lang === 'en' ? englishlagColoured : englishlagSW} alt="English Language" onClick={() => selectLanguage("en")}></img>
	</SelectLanguageGrid>
)

const enhance = compose(
	withStateHandlers(
		props => ({ language: props.lang }),
		{
			selectLanguage: (values, { toggleLanguage }) => value => {
				toggleLanguage(value)
				return {
					language: value
				}
			}
		}
	)
)

const SelectLanguageGrid = styled.div` 
	display: grid;
	grid-template-rows: 40px 40px;
	justify-items: center;
`

export default enhance(SelectLanguage)