// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    // Instantiate new xhr object
    var request = new XMLHttpRequest();
    request.open('GET', '../projects.json', true);
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status === 200) {
            var projects = {};

            // read in the json object
            projects = JSON.parse(request.responseText);

            // declare local paragraph array container & read
            var projectArray = [];
            projectArray = projects.project;
            
            // store length of projectArray into a variable
            var projectArrayLength = projectArray.length;
            
            // loop through the projectArray
            for(var number=0; number < projectArrayLength; number++) {
                var project = document.getElementById("project" + (number+1) );
                project.innerHTML = projectArray[number];
            }

        }
    });
    request.send();

})();