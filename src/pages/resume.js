import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Layout, Container, Title } from '../components/common'
import SEO from '../components/common/SEO'

const ResumePage = () => (
	<Layout>
		<React.Fragment>
			<SEO title="resume" />
			<Welcome as={Container}>
				<Title>
					<FormattedMessage id="resume" />
				</Title>
			</Welcome>
		</React.Fragment>
	</Layout>
)

const Welcome = styled.div`
	padding: 2rem 0;
`

export default ResumePage
