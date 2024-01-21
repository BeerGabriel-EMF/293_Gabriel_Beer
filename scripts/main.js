let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/imagesAccueil/image5.jpg") {
    myImage.setAttribute("src", "images/imagesAccueil/image2.jpg");
  } else {
    myImage.setAttribute("src", "images/imagesAccueil/image5.jpg");
  }
});
