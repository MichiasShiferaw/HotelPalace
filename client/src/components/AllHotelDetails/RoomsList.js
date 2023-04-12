import React from "react";
import Room from "./Room";
import Overview1 from "./Overview1";
const RoomsList = ({ rooms }) => {

  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>
          No Results Found that matched your search wishes
        </h3>
      </div>
    );
  }
  // console.log("Room List testing")
  // console.log(rooms)
  return (
    
    // <section className="roomslist">
    //   <div className="roomslist-center">
    <section>
    <div>
        {rooms.map((component1,i)=>(
          <Overview1 index={i} key={i} details={component1}/>
        ))}
        {/* {
        {rooms.map(item,i => {
          return <Overview1 key={i} details={item} />;
        })} */}
      </div>
    </section>
  );
};

export default RoomsList;
