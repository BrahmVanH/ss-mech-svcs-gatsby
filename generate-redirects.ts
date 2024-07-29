import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const apiUrl = process.env.GATSBY_LAMBDA_FUNCTION_URL ?? '';

if (!apiUrl) {
	throw new Error('GATSBY_LAMBDA_FUNCTION_URL environment variable is not defined');
}

const redirectsContent = `/graphql  ${apiUrl}  200\n`;

fs.writeFileSync('_redirects', redirectsContent);
