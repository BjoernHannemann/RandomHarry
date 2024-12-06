'use strict';

(function() {
    const characters = {
        easy: [
            { name: "Harry Potter", info: "The Boy Who Lived" },
            { name: "Hermione Granger", info: "The Brightest Witch of Her Age" },
            { name: "Ron Weasley", info: "Harry's Best Friend and Loyal Companion" },
            { name: "Albus Dumbledore", info: "Headmaster of Hogwarts" },
            { name: "Lord Voldemort", info: "The Dark Lord" },
            { name: "Severus Snape", info: "The Half-Blood Prince" },
            { name: "Draco Malfoy", info: "The Slytherin Prince" },
            { name: "Hagrid", info: "Keeper of Keys and Grounds" },
            { name: "Sirius Black", info: "The Prisoner of Azkaban" },
            { name: "Minerva McGonagall", info: "The Transfiguration Professor" },
            { name: "Nymphadora Tonks", info: "The Metamorphmagus Auror" },
            { name: "Mad-Eye Moody", info: "The Legendary Auror" },
            { name: "Cho Chang", info: "The Ravenclaw Seeker" },
            { name: "Cedric Diggory", info: "The Hufflepuff Champion" },
            { name: "Professor Sprout", info: "The Head of Hufflepuff" },
            { name: "Professor Flitwick", info: "The Charms Master" },
            { name: "Professor McGonagall", info: "The Transfiguration Master" },
            { name: "Lucius Malfoy", info: "The Death Eater Patriarch" },
            { name: "Dolores Umbridge", info: "The Pink Terror from the Ministry" },
            { name: "Peter Pettigrew", info: "The Traitor Known as Wormtail" },
            { name: "James Potter", info: "Harry's Father and Marauder" },
            { name: "Lily Potter", info: "Harry's Mother who Sacrificed Everything" },
            { name: "Gilderoy Lockhart", info: "The Fraudulent Celebrity Author" },
            { name: "Quirinus Quirrell", info: "The DADA Teacher with Two Faces" },
            { name: "Nearly Headless Nick", info: "Gryffindor House Ghost" },
            { name: "Hedwig", info: "Harry's Loyal Snowy Owl" },
            { name: "Fawkes", info: "Dumbledore's Phoenix" },
            { name: "Peeves", info: "Hogwarts' Troublemaking Poltergeist" }
        ],
        medium: [
            { name: "Luna Lovegood", info: "The Quirky Ravenclaw" },
            { name: "Neville Longbottom", info: "The True Gryffindor" },
            { name: "Ginny Weasley", info: "The Fierce Witch" },
            { name: "Fred Weasley", info: "The Prankster Twin" },
            { name: "George Weasley", info: "The Other Prankster Twin" },
            { name: "Bellatrix Lestrange", info: "The Dark Lord's Most Loyal Servant" },
            { name: "Remus Lupin", info: "The Werewolf Professor" },
            { name: "Dobby", info: "The Free Elf" },
            { name: "Molly Weasley", info: "The Protective Mother" },
            { name: "Arthur Weasley", info: "The Muggle Enthusiast" },
            { name: "Seamus Finnigan", info: "The Pyrotechnic Expert" },
            { name: "Dean Thomas", info: "The Artistic Gryffindor" },
            { name: "Lavender Brown", info: "Ron's Ex-Girlfriend" },
            { name: "Parvati Patil", info: "The Gryffindor Twin" },
            { name: "Padma Patil", info: "The Ravenclaw Twin" },
            { name: "Oliver Wood", info: "The Quidditch Captain" },
            { name: "Katie Bell", info: "The Gryffindor Chaser" },
            { name: "Angelina Johnson", info: "The Quidditch Team Captain" },
            { name: "Lee Jordan", info: "The Quidditch Commentator" },
            { name: "Madam Hooch", info: "The Flying Instructor" },
            { name: "Madam Pomfrey", info: "The School Nurse" },
            { name: "Professor Slughorn", info: "The Potions Master" },
            { name: "Professor Trelawney", info: "The Divination Teacher" },
            { name: "Narcissa Malfoy", info: "Draco's Mother" },
            { name: "Viktor Krum", info: "The Bulgarian Seeker" },
            { name: "Cornelius Fudge", info: "The Former Minister of Magic" },
            { name: "Kingsley Shacklebolt", info: "The Future Minister of Magic" },
            { name: "Mundungus Fletcher", info: "The Shady Order Member" },
            { name: "Alastor Moody", info: "The Real Mad-Eye" },
            { name: "Rufus Scrimgeour", info: "The Wartime Minister of Magic" },
            { name: "Barty Crouch Sr.", info: "The Strict Ministry Official" },
            { name: "Barty Crouch Jr.", info: "The Death Eater who Impersonated Moody" },
            { name: "Rita Skeeter", info: "The Sensationalist Reporter" },
            { name: "Colin Creevey", info: "Harry's Biggest Fan" },
            { name: "Dennis Creevey", info: "Colin's Younger Brother" },
            { name: "Penelope Clearwater", info: "Percy's Ravenclaw Girlfriend" },
            { name: "Marcus Flint", info: "The Slytherin Quidditch Captain" },
            { name: "Blaise Zabini", info: "The Slytherin Elite" },
            { name: "Theodore Nott", info: "The Solitary Slytherin" },
            { name: "Pansy Parkinson", info: "Draco's Slytherin Friend" },
            { name: "Millicent Bulstrode", info: "The Tough Slytherin Girl" },
            { name: "Justin Finch-Fletchley", info: "The Muggle-born Hufflepuff" },
            { name: "Ernie Macmillan", info: "The Pompous Hufflepuff Prefect" }
        ],
        hard: [
            { name: "Regulus Black", info: "The Reformed Death Eater" },
            { name: "Kreacher", info: "The House-elf of Black Family" },
            { name: "Helena Ravenclaw", info: "The Grey Lady" },
            { name: "Bloody Baron", info: "Slytherin's Ghost" },
            { name: "Professor Binns", info: "The Ghost Teacher" },
            { name: "Fenrir Greyback", info: "The Savage Werewolf" },
            { name: "Antonin Dolohov", info: "The Deadly Death Eater" },
            { name: "Augustus Rookwood", info: "The Department of Mysteries Spy" },
            { name: "Andromeda Tonks", info: "Tonks' Mother and Sirius' Cousin" },
            { name: "Ted Tonks", info: "Andromeda's Muggle-born Husband" },
            { name: "Frank Longbottom", info: "Neville's Father and Former Auror" },
            { name: "Alice Longbottom", info: "Neville's Mother and Former Auror" },
            { name: "Augusta Longbottom", info: "Neville's Formidable Grandmother" },
            { name: "Marlene McKinnon", info: "Original Order Member" },
            { name: "Dorcas Meadowes", info: "Order Member Killed by Voldemort" },
            { name: "Emmeline Vance", info: "Member of the Order of the Phoenix" },
            { name: "Hepzibah Smith", info: "Owner of Hufflepuff's Cup" },
            { name: "Caractacus Burke", info: "Co-founder of Borgin and Burkes" },
            { name: "Madam Marsh", info: "Regular Knight Bus Passenger" },
            { name: "Professor Merrythought", info: "Former DADA Teacher" },
            { name: "Dexter Fortescue", info: "Former Headmaster Portrait" },
            { name: "Dilys Derwent", info: "Former Headmistress Portrait" },
            { name: "Madam Malkin", info: "The Diagon Alley Clothier" },
            { name: "Mr. Ollivander", info: "The Wandmaker" },
            { name: "Florean Fortescue", info: "The Ice Cream Parlour Owner" },
            { name: "Madam Rosmerta", info: "The Three Broomsticks Owner" },
            { name: "Ambrosius Flume", info: "Honeydukes Owner" },
            { name: "Madam Puddifoot", info: "Tea Shop Owner" },
            { name: "Professor Vector", info: "The Arithmancy Teacher" },
            { name: "Professor Sinistra", info: "The Astronomy Teacher" },
            { name: "Professor Grubbly-Plank", info: "Substitute Care of Magical Creatures Teacher" },
            { name: "Wilkie Twycross", info: "The Apparition Instructor" },
            { name: "Elphias Doge", info: "Dumbledore's Old Friend" },
            { name: "Aberforth Dumbledore", info: "The Hog's Head Innkeeper" },
            { name: "Ariana Dumbledore", info: "Albus's Troubled Sister" },
            { name: "Kendra Dumbledore", info: "Albus's Mother" },
            { name: "Percival Dumbledore", info: "Albus's Father" },
            { name: "Marvolo Gaunt", info: "Voldemort's Grandfather" },
            { name: "Merope Gaunt", info: "Voldemort's Mother" },
            { name: "Morfin Gaunt", info: "Voldemort's Uncle" },
            { name: "Araminta Meliflua", info: "Black Family Relative" },
            { name: "Cassiopeia Black", info: "Member of the Black Family" },
            { name: "Phineas Nigellus Black", info: "Former Headmaster Black" },
            { name: "Orion Black", info: "Sirius's Father" },
            { name: "Walburga Black", info: "Sirius's Mother" },
            { name: "Alphard Black", info: "Sirius's Supportive Uncle" },
            { name: "Cygnus Black", info: "Bellatrix's Father" },
            { name: "Druella Rosier", info: "Bellatrix's Mother" },
            { name: "Evan Rosier", info: "The Death Eater" },
            { name: "Wilkes", info: "Death Eater Killed by Aurors" },
            { name: "Travers", info: "The Calculating Death Eater" },
            { name: "Jugson", info: "Department of Mysteries Death Eater" },
            { name: "Mulciber", info: "The Imperius Curse Specialist" },
            { name: "Avery", info: "The Cowardly Death Eater" },
            { name: "Yaxley", info: "The Ministry Infiltrator" },
            { name: "Thorfinn Rowle", info: "The Brutal Death Eater" },
            { name: "Selwyn", info: "The Pure-blood Death Eater" }
        ]
    };

    // Add 100 more characters distributed across difficulties...
    // Medium difficulty additions
    characters.medium.push(
        { name: "Bill Weasley", info: "The Curse Breaker" },
        { name: "Charlie Weasley", info: "The Dragon Tamer" },
        { name: "Percy Weasley", info: "The Ambitious Prefect" },
        { name: "Fleur Delacour", info: "The Triwizard Champion" },
        // ... Add more medium characters
    );

    // Hard difficulty additions
    characters.hard.push(
        { name: "Bathilda Bagshot", info: "The Magical Historian" },
        { name: "Gregorovitch", info: "The Wandmaker" },
        { name: "Gellert Grindelwald", info: "The Dark Wizard" },
        // ... Add more hard characters
    );

    let currentDifficulty = 'all';

    function sanitizeString(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function secureRandom(min, max) {
        const randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        const randomNumber = randomBuffer[0] / (0xffffffff + 1);
        return Math.floor(randomNumber * (max - min + 1)) + min;
    }

    function getCharactersByDifficulty(difficulty) {
        if (difficulty === 'all') {
            return [
                ...characters.easy,
                ...characters.medium,
                ...characters.hard
            ];
        }
        return characters[difficulty];
    }

    function updateCharacterCount() {
        const count = getCharactersByDifficulty(currentDifficulty).length;
        document.getElementById('characterCount').textContent = count;
    }

    function pickRandomCharacter() {
        try {
            const availableCharacters = getCharactersByDifficulty(currentDifficulty);
            const randomIndex = secureRandom(0, availableCharacters.length - 1);
            const character = availableCharacters[randomIndex];
            
            const nameElement = document.getElementById('characterName');
            const infoElement = document.getElementById('characterInfo');
            const characterCard = document.querySelector('.character-card');
            
            if (!nameElement || !infoElement || !characterCard) {
                throw new Error('Required elements not found');
            }

            characterCard.classList.remove('fade');
            void characterCard.offsetWidth;
            characterCard.classList.add('fade');
            
            nameElement.textContent = sanitizeString(character.name);
            infoElement.textContent = sanitizeString(character.info);
        } catch (error) {
            console.error('Error in pickRandomCharacter:', error);
        }
    }

    function initializeApp() {
        try {
            const button = document.getElementById('pickButton');
            const difficultySelect = document.getElementById('difficultySelect');
            
            if (!button || !difficultySelect) {
                throw new Error('Required elements not found');
            }

            updateCharacterCount();

            difficultySelect.addEventListener('change', (e) => {
                currentDifficulty = e.target.value;
                updateCharacterCount();
            });

            button.addEventListener('click', pickRandomCharacter);
            
            button.addEventListener('touchstart', function(e) {
                this.style.transform = 'scale(0.98)';
            }, { passive: true });

            button.addEventListener('touchend', function(e) {
                this.style.transform = 'scale(1)';
            }, { passive: true });

        } catch (error) {
            console.error('Error initializing app:', error);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Harry Potter Character Picker",
        "description": "Random character generator for Harry Potter series characters",
        "applicationCategory": "Entertainment",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
})(); 