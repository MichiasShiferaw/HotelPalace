-- view 1
create or replace view num_rooms_per_area as -- i have no idea (grouping by hotel chains & hotels are not possible)
select hotel.province, chain_name, hotel_name, rating, num_of_rooms 
from hotel join hotel_chain on hotel.chain_id = hotel_chain.chain_id;

-- view 2
create or replace view num_room_from_hotel as -- i also have no idea
select hotel_id, room_no, room_capacity from (room join room_category on room.room_category_id = room_category.room_category_id);