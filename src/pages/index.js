import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Layout, Container } from '../components/common'
import SEO from '../components/common/SEO'

const IndexPage = () => (
	<Layout>
		<IndexLayout>
			<React.Fragment>
				<SEO title="welcome" />
				<Welcome as={Container}>
					<h2>
						<FormattedMessage id="welcome" />
						<IndexLayoutGrid></IndexLayoutGrid>
					</h2>
				</Welcome>
			</React.Fragment>
		</IndexLayout>
	</Layout>
)

const Welcome = styled.div` 
	padding: 2rem 0;
`

const IndexLayout = styled.div` 
	background: #F2F4F5;
`

const IndexLayoutGrid = styled.div` 
	display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr;
`

export default IndexPage
