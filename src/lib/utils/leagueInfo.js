/*   STEP 1   */
export const leagueID = "1099313574842974208"; // your league ID
export const leagueName = "The Bines Bowl"; // your league name
export const dues = 20; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>A league brought around by a fellowship with a love of two things: Football and the unmistakable taste of a Sterling FreshBurst Cigarette.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
     {
       "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Ryzo",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Craigavon", // (optional)
       "bio": "Loves Wednesdays",
       "photo": "/managers/ryzo.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "lv", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Josh McDaniels (Curse upon his family)", // Can be anything (usually your rival's name)
         link: 2, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
	   "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Committment 2 Excellence",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Sean O'Hagan",
       "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Coalisland", // (optional)
       "bio": "Being a panthers fan has ruined my life. I'm 31 years old!",
       "photo": "/managers/sean.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "car", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Birds", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Seán Keown",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "London, East Ireland", // (optional)
       "bio": "after achieving all that he could achieve at Castlewellan under 14s, Seán turned his eye to coaching. Seán values grit above all traits in his players (Danny Woodhead, John Kuhn, Kyle Juszczyk come to mind), guys who are the first to arrive to the facility and last to leave. Despite being the Jim Kelly Buffalo Bills of the Bines Bowl, Seáns undying commitment to win with Ulster Says No Huddle has only grown stronger. Seán also takes his role as Bines Bowl International Series ambassador very seriously.",
       "photo": "/managers/skeown.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
	"mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Damar Hamlin for costing me a championship in ‘22", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
	 {
       "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Eóin Culliton",
       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Belfast", // (optional)
       "bio": "I am a fun loving, laid back guy who doesn't care for any overly confrontational attitude or childish insults. I'm only here for the craic and my lack of fantasy success doesn't hurt or worry me at all.",
       "photo": "/managers/eoin.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
	   "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Daniel, Cathal (I assume everyone is saying Cathal)", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
		"rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
	 {
       "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Colm O'Hagan",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Belfast", // (optional)
       "bio": "Looking for a fourth playoff appearance and a first bines bowl in my fifth season as part of this great league. I have won an American football trophy (see photo), but I would trade it in a heartbeat for that sweet, sweet bines bowl.",
       "photo": "/managers/colm.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "jax", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Conall", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)	/   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
	 {
       "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Conall Kelly",
       "tookOver": 2021, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Kildress", // (optional)
       "bio": "6'3.",
       "photo": "/managers/conall.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "hou", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Colm, of course.", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "A mix of tiki taka and gegenpressing, with a dash of long ball in. Let your man know you’re there early.",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
	 {
       "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Cathal Kelly",
       "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Derriaghy/Carndonagh", // (optional)
       "bio": "Some men are born into greatness, others are forged by their environments. Cathal Kelly is neither of those. At the ripe age of 23ish, Allah himself intervened in the life of Cathal Kelly, bestowing upon him the gift of superior fantasy football knowledge and a really nuanced culinary palate. Cathal led by example in the Bines Bowl's early years, lighting the way for those who came after him. Some would attribute the success of his successors to Cathal, but he doesn't know about all that. He's just happy to be able to play a silly little game with his friends.",
       "photo": "/managers/cathal.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Literally everyone (mainly Sean)", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
	      {
       "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Daniel Burke",
       "tookOver": 2019, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Craigbane", // (optional)
       "bio": "I’m only here so I don’t get fined",
       "photo": "/managers/daniel.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Eoin", // Can be anything (usually your rival's name)
         link: 4, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
	"roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Rory O’Boyle",
       "tookOver": 2019, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Liverpool/Castlewellan", // (optional)
       "bio": "This young, often mustachiod man has the highest regular season win rate in Bines bowl history. Having never fallen below .500 in a season, he is a lock for the post season every year, but has never won a trophy. The true Dallas Cowboys of the Bines Bowl.",
       "photo": "/managers/rory.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Cathal Kelly", // Can be anything (usually your rival's name)
         link: 7, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     { 
       "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Paul O'Neill",
       "tookOver": 2010, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Glorious Clonoe/Stranmillis", // (optional)
       "bio": "As a GM, I live for the excitement, I live for the fans. First year in the Fantasy Game was incredibly strong, just falling short of the Bines Bowl. Year 2, rather than stay the course in incrementally improve, we mix it up. We get punished. Severely. But that does naught more than fill the Tin Pot Organisation with a hunger that could only be sated by the greatest revival of the last 2000 years in. The resume speaks for itself. #IfYouKnowYourHistory",
       "photo": "/managers/paul.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Brian, brought me into the league as family. Ruthlessly tossed me down to tattoo damnation.", // Can be anything (usually your rival's name)
         link: 11, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
        "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Brian Morgan",
       "tookOver": 2019, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Clonoe/Belfast", // (optional)
       "bio": "Bine enthusiast. Full time hater. Enjoyer of all things Sicko. Never wrong, just early...",
       "photo": "/managers/brian.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Paul O'Neill (defeated in the first annual tattoo bowl)", // Can be anything (usually your rival's name)
         link: 10, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
	"roster": 14,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Francis",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "London", // (optional)
       "bio": "Pretty Drunk",
       "photo": "/managers/frank.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Kiwi", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
	     {
	"roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Conor (OH BOY!) O'Boyle",
       "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Vancouver, BC", // (optional)
       "bio": "Spawned in the fresh waters of the Shmina River, the Tollymore Parr's began life as a junior team to Tollymore Trouts [sic]. However, they quickly grew into their own as a team through the _unique_ draft strategy of Coach O'Boyle; think moneyball but without an understanding of the stats. As a regular finisher in the top half of the table it was no surprise that in 2023 they attracted the attention of some large donors and received an influx of cash (in the form of a brown envelope delivered my Cawley's da) and were subsequently renamed A Lorryload of Buccaneers to honour our new Irish Republican sponsors. The team are currently in a rebuild phase following a relocation to Canada to take advantage of the time zone changes - no more losing to Columbo while asleep on a Tuesday night, we can now lose in real time. 2024 teams beware, A Lorryload of Buccaneers approach the Bines Bowl playoffs.",
       "photo": "/managers/levis.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Kiwi", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Your fantasy team's philosophy",
       "tradingScale": 5, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
    // |{
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //	 "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //	"rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //	"mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //	"rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
