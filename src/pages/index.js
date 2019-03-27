import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Layout, Container } from '../components/common'
import SEO from '../components/common/SEO'
import './index.css'

const IndexPage = () => (
	<Layout>
		<div className="test">
			<React.Fragment>
				<SEO title="welcome" />
				<Welcome as={Container}>
					<h2>
						<FormattedMessage id="welcome" />
						<div className="content">
						</div>
					</h2>
				</Welcome>
			</React.Fragment>
		</div>
	</Layout>
)

const Welcome = styled.div` 
	padding: 2rem 0;
`

export default IndexPage
