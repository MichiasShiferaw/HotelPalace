import React, { useContext, useEffect, useState } from "react";


const Profile = () => {
  let history = useNavigate();

  const [street_name, setStreet_Name] = useState("");
  const [street_number, setStreet_Number] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [pc, setPc] = useState("");    



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
          <div className="col">
            <input
              value={street_number}
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
