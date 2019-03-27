import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Layout, Container } from '../components/common'
import SEO from '../components/common/SEO'
import './about.css'
import logo from "../images/gatsby-icon.png"

const AboutPage = () => (
	<Layout>
		<React.Fragment>
			<SEO title="about" />
			<Welcome as={Container}>
				<h2>
					<FormattedMessage id="about" />
				</h2>

				<div className="about-content">
					<img className="avatar-image" src={logo} alt="Logo" />
					<div>
						<h4>SOFTWARE ENGINEER @ SALT AND PEPPER</h4>
						Meine Ausbildung als Fachinformatiker für Systemintegration begann ich 2005 bei der Gotthardt Informationssysteme GmbH (ehemals Spiegelburg Praxis- und Bürosysteme GmbH). Große Verantwortung und naher Kundenkontakt verhalfen zu starker Eigenständigkeit und führten nach der Ausbildung 2011 zu einer Festanstellung im Bereich Systemtechnik.
						Neben der Vollzeitstelle als Systemtechniker begann ich meinen schulischen Bildungsweg zu erweitern und holte das Abitur nach, um daraufhin das Studium als Informatiker (B.Sc.) Vertiefung System-Engineering beginnen zu können.
						Tiefere Erkenntnisse im Bereich Web-Security und Computergrafik sammelte ich in meinem Auslandssemester an der University of Wisconsin, Kenosha (USA).
						Nach erfolgreichem Studiumabschluss als Informatiker (B. Sc) Vertiefung System-Engineering, begann ich meine berufliche Laufbahn als Java Softwaredeveloper.
        </div>
				</div>
			</Welcome>
		</React.Fragment>
	</Layout>
)

const Welcome = styled.div`
	padding: 2rem 0;
`

export default AboutPage
