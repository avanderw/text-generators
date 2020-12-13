var nm1 = ["","","","","","h","b","c","d","dh","f","g","l","m","n","ph","s","sh","th","v","w"];
var nm2 = ["a","e","i","o","u","a","e","o","a","e","i","o","u","a","e","o","ea","ae","ia","ai","eo"];
var nm3 = ["b","b","f","f","ff","g","g","h","h","j","j","l","l","ll","m","m","mm","n","n","nn","r","r","s","s","ss","th","th","v","v","b","bh","bl","bs","br","f","ff","fl","fr","g","gh","gn","gl","h","hn","hl","hm","j","l","lf","ll","lt","lc","lb","ld","lm","ln","lr","lw","m","mm","mn","mr","n","nn","ns","nth","nt","nm","nf","nph","pr","phr","r","rl","rm","rn","s","sf","sh","sp","st","sw","ss","sn","sm","th","v"];
var nm4 = ["","","","","","f","h","l","m","n","r","s","th"];
var nm6 = ["Island","Enclave","Isle","Islet","Island","Isle"];
var nm7 = ["l'Île","l'Île","l'Îlot"];
var br = "";

function nameGen(type){
	var tp = type;
	var nm5 = ["Aeranas","Aerene","Aeria","Aeris","Aeros","Aerule","Albatross","Angel","Apex","Apogee","Ataraxia","Ataraxis","Atmos","Aura","Aurora","Avia","Avian","Avis","Azura","Azure","Azuris","Billow","Bliss","Borealis","Buoya","Bustard","Cassowary","Celes","Celeste","Cerulea","Cerulis","Cerulle","Chinook","Cirrostratus","Cirrus","Condor","Crane","Crow","Crown","Cuckoo","Cumulus","Dove","Eagle","Elysium","Empyre","Empyrea","Empyris","Falcon","Flamingo","Gale","Griffin","Gull","Halo","Halos","Harmony","Harpy","Hippogriff","Hummingbird","Imperos","Macaw","Mistral","Mistros","Murmus","Nebula","Nightingale","Nightowl","Obelisk","Owl","Ozone","Peacock","Pegasus","Pelican","Phoenix","Pigeon","Raven","Serenity","Solace","Sonas","Sonus","Sparrow","Spire","Stork","Storm","Stormy","Stratos","Stratus","Swan","Swift","Thunder","Toucan","Tranquility","Tropos","Tumul","Tumulus","Utopia","Valkyrie","Ventis","Vertex","Volance","Volantis","Volar","Volaris","Vortex","Vox","Voxis","Vulture","Windy","Zenith","Zephyr","Zephys","Zion"];
	var nm8 = ["d'Élysée","d'Éros","d'Aéranas","d'Aerene","d'Aeria","d'Aeris","d'Aeros","d'Aerule","d'Aigle","d'Albatros","d'Ange","d'Apex","d'Apogée","d'Ara","d'Ataraxie","d'Ataraxis","d'Atmos","d'Aura","d'Aurore","d'Avia","d'Aviaire","d'Avis","d'Azur","d'Azura","d'Azuris","d'Empyra","d'Empyre","d'Empyris","d'Harmonie","d'Hippogriffe","d'Imperos","d'Orage","d'Outarde","d'Ozone","d'Utopie","de Béatitude","de Boréalis","de Céles","de Casoar","de Celeste","de Cerule","de Cerulis","de Cerulle","de Chouette","de Cigogne","de Cime","de Cirro-Stratus","de Cirrus","de Colibri","de Colombe","de Condor","de Corbeau","de Coucou","de Couronne","de Cumulus","de Cygne","de Félicité","de Faucon","de Flèche","de Flamant","de Flottabilité","de Griffon","de Grue","de Halo","de Halos","de Harpie","de Hibou","de Martinet","de Mistral","de Mistros","de Moineau","de Mouette","de Murmure","de Murmus","de Nébuleuse","de Nimbe","de Nuages","de Pégase","de Pélican","de Paon","de Passereaux","de Phénix","de Pigeon","de Réconfort","de Rossignol","de Sérénité","de Sion","de Sommet","de Sonas","de Sonus","de Stratos","de Stratus","de Tempête","de Tonnerre","de Toucan","de Tranquillité","de Tropos","de Tumul","de Tumulus","de Valkyrie","de Vautour","de Vent","de Ventis","de Volance","de Volantis","de Volar","de Volaris","de Vortex","de Vox","de Voxis","de Zénith","de Zéphyr","de Zéphys"];

	for (i = 0; i < count; i++){
		if(i < 6){
			nameMas();
			while(namesTemp === ""){
				namesMas();
			}
			if(tp === 1){
				rnd7 = Math.random() * nm7.length | 0;
				if(rnd < 6){
					dtp = " d'";
				}else{
					dtp = " de ";
				}
				names = nm7[rnd7] + dtp + namesTemp.charAt(0).toUpperCase() + namesTemp.slice(1);
			}else{
				rnd7 = Math.random() * nm6.length | 0;
				names = namesTemp.charAt(0).toUpperCase() + namesTemp.slice(1) + " " + nm6[rnd7];
			}
		}else{
			if(tp === 1){
				rnd = Math.random() * nm8.length | 0;
				rnd7 = Math.random() * nm7.length | 0;
				nm5.splice(rnd, 1);
				names = nm7[rnd7] + " " + nm8[rnd];
			}else{
				rnd = Math.random() * nm5.length | 0;
				rnd7 = Math.random() * nm6.length | 0;
				nm5.splice(rnd, 1);
				names = nm5[rnd] + " " + nm6[rnd7];
			}
		}
		print(names);
	}
}

function nameMas(){
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm2.length | 0;
	rnd5 = Math.random() * nm4.length | 0;
	if(i < 3){
		namesTemp = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
	}else if(i < 6){
		rnd8 = Math.random() * nm3.length | 0;
		rnd9 = Math.random() * nm2.length | 0;
		namesTemp = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd8] + nm2[rnd9] + nm4[rnd5];
	}
	testSwear(namesTemp);
}

var swear=["alah","allah","anal","anilingus","anus","apeshit","arse","arsehole","ass","asshole","assmunch","autoerotic","babeland","balls","ballsack","bangbros","bareback","barenaked","bastard","bastardo","bastinado","beaner","beaners","bestiality","biatch","bigtits","bimbos","birdlock","bitch","bitches","black","bloody","blowjob","blumpkin","bollock","bollocks","bollok","bondage","boner","boob","boobs","bugger","bukkake","bulldyke","bullshit","bum","bunghole","busty","butt","buttcheeks","butthole","buttplug","cameltoe","camgirl","camslut","camwhore","clit","clitbeard","clitoris","cloaka","clusterfuck","cock","cocks","coon","coons","cornhole","crap","creampie","cum","cumming","cunt","damn","darkie","daterape","deepthroat","dick","dildo","doggy","dolcett","domination","dominatrix","dommes","dryhump","dyke","ecchi","ejaculation","erotic","erotism","escort","eunuch","fag","fagget","faggit","faggot","faggut","faghet","faghit","faghot","faghut","fecal","feck","felch","felching","fellate","fellatio","feltch","femdom","fetish","figging","fingerbang","fingering","fisting","flange","footjob","frotting","fuck","fuckin","fucking","fucktard","fucktards","fudgepacker","futanari","gangbang","gaysex","genitals","goatcx","goatse","god","goddamn","gokkun","goodpoop","googirl","goregasm","grope","groupsex","guro","handjob","hardcore","hell","hentai","homo","homoerotic","honkey","hooker","humping","incest","intercourse","jackoff","jailbait","jerk","jerkoff","jigaboo","jiggaboo","jiggerboo","jizz","juggs","kike","kinbaku","kinkster","kinky","knobbing","knobend","kum","labia","lmao","lmfao","lolita","masturbate","milf","muff","nambla","nawashi","neeger","neegger","negger","negro","neonazi","nieger","niegger","niga","nigar","niger","nigga","niggar","niggas","niggaz","nigger","nigges","niggir","niggis","niggor","niggos","niggur","niggus","nigher","nighes","nignog","nigra","nimphomania","nipple","nipples","nude","nudity","nympho","nymphomania","obama","octopussy","omg","omorashi","oral","orgasm","orgy","paedo","paki","panties","panty","pedo","pegging","penis","pis","piss","pissing","pisspig","playboy","ponyplay","poof","poon","poontang","poop","porn","porno","prick","pube","pubes","punany","pussy","queaf","queef","queer","quim","raghead","rape","raping","rapist","rectum","rimjob","rimming","sadism","santorum","scat","schlong","scissoring","scrotum","semen","sex","sexo","sexy","shaved","shemale","shibari","shit","shitblimp","shitty","shota","shrimping","skeet","slanteye","slut","smegma","smut","snatch","sodomize","sodomy","spic","splooge","spooge","spunk","strapon","suck","sucks","suicide","sultry","swastika","swinger","threesome","throating","tiits","tit","tits","titties","titty","topless","tosser","towelhead","trani","tranie","tranni","trannie","tranny","trany","trennie","tubgirl","turd","tushy","twat","twink","twinkie","upskirt","urethra","urophilia","vagina","vibrator","voyeur","vulva","wank","wetback","whore","wtf","yaoi","yiffy"];var testSwear=function(nm){var name=nm.toLowerCase();if(swear.indexOf(name)===-1){return name;}else{nMs="";}};

nameGen();