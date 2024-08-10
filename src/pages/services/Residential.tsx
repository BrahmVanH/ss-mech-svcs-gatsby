import * as React from 'react';
import { HeadFC, Link, PageProps, graphql } from 'gatsby';

import ServicesCard from '../../components/ServicesCard';
import Layout from '../../components/layout';

import residentialServices from '../../lib/data/residentialServices.json';
import ScheduleServiceForm from '../../components/ScheduleServiceForm';
import SEO from '../../components/SEO';

import { ServicesCardData } from '../../types';


interface ResidentialProps extends PageProps {
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



const Residential: React.FC<ResidentialProps> = ({data}) => {
	

	const [serviceCardData, setServiceCardData] = React.useState<ServicesCardData[]>([]);

	React.useEffect(() => {
		if (!data) {
			return;
		}

		console.log('data', data);

		console.log('data.file....', data?.images.edges);

		const serviceCardData: ServicesCardData[] = residentialServices.map((service) => {
			const img = data.images.edges.find((node: any) => node.node.Key === service.img);
			return { ...service, img: img?.node.url };
		});
		setServiceCardData(serviceCardData);
	}, [data]);

	return (
		<Layout>
			<div className='w-full h-full flex flex-col justify-center items-center'>
				<h1 className='text-center sm:test-left text-[48px] text-800'>Residential Services</h1>

				<div className='w-screen flex flex-col sm:flex-row  justify-center items-start'>
					<div className='w-full sm:w-[55%] flex flex-col aspect-square  sm:grid grid-cols-[repeat(auto-fit,_minmax(40%,_1fr))] auto-rows-[300px] gap-8 m-0 sm:m-4 py-4 px-8'>
						{serviceCardData && serviceCardData.map((service) => <ServicesCard key={service.name} name={service.name} description={service.description} img={service.img} />)}
					</div>
					<ScheduleServiceForm />
				</div>
			</div>
		</Layout>
	);
};

export default Residential;

export const Head: HeadFC = ({ location }) => <SEO endpoint={location.pathname} title='Residential Services' />;

export const query = graphql`
	query AllImagesQuery {
		images: allS3Object(
			filter: { Key: { in: ["wrench-on-tailspout-cropped", "light-fixture-install", "dryer-repair", "drywall-repair", "data-cable-wiring", "air-filter-replacement", "air-filter-replacement"] } }
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