import { ImgObj } from '../lib/__generated__/graphql';
import * as Sentry from '@sentry/react';
import { ServicesProps } from '../components/Services';

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

export const matchs3UrlsAndImgKeys = (pageImgData: ImgObj[], s3Urls: ImgObj[]) => {
	if (!s3Urls || pageImgData.length === 0) {
		Sentry.captureException(new Error('No image urls provided for findImgs'));
		return;
	}

	return pageImgData.map((image: any, i: number) => {
		const img: ImgObj | undefined = s3Urls.find((obj: any) => obj.key === image.key);
		if (!img?.key) {
			Sentry.captureException(new Error('No image keys found in s3Urls in findImgs'));
			return;
		}
		if (!img.url) {
			Sentry.captureException(new Error('No image urls found in s3Urls in findImgs'));
			return;
		}

		if (!image.alt) {
			Sentry.captureException(new Error('No alt text found in image in findImgs'));
			return;
		}
		console.log('img: ', img);
		console.log('image: ', image);
		return {
			...image,
			alt: image.alt ?? '',
			url: img.url ?? '',
		};
	}) as ImgObj[];

	
};
