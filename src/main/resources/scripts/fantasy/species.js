load('classpath:scripts/utility/capitalize.js');
load('classpath:scripts/utility/swear.js');

var nm1 = ["a","e","o","i","u"];
var nm2 = ["b","br","bh","c","ch","d","dr","g","gr","gn","h","k","kh","kr","l","ll","m","n","ph","q","qh","r","s","sh","str","st","v","wr","y","z","","","",""];
var nm3 = ["a","e","o","i","u","a","e","o","i","u","a","e","o","i","u","a","e","o","i","u","ai","ea","eo","ia","ea"];
var nm4 = ["c","c","cc","ch","d","d","l","ll","l","ll","m","m","mn","n","n","nn","nn","nk","r","r","rr","rs","rv","rn","rt","s","s","ss","ss","sh","t","t","tt","th","th","v","v","x","x","z","z"];
var nm7 = ["","","","","","","","","","c","d","g","k","l","m","n","r","s","t","x"];
var nm8 = ["ampal","ander","bat","bil","bit","boon","cean","ceous","chian","con","coon","dae","der","dian","dillo","din","dine","esse","gale","gan","gers","gian","go","guar","guine","hog","idae","ilae","inae","key","lae","lea","leon","lese","lian","lid","lies","line","lopes","mian","mite","mon","moth","nac","nae","nan","ne","nean","nee","nes","nesh","nian","nin","nine","nit","no","noid","nsian","pal","pard","phan","phin","phines","pian","pinae","pir","pus","quit","quito","rant","ret","rian","rid","rine","ris","ron","ross","rot","rus","sant","sier","sin","ster","sum","tan","te","teran","ther","thious","thyes","tid","tzal","ver","ves","vese","vian","vin","vine"];

function nameGen(){
	for(i = 0; i < count; i++){
		genName();
		while(nMs === ""){
			genName();
		}
		print(capitalize(nMs));
	}
}

function genName(){
	rnd2 = Math.random() * nm2.length | 0;
	rnd7 = Math.random() * nm8.length | 0;
	if(i < count * .5){
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm7.length | 0;
		nMs = nm2[rnd2] + nm3[rnd3] + nm7[rnd4] + nm8[rnd7];
	}else{
		rnd = Math.random() * nm1.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		rnd6 = Math.random() * nm3.length | 0;
		nMs = nm2[rnd2] + nm1[rnd] + nm4[rnd5] + nm3[rnd6] + nm8[rnd7];
	}
	testSwear(nMs);
}