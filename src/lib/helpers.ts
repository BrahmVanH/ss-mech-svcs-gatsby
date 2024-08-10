import { ServicesObject } from "../types";

function removeParentheses(string: string) {
	if (typeof string !== 'string' || string === '') {
		throw new Error('Argument must be a string');
	}

	return string.replace(/[()]/g, '');
}

function removeHyphens(string: string) {
	if (typeof string !== 'string' || string === '') {
		throw new Error('Argument must be a string');
	}

	return string.replace(/-/g, '');
}

function removePlus(string: string) {
	if (typeof string !== 'string' || string === '') {
		throw new Error('Argument must be a string');
	}

	return string.replace(/\+/g, '');
}

export function formatPhoneNumberString(string: string) {
	if (typeof string !== 'string' || string === '') {
		throw new Error('Argument must be a string');
	}

	return removePlus(removeHyphens(removeParentheses(string)));
}

export function removeWhiteSpace(string: string) {
	if (typeof string !== 'string' || string === '') {
		throw new Error('Argument must be a string');
	}

	return string.replace(/\s/g, '');
}


export function getServicesImgKey(servicesJson: ServicesObject[]) {
	return servicesJson.map((service: ServicesObject) => service.img);
}