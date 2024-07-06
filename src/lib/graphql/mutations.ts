import { gql } from '../__generated__/gql';

export const SEND_SCHEDULE_SERVICE_MESSAGE = gql(/* GraphQL */ `
	mutation MutationSendScheduleServiceMessage($input: ScheduleServiceMessageInput!) {
		sendScheduleServiceMessage(input: $input)
	}
`);
