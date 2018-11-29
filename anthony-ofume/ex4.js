justIn = document.querySelectorAll('li >a >h3');
JsonJustIn = {};
for(let count = 0; count<justIn.length; count++){
	JsonJustIn[count] = justIn[count].textContent;
}
document.write(JSON.stringify(JsonJustIn))

/**{"0":"Akume never wanted me to sign anti-open grazing law — Ortom",
"1":"ICYMI: Bricklayer jailed for assaulting commercial sex worker",
"2":"Gabon president leaves Saudi hospital",
"3":"Police reopen Anambra House of Assembly",
"4":"US life expectancy drops again as drug overdose deaths climb",
"5":"ICYMI: Woman protests after rapist was granted parental access to her son",
"6":"Power supply tops Nigerians’ complaints list, says CPC",
"7":"UEFA Champions League top scorers",
"8":"Five ways to manage joint account with your spouse",
"9":"Investors lobby as PFAs invest N17bn pension funds in infrastructure",
"10":"Port Harcourt building collapse: Police arrest property owner",
"11":"Ex-Eagles star, Etuhu, stands trial in Sweden over match-fixing",
"12":"Malabu: Nigeria loses over $10bn in one deal, say Reps, CSO",
"13":"Senate okays higher institutions for President’s hometown, nine others",
"14":"EFCC hands over 116 cars, 20 houses to First Bank "}
*/

trending = document.querySelectorAll('.tptn_link');
JsonTrending = {};
for(let count = 0; count<trending.length; count++){
	JsonTrending[count] = trending[count].textContent;
}
document.write(JSON.stringify(JsonTrending))
/**
{"0":"",
"1":"Senate okays higher institutions for President’s hometown,",
"2":"",
"3":"EFCC hands over 116 cars, 20 houses to First Bank ",
"4":"",
"5":"Suspected F-SARS operative shoots LASTMA official dead",
"6":"",
"7":"Metele attack: Army confirms 23 soldiers killed, 31 others…",
"8":"",
"9":"UEFA Champions League top scorers",
"10":"",
"11":"Brothers behead 10-year-old for N200,000 in Lagos",
"12":"",
"13":"Arrest Aregbesola for forging police report, PDP tells IGP",
"14":"",
"15":"Metele attack: No army can have enough equipment for…"}
*/