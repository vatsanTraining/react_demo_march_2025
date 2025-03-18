var ourObj = {};

ourObj.headerRef = document.getElementById("header");

ourObj.show = function () {
  console.log("hello India");
};

ourObj.addHeader = function () {
  var headerElement = document.createElement("h1");

  headerElement.textContent = "Javascript Ninja";

  headerElement.setAttribute("class", "centerText primary");

  ourObj.headerRef.appendChild(headerElement);
};
ourObj.init = function () {
  ourObj.addHeader();
  var imgElement = document.createElement("img");

  var imageRef = "./images/" + "menu" + ".png";

  imgElement.setAttribute("src", imageRef);
  imgElement.setAttribute("id", "menuIcon");
  imgElement.classList = "menu-icon";

  ourObj.headerRef.appendChild(imgElement);
  imgElement.style.display = "none";
};

ourObj.addImage = function () {
  var btnElement = document.querySelector("button");

  btnElement.addEventListener("click", function () {
    var imgRef = document.querySelector("img");

    if (imgRef.style.display === "none") {
      imgRef.style.display = "block";
      btnElement.textContent = "Hide";
    } else {
      imgRef.style.display = "none";
      btnElement.textContent = "Show";
    }
  });
};

ourObj.init();
ourObj.addImage();
ourObj.show();
