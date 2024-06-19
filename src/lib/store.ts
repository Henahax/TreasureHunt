import { writable } from 'svelte/store';

import events from '$lib/events.json';

export const navStore: any = writable();
export const allEventsStore: any = writable(events);
export const activeEventStore: any = writable([]);
