
use Test;

/*Drop table commands*/
drop table if exists renting_info cascade;
drop table if exists booking_info cascade;
drop table if exists hotel_phone cascade;

drop table if exists role cascade;
drop table if exists hotel_management cascade;
drop table if exists employee cascade;

drop table if exists room cascade;
drop table if exists hotel cascade;
drop table if exists hotel_chain cascade;

drop table if exists customer cascade;

drop table if exists room_category cascade;
drop table if exists address_info cascade;


/*
Address Info Table
PK = Address Info

*/
CREATE TABLE IF NOT EXISTS address_info(
	street_name VARCHAR(50) NOT NULL,
    street_number SMALLINT NOT NULL,
    city VARCHAR(20) NOT NULL,
    province VARCHAR(60) NOT NULL,
    postal_code VARCHAR(6) NOT NULL,
    country VARCHAR(20) NOT NULL,

    PRIMARY KEY (street_name, street_number, postal_code)
);

/*
Hotel Chain Table
PK = chain_id
FK = Address Info

*/
CREATE TABLE IF NOT EXISTS hotel_chain (
	chain_id VARCHAR(20) NOT NULL PRIMARY KEY,
    chain_name VARCHAR(55)  NOT NULL,
    street_name VARCHAR(50) NOT NULL,
    street_number SMALLINT NOT NULL,
    city VARCHAR(20) NOT NULL,
    province VARCHAR(60) NOT NULL,
    postal_code VARCHAR(6) NOT NULL,
    country VARCHAR(20) NOT NULL,
    num_of_hotels VARCHAR(20)  NOT NULL,
    phone_number VARCHAR(20)  NOT NULL,
    email VARCHAR(50)  NOT NULL,
    
	FOREIGN KEY (street_name, street_number, postal_code) REFERENCES address_info(street_name, street_number, postal_code)
);


/*
Hotel Table
PK = chain_id, hotel_id
FK = chain_id ,Address Info

*/

-- CREATE TYPE rating AS ENUM('1','2','3','4','5'); 

CREATE TABLE IF NOT EXISTS hotel (
	chain_id VARCHAR(20)  NOT NULL,
    hotel_id INT NOT NULL UNIQUE,
    hotel_name VARCHAR(100)  NOT NULL,
    street_name VARCHAR(50) NOT NULL,
    street_number SMALLINT NOT NULL,
    city VARCHAR(20) NOT NULL,
    province VARCHAR(60) NOT NULL,
    postal_code VARCHAR(6) NOT NULL,
    country VARCHAR(20) NOT NULL,
    num_of_rooms INT  NOT NULL,
    rating INT NOT NULL check(rating >=1 and rating<=5),
    email VARCHAR(50)  NOT NULL,
    
    PRIMARY KEY(chain_id,hotel_id),
    
    FOREIGN KEY (chain_id) REFERENCES hotel_chain(chain_id),
	FOREIGN KEY (street_name, street_number, postal_code) REFERENCES address_info(street_name, street_number, postal_code)

);



/*
Hotel Phone Table
PK = hotel_id, phone_number
FK = hotel_id

*/
CREATE TABLE IF NOT EXISTS hotel_phone(
	hotel_id INT NOT NULL,
    phone_number VARCHAR(15)  NOT NULL unique,
    department VARCHAR(20)  NOT NULL,
    
    PRIMARY KEY(hotel_id,phone_number),
    
    FOREIGN KEY(hotel_id) REFERENCES hotel(hotel_id)

);

/*
Employee Table
PK = emp_SSN
FK = chain_id, hotel_id, Address Info

*/
CREATE TABLE IF NOT EXISTS employee(
	emp_SSN VARCHAR(20) NOT NULL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    middle_name VARCHAR(20) ,
    last_name VARCHAR(20) NOT NULL,
    
    street_name VARCHAR(50) NOT NULL,
    street_number SMALLINT NOT NULL,
    city VARCHAR(20) NOT NULL,
    province VARCHAR(60) NOT NULL,
    postal_code VARCHAR(6) NOT NULL,
    country VARCHAR(20) NOT NULL,
    
	chain_id VARCHAR(20)  NOT NULL,
    hotel_id INT NOT NULL,
    start_date DATE NOT NULL,
    password VARCHAR(20),
    last_update DATE DEFAULT (CURRENT_DATE),
	
    Foreign Key (chain_id,hotel_id) REFERENCES hotel(chain_id, hotel_id),
	FOREIGN KEY (street_name, street_number, postal_code) REFERENCES address_info(street_name, street_number, postal_code)
    
);

/*
Role Table
PK = emp_SSN, role_id
FK = emp_SSN

*/
CREATE TABLE IF NOT EXISTS role(
	emp_SSN VARCHAR(20) NOT NULL,
    role_id VARCHAR(20) NOT NULL,
    name VARCHAR(20) NOT NULL,
    salary DECIMAL(6,2) NOT NULL,
    
    Primary Key(emp_SSN, role_id),
    
    FOREIGN KEY(emp_SSN) REFERENCES employee(emp_SSN)
);

/*
Hotel Management Table
PK = chain_id, hotel_id, manager_SSN
FK = chain_id, hotel_id, manager_SSN

*/
CREATE TABLE IF NOT EXISTS hotel_management (
	chain_id VARCHAR(20) NOT NULL,
    hotel_id INT NOT NULL UNIQUE,
    manager_SSN VARCHAR(20) NOT NULL UNIQUE, 
    Foreign Key (chain_id,hotel_id) REFERENCES hotel(chain_id, hotel_id),
    FOREIGN KEY(manager_SSN) references employee(emp_SSN),
    
    Primary Key (chain_id, hotel_id, manager_SSN)

);


/*
Customer Table
PK = customer_SSN
FK = Address Info

*/
CREATE TABLE IF NOT EXISTS customer(
	customer_SSN VARCHAR(20)  NOT NULL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    middle_name VARCHAR(20) ,
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(50)  NOT NULL,
    street_name VARCHAR(50) NOT NULL,
    street_number SMALLINT NOT NULL,
    city VARCHAR(20) NOT NULL,
    province VARCHAR(60) NOT NULL,
    postal_code VARCHAR(6) NOT NULL,
    country VARCHAR(20) NOT NULL,
    joining_date DATE NOT NULL,
    phone_number VARCHAR(20)  NOT NULL UNIQUE,
    password VARCHAR(20)  NOT NULL,
    last_updated DATE DEFAULT (CURRENT_DATE),
    
	FOREIGN KEY (street_name, street_number, postal_code) REFERENCES address_info(street_name, street_number, postal_code)

);

/*
Room Category Table
PK = room_category_id

*/

CREATE TABLE IF NOT EXISTS room_category(
	room_category_id VARCHAR(4)  NOT NULL PRIMARY KEY,
    room_capacity text NOT NULL CHECK(room_capacity IN('single', 'double', 'deluxe', 'suite')) ,
    room_view text NOT NULL CHECK(room_view IN('mountain', 'sea')),
    is_extendable BOOLEAN  NOT NULL
    
);

/*
Room Table
PK = hotel_id, room_no
FK = hotel_id, room_category_id

*/
CREATE TABLE IF NOT EXISTS room(
	room_no VARCHAR(20) NOT NULL,
    hotel_id INT NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    room_category_id VARCHAR(20) NOT NULL,
    amenities VARCHAR(50)  NOT NULL,
    damages VARCHAR(50)  NOT NULL,
    last_updated DATE DEFAULT (CURRENT_DATE),
    
    PRIMARY KEY(hotel_id,room_no),
    
    FOREIGN KEY(hotel_id) REFERENCES hotel(hotel_id),
    FOREIGN KEY(room_category_id) REFERENCES room_category(room_category_id)
);

/*
Booking Info Table
PK = booking_id, hotel_id, customer_SSN, room_no, emp_SSN
FK = emp_ssn, customer_ssn, hotel_id, room_no

*/
 

CREATE TABLE IF NOT EXISTS booking_info(

	booking_id VARCHAR(20) NOT NULL,
    hotel_id INT NOT NULL,
    customer_SSN VARCHAR(20) NOT NULL,
    booking_status text NOT NULL CHECK(booking_status IN('start', 'completed', 'cancel','archive')),
    room_no VARCHAR(20) NOT NULL,
    emp_SSN VARCHAR(20) NOT NULL,
    arrival_time DATE NOT NULL,
    departure_time DATE NOT NULL,
    created_at DATE NOT NULL,
    last_updated DATE DEFAULT (CURRENT_DATE),
    
    PRIMARY KEY(booking_id, hotel_id, customer_SSN, room_no, emp_SSN),
    
    FOREIGN KEY(customer_SSN) REFERENCES customer(customer_SSN),
    FOREIGN KEY(emp_SSN) REFERENCES employee(emp_SSN),
    FOREIGN KEY(hotel_id,room_no) REFERENCES room(hotel_id,room_no)


);

/*
Renting Info Table
PK = renting_id, hotel_id, customer_SSN, emp_SSN, room_no
FK = emp_ssn, customer_ssn, hotel_id, room_no

*/

-- CREATE TYPE renting_status AS ENUM ('renting', 'checked-out', 'archive'); 

CREATE TABLE IF NOT EXISTS renting_info(

	renting_id VARCHAR(20) NOT NULL,
    hotel_id INT NOT NULL,
    renting_status text NOT NULL CHECK(renting_status IN('renting', 'checked-out', 'archive')),
    customer_SSN VARCHAR(20)  NOT NULL,
    emp_SSN VARCHAR(20) NOT NULL,
    room_no VARCHAR(20) NOT NULL,
    booking_id VARCHAR(20) NOT NULL,
    has_booked VARCHAR(20) NOT NULL,
    arrival_time DATE NOT NULL,
    departure_time DATE NOT NULL,
    created_at DATE NOT NULL,
    last_updated DATE DEFAULT (CURRENT_DATE),
    
    PRIMARY KEY(renting_id, hotel_id, customer_SSN, emp_SSN, room_no),

    FOREIGN KEY(emp_SSN) REFERENCES employee(emp_SSN),
    FOREIGN KEY(customer_SSN) REFERENCES customer(customer_SSN),
    FOREIGN KEY(hotel_id,room_no) REFERENCES room(hotel_id,room_no)

);


-- idempotent
CREATE OR REPLACE FUNCTION duplicate_addy_insert() RETURNS TRIGGER AS
  $BODY$
  BEGIN
  IF NOT EXISTS(SELECT 1 FROM address_info WHERE street_name = new.street_name AND street_number = new.street_number AND postal_code = new.postal_code) THEN
  INSERT INTO address_info(street_number, street_name, city, province, postal_code, country)
  VALUES (new.street_number, new.street_name, new.postal_code, new.city, new.province_state, new.country);
  END IF;
  RETURN new;
  END;
  $BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;


CREATE TRIGGER employee_addy
  BEFORE UPDATE
  ON employee
  FOR EACH ROW
  EXECUTE PROCEDURE duplicate_addy_insert();

CREATE TRIGGER customer_addy
  BEFORE UPDATE
  ON customer
  FOR EACH ROW
  EXECUTE PROCEDURE duplicate_addy_insert();

CREATE TRIGGER hotel_chain_addy
  BEFORE UPDATE
  ON hotel_chain
  FOR EACH ROW
  EXECUTE PROCEDURE duplicate_addy_insert();

CREATE TRIGGER hotel_addy
  BEFORE UPDATE
  ON hotel
  FOR EACH ROW
  EXECUTE PROCEDURE duplicate_addy_insert();







/*
DROP/CREATE Whole Database */
-- DROP DATABASE IF EXISTS dbproject;

-- CREATE DATABASE dbproject;
