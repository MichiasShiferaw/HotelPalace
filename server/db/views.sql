-- view 1
create or replace view num_rooms_per_area as
select hotel.province, chain_name, hotel_name, rating, num_of_rooms 
from hotel join hotel_chain on hotel.chain_id = hotel_chain.chain_id;

-- view 2
create or replace view num_room_from_hotel as
select hotel_id, room_no, room_capacity from (room join room_category on room.room_category_id = room_category.room_category_id);

--Views task 7
-- View 1
DROP VIEW IF EXISTS available_room_per_area CASCADE;
DROP VIEW IF EXISTS hotel_room_capacity CASCADE;

CREATE OR REPLACE VIEW available_room_per_area as
	SELECT hotel.city, COUNT(room.room_no) as num_curr_avail_rooms
		FROM hotel join room on hotel.hotel_id = room.hotel_id
		WHERE NOT EXISTS (
			-- 	booking_info checking
			SELECT hotel.city, hotel.hotel_id, booking_info.room_no
				FROM hotel join booking_info on hotel.hotel_id = booking_info.hotel_id
				WHERE (booking_info.departure_time>= NOW() AND room.room_no = booking_info.room_no) 
			UNION
			-- 	renting_info checking
			SELECT hotel.city, hotel.hotel_id, renting_info.room_no
				FROM hotel join renting_info on hotel.hotel_id = renting_info.hotel_id
					OR (renting_info.departure_time>= NOW() AND room.room_no = renting_info.room_no))
				
		GROUP BY hotel.city;

-- View 2
CREATE OR REPLACE VIEW hotel_room_capacity as
	SELECT hotel.hotel_id, room_capacity, COUNT(room_category.room_capacity)
	FROM hotel, room, room_category
		WHERE hotel.hotel_id = room.hotel_id and room_category.room_category_id= room.room_category_id
	GROUP BY hotel.hotel_id, room_category.room_capacity
	ORDER BY hotel.hotel_id;

  -- View 3 (extra view to see all bookings and rentings)
create or replace view all_bookings_rentings as
(select hotel_id, room_no, arrival_time, departure_time from booking_info) union (select hotel_id, room_no, arrival_time, departure_time from renting_info);