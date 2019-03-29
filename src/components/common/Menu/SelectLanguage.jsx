import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import "./menu.css"
import germanFlagColoured from "../../../images/german_flag_coloured.png"
import englishlagColoured from "../../../images/english_flag_coloured.png"
import germanFlagSW from "../../../images/german_flag_sw.png"
import englishlagSW from "../../../images/english_flag_sw.png"

const SelectLanguage = ({ selectLanguage, lang }) => (
	<div>
		<img src={germanFlagColoured} alt="German Language"></img>
		<img src={englishlagColoured} alt="English Language"></img>
		<select value={lang} onChange={e => selectLanguage(e.target.value)}>
			<option value="en">English</option>
			<option value="de">Deutsch</option>
		</select>
	</div>
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

export default enhance(SelectLanguage)
