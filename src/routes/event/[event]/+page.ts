export async function load({ params }) {
	let data = undefined;

	try {
		data = await import(`../../../lib/events/${params.event.toLowerCase()}/event.json`);
		return data.default;
	} catch (error) {
		return data;
	}
}
