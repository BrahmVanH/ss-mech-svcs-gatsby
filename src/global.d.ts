declare module '*.jpg' {
	export default '' as string;
}declare module '*.jpeg' {
	export default '' as string;
}
declare module '*.png' {
	export default '' as string;
}

// fix typescript error of not being able to import svgs as react components
declare module '*.svg' {
	import React = require('react');
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}
