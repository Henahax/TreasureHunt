import { writable } from 'svelte/store';
import type { Event } from '$lib/types';

import events from '$lib/events.json';

export const navStore = writable<string>('');
export const allEventsStore = writable<Event[]>(events);
export const activeEventStore = writable<Event>();
