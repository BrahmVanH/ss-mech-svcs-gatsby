import * as React from 'react';
import { useMutation } from '@apollo/client';
import { useForm, FieldValues } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input/react-hook-form-input';
import { isValidPhoneNumber } from 'react-phone-number-input/input';

import { SEND_SCHEDULE_SERVICE_MESSAGE } from '../lib/graphql';
import { ScheduleServiceMessageInput } from '../lib/__generated__/graphql';

import { formatPhoneNumberString, removeWhiteSpace } from '../lib/helpers';

const ScheduleServiceForm: React.FC = () => {
	const inputClasses = 'w-[85%] my-2 mx-0 p-2 text-start border border-black rounded-sm text-black';

	// const [messageData, setMessageData] = React.useState<FieldValues | null>(null);

	const formRef = React.useRef<HTMLFormElement>(null);

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
		control,
	} = useForm();

	const [sendScheduleServiceMessage] = useMutation(SEND_SCHEDULE_SERVICE_MESSAGE);

	const onSubmit = async (data: FieldValues) => {
		console.log(data);
		const { firstName, lastName, tel, email, location, service, message } = data;
		if (!firstName || !lastName || !tel || !email || !location || !service || !message) {
			console.error('Please fill out all fields.');
			return;
		}
		try {
			const response = await sendScheduleServiceMessage({
				variables: {
					input: {
						givenName: removeWhiteSpace(firstName),
						familyName: removeWhiteSpace(lastName),
						tel: formatPhoneNumberString(tel),
						email: removeWhiteSpace(email).toLowerCase(),
						location,
						service,
						message,
					} as ScheduleServiceMessageInput,
				},
			});

			const responseStatusCodeString = response.data?.sendScheduleServiceMessage?.split(' ')[0] ?? '400';

			if (parseInt(responseStatusCodeString) < 300) {
				console.log('Message sent successfully!');
				formRef.current?.reset();
			} else {
				setError('root', { type: responseStatusCodeString, message: 'There was an error sending your message. Please try again in a few minutes or just give us a call.' });
			}
		} catch (error) {
			console.error(error);
			setError('root', { type: '400', message: 'There was an error sending your message. Please try again in a few minutes or just give us a call.' });
		}
	};

	return (
		<form
			ref={formRef}
			className='schedule-service-form bg-primary bg-opacity-85 text-black flex flex-col justify-center items-center w-[90%] sm:w-[30%] rounded-2xl my-8 mx-auto sm:mx-0 py-4 border border-black p-4 sticky top-4 '
			onSubmit={handleSubmit(onSubmit)}>
			<h2 className='mb-4 mt-2 text-white'>Request Service</h2>
			<input
				className={inputClasses}
				autoComplete='given-name'
				type='text'
				placeholder='First Name'
				{...register('firstName', {
					required: { value: true, message: 'Please enter your first name.' },
					maxLength: { value: 20, message: 'Sorry, please shorten your first name to fewer than 20 characters.' },
					pattern: { value: /^[A-Za-z]+$/, message: 'Please enter a valid name containing only letters. Sorry, Droids.' },
				})}
			/>
			{errors.firstName && <p>{errors?.firstName?.message?.toString()}</p>}
			<input
				className={inputClasses}
				autoComplete='family-name'
				type='text'
				placeholder='Last Name'
				{...register('lastName', {
					required: { value: true, message: 'Please enter your last name.' },
					maxLength: { value: 20, message: 'Sorry, please shorten your last name to fewer than 20 characters.' },
					pattern: { value: /^[^\s]+(\s+[^\s]+)*$/, message: 'Please enter a valid name containing only letters. Sorry, Droids.' },
				})}
			/>
			{errors.lastName && <p>{errors?.lastName?.message?.toString()}</p>}
			{/* <input
				autoComplete='tel'
				type='tel'
				placeholder='Phone Number'
				{...register('phone', {
					required: { value: true, message: 'Please enter a phone number' },
					maxLength: { value: 12, message: 'Please enter valid phone number.' },
					pattern: { value: /^(\\+[0-9]{1,3})?[-. ]?\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, message: 'Please enter a valid phone number only containing numbers, +, or -' },
				})}
			/>
			{errors.phone && <p>{errors?.phone?.message?.toString()}</p>}
			 */}
			<PhoneInput
				class={inputClasses}
				name='tel'
				control={control}
				rules={{ required: { value: true, message: 'Please enter a phone number.' }, validate: isValidPhoneNumber || 'Please enter a valid phone number.' }}
				placeholder='Phone number'
				defaultCountry='US'
			/>
			{errors.tel && <p>{errors?.tel?.message?.toString()}</p>}
			<input
				className={inputClasses}
				autoComplete='email'
				type='email'
				placeholder='Email'
				{...register('email', {
					required: { value: true, message: 'Please enter an email address.' },
					maxLength: { value: 255, message: 'Please enter an email with fewer than 255 characters.' },
					pattern: { value: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: 'Please enter a valid email address.' },
				})}
			/>
			{errors.email && <p>{errors?.email?.message?.toString()}</p>}
			<select
				className={`text-black ${inputClasses}`}
				{...register('location', {
					required: { value: true, message: 'Please *select* a valid location.' },
					maxLength: { value: 10, message: 'Please *select* a valid location.' },
					pattern: { value: /^[A-Za-z]+$/, message: 'Please enter a valid location containing only letters.' },
				})}>
				<option value='Marquette'>Marquette</option>
				<option value='Negaunee'>Negaunee</option>
			</select>
			{errors.location && <p>{errors?.location?.message?.toString()}</p>}
			<select
				className={`text-black ${inputClasses}`}
				{...register('service', {
					required: { value: true, message: 'Please *select* a valid service.' },
					maxLength: { value: 40, message: 'Please *select* a valid service.' },
					pattern: { value: /^[a-zA-Z-]+$/, message: 'Please enter a valid service containing only letters and hyphens.' },
				})}>
				<option value='commercial-hvac'>Commercial Heating & Cooling</option>
				<option value='residential-hvac'>Residential Heating & Cooling</option>
				<option value='commercial-duct-cleaning'>Commercial Duct Cleaning</option>
				<option value='residential-duct-cleaning'>Residential Duct Cleaning</option>
				<option value='commercial-data'>Commercial Data Cable</option>
				<option value='residential-data'>Residential Data Cable</option>
				<option value='commercial-refrigeration'>Commercial Refrigeration</option>
				<option value='commercial-appliance'>Commercial Appliance</option>
				<option value='residential-appliance'>Residential Appliance</option>
				<option value='commercial-plumbing'>Commercial Plumbing</option>
				<option value='residential-plumbing'>Residential Plumbing</option>
				<option value='commercial-lighting-electrical'>Commercial Lighting & Electrical</option>
				<option value='residential-lighting-electrical'>Residential Lighting & Electrical</option>
				<option value='residential-drywall'>Residential Drywall</option>
				<option value='Other'>Other</option>
			</select>
			{errors.service && <p>{errors?.service?.message?.toString()}</p>}
			<textarea
				className={inputClasses}
				placeholder='Message'
				rows={5}
				{...register('message', {
					required: { value: true, message: 'Please enter a message.' },
					maxLength: { value: 255, message: 'Please enter a message with fewer than 255 characters.' },
					pattern: { value: /^([A-Za-z0-9 _.,!'/$]+)$/, message: 'Please enter a valid message (alphanumeric characters, spaces, and punctuation allowed).' },
				})}
			/>
			{errors.message && <p>{errors?.message?.message?.toString()}</p>}

			{errors?.root?.serverError?.type && <p>There was an error sending your message. Please try again in a few minutes or just give us a call.</p>}
			<button className='w-min my-4 mx-0 px-4 py-2 text-white border border-white rounded-sm text-[1.25rem]' type='submit'>
				Submit
			</button>
		</form>
	);
};

export default ScheduleServiceForm;
