let stick = document.getElementById("stick-image");

const img = document.querySelector("img");
const images = document.getElementsByClassName("image");
images.ondragstart = () => {
  return false;
};


function updateNames() {
    let theValue = document.getElementById("nameBox").value;
    //alert(theValue)

}

$(document).keydown(function(event) {
  if (event.key === '/' || event.key === '?') {
    let names = document.getElementById('nameBox').value;  
    spin(names);
  }
});

function spin(names) {
    //alert(names)
    var arrayOfLines = $('#nameBox').val().split('\n');

    var item = arrayOfLines[Math.floor(Math.random()*items.length)];


    alert(item)



}




