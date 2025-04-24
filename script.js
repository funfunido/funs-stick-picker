const img = document.querySelector("img");
const images = document.getElementsByClassName("image");
images.ondragstart = () => {
  return false;
};

function updateNames() {
    alert("testing")

}

let stick = document.getElementById("stick-image");


