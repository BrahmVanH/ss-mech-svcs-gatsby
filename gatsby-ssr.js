// gatsby-ssr.js
import * as React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<link rel='preconnect' href='https://fonts.googleapis.com' />,
		<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />,
		<link href='https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap' rel='stylesheet' />,
	]);
};
