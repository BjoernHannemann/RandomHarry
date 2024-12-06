'use strict';

(function() {
    const characters = [
        { name: "Harry Potter", info: "The Boy Who Lived" },
        { name: "Hermione Granger", info: "The Brightest Witch of Her Age" },
        { name: "Ron Weasley", info: "Harry's Best Friend and Loyal Companion" },
        { name: "Albus Dumbledore", info: "Headmaster of Hogwarts" },
        { name: "Severus Snape", info: "The Half-Blood Prince" },
        { name: "Lord Voldemort", info: "The Dark Lord" },
        { name: "Sirius Black", info: "The Prisoner of Azkaban" },
        { name: "Luna Lovegood", info: "The Quirky Ravenclaw" },
        { name: "Neville Longbottom", info: "The True Gryffindor" },
        { name: "Draco Malfoy", info: "The Slytherin Prince" },
        { name: "Bellatrix Lestrange", info: "The Dark Lord's Most Loyal Servant" },
        { name: "Rubeus Hagrid", info: "Keeper of Keys and Grounds at Hogwarts" },
        { name: "Fred Weasley", info: "The Prankster Twin" },
        { name: "George Weasley", info: "The Other Prankster Twin" },
        { name: "Ginny Weasley", info: "The Fierce Witch" },
        { name: "Remus Lupin", info: "The Werewolf Professor" },
        { name: "Dobby", info: "The Free Elf" },
        { name: "Minerva McGonagall", info: "The Transfiguration Professor" },
        { name: "Cho Chang", info: "The Ravenclaw Seeker" },
        { name: "Cedric Diggory", info: "The Hufflepuff Champion" },
        { name: "Molly Weasley", info: "The Protective Mother" },
        { name: "Arthur Weasley", info: "The Muggle Enthusiast" },
        { name: "Percy Weasley", info: "The Ambitious Prefect" },
        { name: "Bill Weasley", info: "The Curse Breaker" },
        { name: "Charlie Weasley", info: "The Dragon Tamer" },
        { name: "Fleur Delacour", info: "The Triwizard Champion" },
        { name: "Viktor Krum", info: "The Quidditch Star" },
        { name: "Nymphadora Tonks", info: "The Metamorphmagus" },
        { name: "Mad-Eye Moody", info: "The Vigilant Auror" },
        { name: "Kingsley Shacklebolt", info: "The Future Minister" },
        { name: "Narcissa Malfoy", info: "The Protective Mother" },
        { name: "Lucius Malfoy", info: "The Death Eater" },
        { name: "Peter Pettigrew", info: "The Traitor" },
        { name: "James Potter", info: "The Marauder" },
        { name: "Lily Potter", info: "The Sacrificial Mother" },
        { name: "Regulus Black", info: "The Reformed Death Eater" },
        { name: "Kreacher", info: "The House-elf of Black Family" },
        { name: "Hedwig", info: "Harry's Loyal Owl" },
        { name: "Aragog", info: "The Acromantula" },
        { name: "Fawkes", info: "Dumbledore's Phoenix" },
        { name: "Gilderoy Lockhart", info: "The Fraudulent Author" },
        { name: "Quirinus Quirrell", info: "The Possessed Professor" },
        { name: "Dolores Umbridge", info: "The Pink Terror" },
        { name: "Rita Skeeter", info: "The Sensationalist Reporter" },
        { name: "Horace Slughorn", info: "The Collector" },
        { name: "Rufus Scrimgeour", info: "The Wartime Minister" },
        { name: "Cornelius Fudge", info: "The In-Denial Minister" },
        { name: "Lavender Brown", info: "Won-Won's Girlfriend" },
        { name: "Parvati Patil", info: "The Gryffindor Twin" },
        { name: "Padma Patil", info: "The Ravenclaw Twin" },
        { name: "Seamus Finnigan", info: "The Pyrotechnic Wizard" },
        { name: "Dean Thomas", info: "The Artist" },
        { name: "Oliver Wood", info: "The Quidditch Captain" },
        { name: "Katie Bell", info: "The Gryffindor Chaser" },
        { name: "Angelina Johnson", info: "The Quidditch Leader" },
        { name: "Lee Jordan", info: "The Quidditch Commentator" },
        { name: "Colin Creevey", info: "The Enthusiastic Photographer" },
        { name: "Helena Ravenclaw", info: "The Grey Lady" },
        { name: "Bloody Baron", info: "Slytherin's Ghost" },
        { name: "Nearly Headless Nick", info: "Gryffindor's Ghost" },
        { name: "Fat Friar", info: "Hufflepuff's Ghost" },
        { name: "Peeves", info: "The Poltergeist" },
        { name: "Madam Hooch", info: "The Flying Instructor" },
        { name: "Madam Pomfrey", info: "The School Healer" },
        { name: "Professor Sprout", info: "The Herbology Professor" },
        { name: "Professor Flitwick", info: "The Charms Master" },
        { name: "Professor Trelawney", info: "The Divination Teacher" },
        { name: "Professor Binns", info: "The Ghost Teacher" },
        { name: "Fenrir Greyback", info: "The Savage Werewolf" },
        { name: "Antonin Dolohov", info: "The Deadly Death Eater" },
        { name: "Augustus Rookwood", info: "The Department of Mysteries Spy" }
    ];

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

    function pickRandomCharacter() {
        try {
            const randomIndex = secureRandom(0, characters.length - 1);
            const character = characters[randomIndex];
            
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
            const countElement = document.getElementById('characterCount');
            
            if (!button || !countElement) {
                throw new Error('Required elements not found');
            }

            countElement.textContent = characters.length.toString();

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