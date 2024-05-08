export enum Language {
    en, de
}

export type Task = {
    id: number,
    name: string,
    description:  string,
    unlocked: boolean = false,
    active: boolean = false
}

export type Event = {
    id: string,
    name: string,
    description: string,
    lang: Language,
    image: string,
    tags: string[],
    tasks: Task[]
};