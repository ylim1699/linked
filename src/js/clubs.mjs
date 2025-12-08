import cooking from '../images/cooking.jpg';
import country from '../images/countrydance.jpg';
import dungeon from '../images/dungeonsanddragons.webp';
import trump from '../images/tump.jpg';
import biden from '../images/joe.jpg';
import rocket from '../images/rocket.webp';
import laser from '../images/lasertag.jpg';
import latin from '../images/latindancing.jpg';
import roller from '../images/rollerskate.jpg';
import ropes from '../images/ropes.jpg';


export const clubsData = [
    {
        category: 'C',
        name: "Country Dancing Club",
        description: "A community for students interested in country dancing",
        members: 2156,
        imageSrc: country,
        fallbackText: "No country dancing this semester",
        joinLink: "#join-country",
        link: "https://www.byui.edu/calendar/weekly-activities/country-dancing-2025-12-10-11520403-1",
        new: false,
        events: [
            {name:'Dance at the MC', date:'12-10-2025',link:'https://www.byui.edu/calendar/weekly-activities/country-dancing-2025-12-10-11520403-2'},
            {name:'Dance at the MC', date:'12-17-2025',link:'https://www.byui.edu/calendar/weekly-activities/country-dancing-2025-12-10-11520403-2'},
            {name:'Dance at the MC', date:'12-24-2025',link:'https://www.byui.edu/calendar/weekly-activities/country-dancing-2025-12-10-11520403-2'}
        ]
    },
    {
        category: 'C',
        name: "Cooking club",
        description: "A community for students interested in learing about different cuisines",
        members: 34,
        imageSrc: cooking,
        fallbackText: "No cooking club this semester",
        joinLink: "#join-cooking",
        link: "https://cooking.nytimes.com/",
        new: true,
        events: [
            {name:'Cooking up at the STC building', date:'12-12-2025',link:'https://cooking.nytimes.com/'},
            {name:'Cooking up at the STC building', date:'12-19-2025',link:'https://cooking.nytimes.com/'},
            {name:'Cooking up at the STC building', date:'12-26-2025',link:'https://cooking.nytimes.com/'}
        ]
    },
    {
        category: 'D',
        name: "Donald Trump Club",
        description: "A community for students interested in Making America great again.",
        members: 7,
        imageSrc: trump,
        fallbackText: "no trump club this semester",
        joinLink: "#join-trump",
        link: "https://www.foxnews.com/",
        new: true,
        events: [
            {name:'', date:'',link:''},
            {name:'', date:'',link:''},
            {name:'', date:'',link:''}
        ]
    },
    {
        category: 'D',
        name: "D&D",
        description: "A community for students interested in dungeons and dragons.",
        members: 120,
        imageSrc: dungeon,
        fallbackText: "no D&D club this semester",
        joinLink: "#join-d&d",
        link: "https://www.byui.edu/calendar/weekly-activities/game-night-dungeons-and-dragons-2025-12-11-11520404-1",
        new: false,
        events: [
            {name:'', date:'',link:''},
            {name:'', date:'',link:''},
            {name:'', date:'',link:''}
        ]
    },
    {
        category: 'J',
        name: "Joe Biden club",
        description: "A community for students interested in curing dementia and alzheimer's disease.",
        members: 56,
        imageSrc: biden,
        fallbackText: "no Joe Biden club this semester",
        joinLink: "#join-biden",
        link: "https://www.cnn.com/",
        new: false,
        events: [
            {name:'', date:'',link:''},
            {name:'', date:'',link:''},
            {name:'', date:'',link:''}
        ]
    },
     {
        category: 'K',
        name: "The Rocket club",
        description: "A community for students interested in building rockets",
        members: 666,
        imageSrc: rocket,
        fallbackText: "no Rocket club this semester",
        joinLink: "#join-rocket",
        link: "https://www.youtube.com/watch?v=Fe4PEnyVr9E",
        new: false,
        events: [
            {name:'', date:'',link:''},
            {name:'', date:'',link:''},
            {name:'', date:'',link:''}
        ]
    },
    {
        category: 'L',
        name: "Laser Tag Club",
        description: "Have fun playing laser tag anytime for free!",
        members: 520,
        imageSrc: laser,
        fallbackText: "Laser tag not available this semester",
        joinLink: "#join-laser",
        link: "https://www.byui.edu/calendar/weekly-activities/home-evening-laser-tag-2025-12-08-11520398-1",
        new: false,
        events: [
            {name:'', date:'',link:''},
            {name:'', date:'',link:''},
            {name:'', date:'',link:''}
        ]
    },
    {
        category: 'L',
        name: "Latin Dance Club",
        description: "A community for students interested in latin dancing",
        members: 85,
        imageSrc: latin,
        fallbackText: "no latin dancing this semester",
        joinLink: "#join-latin",
        link: "https://www.byui.edu/calendar/weekly-activities/latin-dance-2025-12-09-11520402-1",
        new: true,
        events: [
            {name:'', date:'',link:''},
            {name:'', date:'',link:''},
            {name:'', date:'',link:''}
        ]
    },
    {
        category: 'R',
        name: "Roller Skating Club",
        description: "Group up students who enjoy roller skating",
        members: 178,
        imageSrc: roller,
        fallbackText: "Roller Skating Club not available for this semester",
        joinLink: "#join-roller",
        link: "https://www.byui.edu/skateway-roller-skating/",
        new: false,
        events: [
            {name:'', date:'',link:''},
            {name:'', date:'',link:''},
            {name:'', date:'',link:''}
        ]
    },
    {
        category: 'R',
        name: "Ropes course Club",
        description: "A community for students interested in various ropes course activities",
        members: 356,
        imageSrc: ropes,
        fallbackText: "Ropes course Club not available for this semester",
        joinLink: "#join-ropes",
        link: "https://www.byui.edu/ropes-course/",
        new: true,
        events: [
            {name:'', date:'',link:''},
            {name:'', date:'',link:''},
            {name:'', date:'',link:''}
        ]
    }
];