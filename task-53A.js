/*script.js
function checkAccess() {
  var roleElement = document.querySelector(".role");
  var ageElement = document.querySelector(".age");
  var accessMessage = document.querySelector(".accessMessage");

  var role = roleElement.value;
  var age = parseInt(ageElement.value);

  if (role === "admin" || role === "moderator") {
    accessMessage.textContent = "You have full access.";
    accessMessage.className = "accessMessage full-access-Green";
  } else if (role === "member" && age > 18) {
    accessMessage.textContent = "You have access to member content.";
    accessMessage.className = "accessMessage member-access-Blue";
  } else if (role === "guest") {
    accessMessage.textContent = "You have access to guest content.";
    accessMessage.className = "accessMessage guest-access-Orange";
  } else {
    accessMessage.textContent = "Access denied.";
    accessMessage.className = "accessMessage no-access-Red";
  }
}
*/
// script.js
function checkAccess() {
  // Get the elements that hold the role and age values
  var roleElement = document.querySelector(".role");
  var ageElement = document.querySelector(".age");

  // Get the element where the access message will be displayed
  var accessMessage = document.querySelector(".accessMessage");

  // Extract the role value from the input field
  var role = roleElement.value;

  // Convert the age input value from string to a number
  var age = parseInt(ageElement.value);

  // Check if the role is "admin" or "moderator" and grant full access
  if (role === "admin" || role === "moderator") {
    accessMessage.textContent = "You have full access."; // Display full access message
    accessMessage.className = "accessMessage full-access-Green"; // Change the class to indicate full access with green color
  }
  // Check if the role is "member" and the age is greater than 18 to grant member content access
  else if (role === "member" && age > 18) {
    accessMessage.textContent = "You have access to member content."; // Display member content access message
    accessMessage.className = "accessMessage member-access-Blue"; // Change the class to indicate member access with blue color
  }
  // Check if the role is "guest" and grant guest content access
  else if (role === "guest") {
    accessMessage.textContent = "You have access to guest content."; // Display guest content access message
    accessMessage.className = "accessMessage guest-access-Orange"; // Change the class to indicate guest access with orange color
  }
  // For all other cases, deny access
  else {
    accessMessage.textContent = "Access denied."; // Display access denied message
    accessMessage.className = "accessMessage no-access-Red"; // Change the class to indicate no access with red color
  }
}
