const db = require("../db/index");

// Staff From Your Building
exports.getStaff = async (req, res) => {
  try {
    const response = await db.query(
      "select * from employee where hotel_id=$1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        employee: response.rows,
      },
    });
    console.log(response.rows);
  } catch (err) {
    console.log(err);
  }
};

//get one staff's
exports.getEmp = async (req, res) => {
  try {
    const response = await db.query("select * from employee where emp_SSN=$1", [
      req.params.id
    ]);
    res.status(200).json({
      status: "success",
      data: {
        employee: response.rows,
      },
    });
    console.log(response.rows);
  } catch (err) {
    console.log(err);
  }
};

//get one staff's roles

exports.getEmpRole = async (req, res) => {
  try {
    const response = await db.query("select * from role where emp_SSN=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        role: response.rows,
      },
    });
    console.log(response.rows);
  } catch (err) {
    console.log(err);
  }
};


// Add Staff

exports.onboarding = async (req, res) => {
  console.log(req.body);
  try {
    const response = await db.query(
      "INSERT INTO employee (emp_SSN, first_name, middle_name, last_name, street_name, street_number, city, province, postal_code, country, hotel_id, start_date, password, last_update) values ($1,$2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) returning *",
      [
        req.body.emp_SSN,
        req.body.first_name,
        req.body.middle_name,
        req.body.last_name,
        req.body.street_name,
        req.body.street_number,
        req.body.city,
        req.body.province,
        req.body.postal_code,
        req.body.country,
        req.params.id,
        req.body.start_date,
        req.body.last_updated,
      ]
    );
    res.status(201).json({
      status: "success",
      message: "The Onboarding was successful",
      data: {
        customer: response.rows[0],
      },
    });
    // console.log(response.rows);
  } catch (err) {
    // console.log(err.message);

    return res.status(500).json({
      error: err.message,
    });
  }
};

// All Rooms 
exports.getRooms = async (req, res) => {
  try {
    const response = await db.query("select * from room where hotel_id =$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        room: response.rows,
      },
    });
    console.log(response.rows);
  } catch (err) {
    console.log(err);
  }
};

// Add Rooms

exports.addRoom = async (req, res) => {
  console.log(req.body);
  try {
    const response = await db.query(
      "INSERT INTO room (room_no, hotel_id, price, room_category, amenities, damages, last_updated) values ($1,$2, $3,$4,$5,$6,$7) returning *",
      [
        req.body.room_no,
        req.body.hotel_id,
        req.body.price,
        req.body.room_category_id,
        req.body.amenities,
        req.body.damages,
        req.body.last_updated,
      ]
    );
    res.status(201).json({
      status: "success",
      message: "The room has been added",
      data: {
        customer: response.rows[0],
      },
    });
    // console.log(response.rows);
  } catch (err) {
    // console.log(err.message);

    return res.status(500).json({
      error: err.message,
    });
  }
};

//Edit Rooms
exports.setRooms = async (req, res) => {
  console.log(req.body);
  try {
    const response = await db.query(
      "UPDATE room SET price=$1, room_category_id=$2, amentities=$3, damages=$4, last_updated=$5 where room_no =$6 and hotel_id=$6 returning *",
      [
        req.body.price,
        req.body.room_category_id,
        req.body.amenities,
        req.body.damages,
        req.body.last_updated,
        req.body.room_no,
        req.params.id,
      ]
    );
    res.status(201).json({
      status: "success",
      message: "The room has been added",
      data: {
        customer: response.rows[0],
      },
    });
    // console.log(response.rows);
  } catch (err) {
    // console.log(err.message);

    return res.status(500).json({
      error: err.message,
    });
  }
};


// Delete Room
exports.removeRoom = async (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body);
  try {
    const results = await db.query(
      "DELETE FROM room where room_no = $1 and hotel_id=$2",
      [req.params.id, req.body.hotel_id]
    );
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

//Transfer Booking to Renting
exports.transferR = async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO renting_info (hotel_id, renting_status,customer_ssn, emp_SSN, room_no,booking_id,has_booked, arrival_time, departure_time, created_at, last_updated) values ($1,$2, $3,$4,$5,$6,$7,$8,$9,$10,$11) returning *",
      [
        req.body.hotel_id,
        "renting",
        req.body.customer_ssn,
        req.body.emp_SSN,
        req.body.room_no,
        req.body.booking_id,
        "false",
        req.body.arrival_time,
        req.body.departure_time,
        req.body.created_at,
        req.body.last_updated,
      ]
    );
    res.status(201).json({
      status: "success",
      data: {
        booking: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllBooking = async (req, res) => {
  try {
    const response = await db.query(
      "select * from booking_info where hotel_id=$1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        booking: response.rows,
      },
    });
    console.log(response.rows);
  } catch (err) {
    console.log(err);
  }
};


exports.getAllRenting = async (req, res) => {
  try {
    console.log(req.body);
    const response = await db.query(
      "select * from renting_info where hotel_id=$1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        renting: response.rows,
      },
    });
    console.log(response.rows);
  } catch (err) {
    console.log(err);
  }
};


exports.getBooking = async (req, res) => {
  try {
    const response = await db.query("select * from booking_info where booking_id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        booking: response.rows[0],
      },
    });
    console.log(response.rows);
  } catch (err) {
    console.log(err);
  }
};



// Straight Renting
exports.addRenting = async (req, res) => {

  try {
    const results = await db.query(
      "INSERT INTO renting_info (hotel_id, renting_status,customer_ssn, emp_SSN, room_no,booking_id,has_booked, arrival_time, departure_time, created_at, last_updated) values ($1,$2, $3,$4,$5,$6,$7,$8,$9,$10,$11) returning *",
      [
        req.body.hotel_id,
        "renting",
        req.body.customer_ssn,
        req.body.emp_SSN,
        req.body.room_no,
        req.body.booking_id,
        "false",
        req.body.arrival_time,
        req.body.departure_time,
        req.body.created_at,
        req.body.last_updated,
      ]
    );
    res.status(201).json({
      status: "success",
      data: {
        renting: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// Updating renting status
exports.setRenting = async (req, res) => {
    
  try {
    const results = await db.query(
      "UPDATE renting_info SET renting_status=$1, last_updated=$2 where renting_id =$3 returning *",
      [
        req.body.renting_status,
        req.body.last_updated,
        req.params.id,
      ]
    );
    res.status(200).json({
      status: "success",
      data: {
        booking: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }

}

// Updating booking status
exports.setBooking = async (req, res) => {


  try {

    console.log(req.body)
    const results = await db.query(
      "UPDATE booking_info SET booking_status=$1, last_updated=$2 where booking_id =$3 returning *",
      [req.body.booking_status, req.body.last_updated, req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        booking: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }

}

//all hotel_chains
exports.getChains = async (req, res) => {
  try {
    const response = await db.query(
      "select * from hotel_chain",
    );
    res.status(200).json({
      status: "success",
      data: {
        chain: response.rows,
      },
    });
    console.log(response.rows);
  } catch (err) {
    console.log(err);
  }







};
//add hotel_chain
exports.addChain = async (req, res) => {
    try {
      const response = await db.query(
        "INSERT INTO hotel_chain (chain_id,  chain_name, street_name, street_number, city, province, postal_code, country, num_of_hotels, rating, email) values ($1,$2, $3,$4,$5,$6,$7,$8,$9,$10,$11) returning *",
        [
          req.body.chain_id,
          req.body.chain_name,
          req.body.street_name,
          req.body.street_number,
          req.body.city,
          req.body.province,
          req.body.postal_code,
          req.body.country,
          req.body.num_of_hotels,
          req.body.rating,
          req.body.email,
        ]
      );
      res.status(201).json({
        status: "success",
        message: "The hotel chain has been added",
        data: {
          hotel: response.rows[0],
        },
      });
      // console.log(response.rows);
    } catch (err) {
      // console.log(err.message);

      return res.status(500).json({
        error: err.message,
      });
    }

};

//delete hotel_chain
exports.removeChain = async (req, res) => {
      try {
        const results = await db.query(
          "DELETE FROM hotel_chain where chain_id = $1",
          [req.params.id]
        );
        res.status(204).json({
          status: "success",
        });
      } catch (err) {
        console.log(err);
      }
};

//all hotel from a hotel_chain
exports.getHotels = async (req, res) => {
  try {
    const response = await db.query("select * from hotel where hotel_chain= $1",
    [req.params.id]);
    res.status(200).json({
      status: "success",
      data: {
        room: response.rows,
      },
    });
    console.log(response.rows);
  } catch (err) {
    console.log(err);
  }
};

//add hotel
exports.addHotel = async (req, res) => {
    try {
      const response = await db.query(
        "INSERT INTO hotel (chain_id,  hotel_name, street_name, street_number, city, province, postal_code, country, num_of_rooms, rating, email) values ($1,$2, $3,$4,$5,$6,$7,$8,$9,$10,$11) returning *",
        [
          req.body.chain_id,
          req.body.hotel_name,
          req.body.street_name,
          req.body.street_number,
          req.body.city,
          req.body.province,
          req.body.postal_code,
          req.body.country,
          req.body.num_of_rooms,
          req.body.rating,
          req.body.email
        ]
      );
      res.status(201).json({
        status: "success",
        message: "The hotel has been added",
        data: {
          hotel: response.rows[0],
        },
      });
      // console.log(response.rows);
    } catch (err) {
      // console.log(err.message);

      return res.status(500).json({
        error: err.message,
      });
    }

};

//delete hotel
exports.removeHotel = async (req, res) => {
      try {
        const results = await db.query(
          "DELETE FROM hotel where hotel_id = $1",
          [req.params.id]
        );
        res.status(204).json({
          status: "success",
        });
      } catch (err) {
        console.log(err);
      }
};


// Updating booking status
exports.setManager = async (req, res) => {

  try {
    const results = await db.query(
      "UPDATE hotel_management SET manager_SSN=$1, where hotel_id =$2 returning *",
      [req.body.manager_ssn, req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        booking: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }

}
