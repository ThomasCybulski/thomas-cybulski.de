import React from 'react'
import styled from 'styled-components'
import { Layout, Container } from '../components/common'
import SEO from '../components/common/SEO'
import Typed from 'react-typed';

const IndexPage = () => (
	<Layout>
		<IndexLayout>
			<React.Fragment>
				<SEO title="welcome" />
				<Welcome as={Container}>
					<Center>
						<Name>Thomas Cybulski</Name>
						<CustomTyped>
							<Typed
								strings={['I LOVE TO DEVELOP', 'I LOVE TO UI/UX DESIGN']}
								typeSpeed={70}
								backSpeed={80}
								showCursor
								smartBackspace
								shuffle
								loop
								/>
						</CustomTyped>
					</Center>
				
				</Welcome>
			</React.Fragment>
		</IndexLayout>
	</Layout>
)

const Welcome = styled.div` 
	padding: 2rem 0;
	height: 100%;
`

const Name = styled.h1` 
	font-weight: 400;
`

const CustomTyped = styled.span` 
	font-size: larger;
`

const IndexLayout = styled.div` 
	background: #F2F4F5;
`

const Center = styled.div` 
	text-align: center;
	position: relative;
	top: 50%;
	-webkit-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
`

export default IndexPage
