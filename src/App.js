import React from 'react';
// import logo from './logo.svg';
// import logic from './logic.js';
import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";

import Footer from "./components/Footer";
import './App.css';
import $ from 'jquery';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Instructions />

            <table id="table">
                <tbody>
                    <tr>
                        <td id="cell0" className="cell" onClick={markX0}></td>
                        <td id="cell1" className="cell" onClick={markX1}></td>
                        <td id="cell2" className="cell" onClick={markX2}></td>
                    </tr>
                    <tr>
                        <td id="cell3" className="cell" onClick={markX3}></td>
                        <td id="cell4" className="cell" onClick={markX4}></td>
                        <td id="cell5" className="cell" onClick={markX5}></td>
                    </tr>
                    <tr>
                        <td id="cell6" className="cell" onClick={markX6}></td>
                        <td id="cell7" className="cell" onClick={markX7}></td>
                        <td id="cell8" className="cell" onClick={markX8}></td>
                    </tr>
                </tbody>
            </table>
            {/* <button id="test" onClick={testFunction}>
                TEST
            </button>

            <button id="restart" onClick={restart}>
                Restart
            </button> */}

            {/* <button id="rewind" onClick={rewind}>
                Rewind
            </button> */}

            <div id="lamb">
            </div>

            <script src="assets/javascript/logic.js">
            </script>
            <Footer />

        </div>
    );

}

// function testFunction() {
//     alert('message');
// window.location = '';

// }
let availableCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let xCell0 = 0;
let xCell1 = 0;
let xCell2 = 0;
let xCell3 = 0;
let xCell4 = 0;
let xCell5 = 0;
let xCell6 = 0;
let xCell7 = 0;
let xCell8 = 0;

let lastCellClicked;

let maxClicks = 5;

let playerWin = false;

console.log("Player Win Var:");
console.log(playerWin);

let tiedGame = true;

let oMove;

function markO() {
    oMove = Math.floor((Math.random() * 9));
    if (maxClicks === 0) {
        return;
    }
    else if (availableCells[oMove] === "filled") {
        oMove = Math.floor((Math.random() * 9));
        markO();
    }
    else {
        document.getElementById("cell" + oMove).innerHTML = "O";
        document.getElementById("cell" + oMove).onClick = "";
        availableCells.splice(oMove, 1, "filled");
        let cell0Value = document.getElementById("cell0").innerHTML;
        if (cell0Value === "O") {
            xCell0 = "o";
        }
        let cell1Value = document.getElementById("cell1").innerHTML;
        if (cell1Value === "O") {
            xCell1 = "o";
        }
        let cell2Value = document.getElementById("cell2").innerHTML;
        if (cell2Value === "O") {
            xCell2 = "o";
        }
        let cell3Value = document.getElementById("cell3").innerHTML;
        if (cell3Value === "O") {
            xCell3 = "o";
        }
        let cell4Value = document.getElementById("cell4").innerHTML;
        if (cell4Value === "O") {
            xCell4 = "o";
        }
        let cell5Value = document.getElementById("cell5").innerHTML;
        if (cell5Value === "O") {
            xCell5 = "o";
        }
        let cell6Value = document.getElementById("cell6").innerHTML;
        if (cell6Value === "O") {
            xCell6 = "o";
        }
        let cell7Value = document.getElementById("cell7").innerHTML;
        if (cell7Value === "O") {
            xCell7 = "o";
        }
        let cell8Value = document.getElementById("cell8").innerHTML;
        if (cell8Value === "O") {
            xCell8 = "o";
        }
    }
}
function deactivateClicks() {
    document.getElementById("cell0").onClick = "";
    document.getElementById("cell1").onClick = "";
    document.getElementById("cell2").onClick = "";
    document.getElementById("cell3").onClick = "";
    document.getElementById("cell4").onClick = "";
    document.getElementById("cell5").onClick = "";
    document.getElementById("cell6").onClick = "";
    document.getElementById("cell7").onClick = "";
    document.getElementById("cell8").onClick = "";
    // document.getElementById("rewind").onClick = "";
}
function playerWinCheck() {
    if (xCell0 === "x" && xCell1 === "x" && xCell2 === "x") {
        tiedGame = false;
        playerWin = true;
        $("#cell0").css("color", "red");
        $("#cell1").css("color", "red");
        $("#cell2").css("color", "red");
        deactivateClicks();
        setTimeout(function () { alert("You Win!"); }, 50);
        console.log("Player Win Var:");
        console.log(playerWin);
        setTimeout(function () { window.location = '' }, 55);

        // window.location = '';
    }
    if (xCell3 === "x" && xCell4 === "x" && xCell5 === "x") {
        tiedGame = false;
        playerWin = true;
        $("#cell3").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell5").css("color", "red");
        setTimeout(function () { alert("You Win!"); }, 50);
        deactivateClicks();
        console.log("Player Win Var:");
        console.log(playerWin);
        setTimeout(function () { window.location = '' }, 55);
    }
    if (xCell6 === "x" && xCell7 === "x" && xCell8 === "x") {
        tiedGame = false;
        playerWin = true;
        $("#cell6").css("color", "red");
        $("#cell7").css("color", "red");
        $("#cell8").css("color", "red");
        setTimeout(function () { alert("You Win!"); }, 50);
        deactivateClicks();
        console.log("Player Win Var:");
        console.log(playerWin);
        setTimeout(function () { window.location = '' }, 55);
    }
    if (xCell0 === "x" && xCell3 === "x" && xCell6 === "x") {
        tiedGame = false;
        playerWin = true;
        $("#cell0").css("color", "red");
        $("#cell3").css("color", "red");
        $("#cell6").css("color", "red");
        setTimeout(function () { alert("You Win!"); }, 50);
        deactivateClicks();
        console.log("Player Win Var:");
        console.log(playerWin);
        setTimeout(function () { window.location = '' }, 55);
    }
    if (xCell1 === "x" && xCell4 === "x" && xCell7 === "x") {
        tiedGame = false;
        playerWin = true;
        $("#cell1").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell7").css("color", "red");
        setTimeout(function () { alert("You Win!"); }, 50);
        deactivateClicks();
        console.log("Player Win Var:");
        console.log(playerWin);
        setTimeout(function () { window.location = '' }, 55);
    }
    if (xCell2 === "x" && xCell5 === "x" && xCell8 === "x") {
        tiedGame = false;
        playerWin = true;
        $("#cell2").css("color", "red");
        $("#cell5").css("color", "red");
        $("#cell8").css("color", "red");
        setTimeout(function () { alert("You Win!"); }, 50);
        deactivateClicks();
        console.log("Player Win Var:");
        console.log(playerWin);
        setTimeout(function () { window.location = '' }, 55);
    }
    if (xCell0 === "x" && xCell4 === "x" && xCell8 === "x") {
        tiedGame = false;
        playerWin = true;
        $("#cell0").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell8").css("color", "red");
        setTimeout(function () { alert("You Win!"); }, 50);
        deactivateClicks();
        console.log("Player Win Var:");
        console.log(playerWin);
        setTimeout(function () { window.location = '' }, 55);
    }
    if (xCell2 === "x" && xCell4 === "x" && xCell6 === "x") {
        tiedGame = false;
        playerWin = true;
        $("#cell2").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell6").css("color", "red");
        setTimeout(function () { alert("You Win!"); }, 50);
        deactivateClicks();
        console.log("Player Win Var:");
        console.log(playerWin);
        setTimeout(function () { window.location = '' }, 55);
    }
}

function playerLoseCheck() {
    if (playerWin === true) {
        return;
    }
    if (xCell0 === "o" && xCell1 === "o" && xCell2 === "o") {
        tiedGame = false;
        $("#cell0").css("color", "red");
        $("#cell1").css("color", "red");
        $("#cell2").css("color", "red");
        setTimeout(function () { alert("Sorry, you lose.  Please try again."); }, 50);
        deactivateClicks();
        setTimeout(function () { window.location = '' }, 55);
    }
    if (xCell3 === "o" && xCell4 === "o" && xCell5 === "o") {
        tiedGame = false;
        $("#cell3").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell5").css("color", "red");
        setTimeout(function () { alert("Sorry, you lose.  Please try again."); }, 50);
        deactivateClicks();
        setTimeout(function () { window.location = '' }, 55);
    }
    if (xCell6 === "o" && xCell7 === "o" && xCell8 === "o") {
        tiedGame = false;
        $("#cell6").css("color", "red");
        $("#cell7").css("color", "red");
        $("#cell8").css("color", "red");
        setTimeout(function () { alert("Sorry, you lose.  Please try again."); }, 50);
        deactivateClicks();
        setTimeout(function () { window.location = '' }, 55);
    }
    if (xCell0 === "o" && xCell3 === "o" && xCell6 === "o") {
        tiedGame = false;
        $("#cell0").css("color", "red");
        $("#cell3").css("color", "red");
        $("#cell6").css("color", "red");
        setTimeout(function () { alert("Sorry, you lose.  Please try again."); }, 50);
        deactivateClicks();
        setTimeout(function () { window.location = '' }, 55);
    }
    if (xCell1 === "o" && xCell4 === "o" && xCell7 === "o") {
        tiedGame = false;
        $("#cell1").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell7").css("color", "red");
        setTimeout(function () { alert("Sorry, you lose.  Please try again."); }, 50);
        deactivateClicks();
        setTimeout(function () { window.location = '' }, 55);
    }
    if (xCell2 === "o" && xCell5 === "o" && xCell8 === "o") {
        tiedGame = false;
        $("#cell2").css("color", "red");
        $("#cell5").css("color", "red");
        $("#cell8").css("color", "red");
        setTimeout(function () { alert("Sorry, you lose.  Please try again."); }, 50);
        deactivateClicks();
        setTimeout(function () { window.location = '' }, 55);
    }
    if (xCell0 === "o" && xCell4 === "o" && xCell8 === "o") {
        tiedGame = false;
        $("#cell0").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell8").css("color", "red");
        setTimeout(function () { alert("Sorry, you lose.  Please try again."); }, 50);
        deactivateClicks();
        setTimeout(function () { window.location = '' }, 55);
    }
    if (xCell2 === "o" && xCell4 === "o" && xCell6 === "o") {
        tiedGame = false;
        $("#cell2").css("color", "red");
        $("#cell4").css("color", "red");
        $("#cell6").css("color", "red");
        setTimeout(function () { alert("Sorry, you lose.  Please try again."); }, 50);
        deactivateClicks();
        setTimeout(function () { window.location = '' }, 55);
    }
}
function playerTieCheck() {
    if (maxClicks === 0 && tiedGame === true) {
        alert("Hmm...looks like a tie.  Please try again");
        deactivateClicks();
        setTimeout(function () { window.location = '' }, 55);
    }
}
function markX0() {
    maxClicks -= 1;
    document.getElementById("cell0").innerHTML = "X";
    document.getElementById("cell0").onClick = "";
    xCell0 = "x";
    availableCells.splice(0, 1, "filled");
    lastCellClicked = 0;
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
    console.log(availableCells);
}
function markX1() {
    maxClicks -= 1;
    document.getElementById("cell1").innerHTML = "X";
    document.getElementById("cell1").onClick = "";
    xCell1 = "x";
    availableCells.splice(1, 1, "filled");
    lastCellClicked = 1;
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}
function markX2() {
    maxClicks -= 1;
    document.getElementById("cell2").innerHTML = "X";
    document.getElementById("cell2").onClick = "";
    xCell2 = "x";
    availableCells.splice(2, 1, "filled");
    lastCellClicked = 2;
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}
function markX3() {
    maxClicks -= 1;
    document.getElementById("cell3").innerHTML = "X";
    document.getElementById("cell3").onClick = "";
    xCell3 = "x";
    availableCells.splice(3, 1, "filled");
    lastCellClicked = 3;
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}
function markX4() {
    maxClicks -= 1;
    document.getElementById("cell4").innerHTML = "X";
    document.getElementById("cell4").onClick = "";
    xCell4 = "x";
    availableCells.splice(4, 1, "filled");
    lastCellClicked = 4;
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}
function markX5() {
    maxClicks -= 1;
    document.getElementById("cell5").innerHTML = "X";
    document.getElementById("cell5").onClick = "";
    xCell5 = "x";
    availableCells.splice(5, 1, "filled");
    lastCellClicked = 5;
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}
function markX6() {
    maxClicks -= 1;
    document.getElementById("cell6").innerHTML = "X";
    document.getElementById("cell6").onClick = "";
    xCell6 = "x";
    availableCells.splice(6, 1, "filled");
    lastCellClicked = 6;
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}
function markX7() {
    maxClicks -= 1;
    document.getElementById("cell7").innerHTML = "X";
    document.getElementById("cell7").onClick = "";
    xCell7 = "x";
    availableCells.splice(7, 1, "filled");
    lastCellClicked = 7;
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();

}
function markX8() {
    maxClicks -= 1;
    document.getElementById("cell8").innerHTML = "X";
    document.getElementById("cell8").onClick = "";
    xCell8 = "x";
    availableCells.splice(8, 1, "filled");
    lastCellClicked = 8;
    markO();
    playerWinCheck();
    playerLoseCheck();
    playerTieCheck();
}

function restart() {
    playerWin = false;
    console.log("Player Win Var:");
    console.log(playerWin);
    availableCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    maxClicks = 5;
    document.getElementById("cell0").innerHTML = "";
    document.getElementById("cell1").innerHTML = "";
    document.getElementById("cell2").innerHTML = "";
    document.getElementById("cell3").innerHTML = "";
    document.getElementById("cell4").innerHTML = "";
    document.getElementById("cell5").innerHTML = "";
    document.getElementById("cell6").innerHTML = "";
    document.getElementById("cell7").innerHTML = "";
    document.getElementById("cell8").innerHTML = "";
    document.getElementById("rewind").onClick = function () {
        rewind();
    };
    document.getElementById("cell0").onClick = function () {
        markX0();
    }
    document.getElementById("cell1").onClick = function () {
        markX1();
    }
    document.getElementById("cell2").onClick = function () {
        markX2();
    }
    document.getElementById("cell3").onClick = function () {
        markX3();
    }
    document.getElementById("cell4").onClick = function () {
        markX4();
    }
    document.getElementById("cell5").onClick = function () {
        markX5();
    }
    document.getElementById("cell6").onClick = function () {
        markX6();
    }
    document.getElementById("cell7").onClick = function () {
        markX7();
    }
    document.getElementById("cell8").onClick = function () {
        markX8();
    }

    xCell0 = 0;
    xCell1 = 0;
    xCell2 = 0;
    xCell3 = 0;
    xCell4 = 0;
    xCell5 = 0;
    xCell6 = 0;
    xCell7 = 0;
    xCell8 = 0;

    $("#cell0").css("color", "black");
    $("#cell1").css("color", "black");
    $("#cell2").css("color", "black");
    $("#cell3").css("color", "black");
    $("#cell4").css("color", "black");
    $("#cell5").css("color", "black");
    $("#cell6").css("color", "black");
    $("#cell7").css("color", "black");
    $("#cell8").css("color", "black");

}
$("#restart").click(function () {
    playerWin = false;
    console.log("Player Win Var:");
    console.log(playerWin);
    availableCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    maxClicks = 5;
    document.getElementById("cell0").innerHTML = "";
    document.getElementById("cell1").innerHTML = "";
    document.getElementById("cell2").innerHTML = "";
    document.getElementById("cell3").innerHTML = "";
    document.getElementById("cell4").innerHTML = "";
    document.getElementById("cell5").innerHTML = "";
    document.getElementById("cell6").innerHTML = "";
    document.getElementById("cell7").innerHTML = "";
    document.getElementById("cell8").innerHTML = "";
    document.getElementById("rewind").onClick = function () {
        rewind();
    };
    document.getElementById("cell0").onClick = function () {
        markX0();
    }
    document.getElementById("cell1").onClick = function () {
        markX1();
    }
    document.getElementById("cell2").onClick = function () {
        markX2();
    }
    document.getElementById("cell3").onClick = function () {
        markX3();
    }
    document.getElementById("cell4").onClick = function () {
        markX4();
    }
    document.getElementById("cell5").onClick = function () {
        markX5();
    }
    document.getElementById("cell6").onClick = function () {
        markX6();
    }
    document.getElementById("cell7").onClick = function () {
        markX7();
    }
    document.getElementById("cell8").onClick = function () {
        markX8();
    }

    xCell0 = 0;
    xCell1 = 0;
    xCell2 = 0;
    xCell3 = 0;
    xCell4 = 0;
    xCell5 = 0;
    xCell6 = 0;
    xCell7 = 0;
    xCell8 = 0;

    $("#cell0").css("color", "black");
    $("#cell1").css("color", "black");
    $("#cell2").css("color", "black");
    $("#cell3").css("color", "black");
    $("#cell4").css("color", "black");
    $("#cell5").css("color", "black");
    $("#cell6").css("color", "black");
    $("#cell7").css("color", "black");
    $("#cell8").css("color", "black");
});

function rewind() {
    if (lastCellClicked === 0) {
        document.getElementById("cell0").innerHTML = "";
        $("#cell0").css("color", "black");
        document.getElementById("cell0").onClick = function () {
            markX0();
        }
        maxClicks += 1;
        availableCells[0] = 0;
        xCell0 = 0;
    }
    if (lastCellClicked === 1) {
        document.getElementById("cell1").innerHTML = "";
        $("#cell1").css("color", "black");
        document.getElementById("cell1").onClick = function () {
            markX1();
        }
        maxClicks += 1;
        availableCells[1] = 1;
        xCell1 = 0;
    }
    if (lastCellClicked === 2) {
        document.getElementById("cell2").innerHTML = "";
        $("#cell2").css("color", "black");
        document.getElementById("cell2").onClick = function () {
            markX2();
        }
        maxClicks += 1;
        availableCells[2] = 2;
        xCell2 = 0;
    }
    if (lastCellClicked === 3) {
        document.getElementById("cell3").innerHTML = "";
        $("#cell3").css("color", "black");
        document.getElementById("cell3").onClick = function () {
            markX3();
        }
        maxClicks += 1;
        availableCells[3] = 3;
        xCell3 = 0;
    }
    if (lastCellClicked === 4) {
        document.getElementById("cell4").innerHTML = "";
        $("#cell4").css("color", "black");
        document.getElementById("cell4").onClick = function () {
            markX4();
        }
        maxClicks += 1;
        availableCells[4] = 4;
        xCell4 = 0;
    }
    if (lastCellClicked === 5) {
        document.getElementById("cell5").innerHTML = "";
        $("#cell5").css("color", "black");
        document.getElementById("cell5").onClick = function () {
            markX5();
        }
        maxClicks += 1;
        availableCells[5] = 5;
        xCell5 = 0;
    }
    if (lastCellClicked === 6) {
        document.getElementById("cell6").innerHTML = "";
        $("#cell6").css("color", "black");
        document.getElementById("cell6").onClick = function () {
            markX6();
        }
        maxClicks += 1;
        availableCells[6] = 6;
        xCell6 = 0;
    }
    if (lastCellClicked === 7) {
        document.getElementById("cell7").innerHTML = "";
        $("#cell7").css("color", "black");
        document.getElementById("cell7").onClick = function () {
            markX7();
        }
        maxClicks += 1;
        availableCells[7] = 7;
        xCell7 = 0;
    }
    if (lastCellClicked === 8) {
        document.getElementById("cell8").innerHTML = "";
        $("#cell8").css("color", "black");
        document.getElementById("cell8").onClick = function () {
            markX8();
        }
        maxClicks += 1;
        availableCells[8] = 8;
        xCell8 = 0;
    }
    if (oMove === 0) {
        document.getElementById("cell" + oMove).innerHTML = "";
        document.getElementById("cell" + oMove).onClick = function () {
            markX0();
        };
        availableCells[0] = 0;
        xCell0 = 0;
    }
    if (oMove === 1) {
        document.getElementById("cell" + oMove).innerHTML = "";
        document.getElementById("cell" + oMove).onClick = function () {
            markX1();
        };
        availableCells[1] = 1;
        xCell1 = 0;
    }
    if (oMove === 2) {
        document.getElementById("cell" + oMove).innerHTML = "";
        document.getElementById("cell" + oMove).onClick = function () {
            markX2();
        };
        availableCells[2] = 2;
        xCell2 = 0;
    }
    if (oMove === 3) {
        document.getElementById("cell" + oMove).innerHTML = "";
        document.getElementById("cell" + oMove).onClick = function () {
            markX3();
        };
        availableCells[3] = 3;
        xCell3 = 0;
    }
    if (oMove === 4) {
        document.getElementById("cell" + oMove).innerHTML = "";
        document.getElementById("cell" + oMove).onClick = function () {
            markX4();
        };
        availableCells[4] = 4;
        xCell4 = 0;
    }
    if (oMove === 5) {
        document.getElementById("cell" + oMove).innerHTML = "";
        document.getElementById("cell" + oMove).onClick = function () {
            markX5();
        };
        availableCells[5] = 5;
        xCell5 = 0;
    }
    if (oMove === 6) {
        document.getElementById("cell" + oMove).innerHTML = "";
        document.getElementById("cell" + oMove).onClick = function () {
            markX6();
        };
        availableCells[6] = 6;
        xCell6 = 0;
    }
    if (oMove === 7) {
        document.getElementById("cell" + oMove).innerHTML = "";
        document.getElementById("cell" + oMove).onClick = function () {
            markX7();
        };
        availableCells[7] = 7;
        xCell7 = 0;
    }
    if (oMove === 8) {
        document.getElementById("cell" + oMove).innerHTML = "";
        document.getElementById("cell" + oMove).onClick = function () {
            markX8();
        };
        availableCells[8] = 8;
        xCell8 = 0;
    }
}



export default App;
