const BASE_PATH = import.meta.env.BASE_URL;

export const clubsData = [
    {
        category: 'C',
        name: "Country Dancing Club",
        description: "A community for students interested in country dancing",
        members: 2156,
        imageSrc: `${BASE_PATH}images/countrydance.jpg`,
        fallbackText: "No country dancing this semester",
        joinLink: "#join-country",
        link: "https://www.byui.edu/calendar/weekly-activities/country-dancing-2025-12-10-11520403-1",
        new: false
    },
    {
        category: 'C',
        name: "Cooking club",
        description: "A community for students interested in learing about different cuisines",
        members: 34,
        imageSrc: `${BASE_PATH}images/cooking.jpg`,
        fallbackText: "No cooking club this semester",
        joinLink: "#join-cooking",
        link: "https://cooking.nytimes.com/",
        new: true
    },
    {
        category: 'D',
        name: "Donald Trump Club",
        description: "A community for students interested in Making America great again.",
        members: 7,
        imageSrc: `${BASE_PATH}images/tump.jpg`,
        fallbackText: "no trump club this semester",
        joinLink: "#join-trump",
        link: "https://www.foxnews.com/",
        new: true
    },
    {
        category: 'D',
        name: "D&D",
        description: "A community for students interested in dungeons and dragons.",
        members: 120,
        imageSrc: `${BASE_PATH}images/dungeonsanddragons.webp`,
        fallbackText: "no D&D club this semester",
        joinLink: "#join-d&d",
        link: "https://www.byui.edu/calendar/weekly-activities/game-night-dungeons-and-dragons-2025-12-11-11520404-1",
        new: false
    },
    {
        category: 'J',
        name: "Joe Biden club",
        description: "A community for students interested in curing dementia and alzheimer's disease.",
        members: 56,
        imageSrc: `${BASE_PATH}images/joe.jpg`,
        fallbackText: "no Joe Biden club this semester",
        joinLink: "#join-biden",
        link: "https://www.cnn.com/",
        new: false
    },
     {
        category: 'K',
        name: "The Rocket club",
        description: "A community for students interested in building rockets",
        members: 666,
        imageSrc: `${BASE_PATH}images/rocket.webp`,
        fallbackText: "no Rocket club this semester",
        joinLink: "#join-rocket",
        link: "https://www.youtube.com/watch?v=Fe4PEnyVr9E",
        new: false
    },
    {
        category: 'L',
        name: "Laser Tag Club",
        description: "Have fun playing laser tag anytime for free!",
        members: 520,
        imageSrc: `${BASE_PATH}images/lasertag.jpg`,
        fallbackText: "Laser tag not available this semester",
        joinLink: "#join-laser",
        link: "https://www.byui.edu/calendar/weekly-activities/home-evening-laser-tag-2025-12-08-11520398-1",
        new: false
    },
    {
        category: 'L',
        name: "Latin Dance Club",
        description: "A community for students interested in latin dancing",
        members: 85,
        imageSrc: `${BASE_PATH}images/latindancing.jpg`,
        fallbackText: "no latin dancing this semester",
        joinLink: "#join-latin",
        link: "https://www.byui.edu/calendar/weekly-activities/latin-dance-2025-12-09-11520402-1",
        new: true
    },
    {
        category: 'R',
        name: "Roller Skating Club",
        description: "Group up students who enjoy roller skating",
        members: 178,
        imageSrc: `${BASE_PATH}images/rollerskate.jpg`,
        fallbackText: "Roller Skating Club not available for this semester",
        joinLink: "#join-roller",
        link: "https://www.byui.edu/skateway-roller-skating/",
        new: false
    },
    {
        category: 'R',
        name: "Ropes course Club",
        description: "A community for students interested in various ropes course activities",
        members: 356,
        imageSrc: `${BASE_PATH}images/ropes.jpg`,
        fallbackText: "Ropes course Club not available for this semester",
        joinLink: "#join-ropes",
        link: "https://www.byui.edu/ropes-course/",
        new: true
    }
];