export enum Language {
    en, de
}

export type Task = {
    id: number,
    name: string,
    description:  string,
    unlocked: boolean = false,
    actice: boolean = false
}

export type Event = {
    id: string,
    name: string,
    description: string,
    language: Language,
    image: string,
    tags: string[],
    tasks: Tast[]
};