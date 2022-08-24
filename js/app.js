// When need  Element Content as a InnerText or value 
function getElementDetails(getElementId, elementInnerText) {
    let elementId = document.getElementById(getElementId);
    let elementContent;

    if (elementInnerText === true) {
        elementContent = parseInt(elementId.value);
    } else {
        elementContent = parseInt(elementId.innerText);
    }

    elementId = elementContent;
    return elementContent;
}



// Cart player add function 
function cartPlayers() {

    // display added player button in selected v section as a table content
    let table = document.getElementById("player-table");
    table.innerHTML = "";


    // Looping playerDetails Array for when click button to take player info
    for (i = 0; i < playerDetails.length; i++) {

        // Get player name when click select buuton
        let getPlayerName = playerDetails[i].playerName;
        let getSelectBtn = playerDetails[i].selectBtn;


        // Created condtion for added player limited Five
        if (i != 5) {

            // Creating Table tr and tb to add player in list and showing player SL NO & Player Name
            let tableTr = document.createElement("tr");
            tableTr.innerHTML = `
            <td>${i + 1}</td>
            <td>${getPlayerName}</td>
            `;
            table.append(tableTr);

            // When user Click Select button the will be disabled
            getSelectBtn.setAttribute("disabled", true);

            // Enable Calculate button
            let calculateBtn = document.getElementById("per-player-clculate-btn")
            calculateBtn.removeAttribute("disabled", true)

            
            // Player Expenses Calculation
            calculateBtn.addEventListener("click", function () {

                // Call Element using function [getElementDetails]
                let perPlayer = getElementDetails("per-player", true);

                // Get per player expenses
                let calculatePerPlayer = perPlayer * i;


                // display per player expenses 
                if (!isNaN(calculatePerPlayer)) {
                    document.getElementById("player-expenses").innerText = calculatePerPlayer.toFixed(2);
                } else {
                    alert("Please Provide Valid Number")
                    return
                }


                // Enable Total Calculate button
                let calculateTotal = document.getElementById("calculate-total");
                calculateTotal.removeAttribute("disabled", false);


                // Get Total Calculate Expenses
                calculateTotal.addEventListener("click", function () {

                    // Call all Element using function [getElementDetails]
                    let playerExpenses = getElementDetails("player-expenses", false);
                    let manager = getElementDetails("manager", true);
                    let coach = getElementDetails("coach", true);



                    // Validation Manager & Coach Expenses
                    if (isNaN(manager)) {
                        alert("Invalid Manager Expenses");
                    }

                    if (isNaN(coach)) {
                        alert("Invalid Coach Expenses");
                    }

                    // Calculate Final Total
                    let totalExpenses = playerExpenses + manager + coach;


                    // display Final toatal 
                    if (!isNaN(totalExpenses)) {
                        document.getElementById("total").innerText = totalExpenses.toFixed(2);
                    } else {
                        return
                    }
                    // let ttt = playerExpenses + manager + coach;
                    // document.getElementById("total").innerText = ttt
                })

            })

            // ==========================
        } else {
            alert("Your Alreay Added 5 Players");
            return;
        }
    }
}

let playerDetails = [];
// Select All Button
function selectPlayers(element) {
    let playerName = element.parentNode.children[0].innerText;
    let selectBtn = element.parentNode.children[2];

    // Create a Object to Storage all info about Players
    let playerObj = {
        playerName: playerName,
        selectBtn: selectBtn
    }

    // Added Player Object in PlayerDetails Array
    playerDetails.push(playerObj)

    // Call function Cart Player Added in Cart 
    cartPlayers(playerDetails);
}