var arrayMatrixLib = require('array-matrix');
var createMatrix = arrayMatrixLib.createMatrix;
var matrix = createMatrix(3, 3);
let _ = (t) => (document.createElement(t));
let __ = (parT, t) => (parT.appendChild(t));
var e = {
    header: _('header'),
    main: _('main'),
    table: _('table'),
    div: _('div'),
    divWiner: _('div'),
    divPopUp: _('div'),
    footer: _('footer'),
    divPointX: _('div'),
    divPointO: _('div'),
    spanX: _('span'),
    spanO: _('span'),
    btn: _('button'),
    body: document.body
}

matrix.forEach((row, i) => {
    var tr = _('tr');
    tr.classList.add('row_' + i);
    row.forEach((cell, j) => {
        var td = _('td');
        td.classList.add('cell_' + j);
        __(tr, td);
    });
    __(e.table, tr);
});

e.div.classList.add('player');
e.divPopUp.classList.add('popUp');
e.divPopUp.classList.add('hidden');
e.div.textContent = "X starts";
e.divWiner.classList.add('winner');
e.header.textContent = "Tic Tac Toe";
e.spanO.textContent = 0;
e.spanX.textContent = 0;
e.btn.textContent = "Reset";
__(e.body, e.header);
__(e.main, e.div);
__(e.main, e.divPopUp);
__(e.main, e.table);
__(e.main, e.divWiner);
__(e.body, e.main);
__(e.body, e.footer);
__(e.divPointX, e.spanX);
__(e.divPointO, e.spanO);
__(e.footer, e.divPointX);
__(e.footer, e.divPointO);
__(e.footer, e.btn);

let turn = "X",
    counterX = 0,
    counterO = 0;

let rowCell = {
    storeRow: [],
    storeCell: [],
    row0: 0,
    row1: 0,
    row2: 0,
    cell0: 0,
    cell1: 0,
    cell2: 0,
    diagonal1: 0,
    diagonal2: 0
}

let x = Object.create(rowCell);
let o = Object.create(rowCell);

var cells = document.querySelectorAll('td');
cells.forEach(td => td.addEventListener('click', checkWinner));

function popUp() {
    e.divPopUp.classList.remove('hidden');
    cells.forEach(item => item.removeEventListener('click', checkWinner));
    e.divPopUp.addEventListener('click', cleanItems);
}

function checkWinner(ev) {
    if (turn === "X") {
        conditoin('cross', x, 'X', 'O', ev, counterX, e.spanX);
    } else if (turn === "O") {
        conditoin('circle', o, 'O', 'X', ev, counterO, e.spanO);
    }
    ev.target.removeEventListener('click', checkWinner);
};

function cleanItems() {
    clearObjects();
    cells.forEach(item => {
        item.addEventListener('click', checkWinner);
        item.classList.remove('cross');
        item.classList.remove('circle');
        e.divPopUp.classList.add('hidden');
    });
}

function clearObjects() {
    for (var k in x) {
        (typeof x[k] === 'number') ? x[k] = 0: x[k] = [];
    }

    for (var k in o) {
        (typeof o[k] === 'number') ? o[k] = 0: o[k] = [];
    }
}

e.btn.addEventListener('click', () => {
    clearObjects();
    cleanItems();
    counterO = 0;
    counterX = 0;
    e.spanO.textContent = 0;
    e.spanX.textContent = 0;
    e.div.textContent = "X starts";
});

function conditoin(cssClass, p, p1, p2, ev, counter, span) {

    ev.target.classList.add(cssClass);
    var cell = ev.target.cellIndex;
    var row = ev.target.parentElement.rowIndex;
    e.div.textContent = "It's " + p2 + " Turn";
    turn = p2;
    (row === 0) ? p.row0++: (row === 1) ? p.row1++ : p.row2++;
    (cell === 0) ? p.cell0++: (cell === 1) ? p.cell1++ : p.cell2++;
    (row === cell) ? p.diagonal1++: false;
    (row + cell === 2) ? p.diagonal2++: false;
    p.storeRow.push(p.row0, p.row1, p.row2, p.diagonal1);
    p.storeCell.push(p.cell0, p.cell1, p.cell2, p.diagonal2);
    if (p.storeRow.includes(3) || p.storeCell.includes(3)) {
        e.divWiner.textContent = p1 + "  won the game !!";
        turn = p1;
        e.div.textContent = "It's " + p1 + "  Turn";
        (p1 === 'X') ? counterX++ : counterO++;
        counter++;
        span.textContent = counter;
        e.divPopUp.textContent = "paly again!";
        popUp();
    } else if (p.storeRow.length === 20 && !p.storeRow.includes(3) && !p.storeCell.includes(3)) {
        e.divPopUp.textContent = "No winner!";
        popUp();
    }

};