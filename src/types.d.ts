declare module '*.svg' {
	const content: any;
	export default content;
}

export interface ServicesObject {
	name: string;
	description: string;
	img: string;
}

export interface ServicesCardData {
	name: string;
	description: string;
	img: any;
}
