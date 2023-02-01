let container = document.querySelector('#container');




let defaultSize = function(num){
    for (let i = 0; i < num; i++) {                     
        let grid = document.createElement('div');       
        grid.classList.add('grid');                     
                                                       
        container.appendChild(grid);                    
    }}
    defaultSize(256);


let rC = '';                                                       //
let randomColor = function() {                                     //random color generator
    rC = "#" + Math.floor(Math.random()*16777215).toString(16);    //
}

let coloring = function() {
            randomColor();

            if (this.className.includes('colored')) {
                console.log(this.style.backgroundColor);
            } else {
                
            }
            this.style.backgroundColor = rC;
            this.classList.add("colored")
            let cucc = this.className;
            console.log(typeof cucc);
}
    

let grids = document.getElementsByClassName("grid");

let draw = function(){                  
for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener('mouseenter', coloring, false);
}}
draw();


let clearGrid = function(){
    for (let i = grids.length-1; i >= 0; i--) {
        container.removeChild(grids[i]);
    }
}



//change size

let size = document.getElementById('size');

let subButton = document.getElementById('subbutton');

let containerSize = size.value*7;

let changeContainerSize = function(){
    container.classList.remove("dimension");
    container.style.width = `${size.value*7}px`;
    console.log('fdfs');
    container.style.height = `${size.value}*7px`;
    
}
let changeSize = function() {
    clearGrid();
    
    if (size.value > 100) {
        size.value = 100;
    }
    let newSize = size.value*size.value;
    changeContainerSize();
    defaultSize(newSize);
    draw();
}



// Enter as apply button
subButton.addEventListener('click', changeSize, false);
let enter = function(){
    console.log('enter')
size.addEventListener("keyup", function(event){
    if (event.key === 'Enter'){
        event.preventDefault();
        document.getElementById("subbutton").click();
        size.blur();
    }
});}

