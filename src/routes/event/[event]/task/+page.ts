export async function load({ params }) {
	let data = undefined;

	try {
		data = await import('$lib/events.json');
		data = data.default.find((event) => {
			return event.id.toLowerCase() === params.event.toLowerCase();
		});
		return data;
	} catch (error) {
		return data;
	}
}
