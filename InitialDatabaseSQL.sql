
use Test;

DROP TABLE address_info;

CREATE TABLE address_info(
	street_name VARCHAR(20) NOT NULL,
    street_number INT NOT NULL CHECK (street_number >= 0),
    city VARCHAR(20) NOT NULL,
    province VARCHAR(20) NOT NULL,
    postal_code VARCHAR(6) NOT NULL,
    country VARCHAR(20) NOT NULL,

	PRIMARY KEY(street_name, street_number, postal_code)
);

DROP TABLE employee;

CREATE TABLE employee(
	emp_SSN VARCHAR(20) NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    middle_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    
    street_name VARCHAR(20) NOT NULL,
    street_number INT NOT NULL CHECK (street_number >= 0),
    city VARCHAR(20) NOT NULL,
    province VARCHAR(20) NOT NULL,
    postal_code VARCHAR(6) NOT NULL,
    country VARCHAR(20),
    hotel_id VARCHAR(20),
    start_date VARCHAR(20),
    password VARCHAR(20),
    last_update VARCHAR(20),
    
    Primary Key(emp_SSN),
    
    /*FOREIGN KEY(street_name) references address_info(street_name),*/
    

    FOREIGN KEY(street_number) references address_info(street_number)
    /*
    FOREIGN KEY(street_number) REFERENCES address_info(street_number)
    Foreign Key(province) references address_info(province),
    Foreign Key(postal_code) references address_info(postal_code),
    Foreign Key(country) references address_info(country)
    
    FOREIGN KEY(hotel_id) REFERENCES hotel(hotel_id)*/
    
);


CREATE TABLE role(
	emp_SSN VARCHAR(20) NOT NULL,
    role_id VARCHAR(20) NOT NULL,
    name VARCHAR(20) NOT NULL,
    salary VARCHAR(20) NOT NULL,
    
    Primary Key(emp_SSN),
    Primary Key(role_id),
    
    FOREIGN KEY(emp_SSN) REFERENCES employee(emp_SSN)
);



CREATE TABLE customer(
	customer_SSN VARCHAR(20)  NOT NULL,
    full_name VARCHAR(20)  NOT NULL,
    email VARCHAR(20)  NOT NULL,
    street_name VARCHAR(20)  NOT NULL,
    street_number VARCHAR(20)  NOT NULL,
    city VARCHAR(20)  NOT NULL,
    province VARCHAR(20)  NOT NULL,
    postal_code VARCHAR(20)  NOT NULL,
    country VARCHAR(20)  NOT NULL,
    joining_date VARCHAR(20)  NOT NULL,
    phone_number VARCHAR(20)  NOT NULL,
    password VARCHAR(20)  NOT NULL,
    last_updated VARCHAR(20)  NOT NULL,
    
    PRIMARY KEY(customer_SSN),
    
	FOREIGN KEY(street_name) references address_info(street_name),
    FOREIGN KEY(street_number) references address_info(street_number),
    FOREIGN KEY(postal_code) references address_info(postal_code),
    FOREIGN KEY(city) references address_info(city),
    FOREIGN KEY(province) references address_info(province),
    FOREIGN KEY(country) references address_info(country)


);


CREATE TABLE hotel_chain (
	chain_id VARCHAR(20)  NOT NULL,
    chain_name VARCHAR(20)  NOT NULL,
    street_name VARCHAR(20)  NOT NULL,
    street_number VARCHAR(20)  NOT NULL,
    city VARCHAR(20)  NOT NULL,
    province VARCHAR(20)  NOT NULL,
    postal_code VARCHAR(20)  NOT NULL,
    country VARCHAR(20)  NOT NULL,
    postal_code VARCHAR(20)  NOT NULL,
    num_of_hotels VARCHAR(20)  NOT NULL,
    phone_number VARCHAR(20)  NOT NULL,
    email VARCHAR(20)  NOT NULL,
    
    
    PRIMARY KEY(chain_id),
    
    FOREIGN KEY(street_name) REFERENCES address_info(street_name),
    FOREIGN KEY(street_number) REFERENCES address_info(street_number),
    FOREIGN KEY(city) REFERENCES address_info(city),
    FOREIGN KEY(province) REFERENCES address_info(province),
    FOREIGN KEY(postal_code) REFERENCES address_info(postal_code),
    FOREIGN KEY(country) REFERENCES address_info(country)
    

);



CREATE TABLE hotel (
	chain_id VARCHAR(20)  NOT NULL,
    hotel_id VARCHAR(20)  NOT NULL AUTO_INCREMENT,
    hotel_name VARCHAR(20)  NOT NULL,
    street_name VARCHAR(20)  NOT NULL,
    street_number VARCHAR(20)  NOT NULL,
    postal_code VARCHAR(20)  NOT NULL,
    city VARCHAR(20)  NOT NULL,
    province VARCHAR(20)  NOT NULL,
    country VARCHAR(20)  NOT NULL,
	manager_SSN VARCHAR(20)  NOT NULL,
    num_of_rooms VARCHAR(20)  NOT NULL,
    rating VARCHAR(20)  NOT NULL,
    email VARCHAR(20)  NOT NULL,
    
    PRIMARY KEY(chain_id),
    PRIMARY KEY(hotel_id),
    
    FOREIGN KEY(street_name) references address_info(street_name),
    FOREIGN KEY(street_number) references address_info(street_number),
    FOREIGN KEY(postal_code) references address_info(postal_code),
    FOREIGN KEY(city) references address_info(city),
    FOREIGN KEY(province) references address_info(province),
    FOREIGN KEY(country) references address_info(country),
    
    FOREIGN KEY(manager_SSN) references employee(employee_SSN)
);

CREATE TABLE hotel_phone(
	hotel_id VARCHAR(20)  NOT NULL,
    phone_number VARCHAR(20)  NOT NULL,
    department VARCHAR(20)  NOT NULL,
    
    PRIMARY KEY(hotel_id),
    PRIMARY KEY(phone_number),
    
    FOREIGN KEY(hotel_id) REFERENCES hotel(hotel_id)

);

CREATE TABLE room_category(
	room_category_id VARCHAR(20)  NOT NULL,
    capacity  VARCHAR(20)  NOT NULL,
    view VARCHAR(20)  NOT NULL,
    is_extendable VARCHAR(20)  NOT NULL,
    
    PRIMARY KEY(room_category_id)
    
);


CREATE TABLE room(
	room_id VARCHAR(20)  NOT NULL,
    hotel_id VARCHAR(20)  NOT NULL,
    price VARCHAR(20)  NOT NULL,
    room_category_id VARCHAR(20)  NOT NULL,
    amenities VARCHAR(20)  NOT NULL,
    damages VARCHAR(20)  NOT NULL,
    last_updated VARCHAR(20)  NOT NULL,
    
    PRIMARY KEY(room_id),
    
    FOREIGN KEY(hotel_id) REFERENCES booking_info(hotel_id),
    FOREIGN KEY(room_category_id) REFERENCES room_category(room_category_id)
);


CREATE TABLE booking_info(
	booking_id VARCHAR(20)  NOT NULL,
    hotel_id VARCHAR(20)  NOT NULL,
    customer_SSN VARCHAR(20)  NOT NULL,
    status VARCHAR(20)  NOT NULL,
    room_no VARCHAR(20)  NOT NULL,
    emp_SSN VARCHAR(20)  NOT NULL,
    arrival_date VARCHAR(20)  NOT NULL,
    depature_date VARCHAR(20)  NOT NULL,
    created_at VARCHAR(20)  NOT NULL,
    last_updated VARCHAR(20)  NOT NULL,
    
    PRIMARY KEY(booking_id),
    
    FOREIGN KEY(customer_SSN) REFERENCES customer(customer_SSN),
    FOREIGN KEY(employee_SSN) REFERENCES employee(employee_SSN)

);



CREATE TABLE renting_info(

	renting_id VARCHAR(20)  NOT NULL,
    hotel_id VARCHAR(20)  NOT NULL,
    status VARCHAR(20)  NOT NULL,
    customer_SSN VARCHAR(20)  NOT NULL,
    emp_SSN VARCHAR(20)  NOT NULL,
    room_no VARCHAR(20)  NOT NULL,
    booking_id VARCHAR(20)  NOT NULL,
    has_booked VARCHAR(20)  NOT NULL,
    departure_time VARCHAR(20)  NOT NULL,
    arrival_time VARCHAR(20)  NOT NULL,
    created_at VARCHAR(20)  NOT NULL,
    last_updated VARCHAR(20)  NOT NULL,
    
    PRIMARY KEY(renting_id),
    
    FOREIGN KEY(hotel_id) REFERENCES hotel(hotel_id),
    FOREIGN KEY(emp_SSN) REFERENCES employee(emp_SNN),
    FOREIGN KEY(booking_id) REFERENCES booking_info(booking_id),
    FOREIGN KEY(customer_SSN) REFERENCES employee(emp_SSN),
    FOREIGN KEY(room_no) REFERENCES room(room_no)

);










