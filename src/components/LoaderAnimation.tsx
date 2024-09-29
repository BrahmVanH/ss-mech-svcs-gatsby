import * as React from 'react';
import * as Sentry from '@sentry/react';

const Loading: React.FC = () => {
	const [message1Display, setMessage1Display] = React.useState<boolean>(false);
	const [message2Display, setMessage2Display] = React.useState<boolean>(false);

	// React.useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setMessage1Display(true);
	// 		setMessage2Display(true);
	// 		Sentry.captureException(new Error('Loading component timed out'));
	// 	}, 15000);

	// 	return () => clearTimeout(timer);
	// }, []);

	return (
		<div className='flex flex-col justify-center items-center h-screen w-screen'>
			<div className='inline-block relative w-20 h-20'>
				{[...Array(9)].map((_, index) => (
					<div
						key={index}
						className={`absolute w-4 h-4 rounded-full bg-[#5f8fa5] animate-[lds-grid_1.2s_linear_infinite]`}
						style={{
							top: `${Math.floor(index / 3) * 24 + 8}px`,
							left: `${(index % 3) * 24 + 8}px`,
							animationDelay: `${-0.4 * ((index % 3) + Math.floor(index / 3))}s`,
						}}></div>
				))}
			</div>
			<div className='mt-4 text-center'>
				{message1Display && <h4 className='text-lg font-semibold'>This is getting awkward</h4>}
				{message2Display && <h5 className='text-base font-medium'>...try refreshing the page</h5>}
			</div>
		</div>
	);
};

export default Loading;
