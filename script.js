let stick = document.getElementById("stick-image");

const winnerDiv = document.getElementById("othercontainerforwinning");

winnerDiv.style.display = "none";

const stickImage = document.getElementById("stick-image");

stickImage.style.display = "none";

if (localStorage.getItem("dataStore1") !== null) {
  document.getElementById("save1").innerHTML = "Load Save 1";
}
if (localStorage.getItem("dataStore2") !== null) {
  document.getElementById("save2").innerHTML = "Load Save 2";
}

if (localStorage.getItem("dataStore3") !== null) {
  document.getElementById("save3").innerHTML = "Load Save 3";
}

if (localStorage.getItem("dataStore4") !== null) {
  document.getElementById("save4").innerHTML = "Load Save 4";
}

if (localStorage.getItem("dataStore5") !== null) {
  document.getElementById("save5").innerHTML = "Load Save 5";
}

// this top code defines the containers and the stick, and checks if datastores are already existing, and sets the text in the button so people know

const img = document.querySelector("img");
const images = document.getElementsByClassName("image");
images.ondragstart = () => {
  return false;
};
//disables dragging the cup
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

    var newArray = arrayOfLines.filter(item => typeof item === 'string' && /[a-zA-Z]/.test(item));

    var item = newArray[Math.floor(Math.random()*newArray.length)];

    document.getElementById("nameBox").blur();

    if (containsAlphabet(boxVal)) {
      //alert(item);
      winnerDiv.style.display = "block";
      document.getElementById("winnerText").innerHTML = item;


    } else {
      alert("You can't enter nothing in the names box. Enter at least 2 names, then try again.");


    }


    



}
// shows the container, defocuses the text box, checks if there is anything in the textbox, and changes the winner text to the randomly picked item

function windowCLS() {
  var athing = document.getElementById("othercontainerforwinning");

  athing.style.display = "none";

}
//function to hide container

function dataStore1() {
  if (localStorage.getItem("dataStore1") == null) {
    localStorage.setItem("dataStore1", document.getElementById("nameBox").value);
    alert("Successfully Saved Save #1")
    document.getElementById("save1").innerHTML = "Load Save 1";


  } else {
    document.getElementById("nameBox").value = localStorage.getItem("dataStore1");
    alert("Successfully Loaded Save #1")


  }

}
function dataStore2() {
  if (localStorage.getItem("dataStore2") == null) {
    localStorage.setItem("dataStore2", document.getElementById("nameBox").value);
    alert("Successfully Saved Save #2")
    document.getElementById("save2").innerHTML = "Load Save 2";


  } else {
    document.getElementById("nameBox").value = localStorage.getItem("dataStore2");
    alert("Successfully Loaded Save #2")


  }
  
}

function dataStore3() {
  if (localStorage.getItem("dataStore3") == null) {
    localStorage.setItem("dataStore3", document.getElementById("nameBox").value);
    alert("Successfully Saved Save #3")
    document.getElementById("save3").innerHTML = "Load Save 3";


  } else {
    document.getElementById("nameBox").value = localStorage.getItem("dataStore3");
    alert("Successfully Loaded Save #3")


  }
  
}
function dataStore4() {
  if (localStorage.getItem("dataStore4") == null) {
    localStorage.setItem("dataStore4", document.getElementById("nameBox").value);
    alert("Successfully Saved Save #4")
    document.getElementById("save4").innerHTML = "Load Save 4";


  } else {
    document.getElementById("nameBox").value = localStorage.getItem("dataStore4");
    alert("Successfully Loaded Save #4")


  }
  
}

function dataStore5() {
  if (localStorage.getItem("dataStore5") == null) {
    localStorage.setItem("dataStore5", document.getElementById("nameBox").value);
    alert("Successfully Saved Save #5")
    document.getElementById("save5").innerHTML = "Load Save 5";


  } else {
    document.getElementById("nameBox").value = localStorage.getItem("dataStore5");
    alert("Successfully Loaded Save #5")


  }
  
}


// these are all datastore buttons that check if they exist, and if they don't, created a datastore, and if they do, it loads it

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
//function for clearing datastores, and resetting the buttons' text

function removeItemFromMultilineTextBox(textBox, itemToRemove) {
  let lines = textBox.value.split('\n');
  let index = lines.indexOf(itemToRemove);
  if (index > -1) {
    lines.splice(index, 1);
    textBox.value = lines.join('\n');
  }
}

function removeSelectedName() {
  let theArea = document.getElementById('nameBox');
  removeItemFromMultilineTextBox(theArea, document.getElementById("winnerText").innerHTML);
  windowCLS();

}

/// these functions remove an item from a multiline textbox, and then gets the current textbox, and removes it, using the current text winner, then closes the window
