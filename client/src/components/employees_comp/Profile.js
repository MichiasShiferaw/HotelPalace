import React, { useContext, useEffect, useState } from "react";
import { RestaurantsContext } from "../../context/RestaurantsContext";
import RestaurantFinder from "../../apis/RestaurantFinder";

const Profile = () => {
  let history = useNavigate();
  //   console.log(id);

  const { restaurants } = useContext(RestaurantsContext);
  const [street_name, setStreet_Name] = useState("");
  const [street_number, setStreet_Number] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [pc, setPc] = useState("");    

    // useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await RestaurantFinder.get(`/${id}`);
    //     console.log(response.data.data.restaurant.city);
    //     setStreet_Name(response.data.data.restaurant.street_name);
    //     setStreet_Number(response.data.data.restaurant.street_number);
    //     setCity(response.data.data.restaurant.city);
    //     setProvince(response.data.data.restaurant.province);
    //     setPc(response.data.data.restaurant.postal_code);
    //     setCountry(response.data.data.restaurant.country);
    //   };

    //   fetchData();
    // }, []);


  return (
    <div>
      Profile Page

      Hello Name

      Joined on 

      Roles


      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={street_name}
            //   onChange={(e) => setStreet_Name(e.target.value)}
            type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>


          {/* <div className="row">
  <div className="col">
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div> */}
          <div className="col">
            <input
              value={street_number}
            //   onChange={(e) => setStreet_Number(e.target.value)}
            //   type="number"
              className="form-control"
              placeholder="street number"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
