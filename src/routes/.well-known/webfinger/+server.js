import { error } from '@sveltejs/kit';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET() {
	let data;
	try {
		data = {
			subject: 'acct:martypenner@hachyderm.io',
			aliases: ['https://hachyderm.io/@martypenner', 'https://hachyderm.io/users/martypenner'],
			links: [
				{
					rel: 'http://webfinger.net/rel/profile-page',
					type: 'text/html',
					href: 'https://hachyderm.io/@martypenner'
				},
				{
					rel: 'self',
					type: 'application/activity+json',
					href: 'https://hachyderm.io/users/martypenner'
				},
				{
					rel: 'http://ostatus.org/schema/1.0/subscribe',
					template: 'https://hachyderm.io/authorize_interaction?uri={uri}'
				}
			]
		};
		return new Response(JSON.stringify(data), {
			headers: {
				'Cache-Control': `max-age=0, s-maxage=${3600}` // 1 hour.. for now
			}
		});
	} catch (err) {
		throw error(404, err.message);
	}
}
