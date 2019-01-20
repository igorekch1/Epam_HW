let dimension = prompt("Enter the dimension:"), notValid = true;

while (notValid) {
	console.log(dimension)
	if (dimension === null) {alert("Exit..."); notValid = false}
    else if (dimension.length === 0 || isNaN(dimension)) {
		notValid = true
		alert("Invalid value! Try again:");
		dimension = prompt("Enter the dimension:");
	} 
	else {
		notValid = false
		displayArray(createArray(dimension))
	}
}


function createArray(dimension){
	let arr = [], x = 0 , y = 0, move = dimension -1, arrLength = Math.pow(dimension,2);

	//creating 2d array
	for (let i = 0; i < dimension; i++)
		arr[i] = []

	//filling the array with values
	fillArray(x,y,move,dimension,arrLength,arr)
	console.log(arr)
	return arr;
}

function fillArray(coord_x,coord_y,move,d,length,arr){
	for (let i = 1; i <= length; i++) {
		arr[coord_x][coord_y] = i;

        if(coord_x === move && coord_y === d - move - 1) move--;

        // Go down
        if((coord_y >= coord_x && coord_y < move) || (coord_x - 1 === coord_y && coord_x === d - move - 1)) { 
			coord_y = changeDirection(coord_y, "+") 
		}
        // Go top
        else if(coord_y <= coord_x && coord_y >= d - move)  { 
			coord_y = changeDirection(coord_y, "-") 
		} 
        // Go right
        else if(coord_x <= coord_y && coord_x < move) { 
			coord_x = changeDirection(coord_x, "+") 
		}
        // Go left
        else if(coord_x >= coord_y && coord_x >= d - move) { 
			coord_x = changeDirection(coord_x, "-") 
		}
	
	}
}

function changeDirection(coord, sign) {
	return eval(coord+sign+1);
}

function displayArray(arr) {
	for (let i = 0; i < arr.length; i ++) {
		document.body.appendChild(document.createElement("br"))
		for (let j = 0; j < arr[i].length; j ++) {
			var cell = document.body.appendChild(document.createElement('div'))
			cell.style = `
				width:60px;
				height:60px;
				display: inline-block;
				margin: 2px;
				text-align: center;
				line-height:60px;
				font-size: 20px;
				border: 1px solid black;
			`;
			cell.innerHTML = arr[i][j]
		}
	}
}


