import './src/styles/global.css';

import ReactDOM from 'react-dom/client';

export const replaceHydrateFunction = () => {
	return (element, container) => {
		const root = ReactDOM.createRoot(container);
		root.render(element);
	};
};

// Replace this by your own page wrapper:
// exports.wrapPageElement = ({ element, props }) => {
// 	return <Layout {...props}>{element}</Layout>;
// };
