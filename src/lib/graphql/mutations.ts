// import { gql } from '../__generated__/gql';
import { gql } from '@apollo/client';

export const SEND_SCHEDULE_SERVICE_MESSAGE = gql(/* GraphQL */ `
	mutation sendScheduleServiceMessage($input: ScheduleServiceMessageInput!) {
		sendScheduleServiceMessage(input: $input)
	}
`);
