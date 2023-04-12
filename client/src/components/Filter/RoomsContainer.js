import React from "react";
import { RoomConsumer } from "../../Contexts/BookingContext";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "../AllHotelDetails/RoomsList";
export default function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { setRoom, sortedRooms,rooms } = value;
        return (
          <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} setRoom={setRoom} />
          </>
        );
      }}
    </RoomConsumer>
  );
}
