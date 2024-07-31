import './src/styles/global.css';

import ReactDOM from 'react-dom/client';

export const replaceHydrateFunction = () => {
	return process.env.NODE_ENV === 'production'
		? (element, container) => {
				const root = ReactDOM.createRoot(container);
				root.render(element);
		  }
		: undefined;
};

// Replace this by your own page wrapper:
// exports.wrapPageElement = ({ element, props }) => {
// 	return <Layout {...props}>{element}</Layout>;
// };
