// import React, { useEffect } from 'react';
// import { useStaticQuery, graphql, HeadProps } from 'gatsby';
// import SEO from './SEO';

// export interface DataType {
// 	site: {
// 		siteMetadata: {
// 			title: string;
// 			siteUrl: string;
// 			description: string;
// 			image: string;
// 		};
// 	};
// }

// const Head: React.FC = () => {
// 	const site = useStaticQuery(graphql`
// 		query {
// 			site {
// 				siteMetadata {
// 					title
// 					description
// 					image
// 					siteUrl
// 				}
// 			}
// 		}
// 	`);
// 	// const siteUrl = data.site.siteMetadata.siteUrl;
// 	// const title = data.site.siteMetadata.title;
// 	// const description = data.site.siteMetadata.description;
// 	// const image = data.site.siteMetadata.image;

// 	const slug = location.pathname;

// 	useEffect(() => {
// 		console.log('rendered');
// 	}, []);


// 	// useEffect(() => {
// 	// 	console.log('siteUrl: ', siteUrl);
// 	// 	console.log('title: ', title);
// 	// 	console.log('description: ', description);
// 	// 	console.log('image: ', image);
// 	// 	console.log('slug: ', slug);
// 	// }, [siteUrl, title, description, image, slug]);

// 	return <SEO currentUrl={slug} />;
// };

// export default Head;

export {}