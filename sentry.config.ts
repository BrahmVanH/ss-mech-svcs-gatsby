import * as Sentry from '@sentry/gatsby';

Sentry.init({
	dsn: 'https://ea33d5cda2ee92cc4d5df4c95cf7ee75@o4506334305714176.ingest.us.sentry.io/4507784585871360',

	integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration(), Sentry.browserProfilingIntegration()],
	

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for tracing.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,

	// Capture Replay for 10% of all sessions,
	// plus for 100% of sessions with an error
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
	
});
