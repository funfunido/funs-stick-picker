let stick = document.getElementById("stick-image");

const img = document.querySelector("img");
const images = document.getElementsByClassName("image");
images.ondragstart = () => {
  return false;
};


function updateNames() {
    let theValue = document.getElementById("nameBox").value;
    alert(theValue)

}

$(document).keydown(function(event) {
  if (event.key === 'Space') {
    let names = document.getElementById('nameBox').value;  
    spin(names);
  }
});

function spin(names) {
    alert(names)

}




