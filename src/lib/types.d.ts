export type Task = {
    id: string,
    name: string,
    description: string,
    unlocked: boolean = false,
    active: boolean = false
}

export type Event = {
    id: string,
    name: string,
    subtitle: string,
    description: string,
    lang: string,
    location: string,
    image: string,
    tags: string[],
    tasks: Task[],
    unlocked: boolean = false,
    code: string = ""
};