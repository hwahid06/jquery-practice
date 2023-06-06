$(document).ready(() => {
    //This grabs the element with ID starting point
    const startingElement = $("#starting-point");
    //Creates a new Div
    const siblingElement = $("<div></div>");
    //Adds test to the new div
    siblingElement.text('this is the next part');
    //appends the new div to startingElement

    startingElement.after(siblingElement);

    const favoriteFoods = $("#favorite-foods");
    console.log(favoriteFoods)
    favoriteFoods.css('background-color', 'purple');

    const favFoods = ["pizza", "falafel", "bolani", "hot dog"]
    const favColors = ["green", "yellow", "red", "orange"]
        
    const favs = [
			{ food: 'pizza', color: 'green' },
			{ food: 'falafel', color: 'yellow' },
			{ food: 'bolani', color: 'red' },
			{ food: 'hot dog', color: 'orange' },
		]

    favs.forEach(obj => {
        let favFood = $('<div></div>')
        .text(obj.favFood)
        .css('background-color', 'red',obj.color );
        favoriteFoods.after(favFood)
    })
   




});