//defining constats
let width = document.getElementById('inputWidth');
let height = document.getElementById('inputHeight');
const submitt = document.getElementById('submitting');
let desingText = document.getElementById('pixelCanvas');
const table = document.getElementById("pixelCanvas");


//put color on the cells by clicking it
function clickCells() {
    const colorPicker = document.getElementById("colorPicker");
    table.addEventListener("click", function (event) {
        let clickedCell = event.target;
        clickedCell.style.backgroundColor = colorPicker.value;
    });
}


//function definition to build the grid
function makeGrid(height, width) {
    table.innerHTML = ""
    for (let i = 0; i < height; i++) {
        let row = table.insertRow()
        for (let j = 0; j < width; j++) {
            row.insertCell()
        }
    }
    clickCells()
}


// triggering the make grid function by clicking on the submit button
submitt.addEventListener('click', function (event) {
    console.log('The heading was clicked!');
    event.preventDefault();
    makeGrid(height.value, width.value);
});
