let container = document.querySelector('#container');


for (let i = 0; i < 256; i++) {                     //default size
    let grid = document.createElement('div');
    grid.classList.add('grid');

    container.appendChild(grid);
}

let grids = document.getElementsByClassName("grid");

let draw = function() {
            this.style.backgroundColor = "red";
            this.classList.add("colored")
            let cucc = this.className;
            console.log(typeof cucc);
}
    

for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener('mouseenter', draw, false);
}