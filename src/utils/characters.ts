export interface ICharacters{
    id: number;
    name: string;
    speed: number;
    power: number;
    maneuverability: number;
    avatar: string;
    score: number;
}

export const characters: ICharacters[] = [
    {
        id: 0,
        name:"Mario",
        speed: 4,
        power: 3,
        maneuverability:3,
        avatar: '../assets/mario.gif',
        score:0
    },
    {
        id: 1,
        name:"Peach",
        speed: 3,
        power: 2,
        maneuverability:4,
        avatar: '../assets/peach.gif',
        score:0
    },
    {
        id: 2,
        name:"Yoshi",
        speed: 2,
        power: 3,
        maneuverability:4,
        avatar: '../assets/yoshi.gif',
        score:0
    },
    {
        id: 3,
        name:"Bowser",
        speed: 5,
        power: 5,
        maneuverability:2,
        avatar: '../assets/bowser.gif',
        score:0
    },
    {
        id: 4,
        name:"Luigi",
        speed: 3,
        power: 4,
        maneuverability:4,
        avatar: '../assets/luigi.gif',
        score:0
    },
    {
        id: 5,
        name:"Donkey Kong",
        speed: 2,
        power: 5,
        maneuverability:2,
        avatar: '../assets/dk.gif',
        score:0
    },

]