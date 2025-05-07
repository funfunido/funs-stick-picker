let stick = document.getElementById("stick-image");

const winnerDiv = document.getElementById("othercontainerforwinning");

winnerDiv.style.display = "none";

const stickImage = document.getElementById("stick-image");

stickImage.style.display = "none";


const img = document.querySelector("img");
const images = document.getElementsByClassName("image");
images.ondragstart = () => {
  return false;
};

function containsAlphabet(str) {
  return /[a-zA-Z]/.test(str);
}

function updateNames() {
    let theValue = document.getElementById("nameBox").value;
    //console.log(theValue)
    var arrayOfthing = $('#nameBox').val().split('\n');

    arrayOfthing.forEach(function(element) {
      //console.log("Element Rendered")
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

    document.getElementById("nameBox").blur();

    if (containsAlphabet(boxVal)) {
      //alert(item);
      winnerDiv.style.display = "block";
      document.getElementById("winnerText").innerHTML = item;


    } else {
      alert("You can't enter nothing in the names box. Enter at least 2 names, then try again.");


    }


    



}


function windowCLS() {
  var athing = document.getElementById("othercontainerforwinning");

  athing.style.display = "none";

}


function dataStore1() {
  if (localStorage.getItem("dataStore1") == null) {
    localStorage.setItem("dataStore1", document.getElementById("nameBox").value);
    alert("successfully saved save")
    document.getElementById("save1").innerHTML = "Load Save 1";


  } else {
    document.getElementById("nameBox").value = localStorage.getItem("dataStore1");
    alert("successfully loaded save")


  }

}
function dataStore2() {
  if (localStorage.getItem("dataStore2") == null) {
    localStorage.setItem("dataStore2", document.getElementById("nameBox").value);
    alert("successfully saved save")
    document.getElementById("save2").innerHTML = "Load Save 2";


  } else {
    document.getElementById("nameBox").value = localStorage.getItem("dataStore2");
    alert("successfully loaded save")


  }
  
}

function dataStore3() {
  if (localStorage.getItem("dataStore3") == null) {
    localStorage.setItem("dataStore3", document.getElementById("nameBox").value);
    alert("successfully saved save")
    document.getElementById("save3").innerHTML = "Load Save 3";


  } else {
    document.getElementById("nameBox").value = localStorage.getItem("dataStore3");
    alert("successfully loaded save")


  }
  
}
function dataStore4() {
  if (localStorage.getItem("dataStore4") == null) {
    localStorage.setItem("dataStore4", document.getElementById("nameBox").value);
    alert("successfully saved save")
    document.getElementById("save4").innerHTML = "Load Save 4";


  } else {
    document.getElementById("nameBox").value = localStorage.getItem("dataStore4");
    alert("successfully loaded save")


  }
  
}

function dataStore5() {
  if (localStorage.getItem("dataStore5") == null) {
    localStorage.setItem("dataStore5", document.getElementById("nameBox").value);
    alert("successfully saved save")
    document.getElementById("save5").innerHTML = "Load Save 5";


  } else {
    document.getElementById("nameBox").value = localStorage.getItem("dataStore5");
    alert("successfully loaded save")


  }
  
}


function deleteAllSaves() {
  if (confirm("Are you sure you want to proceed? This will delete all of your saves!")) {
    localStorage.clear();
    alert("All Saves successfully cleared.")
    document.getElementById("save1").innerHTML = "Save 1";
    document.getElementById("save2").innerHTML = "Save 2";
    document.getElementById("save3").innerHTML = "Save 3";
    document.getElementById("save4").innerHTML = "Save 4";
    document.getElementById("save5").innerHTML = "Save 5";
  } else {
    console.log("User clicked Cancel. Action aborted.");
  }


}


