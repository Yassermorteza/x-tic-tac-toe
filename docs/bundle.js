(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function createMatrix(rowsCount, columnsCount){
 var matrix =[];

 for(var i=0; i<rowsCount; i++ ){
    matrix[i]=[];
    for(var x=0; x<columnsCount; x++){
     matrix[i].push(0);
    }
  }
return matrix;
}

},{}],2:[function(require,module,exports){
module.exports = {
  createMatrix: require('./create-matrix'),
  matrixFillColNum: require('./matrix-fill-col-num'),
  matrixFillRowNum: require('./matrix-fill-row-num'),
  matrixFillSequence: require('./matrix-fill-sequence'),
  matrixFillText: require('./matrix-fill-text'),
  matrixIncrement: require('./matrix-increment'),
  renderHtmlTable: require('./render-html-table'),
  renderPlainText: require('./render-plain-text'),
  renderTableDom: require('./render-table-dom')
}


},{"./create-matrix":1,"./matrix-fill-col-num":3,"./matrix-fill-row-num":4,"./matrix-fill-sequence":5,"./matrix-fill-text":6,"./matrix-increment":7,"./render-html-table":8,"./render-plain-text":9,"./render-table-dom":10}],3:[function(require,module,exports){
module.exports = function matrixFillColNum(data){
  var matrixx=[];
  var counter=0;
  data.forEach(function(col,index){
     matrixx[index]=[];
     for(var i=0; i< data[index].length; i++){
       matrixx[index].push(counter+i);
     }
  })
  return matrixx;
}

},{}],4:[function(require,module,exports){
module.exports = function matrixFillRowNum (data){

  var matrixx=[];

  data.forEach(function(rows, index){
    matrixx[index]= [];
    for(var i=0; i<data[index].length; i++){
      matrixx[index].push(index);
    }
  })
  return matrixx;
}

},{}],5:[function(require,module,exports){
module.exports = function matrixFillsequence(data){

    var newmatrixx= [];
    var counter = 0;
    for(var rownum=0; rownum < data.length ; rownum++){

      newmatrixx[rownum] = [];
      var columnscount= data[rownum].length;

      for(var i=0 ; i < columnscount ; i++){
        newmatrixx[rownum].push(counter);
        counter++;
      }
    }
    return newmatrixx;
}
},{}],6:[function(require,module,exports){
module.exports = function matrixFillText(data){

  var text = 'abcdefghijklmnopqrstuvwxyz';
  var strToArr = text.split('');
  var newmatrixx = [];
  counter = 0;

  data.forEach(function(txt, index){

    newmatrixx[index]=[];

    for(var i=0; i<data[index].length; i++){
      newmatrixx[index].push(strToArr[counter]);
      counter++;
    }
  })
  return newmatrixx;
}

},{}],7:[function(require,module,exports){
module.exports = function matrixIncrement(data){

  var newmatrixx = [];
  var counter = 0;
  data.forEach(function(increment, index){
    newmatrixx[index]=[];
    for(var i=0; i < data[index].length; i++){
      counter++;
      newmatrixx[index].push(counter);
    }
  })
  return newmatrixx;
}
},{}],8:[function(require,module,exports){
module.exports = function renderHTMLTable(matrix){

    var text = '';

    matrix.forEach(function(el){
      text += "<tr>";

      for(var i=0; i< el.length; i++){
         text += '<td>' + el[i] + "</td>";
      }

      text += "</tr>";
    })

    return text;
}
},{}],9:[function(require,module,exports){
module.exports = function renderPlainText(data){

    var  rows =[];
    data.forEach(function(columns){
      var row ='';
      row = columns.join('') + "<br>";
      rows.push(row);
    });
   var result = rows.join('\n')
  return result;
}

},{}],10:[function(require,module,exports){
module.exports = function renderTabelDom(element, data){


  data.forEach(function(columns, index){

     var row = document.createElement('tr');

     for(var i=0; i < data[index].length; i++){

      var col = document.createElement('td');
      col.appendChild(document.createTextNode(data[index][i]));
      // col.textContent=data[index][i];
      row.appendChild(col);
     }
     element.appendChild(row);
  })
}
},{}],11:[function(require,module,exports){
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
cells.forEach((td, i) => td.addEventListener('click', checkWinner));

function popUp() {
    e.divPopUp.classList.remove('hidden');
    cells.forEach((item) => item.removeEventListener('click', checkWinner));
    e.divPopUp.addEventListener('click', cleanItems);
}

function checkWinner(ev) {
    if (turn === "X") {
        ev.target.classList.add('cross');
        var cell = ev.target.cellIndex;
        var row = ev.target.parentElement.rowIndex;
        e.div.textContent = "It's O Turn";
        turn = "O";
        (row === 0) ? x.row0++: (row === 1) ? x.row1++ : x.row2++;
        (cell === 0) ? x.cell0++: (cell === 1) ? x.cell1++ : x.cell2++;
        (row === cell) ? x.diagonal1++: false;
        (row + cell === 2) ? x.diagonal2++: false;
        x.storeRow.push(x.row0, x.row1, x.row2, x.diagonal1);
        x.storeCell.push(x.cell0, x.cell1, x.cell2, x.diagonal2);
        console.log(x.storeRow);
        console.log(x.storeCell);
        if (x.storeRow.includes(3) || x.storeCell.includes(3)) {
            e.divWiner.textContent = "X won the game !!";
            turn = "X";
            e.div.textContent = "It's X Turn";
            counterX++;
            e.spanX.textContent = counterX;
            e.divPopUp.textContent = "paly again!";
            popUp();
        } else if (x.storeRow.length === 36 || x.storeRow.length === 20 && !x.storeRow.includes(3) && !x.storeCell.includes(3)) {
            e.divPopUp.textContent = "No winner!";
            popUp();
        }

    } else if (turn === "O") {
        ev.target.classList.add('circle');
        var cell = ev.target.cellIndex;
        var row = ev.target.parentElement.rowIndex;
        e.div.textContent = "It's X Turn";
        turn = "X";
        (row === 0) ? o.row0++: (row === 1) ? o.row1++ : o.row2++;
        (cell === 0) ? o.cell0++: (cell === 1) ? o.cell1++ : o.cell2++;
        (row === cell) ? o.diagonal1++: false;
        (row + cell === 2) ? o.diagonal2++: false;
        o.storeRow.push(o.row0, o.row1, o.row2, o.diagonal1);
        o.storeCell.push(o.cell0, o.cell1, o.cell2, o.diagonal2);
        // console.log(o.storeRow);
        // console.log(o.storeCell);
        if (o.storeRow.includes(3) || o.storeCell.includes(3)) {
            e.divWiner.textContent = "O won the game !!";
            turn = "O";
            e.div.textContent = "It's O Turn";
            counterO++;
            e.spanO.textContent = counterO;
            e.divPopUp.textContent = "paly again!";
            popUp();
        } else if (o.storeRow.length === 20 && !o.storeRow.includes(3) && !o.storeCell.includes(3)) {
            e.divPopUp.textContent = "No winner!";
            popUp();
        }
    }
    ev.target.removeEventListener('click', checkWinner);
};

function cleanItems() {
    clearObjects();
    cells.forEach((item) => {
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

// conditoin('cross', ev, "X", "O", x.row0, x.row1, x.row2, x.cell0, x.cell1, x.cell2,
//             x.diagonal1, x.diagonal2, x.storeRow, x.storeCell);

// function conditoin(classCss, ev, p1, p2, r0, r1, r2, c0, c1, c2, d1, d2, stw, stl) {

//     ev.target.classList.add(classCss);
//     var cell = ev.target.cellIndex;
//     var row = ev.target.parentElement.rowIndex;
//     e.div.textContent = "It's " + p2 + " Turn";
//     turn = p2;
//     (row === 0) ? r0++ : (row === 1) ? r1++ : r2++;
//     (cell === 0) ? c0++ : (cell === 1) ? c1++ : c2++;
//     (row === cell) ? d1++ : false;
//     (row + cell === 2) ? d2++ : false;
//     stw.push(r0, r1, r2, d1);
//     stl.push(c0, c1, c2, d2);
//     console.log(stw);
//     console.log(stl);
//     if (stw.includes(3) || stl.includes(3)) {
//         e.divWiner.textContent = p1 + "  won the game !!";
//         turn = p1;
//         e.div.textContent = "It's " + p1 + "  Turn";
//         counterX++;
//         e.spanX.textContent = counterX;
//         e.divPopUp.textContent = "paly again!";
//         popUp();
//     } else if (stw.length === 36 && !stw.includes(3) && !stl.includes(3)) {
//         e.divPopUp.textContent = "No winner!";
//         popUp();
//     }

// };
// Error {
//     [0, 0, 0, 2, 1, 0]
//     [0, 0, 0, 1, 1, 1],
//     [0, 0, 1, 0, 1, 1],
//     [1, 0, 0, 0, 0, 2],
//     [1, 0, 0, 2, 0, 0],
//     [0, 2, 0, 0, 1, 0],
//}

//for (var item of storeCellX) {
// var sum = storeCellX.reduce((sum, num) => sum + num);
// console.log(sum);
// (sum % 3 === 0) ? console.log('winner'): console.log('Failed');
// //}
//}
},{"array-matrix":2}]},{},[11]);
