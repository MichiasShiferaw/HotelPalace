import React, { Component } from "react";
// import items from "./data";
import api from "../apis/apiIndex";
//import Client from "./Contentful";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    allroom: [],
    rooms: [],
    sortedRooms: [],
    // featuredRooms: [],
    //
    room_capacity: "all",
    room_view: "all",
    hotel_name: "all",
    rating: 2,
    city: "all",
    num_of_rooms: 1000,
    chain_name: "all",

    price: 0,
    minPrice: 0,
    maxPrice: 0,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      let response = await api.get(`filter/rooms`);
      console.log(response.data.data.room);

      this.state.allroom = this.formatData(response.data.data.room);
      let rooms = this.formatData(response.data.data.room);
      // let rooms = response.data.data.room;


      console.log("Hey")
      console.log(rooms)
      //
      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let minRating = Math.min(...rooms.map((item) => item.rating));
      let min_numz_of_rooms = Math.min(...rooms.map((item) => item.num_of_rooms));
      this.setState({
        rooms,
        sortedRooms: rooms,
        loading: false,
        //

        rating: minRating,

        num_of_rooms: min_numz_of_rooms,

        price: maxPrice,
        maxPrice,
      });
    } catch (error) {
      console.log(error);
    }
  };

  formatData(items) {
    console.log(items);
    let tempItems = items.map((item, i) => {
      // console.log("testing")
      // // console.log(item)
      let id = i;
      // let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { item, id };
      return room;
    });
    return items;
  }
  getRoom = (slug) => {
    console.log("jungle")
    console.log(slug)
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      room_capacity,
      room_view,
      hotel_name,
      rating,
      city,
      num_of_rooms,
      chain_name,
      price,
    } = this.state;

    let tempRooms = [...rooms];

    //   let room = { item, id };
    // room_capacity = parseInt(room_capacity);
    rating = parseInt(rating);
    num_of_rooms = parseInt(num_of_rooms);
    price = parseInt(price);



    if (chain_name !== "all") {
      console.log(chain_name)
      tempRooms = tempRooms.filter((room) => room.chain_name === chain_name);
      console.log("chain check")
      console.log(tempRooms)
    }

    console.log("Hi Again")
    console.log(tempRooms)
    if (city !== "all") {
      tempRooms = tempRooms.filter((room) => room.city === city);
            console.log("Room View Check1");
    }

      tempRooms = tempRooms.filter((room) => room.rating >= rating);
            console.log("Room View Check2");


      tempRooms = tempRooms.filter(
        (room) => room.num_of_rooms <= num_of_rooms
      );


      tempRooms = tempRooms.filter((room) => room.price <= price);
            console.log("Room View Check3");


    if (room_view !== "all") {
      console.log("Room View Check")
      console.log(tempRooms);
      tempRooms = tempRooms.filter((room) => room.room_view === room_view);
            console.log("Room View Check4");
    }

    if (room_capacity !== "all") {
      tempRooms = tempRooms.filter(
        (room) => room.room_capacity === room_capacity
      );
            console.log("Room View Check5");
      console.log(tempRooms);
    }

    // tempRooms.map((tempRooms))
    // console.log(tempRooms[0]);
    // console.log("Goodbye")
    console.log("Birdman1");
console.log(tempRooms);
    console.log("Birdman2")
    console.log(this.state.sortedRooms)
    this.setState({
      sortedRooms: tempRooms,
    });
        console.log("Birdman3");
    console.log(tempRooms)
    console.log("Birdman4");
    console.log(this.state.sortedRooms);
  };
  render() {
        console.log(this.state);
        console.log("Drixxy");
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
