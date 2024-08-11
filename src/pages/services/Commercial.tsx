import * as React from 'react';
import { HeadFC, Link, PageProps, graphql } from 'gatsby';

import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';

import ScheduleServiceForm from '../../components/ScheduleServiceForm';
import SEO from '../../components/SEO';

import commercialPageData from '../../lib/data/CommercialPage.json';

import { ServicesCardData } from '../../types';

interface CommercialProps extends PageProps {
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

const Commercial: React.FC<CommercialProps> = ({ data }) => {
	const [serviceCardData, setServiceCardData] = React.useState<ServicesCardData[]>([]);
	React.useEffect(() => {
		if (!data) {
			return;
		}

		const serviceCardData: ServicesCardData[] = commercialPageData.servicesCardsData.map((service) => {
			const img = data.images.edges.find((node: any) => node.node.Key === service.img);
			return { ...service, img: img?.node.url };
		});
		setServiceCardData(serviceCardData);
	}, [data]);

	React.useEffect(() => {
		if (serviceCardData.length === 0) {
			return;
		}
	}, [serviceCardData]);

	return (
		<Layout>
			<div className='w-full h-full flex flex-col justify-center items-center'>
				<h1 className='text-center sm:text-left text-[48px] text-800'>Commercial Services</h1>

				<div className='w-screen flex flex-col  sm:flex-row justify-center items-start'>
					<div className='w-full sm:w-[55%] flex flex-col aspect-square sm:grid grid-cols-[repeat(auto-fit,_minmax(40%,_1fr))] auto-rows-[300px] gap-8 m-0 sm:m-4 py-4 px-8'>
						{serviceCardData && serviceCardData.map((service) => <ServicesCard key={service.name} name={service.name} description={service.description} img={service.img} />)}
					</div>
					<ScheduleServiceForm />
				</div>
				{process.env.NODE_ENV === 'production' ? (
					<></>
				) : (
					<Link
						to='/programs'
						className='maintenance-programs-link w-[80%] flex flex-col text-center bg-comp1 bg-opacity-55 text-white m-4 p-2 border h-[80%] border-black border-opacity-100 rounded-xl sm:hover:scale-105 sm:hover:shadow sm:hover:duration-500 '>
						<h3 className='text-nowrap'>Tailored Maintenance Programs</h3>
						<p className='px-2 py-0'>We'll work with you to build a maintenance plan custom fit to your business's needs with flexible billing schedules. </p>
					</Link>
				)}
			</div>
		</Layout>
	);
};

export default Commercial;

export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} title='Commercial Services' />;

export const query = graphql`
	query AllImagesQuery {
		images: allS3Object(
			filter: { Key: { in: ["tankless-hotwater-landscape", "air-filter-replacement", "wrench-on-tailspout-cropped", "data-cable-wiring", "ac_compressor", "light-fixture-install"] } }
		) {
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
