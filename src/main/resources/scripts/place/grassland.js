load("classpath:scripts/utility/capitalize.js");

var names1 = [
  "White",
  "Black",
  "Brown",
  "Gray",
  "Majestic",
  "Pygmy",
  "Little",
  "Giant",
  "Northern",
  "Southern",
  "Eastern",
  "Western",
  "Greater",
  "Lesser",
  "Masked",
  "Grass",
  "Water",
  "Common",
  "Mountain",
  "Prairie",
  "Grassland",
  "Taiga",
  "Tundra",
  "Savanna",
  "Alpine",
  "Collared",
  "Grand",
  "Pacific",
  "Oriental",
  "Spotted",
  "Speckled",
  "Striped",
  "Dotted",
  "Rusty",
  "Maned",
  "Cloud",
  "Long-tailed",
  "Short-tailed",
  "Crowned",
  "Golden",
  "Imperial",
  "Royal",
  "Noble",
  "Laughing",
  "Lined",
  "Banded",
  "Snow",
  "Ivory",
  "Ebony",
  "Wild",
  "Reagal",
];
var names2 = [
  "Aardvark",
  "Alpaca",
  "Anaconda",
  "Ant",
  "Anteater",
  "Antelope",
  "Armadillo",
  "Baboon",
  "Badger",
  "Bandicoot",
  "Bat",
  "Bear",
  "Bee",
  "Beetle",
  "Bird",
  "Bison",
  "Boa",
  "Buffalo",
  "Butterfly",
  "Buzzard",
  "Caterpillar",
  "Chipmunk",
  "Cobra",
  "Cougar",
  "Coyote",
  "Crane",
  "Cricket",
  "Crow",
  "Deer",
  "Dingo",
  "Dove",
  "Duck",
  "Eagle",
  "Elephant",
  "Elk",
  "Fox",
  "Frog",
  "Gazelle",
  "Grasshopper",
  "Groundhog",
  "Hawk",
  "Hedgehog",
  "Hyena",
  "Jackal",
  "Kangaroo",
  "Ladybug",
  "Lion",
  "Meerkat",
  "Mouse",
  "Rabbit",
  "Rat",
  "Raven",
  "Rhino",
  "Snake",
  "Toad",
  "Tortoise",
  "Warthog",
  "Wasp",
  "Weasel",
  "Wild Dog",
];

var names3 = [
  "Grasslands",
  "Grassland",
  "Savanna",
  "Pastures",
  "Plains",
  "Prairie",
  "Steppe",
  "Range",
  "Fields",
  "Meadow",
  "Gardens",
  "Terrain",
  "Territory",
  "Expanse",
  "Plateau",
  "Valley",
];
var names4 = [
  "Abandoned",
  "Awesome",
  "Beautiful",
  "Big",
  "Blooming",
  "Blossoming",
  "Broken",
  "Calm",
  "Colossal",
  "Creepy",
  "Curious",
  "Deep",
  "Deserted",
  "Detailed",
  "Dramatic",
  "Dry",
  "Earthy",
  "Elegant",
  "Enchanted",
  "Exclusive",
  "Faint",
  "Fancy",
  "Free",
  "Gentle",
  "Giant",
  "Gigantic",
  "Glistening",
  "Glorious",
  "Gorgeous",
  "Green",
  "Groovy",
  "Healthy",
  "Heavenly",
  "High",
  "Hissing",
  "Hollow",
  "Huge",
  "Incredible",
  "Jaded",
  "Jagged",
  "Light",
  "Little",
  "Lively",
  "Lonely",
  "Luscious",
  "Lush",
  "Magical",
  "Magnificent",
  "Majestic",
  "Mammoth",
  "Marvelous",
  "Massive",
  "Mellow",
  "Mighty",
  "Misty",
  "Moldy",
  "Mossy",
  "Mysterious",
  "Narrow",
  "Old",
  "Panoramic",
  "Parallel",
  "Peaceful",
  "Plain",
  "Pleasant",
  "Precious",
  "Private",
  "Quiet",
  "Rainy",
  "Reflecting",
  "Romantic",
  "Rotten",
  "Round",
  "Royal",
  "Sacred",
  "Scattered",
  "Secret",
  "Shimmering",
  "Sickly",
  "Simple",
  "Special",
  "Spectacular",
  "Spiritual",
  "Stormy",
  "Teeny",
  "Terrible",
  "Terrific",
  "Thick",
  "Thin",
  "Thundering",
  "Tiny",
  "Unknown",
  "Violent",
  "Violet",
  "Wandering",
  "Whimsical",
  "Whispering",
  "Wicked",
  "Wild",
  "Windy",
  "Young",
];

var nm7 = [
  "Ab",
  "Al",
  "Ala",
  "Alber",
  "Aller",
  "Am",
  "Ames",
  "An",
  "Anti",
  "Apple",
  "Ar",
  "Arbor",
  "Arling",
  "Arn",
  "As",
  "Ash",
  "Atha",
  "Ati",
  "Attle",
  "Autumn",
  "Avon",
  "Bain",
  "Bal",
  "Ban",
  "Bar",
  "Bark",
  "Barn",
  "Barr",
  "Barring",
  "Bas",
  "Battle",
  "Bax",
  "Bay",
  "Beacon",
  "Beau",
  "Beaver",
  "Bed",
  "Bedding",
  "Bell",
  "Belle",
  "Ben",
  "Bent",
  "Ber",
  "Beres",
  "Berk",
  "Berthier",
  "Bever",
  "Bex",
  "Bien",
  "Big",
  "Bir",
  "Birming",
  "Black",
  "Blain",
  "Bloom",
  "Blooms",
  "Blythe",
  "Bois",
  "Bol",
  "Bona",
  "Booth",
  "Bord",
  "Bos",
  "Boucher",
  "Box",
  "Brace",
  "Brad",
  "Breden",
  "Brent",
  "Bri",
  "Bridge",
  "Brigh",
  "Bright",
  "Brim",
  "Bris",
  "Bro",
  "Broad",
  "Brom",
  "Brook",
  "Bros",
  "Brown",
  "Bruder",
  "Buch",
  "Bucking",
  "Bur",
  "Burs",
  "Bux",
  "Cal",
  "Cale",
  "Cam",
  "Camp",
  "Can",
  "Cano",
  "Canter",
  "Car",
  "Cara",
  "Carbo",
  "Card",
  "Carig",
  "Carl",
  "Carle",
  "Carn",
  "Cart",
  "Cas",
  "Cau",
  "Causa",
  "Cha",
  "Cham",
  "Chan",
  "Chat",
  "Chats",
  "Chel",
  "Chelms",
  "Ches",
  "Chester",
  "Chi",
  "Chibou",
  "Chil",
  "Church",
  "Clare",
  "Claren",
  "Cler",
  "Clif",
  "Cliff",
  "Clin",
  "Co",
  "Coal",
  "Coati",
  "Coch",
  "Col",
  "Cole",
  "Coli",
  "Com",
  "Con",
  "Cor",
  "Corn",
  "Coro",
  "Cottle",
  "Coven",
  "Cowan",
  "Cres",
  "Cross",
  "Croy",
  "Cud",
  "Cumber",
  "Dal",
  "Dan",
  "Dar",
  "Dart",
  "Davel",
  "Day",
  "De",
  "Dead",
  "Ded",
  "Del",
  "Delis",
  "Delor",
  "Der",
  "Dig",
  "Dis",
  "Do",
  "Dol",
  "Donna",
  "Dor",
  "Dray",
  "Drum",
  "Dun",
  "Dupar",
  "Dur",
  "East",
  "Eato",
  "Eck",
  "Effing",
  "El",
  "Elling",
  "Ellis",
  "Elm",
  "Em",
  "Emer",
  "Ems",
  "En",
  "Engle",
  "Ep",
  "Es",
  "Ester",
  "Ever",
  "Ex",
  "Fair",
  "Fal",
  "Fall",
  "Farm",
  "Farming",
  "Farn",
  "Fer",
  "Flat",
  "Flem",
  "For",
  "Ford",
  "Framing",
  "Fran",
  "Free",
  "Gal",
  "Gallan",
  "Gam",
  "Gan",
  "Gana",
  "Gar",
  "Gati",
  "Gaul",
  "Gib",
  "Gil",
  "Glad",
  "Glas",
  "Glen",
  "Glou",
  "Glover",
  "Go",
  "Gode",
  "Gol",
  "Grace",
  "Graf",
  "Gran",
  "Grand",
  "Grave",
  "Gravel",
  "Graven",
  "Green",
  "Gren",
  "Gret",
  "Grim",
  "Gro",
  "Guil",
  "Had",
  "Hal",
  "Hali",
  "Ham",
  "Hamp",
  "Han",
  "Har",
  "Harp",
  "Hart",
  "Has",
  "Hast",
  "Hat",
  "Haver",
  "Heb",
  "Hep",
  "Here",
  "Hermi",
  "Hf",
  "Hil",
  "Hill",
  "Hills",
  "Hin",
  "Hing",
  "Holy",
  "Hors",
  "Hud",
  "Hul",
  "Hum",
  "Hunt",
  "Hunting",
  "Inger",
  "Innis",
  "Iro",
  "Irri",
  "Isling",
  "Itu",
  "Jol",
  "Kam",
  "Kapus",
  "Kear",
  "Keel",
  "Kensing",
  "Kerro",
  "Killing",
  "Kinder",
  "Kings",
  "Kini",
  "Kip",
  "Kir",
  "Kirk",
  "La",
  "Lam",
  "Lama",
  "Lan",
  "Lang",
  "Lani",
  "Lash",
  "Latch",
  "Laval",
  "Le",
  "Lea",
  "Leaming",
  "Lee",
  "Lei",
  "Lem",
  "Leo",
  "Liming",
  "Lin",
  "Litch",
  "Liver",
  "Locke",
  "Lon",
  "Lour",
  "Lum",
  "Lunen",
  "Luse",
  "Maca",
  "Mag",
  "Maho",
  "Maid",
  "Mal",
  "Malar",
  "Man",
  "Mani",
  "Mans",
  "Mar",
  "Mara",
  "Marl",
  "Mata",
  "May",
  "Meli",
  "Men",
  "Mens",
  "Meri",
  "Mid",
  "Mida",
  "Middle",
  "Middles",
  "Mil",
  "Mill",
  "Miller",
  "Mini",
  "Minne",
  "Monk",
  "Mont",
  "Moo",
  "Morin",
  "Mul",
  "Mun",
  "Mus",
  "Nai",
  "Nan",
  "Nee",
  "Neu",
  "New",
  "Newing",
  "Nia",
  "Nico",
  "Nipa",
  "Niver",
  "Noko",
  "Nor",
  "North",
  "Not",
  "Notting",
  "Oak",
  "Oge",
  "Oko",
  "Ono",
  "Oro",
  "Oso",
  "Otter",
  "Out",
  "Ox",
  "Pac",
  "Par",
  "Para",
  "Parr",
  "Pas",
  "Pel",
  "Pen",
  "Pene",
  "Peta",
  "Petro",
  "Pic",
  "Pil",
  "Pin",
  "Pla",
  "Plai",
  "Plain",
  "Ply",
  "Plym",
  "Pohe",
  "Pon",
  "Pono",
  "Port",
  "Ports",
  "Pres",
  "Pro",
  "Put",
  "Ra",
  "Rad",
  "Ray",
  "Read",
  "Reid",
  "Repen",
  "Rich",
  "Ridge",
  "Rim",
  "Rimou",
  "Ring",
  "River",
  "Ro",
  "Rob",
  "Roch",
  "Rock",
  "Rocking",
  "Rom",
  "Ros",
  "Rose",
  "Ross",
  "Rothe",
  "Row",
  "Rox",
  "Rug",
  "Rut",
  "Sag",
  "Sal",
  "Salis",
  "San",
  "Sand",
  "Sau",
  "Sava",
  "Scar",
  "Scars",
  "Sedge",
  "Senne",
  "Shau",
  "Shaw",
  "She",
  "Shef",
  "Shel",
  "Shell",
  "Sher",
  "Ship",
  "Shrew",
  "Shrews",
  "Sin",
  "Smi",
  "Smith",
  "Smiths",
  "Somer",
  "South",
  "Spring",
  "Staf",
  "Stam",
  "Stan",
  "Stel",
  "Stet",
  "Stock",
  "Stoke",
  "Stone",
  "Stough",
  "Straf",
  "Strat",
  "Sud",
  "Suf",
  "Summer",
  "Sun",
  "Sunder",
  "Sur",
  "Sus",
  "Sut",
  "Tam",
  "Taun",
  "Tecum",
  "Temis",
  "Temple",
  "Ter",
  "Terre",
  "Terren",
  "Thes",
  "Thessa",
  "Thet",
  "Thur",
  "Till",
  "Tis",
  "Tiver",
  "Tol",
  "Tor",
  "Torring",
  "Tray",
  "Tre",
  "Tren",
  "Tri",
  "Tro",
  "Tun",
  "Tur",
  "Twil",
  "Val",
  "Varen",
  "Vaux",
  "Vegre",
  "Ven",
  "Vent",
  "Ver",
  "Vir",
  "Von",
  "Vot",
  "Wa",
  "Wade",
  "Waka",
  "Wake",
  "Wal",
  "Wall",
  "Walling",
  "Wals",
  "Wape",
  "War",
  "Ware",
  "Wasa",
  "Water",
  "Way",
  "Welling",
  "Wes",
  "West",
  "Wey",
  "Whit",
  "White",
  "Wick",
  "Wil",
  "Willing",
  "Win",
  "Wind",
  "Winder",
  "Winter",
  "Wit",
  "Wolf",
  "Wood",
  "Wor",
  "Wrent",
  "Wyn",
  "Yar",
  "York",
];
var nm8 = [
  "balt",
  "bel",
  "berg",
  "berry",
  "biens",
  "bo",
  "boia",
  "bonear",
  "borg",
  "boro",
  "borough",
  "bour",
  "bourg",
  "briand",
  "bridge",
  "bron",
  "brook",
  "burg",
  "burn",
  "burns",
  "bury",
  "by",
  "cam",
  "cana",
  "carres",
  "caster",
  "castle",
  "cester",
  "chester",
  "chill",
  "cier",
  "cola",
  "coln",
  "cona",
  "cook",
  "cord",
  "couche",
  "cour",
  "croft",
  "dale",
  "dare",
  "de",
  "deen",
  "den",
  "der",
  "des",
  "diac",
  "ding",
  "don",
  "dosa",
  "dover",
  "down",
  "dows",
  "duff",
  "durn",
  "dwell",
  "fail",
  "fair",
  "fait",
  "fell",
  "field",
  "fil",
  "folk",
  "ford",
  "forte",
  "gamau",
  "gami",
  "gan",
  "gar",
  "gate",
  "geo",
  "gonie",
  "gough",
  "grave",
  "guay",
  "gue",
  "gueuil",
  "gus",
  "ham",
  "hampton",
  "hazy",
  "head",
  "heim",
  "heller",
  "her",
  "hill",
  "holm",
  "hurst",
  "isle",
  "jour",
  "kasing",
  "lam",
  "lams",
  "lan",
  "land",
  "lants",
  "leche",
  "lem",
  "let",
  "ley",
  "liers",
  "lin",
  "line",
  "linet",
  "ling",
  "lis",
  "lisle",
  "lita",
  "lodge",
  "low",
  "ly",
  "mack",
  "magne",
  "man",
  "mar",
  "mark",
  "meda",
  "meny",
  "mer",
  "mere",
  "meuse",
  "ming",
  "minster",
  "miota",
  "mis",
  "mond",
  "mont",
  "more",
  "mouth",
  "na",
  "nach",
  "nan",
  "near",
  "neau",
  "net",
  "ney",
  "nia",
  "nigan",
  "ning",
  "nola",
  "noque",
  "nora",
  "par",
  "pawa",
  "pids",
  "pon",
  "pond",
  "pool",
  "port",
  "quet",
  "raine",
  "ram",
  "rane",
  "rath",
  "ree",
  "rey",
  "rial",
  "rich",
  "riden",
  "rior",
  "ris",
  "rock",
  "ronto",
  "rood",
  "rose",
  "roy",
  "ry",
  "sack",
  "sano",
  "sard",
  "say",
  "sby",
  "sea",
  "send",
  "set",
  "sevain",
  "shall",
  "shaw",
  "shire",
  "side",
  "soll",
  "somin",
  "son",
  "sonee",
  "sons",
  "sor",
  "stable",
  "stall",
  "stead",
  "ster",
  "stino",
  "ston",
  "stone",
  "swell",
  "tague",
  "tane",
  "tara",
  "tawa",
  "ter",
  "terel",
  "terre",
  "tham",
  "thon",
  "to",
  "tois",
  "ton",
  "tona",
  "tonas",
  "tos",
  "tou",
  "town",
  "trie",
  "try",
  "val",
  "ver",
  "vern",
  "view",
  "ville",
  "vista",
  "vons",
  "waki",
  "wall",
  "ware",
  "water",
  "way",
  "we",
  "well",
  "wich",
  "wick",
  "win",
  "wood",
  "worth",
];

var nm1b = [
  "Ébènes",
  "à Collier",
  "à Crinière",
  "à Pois",
  "à Queue Courte",
  "à Queue Longue",
  "à Raies",
  "Alpestres",
  "Alpins",
  "Australs",
  "Blancs",
  "Boréales",
  "Bruns",
  "Collés",
  "Communs",
  "Couronnés",
  "Dorés",
  "Doublés",
  "Géants",
  "Gris",
  "Impériaux",
  "Inférieurs",
  "Majestueux",
  "Masqués",
  "Mineurs",
  "Mouchetés",
  "Neigeux",
  "Nobles",
  "Noirs",
  "Occidentals",
  "Orientals",
  "Pacifiques",
  "Pointés",
  "Pygmées",
  "Rayés",
  "Rouillés",
  "Royals",
  "Sauvages",
  "Simples",
  "Tachetés",
  "d'Eau",
  "d'Herbage",
  "d'Herbe",
  "d'Ivoire",
  "d'Or",
  "de Montagne",
  "de Nuages",
  "de Pâturage",
  "de Plaine",
  "de Prairie",
  "de Savane",
  "de Taïga",
  "de Toundra",
  "de l'Est",
  "de l'Ouest",
  "des Marais",
  "des Neiges",
  "des Rivières",
  "du Nord",
  "du Sud",
];
var nm1c = [
  "Ébènes",
  "à Collier",
  "à Crinière",
  "à Pois",
  "à Queue Courte",
  "à Queue Longue",
  "à Raies",
  "Alpestres",
  "Alpines",
  "Australes",
  "Blanches",
  "Boréales",
  "Brunes",
  "Collées",
  "Communes",
  "Couronnées",
  "Dorées",
  "Doublées",
  "Géantes",
  "Grises",
  "Impériales",
  "Inférieures",
  "Majestueuses",
  "Masquées",
  "Mineures",
  "Mouchetées",
  "Neigeuses",
  "Nobles",
  "Noires",
  "Occidentales",
  "Orientales",
  "Pacifiques",
  "Pointées",
  "Pygmées",
  "Rayées",
  "Rouillées",
  "Royales",
  "Sauvages",
  "Simples",
  "Tachetées",
  "d'Eau",
  "d'Herbage",
  "d'Herbe",
  "d'Ivoire",
  "d'Or",
  "de Montagne",
  "de Nuages",
  "de Pâturage",
  "de Plaine",
  "de Prairie",
  "de Savane",
  "de Taïga",
  "de Toundra",
  "de l'Est",
  "de l'Ouest",
  "des Marais",
  "des Neiges",
  "des Rivières",
  "du Nord",
  "du Sud",
];
var nm2 = [
  "Abeilles",
  "Antilopes",
  "Belettes",
  "Bisons",
  "Buses",
  "Chauve-Souris",
  "Chenilles",
  "Coccinelles",
  "Colombes",
  "Fouines",
  "Fourmis",
  "Gazelles",
  "Grenouilles",
  "Grues",
  "Guêpes",
  "Hyènes",
  "Marmottes",
  "Sauterelles",
  "Souris",
  "Tortues",
  "Éléphants",
  "Aigles",
  "Alpagas",
  "Anacondas",
  "Babouins",
  "Bandicoots",
  "Blaireaux",
  "Boas",
  "Buffles",
  "Canards",
  "Cerfs",
  "Chacals",
  "Cobras",
  "Cochons de Terre",
  "Coléoptères",
  "Corbeaux",
  "Coyotes",
  "Crapauds",
  "Criquets",
  "Dingos",
  "Faucons",
  "Fourmiliers",
  "Hérissons",
  "Kangourous",
  "Lapins",
  "Lions",
  "Oiseaux",
  "Ours",
  "Papillons",
  "Phacochères",
  "Pigeons",
  "Pumas",
  "Rats",
  "Renards",
  "Rhinocéros",
  "Scarabées",
  "Serpents",
  "Suricates",
  "Tatous",
  "Wapitis",
];
var nm3 = [
  "la Plaine",
  "la Prairie",
  "la Savane",
  "la Steppe",
  "la Vallée",
  "les Plaines",
  "les Prairies",
  "les Savanes",
  "les Steppes",
  "les Vallées",
  "le Champ",
  "le Domaine",
  "le Herbage",
  "le Jardin",
  "le Pâturage",
  "le Terrain",
  "le Territoire",
  "les Champs",
  "les Domaines",
  "les Herbages",
  "les Jardins",
  "les Pâturages",
  "les Terrains",
  "les Territoires",
];
var nm4b = [
  "Élégant",
  "Émeraude",
  "Énorme",
  "Épais",
  "Épanoui",
  "Étroit",
  "Abandonné",
  "Agréable",
  "Ancien",
  "Brisé",
  "Brumeux",
  "Céleste",
  "Calme",
  "Capricieux",
  "Chatoyant",
  "Chuchotante",
  "Creux",
  "Curieux",
  "Déchiqueté",
  "Déserté",
  "Dispersé",
  "Divin",
  "Doux",
  "Dramatique",
  "Enchanté",
  "Errant",
  "Exclusif",
  "Extraordinaire",
  "Fantaisie",
  "Fantastique",
  "Fatigué",
  "Fertile",
  "Fleuri",
  "Florissant",
  "Géant",
  "Gentil",
  "Gigantesque",
  "Glorieux",
  "Gracieux",
  "Imposant",
  "Impressionnante",
  "Inconnu",
  "Incroyable",
  "Isolé",
  "Joli",
  "Libre",
  "Lumineux",
  "Luxuriant",
  "Méchant",
  "Magique",
  "Magnifique",
  "Majestueux",
  "Massif",
  "Merveilleux",
  "Mince",
  "Miniscule",
  "Moelleux",
  "Moisi",
  "Moussu",
  "Mystérieux",
  "Orageux",
  "Ordinaire",
  "Pâle",
  "Paisible",
  "Panoramique",
  "Paradisiaque",
  "Parallèle",
  "Plaisant",
  "Pluvieux",
  "Précieux",
  "Privé",
  "Profond",
  "Puissant",
  "Pygmée",
  "Réfléchissant",
  "Retentissant",
  "Robuste",
  "Romantique",
  "Rond",
  "Ronflant",
  "Séduisant",
  "Sacré",
  "Saint",
  "Sauvage",
  "Sec",
  "Secret",
  "Sensationnel",
  "Sifflant",
  "Silencieux",
  "Solitaire",
  "Spectaculaire",
  "Spirituel",
  "Splendide",
  "Succulent",
  "Terreux",
  "Terrible",
  "Terrifiant",
  "Tranquille",
  "Venteux",
  "Vert",
  "Violent",
  "Violet",
];
var nm4c = [
  "Élégante",
  "Émeraude",
  "Énorme",
  "Épaise",
  "Épanouie",
  "Étroite",
  "Abandonnée",
  "Agréable",
  "Ancienne",
  "Brisée",
  "Brumeuse",
  "Céleste",
  "Calme",
  "Capricieuse",
  "Chatoyante",
  "Chuchotante",
  "Creuse",
  "Curieuse",
  "Déchiquetée",
  "Désertée",
  "Dispersée",
  "Divine",
  "Douce",
  "Dramatique",
  "Enchantée",
  "Errante",
  "Exclusive",
  "Extraordinaire",
  "Fantaisie",
  "Fantastique",
  "Fatiguée",
  "Fertile",
  "Fleurie",
  "Florissante",
  "Géante",
  "Gentile",
  "Gigantesque",
  "Glorieuse",
  "Gracieuse",
  "Imposante",
  "Impressionnante",
  "Inconnue",
  "Incroyable",
  "Isolée",
  "Jolie",
  "Libre",
  "Lumineuse",
  "Luxuriante",
  "Méchante",
  "Magique",
  "Magnifique",
  "Majestueuse",
  "Massive",
  "Merveilleuse",
  "Mince",
  "Miniscule",
  "Moelleuse",
  "Moisie",
  "Moussue",
  "Mystérieuse",
  "Orageuse",
  "Ordinaire",
  "Pâle",
  "Paisible",
  "Panoramique",
  "Paradisiaque",
  "Parallèle",
  "Plaisante",
  "Pluvieuse",
  "Précieuse",
  "Privée",
  "Profonde",
  "Puissante",
  "Pygmée",
  "Réfléchissante",
  "Retentissante",
  "Robuste",
  "Romantique",
  "Ronde",
  "Ronflante",
  "Séduisante",
  "Sacrée",
  "Sainte",
  "Sauvage",
  "Sèche",
  "Secrète",
  "Sensationnelle",
  "Sifflante",
  "Silencieuse",
  "Solitaire",
  "Spectaculaire",
  "Spirituelle",
  "Splendide",
  "Succulente",
  "Terreuse",
  "Terrible",
  "Terrifiante",
  "Tranquille",
  "Venteuse",
  "Verte",
  "Violente",
  "Violette",
];

var nm25 = [
  "Épi",
  "Auri",
  "Avi",
  "Angou",
  "Anti",
  "Anto",
  "Or",
  "Alen",
  "Argen",
  "Auber",
  "Bel",
  "Besan",
  "Bor",
  "Bour",
  "Cam",
  "Char",
  "Cler",
  "Col",
  "Cour",
  "Mar",
  "Mont",
  "Nan",
  "Nar",
  "Sar",
  "Valen",
  "Vier",
  "Villeur",
  "Vin",
  "Ba",
  "Bé",
  "Beau",
  "Berge",
  "Bou",
  "Ca",
  "Carca",
  "Cha",
  "Champi",
  "Cho",
  "Cla",
  "Colo",
  "Di",
  "Dra",
  "Dragui",
  "Fré",
  "Genne",
  "Go",
  "Gre",
  "Hague",
  "Houi",
  "Leva",
  "Li",
  "Mai",
  "Mari",
  "Marti",
  "Mau",
  "Montau",
  "Péri",
  "Pa",
  "Perpi",
  "Plai",
  "Poi",
  "Pu",
  "Roa",
  "Rou",
  "Sau",
  "Soi",
  "Ta",
  "Tou",
  "Va",
  "Vitro",
];
var nm26 = [
  "gnan",
  "gnane",
  "gneux",
  "llac",
  "lles",
  "lliers",
  "llon",
  "lly",
  "nne",
  "nnet",
  "nnois",
  "ppe",
  "ppes",
  "rgues",
  "ssion",
  "ssis",
  "ssonne",
  "ssons",
  "ssy",
  "thune",
  "çon",
  "béliard",
  "bagne",
  "beuge",
  "bonne",
  "ciennes",
  "court",
  "fort",
  "gny",
  "gues",
  "gueux",
  "lès",
  "lême",
  "let",
  "limar",
  "logne",
  "lon",
  "luçon",
  "luire",
  "lun",
  "mans",
  "mart",
  "masse",
  "miers",
  "momble",
  "mont",
  "mur",
  "nau",
  "nesse",
  "nin",
  "noît",
  "rac",
  "rault",
  "ris",
  "roux",
  "sart",
  "seau",
  "sier",
  "sir",
  "teaux",
  "toise",
  "tou",
  "veil",
  "vers",
  "ves",
  "ville",
  "vin",
  "yonne",
  "zieu",
  "zon",
];
var nm30 = [];

function nameGen(type) {
  var tp = type;

  for (i = 0; i < count; i++) {
    if (tp === 1) {
      rnd = (Math.random() * nm3.length) | 0;
      if (i < count * 0.4) {
        rnd2 = (Math.random() * nm2.length) | 0;
        rnd3 = (Math.random() * nm1b.length) | 0;
        if (rnd2 < 20) {
          names = nm3[rnd] + " aux " + nm2[rnd2] + " " + nm1c[rnd3];
        } else {
          names = nm3[rnd] + " aux " + nm2[rnd2] + " " + nm1b[rnd3];
        }
      } else if (i < count * 0.7) {
        rnd2 = (Math.random() * nm4b.length) | 0;
        if (rnd < 10) {
          if (rnd > 4) {
            plur = nm4c[rnd2].charAt(nm4c[rnd2].length - 1);
            if (plur === "s" || plur === "x") {
              names = nm3[rnd] + " " + nm4c[rnd2];
            } else {
              names = nm3[rnd] + " " + nm4c[rnd2] + "s";
            }
          } else {
            names = nm3[rnd] + " " + nm4c[rnd2];
          }
        } else {
          if (rnd > 16) {
            plur = nm4b[rnd2].charAt(nm4b[rnd2].length - 1);
            if (plur === "s" || plur === "x") {
              names = nm3[rnd] + " " + nm4b[rnd2];
            } else {
              names = nm3[rnd] + " " + nm4b[rnd2] + "s";
            }
          } else {
            names = nm3[rnd] + " " + nm4b[rnd2];
          }
        }
      } else {
        rnd0 = (Math.random() * nm25.length) | 0;
        rnd2 = (Math.random() * nm26.length) | 0;
        if (rnd0 > 5 && rnd0 < 28) {
          while (rnd2 < 20) {
            rnd2 = (Math.random() * nm26.length) | 0;
          }
        }
        if (rnd0 < 10) {
          nm30 = ["d'", "de l'"];
        } else {
          plur = nm26[rnd2].charAt(nm26[rnd2].length - 1);
          nTp = (Math.random() * 10) | 0;
          if (nTp < 6 && plur === "s") {
            nm30 = ["des "];
          } else {
            nm30 = ["de ", "du ", "de la "];
          }
        }
        rnd4 = (Math.random() * nm30.length) | 0;
        names = nm3[rnd] + " " + nm30[rnd4] + nm25[rnd0] + nm26[rnd2];
      }
    } else {
      rnd2 = (Math.random() * names3.length) | 0;
      if (i < count * 0.4) {
        rnd0 = (Math.random() * names1.length) | 0;
        rnd1 = (Math.random() * names2.length) | 0;
        names = names1[rnd0] + " " + names2[rnd1] + " " + names3[rnd2];
      } else if (i < count * 0.7) {
        rnd1 = (Math.random() * names4.length) | 0;
        names = names4[rnd1] + " " + names3[rnd2];
      } else {
        rnd = (Math.random() * nm7.length) | 0;
        rnd1 = (Math.random() * nm8.length) | 0;
        names = nm7[rnd] + nm8[rnd1] + " " + names3[rnd2];
      }
    }
    print(capitalize(names));
  }
}
