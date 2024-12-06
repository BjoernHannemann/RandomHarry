'use strict';

(function() {
    // Language translations
    const translations = {
        en: {
            title: "Harry Potter Character Picker",
            subtitle: "Choose Your Difficulty",
            counter: "Characters in category:",
            placeholder: "Select a difficulty and click the button!",
            button: "Pick Character ⚡",
            footer: "Explore the magical world of Harry Potter characters! This picker includes characters from all seven books.",
            nav: {
                about: "About",
                characters: "Characters",
                contact: "Contact"
            },
            difficulties: {
                all: "All Characters",
                easy: "Easy (Main Characters)",
                medium: "Medium (Supporting Characters)",
                hard: "Hard (Rare Characters)"
            },
            meta: {
                description: "Discover random characters from the Harry Potter series! Our magical name picker features over 120 characters from the Wizarding World.",
                keywords: "Harry Potter, character picker, random name generator, Wizarding World, Hogwarts characters"
            },
            errors: {
                notFound: "Character not found",
                loading: "Loading...",
                error: "An error occurred"
            },
            categories: {
                students: "Students",
                teachers: "Teachers",
                deathEaters: "Death Eaters",
                ministry: "Ministry of Magic",
                order: "Order of the Phoenix"
            }
        },
        de: {
            title: "Harry Potter Charakter-Auswahl",
            subtitle: "Wähle deinen Schwierigkeitsgrad",
            counter: "Charaktere in Kategorie:",
            placeholder: "Wähle eine Schwierigkeit und klicke den Button!",
            button: "Charakter auswählen ⚡",
            footer: "Entdecke die magische Welt der Harry Potter Charaktere! Diese Auswahl enthält Charaktere aus allen sieben Büchern.",
            nav: {
                about: "Über",
                characters: "Charaktere",
                contact: "Kontakt"
            },
            difficulties: {
                all: "Alle Charaktere",
                easy: "Einfach (Hauptcharaktere)",
                medium: "Mittel (Nebencharaktere)",
                hard: "Schwer (Seltene Charaktere)"
            },
            meta: {
                description: "Entdecke zufällige Charaktere aus der Harry Potter-Serie! Unser magischer Namenswähler enthält über 120 Charaktere aus der Zauberwelt.",
                keywords: "Harry Potter, Charakterauswahl, Zufallsgenerator, Zauberwelt, Hogwarts Charaktere"
            },
            errors: {
                notFound: "Charakter nicht gefunden",
                loading: "Lädt...",
                error: "Ein Fehler ist aufgetreten"
            },
            categories: {
                students: "Schüler",
                teachers: "Lehrer",
                deathEaters: "Todesser",
                ministry: "Zaubereiministerium",
                order: "Orden des Phönix"
            }
        }
    };

    let currentLanguage = 'en';

    // Update all text content based on selected language
    function updateLanguage(lang) {
        document.body.classList.add('lang-switching');
        
        setTimeout(() => {
            currentLanguage = lang;
            
            // Update all text elements with data-lang attribute
            document.querySelectorAll('[data-lang]').forEach(element => {
                const key = element.getAttribute('data-lang');
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });

            // Update select options
            const select = document.getElementById('difficultySelect');
            select.options[0].text = translations[lang].difficulties.all;
            select.options[1].text = translations[lang].difficulties.easy;
            select.options[2].text = translations[lang].difficulties.medium;
            select.options[3].text = translations[lang].difficulties.hard;

            // Update counter with current difficulty count
            updateCharacterCount();

            // Update button text
            document.getElementById('pickButton').textContent = translations[lang].button;

            // Update footer text
            document.querySelector('footer p').textContent = translations[lang].footer;

            // Update navigation
            const navLinks = document.querySelectorAll('footer nav a');
            navLinks[0].textContent = translations[lang].nav.about;
            navLinks[1].textContent = translations[lang].nav.characters;
            navLinks[2].textContent = translations[lang].nav.contact;

            // Remove animation class after update
            setTimeout(() => {
                document.body.classList.remove('lang-switching');
            }, 50);
        }, 300);
    }

    // Helper function to find current character
    function findCurrentCharacter(currentName) {
        const allCharacters = [...characters.easy, ...characters.medium, ...characters.hard];
        return allCharacters.find(char => 
            char.name.en === currentName || char.name.de === currentName
        );
    }

    // Add language switch event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            updateLanguage(lang);
            updateLanguageButtons(lang);
        });
    });

    const characters = {
        easy: [
            {
                name: { en: "Harry Potter", de: "Harry Potter" },
                info: { en: "The Boy Who Lived", de: "Der Junge, der überlebte" }
            },
            {
                name: { en: "Hermione Granger", de: "Hermine Granger" },
                info: { en: "The Brightest Witch of Her Age", de: "Die klügste Hexe ihres Alters" }
            },
            {
                name: { en: "Ron Weasley", de: "Ron Weasley" },
                info: { en: "Harry's Best Friend", de: "Harrys bester Freund" }
            },
            {
                name: { en: "Albus Dumbledore", de: "Albus Dumbledore" },
                info: { en: "Headmaster of Hogwarts", de: "Schulleiter von Hogwarts" }
            },
            {
                name: { en: "Lord Voldemort", de: "Lord Voldemort" },
                info: { en: "The Dark Lord", de: "Der Dunkle Lord" }
            },
            {
                name: { en: "Severus Snape", de: "Severus Snape" },
                info: { en: "The Half-Blood Prince", de: "Der Halbblutprinz" }
            },
            {
                name: { en: "Draco Malfoy", de: "Draco Malfoy" },
                info: { en: "The Slytherin Prince", de: "Der Prinz von Slytherin" }
            },
            {
                name: { en: "Rubeus Hagrid", de: "Rubeus Hagrid" },
                info: { en: "Keeper of Keys and Grounds", de: "Hüter der Schlüssel und Ländereien" }
            }
        ],
        medium: [
            {
                name: { en: "Luna Lovegood", de: "Luna Lovegood" },
                info: { en: "The Quirky Ravenclaw", de: "Die schrullige Ravenclaw" }
            },
            {
                name: { en: "Neville Longbottom", de: "Neville Longbottom" },
                info: { en: "The True Gryffindor", de: "Der wahre Gryffindor" }
            },
            {
                name: { en: "Ginny Weasley", de: "Ginny Weasley" },
                info: { en: "The Fierce Witch", de: "Die temperamentvolle Hexe" }
            },
            {
                name: { en: "Fred Weasley", de: "Fred Weasley" },
                info: { en: "The Prankster Twin", de: "Der scherzhafte Zwilling" }
            },
            {
                name: { en: "George Weasley", de: "George Weasley" },
                info: { en: "The Other Prankster Twin", de: "Der andere scherzhafte Zwilling" }
            },
            {
                name: { en: "Barty Crouch Sr.", de: "Barty Crouch Sr." },
                info: { en: "The Strict Ministry Official", de: "Der strenge Ministeriumsbeamte" }
            },
            {
                name: { en: "Barty Crouch Jr.", de: "Barty Crouch Jr." },
                info: { en: "The Death Eater who Impersonated Moody", de: "Der Todesser, der sich als Moody ausgab" }
            },
            {
                name: { en: "Colin Creevey", de: "Colin Creevey" },
                info: { en: "Harry's Biggest Fan", de: "Harrys größter Fan" }
            },
            {
                name: { en: "Dennis Creevey", de: "Dennis Creevey" },
                info: { en: "Colin's Younger Brother", de: "Colins jüngerer Bruder" }
            },
            {
                name: { en: "Penelope Clearwater", de: "Penelope Clearwater" },
                info: { en: "Percy's Ravenclaw Girlfriend", de: "Percys Ravenclaw-Freundin" }
            },
            {
                name: { en: "Marcus Flint", de: "Marcus Flint" },
                info: { en: "The Slytherin Quidditch Captain", de: "Der Slytherin-Quidditch-Kapitän" }
            },
            {
                name: { en: "Blaise Zabini", de: "Blaise Zabini" },
                info: { en: "The Slytherin Elite", de: "Die Slytherin-Elite" }
            },
            {
                name: { en: "Theodore Nott", de: "Theodore Nott" },
                info: { en: "The Solitary Slytherin", de: "Der einsame Slytherin" }
            },
            {
                name: { en: "Pansy Parkinson", de: "Pansy Parkinson" },
                info: { en: "Draco's Slytherin Friend", de: "Dracos Slytherin-Freundin" }
            },
            {
                name: { en: "Millicent Bulstrode", de: "Millicent Bulstrode" },
                info: { en: "The Tough Slytherin Girl", de: "Das harte Slytherin-Mädchen" }
            },
            {
                name: { en: "Justin Finch-Fletchley", de: "Justin Finch-Fletchley" },
                info: { en: "The Muggle-born Hufflepuff", de: "Der muggelstämmige Hufflepuff" }
            },
            {
                name: { en: "Ernie Macmillan", de: "Ernie MacMillan" },
                info: { en: "The Pompous Hufflepuff Prefect", de: "Der wichtigtuerische Hufflepuff-Vertrauensschüler" }
            }
        ],
        hard: [
            {
                name: { en: "Regulus Black", de: "Regulus Black" },
                info: { en: "The Reformed Death Eater", de: "Der reformierte Todesser" }
            },
            {
                name: { en: "Kreacher", de: "Kreacher" },
                info: { en: "The House-elf of Black Family", de: "Der Hauself der Familie Black" }
            },
            {
                name: { en: "Helena Ravenclaw", de: "Helena Ravenclaw" },
                info: { en: "The Grey Lady", de: "Die Graue Dame" }
            },
            {
                name: { en: "Bloody Baron", de: "Der Blutige Baron" },
                info: { en: "Slytherin's Ghost", de: "Der Hausgeist von Slytherin" }
            },
            {
                name: { en: "Professor Binns", de: "Professor Binns" },
                info: { en: "The Ghost Teacher", de: "Der Geisterlehrer" }
            },
            {
                name: { en: "Fenrir Greyback", de: "Fenrir Greyback" },
                info: { en: "The Savage Werewolf", de: "Der wilde Werwolf" }
            },
            {
                name: { en: "Antonin Dolohov", de: "Antonin Dolohow" },
                info: { en: "The Deadly Death Eater", de: "Der tödliche Todesser" }
            },
            {
                name: { en: "Augustus Rookwood", de: "Augustus Rookwood" },
                info: { en: "The Department of Mysteries Spy", de: "Der Spion der Mysteriumsabteilung" }
            },
            {
                name: { en: "Andromeda Tonks", de: "Andromeda Tonks" },
                info: { en: "Tonks' Mother and Sirius' Cousin", de: "Tonks' Mutter und Sirius' Cousin" }
            },
            {
                name: { en: "Ted Tonks", de: "Ted Tonks" },
                info: { en: "Andromeda's Muggle-born Husband", de: "Ted's muggelstämmiger Ehemann" }
            },
            {
                name: { en: "Frank Longbottom", de: "Frank Longbottom" },
                info: { en: "Neville's Father and Former Auror", de: "Nevilles Vater und ehemaliger Aurore" }
            },
            {
                name: { en: "Alice Longbottom", de: "Alice Longbottom" },
                info: { en: "Neville's Mother and Former Auror", de: "Nevilles Mutter und ehemaliger Aurore" }
            },
            {
                name: { en: "Augusta Longbottom", de: "Augusta Longbottom" },
                info: { en: "Neville's Formidable Grandmother", de: "Nevilles ehrfürchtige Großmutter" }
            },
            {
                name: { en: "Marlene McKinnon", de: "Marlene McKinnon" },
                info: { en: "Original Order Member", de: "Ursprüngliches Mitglied der Orden" }
            },
            {
                name: { en: "Dorcas Meadowes", de: "Dorcas Meadowes" },
                info: { en: "Order Member Killed by Voldemort", de: "Mitglied der Orden, die von Voldemort getötet wurde" }
            },
            {
                name: { en: "Emmeline Vance", de: "Emmeline Vance" },
                info: { en: "Member of the Order of the Phoenix", de: "Mitglied der Orden des Phönix" }
            },
            {
                name: { en: "Hepzibah Smith", de: "Hepzibah Smith" },
                info: { en: "Owner of Hufflepuff's Cup", de: "Besitzerin des Hufflepuff-Tassen" }
            },
            {
                name: { en: "Caractacus Burke", de: "Caractacus Burke" },
                info: { en: "Co-founder of Borgin and Burkes", de: "Mitbegründer von Borgin und Burkes" }
            },
            {
                name: { en: "Madam Marsh", de: "Madam Marsh" },
                info: { en: "Regular Knight Bus Passenger", de: "Regulärer Knight Bus-Passagier" }
            },
            {
                name: { en: "Professor Merrythought", de: "Professor Merrythought" },
                info: { en: "Former DADA Teacher", de: "Ehemaliger DADA-Lehrer" }
            },
            {
                name: { en: "Dexter Fortescue", de: "Dexter Fortescue" },
                info: { en: "Former Headmaster Portrait", de: "Portrait des ehemaligen Schulleiters" }
            },
            {
                name: { en: "Dilys Derwent", de: "Dilys Derwent" },
                info: { en: "Former Headmistress Portrait", de: "Portrait der ehemaligen Schulleiterin" }
            },
            {
                name: { en: "Madam Malkin", de: "Madam Malkin" },
                info: { en: "The Diagon Alley Clothier", de: "Die Diagon-Alley-Schneiderin" }
            },
            {
                name: { en: "Mr. Ollivander", de: "Mr. Ollivander" },
                info: { en: "The Wandmaker", de: "Der Stockmacher" }
            },
            {
                name: { en: "Florean Fortescue", de: "Florean Fortescue" },
                info: { en: "The Ice Cream Parlour Owner", de: "Besitzerin des Eisparlors" }
            },
            {
                name: { en: "Madam Rosmerta", de: "Madam Rosmerta" },
                info: { en: "The Three Broomsticks Owner", de: "Besitzerin des Dreibuchstaben-Gaststätten" }
            },
            {
                name: { en: "Ambrosius Flume", de: "Ambrosius Flume" },
                info: { en: "Honeydukes Owner", de: "Besitzer von Honeydukes" }
            },
            {
                name: { en: "Madam Puddifoot", de: "Madam Puddifoot" },
                info: { en: "Tea Shop Owner", de: "Besitzerin des Teesalons" }
            },
            {
                name: { en: "Professor Vector", de: "Professor Vector" },
                info: { en: "The Arithmancy Teacher", de: "Der Arithmancylehrer" }
            },
            {
                name: { en: "Professor Sinistra", de: "Professor Sinistra" },
                info: { en: "The Astronomy Teacher", de: "Der Astronomielehrer" }
            },
            {
                name: { en: "Professor Grubbly-Plank", de: "Professor Grubbly-Plank" },
                info: { en: "Substitute Care of Magical Creatures Teacher", de: "Ersatz-Lehrer für das Fach 'Verantwortung für Magische Kreaturen'" }
            },
            {
                name: { en: "Wilkie Twycross", de: "Wilkie Twycross" },
                info: { en: "The Apparition Instructor", de: "Der Apparitionslehrer" }
            },
            {
                name: { en: "Elphias Doge", de: "Elphias Doge" },
                info: { en: "Dumbledore's Old Friend", de: "Dumbledores alter Freund" }
            },
            {
                name: { en: "Aberforth Dumbledore", de: "Aberforth Dumbledore" },
                info: { en: "The Hog's Head Innkeeper", de: "Der Wirt des Eberkopfs" }
            },
            {
                name: { en: "Ariana Dumbledore", de: "Ariana Dumbledore" },
                info: { en: "Albus's Troubled Sister", de: "Albus' verstörte Schwester" }
            },
            {
                name: { en: "Kendra Dumbledore", de: "Kendra Dumbledore" },
                info: { en: "Albus's Mother", de: "Albus' Mutter" }
            },
            {
                name: { en: "Percival Dumbledore", de: "Percival Dumbledore" },
                info: { en: "Albus's Father", de: "Albus' Vater" }
            },
            {
                name: { en: "Marvolo Gaunt", de: "Marvolo Gaunt" },
                info: { en: "Voldemort's Grandfather", de: "Voldemorts Großvater" }
            },
            {
                name: { en: "Merope Gaunt", de: "Merope Gaunt" },
                info: { en: "Voldemort's Mother", de: "Voldemorts Mutter" }
            },
            {
                name: { en: "Morfin Gaunt", de: "Morfin Gaunt" },
                info: { en: "Voldemort's Uncle", de: "Voldemorts Onkel" }
            },
            {
                name: { en: "Araminta Meliflua", de: "Araminta Meliflua" },
                info: { en: "Black Family Relative", de: "Verwandte der Familie Black" }
            },
            {
                name: { en: "Cassiopeia Black", de: "Cassiopeia Black" },
                info: { en: "Member of the Black Family", de: "Mitglied der Familie Black" }
            },
            {
                name: { en: "Phineas Nigellus Black", de: "Phineas Nigellus Black" },
                info: { en: "Former Headmaster Black", de: "Ehemaliger Schulleiter Black" }
            },
            {
                name: { en: "Orion Black", de: "Orion Black" },
                info: { en: "Sirius's Father", de: "Sirius' Vater" }
            },
            {
                name: { en: "Walburga Black", de: "Walburga Black" },
                info: { en: "Sirius's Mother", de: "Sirius' Mutter" }
            },
            {
                name: { en: "Alphard Black", de: "Alphard Black" },
                info: { en: "Sirius's Supportive Uncle", de: "Sirius' engagierter Onkel" }
            },
            {
                name: { en: "Cygnus Black", de: "Cygnus Black" },
                info: { en: "Bellatrix's Father", de: "Bellatrix' Vater" }
            },
            {
                name: { en: "Druella Rosier", de: "Druella Rosier" },
                info: { en: "Bellatrix's Mother", de: "Bellatrix' Mutter" }
            },
            {
                name: { en: "Evan Rosier", de: "Evan Rosier" },
                info: { en: "The Death Eater", de: "Der Todesser" }
            },
            {
                name: { en: "Wilkes", de: "Wilkes" },
                info: { en: "Death Eater Killed by Aurors", de: "Von Auroren getöteter Todesser" }
            },
            {
                name: { en: "Travers", de: "Travers" },
                info: { en: "The Calculating Death Eater", de: "Der rechnende Todesser" }
            },
            {
                name: { en: "Jugson", de: "Jugson" },
                info: { en: "Department of Mysteries Death Eater", de: "Todesser der Mysteriumsabteilung" }
            },
            {
                name: { en: "Mulciber", de: "Mulciber" },
                info: { en: "The Imperius Curse Specialist", de: "Der Spezialist für den Imperius-Fluch" }
            },
            {
                name: { en: "Avery", de: "Avery" },
                info: { en: "The Cowardly Death Eater", de: "Der feige Todesser" }
            },
            {
                name: { en: "Yaxley", de: "Yaxley" },
                info: { en: "The Ministry Infiltrator", de: "Der Ministeriums-Einbruch" }
            },
            {
                name: { en: "Thorfinn Rowle", de: "Thorfinn Rowle" },
                info: { en: "The Brutal Death Eater", de: "Der brutalste Todesser" }
            },
            {
                name: { en: "Selwyn", de: "Selwyn" },
                info: { en: "The Pure-blood Death Eater", de: "Der reinblütige Todesser" }
            }
        ]
    };

    // Add 50 more characters with translations
    const newCharacters = {
        easy: [
            {
                name: { en: "Bill Weasley", de: "Bill Weasley" },
                info: { en: "The Curse Breaker", de: "Der Fluchbrecher" }
            },
            {
                name: { en: "Charlie Weasley", de: "Charlie Weasley" },
                info: { en: "The Dragon Tamer", de: "Der Drachenzähmer" }
            },
            {
                name: { en: "Percy Weasley", de: "Percy Weasley" },
                info: { en: "The Ministry Official", de: "Der Ministeriumsbeamte" }
            }
        ],
        medium: [
            {
                name: { en: "Fleur Delacour", de: "Fleur Delacour" },
                info: { en: "The Triwizard Champion", de: "Die Trimagische Championesse" }
            },
            {
                name: { en: "Madame Maxime", de: "Madame Maxime" },
                info: { en: "Beauxbatons Headmistress", de: "Schulleiterin von Beauxbatons" }
            },
            {
                name: { en: "Igor Karkaroff", de: "Igor Karkaroff" },
                info: { en: "Durmstrang Headmaster", de: "Schulleiter von Durmstrang" }
            },
            {
                name: { en: "Griphook", de: "Griphook" },
                info: { en: "The Gringotts Goblin", de: "Der Gringotts Kobold" }
            },
            {
                name: { en: "Firenze", de: "Firenze" },
                info: { en: "The Centaur Professor", de: "Der Zentauren-Professor" }
            }
        ],
        hard: [
            {
                name: { en: "Bertha Jorkins", de: "Bertha Jorkins" },
                info: { en: "The Missing Ministry Witch", de: "Die vermisste Ministeriumshexe" }
            },
            {
                name: { en: "Frank Bryce", de: "Frank Bryce" },
                info: { en: "The Riddle House Caretaker", de: "Der Hausmeister des Riddle-Hauses" }
            },
            {
                name: { en: "Broderick Bode", de: "Broderick Bode" },
                info: { en: "The Unspeakable", de: "Der Unsägliche" }
            },
            {
                name: { en: "Dirk Cresswell", de: "Dirk Cresswell" },
                info: { en: "The Goblin Liaison", de: "Der Kobold-Verbindungsmann" }
            }
        ]
    };

    // Add to newCharacters.easy
    newCharacters.easy.push(
        {
            name: { en: "Nymphadora Tonks", de: "Nymphadora Tonks" },
            info: { en: "The Metamorphmagus Auror", de: "Die metamorphmagische Aurorin" }
        },
        {
            name: { en: "Mad-Eye Moody", de: "Mad-Eye Moody" },
            info: { en: "The Legendary Auror", de: "Der legendäre Auror" }
        },
        {
            name: { en: "Cho Chang", de: "Cho Chang" },
            info: { en: "The Ravenclaw Seeker", de: "Die Ravenclaw-Sucherin" }
        },
        {
            name: { en: "Cedric Diggory", de: "Cedric Diggory" },
            info: { en: "The Hufflepuff Champion", de: "Der Hufflepuff-Champion" }
        },
        {
            name: { en: "Professor Sprout", de: "Professor Sprout" },
            info: { en: "The Head of Hufflepuff", de: "Die Hauslehrerin von Hufflepuff" }
        },
        {
            name: { en: "Professor Flitwick", de: "Professor Flitwick" },
            info: { en: "The Charms Master", de: "Der Zauberkunstmeister" }
        },
        {
            name: { en: "Professor McGonagall", de: "Professor McGonagall" },
            info: { en: "The Transfiguration Master", de: "Die Verwandlungsmeisterin" }
        },
        {
            name: { en: "Lucius Malfoy", de: "Lucius Malfoy" },
            info: { en: "The Death Eater Patriarch", de: "Der Todesser-Patriarch" }
        },
        {
            name: { en: "Dolores Umbridge", de: "Dolores Umbridge" },
            info: { en: "The Pink Terror", de: "Der rosa Terror" }
        },
        {
            name: { en: "Peter Pettigrew", de: "Peter Pettigrew" },
            info: { en: "Wormtail the Traitor", de: "Wurmschwanz der Verräter" }
        },
        {
            name: { en: "James Potter", de: "James Potter" },
            info: { en: "Harry's Father", de: "Harrys Vater" }
        },
        {
            name: { en: "Lily Potter", de: "Lily Potter" },
            info: { en: "Harry's Mother", de: "Harrys Mutter" }
        },
        {
            name: { en: "Gilderoy Lockhart", de: "Gilderoy Lockhart" },
            info: { en: "The Fraudulent Author", de: "Der betrügerische Autor" }
        },
        {
            name: { en: "Quirinus Quirrell", de: "Quirinus Quirrell" },
            info: { en: "The Two-Faced Professor", de: "Der zweigesichtige Professor" }
        },
        {
            name: { en: "Nearly Headless Nick", de: "Der Fast Kopflose Nick" },
            info: { en: "Gryffindor House Ghost", de: "Hausgeist von Gryffindor" }
        },
        {
            name: { en: "Hedwig", de: "Hedwig" },
            info: { en: "Harry's Snowy Owl", de: "Harrys Schneeeule" }
        },
        {
            name: { en: "Fawkes", de: "Fawkes" },
            info: { en: "Dumbledore's Phoenix", de: "Dumbledores Phönix" }
        },
        {
            name: { en: "Peeves", de: "Peeves" },
            info: { en: "The Poltergeist", de: "Der Poltergeist" }
        },
        {
            name: { en: "The Fat Lady", de: "Die Fette Dame" },
            info: { en: "Gryffindor Portrait Guard", de: "Gryffindor-Porträtwächterin" }
        },
        {
            name: { en: "Crookshanks", de: "Krummbein" },
            info: { en: "Hermione's Cat", de: "Hermines Katze" }
        }
    );

    // Add to newCharacters.medium
    newCharacters.medium.push(
        {
            name: { en: "Lavender Brown", de: "Lavender Brown" },
            info: { en: "Ron's Former Girlfriend", de: "Rons ehemalige Freundin" }
        },
        {
            name: { en: "Parvati Patil", de: "Parvati Patil" },
            info: { en: "The Gryffindor Twin", de: "Der Gryffindor-Zwilling" }
        },
        {
            name: { en: "Padma Patil", de: "Padma Patil" },
            info: { en: "The Ravenclaw Twin", de: "Der Ravenclaw-Zwilling" }
        },
        {
            name: { en: "Oliver Wood", de: "Oliver Wood" },
            info: { en: "The Quidditch Captain", de: "Der Quidditch-Kapitän" }
        },
        {
            name: { en: "Katie Bell", de: "Katie Bell" },
            info: { en: "The Gryffindor Chaser", de: "Die Gryffindor-Jägerin" }
        },
        {
            name: { en: "Angelina Johnson", de: "Angelina Johnson" },
            info: { en: "The Quidditch Team Captain", de: "Die Quidditch-Team-Kapitänin" }
        },
        {
            name: { en: "Lee Jordan", de: "Lee Jordan" },
            info: { en: "The Quidditch Commentator", de: "Der Quidditch-Kommentator" }
        },
        {
            name: { en: "Madam Hooch", de: "Madam Hooch" },
            info: { en: "The Flying Instructor", de: "Die Fluglehrerin" }
        },
        {
            name: { en: "Madam Pomfrey", de: "Madam Pomfrey" },
            info: { en: "The School Nurse", de: "Die Schulkrankenschwester" }
        },
        {
            name: { en: "Professor Slughorn", de: "Professor Slughorn" },
            info: { en: "The Potions Master", de: "Der Tränkemeister" }
        },
        {
            name: { en: "Professor Trelawney", de: "Professor Trelawney" },
            info: { en: "The Divination Teacher", de: "Die Wahrsagelehrerin" }
        },
        {
            name: { en: "Narcissa Malfoy", de: "Narzissa Malfoy" },
            info: { en: "Draco's Mother", de: "Dracos Mutter" }
        },
        {
            name: { en: "Viktor Krum", de: "Viktor Krum" },
            info: { en: "The Bulgarian Seeker", de: "Der bulgarische Sucher" }
        },
        {
            name: { en: "Cornelius Fudge", de: "Cornelius Fudge" },
            info: { en: "The Minister of Magic", de: "Der Zaubereiminister" }
        },
        {
            name: { en: "Kingsley Shacklebolt", de: "Kingsley Shacklebolt" },
            info: { en: "The Future Minister", de: "Der zukünftige Minister" }
        },
        {
            name: { en: "Mundungus Fletcher", de: "Mundungus Fletcher" },
            info: { en: "The Shady Order Member", de: "Das zwielichtige Ordensmitglied" }
        },
        {
            name: { en: "Alastor Moody", de: "Alastor Moody" },
            info: { en: "The Real Mad-Eye", de: "Der echte Mad-Eye" }
        },
        {
            name: { en: "Rufus Scrimgeour", de: "Rufus Scrimgeour" },
            info: { en: "The Wartime Minister", de: "Der Kriegsminister" }
        },
        {
            name: { en: "Rita Skeeter", de: "Rita Kimmkorn" },
            info: { en: "The Gossip Journalist", de: "Die Klatsch-Journalistin" }
        },
        {
            name: { en: "Aragog", de: "Aragog" },
            info: { en: "The Acromantula", de: "Die Acromantula" }
        }
    );

    // Add more characters here...
    // Continue with 40 more characters following the same pattern

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
                ...characters.hard,
                ...newCharacters.easy,
                ...newCharacters.medium,
                ...newCharacters.hard
            ];
        }
        return [...characters[difficulty], ...newCharacters[difficulty]];
    }

    function updateCharacterCount() {
        const count = getCharactersByDifficulty(currentDifficulty).length;
        const counterElement = document.querySelector('.counter');
        counterElement.textContent = `${translations[currentLanguage].counter} ${count}`;
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
            
            const name = typeof character.name === 'string' ? character.name : character.name[currentLanguage];
            const info = typeof character.info === 'string' ? character.info : character.info[currentLanguage];
            
            nameElement.textContent = name;
            infoElement.textContent = info;
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

            // Set initial count
            updateCharacterCount();
            updateLanguage(currentLanguage);

            // Update count when difficulty changes
            difficultySelect.addEventListener('change', (e) => {
                currentDifficulty = e.target.value;
                updateCharacterCount(); // This will now show the correct count for the selected difficulty
            });

            button.addEventListener('click', pickRandomCharacter);
            
            button.addEventListener('touchstart', function(e) {
                this.style.transform = 'scale(0.98)';
            }, { passive: true });

            button.addEventListener('touchend', function(e) {
                this.style.transform = 'scale(1)';
            }, { passive: true });

            // Set initial language button state
            updateLanguageButtons(currentLanguage);

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

    // Update the language button handling
    function updateLanguageButtons(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
})(); 