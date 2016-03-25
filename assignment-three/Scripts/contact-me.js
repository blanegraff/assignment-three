"use strict";
(function () {

      console.log("App Started...");
            
            // Declare Variables
            var inputName = document.getElementById("inputName");
            var email = document.getElementById("email");
            var subject = document.getElementById("subject");
            var inputMessage = document.getElementById("inputMessage");
            var submitButton = document.getElementById("submitButton");

            submitButton.addEventListener("click", function () {
                  console.log("Name: " + inputName.value);
                  console.log("Email: " + email.value);
                  console.log("Subject: " + subject.value);
                  console.log("Message: " + inputMessage.value);
            });
})();