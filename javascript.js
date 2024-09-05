const container = document.querySelector('#container');

function makeGrid(length) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for(let i = 0; i < length; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for(let j = 0; j < length; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }

    const square = document.querySelectorAll('.square');

    for(let i = 0; i < square.length; i++) {
        square[i].addEventListener('mouseover', (event) => {
            const coloredSquare = event.target;
            coloredSquare.classList.add('colored');
        });
    }
}

makeGrid(16);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    let len = -1;
    do {
        len = prompt("Please enter a length for the grid:");
    } while(len < 1 || len > 100);
    makeGrid(len);
});
