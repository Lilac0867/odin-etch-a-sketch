const container = document.querySelector('#container');

function makeGrid(length) {
    while(container.firstChild) {
        container.remove(container.firstChild);
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
}

makeGrid(16);

const square = document.querySelectorAll('.square');

for(let i = 0; i < square.length; i++) {
    square[i].addEventListener('mouseover', (event) => {
        const coloredSquare = event.target;
        coloredSquare.classList.add('colored');
    });
}
