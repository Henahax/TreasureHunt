	export enum language {
		en = 0,
		de = 1
	}

	export function getString(word: string, lang: language = language.en) {
		let test = dictionary[word][0];
		console.log(dictionary[word][0])
		return test;
	}

	let dictionary = {
		events: {
			en: 'Events',
			de: 'Events'
		},
		unlock: {
			en: 'Unlock',
			de: 'Freischalten'
		},
		selectEvent: {
			en: 'Select event',
			de: 'Event freischalten'
		},
		unlockTask: {
			en: 'Unlock task',
			de: 'Aufgabe entsperren'
		},
		enterPasswordScanQR: {
			en: 'Enter password or scan QR code',
			de: 'Passwort eingeben oder QR-Code scannen'
		},
		enterPassword: {
			en: 'Enter password...',
			de: 'Passwort eingeben...'
		},
		submit: {
			en: 'Submit',
			de: 'Senden'
		},
		close: {
			en: 'Close',
			de: 'Schließen'
		},
		questLog: {
			en: 'Quest Log',
			de: 'Quest-Log'
		}
	};