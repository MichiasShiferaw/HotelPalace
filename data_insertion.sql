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

-- will be done once all manager information is inserted!
-- INSERT INTO hotel (chain_id, hotel_id, hotel_name, street_name, street_number, city, province, postal_code, country, 
-- manager_SSN, num_of_rooms, rating, email) 
-- VALUES ();