import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, Container } from '../components/common'
import SEO from '../components/common/SEO'

const NotFoundPage = () => (
	<Layout>
		<React.Fragment>
			<SEO title="not_found" />
			<Container>
				<h2>
					<FormattedMessage id="not_found" />
				</h2>
			</Container>
		</React.Fragment>
	</Layout>
)

export default NotFoundPage
