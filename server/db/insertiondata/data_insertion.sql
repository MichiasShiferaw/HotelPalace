-- inserting addresses for hotel chains
INSERT INTO address_info (street_name, street_number, city, province, postal_code, country)
VALUES ('Leslie St', 1165, 'North York', 'Ontario', 'M3C2K8', 'Canada'), -- Four Seasons
('King Street W', 77, 'Toronto', 'Ontario', 'M5K1G8', 'Canada'), -- Delta Hotels
('West Broadway', 310, 'Vancouver', 'British Columbia', 'V6J4S5', 'Canada'), -- Sandman Hotel Group
('N. 24th Parkway', 6201, 'Phoenix', 'Arizona', '85016', 'USA'), -- Best Western
('Choice Hotels Cir', 1, 'Rockville', 'Maryland', '20850', 'USA'), -- Choice Hotels
('Wisconsin Ave', 7750, 'Bethesda', 'Maryland', '20814', 'USA') -- Marriott International
;

-- inserting hotel chains
INSERT INTO hotel_chain (chain_id, chain_name, street_name, street_number, city, province, postal_code, country, 
num_of_hotels, phone_number, email) 
VALUES ('FSHR', 'Four Seasons Hotel and Resorts', 'Leslie St', 1165, 'North York', 'Ontario', 'M3C2K8', 'Canada', 
118, '4164491750', 'contact@fourseasons.com'),
('DH', 'Delta Hotels', 'King Street W', 77, 'Toronto', 'Ontario', 'M5K1G8', 'Canada', 90, '416742000', 
'contact@deltahotels.com'),
('SHG', 'Sandman Hotel Group', 'West Broadway', 310, 'Vancouver', 'British Columbia', 'V6J4S5', 'Canada',
45, '6047306600', 'info@sandman.ca'),
('BW', 'Best Western', 'N. 24th Parkway', 6201, 'Phoenix', 'Arizona', '85016', 'USA', 4700, '8007807234',
'contact@bestwestern.com'),
('CH', 'Choice Hotels', 'Choice Hotels Cir', 1, 'Rockville', 'Maryland', '20850', 'USA', 7118, '8774246423',
'contact@choicehotels.com'),
('MI', 'Marriott International', 'Wisconsin Ave', 7750, 'Bethesda', 'Maryland', '20814', 'USA', 8484, '3013803000',
'customer.care.resolution@marriott.com')
;

-- inserting hotel addresses
INSERT INTO address_info (street_name, street_number, city, province, postal_code, country)
VALUES ('Wilshire Boulevard', 9500, 'Beverly Hills', 'California', '90212', 'USA'), -- Four Seasons
('South Doheney Drive', 300, 'Los Angeles', 'California', '90048', 'USA'), -- Four Seasons
('Yorkville Avenue', 60, 'Toronto', 'Ontario', 'M4W0A4', 'Canada'), -- Four Seasons
('East Delaware Place', 120, 'Chicago', 'Illinois', '60611', 'USA'), -- Four Seasons
('Fourteenth Street NE', 75, 'Atlanta', 'Georgia', '30309', 'USA'), -- Four Seasons
('Dalton Street', 1, 'Boston', 'Massachusetts', '02115', 'USA'), -- Four Seasons
('Granite Loop Road', 7680, 'Teton Village', 'Wyoming', '83025', 'USA'), -- Four Seasons
('East 57th Street', 57, 'New York', 'New York', '10022', 'USA'), -- Four Seasons
('Rue Notre-Dame Centre', 1620, 'Trois-Rivières', 'Quebec', 'G9A6E5', 'Canada'), -- Delta Hotels
('Two Notch Road', 8105, 'Columbia', 'South Carolina', '29223', 'USA'), -- Delta Hotels
('West Hastings Street', 550, 'Vancouver', 'British Columbia', 'V6B1L6' , 'Canada'), -- Delta Hotels
('Allen Road', 80, 'Basking Ridge', 'New Jersey', '07920', 'USA'), -- Delta Hotels
('Falls Road', 5100, 'Baltimore', 'Maryland', '21210', 'USA'), -- Delta Hotels
('Saskatchewan Drive', 1919, 'Regina', 'Saskatchewan', 'S4P4H2', 'Canada'), -- Delta Hotels
('Boul Du Royaume', 2675, 'Jonquiere', 'Quebec', 'G7S5B8', 'Canada'), -- Delta Hotels
('Williston Road', 1117, 'South Burlington', 'Vermont', '05403', 'USA'), -- Delta Hotels
('Kenmount Road', 227, 'St. Johns', 'Newfoundland and Labrador', 'A1B3P9', 'Canada'), -- Sandman Hotel Group
('SE Frontage Road', 1051, 'McBride', 'British Columbia', 'V0J2E0', 'Canada'), -- Sandman Hotel Group
('Rue de Serigny', 999, 'Longueuil', 'Quebec', 'J4K2T1', 'Canada'), -- Sandman Hotel Group
('Gaetz Avenue', 2818, 'Red Deer', 'Alberta', 'T4R1M4', 'Canada'), -- Sandman Hotel Group
('Sargent Avenue', 1750, 'Winnipeg', 'Manitoba', 'R3H0C7', 'Canada'), -- Sandman Hotel Group
('Centennial Parkway North', 560, 'Hamilton', 'Ontario', 'L8E0G2', 'Canada'), -- Sandman Hotel Group
('Victoria Avenue East', 1800, 'Regina', 'Saskatchewan', 'S4N7K3', 'Canada'), -- Sandman Hotel Group
('Parkwood Boulevard', 8451, 'Plano', 'Texas', '75024', 'USA'), -- Sandman Hotel Group
('Saint Rose Pkwy', 3041, 'Henderson', 'Nevada', '89052', 'USA'), -- Best Western
('S Oxnard Boulevard', 1156, 'Oxnard', 'California', '93030', 'USA'), -- Best Western
('Boston Post Road W', 181, 'Marlborough', 'Massachusetts', '01752', 'USA'), -- Best Western
('King George Boulevard', 8033, 'Surrey', 'British Columbia', 'V3W5B4', 'Canada'), -- Best Western
('Highway 7 E,', 600, 'Richmond Hill', 'Ontario', 'L4B1B2', 'Canada'), -- Best Western
('S Krome Avenue', 411, 'Florida City', 'Florida', '33034', 'USA'), -- Best Western
('Music City Circle', 201, 'Nashville', 'Tennessee', '37214', 'USA'), -- Best Western
('Brighton Road', 15151, 'Brighton', 'Colorado', '80601', 'USA'), -- Best Western
('Middleton Ave.', 925, 'Brandon', 'Manitoba', 'R7C1A8', 'Canada'), -- Choice Hotels
('Mountain Rd.', 2495, 'Moncton', 'New Brunswick', 'E1G2W4', 'Canada'), -- Choice Hotels
('Airport Road', 106, 'St. Johns', 'Newfoundland and Labrador', 'A1A4Y3', 'Canada'), -- Choice Hotels
('South Albion St.', 143, 'Amherst', 'Nova Scotia', 'B4H2X2', 'Canada'), -- Choice Hotels
('Perkins Rd.', 72, 'Londonderry', 'New Hampshire', '03053', 'USA'), -- Choice Hotels
('Industrial Rd.', 1315, 'Nampa', 'Idaho', '83687', 'USA'), -- Choice Hotels
('N Owasso Expy', 7653, 'Owasso', 'Oklahoma', '74055', 'USA'), -- Choice Hotels
('Capital Drive', 112, 'Charlottetown', 'Prince Edward Island', 'C1E1E7', 'Canada'), -- Choice Hotels
('North 14th Street', 3319, 'Bismarck', 'North Dakota', '58503', 'USA'), -- Marriott International
('Sanibel Drive', 4929, 'Alexandria', 'Minnesota', '56308', 'USA'), -- Marriott International
('Hollywood Street', 99, 'Bethany Beach', 'Delaware', '19930', 'USA'), -- Marriott International
('George Wallace Drive', 328, 'Albertville', 'Alabama', '35951', 'USA'), -- Marriott International
('Spenard Road', 4901, 'Anchorage', 'Alaska', '99517', 'USA'), -- Marriott International
('Sherbrooke St. West', 1228, 'Montreal', 'Quebec', 'H3G1H6', 'Canada'), -- Marriott International
('Mulcahy Court', 8, 'Orillia', 'Ontario', 'L3V8B3', 'Canada'), -- Marriott International
('Thad Johnson Private', 135, 'Ottawa', 'Ontario', 'K1V1A2', 'Canada') -- Marriott International
;

-- inserting hotels
INSERT INTO hotel(chain_id, hotel_id, hotel_name, street_name, street_number, city, province, postal_code, country, 
num_of_rooms, rating, email)
VALUES ('FSHR', 1, 'Beverly Wilshire, A Four Seasons Hotel', 'Wilshire Boulevard', 9500, 'Beverly Hills', 'California', '90212', 'USA', 219, 5, 
'beverlywilshire@fourseasons.com'),
('FSHR', 2, 'Four Seasons Hotel Los Angeles At Beverly Hills', 'South Doheney Drive', 300, 'Los Angeles', 'California', '90048', 'USA', 270, 5,
'losangeles@fourseasons.com'),
('FSHR', 3, 'Four Seasons Hotel Toronto', 'Yorkville Avenue', 60, 'Toronto', 'Ontario', 'M4W0A4', 'Canada', 342, 5, 'toronto@fourseasons.com'),
('FSHR', 4, 'Four Seasons Hotel Chicago', 'East Delaware Place', 120, 'Chicago', 'Illinois', '60611', 'USA', 415, 5, 'chicago@fourseasons.com'),
('FSHR', 5, 'Four Seasons Hotel Atlanta', 'Fourteenth Street NE', 75, 'Atlanta', 'Georgia', '30309', 'USA', 782, 5, 'atlanta@fourseasons.com'),
('FSHR', 6, 'Four Seasons Hotel One Dalton Street, Boston', 'Dalton Street', 1, 'Boston', 'Massachusetts', '02115', 'USA', 862, 5, 
'boston@fourseasons.com'),
('FSHR', 7, 'Four Seasons Resort and Residences Jackson Hole', 'Granite Loop Road', 7680, 'Teton Village', 'Wyoming', '83025', 'USA', 686, 5, 
'teton@fourseasons.com'),
('FSHR', 8, 'Four Seasons Hotel New York', 'East 57th Street', 57, 'New York', 'New York', '10022', 'USA', 714, 5, 'newyork@fourseasons.com'),
('DH', 9, 'Delta Hotels by Marriott Trois Rivieres Conference Centre', 'Rue Notre-Dame Centre', 1620, 'Trois-Rivières', 'Quebec', 'G9A6E5', 'Canada',
839, 4, 'troisrivieres@deltahotels.com'),
('DH', 10, 'Delta Hotel by Marriott Columbia Northeast', 'Two Notch Road', 8105, 'Columbia', 'South Carolina', '29223', 'USA', 374, 3, 
'columbia@deltahotels.com'),
('DH', 11, 'Delta Hotels by Marriott Vancouver Downtown Suites', 'West Hastings Street', 550, 'Vancouver', 'British Columbia', 'V6B1L6' , 'Canada',
820, 4, 'vancouver@deltahotels.com'),
('DH', 12, 'Delta Hotels by Marriott Basking Ridge', 'Allen Road', 80, 'Basking Ridge', 'New Jersey', '07920', 'USA', 870, 3,
'baskingridge@deltahotels.com'),
('DH', 13, 'Delta Hotels by Marriott Baltimore North', 'Falls Road', 5100, 'Baltimore', 'Maryland', '21210', 'USA', 952, 3, 
'baltimore@deltahotels.com'),
('DH', 14, 'Delta Hotels by Marriott Regina', 'Saskatchewan Drive', 1919, 'Regina', 'Saskatchewan', 'S4P4H2', 'Canada', 647, 4, 
'regina@deltahotels.com'),
('DH', 15, 'Delta Hotels by Marriott Saguenay Conference Centre', 'Boul Du Royaume', 2675, 'Jonquiere', 'Quebec', 'G7S5B8', 'Canada', 969, 4, 
'jonquiere@deltahotels.com'),
('DH', 16, 'Delta Hotels by Marriott Burlington', 'Williston Road', 1117, 'South Burlington', 'Vermont', '05403', 'USA', 722, 3, 
'southburlington@deltahotels.com'),
('SHG', 17, 'Sandman Signature St. Johns Hotel', 'Kenmount Road', 227, 'St. Johns', 'Newfoundland and Labrador', 'A1B3P9', 'Canada', 611, 2, 
'stjohns@sandmanhotels.com'),
('SHG', 18, 'Sandman Inn McBride', 'SE Frontage Road', 1051, 'McBride', 'British Columbia', 'V0J2E0', 'Canada', 889, 2, 'mcbride@sandmanhotels.com'),
('SHG', 19, 'Sandman Hotel Montreal-Longueuil', 'Rue de Serigny', 999, 'Longueuil', 'Quebec', 'J4K2T1', 'Canada', 674, 3, 'longeuil@sandmanhotels.com'),
('SHG', 20, 'Sandman Hotel Red Deer', 'Gaetz Avenue', 2818, 'Red Deer', 'Alberta', 'T4R1M4', 'Canada', 648, 3, 'reddeer@sandmanhotels.com'),
('SHG', 21, 'Sandman Hotel & Suites Winnipeg Airport', 'Sargent Avenue', 1750, 'Winnipeg', 'Manitoba', 'R3H0C7', 'Canada', 641, 3, 
'winnipeg@sandmanhotels.com'),
('SHG', 22, 'Sandman Hotel Hamilton', 'Centennial Parkway North', 560, 'Hamilton', 'Ontario', 'L8E0G2', 'Canada', 508, 3, 
'hamilton@sandmanhotels.com'),
('SHG', 23, 'Sandman Hotel & Suites Regina', 'Victoria Avenue East', 1800, 'Regina', 'Saskatchewan', 'S4N7K3', 'Canada', 696, 3, 
'regina@sandmanhotels.com'),
('SHG', 24, 'Sandman Signature Plano-Frisco Hotel', 'Parkwood Boulevard', 8451, 'Plano', 'Texas', '75024', 'USA', 736, 3, 
'plano@sandmanhotels.com'),
('BW', 25, 'Best Western Plus Las Vegas South Henderson', 'Saint Rose Pkwy', 3041, 'Henderson', 'Nevada', '89052', 'USA', 768, 3, 
'henderson@bestwestern.com'),
('BW', 26, 'Best Western Oxnard Inn', 'S Oxnard Boulevard', 1156, 'Oxnard', 'California', '93030', 'USA', 877, 3,
'oxnard@bestwestern.com'),
('BW', 27, 'Best Western Royal Plaza Hotel & Trade Center', 'Boston Post Road W', 181, 'Marlborough', 'Massachusetts', '01752', 'USA', 850, 3, 
'marlborough@bestwestern.com'),
('BW', 28, 'Best Western King George Inn & Suites', 'King George Boulevard', 8033, 'Surrey', 'British Columbia', 'V3W5B4', 'Canada', 831, 3, 
'surrey@bestwestern.com'),
('BW', 29, 'Best Western Parkway Hotel Toronto North', 'Highway 7 E,', 600, 'Richmond Hill', 'Ontario', 'L4B1B2', 'Canada', 604, 3, 
'richmondhill@bestwestern.com'),
('BW', 30, 'Best Western Gateway To The Keys', 'S Krome Avenue', 411, 'Florida City', 'Florida', '33034', 'USA', 829, 3, 
'floridacity@bestwestern.com'),
('BW', 31, 'Best Western Suites Near Opryland', 'Music City Circle', 201, 'Nashville', 'Tennessee', '37214', 'USA', 714, 3, 
'nashville@bestwestern.com'),
('BW', 32, 'Best Western Brighton Inn', 'Brighton Road', 15151, 'Brighton', 'Colorado', '80601', 'USA', 924, 2, 
'brighton@bestwestern.com'),
('CH', 33, 'Comfort Inn', 'Middleton Ave.', 925, 'Brandon', 'Manitoba', 'R7C1A8', 'Canada', 715, 2, 'brandon@choicehotels.com'),
('CH', 34, 'Comfort Inn Magnetic Hill', 'Mountain Rd.', 2495, 'Moncton', 'New Brunswick', 'E1G2W4', 'Canada', 568, 2, 'moncton@choicehotels.com'),
('CH', 35, 'Comfort Hotel St. Johns', 'Airport Road', 106, 'St. Johns', 'Newfoundland and Labrador', 'A1A4Y3', 'Canada', 641, 3, 
'stjohns@choicehotels.com'),
('CH', 36, 'Comfort Inn', 'South Albion St.', 143, 'Amherst', 'Nova Scotia', 'B4H2X2', 'Canada', 844, 2, 
'amherst@choicehotels.com'),
('CH', 37, 'Sleep Inn Manchester Airport', 'Perkins Rd.', 72, 'Londonderry', 'New Hampshire', '03053', 'USA', 568, 2, 
'londonberry@choicehotels.com'),
('CH', 38, 'Sleep Inn', 'Industrial Rd.', 1315, 'Nampa', 'Idaho', '83687', 'USA', 651, 2, 'nampa@choicehotels.com'),
('CH', 39, 'Quality Inn & Suites Owasso US-169', 'N Owasso Expy', 7653, 'Owasso', 'Oklahoma', '74055', 'USA', 802, 2, 'owasso@choicehotels.com'),
('CH', 40, 'Comfort Inn', 'Capital Drive', 112, 'Charlottetown', 'Prince Edward Island', 'C1E1E7', 'Canada', 873, 2, 'charlottetown@choicehotels.com'),
('MI', 41, 'Courtyard by Marriott Bismarck North', 'North 14th Street', 3319, 'Bismarck', 'North Dakota', '58503', 'USA', 809, 3, 
'bismarck@marriott.com'),
('MI', 42, 'Fairfield Inn & Suites by Marriott Alexandria', 'Sanibel Drive', 4929, 'Alexandria', 'Minnesota', '56308', 'USA', 986, 2,
'alexandria@marriott.com'),
('MI', 43, 'Bethany Beach Ocean Suites Residence Inn by Marriott', 'Hollywood Street', 99, 'Bethany Beach', 'Delaware', '19930', 'USA',
681, 3, 'bethanybeach@marriott.com'),
('MI', 44, 'Fairfield Inn & Suites by Marriott Albertville', 'George Wallace Drive', 328, 'Albertville', 'Alabama', '35951', 'USA',
807, 2, 'albertville@marriott.com'),
('MI', 45, 'Courtyard by Marriott Anchorage Airport', 'Spenard Road', 4901, 'Anchorage', 'Alaska', '99517', 'USA', 605, 3, 
'anchorage@marriott.com'),
('MI', 46, 'The Ritz-Carlton, Montreal', 'Sherbrooke St. West', 1228, 'Montreal', 'Quebec', 'H3G1H6', 'Canada', 505, 5, 
'theritzcarlton@marriott.com'),
('MI', 47, 'Fairfield Inn & Suites by Marriott Orillia', 'Mulcahy Court', 8, 'Orillia', 'Ontario', 'L3V8B3', 'Canada', 963, 2, 
'orillia@marriott.com'),
('MI', 48, 'Fairfield Inn & Suites by Marriott Ottawa Airport', 'Thad Johnson Private', 135, 'Ottawa', 'Ontario', 'K1V1A2', 'Canada',
813, 2, 'ottawa@marriott.com')
;

-- insert manager addresses
INSERT INTO address_info (street_name, street_number, city, province, postal_code, country) 
VALUES ('Main',1,'Ottawa','Ontario','K1J','Canada'),
('Evergreen',93,'Carleton Place','Ontario','K7C','Canada'),
('Cordelia',30,'Alhambra','California','91841','USA'),
('Loftsgordon',56,'Beaverlodge','Alberta','G8A','Canada'),
('Golden Leaf',81,'Brooklyn','New York','11247','USA'),
('Nevada',2,'Carleton-sur-Mer','Quebec','P0T','Canada'),
('Kennedy',2,'Minneapolis','Minnesota','55480','USA'),
('Blaine',9652,'Iowa City','Iowa','52245','USA'),
('Chive',1,'San Antonio','Texas','78205','USA'),
('Mandrake',3299,'Philadelphia','Pennsylvania','19178','USA'),
('Troy',604,'Fort Erie','Ontario','L2A','Canada'),
('Manitowish',4,'Smiths Falls','Ontario','K7A','Canada'),
('Hallows',7175,'Saint Joseph','Missouri','64504','USA'),
('Scott',6,'Sarnia','Ontario','N7V','Canada'),
('Milwaukee',5,'Tacoma','Washington','98405','USA'),
('Village',4696,'Rochester','New York','14604','USA'),
('Lake View',3,'Newport News','Virginia','23612','USA'),
('Linden',66,'Altona','Manitoba','K1W','Canada'),
('Vahlen',922,'Magog','Quebec','J1X','Canada'),
('Gale',921,'Indianapolis','Indiana','46278','USA'),
('Pankratz',458,'Cincinnati','Ohio','45296','USA'),
('Cardinal',877,'Glasgow','Scotland','G4','United Kingdom'),
('Darwin',5418,'Birmingham','England','B40','United Kingdom'),
('Heath',6,'Wilmington','North Carolina','28410','USA'),
('Rutledge',3,'Grimshaw','Alberta','N4W','Canada'),
('Bartelt',3,'Alberton','Prince Edward Island','P7K','Canada'),
('Novick',6993,'Cincinnati','Ohio','45228','USA'),
('Talmadge',3624,'Milwaukee','Wisconsin','53277','USA'),
('Fieldstone',1,'Sacramento','California','95852','USA'),
('Carioca',2808,'Kingston','Ontario','E5S','Canada'),
('Dryden',5066,'Norman Wells','Northwest Territories','H3G','Canada'),
('Lyons',957,'Whitchurch','England','BS14','United Kingdom'),
('Brentwood',15474,'Houston','Texas','77293','USA'),
('Lillian',66,'Denver','Colorado','80291','USA'),
('Brown',989,'Lamont','Alberta','N2E','Canada'),
('Schiller',1601,'Albany','New York','12247','USA'),
('Upham',303,'Richibucto','New Brunswick','E4W','Canada'),
('Spohn',8,'Cornwall','Prince Edward Island','L4E','Canada'),
('Hallows',9,'Thorold','Ontario','L2V','Canada'),
('Waubesa',3610,'Odessa','Texas','79764','USA'),
('Rigney',8,'Minneapolis','Minnesota','55480','USA'),
('Lakewood Gardens',5141,'Oklahoma City','Oklahoma','73119','USA'),
('Steensland',46,'Houston','Texas','77045','USA'),
('Sloan',3542,'New Orleans','Louisiana','70179','USA'),
('Linden',454,'Merritt','British Columbia','V1K','Canada'),
('Maple Wood',316,'El Paso','Texas','79999','USA'),
('Crest Line',879,'Carleton-sur-Mer','Quebec','P0T','Canada'),
('Elmside',20990,'Picton','Ontario','S0H','Canada'),
('Mayfield',874,'Orlando','Florida','32835','USA'),
('Montana',14813,'Baie-Comeau','Quebec','K1M','Canada'),
('Buhler',6719,'Springfield','Virginia','22156','USA')
;

-- insert hotel employees
INSERT INTO employee (emp_SSN, first_name, middle_name, last_name, street_name, street_number, city, province, postal_code, country, hotel_id, start_date, password, last_update)
VALUES ('123456789','Alex','S','Smith','Main',1,'Ottawa','Ontario','K1J','Canada',1,'2000-01-01','password','2023-03-10'),
('728214430','Berri',NULL,'Bezley','Evergreen',93,'Carleton Place','Ontario','K7C','Canada',2,'2019-08-01','TmBRIYY','2022-02-02'),
('622965894','Rikki','B','Gurge','Cordelia',30,'Alhambra','California','91841','USA',3,'2008-06-30','CPf0zo','2022-07-25'),
('834108028','Marcile',NULL,'Carverhill','Loftsgordon',56,'Beaverlodge','Alberta','G8A','Canada',4,'2019-08-17','YIv9kVrJlJ','2021-04-30'),
('810199334','Annie',NULL,'Sjostrom','Golden Leaf',81,'Brooklyn','New York','11247','USA',5,'2011-02-17','BjUZNE5','2022-11-22'),
('925601006','Antonia',NULL,'Casine','Nevada',2,'Carleton-sur-Mer','Quebec','P0T','Canada',6,'2012-11-18','GJW7hdT4r','2021-07-13'),
('648177403','Jerry','C','Semeradova','Kennedy',2,'Minneapolis','Minnesota','55480','USA',7,'2019-04-11','8cWEG34ohKc','2022-09-17'),
('678690981','Sanford',NULL,'Keeping','Blaine',9652,'Iowa City','Iowa','52245','USA',8,'2008-08-14','cv0npKXo','2022-01-28'),
('798729664','Yank','Y','Bartolijn','Chive',1,'San Antonio','Texas','78205','USA',9,'2019-01-07','iwj53rP94DN','2022-05-23'),
('785968425','Llywellyn',NULL,'Dymick','Mandrake',3299,'Philadelphia','Pennsylvania','19178','USA',10,'2007-08-21','cuZ6VNLUou2e','2022-12-08'),
('822929536','Joice','M','Edger','Troy',604,'Fort Erie','Ontario','L2A','Canada',11,'2015-06-20','saY0I4','2022-12-03'),
('766684759','Salomon','S','Cumming','Manitowish',4,'Smiths Falls','Ontario','K7A','Canada',12,'2010-08-11','Aco54I0kLCof','2022-09-19'),
('970079122','Dilly',NULL,'Mallindine','Hallows',7175,'Saint Joseph','Missouri','64504','USA',13,'2013-10-11','hpUmYjL7deZY','2022-09-22'),
('625475296','Albertina','L','Vannet','Scott',6,'Sarnia','Ontario','N7V','Canada',14,'2014-03-29','fx31BOI','2022-09-22'),
('963540482','Alanna',NULL,'Toynbee','Milwaukee',5,'Tacoma','Washington','98405','USA',15,'2017-04-30','nJmhD4cTyA','2021-11-15'),
('875989858','Becki','O','Suffe','Village',4696,'Rochester','New York','14604','USA',16,'2015-09-26','JGNuaGa2','2021-04-05'),
('667303866','Marrilee','S','Novic','Lake View',3,'Newport News','Virginia','23612','USA',17,'2009-12-25','I8HhpB2Lh2','2022-01-01'),
('730327966','Nesta',NULL,'Nuzzi','Linden',66,'Altona','Manitoba','K1W','Canada',18,'2018-05-06','rhnuiwtw','2022-12-07'),
('942536557','Winifield',NULL,'Willis','Vahlen',922,'Magog','Quebec','J1X','Canada',19,'2007-02-15','qbeEqDzbLY','2022-11-06'),
('933864249','Dosi',NULL,'Lummis','Gale',921,'Indianapolis','Indiana','46278','USA',20,'2005-04-05','n887gDY4EfNS','2023-01-02'),
('731738360','Suzanna','P','Dwire','Pankratz',458,'Cincinnati','Ohio','45296','USA',21,'2011-05-13','v1jbUdQQb','2022-07-21'),
('992667860','Whittaker','M','Jeeks','Cardinal',877,'Glasgow','Scotland','G4','United Kingdom',22,'2005-02-25','8dSyTO2U','2021-12-07'),
('946447029','Dotti','L','Corkell','Darwin',5418,'Birmingham','England','B40','United Kingdom',23,'2014-02-20','jKonwg','2022-06-29'),
('682038425','Hally','M','Berthel','Heath',6,'Wilmington','North Carolina','28410','USA',24,'2008-12-11','57bbRb','2022-01-25'),
('681389828','Sibby',NULL,'Welling','Rutledge',3,'Grimshaw','Alberta','N4W','Canada',25,'2007-10-29','wkzw1iS','2021-12-28'),
('957340718','Corri','U','Amori','Bartelt',3,'Alberton','Prince Edward Island','P7K','Canada',26,'2018-01-08','X657ud7Wm3U','2023-02-01'),
('992370650','Ibbie','K','Parrot','Novick',6993,'Cincinnati','Ohio','45228','USA',27,'2011-12-20','uoIHcM2CsQ','2021-11-13'),
('795012405','Odie',NULL,'Hedderly','Talmadge',3624,'Milwaukee','Wisconsin','53277','USA',28,'2016-03-07','A6DuCA','2022-06-30'),
('684457349','Woody','P','Tremmil','Fieldstone',1,'Sacramento','California','95852','USA',29,'2008-12-25','sM09oz4NzJ','2021-12-28'),
('701582462','Basile','S','Coleshill','Carioca',2808,'Kingston','Ontario','E5S','Canada',30,'2018-05-25','5ZKxE2n3','2021-08-14'),
('735160338','Ardys','L','Bestman','Dryden',5066,'Norman Wells','Northwest Territories','H3G','Canada',31,'2006-07-01','OD9O4Cu','2021-07-01'),
('717229150','Norri',NULL,'Kemetz','Lyons',957,'Whitchurch','England','BS14','United Kingdom',32,'2009-03-20','X498MzZOPer9','2022-11-05'),
('870046861','Yelena',NULL,'Perrington','Brentwood',15474,'Houston','Texas','77293','USA',33,'2012-01-27','aYv3FG','2021-03-19'),
('911684544','Alysa','C','Djordjevic','Lillian',66,'Denver','Colorado','80291','USA',34,'2010-08-14','CN8apNbmV2Lx','2022-02-03'),
('897250271','Hanan','Z','Sacks','Brown',989,'Lamont','Alberta','N2E','Canada',35,'2019-10-24','GEzuadEQg','2022-01-27'),
('983351156','Andre',NULL,'Arrowsmith','Schiller',1601,'Albany','New York','12247','USA',36,'2015-03-08','rqJfgo3U','2022-12-19'),
('701560380','Velvet','D','Boshere','Upham',303,'Richibucto','New Brunswick','E4W','Canada',37,'2013-01-05','8HlZZ6g','2021-10-03'),
('841422520','Willis',NULL,'Pantlin','Spohn',8,'Cornwall','Prince Edward Island','L4E','Canada',38,'2012-03-21','2xHvYB4K6','2022-06-18'),
('765323601','Mahala',NULL,'Papez','Hallows',9,'Thorold','Ontario','L2V','Canada',39,'2011-03-27','iNefOv6','2022-07-24'),
('969309591','Marje','V','Darnbrough','Waubesa',3610,'Odessa','Texas','79764','USA',40,'2012-03-31','nuKHombusoZ','2022-01-12'),
('705121441','Tamarah',NULL,'Guile','Rigney',8,'Minneapolis','Minnesota','55480','USA',41,'2017-05-05','HNa0wgpT6gr1','2023-02-26'),
('710149051','Liliane',NULL,'Boatright','Lakewood Gardens',5141,'Oklahoma City','Oklahoma','73119','USA',42,'2007-12-07','ojjOh7','2023-03-06'),
('741815294','Karlie','J','Whye','Steensland',46,'Houston','Texas','77045','USA',43,'2006-08-14','DH4CTD16NOrU','2021-04-23'),
('905807783','Chad',NULL,'Gravestone','Sloan',3542,'New Orleans','Louisiana','70179','USA',44,'2008-11-16','SDPnaqOUR93U','2021-04-15'),
('913546887','Jeanne','B','Swan','Linden',454,'Merritt','British Columbia','V1K','Canada',45,'2011-10-13','ErFXJYz0kX88','2022-01-03'),
('931268357','Laetitia','N','Caughte','Maple Wood',316,'El Paso','Texas','79999','USA',46,'2018-12-23','XL2DmbXJ','2021-04-20'),
('861074101','Gayle','K','McFarland','Crest Line',879,'Carleton-sur-Mer','Quebec','P0T','Canada',47,'2012-06-14','CNY9ik8EtW','2021-03-19'),
('986197593','Alyson',NULL,'Lafflina','Elmside',20990,'Picton','Ontario','S0H','Canada',48,'2010-11-18','EL8SY47Vw','2021-12-21'),
('614186752','Gilligan','P','Genders','Mayfield',874,'Orlando','Florida','32835','USA',1,'2016-10-03','yu81ILJwt5QG','2021-05-20'),
('753365765','Penny',NULL,'Ajsik','Montana',14813,'Baie-Comeau','Quebec','K1M','Canada',18,'2015-05-08','KBMOzlOhi','2022-12-13'),
('657039100','Thurstan',NULL,'Gheeorghie','Buhler',6719,'Springfield','Virginia','22156','USA',41,'2007-09-13','gDePsewGMx','2021-04-08')
;

-- inserting more employees
INSERT INTO employee (emp_SSN, first_name, middle_name, last_name, street_name, street_number, city, province, postal_code, country, hotel_id, start_date, password, last_update)
  VALUES 
 	('288886089','Arliene',null,'Wasylkiewicz','Hoard',171,'New Brunswick','New Jersey','08922','USA',31,'2007-07-30','VNzJHJGJAo','2022-12-28'),
	('348911385','Verene','Lazaro','Berzen','Linden',2,'Decatur','Georgia','30089','USA',25,'2018-01-22','FMZK4CL','2022-06-16'),
	('620280386','Bryna','Hildagard','Nelles','Sachs','35','Logan Lake','British Columbia','T3S','Canada',28,'2008-02-20','5EDYg9PMC8v','2022-07-28'),
	('579572348','Herman','Rina','Roundtree','Ridgeway','7','Montréal','Québec','H5B','Canada','30','2013-08-25','3Xxdq7oe','2023-03-16'),
	('437250114','Melisandra','Katha','Newland','Golf','9987','Largo','Florida','34643','USA','32','2000-02-07','OO3bTbD','2022-05-15'),
	('055583986','Siusan','Casandra','Kuhnke','6th','904','Grand Rapids','Michigan','49510','USA','28','2002-12-22','zhHIH63','2023-03-01'),
	('447268444','Arlin','Dalila','Halbord','Montana','2178','San Jose','California','95194','USA','27','2015-09-27','G7gKBzbZuA','2022-12-14'),
	('345680255','Jami','Leontine','Salleir','Arapahoe','9','Gatesville','Texas','76598','USA','30','2013-06-21','nw3zbGZK','2022-12-01'),
	('832373116','Rafaelita','Isak','Collingwood','Atwood','100','Burbank','California','91505','USA','25','2003-03-20','mX9fMjMzOvHq','2022-09-02'),
	('818945582','Putnam','Vern','Richten','Dennis','9','Birmingham','Alabama','35244','USA','27','2014-05-07','Q6cw0pCTV5R','2022-10-04'),
	('145175749','Lesley',NULL,'Sprasen','Sundown','8','Bryan','Texas','77806','USA','29','2001-10-02','wWG8AhU40','2022-08-15'),
	('566947776','Pamella','Jorge','Yurikov','Blue Bill Park','423','Thessalon','Ontario','P0T','Canada','30','2012-09-12','uvApXj','2022-07-19'),
	('464473192','Isaac',NULL,'Bartels','Kim','808','Waterbury','Connecticut','06705','USA','32','2014-04-09','XkeWWuY8d','2022-09-25'),
	('371303920','Hart','Dmitri','Szach','Bayside','467','Peoria','Arizona','85383','USA','29','2008-11-14','jMQnaQyG','2023-01-10'),
	('497525264','Torrance','Sukey','Irlam','Morningstar','7','Iqaluit','Nunavut','K6K','Canada','25','2007-08-02','HZ6iUTO7q','2023-02-24'),
	('519515214','Hanni','Yovonnda','Jerisch','Elgar','921','Milwaukee','Wisconsin','53263','USA','31','2009-12-27','rSjJRra4Nxq','2022-08-18'),
	('230372419','Dana','Lenard','Tegeller','Loeprich','6','Baltimore','Maryland','21229','USA','31','2012-10-13','djvLwqW2','2022-05-15'),
	('005375976','Emmott','Davy','Taft','Maple Wood','746','Lethbridge','Alberta','T1K','Canada','27','2016-09-18','PFHhOPxCB','2022-05-17'),
	('732754495','Franklyn','Corri','Bedberry','Bartillon','85','Cowansville','Québec','J2K','Canada','26','2018-04-23','r5TJkH','2022-06-04'),
	('529110353','Kalinda','Georgianna','Rosenhaus','Westridge','6955','Cache Creek','British Columbia','N1G','Canada','32','2021-10-09','w0HDVE8a1','2022-06-05'),
	('262044471','Odelia','Onfre','Dinsell','Menomonie','76','Knoxville','Tennessee','37931','USA','28','2005-11-06','ehmsPy5HdGor','2022-08-01'),
	('306401556','Carissa','Cedric','Wybourne','Lyons','42','Barraute','Québec','P0M','Canada','30','2018-10-07','FCoDitDiO','2022-04-11'),
	('777864523','Ella','Lola','Mingaye','Bartelt','24','London','Ontario','N6C','Canada','28','2016-06-22','MOw63gqS','2022-05-22'),
	('134800418','Gael','Gisele','Sarfatti','Columbus','7901','Tulsa','Oklahoma','74193','USA','32','2010-05-10','MyPjIx','2022-08-10'),
	('312163505','Petronilla','Jehu','Negro','Bluejay','555','Lynn','Massachusetts','01905','USA','26','2002-07-29','p4s6YGUxI5','2022-11-19'),
	('620934073','Hayward','Maritsa','Poff','Londonderry','7','Columbus','Ohio','43210','USA','31','2004-10-26','n1lCknLEBvP','2022-11-07'),
	('378007072','Silas','Fayth','Birkhead','David','337','Lansing','Michigan','48912','USA','27','2004-05-03','8UaVAXC','2022-06-23'),
	('661472860','Hally','Berte','Scutching','Goodland','4944','Staten Island','New York','10305','USA','25','2017-05-10','4NGb6VLFzHA','2022-08-25'),
	('542788934','Dede','Honey','Rickwood','Gerald','5','Bronx','New York','10469','USA','26','2007-01-06','Wy0CZ1G1','2022-11-18'),
	('361119907','Bernadette','Carmelita','Gimbart','Claremont','4741','Delaware','Ontario','M3H','Canada','31','2017-08-31','EZbAeorzd','2022-04-15'),
	('429284507','Leo','Emmott','Dies','Dovetail','51','Val-d''Or','Québec','J9P','Canada','28','2001-10-13','5rWF66','2022-09-19'),
	('719632132','Basilius',NULL,'Bechley','Weeping Birch','213','Martensville','Saskatchewan','L3R','Canada','28','2012-03-14','5zivIH5D','2022-12-07'),
	('250315628','Deloris',NULL,'Ellcome','Colorado','5533','Charleston','West Virginia','25326','USA','27','2005-12-01','DqZSeo','2022-10-15'),
	('273522153','Izaak','Franny','Bresnahan','Forest','757','Newark','New Jersey','07195','USA','27','2021-04-14','4SI3gD','2022-06-17'),
	('667562005','Becca',NULL,'Wesgate','Esch','57','Melville','Saskatchewan','S7W','Canada','25','2020-12-06','74bZg36POhC','2022-08-06'),
	('881933578','Giffy','Donnamarie','Bedome','Buhler','5','Corona','California','92883','USA','30','2016-12-14','LDz9jE','2023-02-19'),
	('065971716','Wood','Kiley','Cleyburn','Ridgeview','0339','Columbus','Georgia','31998','USA','28','2008-07-23','R8vtreS8Kct','2023-01-05'),
	('966574321','Jamie','Lucais','Doerling','Vernon','2','Spartanburg','South Carolina','29305','USA','29','2019-09-16','BphGPUUb87','2023-02-02'),
	('916867817','Georgeanna','Latrena','Asif','Mayfield','2079','Anaheim','California','92825','USA','28','2010-06-09','oZyVQ8iPbkd6','2022-12-07'),
	('514548410','Isacco','Ilise','Dye','Stoughton','2','Dorchester','Ontario','E4K','Canada','31','2006-07-24','vl3PEsfz4Pr9','2022-10-04'),
	('210036817','Whitman',NULL,'Collingridge','1st','114','Vanderhoof','British Columbia','G9A','Canada','26','2015-07-08','BcJ0M9A','2023-01-09'),
	('546617739','Kara-lynn','Monty','Dood','Petterle','53','Stockton','California','95210','USA','27','2013-11-03','xsS3RSaW4Tz','2022-07-21'),
	('780722125','Dirk','Thatch','Fernando','Clove','355','San Francisco','California','94110','USA','32','2011-11-11','curx7WCkqXTf','2022-12-21'),
	('647974104','Puff','Rae','Curgenuer','Springs','668','Baton Rouge','Louisiana','70826','USA','25','2018-03-03','o4G3sbTKe8','2022-12-18'),
	('814956499','Marsiella','Lemuel','Althorp','Lotheville','26591','Lancaster','California','93584','USA','26','2015-02-10','UqoawpQ7b','2023-01-11'),
	('364618472','Sib','Wade','Myhill','Grayhawk','6395','Las Vegas','Nevada','89135','USA','29','2014-10-12','LHrBS25Fj','2022-06-14'),
	('226050678','Hoyt','Ethelred','Aldwich','Algoma','7478','Topeka','Kansas','66622','USA','32','2003-02-08','R9qzWw','2022-12-30'),
	('092770991','Clementius','Judi','Marxsen','Eggendart','7378','Wolfville','Nova Scotia','B4P','Canada','25','2007-02-21','GKaekacjhz','2022-12-17'),
	('424851826','Nevins','Arielle','Sinkins','Dixon','55','Parrsboro','Nova Scotia','L2A','Canada','25','2017-05-10','M6BF2H','2022-07-24'),
	('601560820','Bradley','Renata','Aizlewood','Dunning','830','Coaldale','Alberta','T1M','Canada','26','2010-02-09','RcscYxzg7fI','2022-05-31'),
	('033576998','Basile','Diena','Creaser','Surrey','6','Kitimat','British Columbia','V8C','Canada','25','2012-12-23','cxWyMmQVoye3','2022-08-21'),
	('133352809','Logan',NULL,'Davidsson','Dryden','5714','Revelstoke','British Columbia','H9K','Canada','28','2022-11-26','tvmqoxdMqu62','2023-03-31'),
	('969639798','Nadean','Merry','Puddicombe','Holy Cross','809','Kerrobert','Saskatchewan','T1P','Canada','30','2013-03-11','vqU3sQlIJhaF','2022-07-22'),
	('428255197','Lemuel','Gaylord','Hayhurst','Roxbury','078','Des Moines','Iowa','50393','USA','31','2018-08-23','ruzEBobYSWO','2022-11-23'),
	('414877176','Tallou',NULL,'Jahns','Ruskin','1339','Austin','Texas','78759','USA','29','2018-11-20','PZAPQRvO','2022-05-06'),
	('219659942','Theo','Janaye','Chellenham','Leroy','698','Greenville','South Carolina','29605','USA','29','2022-12-30','yqSY4G','2023-01-24'),
	('042374962','Gan','Ozzy','Southey','Mosinee','25677','Memphis','Tennessee','38161','USA','29','2021-08-14','3EqBtPkRSfx','2022-09-17'),
	('705458590','Finlay','Stephen','Mars','Moose','780','Dallas','Texas','75379','USA','32','2019-01-01','G8qNRGPDP','2022-07-20'),
	('034849164','Willie','Martha','McIlroy','Armistice','3267','Berthierville','Québec','S3N','Canada','28','2010-02-14','inhEgDrepn8l','2022-06-11'),
	('046709949','Leia','Sonya','Blasik','Talisman','8147','Sparwood','British Columbia','M2J','Canada','25','2003-10-25','btx6HK5ws','2022-12-16'),
	('354813276','Kathryn',NULL,'Massei','Knutson','52','Philadelphia','Pennsylvania','19120','USA','29','2009-11-06','XuoEH3I0Uk3P','2022-04-30'),
	('115256465','Faustina','Ealasaid','Annes','Gulseth','24','Gjoa Haven','Nunavut','J7R','Canada','32','2012-01-16','3WzMKybXf6','2023-02-17'),
	('544853098','Almeta','Devondra','Brose','New Castle','25','Woodstock','Ontario','E7M','Canada','30','2015-11-05','UOQBrEpFLz','2022-05-12'),
	('146087472','Adele','Crysta','Tipling','Northview','02','New York City','New York','10045','USA','31','2002-01-05','xUdYbx8mhbV','2023-01-30'),
	('442228797','Devin',NULL,'Kadar','Armistice','9','Jacksonville','Florida','32255','USA','29','2017-12-12','XOZQDFGt','2022-07-06'),
	('507776842','Jewel','Margit','Rigler','Mcbride','031','Senneterre','Québec','L0P','Canada','25','2021-10-25','0NyhF2','2022-10-22'),
	('033672689','Talia','Lori','Burgill','Michigan','937','Montgomery','Alabama','36104','USA','31','2006-10-13','Tt6GJBnu8','2022-12-22'),
	('202318863','Gene','Shelby','Butland','Canary','7','Alexandria','Virginia','22309','USA','26','2013-09-13','rap1ALqQ','2022-05-27'),
	('299333176','Rikki','Brigit','Martinot','Oak','559','Beauharnois','Québec','J6N','Canada','29','2004-04-23','Zfqqhhi9IZV','2022-07-30'),
	('981741954','Peyter','Tore','Finker','Sutherland','2','Memphis','Tennessee','38150','USA','32','2015-08-25','s7HGScnM75Y7','2022-05-29'),
	('236501753','Tremain','Catha','Flatt','Nevada','2541','Oak Bay','British Columbia','V8S','Canada','26','2004-03-25','ZUmNqK4mf8X','2023-03-20'),
	('903077436','Jenica','Petunia','Foster','Morrow','2','Portland','Oregon','97211','USA','32','2006-02-12','basLvXvEOc9v','2022-12-17'),
	('184030180','Emilie','Brena','Bogaert','Bluestem','6','Lachute','Québec','J8H','Canada','31','2006-08-10','d5Qh4k','2022-04-13'),
	('119689429','Dolly','Andi','Towl','Oriole','1','Cedar Rapids','Iowa','52410','USA','27','2001-02-21','1GJf5LyNlaX','2022-07-11'),
	('599573432','Coleen','Joelly','Grgic','Birchwood','511','Oklahoma City','Oklahoma','73173','USA','28','2009-01-30','CRsEeVDceZLJ','2022-04-23'),
	('744303689','Keane','Ira','Cauthra','Jackson','4219','Waco','Texas','76796','USA','26','2020-04-28','NgV4ly','2022-04-08'),
	('197108153','Roley','Edgar','Copes','Fair Oaks','2982','Windsor','Ontario','J1S','Canada','31','2002-04-22','hadsLQ0giwt','2022-11-12'),
	('458215177','Gwendolin','Tiffanie','Penton','Del Mar','19','San Diego','California','92153','USA','28','2008-06-20','5fGJuqvq','2022-11-19'),
	('203235778','Melanie','Norine','Entwisle','Old Shore','38','Greensboro','North Carolina','27409','USA','31','2008-01-09','St0Ls9s8D','2022-12-03'),
	('294688268','Katrina','Ira','Minghetti','Portage','3703','Sacramento','California','94263','USA','29','2013-12-09','bzyGfk2Bu','2022-07-16'),
	('817200599','Shayne','Barty','Westrey','Claremont','6','San Diego','California','92105','USA','26','2011-08-10','WoAhLJN','2022-11-24'),
	('194000227','Velvet','Hieronymus','Lardez','Darwin','89','Charlotte','North Carolina','28230','USA','28','2010-08-27','rumGf1vp1Lh','2022-04-17'),
	('102695263','Raviv','Rodd','Sorton','Schurz','4','Tyler','Texas','75710','USA','27','2001-05-05','jcJD0s9qbC7','2022-09-25'),
	('151021036','Benedikt','Andie','Broadist','Carioca','1','Walnut Grove','British Columbia','V2X','Canada','27','2006-11-08','EF6cC0Xa4','2022-10-14'),
	('796507570','Paulie','Filberto','Mattaus','High Crossing','26385','Washington','District of Columbia','20088','USA','25','2012-07-05','0G00iNmt8Ul','2023-02-18'),
	('271985294','Darya','Eleanor','Ben','Crescent Oaks','22','Orlando','Florida','32825','USA','31','2009-03-24','Yc2HcH8JLubI','2022-11-28'),
	('668731549','Bernadine','Aldon','Bishopp','Wayridge','9','Summerside','Prince Edward Island','C1N','Canada','27','2016-02-07','fXVKoiIG','2022-10-19'),
	('805235280','Henrik','Verile','Durbridge','Pine View','6414','Midland','Michigan','48670','USA','25','2009-07-01','Epswd3Z','2023-02-02'),
	('496201421','Glennie','Jacintha','Robatham','International','92','Dallas','Texas','75260','USA','28','2022-03-20','2c1VjjmdP','2022-11-01'),
	('387679072','Vyky','Reba','Beisley','Arrowood','97','Grand Junction','Colorado','81505','USA','27','2022-01-18','WkjLrv9m','2023-01-13'),
	('505877318','Lonnie','Fitz','Morfett','Forest','553','Erie','Pennsylvania','16550','USA','31','2018-04-08','hLM8zA','2022-04-17'),
	('696386074','Shandra',NULL,'Scutter','Morningstar','1517','Weyburn','Saskatchewan','S4H','Canada','28','2008-04-22','3FO4IE8','2022-05-07'),
	('612269298','Marta',NULL,'Bycraft','Melrose','3','Phoenix','Arizona','85067','USA','40','2000-11-24','2cqIe5QBpL','2023-04-04'),
	('613995352','Mable','Laurie','Malec','East','3983','Orlando','Florida','32819','USA','40','2014-03-27','lGcDnz','2022-04-29'),
	('364430632','Shandra','Noland','Mohring','Almo','462','Atlanta','Georgia','31106','USA','40','2005-07-31','KddoYx','2023-02-15'),
	('714200967','Rubia','Ilka','Oles','Birchwood','1','Estevan','Saskatchewan','S4A','Canada','40','2016-08-18','xtUlFGA','2022-05-07'),
	('759307682','Jamison',NULL,'Serjent','La Follette','55','Mobile','Alabama','36689','USA','35','2017-10-08','RV4TBjodZ8N','2023-02-20'),
	('549621010','Dorice','Frank','Antonoyev','Leroy','4516','Baton Rouge','Louisiana','70894','USA','37','2013-05-10','4K6ANvoVXyy','2022-05-05'),
	('315992517','Shay','Latashia','Beggin','Stone Corner','5289','Nipawin','Saskatchewan','V9B','Canada','33','2005-07-14','x9HlX7','2022-07-12'),
	('231356129','Dyana','Raymund','Rasmus','Old Gate','2966','Alberton','Prince Edward Island','P7K','Canada','40','2012-12-24','6uzVod0Y4','2023-01-11'),
	('243039698','Bernie','Jolynn','Holburn','North','2','Mont-Tremblant','Québec','J8E','Canada','37','2008-04-30','KkEcVWBvdr0','2022-04-21'),
	('680093081','Dukey','Abbi','Teare','Laurel','4','Grand Rapids','Michigan','49544','USA','33','2004-02-02','hkkGOG','2022-12-06'),
	('363206171','Sarette','Brooke','Rutgers','Armistice','295','Oceanside','California','92056','USA','35','2002-03-19','3z2EBAHLZ','2022-12-27'),
	('374729224','Davina','Albertine','Huygens','Thompson','9','Tampa','Florida','33661','USA','36','2018-09-25','l7dHCa1ChO','2022-07-10'),
	('463104460','Allissa','Kathie','Jann','Holy Cross','58','Virginia Beach','Virginia','23454','USA','36','2000-02-11','uf79cSL','2022-12-04'),
	('979271646','Bourke','Elbert','Leverson','Delladonna','674','Albany','New York','12210','USA','33','2015-02-09','VGi0cW57v','2022-07-01'),
	('396688383','Anthony','Mae','McKmurrie','Bluejay','9936','Burnaby','British Columbia','V5M','Canada','36','2003-07-23','VUlK1Y9xSw5t','2022-06-27'),
	('857743230','Donnie','Shel','Franzen','Merrick','5545','Miami','Florida','33129','USA','36','2019-01-24','3bXENpFy5q','2023-01-12'),
	('742834017','Dennie','Albina','Proffer','Bobwhite','9979','Dallas','Texas','75277','USA','33','2014-12-24','r5ayJnzoWdg','2023-01-23'),
	('647106944','Phil','Marja','Rudolf','Katie','462','Oakland','California','94627','USA','39','2003-03-20','rcv9PZm6pUI','2022-05-21'),
	('733498854','Saidee',NULL,'Ondricek','Shelley','3354','Smiths Falls','Ontario','K7A','Canada','37','2005-10-16','SXJnr0Z','2023-01-30'),
	('114092675','Shurwood','Broderick','Gregan','Marcy','3205','Columbus','Ohio','43268','USA','36','2018-12-01','ZMExfHa4A','2022-07-02'),
	('582566100','Carolynn','Pansie','Valenti','Dovetail','8846','Peoria','Illinois','61635','USA','33','2003-01-31','iEjIKaF4rH','2023-01-16'),
	('058453619','Tarrah','Jodi','Rehme','Thackeray','65','Colorado Springs','Colorado','80945','USA','36','2015-01-28','K1S7J446m','2022-09-19'),
	('308117593','Junie','Lorrin','Foster','Old Gate','9976','Baltimore','Maryland','21229','USA','36','2000-06-28','9YRx3Egd','2022-10-19'),
	('415939197','Virgina',NULL,'Cromblehome','Caliangt','9354','Lumby','British Columbia','P7L','Canada','36','2018-02-08','wRbvgnK','2022-06-26'),
	('380015519','Garold',NULL,'Falls','Granby','479','Airdrie','Alberta','T4B','Canada','36','2013-03-13','rEkMNHMN5v','2023-01-12'),
	('628449124','Eba','Jerome','Milliere','Helena','99','Atlanta','Georgia','30351','USA','36','2000-10-19','B3dyxXD0','2022-06-28'),
	('151205871','Norri',NULL,'O''Hegertie','Loomis','54','Indianapolis','Indiana','46278','USA','39','2021-07-09','TE6K58WZ7c','2023-02-22'),
	('118900123','Dorelle','Augie','Edgington','Crowley','8','Boulder','Colorado','80305','USA','39','2010-05-23','L67vDT','2023-02-23'),
	('860376359','Kiersten','Elli','Castagnet','Moulton','1438','Fort Worth','Texas','76198','USA','33','2017-04-27','XhhqG2kPhrz','2022-05-29'),
	('506839296','Karlotta','Gordie','Pixton','Muir','6258','Canmore','Alberta','T1W','Canada','33','2002-03-08','Trw9SAjhcn','2022-07-03'),
	('923046592','Muire','Celestyn','Exley','Fairfield','73','Minneapolis','Minnesota','55446','USA','40','2006-05-28','B5UpE34','2022-08-29'),
	('913022715','Trudie','Margarette','Mainz','Westport','34','Edson','Alberta','T7E','Canada','39','2003-01-20','ni1bZhBtIja','2022-10-07'),
	('628219314','Myriam','Lilia','Dewen','Cascade','6988','New York City','New York','10160','USA','39','2013-04-15','CmFZuLUKq','2022-12-22'),
	('463473237','Elbertine','Olympia','Le - Count','Dapin','73','Sacramento','California','94207','USA','38','2012-03-12','CXAmaw3Vky2I','2022-09-11'),
	('194638432','Hollis','Krystal','Nettleship','Cody','3056','Washington','District of Columbia','20436','USA','36','2003-11-23','ek2D5LUrsI9E','2022-12-20'),
	('693723015','Bea','Alexandrina','Quibell','Hallows','08','Sacramento','California','94207','USA','37','2016-11-22','oAfgjb1bsPd','2022-05-31'),
	('093353942','Sawyere','Dasi','Rossbrooke','Eastlawn','110','Dayton','Ohio','45432','USA','36','2003-11-24','EtnCdm3E','2022-05-10'),
	('763258607','Marta','Ashleigh','Boulder','Onsgard','36','Houston','Texas','77299','USA','40','2000-03-08','5AkvYNlMRaUg','2022-06-03'),
	('941218515','Aleta','Lonna','Cordingly','Westport','3353','Cumming','Georgia','30130','USA','40','2005-02-14','Vf2Pjp4HSJ4l','2022-10-06'),
	('705782059','Regan','Timothy','Yurchenko','Manitowish','6664','Ogden','Utah','84409','USA','34','2019-09-18','xS5kPPRaEch','2023-03-10'),
	('056293381','Reinhard','Etta','Selland','Hoard','5542','Indianapolis','Indiana','46202','USA','36','2011-06-17','FJsr9tEP','2022-07-03'),
	('244015806','Lazarus','Henryetta','Blackall','Rusk','10','Las Cruces','New Mexico','88006','USA','34','2015-02-23','gIBKPnbHlGyE','2023-02-21'),
	('854640525','Ricoriki','Jere','Duffield','Loomis','33','Lethbridge','Alberta','T1K','Canada','39','2018-10-13','3peRM4DFdc','2022-06-20'),
	('008094250','Fidelity','Wynny','Nassy','Bartelt','95','Louisville','Kentucky','40205','USA','35','2013-04-29','46WzP2','2022-04-22'),
	('314756067','Cory','Penn','Albon','Derek','25','Winter Haven','Florida','33884','USA','37','2010-01-06','5hcraDfIz','2022-04-23'),
	('364290758','Fredi',NULL,'Beals','Thackeray','86','Princeville','Nova Scotia','G6G','Canada','33','2013-12-01','awT1tj','2022-12-31'),
	('514909176','Cary','Flossie','Challenor','Sauthoff','694','Saint-Hilaire','Québec','J3H','Canada','37','2015-05-05','8WIhe9Z','2022-04-08'),
	('885960981','Wally','Neil','Alexsandrov','Thackeray','9','Arlington','Virginia','22212','USA','35','2012-01-21','xiYpzht','2022-12-18'),
	('600026918','Enrico',NULL,'Gingles','Elmside','9775','Bromont','Québec','J2L','Canada','36','2015-12-18','3KlfpWDF3X','2022-08-19'),
	('807917296','Myrlene','Alida','Hollyar','Norway Maple','1825','Biloxi','Mississippi','39534','USA','39','2001-04-19','T2S1mg','2022-09-06'),
	('620355680','Adora','Cornela','Bycraft','Eastwood','82','Anniston','Alabama','36205','USA','37','2005-02-04','kdSlKk02','2022-07-01'),
	('306931064','Justen',NULL,'Asbury','Mosinee','61','Kamsack','Saskatchewan','R2J','Canada','35','2005-11-01','OOoBkJjg7','2022-09-09'),
	('875512192','Ali','Kizzee','Perryn','Ramsey','7','Grand Rapids','Michigan','49518','USA','36','2019-03-28','g09d0DoP','2022-08-13'),
	('703436471','Alfie','Marcela','Lambole','Waubesa','331','Sunnyvale','California','94089','USA','35','2009-04-30','tRgqKVSY6dR','2022-07-16'),
	('629233560','Jodie','Nessi','Skett','Sloan','071','Cedar Rapids','Iowa','52410','USA','39','2020-08-19','gAOzNPozkpD','2022-04-27'),
	('142587265','Corty','Timothy','Adlem','Green','4939','Miami','Florida','33233','USA','39','2011-04-06','A08SYIcKP4','2022-04-22'),
	('387033986','Lily','Theresina','Churchley','Fairfield','1014','Port Hawkesbury','Nova Scotia','B9A','Canada','36','2022-06-14','mJN8r7oqh','2022-11-02'),
	('218659519','Dino','Clare','Skirven','Tony','88','El Paso','Texas','88553','USA','33','2011-09-02','vjW2fsU','2022-10-26'),
	('559973120','Pamela','Jaclyn','Bretherick','Loomis','3829','Saint-Joseph','Québec','N2E','Canada','38','2016-11-26','xvtQBO00','2022-09-28'),
	('752703545','George','Maegan','Mattheus','Hayes','4372','Pemberton','British Columbia','E1W','Canada','33','2021-05-09','Zrb0w4','2022-06-22'),
	('313224933','Donia',NULL,'Camacke','Pine View','713','Coaldale','Alberta','T1M','Canada','34','2016-03-16','gJyraicMzHLA','2022-07-30'),
	('949216811','Drucie','Rebecca','Kleint','Eggendart','9140','Amarillo','Texas','79171','USA','36','2010-06-27','agBpLJz','2023-03-18'),
	('371606599','Netta','Mariette','Bugge','Petterle','3497','West Palm Beach','Florida','33411','USA','37','2010-07-01','YnwVoK3V','2022-09-19'),
	('899138501','Armstrong','Bronnie','Tefft','Clyde Gallagher','492','Washington','District of Columbia','20210','USA','40','2006-03-24','9LZsWmF','2022-05-04'),
	('776746893','Evelin','Reiko','Leeds','Sullivan','3888','Brant','Ontario','N3T','Canada','40','2019-05-17','LqmleqGS9v','2022-07-18'),
	('376920703','Dwain','Hillard','Camois','Sherman','7352','Oliver','British Columbia','E5L','Canada','39','2019-04-10','1mRC6xrqbMy','2022-12-06'),
	('186829930','Helyn','Charis','Wightman','Veith','7','Lynn','Massachusetts','01905','USA','36','2000-09-04','lSy9QUYB','2022-12-20'),
	('644721356','Hali','Baldwin','Veryan','Hermina','7380','El Paso','Texas','88530','USA','36','2010-06-19','EK8YRXQVac0','2022-04-06'),
	('351280073','Shayna','Karalee','Joyson','Quincy','5407','Little Rock','Arkansas','72209','USA','37','2016-04-16','wRRHgfdPRm6D','2022-12-16'),
	('796307234','Franky','Lenci','Goodbody','North','7555','Boston','Massachusetts','02203','USA','33','2011-02-06','G6RJh35ESA','2022-05-04'),
	('653948109','Monique','Mella','Losseljong','Clarendon','83','Blackfalds','Alberta','J5K','Canada','33','2016-06-25','GGXF5t','2022-11-12'),
	('911116844','Fred','Olga','Whitby','Aberg','359','Salt Lake City','Utah','84105','USA','34','2011-03-10','Y4nvlPqrBwQ','2023-01-23'),
	('991129744','Eamon','Alexandrina','McKintosh','Morning','26','Baton Rouge','Louisiana','70826','USA','35','2013-02-18','pIoPpJrl','2022-08-25'),
	('739403064','Justus','Parsifal','Townsley','Bowman','6330','Two Hills','Alberta','J9H','Canada','40','2012-10-17','bFAdzD','2022-11-23'),
	('259677559','Casper','Emalia','O''Tierney','Glendale','4982','Washington','District of Columbia','20535','USA','35','2005-05-20','2GJSNjNUxIcT','2022-05-13'),
	('189380832','Selie','Vilhelmina','Wallbridge','Bayside','3018','Minneapolis','Minnesota','55480','USA','35','2014-11-01','Sug5ru9i1SJ','2022-08-22'),
	('008804228','Essy','Rozamond','Suttle','Sheridan','81','Lansing','Michigan','48919','USA','39','2011-11-26','ylTeQ9wEu','2022-10-22'),
	('442059960','Larry','Elli','Goodlip','Independence','7','Château-Richer','Québec','B3H','Canada','34','2018-08-05','CvL1uCcuO1','2022-09-29'),
	('761357150','Millicent','Judith','Strathman','Hollow Ridge','11563','Saint-Augustin','Québec','G3A','Canada','35','2004-04-26','wJch6o','2022-07-02'),
	('634102616','Liesa','Sibby','Karlolczak','Carberry','856','Boise','Idaho','83722','USA','38','2016-07-03','pFyXBePO','2022-04-22'),
	('078943642','Jorry','Cullin','Norcock','Doe Crossing','6824','Monroe','Louisiana','71213','USA','33','2005-09-24','LcSmwjT','2022-11-09'),
	('856587235','Bartolemo','Ailee','Trevithick','Nobel','11274','Aurora','Illinois','60505','USA','33','2009-06-30','CtKyJCq','2022-04-23'),
	('100697511','Rodolphe','Lynne','Alcock','Dexter','4','Annapolis','Maryland','21405','USA','38','2013-08-26','t0oVremo','2022-05-04'),
	('448264457','Matthieu','Cece','Mary','American Ash','8814','Los Angeles','California','90076','USA','40','2002-11-12','oO5nCD','2022-07-24'),
	('810810193','Emmery','Liva','Seery','Nova','4','Shawnee Mission','Kansas','66276','USA','38','2010-01-21','Yk3yCje3oC','2022-12-25'),
	('568617567','Ruthy','Charleen','Woolmore','Eagle Crest','944','Lumby','British Columbia','P7L','Canada','36','2000-06-14','YyTwJWaqIpa','2022-07-11'),
	('459288185','Cortie','Nina','McMaster','Tennyson','5183','Arlington','Virginia','22212','USA','35','2013-02-08','OyZME7','2022-12-03'),
	('440594386','Corri','Carling','Ledekker','Magdeline','6144','San Jose','California','95123','USA','36','2002-08-28','dwJg8X6NprVt','2022-04-12'),
	('255340456','Krisha','Aldric','Kellen','Maryland','3704','San Jose','California','95138','USA','38','2018-08-06','vN7I0SOE','2022-06-23'),
	('723721005','Dorey',NULL,'Gritskov','Northport','399','Lévis','Québec','G6W','Canada','9','2017-01-30','VETRB4c0G','2022-09-13'),
	('447143373','Redford','Tudor','Lansberry','Bluestem','4966','Claresholm','Alberta','V2T','Canada','9','2013-09-10','lqE9kf9sFmj','2022-11-21'),
	('917960495','Rudd','Kiah','Arrell','American','052','Ocala','Florida','34479','USA','16','2015-02-21','uxafd43lM','2022-07-26'),
	('090226050','Chicky','Humfrid','Mingardi','Blackbird','519','New York City','New York','10131','USA','15','2017-08-17','p5WdBrDD','2022-09-02'),
	('649194917','Edi','Jenn','Downse','Londonderry','05','Québec','Québec','G6W','Canada','9','2011-02-11','1vkC6i','2022-08-20'),
	('014881416','Miof mela','Jerry','Timpany','Clarendon','1281','Belfast','Prince Edward Island','L6S','Canada','11','2003-12-23','1GmpvtO6fbS1','2023-03-16'),
	('489109086','Lorinda','Tuesday','Baleine','Golf Course','4','Fargo','North Dakota','58122','USA','9','2002-06-10','cDXVbjgy','2022-04-13'),
	('772875602','Cassie','Angel','Critchard','Sommers','9','Warwick','Québec','G6R','Canada','15','2009-08-17','hhWmACStk','2022-06-10'),
	('915736650','Mirabelle','Shane','Pickervance','Dixon','1148','Chicago','Illinois','60681','USA','10','2016-08-12','aJCuWcMoY0Gg','2022-04-10'),
	('373235542','Walton','Clarey','Sokell','High Crossing','78','Nackawic','New Brunswick','E6G','Canada','11','2020-07-09','2qPqZu','2022-07-09'),
	('846996440','Beilul','Budd','Munt','Swallow','9070','Columbia','South Carolina','29215','USA','16','2006-06-03','a7MbYMzaC','2022-09-01'),
	('746822697','Tirrell','Murvyn','Swallwell','Victoria','6','Pierreville','Québec','K2C','Canada','12','2009-12-29','1CFRGj','2022-06-03'),
	('997748536','Massimiliano','Gratia','Ewols','Vera','125','Wabana','Newfoundland and Labrador','V7X','Canada','10','2022-02-17','qgCRGY8','2022-09-22'),
	('739156834','Andrew',NULL,'Treleaven','Independence','569','Evansville','Indiana','47737','USA','10','2022-03-09','zcFjKQZ','2022-09-10'),
	('474657900','Levon','Faustine','Statham','Granby','879','Brooklyn','New York','11205','USA','16','2001-08-02','c8M9jV','2023-01-13'),
	('030623994','Nonnah','Nichole','Ceccoli','Carberry','031','Rochester','New York','14604','USA','11','2018-09-09','TNwo2Z2z','2022-04-07'),
	('762365926','Jo','Marisa','O''Hickee','Eagle Crest','9655','Greensboro','North Carolina','27499','USA','13','2017-09-30','jdS9wFF','2022-11-12'),
	('314760447','Kile','Marne','Cowderay','Londonderry','444','Oromocto','New Brunswick','E2V','Canada','16','2003-04-05','XRmmydV','2022-05-26'),
	('466517131','Stefa','Grier','Danser','Garrison','6040','Houston','Texas','77095','USA','9','2015-05-25','mqB0XHJnJCbm','2022-11-19'),
	('840144627','Tilly','Rafaello','Glasscoo','Old Shore','006','Camrose','Alberta','T4V','Canada','11','2002-11-07','yyGcsSokMl','2023-03-01'),
	('844716841','Derron','Olenka','Goly','Haas','2','Virginia Beach','Virginia','23459','USA','16','2001-02-10','X1BvD1ig','2023-04-02'),
	('381590494','Erhard','Leland','Halburton','Lakeland','026','Newark','New Jersey','07112','USA','11','2004-01-18','NZzS2tK','2022-05-09'),
	('278575056','Hortense','Woody','Maber','Northport','1713','Varennes','Québec','J3X','Canada','13','2002-11-07','09obcXRYb','2022-08-27'),
	('880456281','Brewer','Jenni','Casini','South','2','Lansing','Michigan','48919','USA','15','2010-11-11','Nu5TTTeXUU','2022-08-20'),
	('588280512','Dahlia','Layton','Bootman','Brown','5181','Richmond','British Columbia','V6Y','Canada','14','2017-10-07','WrCQzcCqCTT','2022-09-09'),
	('069491849','Inesita','Andra','Kett','Becker','2311','Pangnirtung','Nunavut','M5T','Canada','13','2003-07-03','vt0wjGO3i99U','2022-05-17'),
	('683379449','Chet',NULL,'Reilinger','Nancy','321','Honolulu','Hawaii','96825','USA','12','2013-12-08','7A8HXx','2022-09-04'),
	('550730600','Lazar','Aili','Yerlett','Bartillon','354','El Paso','Texas','79934','USA','11','2019-01-07','5wHFNs','2023-02-18'),
	('049549903','Cam','Allison','Gann','Anthes','3','Labelle','Québec','N2L','Canada','9','2021-07-12','vIj5zOR','2023-02-13'),
	('734709285','Bryan',NULL,'Romanelli','South','4','Philadelphia','Pennsylvania','19104','USA','15','2002-02-12','bPWiAXg27','2022-07-23'),
	('070159620','Whit','Biddy','Bracchi','Chinook','7','San Jose','California','95128','USA','16','2014-10-17','vLstyxBBG','2022-10-27'),
	('560338016','Gene','Ofella','Albone','Park Meadow','517','Erie','Pennsylvania','16534','USA','9','2018-03-13','mqkhquw','2022-05-25'),
	('828100380','Lynnett',NULL,'Frammingham','Bonner','2','Dallas','Texas','75260','USA','16','2021-06-05','EtUlO59E37y8','2022-10-17'),
	('511787510','Harlin','Teddie','Wyson','Fulton','9671','Fresno','California','93762','USA','16','2002-10-31','mKeXgBpAL','2022-11-28'),
	('882676978','Berny','Reinold','Hext','Northview','7804','Houston','Texas','77288','USA','16','2011-10-14','FoUKgMLECY','2022-04-20'),
	('209148157','Othella','Osmund','Pettit','Birchwood','1','Denver','Colorado','80241','USA','16','2000-07-10','ljIVdH','2022-11-01'),
	('894907802','Ruby','Jonas','Lovelace','Sommers','574','Hudson Bay','Saskatchewan','K2J','Canada','15','2017-06-29','GFlMrm6W0','2023-02-11'),
	('200558443','Marylynne','Melisande','Firmage','Westerfield','5396','Lachute','Québec','J8H','Canada','14','2009-01-09','U3j1ESif','2023-02-08'),
	('807050620','Daisey','Cathleen','Pallaske','Talmadge','605','Medicine Hat','Alberta','T1C','Canada','10','2002-04-10','cHkG0orHjWSn','2022-12-15'),
	('372670345','Erek','Carlos','Nassy','Roxbury','1452','Bronx','New York','10469','USA','16','2008-11-25','M15vk7Sdr','2022-10-17'),
	('882797991','Bridie','Frasier','Dochon','Shoshone','85','Tallahassee','Florida','32314','USA','15','2012-08-09','K8TmSO2Htz','2022-04-11'),
	('611562147','Bunnie','Iona','McMyler','Burrows','3178','San Francisco','California','94159','USA','15','2003-12-10','QeAmz1z','2022-05-30'),
	('816737436','Audrey','Zarla','MacAdam','Lillian','5','Albany','New York','12205','USA','13','2004-01-12','5UUJBOzPldq','2022-11-18'),
	('348449341','Shelba','Boothe','Addy','Leroy','284','Shreveport','Louisiana','71151','USA','10','2004-01-24','NS0Sol3Lk','2022-06-26'),
	('296820027','Dolli',NULL,'Aspole','Division','5','Honolulu','Hawaii','96850','USA','11','2005-07-24','XGfHg437t','2022-10-17'),
	('847676036','Judas','Thacher','Mushet','Loftsgordon','5346','Seattle','Washington','98185','USA','10','2019-08-11','urPbUZY','2022-09-26'),
	('696285726','Julius','Marshall','Barney','Swallow','33','Miami','Florida','33190','USA','13','2007-08-10','5E26wLOGl5t','2022-10-08'),
	('010308079','Juan',NULL,'Rebichon','Delladonna','4569','Lancaster','California','93584','USA','15','2020-12-05','vxo0lid3DRNZ','2022-05-14'),
	('115776923','Mira','Theresina','Guitton','Clemons','640','Wabana','Newfoundland and Labrador','V7X','Canada','10','2012-03-07','3N9VXLLrSiey','2022-10-09'),
	('717781474','Wakefield','Fielding','Sabate','Oriole','5825','Erie','Pennsylvania','16550','USA','13','2009-04-17','7yOulk','2022-05-05'),
	('956277232','Mathew','Marigold','Regler','Monument','29','Alma','Québec','N6J','Canada','15','2004-03-22','1LKCiv','2022-12-27'),
	('654677799','Farra','Claresta','Ohlsen','Jay','41','Pittsburgh','Pennsylvania','15255','USA','9','2013-12-16','0XqrIZ9nrGH','2023-03-09'),
	('141219217','Dianemarie','Nonnah','McRory','Surrey','2','Atikokan','Ontario','K1Y','Canada','16','2021-06-09','KBYLrN','2023-02-13'),
	('128951236','Rudolf','Mikel','Fossitt','Porter','7','Unity','Saskatchewan','J8R','Canada','11','2016-09-10','Iynu9dfxyTo','2022-10-08'),
	('710275658','Neron','Joby','Brownett','Anzinger','5','Lancaster','California','93584','USA','16','2013-07-28','VKu9kGJ','2022-06-24'),
	('022403228','Livy','Ardith','Dinsmore','Nelson','86','Seattle','Washington','98185','USA','14','2008-09-21','NKboCJB1','2022-07-28'),
	('310451879','Bettye','Marion','Wellwood','Lukken','9325','Manning','Alberta','V3A','Canada','10','2016-07-02','RtMU66kB54','2022-10-31'),
	('343875906','Gloriane','Raff','Chicchelli','Lillian','3294','Round Rock','Texas','78682','USA','12','2005-07-24','bAf3fi52Y','2023-01-16'),
	('810381294','Tallie',NULL,'Von Der Empten','Buhler','221','Springfield','Illinois','62711','USA','16','2018-02-03','5DajR0tYE','2023-04-04'),
	('081538962','Bernardine','Caril','Girodon','Elmside','31','Dallas','Texas','75210','USA','9','2011-10-04','JdlZaNp5','2023-03-15'),
	('278487131','Jolie','Webb','Sowter','Butterfield','8','Melville','Saskatchewan','S7W','Canada','13','2018-05-14','cGStji','2022-11-22'),
	('903599386','Munroe','Thedrick','Harlow','Merrick','4','Corona','California','92883','USA','11','2001-06-28','nPAacql','2022-11-03'),
	('213563189','Zonnya','Hamilton','Warfield','Clyde Gallagher','612','Springfield','Illinois','62711','USA','15','2015-10-09','D8AObvnI','2022-06-02'),
	('961434606','Shena','Lorrie','Tumioto','Green Ridge','08','Paterson','New Jersey','07522','USA','12','2002-07-29','An7X97','2023-01-09'),
	('731757571','Lucio','Tripp','Withinshaw','Elka','4','Penticton','British Columbia','V2A','Canada','10','2013-09-07','SZzuPIO','2022-06-07'),
	('047397598','Ben','Bar','Stritton','Carberry','27546','Stettler','Alberta','G8J','Canada','14','2004-03-26','e55Kc3','2023-02-21'),
	('605244404','Barrett','Evangelin','Sorbie','Jenna','011','Jacksonville','Florida','32244','USA','16','2015-08-15','IPwa5X2Cetil','2022-12-13'),
	('997591605','Isadore','Matthiew','Vasiliu','East','90','Lynn','Massachusetts','01905','USA','11','2004-09-01','tp1Vmxtqa','2022-12-01'),
	('616521016','Ivette','Hartley','Sidwick','Magdeline','01','Clearwater','Florida','34629','USA','11','2012-08-26','8wY3iVr','2022-08-18'),
	('057534850','Stanley','Casi','Murtagh','3rd','3','Yonkers','New York','10705','USA','14','2005-07-13','hnQp8wb','2022-12-15'),
	('382117997','Odelle','Valera','Foro','Morningstar','81','Seattle','Washington','98104','USA','13','2012-02-28','fS4ndi','2022-04-14'),
	('563352013','Kienan','Ambrosio','Fennelly','Hallows','2','Lacolle','Québec','E5A','Canada','12','2004-11-01','OegKacQIl','2022-11-06'),
	('751995700','Jacquelynn','Korry','Klimas','Mallard','4197','Miami','Florida','33129','USA','9','2012-06-18','IYe203N7','2023-02-12'),
	('953956871','Johanna','Marge','Stutt','Redwing','269','Dallas','Texas','75260','USA','15','2000-09-08','4gb2nXncX4','2022-07-12'),
	('301972377','Shara','Juieta','Rielly','Jana','02','White Rock','British Columbia','V4B','Canada','14','2014-10-10','rSheKi','2023-01-25'),
	('132351045','Angel','Trina','Paunsford','Rieder','1','Macklin','Saskatchewan','B0K','Canada','12','2016-10-04','JGq2ZU','2023-02-17'),
	('949469364','Worthington','Elfie','Pinnick','Fuller','5035','Austin','Texas','78726','USA','12','2001-01-15','YoHEvr','2022-05-22'),
	('256843819','Sapphira','Idette','Skill','Buell','128','Tuscaloosa','Alabama','35487','USA','9','2006-07-28','k4aHbAkvuu','2022-05-24'),
	('786369940','Maddie','Cher','Burbage','Anhalt','30','Keswick','Ontario','L4P','Canada','11','2008-03-01','wvIZtz','2023-03-27'),
	('380914751','Quintin','Monty','Heselwood','Prairie Rose','79','Seattle','Washington','98185','USA','12','2004-02-29','1AZkZjj6','2022-07-04'),
	('541518063','Madelaine','Michele','Anthes','Warner','4','Omaha','Nebraska','68110','USA','16','2006-06-01','Vt6p8OPW','2022-11-20'),
	('995335999','Kamillah','Lionello','Riby','Bunting','8','Saint-Bruno','Québec','J3V','Canada','5','2016-05-30','5rdoSA','2022-08-07'),
	('195437341','Andrej','Erminia','Danigel','Kedzie','3917','Catalina','Newfoundland and Labrador','B2V','Canada','4','2005-08-13','LmAO726TaHm','2023-02-15'),
	('463316581','Joella','Skylar','Bonallick','Talisman','7294','Las Vegas','Nevada','89155','USA','4','2017-05-21','BovXeu','2022-06-30'),
	('337930943','Madlin','Hugh','Avrashin','Shopko','0214','Corpus Christi','Texas','78410','USA','3','2009-04-06','29vIdruIE','2023-01-07'),
	('575768420','Otha','Brenna','Ewbanke','Victoria','3','Pasadena','California','91103','USA','8','2010-12-25','mASQgAlI','2023-01-27'),
	('893206472','Andriette','Montgomery','Geach','Oak','548','Wichita','Kansas','67236','USA','3','2007-02-10','vXy7VKy','2022-11-07'),
	('940871325','Gene','Debera','Cuttler','Cordelia','68','Conroe','Texas','77305','USA','2','2013-09-22','ln1mqvhtkI','2022-12-14'),
	('700634403','Orton','Kristyn','Windram','Fremont','120','Buffalo','New York','14205','USA','4','2002-11-20','7x7tog90dSe','2022-08-28'),
	('104480642','Fleur','Carrissa','Milkeham','Glacier Hill','230','Maple Plain','Minnesota','55579','USA','7','2007-05-06','jshSz9hb','2022-05-28'),
	('394832381','Cathie','Layton','Salatino','Bashford','8947','Valdosta','Georgia','31605','USA','2','2020-12-16','SEeFzz','2022-07-06'),
	('304078184','Giuditta','Aldrich','Adamo','Vidon','40','London','Ontario','N6C','Canada','7','2018-01-01','Td0PhiGzkpvN','2023-02-16'),
	('634442459','Adrian',NULL,'Andryszczak','Trailsway','55','North Perth','Ontario','E6J','Canada','2','2002-09-29','gCoAs2','2022-12-09'),
	('254919598','Beckie','Brooks','Duggen','Fairview','113','Flushing','New York','11355','USA','8','2000-05-03','Q4DERl9jU19M','2022-07-24'),
	('017130678','Guillema','Fowler','Hannah','Trailsway','7191','Omaha','Nebraska','68164','USA','2','2006-02-21','ySwHwk6','2022-10-22'),
	('076242770','Vinny',NULL,'Rikkard','Melby','843','Lumsden','Saskatchewan','L7E','Canada','3','2005-05-02','Eqm9iU','2023-01-15'),
	('019309569','Rafaelita','Rozele','Carling','Warrior','6242','El Paso','Texas','88574','USA','8','2000-08-24','Gr22hPUm','2022-11-08'),
	('459953641','Wallis','Malanie','Fassum','Ridge Oak','27','Houston','Texas','77228','USA','5','2015-09-29','1V4G6tgR','2022-11-20'),
	('580251098','Barrie','Mylo','Anders','Bowman','347','Lexington','Kentucky','40515','USA','4','2007-03-15','7JtfGTeg','2023-04-03'),
	('337185767','Ingra','Gibb','Pizer','Elka','070','Saint-Lambert','Québec','V6L','Canada','3','2006-09-05','6LmjsC','2023-03-09'),
	('922085371','Ofilia','Barn','Taffs','4th','9794','Colorado Springs','Colorado','80945','USA','7','2018-11-24','gm8Swiy7P','2022-12-09'),
	('547554228','Roxi','Boigie','Wathell','Monument','9566','Victoria','British Columbia','V9A','Canada','1','2013-07-11','kleFAVKNac','2022-05-23'),
	('734444862','Darla','Murielle','Rameaux','Anniversary','583','Moosomin','Saskatchewan','H4J','Canada','2','2010-11-04','orwQFCX6Y','2022-10-25'),
	('700989183','Saw','Katalin','Ottewill','Oriole','3132','Fresno','California','93715','USA','8','2016-07-25','YG7hDxrrnpss','2022-08-29'),
	('510450525','Ira','Any','Petz','Lyons','1','Lac-Mégantic','Québec','G6B','Canada','3','2017-11-07','YF0tOG21f','2022-10-13'),
	('358459490','Debor','Leone','Pattrick','Eagle Crest','780','Fort Worth','Texas','76178','USA','3','2012-11-13','NDMlyMTqkOQ','2022-08-19'),
	('732195829','Batsheva','Ches','Blague','Lotheville','8210','Fermont','Québec','J1E','Canada','6','2000-06-09','KJlFs84jprR','2022-05-07'),
	('420207459','Toddie',NULL,'Gabbot','Butternut','22','Dallas','Texas','75205','USA','7','2004-10-18','8HYSlmk','2023-02-14'),
	('722264659','Abigail','Adan','Gaskin','Menomonie','7221','Bedford','Québec','J6W','Canada','5','2021-05-03','EWj26wHTd','2023-02-25'),
	('772411316','Kendrick','Zsa zsa','Courteney','Division','8','Winter Haven','Florida','33884','USA','1','2017-12-09','MszYlv4jq','2022-09-28'),
	('789585165','Galina','Sam','McClancy','Larry','061','Nackawic','New Brunswick','E6G','Canada','6','2013-01-08','GFWPFMSsk','2023-01-09'),
	('392214854','Ashley','Lorinda','Jelphs','Logan','199','San Antonio','Texas','78285','USA','6','2001-06-29','wDDrZ8njV','2023-04-01'),
	('229342745','Emilee','Uriah','Petris','Eastwood','8','Selkirk','Manitoba','R1A','Canada','2','2016-04-07','iOxFASjMJ','2023-01-06'),
	('585472016','Constantino','Cristie','Duncanson','Novick','5854','Washington','District of Columbia','20530','USA','1','2001-03-20','KxneRJYTgk1','2022-10-13'),
	('182930932','Steven','Rodolph','Sidle','Redwing','23','Durham','North Carolina','27705','USA','1','2003-02-01','fOV0J01XI','2022-08-30'),
	('657185383','Michaela','Dante','Jindrich','Truax','200','Miami','Florida','33129','USA','3','2014-02-11','jPEWUzUuoT','2022-08-07'),
	('080096375','Jacklyn','Rhea','Tolotti','Marcy','40','Chicago','Illinois','60674','USA','2','2014-06-10','yi8vPZB','2023-01-06'),
	('679581155','Cecelia','Chrisy','Phripp','Michigan','6899','Honolulu','Hawaii','96805','USA','8','2020-01-31','yjdPHXei','2023-03-01'),
	('945083165','Karalynn','Lucinda','Olliffe','Northfield','14227','Chicago','Illinois','60657','USA','7','2003-07-06','M4PmXD1vRUSE','2022-06-27'),
	('800363398','Maiga','Robbie','Verney','Surrey','16','Catalina','Newfoundland and Labrador','B2V','Canada','2','2019-03-20','XQaC9pw','2022-05-08'),
	('983324048','Leandra','Rodger','Cuttings','Roxbury','227','Sacramento','California','95852','USA','5','2000-07-21','YAhoLvq','2022-10-03'),
	('920209803','Morey','Thom','Lidgard','Sloan','3','Oklahoma City','Oklahoma','73190','USA','8','2015-01-02','CebHAFB','2022-04-16'),
	('366852821','Cointon','Friedrich','Sevin','Autumn Leaf','5','Baton Rouge','Louisiana','70826','USA','2','2000-05-07','jLrvel','2023-01-26'),
	('664892385','Shell','Donielle','Crowcroft','Prairieview','96','Wolfville','Nova Scotia','B4P','Canada','7','2000-03-23','aqBgIBE','2022-09-05'),
	('009928489','Kasey','Cristine','Gristhwaite','Golden Leaf','67','Bryan','Texas','77806','USA','7','2008-07-09','fWEeyI7ywMl','2022-07-07'),
	('264742041','Ellette','Sande','Athelstan','Claremont','09448','Peachland','British Columbia','B3S','Canada','7','2018-11-29','57QuiAmg','2022-10-08'),
	('382294219','Gherardo','Tyler','Dripps','Parkside','52','Rosthern','Saskatchewan','B0L','Canada','6','2001-07-04','gFliW5sbW','2023-01-21'),
	('215444142','Swen','Maje','Viegas','Marquette','14','San Jose','California','95128','USA','1','2000-10-21','N6tQGRxJGo','2022-08-23'),
	('326268069','Ali','Florence','Bannard','John Wall','2348','Thetford-Mines','Québec','G6G','Canada','8','2018-07-28','hkdDqx2c9z','2022-11-27'),
	('017288164','Ondrea','Gretta','Farady','Gina','2','Milwaukee','Wisconsin','53234','USA','7','2022-08-09','rk4nPzgh','2023-02-22'),
	('634084328','Arty','Janis','Montford','Hudson','7129','Midland','Michigan','48670','USA','4','2019-01-12','txApAryN','2022-08-30'),
	('527562421','Weber','Fernandina','Guerreiro','Miller','82','Champaign','Illinois','61825','USA','3','2013-09-20','iJExz5VPu','2023-03-05'),
	('645236320','Falito','Annmarie','Beneteau','Burrows','6','Parry Sound','Ontario','P2A','Canada','4','2011-09-05','I88r3v3rLY','2023-02-05'),
	('290588145','Arlee','Kacie','Mathon','Iowa','408','Belfast','Prince Edward Island','L6S','Canada','5','2022-02-01','tDjBtuGckF','2023-03-17'),
	('832954633','Wolfie','Bowie','Billham','Clove','7050','Philadelphia','Pennsylvania','19191','USA','1','2017-12-07','tHkJLmr06','2022-09-21'),
	('919852757','Farlee','Jedd','Gioan','Lakeland','2232','Houston','Texas','77281','USA','1','2003-02-15','h6lVmTNUvR','2023-03-12'),
	('545441687','Darrel','Michele','Pattenden','Springview','6660','Richmond','Virginia','23289','USA','8','2010-10-07','WckbDtQ','2022-07-03'),
	('742288419','Lane',NULL,'Winham','Sheridan','909','Lanigan','Saskatchewan','J7A','Canada','3','2005-05-11','K976sAy6ak','2022-10-01'),
	('723638598','Lezlie','Dennis','Petrillo','Elmside','819','L''Épiphanie','Québec','J5X','Canada','1','2014-09-24','Ju2uft42','2022-08-22'),
	('256897125','Baron','Kort','Burrage','Nevada','728','Scranton','Pennsylvania','18505','USA','5','2000-11-26','RGQUYVjAj5Q','2022-08-28'),
	('359553531','Renaud','Lloyd','Johansen','Bunting','412','Lacombe','Alberta','T4L','Canada','2','2017-10-27','SljuRan59','2022-12-01'),
	('118274933','Pincas','Starr','Grunnill','Oneill','76','San Francisco','California','94154','USA','6','2014-05-22','zwC1kt','2022-04-08'),
	('693063737','Kirbie','Derrik','Kelberman','Glendale','3685','Seattle','Washington','98195','USA','2','2018-10-08','5NnfmEaeiJ','2023-02-20'),
	('109977497','Shirleen','Karoly','Extal','Bunting','7029','Newport News','Virginia','23605','USA','2','2020-12-13','NzFa1PeEzqI','2023-01-05'),
	('659971881','Cleveland','Adelice','Cloonan','Westerfield','77','Knoxville','Tennessee','37914','USA','8','2014-08-28','UNSQKZmN9M','2023-03-20'),
	('198484970','Krisha','Kathe','Learoid','Burrows','2','Hantsport','Nova Scotia','N5A','Canada','8','2008-08-09','ZW9Ym2q8VmLe','2022-10-15'),
	('624953763','Almira',NULL,'Cutmore','Little Fleur','5006','Washington','District of Columbia','20238','USA','3','2020-04-20','EUVBHkPjg','2023-03-08'),
	('289073868','Randal','Ragnar','Benardette','Portage','8','Pilot Butte','Saskatchewan','N8M','Canada','3','2018-12-15','cRMCMl','2022-11-13'),
	('765239739','Byram','Normand','D''Orsay','Logan','6622','Thessalon','Ontario','P0T','Canada','3','2017-08-02','fzPJN37xW','2022-07-21'),
	('871199721','Hanna','Courtney','Moyles','Stuart','20','Hantsport','Nova Scotia','N5A','Canada','5','2020-05-22','zMcIdqmQ','2022-11-24'),
	('070079523','Yasmeen','Lukas','Louisot','Armistice','239','Stockton','California','95205','USA','46','2001-09-15','lTohPyUmN3rj','2023-03-26'),
	('286871640','Darn','Gerhardine','Dhenin','Fairview','97','Dallas','Texas','75323','USA','42','2015-08-02','Oin25D8','2022-10-03'),
	('873731172','Dal','Colas','Slora','Lawn','17','Wichita','Kansas','67210','USA','41','2001-06-21','7YT3tcSY1','2022-08-06'),
	('367671306','Dania',NULL,'Smaile','Huxley','9277','Nashville','Tennessee','37220','USA','41','2017-01-13','WX0t929usttd','2022-07-20'),
	('285638786','Nell','Arne','O''Lenane','Forest Run','1449','Sainte-Adèle','Québec','J8B','Canada','44','2005-11-23','2zdIJ4','2022-11-26'),
	('354081457','Darsie','Brana','Leyshon','Eastwood','3','Harrisburg','Pennsylvania','17121','USA','43','2016-07-17','y7VofcDFtUXa','2022-10-01'),
	('535916356','Ola','Durant','Fairley','Debra','1429','Montgomery','Alabama','36177','USA','47','2013-06-05','6sqV1n7ME','2022-09-10'),
	('398282696','Nicholle','Billi','Eudall','Rockefeller','3','Hudson','Québec','J0N','Canada','44','2013-02-02','OWrtglFNuaE','2022-10-13'),
	('475643431','Rafaelia','Becka','Hadaway','Tony','5236','Seattle','Washington','98140','USA','47','2002-12-22','X8lQw2c89C','2023-03-18'),
	('661235242','Humphrey','Elset','Bottomley','Cordelia','64','Irving','Texas','75037','USA','44','2005-05-05','U8oEjL','2023-03-18'),
	('021613048','Abbye','Fidelio','Toogood','Spohn','8','Knoxville','Tennessee','37931','USA','46','2017-11-02','x7QudzMaVycS','2022-05-15'),
	('131246107','Tally','Piotr','Conklin','Warrior','5295','Huntsville','Alabama','35815','USA','47','2014-03-16','z4ildSZfv3a','2023-01-12'),
	('380031194','Ingeberg','Dukey','Grayling','Esker','5','Peachland','British Columbia','B3S','Canada','43','2021-07-12','YinIL6U','2022-06-04'),
	('300510273','Annette','Richardo','Berntssen','Mallory','3','Portland','Oregon','97211','USA','41','2002-05-07','vCiHtlGT84d3','2023-02-16'),
	('965348245','Justin','Ferris','Manuello','Dwight','671','Kingsport','Tennessee','37665','USA','47','2001-10-03','R5NDh4Kd','2022-05-05'),
	('161031217','Dawna','Kimberlyn','Imloch','Alpine','3798','Dalmeny','Saskatchewan','M4P','Canada','42','2007-03-11','8D6lCU62qJtF','2022-11-02'),
	('347279717','Bent','Arleta','Harlowe','Crescent Oaks','53','Oklahoma City','Oklahoma','73124','USA','42','2000-07-12','vKVnyaRiUiK','2022-11-29'),
	('479933039','Wittie','Saul','Recke','Knutson','4491','Magrath','Alberta','J7G','Canada','46','2019-01-02','BK6dAtujGiyp','2023-03-04'),
	('668118213','Darby','Reyna','Fenny','Mallard','941','Whitehorse','Yukon Territory','Y1A','Canada','42','2010-09-05','YJiTX8WBIye','2023-02-28'),
	('155138802','Deidre','Carson','Battye','Summerview','2540','Pittsburgh','Pennsylvania','15279','USA','41','2020-03-01','Gw6X0vSdNIV','2022-06-18'),
	('302673586','Shawnee','Leroi','Cranton','Valley Edge','4368','Leduc','Alberta','T9E','Canada','46','2007-08-28','6u5GkMg','2022-09-09'),
	('504472981','Lyndsay','Carrol','Rackam','Hooker','7','Madison','Wisconsin','53726','USA','42','2011-03-14','AEbZ53ccmIRD','2022-11-12'),
	('603093902','Avis','Emiline','Lucio','Knutson','348','Fullerton','California','92640','USA','44','2007-05-25','WM4YFxMOc','2023-02-09'),
	('993906150','Kris','Trace','Bonafant','Cody','8610','Oka','Québec','J0N','Canada','41','2016-05-17','LmgyuGMPHj','2022-10-26'),
	('660866437','Laurel','Minerva','Kingscote','Northridge','4834','Jacksonville','Florida','32244','USA','46','2012-05-21','6m3xKQdb4','2022-12-24'),
	('954951758','Haskell','Reese','Fisk','Meadow Valley','2','Oak Bay','British Columbia','V8S','Canada','45','2016-12-07','llFG4KnOiU','2023-02-19'),
	('254153344','Elmer',NULL,'Hafford','Tomscot','4990','Rayside-Balfour','Ontario','G9T','Canada','41','2007-05-29','BCMR6Gzbgjm','2023-01-16'),
	('385151715','Glenden','Lanae','Poat','Meadow Ridge','56','Omaha','Nebraska','68110','USA','44','2006-08-02','3cFiyX5C5','2022-09-25'),
	('795518323','Torrin','Idette','Sorbey','Artisan','417','Salaberry-Valley','Québec','J3Y','Canada','48','2019-10-22','qmg6b4s','2023-01-01'),
	('725694974','Evelin','Perl','Zold','Corry','41','Whittier','California','90605','USA','42','2000-03-28','3dKzXFPGbodS','2022-12-26'),
	('702826532','Trish',NULL,'Heephy','Heath','864','Weyburn','Saskatchewan','S4H','Canada','41','2016-03-04','1NRcCcq5Re','2022-06-11'),
	('396853523','Concordia','Gilda','Powder','Calypso','8918','Lansing','Michigan','48912','USA','46','2004-02-13','TjjFyAOIa','2022-10-22'),
	('499762885','Odessa','Gretchen','Rosser','Lillian','0644','El Paso','Texas','79940','USA','45','2014-06-27','Wos84cgn14','2023-02-18'),
	('792680491','Sharl','Rory','Esome','Transport','8462','Columbus','Ohio','43268','USA','47','2002-08-21','jlNFGK','2022-09-22'),
	('248008122','Noelani','Joyann','Osbaldstone','Hintze','020','Kerrobert','Saskatchewan','T1P','Canada','44','2003-11-29','1BxtWMFXGX','2023-02-09'),
	('895198076','Wyn','Karl','Tennison','Mccormick','2117','Brooklyn','New York','11254','USA','42','2014-02-03','ujdO3oJWHH3Y','2022-06-20'),
	('116102174','Josephine',NULL,'Valencia','Mallory','59','Chicago','Illinois','60614','USA','42','2017-05-08','Y7lexysA','2022-12-29'),
	('484913344','Haywood','Moll','Dunbobbin','Luster','78','Saint John','New Brunswick','E2L','Canada','46','2009-03-24','5OOvFXhECh','2022-10-06'),
	('352715958','Zacharia','Chrisy','Fassum','Schlimgen','7472','Dearborn','Michigan','48126','USA','48','2016-02-04','EFtTKiUP','2022-05-04'),
	('989053420','Ginnifer','Gare','McKenna','Village','964','Schenectady','New York','12305','USA','42','2010-04-04','x2aVk1tQ','2022-12-22'),
	('527313997','Rosalinde','Dottie','Organ','Lake View','2','Savannah','Georgia','31410','USA','45','2000-06-02','g4RNMVVqZy8b','2022-09-29'),
	('636003100','Mari',NULL,'Gollard','Holmberg','5478','Columbus','Georgia','31998','USA','48','2015-05-01','aysaSMJ','2022-04-24'),
	('576695306','Amy','Aaren','De Roberto','Mosinee','7240','Oklahoma City','Oklahoma','73119','USA','47','2008-04-09','433IxS4mom','2023-03-18'),
	('513056640','Amery','Ignace','Acheson','Loeprich','60','Cleveland','Ohio','44105','USA','45','2003-08-18','9He1WEt43X','2022-11-08'),
	('977718858','Krista','Deloria','Mewhirter','Kings','1187','Biloxi','Mississippi','39534','USA','48','2020-05-05','JOLeiujCCkF','2022-07-06'),
	('766005629','Daria','Jacob','Littlefair','Glacier Hill','6692','Lubbock','Texas','79405','USA','44','2009-08-27','58IrynScES2U','2022-10-15'),
	('659295184','Ravid','Warden','Deners','Pleasure','67','Norfolk County','Ontario','T0C','Canada','41','2007-01-14','dQavkuJvM1FK','2022-11-05'),
	('599351547','Quinn','Lilah','Ozelton','Harbort','4181','Tampa','Florida','33686','USA','46','2006-01-20','RWpeVdWU','2022-05-28'),
	('658880088','Charlene','Valentine','McPeice','Merrick','527','Burns Lake','British Columbia','M4H','Canada','41','2007-01-04','w6riKCh3ZMM','2023-03-30'),
	('555594477','Arlene','Fairfax','Raleston','Carpenter','4','Los Angeles','California','90065','USA','46','2002-07-18','aEB2DM','2023-02-25'),
	('933435885','Chrysler','Agretha','Huffey','Bluejay','224','Mont-Joli','Québec','G5H','Canada','41','2022-09-08','Du3hve','2023-04-03'),
	('697306663','Joelynn','Timoteo','Tharme','Jenna','2','New Glasgow','Nova Scotia','B2H','Canada','42','2020-11-28','0Dq4BhZ58xIN','2022-12-26'),
	('930820246','Ludwig','Hector','Longstreeth','Tennessee','31','Durham','North Carolina','27717','USA','48','2000-03-11','9M8XWj','2022-05-11'),
	('761948719','Lynelle','Sly','Farfalameev','Gulseth','20','Lacombe','Alberta','T4L','Canada','46','2015-02-19','tQvyezEvHPS','2023-03-09'),
	('496420178','Sarena','Merle','McAlees','Oxford','9','New York City','New York','10270','USA','43','2013-10-09','LB5xjjtY','2022-11-07'),
	('696959175','Christophorus','Hillary','MacColm','Utah','96','Bakersfield','California','93305','USA','43','2015-02-05','OeTgsCLqyJNm','2023-03-10'),
	('538911561','Alisa','Sutherland','Overland','Manitowish','35','Milwaukee','Wisconsin','53225','USA','47','2015-06-04','qr084sOx','2022-07-10'),
	('688092546','Ruthie','Falito','Boyett','Mitchell','3356','Honolulu','Hawaii','96840','USA','45','2019-11-27','4oz2s8v','2022-12-16'),
	('941645784','Bernhard','Al','Conybear','Paget','817','Cornwall','Prince Edward Island','L4E','Canada','41','2015-03-27','i27J6l','2023-03-05'),
	('683395991','Raddy','Danika','Willbourne','Beilfuss','2','Hanna','Alberta','T6L','Canada','47','2001-11-01','F1SizQy8ekg7','2022-09-23'),
	('373871261','Jaquenette',NULL,'Feare','Buell','8','Lions Bay','British Columbia','K4K','Canada','45','2022-01-20','Zc9qru8e','2022-08-27'),
	('086915286','Sibyl','Vevay','Catt','Manufacturers','7','Peterborough','Ontario','K9H','Canada','45','2007-10-04','YuOJ7W','2022-06-22'),
	('309742190','Ceciley',NULL,'Ertelt','Hollow Ridge','7','New York City','New York','10131','USA','44','2004-03-27','ZOIrtt','2023-01-04'),
	('733341643','Anthea','Maren','Healings','Elmside','09','Alhambra','California','91841','USA','46','2001-09-03','wGqYcPTxut','2022-04-13'),
	('184235028','Goldarina','Hobey','Elener','Rowland','1924','Killarney','Manitoba','V9B','Canada','44','2011-04-27','3xMBm2BnY6Tl','2023-04-03'),
	('363031257','Marge','Avis','Ludee','Golden Leaf','55','Kapuskasing','Ontario','P5N','Canada','47','2006-05-24','hIy45IA1h','2022-11-30'),
	('538811363','Hewett','Billy','Gannaway','Steensland','6','Seminole','Florida','34642','USA','47','2009-10-11','3GXOR6j','2022-12-24'),
	('767603786','Reeta','Salvidor','Rengger','Continental','1934','Pasadena','California','91103','USA','42','2018-02-27','BA2YYKjEIx','2023-03-07'),
	('169727610','Munmro','Raimundo','Coleyshaw','Kinsman','4523','Stonewall','Manitoba','H9J','Canada','41','2017-04-17','x29SLt6Ju','2023-04-01'),
	('210037514','Laney','Blithe','Jouanot','South','7565','Pittsburgh','Pennsylvania','15255','USA','41','2007-11-23','Bjkhwc','2023-03-16'),
	('718097813','Tamiko','Nikki','Putland','Bonner','9','Erie','Pennsylvania','16505','USA','41','2021-11-28','RCBduu','2022-06-05'),
	('310769769','Ingmar',NULL,'Megson','3rd','20246','Stonewall','Manitoba','H9J','Canada','42','2000-05-20','DtDCeg','2022-07-24'),
	('855003850','Vilhelmina','Leontine','Crimp','Manitowish','25027','Baltimore','Maryland','21239','USA','48','2018-07-06','3NcYIVNKANB','2022-05-14'),
	('513495927','La verne','Kriste','Poller','Heffernan','32','San Diego','California','92110','USA','42','2006-01-14','H7UyyseVK1','2023-01-15'),
	('293211923','Esther','Gabi','Cashin','Waywood','740','El Paso','Texas','88530','USA','41','2007-07-29','iDTK10','2022-10-01'),
	('849310884','Alwin','Lucho','Lorimer','Jana','43','Fairview','Alberta','L1M','Canada','47','2021-06-26','MLaUtX3','2022-04-28'),
	('980051334','Ambrosio','Mikel','Haggerty','Kensington','4','Seattle','Washington','98104','USA','41','2019-08-24','F4B3q1nB','2022-11-25'),
	('422367765','Tamqrah','Noel','Doumerque','Namekagon','6806','Fort Wayne','Indiana','46896','USA','46','2011-07-30','1ncUBo5hHth','2023-01-14'),
	('779959270','Dallon','Lita','Lobley','Eliot','226','Newport Beach','California','92662','USA','43','2010-01-04','TY3NEU3gadAB','2022-12-17'),
	('230912484','Adora','Elka','Haysham','Muir','74','Mobile','Alabama','36670','USA','46','2022-05-22','jciiuoIqO','2022-09-26'),
	('961488758','Charley',NULL,'Mattioli','Talisman','85','Rockford','Illinois','61110','USA','41','2019-12-29','gcDFtM','2022-09-14'),
	('118029063','Pattin','Queenie','Dearsley','Schurz','8787','Olympia','Washington','98516','USA','47','2018-08-27','nKctot0Xms7','2022-07-18'),
	('684561003','Abra','Corey','Gulk','Sauthoff','5','Atlanta','Georgia','31165','USA','42','2017-03-25','VHj1EmnK','2022-05-24'),
	('916181316','Nigel','Rafaelia','Johansson','Green Ridge','48','High River','Alberta','T1V','Canada','45','2013-03-02','3QQ0trl','2022-05-19'),
	('989279374','Helenelizabeth','Natala','McFall','Loeprich','2','Oklahoma City','Oklahoma','73173','USA','45','2002-05-19','3n4PXQ3pe','2022-04-06'),
	('101703332','Slade','Nevsa','Dumpleton','Village','92','Anchorage','Alaska','99522','USA','45','2010-12-22','O2HjVJ','2022-08-08'),
	('150036413','Selby',NULL,'Buffery','Randy','0172','Anaheim','California','92825','USA','44','2011-04-12','rpEffnutO3Pi','2022-05-09'),
	('241351852','Olwen','Stacie','Black','Butternut','7419','Cincinnati','Ohio','45223','USA','44','2014-10-06','2kv40kDyXn6z','2023-01-27'),
	('075595313','Helenka','Devinne','Astling','Dottie','4423','Glendale','California','91210','USA','45','2003-04-21','bU58kVlG','2023-01-06'),
	('779912628','Silvain','Lowe','Vader','Browning','8','Oklahoma City','Oklahoma','73190','USA','41','2020-11-23','9Fvb7GsT','2022-11-25'),
	('593708876','Tallou','Teddie','Taber','Petterle','6794','Staten Island','New York','10305','USA','45','2005-07-23','GY4ldoQ','2022-05-27'),
	('981158401','Salem','Leon','Marguerite','Lindbergh','9970','Austin','Texas','78769','USA','42','2007-10-14','9Wj2AMstg','2023-02-28'),
	('337705323','Christiana','Shina','Fittes','Meadow Ridge','10','Burns Lake','British Columbia','M4H','Canada','24','2017-12-06','Y5WUwrZglAnq','2023-03-29'),
	('755529870','Auberon',NULL,'Creddon','Graceland','87','Winnipeg','Manitoba','R3L','Canada','20','2005-04-17','tzAgJGzXg','2022-07-15'),
	('755839794','Vera','Layney','Hadland','Mcguire','7149','Beaverton','Oregon','97075','USA','19','2020-10-24','DrHBjIXr4','2022-06-15'),
	('478479406','Aubrie','Mirna','Pagelsen','Waxwing','844','Albany','Georgia','31704','USA','17','2004-11-28','hJpdE7','2023-03-01'),
	('278586482','Winifield','Antonietta','Pessel','Mallard','53','Stratford','Ontario','C1B','Canada','22','2002-03-07','pt7x8HUjE05a','2022-09-17'),
	('452807941','Dinnie','Federica','Maltby','Hollow Ridge','3922','Dayton','Ohio','45426','USA','24','2010-01-21','8ZeKLVy','2022-09-24'),
	('618631830','Pia','Garald','Feary','Pennsylvania','8','Indianapolis','Indiana','46278','USA','20','2007-04-02','yAd7uXWeudaO','2022-07-22'),
	('873944385','Aigneis',NULL,'MacCallister','Fairview','2006','Colorado Springs','Colorado','80930','USA','18','2002-03-23','IImrh8JAQj5L','2022-04-06'),
	('310513814','Galina','Newton','Bartalot','Sauthoff','4727','Baltimore','Maryland','21281','USA','23','2002-03-04','7Ee4Zau7T5','2023-01-31'),
	('594424595','Manfred','Patrizius','Yarnton','Blackbird','461','Ladner','British Columbia','V7A','Canada','21','2015-01-11','J8mtoS','2022-05-10'),
	('611482301','Leonhard','Brigitte','O''Hanley','Dorton','22','Los Angeles','California','90045','USA','23','2008-12-09','cZ1XM3','2022-05-23'),
	('047104623','Eldredge','Phip','Godsafe','Rigney','7','San Antonio','Texas','78205','USA','24','2019-06-30','VxG3CHsiLZ','2022-07-05'),
	('374261430','Tremaine',NULL,'St Ledger','Bartillon','17512','Saint Louis','Missouri','63131','USA','23','2002-04-02','vqpZ1fSsF','2022-11-28'),
	('881279462','Mariam','Suzette','Breadmore','Hudson','4890','Port Colborne','Ontario','L3K','Canada','17','2005-12-25','i5rLTKzRYNP','2022-12-29'),
	('645642078','Gordy','Teirtza','Robbs','Birchwood','2511','Miramichi','New Brunswick','L7G','Canada','23','2003-01-24','yxubcuFZ','2023-01-05'),
	('389803053','Timmy','Terencio','Cogin','Mcbride','7817','Orlando','Florida','32868','USA','22','2007-04-18','4FBiEF6g2g2I','2022-07-25'),
	('315215862','Dorolice','Kati','Epdell','Paget','6866','Chicago','Illinois','60686','USA','19','2019-09-01','Cjq50mAr1L','2022-11-10'),
	('562445066','Gaile',NULL,'Laydon','Ramsey','363','Leduc','Alberta','T9E','Canada','18','2006-05-22','PZHqfe','2022-09-21'),
	('698110055','Sarina','Gillan','Cayette','Sundown','6','Carleton Place','Ontario','K7C','Canada','18','2000-07-02','I8oZg0Q4frr','2022-09-21'),
	('327867367','Paten','Travers','Willgrass','Columbus','59','Saint-Bruno','Québec','G6B','Canada','20','2017-01-20','qoOkfW9Q','2022-12-01'),
	('129886885','Blithe','Elsy','Ebhardt','Colorado','2562','El Paso','Texas','88519','USA','22','2020-10-16','8aqPwC','2022-09-20'),
	('019911591','Lotta','Caro','Mein','Vera','13','Lincoln','Nebraska','68517','USA','23','2003-06-08','TEcbS6','2022-10-14'),
	('802726594','Sax','Gabie','Lockie','Milwaukee','69','Boca Raton','Florida','33487','USA','24','2014-08-04','qRO5KSzj5YD','2022-10-06'),
	('512715318','Eirena','Etta','Fulk','La Follette','580','Irving','Texas','75062','USA','19','2018-05-01','oW4zd5QT','2022-12-13'),
	('027633813','Raychel','Lorant','Lindman','Cordelia','4332','Jamaica','New York','11407','USA','22','2015-01-07','LLt0P1J','2022-06-13'),
	('537789326','Albertina','Brenn','Magarrell','Cottonwood','5449','Pittsburgh','Pennsylvania','15240','USA','23','2012-08-29','R8MYLwuD8C','2022-07-02'),
	('264986278','Adelaida','Nolan','Haverty','Jay','6','Dorchester','Ontario','E4K','Canada','20','2014-04-30','4o34dxcaXzgD','2022-12-02'),
	('185019386','Emanuele','Fredric','Dovydenas','Surrey','117','Macklin','Saskatchewan','B0K','Canada','17','2017-01-27','SCZ7zzLnwos','2023-03-19'),
	('663855069','Rosamund',NULL,'Dukesbury','Erie','2010','Lincoln','Nebraska','68517','USA','23','2006-01-04','Rz0WMWblqR','2023-01-07'),
	('248940863','Flemming','Keelby','McGuffie','Heffernan','7893','Honolulu','Hawaii','96850','USA','17','2000-09-19','YBGsgh5tue5r','2022-09-17'),
	('913662727','Violetta','Annetta','Wimpenny','Fallview','26','Keswick','Ontario','L4P','Canada','22','2007-10-19','bYWLFami','2022-12-02'),
	('585359382','Inger','Budd','Unthank','Susan','087','Atlanta','Georgia','30358','USA','24','2000-03-27','nIFugndjI','2022-05-29'),
	('365153447','Frederich','Hewet','Gasquoine','Menomonie','202','Washington','District of Columbia','20226','USA','19','2015-09-09','FPFUAnx6G','2022-06-28'),
	('144931681','Pippy','Barrett','Bubbear','Killdeer','20','Salt Lake City','Utah','84170','USA','21','2011-08-27','k4cr2OJ99','2022-06-12'),
	('138579647','Lonnard','Broderick','Aireton','Graedel','545','Antigonish','Nova Scotia','B2G','Canada','20','2011-09-03','ENxL3A','2022-12-22'),
	('403410268','Mercy','Angelo','Steddall','Hooker','3','Banff','Alberta','T1L','Canada','23','2019-08-19','vKqAZP9saQHj','2023-02-18'),
	('522968252','Chris','Lanette','Chapier','Thierer','427','Houston','Texas','77288','USA','18','2015-05-20','nSAMbTYhl','2022-04-07'),
	('374090107','Timmie','Devinne','Houltham','Independence','634','Rivière-du-Loup','Québec','G5R','Canada','19','2009-06-09','9fv0zYWP10o','2022-11-14'),
	('916846842','Avivah','Stacy','Sustins','Hoard','754','Morden','Manitoba','R6M','Canada','19','2006-10-16','2kpfpD9Ar7','2022-04-27'),
	('995918489','Catha','Reggis','Denes','Nevada','2','New Haven','Connecticut','06510','USA','21','2011-11-27','xvwYJG','2022-09-21'),
	('951038165','Devin','Dody','Le Sarr','Golden Leaf','777','Concord','Ontario','L4K','Canada','18','2019-06-05','MmF4TWIb','2022-11-09'),
	('755628484','Vita','Wyndham','Vesty','Clove','5','Rochester','Minnesota','55905','USA','23','2021-10-06','8lqalWtWTP','2022-12-09'),
	('777105730','Irena','Osbourn','Hillett','Karstens','5','Atlanta','Georgia','30358','USA','20','2020-03-01','u1xw1hl','2022-10-09'),
	('127885952','Indira','Hayley','Earlam','Arapahoe','9226','Los Angeles','California','90045','USA','22','2009-05-02','mU7mVa5','2022-06-06'),
	('175465147','Berty','Nathanael','Sobtka','Luster','5','Springfield','Massachusetts','01129','USA','22','2007-03-07','bdhBGV9trL','2022-08-13'),
	('481057108','Levi',NULL,'Springell','Fisk','300','Sussex','New Brunswick','E4E','Canada','23','2014-04-02','z3rD67EGbl','2022-04-23'),
	('282973162','Lyle','Hettie','Woodroffe','Novick','8','Tucson','Arizona','85743','USA','18','2002-07-18','rRFMWd7r','2022-12-10'),
	('315638273','Leanna',NULL,'McKall','Brickson Park','429','Vulcan','Alberta','V6M','Canada','19','2020-11-27','tgohdK','2022-06-19'),
	('815329502','Linet','Albertine','Sywell','Miller','4309','Swan Hills','Alberta','L2T','Canada','23','2018-07-08','lR4WEfJ4s','2022-07-31'),
	('780876577','Hew','Lou','Landor','Walton','589','Maple Plain','Minnesota','55579','USA','18','2013-09-26','FutWiX1sGU','2023-01-16'),
	('453089513','Niki',NULL,'Fulton','Reindahl','8','Milwaukee','Wisconsin','53277','USA','18','2008-07-20','mQ7zN99v','2022-12-10'),
	('654049198','Patty','Beryl','Shelf','Ilene','19','Orlando','Florida','32868','USA','19','2016-01-30','w3F8LBdDQ','2023-01-16'),
	('712287466','Felita','Ingunna','Boote','Ronald Regan','3001','Rimouski','Québec','G5N','Canada','21','2019-02-27','Am1sP6Gmpz0r','2022-11-10'),
	('667066973','Dorie','Manny','Ladd','Texas','8840','North Little Rock','Arkansas','72199','USA','20','2012-08-21','MTv5UsSck','2022-08-26'),
	('986101408','Brenden','Lorrie','Kitson','Washington','091','Ladner','British Columbia','V7A','Canada','20','2007-06-19','RLuSICX1Go1','2022-07-14'),
	('902157098','Adria','Ambrosi','Kissock','Bellgrove','771','Philadelphia','Pennsylvania','19172','USA','20','2013-11-23','aRVFEcW','2022-07-01'),
	('360506771','Hyacinthe','Elinor','Cleve','Division','07','Maple Plain','Minnesota','55579','USA','21','2019-03-02','PLSaUKiPJUEd','2022-10-13'),
	('579884877','Dolores','Aurora','Petken','Cambridge','672','Hamilton','Ohio','45020','USA','24','2014-08-05','k5nd6dZ','2023-03-03'),
	('040888723','Dore','Ricky','Abrahamsson','Forest','8809','Detroit','Michigan','48242','USA','23','2003-05-24','1pLgkaVCZ4','2023-03-11'),
	('903320963','Dasie',NULL,'Hewkin','Maple','757','Cincinnati','Ohio','45249','USA','23','2004-06-29','ppu5Pf','2022-10-14'),
	('011136617','Jessy','Pierson','Ranyard','Northridge','8925','Plessisville','Québec','G6L','Canada','23','2000-05-08','0GbgJCMJ','2022-07-03'),
	('248216865','Loise',NULL,'Cassimer','Fallview','4','Springfield','Illinois','62756','USA','20','2009-11-14','q9BY1Nmbv','2023-02-07'),
	('631142117','Zackariah','Dawna','Peracco','Waywood','7','Saint-Félicien','Québec','G8K','Canada','22','2018-09-13','Acnwukfsx','2022-05-03'),
	('012104008','Zacherie','Perry','Croisier','Muir','1','Tampa','Florida','33647','USA','18','2011-01-01','ENiX23S','2023-01-30'),
	('384575204','Giacobo','Ingar','Boden','Blackbird','8','North Perth','Ontario','E6J','Canada','17','2022-01-17','QwyJICEUlZ','2022-08-20'),
	('050309000','Shayne','Rogerio','Bencher','Susan','2','Tucson','Arizona','85754','USA','18','2007-08-22','u5WnZNHMsG','2022-08-14'),
	('188773797','Stanfield','Isaiah','Burnhams','3rd','9410','Huntsville','Alabama','35805','USA','17','2000-03-24','lTcgTYCqLDun','2022-09-11'),
	('153826519','Lynn','Ashlen','Kernaghan','Ryan','8','Arlington','Texas','76011','USA','22','2014-02-13','HUNPuE','2022-07-12'),
	('234693947','Antoinette','Suki','Jessett','Ohio','8421','Phoenix','Arizona','85025','USA','22','2018-08-12','7nMJsHRQ2qiX','2022-04-10'),
	('077773256','Donelle','Richmond','Merrison','Arkansas','8645','El Paso','Texas','88541','USA','22','2020-09-07','iJw70n','2022-08-06'),
	('271350185','Colin','Ofelia','McKinie','Elmside','58','Belfast','Prince Edward Island','L6S','Canada','20','2015-10-05','4ILSzH','2023-03-07'),
	('045036961','Chucho','Ignatius','Denford','Saint Paul','28362','Millet','Alberta','T8C','Canada','17','2020-09-07','TImaXi','2022-12-17'),
	('056663012','Zeke','Alford','Dumberell','Clyde Gallagher','7','Dollard-Des Ormeaux','Québec','H9P','Canada','19','2013-12-14','lSDuf3OV','2022-05-14'),
	('861179564','Elmo','Carree','Dunlop','David','59','Phoenix','Arizona','85099','USA','22','2001-04-19','kOU1o2Bd','2023-01-17'),
	('443012879','Fidela','Kata','Theobold','Iowa','8','Little Rock','Arkansas','72204','USA','22','2015-02-28','9mbfaWg','2023-01-08'),
	('457863806','Berthe','Horst','Poley','Johnson','4','Long Beach','California','90805','USA','20','2010-11-12','E8NqQGRZ7','2022-10-29'),
	('045406579','Giacobo','Suki','Shackel','Colorado','7','Baltimore','Maryland','21290','USA','19','2000-12-29','SPWxoXlcZZNW','2022-09-02');

-- insert managers for each hotel
INSERT INTO hotel_management(hotel_id, manager_SSN)
VALUES (1, 123456789),
(2, 728214430),
(3, 622965894),
(4, 834108028),
(5, 810199334),
(6, 925601006),
(7, 648177403),
(8, 678690981),
(9, 798729664),
(10, 785968425),
(11, 822929536),
(12, 766684759),
(13, 970079122),
(14, 625475296),
(15, 963540482),
(16, 875989858),
(17, 667303866),
(18, 730327966),
(19, 942536557),
(20, 933864249),
(21, 731738360),
(22, 992667860),
(23, 946447029),
(24, 682038425),
(25, 681389828),
(26, 957340718),
(27, 992370650),
(28, 795012405),
(29, 684457349),
(30, 701582462),
(31, 735160338),
(32, 717229150),
(33, 870046861),
(34, 911684544),
(35, 897250271),
(36, 983351156),
(37, 701560380),
(38, 841422520),
(39, 765323601),
(40, 969309591),
(41, 705121441),
(42, 710149051),
(43, 741815294),
(44, 905807783),
(45, 913546887),
(46, 931268357),
(47, 861074101),
(48, 986197593)
;

-- inserting room categories
INSERT INTO room_category(room_category_id, room_capacity, room_view, is_extendable)
VALUES (1,'single','mountain',TRUE),
(2,'single','mountain',FALSE),
(3,'single','sea',TRUE),
(4,'single','sea',FALSE),
(5,'double','mountain',TRUE),
(6,'double','mountain',FALSE),
(7,'double','sea',TRUE),
(8,'double','sea',FALSE),
(9,'deluxe','mountain',TRUE),
(10,'deluxe','mountain',FALSE),
(11,'deluxe','sea',TRUE),
(12,'deluxe','sea',FALSE),
(13,'suite','mountain',TRUE),
(14,'suite','mountain',FALSE),
(15,'suite','sea',TRUE),
(16,'suite','sea',FALSE)
;

-- inserting rooms using while loop (postgres version)
-- insertion reference: https://stackoverflow.com/questions/3764001/how-to-use-a-sql-for-loop-to-insert-rows-into-database
-- variable declaration reference: https://www.techonthenet.com/postgresql/declare_vars.php
-- casting reference: https://stackoverflow.com/questions/23622993/postgresql-error-operator-does-not-exist-integer-character-varying
-- case reference: https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-case/
DO $$
DECLARE 
	numHotels INTEGER := (SELECT COUNT(*) FROM hotel);
	numRooms INTEGER;
	room_category_type INTEGER;
	room_size TEXT;
	price DECIMAL(6,2);
BEGIN
	FOR i IN 1..numHotels LOOP
		numRooms := (SELECT num_of_rooms FROM hotel WHERE hotel_id = i);
		FOR j in 1..numRooms LOOP
			room_category_type := (SELECT MOD(j, 16) + 1);
			room_size := (SELECT room_capacity FROM room_category WHERE room_category_id = room_category_type::text);
			price := 0;

			price := CASE 
                WHEN room_size = 'single' THEN (SELECT random()*(100-200)+200)
                WHEN room_size = 'double' THEN (SELECT random()*(200-400)+400)
                WHEN room_size = 'deluxe' THEN (SELECT random()*(500-700)+700)
                ELSE (SELECT random()*(800-1200)+1200)
            END;

			INSERT INTO room(room_no, hotel_id, price, room_category_id, amenities, damages, last_updated)
			VALUES (j, i, price, room_category_type, 'smtg', 'smtg', DEFAULT);
		END LOOP;
	END LOOP;
END; 
$$

-- inserting rooms (mysql version)
-- while loop insertion reference: https://stackoverflow.com/questions/26981901/mysql-insert-with-while-loop
-- variables reference: https://stackoverflow.com/questions/11754781/how-to-declare-a-variable-in-mysql
-- drop procedure if exists insertRooms;
-- DELIMITER //
-- CREATE PROCEDURE insertRooms()
-- BEGIN
-- 	DECLARE i INT DEFAULT 1;
--     SET @numOfHotels = (SELECT COUNT(*) FROM hotel);
-- 	WHILE (i <= @numOfHotels) DO -- there are 48 hotels currently
-- 		BEGIN
-- 			DECLARE j INT DEFAULT 1;
-- 			SET @numRooms = (SELECT num_of_rooms FROM hotel WHERE hotel_id = i); -- get the number of rooms from each hotel
-- 			WHILE (j <= @numRooms) DO
--                 -- the amenities and rating the hotel offers
--                 SET @room_category_id = (SELECT CONVERT((SELECT MOD(j, 16) + 1), CHAR)); -- each room will get a room category id from 1 to 16
--                 -- sets the price based on the capacity of the room category
--                 -- select case reference: https://stackoverflow.com/questions/7871014/mysql-storing-a-variable-with-the-result-of-an-select-case
--                 SET @capacity = (SELECT capacity FROM room_category WHERE room_category_id = @room_category_id);
--                 SELECT CASE
--                     WHEN @capacity = 'single' THEN (SELECT RAND()*(100-200)+200)
--                     WHEN @capacity = 'double' THEN (SELECT RAND()*(200-400)+400)
--                     WHEN @capacity = 'deluxe' THEN (SELECT RAND()*(500-700)+700)
--                     ELSE (SELECT RAND()*(800-1200)+1200)
--                 END
--                 INTO @price;
-- 				INSERT INTO room(room_no, hotel_id, price, room_category_id, amenities, 
-- 				damages, last_updated)
-- 				VALUES (j, i, @price, @room_category_id, 'smtg', 'smtg', DEFAULT);
-- 				SET j = j + 1;
-- 			END WHILE;
-- 		SET i = i + 1;
-- 	END;
-- END WHILE;
-- END;

-- CALL insertRooms(); -- call procedure to insert rooms

-- inserting managers into roles (postgresql version)
DO $$
DECLARE 
	numOfManagers INTEGER := (SELECT COUNT(*) FROM hotel_management);
	manager VARCHAR;
	salary DECIMAL(6, 2);
BEGIN
	FOR i IN 1..numOfManagers LOOP
		manager := (SELECT manager_SSN FROM hotel_management WHERE hotel_id = i);
		salary := (SELECT random()*(200-9999)+9999);
		INSERT INTO role(emp_SSN, role_id, role_name, salary) VALUES (manager, 1, 'Manager', salary);
	END LOOP;
END; 
$$

-- inserting managers into roles (mysql version)
-- while loop insertion reference: https://stackoverflow.com/questions/26981901/mysql-insert-with-while-loop
-- variables reference: https://stackoverflow.com/questions/11754781/how-to-declare-a-variable-in-mysql
-- concatenation reference: https://www.w3schools.com/sql/func_mysql_concat.asp
-- drop procedure if exists insertManagers;
-- DELIMITER //
-- CREATE PROCEDURE insertManagers()
-- BEGIN
-- 	DECLARE i INT DEFAULT 1;
--     SET @numOfManagers = (SELECT COUNT(*) FROM hotel_management);
--     WHILE (i <= @numOfManagers) DO 
-- 		SET @manager_SSN = (SELECT manager_SSN FROM hotel_management WHERE hotel_id = i); -- loop through all managers in hotel_management relation
            
-- 		SET @salary = (SELECT RAND()*(200-9999)+9999); -- randomize salary between $200 to $9999
-- 		INSERT INTO role(emp_SSN, role_id, name, salary) VALUES (@manager_SSN, 1, 'Manager', @salary);
-- 		SET i = i + 1;
-- 	END WHILE;
-- END;
-- CALL insertManagers(); -- call procedure to insert managers into role relation

-- inserting different roles into role table (postgres version)
-- array reference: https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-array/
-- if reference: https://www.postgresqltutorial.com/postgresql-plpgsql/plpgsql-if-else-statements/
DO $$
DECLARE 
	employee VARCHAR;
	role text[] := ARRAY['Supervisor', 'Head HR', 'Assistiant HR', 'Senior Developer', 'Junior Developer', 'Janitor'];
	salary DECIMAL(6, 2);
	k INTEGER := 0;
	hotel INT := 0;
	j record;
BEGIN
	FOR j IN (select * from employee where not exists (select manager_SSN from hotel_management where employee.emp_SSN = hotel_management.manager_SSN) order by hotel_id)
	LOOP
		employee := j.emp_SSN;
		salary := (SELECT random()*(100-5000)+5000);
    
		if hotel = j.hotel_id then k := (SELECT MOD(k + 1, 6));
		else hotel := j.hotel_id;
			k := 0;
		end if;

		INSERT INTO role(emp_SSN, role_id, role_name, salary) VALUES (employee, k + 2, role[k + 1], salary);
	END LOOP;
END; 
$$

-- insert sample customer addresses
INSERT INTO address_info VALUES
('Main','2','Ottawa','Ontario', 'K5J132','Canada'),
('Oak', '20725', 'Mont-Laurier', 'Quebec', 'J9L', 'Canada'),
('Morning', '1', 'Columbia', 'South Carolina', '29220', 'USA'),
('Golf View', '4', 'Greensboro', 'North Carolina', '27455', 'USA'),
('Chive', '53', 'Taber', 'Alberta', 'T1G', 'Canada'),
('Debs', '5811', 'Greensboro', 'North Carolina', '27455', 'USA'),
('2nd', '7455', 'Tyler', 'Texas', '75799', 'USA'),
('Waxwing', '4', 'Charlton', 'England', 'OX12', 'United Kingdom'),
('Fuller', '15', 'Pinellas Park', 'Florida', '34665', 'USA'),
('Superior', '9750', 'Baton Rouge', 'Louisana', '70894', 'USA')
;

-- insert sample customers
INSERT INTO customer VALUES
('420597022', 'Mychal', '', 'Skene', 'mskene0@elpais.com', 'Oak', '20725', 'Mont-Laurier', 'Quebec', 'J9L', 'Canada', '2018-07-01', '1658980194', '19W5w3QzQw7', '2021-05-12'),
('7144471564', 'Heddi', 'S', 'Sully', 'hsully1@bloglines.com', 'Morning', '1', 'Columbia', 'South Carolina', '29220', 'USA', '2014-08-25', '8033911303', 'QsjZ2dl2Dr', '2022-05-01'),
('6547484883', 'Richard', 'C', 'Dinning', 'rdinning2@mail.ru', 'Golf View', '4', 'Greensboro', 'North Carolina', '27455', 'USA', '2006-06-16', '3361795408', 'TnHh9cNF9uK', '2021-08-20'),
('1940676299', 'Ailis', 'P', 'Guyonnet', 'aguyonnet3@cornell.edu', 'Chive', '53', 'Taber', 'Alberta', 'T1G', 'Canada', '2005-03-07', '3998041873', 'Pd1ejp4pGZ', '2021-11-24'),
('6095010242', 'Mildrid', '', 'Snawdon', 'msnawdon4@noaa.gov', 'Debs', '5811', 'Greensboro', 'North Carolina', '27455', 'USA', '2017-02-26', '9101456774', 'tPrLZamfv', '2022-10-21'),
('91025231', 'Asher', 'D', 'Comiskey', 'acomiskey5@washingtonpost.com', '2nd', '7455', 'Tyler', 'Texas', '75799', 'USA', '2009-04-14', '9036676181', 'DbYZBzJ3kTFl', '2021-08-17'),
('7547180821', 'Olav', 'L', 'Sivil', 'osivil6@yolasite.com', 'Waxwing', '4', 'Charlton', 'England', 'OX12', 'United Kingdom', '2007-09-25', '8969046171', 'HI3A07kZz7', '2022-08-02'),
('7376156276', 'Cordy', 'O', 'Muffin', 'cmuffin7@macromedia.com', 'Fuller', '15', 'Pinellas Park', 'Florida', '34665', 'USA', '2010-06-17', '3212852635', 'OJzctEczHXX', '2022-07-26'),
('3781140005', 'Reeta', 'S', 'Gemlbett', 'rgemlbett8@psu.edu', 'Superior', '9750', 'Baton Rouge', 'Louisana', '70894', 'USA', '2009-05-29', '2254751575', '3MijsbU7HG', '2022-09-15');

INSERT INTO hotel_phone VALUES
(1, '2392324395', 'Management'),
(1, '5217329872', 'Human Resources'),
(1, '3743431110', 'Developers'),
(1, '8716641420', 'Caretakers'),

(2, '1819338666', 'Management'),
(2, '3818721229', 'Human Resources'),
(2, '9171963431', 'Developers'),
(2, '2068669315', 'Caretakers'),

(3, '6809958891', 'Management'),
(3, '6742776024', 'Human Resources'),
(3, '9878157460', 'Developers'),
(3, '1977374060', 'Caretakers'),

(4, '3323010162', 'Management'),
(4, '3149835593', 'Human Resources'),
(4, '5195563718', 'Developers'),
(4, '6609787467', 'Caretakers'),

(5, '8443207515', 'Management'),
(5, '5372683030', 'Human Resources'),
(5, '9246459200', 'Developers'),
(5, '2227671509', 'Caretakers'),

(6, '3793025279', 'Management'),
(6, '2865562276', 'Human Resources'),
(6, '1749332703', 'Developers'),
(6, '3768618673', 'Caretakers'),

(7, '1911547351', 'Management'),
(7, '5629515611', 'Human Resources'),
(7, '3033552676', 'Developers'),
(7, '8963718862', 'Caretakers'),

(8, '2617549486', 'Management'),
(8, '3554803226', 'Human Resources'),
(8, '7058511619', 'Developers'),
(8, '3197071340', 'Caretakers'),

(9, '8153687056', 'Management'),
(9, '4611394852', 'Human Resources'),
(9, '8178317070', 'Developers'),
(9, '6627839590', 'Caretakers'),

(10, '8085382021', 'Management'),
(10, '3595090090', 'Human Resources'),
(10, '9841759919', 'Developers'),
(10, '3778256851', 'Caretakers'),

(11, '8554569794', 'Management'),
(11, '6713871189', 'Human Resources'),
(11, '3366730961', 'Developers'),
(11, '2508004568', 'Caretakers'),

(12, '5008684810', 'Management'),
(12, '1655995169', 'Human Resources'),
(12, '1177081051', 'Developers'),
(12, '1404007772', 'Caretakers'),

(13, '3413597133', 'Management'),
(13, '6679684175', 'Human Resources'),
(13, '4949671331', 'Developers'),
(13, '2417450225', 'Caretakers'),

(14, '7332162859', 'Management'),
(14, '1532001912', 'Human Resources'),
(14, '9776159195', 'Developers'),
(14, '7838974588', 'Caretakers'),

(15, '4243692490', 'Management'),
(15, '2287218524', 'Human Resources'),
(15, '1042410435', 'Developers'),
(15, '6824951998', 'Caretakers'),

(16, '8664978799', 'Management'),
(16, '5775171766', 'Human Resources'),
(16, '2182745091', 'Developers'),
(16, '4156201906', 'Caretakers'),

(17, '9952896549', 'Management'),
(17, '3621763743', 'Human Resources'),
(17, '7552602989', 'Developers'),
(17, '4692725989', 'Caretakers'),

(18, '4054128117', 'Management'),
(18, '4141026145', 'Human Resources'),
(18, '5707146008', 'Developers'),
(18, '3897771334', 'Caretakers'),

(19, '4521760546', 'Management'),
(19, '6953176180', 'Human Resources'),
(19, '1462656959', 'Developers'),
(19, '5593451022', 'Caretakers'),

(20, '5533762229', 'Management'),
(20, '2557203983', 'Human Resources'),
(20, '1527425737', 'Developers'),
(20, '5884375877', 'Caretakers'),

(21, '4056679359', 'Management'),
(21, '6387335398', 'Human Resources'),
(21, '5571823578', 'Developers'),
(21, '3125137381', 'Caretakers'),

(22, '7276632194', 'Management'),
(22, '1731524666', 'Human Resources'),
(22, '3818064051', 'Developers'),
(22, '2986381908', 'Caretakers'),

(23, '2205788226', 'Management'),
(23, '8641612277', 'Human Resources'),
(23, '4788654581', 'Developers'),
(23, '2747306402', 'Caretakers'),

(24, '7061233470', 'Management'),
(24, '3744991041', 'Human Resources'),
(24, '1697373427', 'Developers'),
(24, '6416969239', 'Caretakers'),

(25, '6147235427', 'Management'),
(25, '3922460816', 'Human Resources'),
(25, '5123189331', 'Developers'),
(25, '1114951392', 'Caretakers'),

(26, '8826113755', 'Management'),
(26, '3625282092', 'Human Resources'),
(26, '6849916167', 'Developers'),
(26, '9991060881', 'Caretakers'),

(27, '5554196084', 'Management'),
(27, '5708062472', 'Human Resources'),
(27, '8187655437', 'Developers'),
(27, '1197931246', 'Caretakers'),

(28, '4014850984', 'Management'),
(28, '5632542099', 'Human Resources'),
(28, '2094106370', 'Developers'),
(28, '2602535070', 'Caretakers'),

(29, '9155067059', 'Management'),
(29, '5929693589', 'Human Resources'),
(29, '7301971292', 'Developers'),
(29, '1975188593', 'Caretakers'),

(30, '7041616423', 'Management'),
(30, '6817595035', 'Human Resources'),
(30, '2195962694', 'Developers'),
(30, '8212520545', 'Caretakers'),

(31, '4533731494', 'Management'),
(31, '7419507181', 'Human Resources'),
(31, '6718141299', 'Developers'),
(31, '2495757511', 'Caretakers'),

(32, '5769268997', 'Management'),
(32, '7457273342', 'Human Resources'),
(32, '4751788564', 'Developers'),
(32, '6481281289', 'Caretakers'),

(33, '8115223868', 'Management'),
(33, '9582911322', 'Human Resources'),
(33, '4561548265', 'Developers'),
(33, '5541871128', 'Caretakers'),

(34, '2444017110', 'Management'),
(34, '6696400996', 'Human Resources'),
(34, '5254979593', 'Developers'),
(34, '8125256813', 'Caretakers'),

(35, '6405360309', 'Management'),
(35, '1956081432', 'Human Resources'),
(35, '8437599798', 'Developers'),
(35, '9681398390', 'Caretakers'),

(36, '4899646146', 'Management'),
(36, '6754595488', 'Human Resources'),
(36, '2579852015', 'Developers'),
(36, '5131918191', 'Caretakers'),

(37, '8253789096', 'Management'),
(37, '5205830164', 'Human Resources'),
(37, '4905691307', 'Developers'),
(37, '1849091028', 'Caretakers'),

(38, '3734351292', 'Management'),
(38, '8616650780', 'Human Resources'),
(38, '4551554350', 'Developers'),
(38, '2489358624', 'Caretakers'),

(39, '5101922455', 'Management'),
(39, '2938508917', 'Human Resources'),
(39, '7929510359', 'Developers'),
(39, '8844872989', 'Caretakers'),

(40, '8401129575', 'Management'),
(40, '7832469414', 'Human Resources'),
(40, '7778047205', 'Developers'),
(40, '5633394210', 'Caretakers'),

(41, '7277992079', 'Management'),
(41, '3311779653', 'Human Resources'),
(41, '2233401974', 'Developers'),
(41, '3372391485', 'Caretakers'),

(42, '6662014703', 'Management'),
(42, '8809940233', 'Human Resources'),
(42, '4142540801', 'Developers'),
(42, '2006237892', 'Caretakers'),

(43, '1891780666', 'Management'),
(43, '6974057554', 'Human Resources'),
(43, '5867255264', 'Developers'),
(43, '2055147960', 'Caretakers'),

(44, '8746179421', 'Management'),
(44, '8784818667', 'Human Resources'),
(44, '5518980763', 'Developers'),
(44, '6597084624', 'Caretakers'),

(45, '7461873395', 'Management'),
(45, '4678621446', 'Human Resources'),
(45, '5491591088', 'Developers'),
(45, '7303402118', 'Caretakers'),

(46, '7902202717', 'Management'),
(46, '8733771520', 'Human Resources'),
(46, '4446804738', 'Developers'),
(46, '6004488555', 'Caretakers'),

(47, '5305544399', 'Management'),
(47, '2799804789', 'Human Resources'),
(47, '3677036797', 'Developers'),
(47, '1015675849', 'Caretakers'),

(48, '5756561858', 'Management'),
(48, '3406012271', 'Human Resources'),
(48, '3543933005', 'Developers'),
(48, '2811931893', 'Caretakers');