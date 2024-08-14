import * as React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import Layout from '../components/layout';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import SEO from '../components/SEO';

import homePageData from '../lib/data/HomePage.json';

import 'normalize.css';
import Hero from '../components/Hero';

interface HomePageProps extends PageProps {
	data: {
		images: {
			edges: {
				node: {
					Key: string;
					url: string;
				};
			}[];
		};
	};
}

interface ImgKeys {
	commercial: {
		alt: string;
		img: string;
	};
	residential: {
		alt: string;
		img: string;
	};
}

// To Do: Added breadcrumb structured data
const Home: React.FC<HomePageProps> = ({ data }) => {
	const homeRef = React.useRef<HTMLDivElement>(null);
	const [serviceCardImgs, setServiceCardImgs] = React.useState<ImgKeys | null>(null);

	React.useEffect(() => {
		if (!data) {
			return;
		}

		const images = data.images.edges;
		const imgKeys = homePageData.servicesCardImageData.map((card, i) => {
			return {
				alt: card.alt,
				img: images[i].node.url,
			};
		});

		setServiceCardImgs({
			commercial: imgKeys[0],
			residential: imgKeys[1],
		});
	}, [data]);

	return (
		<Layout>
			<Hero />
			<div ref={homeRef} className='flex flex-col items-center justify-center bg-transparent'>
				{serviceCardImgs ? <Services imgKeys={serviceCardImgs} /> : <></>}
				<Reviews />
			</div>
		</Layout>
	);
};

export default Home;

export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} title='South Shore Mechanical Services' />;

export const query = graphql`
	query AllImagesQuery {
		images: allS3Object(filter: { Key: { in: ["tankless-hotwater-landscape", "dryer-repair-landscape"] } }) {
			edges {
				node {
					Key
					ETag
					url
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
	}
`;
