import * as React from 'react';
import { HeadFC, graphql } from 'gatsby';
import Layout from '../components/layout';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import SEO from '../components/SEO';

import 'normalize.css';

interface HomePageProps {
	data: {
		file: {
			childImageSharp: {
				gatsbyImageData: any;
			};
		};
	};
}

// To Do: Added breadcrumb structured data
const Home: React.FC<HomePageProps> = ({ data }) => {
	const homeRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (data) {
			console.log('data', data);
		}
	}, [data]);

	return (
		<Layout>
			<div ref={homeRef} className='flex flex-col items-center justify-center bg-transparent'>
				<Services />
				<Reviews />
			</div>
		</Layout>
	);
};

export default Home;

export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} title='South Shore Mechanical Services' />;

export const query = graphql`
	query AllImagesQuery {
		images: allS3Object {
			nodes {
				Key
				ETag
				localFile {
					childImageSharp {
						fluid(maxWidth: 1024) {
							...GatsbyImageSharpFluid
						}
					}
					
				}
			}
		}
	}
`;
