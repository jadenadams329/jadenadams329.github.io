// what is the path to the JSON file?
const apiURL = '../hoteldata.json';

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i = 0; i < myList.length; i++){

    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;

    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;

    let myFigure = document.createElement("figure");

    let iconCar = document.createElement("ion-icon");
    iconCar.name = "car-outline";

    let iconPhone = document.createElement("ion-icon");
    iconPhone.name = "call-outline";


    let myParagraph = document.createElement("p");
    myParagraph.textContent = myList[i].address;

    let myParagraphTwo = document.createElement("p");
    myParagraphTwo.textContent = myList[i].phone;

    let containerDiv = document.createElement("div");
    containerDiv.className = "container"

    containerDiv.appendChild(iconCar);
    containerDiv.appendChild(myParagraph);
    containerDiv.appendChild(iconPhone);
    containerDiv.appendChild(myParagraphTwo);



    myFigure.appendChild(myImageTag);
    myFigure.appendChild(myCaptionTag);

    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.appendChild(myFigure);
    cardDiv.appendChild(containerDiv);


    document.getElementById("myCards").appendChild(cardDiv);
   

    }

    
    
    
    
}); //end of "then" fat arrow function