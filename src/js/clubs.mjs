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
import sports from '../images/nfl.webp';


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
            {name:'Face to face with Trump', date:'11-28-2025',link:'https://www.foxnews.com/'},
            {name:'Face to face with Trump', date:'11-21-2025',link:'https://www.foxnews.com/'},
            {name:'After Meeting', date:'12-05-2025',link:'https://www.foxnews.com/'}
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
            {name:'Dungeon Quest', date:'12-11-2025',link:'https://www.byui.edu/calendar/weekly-activities/game-night-dungeons-and-dragons-2025-12-11-11520404-1'},
            {name:'Dungeon Quest', date:'12-18-2025',link:'https://www.byui.edu/calendar/weekly-activities/game-night-dungeons-and-dragons-2025-12-11-11520404-1'}
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
            {name:'Face-to-Face with Biden', date:'12-25-2025',link:'https://www.cnn.com/'},
            {name:'After Meeting', date:'1-02-2026',link:'https://www.cnn.com/'}
        ]
    },
     {
        category: 'K',
        name: "Kim's Rocket Club",
        description: "A community for students interested in building rockets",
        members: 666,
        imageSrc: rocket,
        fallbackText: "no Rocket club this semester",
        joinLink: "#join-rocket",
        link: "https://www.youtube.com/watch?v=Fe4PEnyVr9E",
        new: false,
        events: [
            {name:'Vision Meeting', date:'12-07-2025',link:'https://www.youtube.com/watch?v=Fe4PEnyVr9E'},
            {name:'Rocket Science', date:'12-014-2025',link:'https://www.youtube.com/watch?v=Fe4PEnyVr9E'}
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
            {name:'Laser Tag at Taylor Building', date:'12-08-2025',link:'https://www.byui.edu/calendar/weekly-activities/home-evening-laser-tag-2025-12-08-11520398-1'},
            {name:'Laser Tag at Taylor Building', date:'12-15-2025',link:'https://www.byui.edu/calendar/weekly-activities/home-evening-laser-tag-2025-12-08-11520398-1'}
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
            {name:'Latin Dance at the MC', date:'12-09-2025',link:'https://www.byui.edu/calendar/weekly-activities/latin-dance-2025-12-09-11520402-1'},
            {name:'Latin Dance at the MC', date:'12-16-2025',link:'https://www.byui.edu/calendar/weekly-activities/latin-dance-2025-12-09-11520402-1'}
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
            {name:'Roller Skating at the MC', date:'12-08-2025',link:'https://www.byui.edu/skateway-roller-skating/'},
            {name:'Roller Skating at the MC', date:'12-11-2025',link:'https://www.byui.edu/skateway-roller-skating/'},
            {name:'Roller Skating at the MC', date:'12-13-2025',link:'https://www.byui.edu/skateway-roller-skating/'}, 
            {name:'Roller Skating at the MC', date:'12-15-2025',link:'https://www.byui.edu/skateway-roller-skating/'},
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
            {name:'Rope Course', date:'12-05-2025',link:'https://www.byui.edu/ropes-course/'},
            {name:'Rope Course', date:'12-12-2025',link:'https://www.byui.edu/ropes-course/'}
        ]
    },
     {
        category: 'S',
        name: "Sports Club",
        description: "A community for students interested in various sports topics",
        members: 438,
        imageSrc: sports,
        fallbackText: "Club is available for this semester",
        joinLink: "#join-sports",
        link: "https://www.foxsports.com/",
        new: true,
        events: [
            {name:'Sports intro club meeting', date:'1-09-2025',link:'https://www.foxsports.com/'},
            {name:'Sports club meeting', date:'1-16-2025',link:'https://www.foxsports.com/'}
        ]
    }
];