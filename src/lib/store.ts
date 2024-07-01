import { writable } from 'svelte/store';
import type { Event } from '$lib/types';

import json from '$lib/events.json';
let events: Event[] = json;

export const navStore = writable<string>('');
export const allEventsStore = writable<Event[]>(events);
export const activeEventStore = writable<Event>();
