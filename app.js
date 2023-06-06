$(document).ready(() => {
    //This grabs the element with ID starting point
    const startingElement = $("#starting-point");
    //Creates a new Div
    const siblingElement = $("<div></div>");
    //Adds test to the new div
    siblingElement.text('this is the next part');
    //appends the new div to startingElement

    startingElement.after(siblingElement);



});