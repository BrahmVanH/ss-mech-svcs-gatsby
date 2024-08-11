import * as React from 'react';
import { Link, HeadFC, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { ArrowLeftIcon } from 'evergreen-ui';
import SEO from '../../components/SEO';

interface NotFoundPageProps {
	data: {
		file: {
			childImageSharp: {
				fluid: any;
			};
		};
	};
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ data }) => {
	return (
		<main className='w-screen h-screen flex justify-center items-center'>
			<div className='flex flex-row items-center justify-center'>
				<div>
					<Link to={'/'} className='flex justify-start items-center hover:cursor-pointer'>
						<ArrowLeftIcon className='mb-4' />
						<p className='leading-[14px] ml-2'>Go Back</p>
					</Link>
					{/* <img className='w-full max-w-[400px]' src={data_cable_install} alt='Data cable wiring' /> */}
					<Img className={'w-screen sm:w-[600px] max-w-[600px]'} fluid={data.file.childImageSharp.fluid} alt='Data cable wiring' />
				</div>
				<div className='text-center flex flex-col items-center'>
					<h1 className='w-2/4 mb-4'>Sorry...</h1>
					<p className='mb-4 w-2/4 overflow-[wrap]'>Were working on some updates to the website right now, please do come back soon!</p>
				</div>
			</div>
		</main>
	);
};

export default NotFoundPage;

export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} title='Not Found' />;

export const query = graphql`
	query {
		file(relativePath: { eq: "data-cable-wiring.jpeg" }) {
			childImageSharp {
				gatsbyImageData(layout: CONSTRAINED)
			}
		}
	}
`;
