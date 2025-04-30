let stick = document.getElementById("stick-image");

const img = document.querySelector("img");
const images = document.getElementsByClassName("image");
images.ondragstart = () => {
  return false;
};


function updateNames() {
    let theValue = document.getElementById("nameBox").value;
    //console.log(theValue)
    var arrayOfthing = $('#nameBox').val().split('\n');

    arrayOfthing.forEach(function(element) {
      console.log("sdfsdf")
  });
  

}

$(document).keydown(function(event) {
  if (event.key === '/' || event.key === '?') {
    let names = document.getElementById('nameBox').value;  
    spin(names);
  }
});

function spin(names) {
    //alert(names)

    let boxVal = $('#nameBox').val();

    var arrayOfLines = $('#nameBox').val().split('\n');

    var item = arrayOfLines[Math.floor(Math.random()*arrayOfLines.length)];

    if (boxVal == "" || boxVal == " ") {
      alert("You can't enter nothing in the names box. Enter at least 2 names, then try again.");
    } else {
      alert(item);


    }


    



}




