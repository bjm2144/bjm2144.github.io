let red = 0;
let blue = 0;

let table = document.getElementById('tableID');
let tableNonStates = document.getElementById('nonStates');

let reset = document.getElementById('reset');

reset.style.color = 'red';

if (table != null) {
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++)
            table.rows[i].cells[j].onclick = function () {
                tableText(this);
        };
    }
}

if(tableNonStates != null){
    for(let i = 0; i < tableNonStates.rows.length; i++){
        for(let j = 0; j < tableNonStates.rows[i].cells.length; j++)
            tableNonStates.rows[i].cells[j].onclick = function (){
                tableText(this);
        };
    }
}

if (reset != null){
    reset.onclick = function (){
        resetValues(this);
    };
}

function resetValues(tableCell){
    let red = document.getElementById('red');
    let blue = document.getElementById('blue');
    red.innerHTML = parseInt(0);
    blue.innerHTML = parseInt(0);

    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++){
            table.rows[i].cells[j].style.backgroundColor = "white";
        }
    }

    for (let i = 0; i < tableNonStates.rows.length; i++) {
        for (let j = 0; j < tableNonStates.rows[i].cells.length; j++){
            tableNonStates.rows[i].cells[j].style.backgroundColor = "white";
        }
    }
}

function tableText(tableCell) {
    let red = document.getElementById('red');
    let blue = document.getElementById('blue');
    let cost = returnCost(tableCell.innerHTML);

    if(tableCell.style.backgroundColor == "red"){
        console.log("The color is red");
        red.innerHTML = parseInt(red.innerHTML) - cost;
        blue.innerHTML = parseInt(blue.innerHTML) + cost;
        tableCell.style.backgroundColor = "blue";
    }
    else if(tableCell.style.backgroundColor == "blue"){
        console.log("The color is blue");
        blue.innerHTML = parseInt(blue.innerHTML) - cost;
        tableCell.style.backgroundColor = "white";
    }
    else{
        console.log("The color is white");
        red.innerHTML = parseInt(red.innerHTML) + cost;
        tableCell.style.backgroundColor = "red";
    }
    
}

function returnCost(state){
    state = state.trim();
    console.log(state);
    console.log(state.length);
    switch(state){
        case 'AL':
            return 9;
        break;
        case 'AK':
            return 3;
        break;
        case 'AZ':
            return 11;
        break;
        case 'AR':
            return 6;
        break;
        case 'CA':
            return 54;
        break;
        case 'CO':
            return 10;
        break;
        case 'CT':
            return 7;
        break;
        case 'DE':
            return 3;
        break;
        case 'FL':
            return 30;
        break;
        case 'GA':
            return 16;
        break;
        case 'HI':
            return 4;
        break;
        case 'ID':
            return 4;
        break;
        case 'IL':
            return 19;
        break;
        case 'IN':
            return 11;
        break;
        case 'IA':
            return 6;
        break;
        case 'KS':
            return 6;
        break;
        case 'KY':
            return 8;
        break;
        case 'LA':
            return 8;
        break;
        case 'ME':
            return 2;
        break;
        case 'MD':
            return 10;
        break;
        case 'MA':
            return 11;
        break;
        case 'MI':
            return 15;
        break;
        case 'MN':
            return 10;
        break;
        case 'MS':
            return 6;
        break;
        case 'MO':
            return 10;
        break;
        case 'MT':
            return 4;
        break;
        case 'NE':
            return 2;
        break;
        case 'NV':
            return 6;
        break;
        case 'NH':
            return 4;
        break;
        case 'NJ':
            return 14;
        break;
        case 'NM':
            return 5;
        break;
        case 'NY':
            return 28;
        break;
        case 'NC':
            return 16;
        break;
        case 'ND':
            return 3;
        break;
        case 'OH':
            return 17;
        break;
        case 'OK':
            return 7;
        break;
        case 'OR':
            return 8;
        break;
        case 'PA':
            return 19;
        break;
        case 'RI':
            return 4;
        break;
        case 'SC':
            return 9;
        break;
        case 'SD':
            return 3;
        break;
        case 'TN':
            return 11;
        break;
        case 'TX':
            return 40;
        break;
        case 'UT':
            return 6;
        break;
        case 'VT':
            return 3;
        break;
        case 'VA':
            return 13;
        break;
        case 'WA':
            return 12;
        break;
        case 'WV':
            return 4;
        break;
        case 'WI':
            return 10;
        break;
        case 'WY':
            return 3;
        break;
        case 'DE':
            return 3;
        break;
        case 'ME1':
            return 1;
        break;
        case 'ME2':
            return 1;
        break;
        case 'NE1':
            return 1;
        break;
        case 'NE2':
            return 1;
        break;
        case 'NE3':
            return 1;
        break;
        default:
            return 1;
    }
}