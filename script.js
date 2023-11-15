//Create First Function

function successCallback() {
    console.log("hooray, you made a sandwich!");
  }

//Create Second Function 

  function failureCallback(error) {
    console.error(`Error making sandwich: ${error}`);
  }
  

//Creating our third function  
function makeASandwich(successCallback, failureCallback) {
    sandwichIsMade = true;
    if(sandwichIsMade) {
        // sandwich made successfully
        successCallback();
        return;
    } else {
        // sandwich was not made successfully
        failureCallback("invalid sandwich parameters!");
        return
    }
}
makeASandwich(successCallback, failureCallback);



//Create Our first function 

function makeSoup() {
    console.log("yes,I'm hungry");
}

//create out second function 

function dontMakeSoup(error) {
    console.log(`Error making sandwich: ${error}`)
}

//Creating Our Function with a Callback Function
function makeMargarita(makeSoup, dontMakeSoup, margaritaIsMade) {
    if(margaritaIsMade) {        //if a margarita is made successfully
        makeSoup();
    } else {
        dontMakeSoup('dang'); 
    }
}
   
makeMargarita(makeSoup, dontMakeSoup, true);
makeMargarita(makeSoup, dontMakeSoup, false);


//Second Example: 