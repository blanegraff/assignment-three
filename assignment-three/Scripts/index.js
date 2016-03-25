// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    // Instantiate new xhr object
    var request = new XMLHttpRequest();
    request.open('GET', '../index.json', true);
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status === 200) {
            var aboutMe = {};

            // read in the json object
            aboutMe = JSON.parse(request.responseText);

            // declare local paragraph array container & read
            var aboutMeArray = [];
            aboutMeArray = index.aboutMe;
            
            // store length of projectArray into a variable
            var aboutMeArrayLength = aboutMeArray.length;
            
            // loop through the projectArray
            for(var number=0; number < aboutMeArrayLength; number++) {
                var aboutMe = document.getElementById("aboutMe" + (number+1) );
                aboutMe.innerHTML = aboutMeArray[number];
            }

        }
    });
    request.send();

})();