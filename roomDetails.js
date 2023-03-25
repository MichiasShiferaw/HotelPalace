
function displayAvailableRooms(property) {
    // Create a new div element
    var roomDetailsDiv = document.createElement("div");

    // Create and append the h2 element
    var roomDetailsHeading = document.createElement("h2");
    roomDetailsHeading.textContent = "Room "+property.roomNumber;
   
    roomDetailsDiv.appendChild(roomDetailsHeading);


    // Create and append the room type paragraph
    var roomTypeParagraph = document.createElement("p");
    roomTypeParagraph.textContent = "Room Type: " + property.roomType;
    roomDetailsDiv.appendChild(roomTypeParagraph);

    // Create and append the number of bathrooms paragraph
    var numBathroomsParagraph = document.createElement("p");
    numBathroomsParagraph.textContent = "Damages: "+ property.damages;
    roomDetailsDiv.appendChild(numBathroomsParagraph);

    // Create and append the price paragraph
    var priceParagraph = document.createElement("p");
    priceParagraph.textContent = "Price: " + property.price ;
    roomDetailsDiv.appendChild(priceParagraph);

    var bookNowButton = document.createElement("a");
    bookNowButton.textContent = "Book Now" ;
    bookNowButton.href = "book.html";
    bookNowButton.style.textDecoration = "none";
    bookNowButton.style.backgroundColor = "#4E9CAF";
    bookNowButton.style.borderRadius = "5px";
    bookNowButton.style.color = "white";
    bookNowButton.style.fontWeight = "bold";
    bookNowButton.style.padding = "5px";
    roomDetailsDiv.appendChild(bookNowButton);




    roomDetailsDiv.style.backgroundColor = "#25be8b";
    roomDetailsDiv.style.border = "1px solid #2587be";
    roomDetailsDiv.style.padding = "10px";
    roomDetailsDiv.style.margin = "10px";
    roomDetailsDiv.style.borderRadius = "5px";



    document.getElementById("available-rooms").appendChild(roomDetailsDiv);

}

function loadRooms(){
    var rooms = [   
        { roomNumber: 101, available: true, roomType: "Standard", damages: "some",price: 100 },
        { roomNumber: 102, available: true , roomType: "Standard", damages: "some",price: 100 },
        { roomNumber: 103, available: false , roomType: "Standard", damages: "some",price: 100 },
        { roomNumber: 104, available: true , roomType: "Standard", damages: "some",price: 100 },
        { roomNumber: 105, available: false , roomType: "Standard", damages: "some",price: 100 },
        { roomNumber: 106, available: true , roomType: "Standard", damages: "some",price: 100 },
        { roomNumber: 107, available: true , roomType: "Delux", damages: "some",price: 100 },
        { roomNumber: 108, available: true , roomType: "Standard", damages: "some",price: 100 },

    
    ];
    for(var i=0; i<rooms.length; i++){
        displayAvailableRooms(rooms[i]);
    }
}


window.onload = function(){
    loadRooms()
}
