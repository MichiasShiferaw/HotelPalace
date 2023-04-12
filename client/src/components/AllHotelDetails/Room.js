import React from "react";
import { Link } from "react-router-dom";
// import defaultImg from "../../public/assets/images/details-1.jpeg";
import PropTypes from "prop-types";

import { memo } from "react";
import { useSelector } from "react-redux";
const Room = memo(({ room }) => {
  const { name, slug, images, price } = room;

    const auth = useSelector((state) => state.auth);
  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
        <img src = "/assets/images/room-12.jpeg" alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/c/${auth.ssn}/dashboard/booking/add`} className="btn-primary room-link">
          Booking Now
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;
