import { Link } from 'gatsby';
import * as React from 'react';

const GetQuoteBtn: React.FC = () => {
	return (
		<Link
			hidden
			to='/get-quote-form'
			className='get-quote-btn bg-[#6f7077] text-white p-4 rounded-[10px] border border-opacity-100 border-[#000000a5] md:hover:scale-105 md:hover:border-[0.25px] md:hover:border-[#00000067]'>
			<h2>Get a Free Quote</h2>
		</Link>
	);
};

export default GetQuoteBtn;
