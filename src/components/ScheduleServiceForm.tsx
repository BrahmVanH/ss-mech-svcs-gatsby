import * as React from 'react';
import { useMutation } from '@apollo/client';
import { useForm, FieldValues, Controller } from 'react-hook-form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input/input';

import { SEND_SCHEDULE_SERVICE_MESSAGE } from '../lib/graphql';
import { ScheduleServiceMessageInput } from '../lib/__generated__/graphql';

import { formatPhoneNumberString, removeWhiteSpace } from '../lib/helpers';
import { AddRowBottomIcon } from 'evergreen-ui/types';

import '../styles/ScheduleServiceForm.css';

const ScheduleServiceForm: React.FC = () => {
	// This will hit the API and tell it to send me an email with the details mentioned
	// First Name
	// Last Name
	// phone number
	// email
	// location (Marquette, Negaunee)
	// Service needed (options)
	// Date and time needed by

	const [messageData, setMessageData] = React.useState<FieldValues | null>(null);

	const formRef = React.useRef<HTMLFormElement>(null);

	const {
		register,
		handleSubmit,
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

			console.log('response', response);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form ref={formRef} className='schedule-service-form bg-primary bg-opacity-85 text-white' onSubmit={handleSubmit(onSubmit)}>
			<h3>Request Service</h3>
			<input
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
			<Controller
				name='tel'
				control={control}
				rules={{ required: { value: true, message: 'Please enter a phone number.' }, validate: (value) => isValidPhoneNumber(value) || 'Please enter a valid phone number.' }}
				render={({ field: { onChange, value } }) => <PhoneInput placeholder='Phone number' value={value} onChange={onChange} defaultCountry='US' />}
			/>
			{errors.tel && <p>{errors?.tel?.message?.toString()}</p>}
			<input
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
				className='text-gray-400'
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
				className='text-gray-400'
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
				placeholder='Message'
				rows={5}
				{...register('message', {
					required: { value: true, message: 'Please enter a message.' },
					maxLength: { value: 255, message: 'Please enter a message with fewer than 255 characters.' },
					pattern: { value: /^([A-Za-z0-9 _.,!'/$]+)$/, message: 'Please enter a valid message (alphanumeric characters, spaces, and punctuation allowed).' },
				})}
			/>
			{errors.message && <p>{errors?.message?.message?.toString()}</p>}
			<button type='submit'>Submit</button>
		</form>
	);
};

export default ScheduleServiceForm;
