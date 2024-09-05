const container = document.querySelector('#container');

for(let i = 1; i <= 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for(let j = 1; j <= 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
    container.appendChild(row);
}
