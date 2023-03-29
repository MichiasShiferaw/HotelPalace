-- inserting addresses for hotel chains
INSERT INTO address_info (street_name, street_number, city, province, postal_code, country)
VALUES ("Leslie St", 1165, "North York", "Ontario", "M3C2K8", "Canada"), -- Four Seasons
("King Street W", 77, "Toronto", "Ontario", "M5K1G8", "Canada"), -- Delta Hotels
("West Broadway", 310, "Vancouver", "British Columbia", "V6J4S5", "Canada"), -- Sandman Hotel Group
("N. 24th Parkway", 6201, "Phoenix", "Arizona", "85016", "USA"), -- Best Western
("Choice Hotels Cir", 1, "Rockville", "Maryland", "20850", "USA"), -- Choice Hotels
("Wisconsin Ave", 7750, "Bethesda", "Maryland", "20814", "USA") -- Marriott International
;

-- inserting hotel chains
INSERT INTO hotel_chain (chain_id, chain_name, street_name, street_number, city, province, postal_code, country, 
num_of_hotels, phone_number, email) 
VALUES ("FSHR", "Four Seasons Hotel and Resorts", "Leslie St", 1165, "North York", "Ontario", "M3C2K8", "Canada", 
118, "(416) 449-1750", "contact@fourseasons.com"),
("DH", "Delta Hotels", "King Street W", 77, "Toronto", "Ontario", "M5K1G8", "Canada", 90, "(416) 874-2000", 
"contact@deltahotels.com"),
("SHG", "Sandman Hotel Group", "West Broadway", 310, "Vancouver", "British Columbia", "V6J4S5", "Canada",
45, "(604) 730-6600", "info@sandman.ca"),
("BW", "Best Western", "N. 24th Parkway", 6201, "Phoenix", "Arizona", "85016", "USA", 4700, "1(800) 780-7234",
"contact@bestwestern.com"),
("CH", "Choice Hotels", "Choice Hotels Cir", 1, "Rockville", "Maryland", "20850", "USA", 7118, "1 (877) 424-6423",
"contact@choicehotels.com"),
("MI", "Marriott International", "Wisconsin Ave", 7750, "Bethesda", "Maryland", "20814", "USA", 8484, "(301) 380-3000",
"customer.care.resolution@marriott.com")
;

-- inserting hotel addresses
INSERT INTO address_info (street_name, street_number, city, province, postal_code, country)
VALUES ("Wilshire Boulevard", 9500, "Beverly Hills", "California", "90212", "USA"), -- Four Seasons
("South Doheney Drive", 300, "Los Angeles", "California", "90048", "USA"), -- Four Seasons
("Yorkville Avenue", 60, "Toronto", "Ontario", "M4W0A4", "Canada"), -- Four Seasons
("East Delaware Place", 120, "Chicago", "Illinois", "60611", "USA"), -- Four Seasons
("Fourteenth Street NE", 75, "Atlanta", "Georgia", "30309", "USA"), -- Four Seasons
("Dalton Street", 1, "Boston", "Massachusetts", "02115", "USA"), -- Four Seasons
("Granite Loop Road", 7680, "Teton Village", "Wyoming", "83025", "USA"), -- Four Seasons
("East 57th Street", 57, "New York", "New York", "10022", "USA"), -- Four Seasons
("Rue Notre-Dame Centre", 1620, "Trois-Rivières", "Quebec", "G9A6E5", "Canada"), -- Delta Hotels
("Two Notch Road", 8105, "Columbia", "South Carolina", "29223", "USA"), -- Delta Hotels
("West Hastings Street", 550, "Vancouver", "British Columbia", "V6B1L6" , "Canada"), -- Delta Hotels
("Allen Road", 80, "Basking Ridge", "New Jersey", "07920", "USA"), -- Delta Hotels
("Falls Road", 5100, "Baltimore", "Maryland", "21210", "USA"), -- Delta Hotels
("Saskatchewan Drive", 1919, "Regina", "Saskatchewan", "S4P4H2", "Canada"), -- Delta Hotels
("Boul Du Royaume", 2675, "Jonquiere", "Quebec", "G7S5B8", "Canada"), -- Delta Hotels
("Williston Road", 1117, "South Burlington", "Vermont", "05403", "USA"), -- Delta Hotels
("Kenmount Road", 227, "St. John's", "Newfoundland and Labrador", "A1B3P9", "Canada"), -- Sandman Hotel Group
("SE Frontage Road", 1051, "McBride", "British Columbia", "V0J2E0", "Canada"), -- Sandman Hotel Group
("Rue de Serigny", 999, "Longueuil", "Quebec", "J4K2T1", "Canada"), -- Sandman Hotel Group
("Gaetz Avenue", 2818, "Red Deer", "Alberta", "T4R1M4", "Canada"), -- Sandman Hotel Group
("Sargent Avenue", 1750, "Winnipeg", "Manitoba", "R3H0C7", "Canada"), -- Sandman Hotel Group
("Centennial Parkway North", 560, "Hamilton", "Ontario", "L8E0G2", "Canada"), -- Sandman Hotel Group
("Victoria Avenue East", 1800, "Regina", "Saskatchewan", "S4N7K3", "Canada"), -- Sandman Hotel Group
("Parkwood Boulevard", 8451, "Plano", "Texas", "75024", "USA"), -- Sandman Hotel Group
("Saint Rose Pkwy", 3041, "Henderson", "Nevada", "89052", "USA"), -- Best Western
("S Oxnard Boulevard", 1156, "Oxnard", "California", "93030", "USA"), -- Best Western
("Boston Post Road W", 181, "Marlborough", "Massachusetts", "01752", "USA"), -- Best Western
("King George Boulevard", 8033, "Surrey", "British Columbia", "V3W5B4", "Canada"), -- Best Western
("Highway 7 E,", 600, "Richmond Hill", "Ontario", "L4B1B2", "Canada"), -- Best Western
("S Krome Avenue", 411, "Florida City", "Florida", "33034", "USA"), -- Best Western
("Music City Circle", 201, "Nashville", "Tennessee", "37214", "USA"), -- Best Western
("Brighton Road", 15151, "Brighton", "Colorado", "80601", "USA"), -- Best Western
("Middleton Ave.", 925, "Brandon", "Manitoba", "R7C1A8", "Canada"), -- Choice Hotels
("Mountain Rd.", 2495, "Moncton", "New Brunswick", "E1G2W4", "Canada"), -- Choice Hotels
("Airport Road", 106, "St. John's", "Newfoundland and Labrador", "A1A4Y3", "Canada"), -- Choice Hotels
("South Albion St.", 143, "Amherst", "Nova Scotia", "B4H2X2", "Canada"), -- Choice Hotels
("Perkins Rd.", 72, "Londonderry", "New Hampshire", "03053", "USA"), -- Choice Hotels
("Industrial Rd.", 1315, "Nampa", "Idaho", "83687", "USA"), -- Choice Hotels
("N Owasso Expy", 7653, "Owasso", "Oklahoma", "74055", "USA"), -- Choice Hotels
("Capital Drive", 112, "Charlottetown", "Prince Edward Island", "C1E1E7", "Canada"), -- Choice Hotels
("North 14th Street", 3319, "Bismarck", "North Dakota", "58503", "USA"), -- Marriott International
("Sanibel Drive", 4929, "Alexandria", "Minnesota", "56308", "USA"), -- Marriott International
("Hollywood Street", 99, "Bethany Beach", "Delaware", "19930", "USA"), -- Marriott International
("George Wallace Drive", 328, "Albertville", "Alabama", "35951", "USA"), -- Marriott International
("Spenard Road", 4901, "Anchorage", "Alaska", "99517", "USA"), -- Marriott International
("Sherbrooke St. West", 1228, "Montreal", "Quebec", "H3G1H6", "Canada"), -- Marriott International
("Mulcahy Court", 8, "Orillia", "Ontario", "L3V8B3", "Canada"), -- Marriott International
("Thad Johnson Private", 135, "Ottawa", "Ontario", "K1V1A2", "Canada") -- Marriott International
;

-- inserting hotels
INSERT INTO hotel(chain_id, hotel_id, hotel_name, street_name, street_number, city, province, postal_code, country, 
num_of_rooms, rating, email)
VALUES ("FSHR", 1, "Beverly Wilshire, A Four Seasons Hotel", "Wilshire Boulevard", 9500, "Beverly Hills", "California", "90212", "USA", 219, 5, 
"beverlywilshire@fourseasons.com"),
("FSHR", 2, "Four Seasons Hotel Los Angeles At Beverly Hills", "South Doheney Drive", 300, "Los Angeles", "California", "90048", "USA", 270, 5,
"losangeles@fourseasons.com"),
("FSHR", 3, "Four Seasons Hotel Toronto", "Yorkville Avenue", 60, "Toronto", "Ontario", "M4W0A4", "Canada", 342, 5, "toronto@fourseasons.com"),
("FSHR", 4, "Four Seasons Hotel Chicago", "East Delaware Place", 120, "Chicago", "Illinois", "60611", "USA", 415, 5, "chicago@fourseasons.com"),
("FSHR", 5, "Four Seasons Hotel Atlanta", "Fourteenth Street NE", 75, "Atlanta", "Georgia", "30309", "USA", 782, 5, "atlanta@fourseasons.com"),
("FSHR", 6, "Four Seasons Hotel One Dalton Street, Boston", "Dalton Street", 1, "Boston", "Massachusetts", "02115", "USA", 862, 5, 
"boston@fourseasons.com"),
("FSHR", 7, "Four Seasons Resort and Residences Jackson Hole", "Granite Loop Road", 7680, "Teton Village", "Wyoming", "83025", "USA", 686, 5, 
"teton@fourseasons.com"),
("FSHR", 8, "Four Seasons Hotel New York", "East 57th Street", 57, "New York", "New York", "10022", "USA", 714, 5, "newyork@fourseasons.com"),
("DH", 9, "Delta Hotels by Marriott Trois Rivieres Conference Centre", "Rue Notre-Dame Centre", 1620, "Trois-Rivières", "Quebec", "G9A6E5", "Canada",
839, 4, "troisrivieres@deltahotels.com"),
("DH", 10, "Delta Hotel by Marriott Columbia Northeast", "Two Notch Road", 8105, "Columbia", "South Carolina", "29223", "USA", 374, 3, 
"columbia@deltahotels.com"),
("DH", 11, "Delta Hotels by Marriott Vancouver Downtown Suites", "West Hastings Street", 550, "Vancouver", "British Columbia", "V6B1L6" , "Canada",
820, 4, "vancouver@deltahotels.com"),
("DH", 12, "Delta Hotels by Marriott Basking Ridge", "Allen Road", 80, "Basking Ridge", "New Jersey", "07920", "USA", 870, 3,
"baskingridge@deltahotels.com"),
("DH", 13, "Delta Hotels by Marriott Baltimore North", "Falls Road", 5100, "Baltimore", "Maryland", "21210", "USA", 952, 3, 
"baltimore@deltahotels.com"),
("DH", 14, "Delta Hotels by Marriott Regina", "Saskatchewan Drive", 1919, "Regina", "Saskatchewan", "S4P4H2", "Canada", 647, 4, 
"regina@deltahotels.com"),
("DH", 15, "Delta Hotels by Marriott Saguenay Conference Centre", "Boul Du Royaume", 2675, "Jonquiere", "Quebec", "G7S5B8", "Canada", 969, 4, 
"jonquiere@deltahotels.com"),
("DH", 16, "Delta Hotels by Marriott Burlington", "Williston Road", 1117, "South Burlington", "Vermont", "05403", "USA", 722, 3, 
"southburlington@deltahotels.com"),
("SHG", 17, "Sandman Signature St. John's Hotel", "Kenmount Road", 227, "St. John's", "Newfoundland and Labrador", "A1B3P9", "Canada", 611, 2, 
"stjohns@sandmanhotels.com"),
("SHG", 18, "Sandman Inn McBride", "SE Frontage Road", 1051, "McBride", "British Columbia", "V0J2E0", "Canada", 889, 2, "mcbride@sandmanhotels.com"),
("SHG", 19, "Sandman Hotel Montreal-Longueuil", "Rue de Serigny", 999, "Longueuil", "Quebec", "J4K2T1", "Canada", 674, 3, "longeuil@sandmanhotels.com"),
("SHG", 20, "Sandman Hotel Red Deer", "Gaetz Avenue", 2818, "Red Deer", "Alberta", "T4R1M4", "Canada", 648, 3, "reddeer@sandmanhotels.com"),
("SHG", 21, "Sandman Hotel & Suites Winnipeg Airport", "Sargent Avenue", 1750, "Winnipeg", "Manitoba", "R3H0C7", "Canada", 641, 3, 
"winnipeg@sandmanhotels.com"),
("SHG", 22, "Sandman Hotel Hamilton", "Centennial Parkway North", 560, "Hamilton", "Ontario", "L8E0G2", "Canada", 508, 3, 
"hamilton@sandmanhotels.com"),
("SHG", 23, "Sandman Hotel & Suites Regina", "Victoria Avenue East", 1800, "Regina", "Saskatchewan", "S4N7K3", "Canada", 696, 3, 
"regina@sandmanhotels.com"),
("SHG", 24, "Sandman Signature Plano-Frisco Hotel", "Parkwood Boulevard", 8451, "Plano", "Texas", "75024", "USA", 736, 3, 
"plano@sandmanhotels.com"),
("BW", 25, "Best Western Plus Las Vegas South Henderson", "Saint Rose Pkwy", 3041, "Henderson", "Nevada", "89052", "USA", 768, 3, 
"henderson@bestwestern.com"),
("BW", 26, "Best Western Oxnard Inn", "S Oxnard Boulevard", 1156, "Oxnard", "California", "93030", "USA", 877, 3,
"oxnard@bestwestern.com"),
("BW", 27, "Best Western Royal Plaza Hotel & Trade Center", "Boston Post Road W", 181, "Marlborough", "Massachusetts", "01752", "USA", 850, 3, 
"marlborough@bestwestern.com"),
("BW", 28, "Best Western King George Inn & Suites", "King George Boulevard", 8033, "Surrey", "British Columbia", "V3W5B4", "Canada", 831, 3, 
"surrey@bestwestern.com"),
("BW", 29, "Best Western Parkway Hotel Toronto North", "Highway 7 E,", 600, "Richmond Hill", "Ontario", "L4B1B2", "Canada", 604, 3, 
"richmondhill@bestwestern.com"),
("BW", 30, "Best Western Gateway To The Keys", "S Krome Avenue", 411, "Florida City", "Florida", "33034", "USA", 829, 3, 
"floridacity@bestwestern.com"),
("BW", 31, "Best Western Suites Near Opryland", "Music City Circle", 201, "Nashville", "Tennessee", "37214", "USA", 714, 3, 
"nashville@bestwestern.com"),
("BW", 32, "Best Western Brighton Inn", "Brighton Road", 15151, "Brighton", "Colorado", "80601", "USA", 924, 2, 
"brighton@bestwestern.com"),
("CH", 33, "Comfort Inn", "Middleton Ave.", 925, "Brandon", "Manitoba", "R7C1A8", "Canada", 715, 2, "brandon@choicehotels.com"),
("CH", 34, "Comfort Inn Magnetic Hill", "Mountain Rd.", 2495, "Moncton", "New Brunswick", "E1G2W4", "Canada", 568, 2, "moncton@choicehotels.com"),
("CH", 35, "Comfort Hotel St. John's", "Airport Road", 106, "St. John's", "Newfoundland and Labrador", "A1A4Y3", "Canada", 641, 3, 
"stjohns@choicehotels.com"),
("CH", 36, "Comfort Inn", "South Albion St.", 143, "Amherst", "Nova Scotia", "B4H2X2", "Canada", 844, 2, 
"amherst@choicehotels.com"),
("CH", 37, "Sleep Inn Manchester Airport", "Perkins Rd.", 72, "Londonderry", "New Hampshire", "03053", "USA", 568, 2, 
"londonberry@choicehotels.com"),
("CH", 38, "Sleep Inn", "Industrial Rd.", 1315, "Nampa", "Idaho", "83687", "USA", 651, 2, "nampa@choicehotels.com"),
("CH", 39, "Quality Inn & Suites Owasso US-169", "N Owasso Expy", 7653, "Owasso", "Oklahoma", "74055", "USA", 802, 2, "owasso@choicehotels.com"),
("CH", 40, "Comfort Inn", "Capital Drive", 112, "Charlottetown", "Prince Edward Island", "C1E1E7", "Canada", 873, 2, "charlottetown@choicehotels.com"),
("MI", 41, "Courtyard by Marriott Bismarck North", "North 14th Street", 3319, "Bismarck", "North Dakota", "58503", "USA", 809, 3, 
"bismarck@marriott.com"),
("MI", 42, "Fairfield Inn & Suites by Marriott Alexandria", "Sanibel Drive", 4929, "Alexandria", "Minnesota", "56308", "USA", 986, 2,
"alexandria@marriott.com"),
("MI", 43, "Bethany Beach Ocean Suites Residence Inn by Marriott", "Hollywood Street", 99, "Bethany Beach", "Delaware", "19930", "USA",
681, 3, "bethanybeach@marriott.com"),
("MI", 44, "Fairfield Inn & Suites by Marriott Albertville", "George Wallace Drive", 328, "Albertville", "Alabama", "35951", "USA",
807, 2, "albertville@marriott.com"),
("MI", 45, "Courtyard by Marriott Anchorage Airport", "Spenard Road", 4901, "Anchorage", "Alaska", "99517", "USA", 605, 3, 
"anchorage@marriott.com"),
("MI", 46, "The Ritz-Carlton, Montreal", "Sherbrooke St. West", 1228, "Montreal", "Quebec", "H3G1H6", "Canada", 505, 5, 
"theritzcarlton@marriott.com"),
("MI", 47, "Fairfield Inn & Suites by Marriott Orillia", "Mulcahy Court", 8, "Orillia", "Ontario", "L3V8B3", "Canada", 963, 2, 
"orillia@marriott.com"),
("MI", 48, "Fairfield Inn & Suites by Marriott Ottawa Airport", "Thad Johnson Private", 135, "Ottawa", "Ontario", "K1V1A2", "Canada",
813, 2, "ottawa@marriott.com")
;

-- insert manager addresses
INSERT INTO address_info (street_name, street_number, city, province, postal_code, country) 
VALUES ("Main",1,"Ottawa","Ontario","K1J","Canada"),
("Evergreen",93,"Carleton Place","Ontario","K7C","Canada"),
("Cordelia",30,"Alhambra","California","91841","USA"),
("Loftsgordon",56,"Beaverlodge","Alberta","G8A","Canada"),
("Golden Leaf",81,"Brooklyn","New York","11247","USA"),
("Nevada",2,"Carleton-sur-Mer","Quebec","P0T","Canada"),
("Kennedy",2,"Minneapolis","Minnesota","55480","USA"),
("Blaine",9652,"Iowa City","Iowa","52245","USA"),
("Chive",1,"San Antonio","Texas","78205","USA"),
("Mandrake",3299,"Philadelphia","Pennsylvania","19178","USA"),
("Troy",604,"Fort Erie","Ontario","L2A","Canada"),
("Manitowish",4,"Smiths Falls","Ontario","K7A","Canada"),
("Hallows",7175,"Saint Joseph","Missouri","64504","USA"),
("Scott",6,"Sarnia","Ontario","N7V","Canada"),
("Milwaukee",0,"Tacoma","Washington","98405","USA"),
("Village",4696,"Rochester","New York","14604","USA"),
("Lake View",3,"Newport News","Virginia","23612","USA"),
("Linden",66,"Altona","Manitoba","K1W","Canada"),
("Vahlen",922,"Magog","Quebec","J1X","Canada"),
("Gale",921,"Indianapolis","Indiana","46278","USA"),
("Pankratz",458,"Cincinnati","Ohio","45296","USA"),
("Cardinal",877,"Glasgow","Scotland","G4","United Kingdom"),
("Darwin",5418,"Birmingham","England","B40","United Kingdom"),
("Heath",6,"Wilmington","North Carolina","28410","USA"),
("Rutledge",3,"Grimshaw","Alberta","N4W","Canada"),
("Bartelt",3,"Alberton","Prince Edward Island","P7K","Canada"),
("Novick",6993,"Cincinnati","Ohio","45228","USA"),
("Talmadge",3624,"Milwaukee","Wisconsin","53277","USA"),
("Fieldstone",1,"Sacramento","California","95852","USA"),
("Carioca",2808,"Kingston","Ontario","E5S","Canada"),
("Dryden",5066,"Norman Wells","Northwest Territories","H3G","Canada"),
("Lyons",957,"Whitchurch","England","BS14","United Kingdom"),
("Brentwood",15474,"Houston","Texas","77293","USA"),
("Lillian",66,"Denver","Colorado","80291","USA"),
("Brown",989,"Lamont","Alberta","N2E","Canada"),
("Schiller",1601,"Albany","New York","12247","USA"),
("Upham",303,"Richibucto","New Brunswick","E4W","Canada"),
("Spohn",8,"Cornwall","Prince Edward Island","L4E","Canada"),
("Hallows",9,"Thorold","Ontario","L2V","Canada"),
("Waubesa",3610,"Odessa","Texas","79764","USA"),
("Rigney",8,"Minneapolis","Minnesota","55480","USA"),
("Lakewood Gardens",5141,"Oklahoma City","Oklahoma","73119","USA"),
("Steensland",46,"Houston","Texas","77045","USA"),
("Sloan",3542,"New Orleans","Louisiana","70179","USA"),
("Linden",454,"Merritt","British Columbia","V1K","Canada"),
("Maple Wood",316,"El Paso","Texas","79999","USA"),
("Crest Line",879,"Carleton-sur-Mer","Quebec","P0T","Canada"),
("Elmside",20990,"Picton","Ontario","S0H","Canada"),
("Mayfield",874,"Orlando","Florida","32835","USA"),
("Montana",14813,"Baie-Comeau","Quebec","K1M","Canada"),
("Buhler",6719,"Springfield","Virginia","22156","USA")
;

-- insert hotel employees
INSERT INTO employee (emp_SSN, first_name, middle_name, last_name, street_name, street_number, city, province, postal_code, country, 
chain_id, hotel_id, start_date, password, last_update)
VALUES ("123456789","Alex","S","Smith","Main",1,"Ottawa","Ontario","K1J","Canada","FSHR",1,"2000-01-01","password","2023-03-10"),
("728214430","Berri",NULL,"Bezley","Evergreen",93,"Carleton Place","Ontario","K7C","Canada","FSHR",2,"2019-08-01","TmBRIYY","2022-02-02"),
("622965894","Rikki","B","Gurge","Cordelia",30,"Alhambra","California","91841","USA","FSHR",3,"2008-06-30","CPf0zo","2022-07-25"),
("834108028","Marcile",NULL,"Carverhill","Loftsgordon",56,"Beaverlodge","Alberta","G8A","Canada","FSHR",4,"2019-08-17","YIv9kVrJlJ","2021-04-30"),
("810199334","Annie",NULL,"Sjostrom","Golden Leaf",81,"Brooklyn","New York","11247","USA","FSHR",5,"2011-02-17","BjUZNE5","2022-11-22"),
("925601006","Antonia",NULL,"Casine","Nevada",2,"Carleton-sur-Mer","Quebec","P0T","Canada","FSHR",6,"2012-11-18","GJW7hdT4r","2021-07-13"),
("648177403","Jerry","C","Semeradova","Kennedy",2,"Minneapolis","Minnesota","55480","USA","FSHR",7,"2019-04-11","8cWEG34ohKc","2022-09-17"),
("678690981","Sanford",NULL,"Keeping","Blaine",9652,"Iowa City","Iowa","52245","USA","FSHR",8,"2008-08-14","cv0npKXo","2022-01-28"),
("798729664","Yank","Y","Bartolijn","Chive",1,"San Antonio","Texas","78205","USA","DH",9,"2019-01-07","iwj53rP94DN","2022-05-23"),
("785968425","Llywellyn",NULL,"Dymick","Mandrake",3299,"Philadelphia","Pennsylvania","19178","USA","DH",10,"2007-08-21","cuZ6VNLUou2e","2022-12-08"),
("822929536","Joice","M","Edger","Troy",604,"Fort Erie","Ontario","L2A","Canada","DH",11,"2015-06-20","saY0I4","2022-12-03"),
("766684759","Salomon","S","Cumming","Manitowish",4,"Smiths Falls","Ontario","K7A","Canada","DH",12,"2010-08-11","Aco54I0kLCof","2022-09-19"),
("970079122","Dilly",NULL,"Mallindine","Hallows",7175,"Saint Joseph","Missouri","64504","USA","DH",13,"2013-10-11","hpUmYjL7deZY","2022-09-22"),
("625475296","Albertina","L","Vannet","Scott",6,"Sarnia","Ontario","N7V","Canada","DH",14,"2014-03-29","fx31BOI","2022-09-22"),
("963540482","Alanna",NULL,"Toynbee","Milwaukee",0,"Tacoma","Washington","98405","USA","DH",15,"2017-04-30","nJmhD4cTyA","2021-11-15"),
("875989858","Becki","O","Suffe","Village",4696,"Rochester","New York","14604","USA","DH",16,"2015-09-26","JGNuaGa2","2021-04-05"),
("667303866","Marrilee","S","Novic","Lake View",3,"Newport News","Virginia","23612","USA","SHG",17,"2009-12-25","I8HhpB2Lh2","2022-01-01"),
("730327966","Nesta",NULL,"Nuzzi","Linden",66,"Altona","Manitoba","K1W","Canada","SHG",18,"2018-05-06","rhnuiwtw","2022-12-07"),
("942536557","Winifield",NULL,"Willis","Vahlen",922,"Magog","Quebec","J1X","Canada","SHG",19,"2007-02-15","qbeEqDzbLY","2022-11-06"),
("933864249","Dosi",NULL,"Lummis","Gale",921,"Indianapolis","Indiana","46278","USA","SHG",20,"2005-04-05","n887gDY4EfNS","2023-01-02"),
("731738360","Suzanna","P","Dwire","Pankratz",458,"Cincinnati","Ohio","45296","USA","SHG",21,"2011-05-13","v1jbUdQQb","2022-07-21"),
("992667860","Whittaker","M","Jeeks","Cardinal",877,"Glasgow","Scotland","G4","United Kingdom","SHG",22,"2005-02-25","8dSyTO2U","2021-12-07"),
("946447029","Dotti","L","Corkell","Darwin",5418,"Birmingham","England","B40","United Kingdom","SHG",23,"2014-02-20","jKonwg","2022-06-29"),
("682038425","Hally","M","Berthel","Heath",6,"Wilmington","North Carolina","28410","USA","SHG",24,"2008-12-11","57bbRb","2022-01-25"),
("681389828","Sibby",NULL,"Welling","Rutledge",3,"Grimshaw","Alberta","N4W","Canada","BW",25,"2007-10-29","wkzw1iS","2021-12-28"),
("957340718","Corri","U","Amori","Bartelt",3,"Alberton","Prince Edward Island","P7K","Canada","BW",26,"2018-01-08","X657ud7Wm3U","2023-02-01"),
("992370650","Ibbie","K","Parrot","Novick",6993,"Cincinnati","Ohio","45228","USA","BW",27,"2011-12-20","uoIHcM2CsQ","2021-11-13"),
("795012405","Odie",NULL,"Hedderly","Talmadge",3624,"Milwaukee","Wisconsin","53277","USA","BW",28,"2016-03-07","A6DuCA","2022-06-30"),
("684457349","Woody","P","Tremmil","Fieldstone",1,"Sacramento","California","95852","USA","BW",29,"2008-12-25","sM09oz4NzJ","2021-12-28"),
("701582462","Basile","S","Coleshill","Carioca",2808,"Kingston","Ontario","E5S","Canada","BW",30,"2018-05-25","5ZKxE2n3","2021-08-14"),
("735160338","Ardys","L","Bestman","Dryden",5066,"Norman Wells","Northwest Territories","H3G","Canada","BW",31,"2006-07-01","OD9O4Cu","2021-07-01"),
("717229150","Norri",NULL,"Kemetz","Lyons",957,"Whitchurch","England","BS14","United Kingdom","BW",32,"2009-03-20","X498MzZOPer9","2022-11-05"),
("870046861","Yelena",NULL,"Perrington","Brentwood",15474,"Houston","Texas","77293","USA","CH",33,"2012-01-27","aYv3FG","2021-03-19"),
("911684544","Alysa","C","Djordjevic","Lillian",66,"Denver","Colorado","80291","USA","CH",34,"2010-08-14","CN8apNbmV2Lx","2022-02-03"),
("897250271","Hanan","Z","Sacks","Brown",989,"Lamont","Alberta","N2E","Canada","CH",35,"2019-10-24","GEzuadEQg","2022-01-27"),
("983351156","Andre",NULL,"Arrowsmith","Schiller",1601,"Albany","New York","12247","USA","CH",36,"2015-03-08","rqJfgo3U","2022-12-19"),
("701560380","Velvet","D","Boshere","Upham",303,"Richibucto","New Brunswick","E4W","Canada","CH",37,"2013-01-05","8HlZZ6g","2021-10-03"),
("841422520","Willis",NULL,"Pantlin","Spohn",8,"Cornwall","Prince Edward Island","L4E","Canada","CH",38,"2012-03-21","2xHvYB4K6","2022-06-18"),
("765323601","Mahala",NULL,"Papez","Hallows",9,"Thorold","Ontario","L2V","Canada","CH",39,"2011-03-27","iNefOv6","2022-07-24"),
("969309591","Marje","V","Darnbrough","Waubesa",3610,"Odessa","Texas","79764","USA","CH",40,"2012-03-31","nuKHombusoZ","2022-01-12"),
("705121441","Tamarah",NULL,"Guile","Rigney",8,"Minneapolis","Minnesota","55480","USA","MI",41,"2017-05-05","HNa0wgpT6gr1","2023-02-26"),
("710149051","Liliane",NULL,"Boatright","Lakewood Gardens",5141,"Oklahoma City","Oklahoma","73119","USA","MI",42,"2007-12-07","ojjOh7","2023-03-06"),
("741815294","Karlie","J","Whye","Steensland",46,"Houston","Texas","77045","USA","MI",43,"2006-08-14","DH4CTD16NOrU","2021-04-23"),
("905807783","Chad",NULL,"Gravestone","Sloan",3542,"New Orleans","Louisiana","70179","USA","MI",44,"2008-11-16","SDPnaqOUR93U","2021-04-15"),
("913546887","Jeanne","B","Swan","Linden",454,"Merritt","British Columbia","V1K","Canada","MI",45,"2011-10-13","ErFXJYz0kX88","2022-01-03"),
("931268357","Laetitia","N","Caughte","Maple Wood",316,"El Paso","Texas","79999","USA","MI",46,"2018-12-23","XL2DmbXJ","2021-04-20"),
("861074101","Gayle","K","McFarland","Crest Line",879,"Carleton-sur-Mer","Quebec","P0T","Canada","MI",47,"2012-06-14","CNY9ik8EtW","2021-03-19"),
("986197593","Alyson",NULL,"Lafflina","Elmside",20990,"Picton","Ontario","S0H","Canada","MI",48,"2010-11-18","EL8SY47Vw","2021-12-21"),
("614186752","Gilligan","P","Genders","Mayfield",874,"Orlando","Florida","32835","USA","FSHR",1,"2016-10-03","yu81ILJwt5QG","2021-05-20"),
("753365765","Penny",NULL,"Ajsik","Montana",14813,"Baie-Comeau","Quebec","K1M","Canada","SHG",18,"2015-05-08","KBMOzlOhi","2022-12-13"),
("657039100","Thurstan",NULL,"Gheeorghie","Buhler",6719,"Springfield","Virginia","22156","USA","MI",41,"2007-09-13","gDePsewGMx","2021-04-08")
;

-- more data to come!!!