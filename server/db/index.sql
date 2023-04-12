-- indexing reference: https://www.tutorialspoint.com/postgresql/postgresql_indexes.htm

-- index 1
-- index to allow for faster searching of a room in bookings
create index booking_room
on booking_info(hotel_id, room_no);

explain select booking_id from booking_info where hotel_id = '1';

-- index 2
-- index to allow for faster searching of a room in rentings
create index renting_room
on renting_info(hotel_id, room_no);

--index 3
-- index to allow for faster searching of an employee
create index index_employee
on employee(hotel_id);

drop index index_employee;

explain select * from employee where hotel_id = 1;
select * from employee;