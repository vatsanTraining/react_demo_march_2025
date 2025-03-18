var obj = {};

// function expression

obj.usingMapFunction = function (markList) {
  let updatedList = markList.map((value, idx) => {
    return value + 10;
  });

  console.log(updatedList);
};

// return an array of list item
/* <li>Chennai</li>
<li>Pune</li> */

obj.usingMapCreateElement = function (cityList) {
  let listItems = cityList.map((value, idx) => {
    let element = document.createElement("li");
    element.textContent = value;
    return element;
  });

  return listItems;
};

obj.createBulletList = function (parentElement, listItem) {
  console.log(typeof parentElement);
  listItem.forEach((eachItem, idx) => {
    parentElement.appendChild(eachItem);
  });
};

obj.addText = function (element, headingText = "Guest Travels") {
  element.innerHTML = headingText;
};

obj.createList = function (listItems) {
  for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i]);
  }

  // console.log(i)   // reference error

  // for(var i=0;i<listItems.length;i++){
  //     console.log(listItems[i])
  // }

  // console.log(i)  // value of i will be continuing
};
// Using Rest Param

obj.createListWithRestParam = function (...params) {
  params.forEach((value, idx) => {
    console.log(value);
  });
};
// Using Spread

obj.createListWithSpread = function (city1, city2, city3) {
  console.log(city1 + city2 + city3);
};

obj.inrToUsd = (inr) => inr * 95.0;

// passing both the arguments
obj.addText(document.getElementById("heading1"), "Jay Travels");
// passing one arguments will make the default value to be
// assigned two second argumnet
obj.addText(document.getElementById("heading2"));

let cityList = ["Chennai", "Mumbai", "Pune", "Nashik"];

// Destructure

let [loc1, loc2, ...loc3] = cityList;
//chennai ,mumbai,[pune nashik]
// obj.createList(cityList);

// obj.createListWithRestParam("Madurai", "Coimbatore", "Pondy");

// obj.createListWithRestParam(loc1,loc2,loc3);

// obj.createListWithSpread(...cityList)

// obj.usingMapFunction([10, 20, 30, 40]);

const result = obj.usingMapCreateElement(["Dog", "Lion", "Sanke"]);

console.log(result);

console.log(document.querySelector(".list-item"));
obj.createBulletList(document.querySelector("#listItem"), result);
