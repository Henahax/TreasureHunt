export type Task = {
	id: string;
	name: string;
	description: string;
	unlocked: boolean;
	active?: boolean;
};

export type Event = {
	id: string;
	name: string;
	subtitle: string;
	description: string;
	lang: string;
	location: string;
	image: string;
	tags: string[];
	tasks: Task[];
	locked: boolean;
	code?: string;
};
