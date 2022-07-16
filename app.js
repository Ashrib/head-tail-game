var optionDiv = document.getElementById("options-box");
optionDiv.style.display = "none";

var selectedUser;
var userNmbr = Math.round(Math.random()*1);
function userToss() {
    switch(userNmbr) {
        case 0 :
            selectedUser = "User 1";
            break;
        case 1 :
            selectedUser = "User 2";
            break;
    }
    document.getElementById("selected-user").innerText = selectedUser + " can choose the option.";
    optionDiv.style.display = "block";
};

var usersDiv = document.getElementById("users");
usersDiv.style.display = "none";

function optionClick(a) {
    usersDiv.style.display = "flex";

    var selectedOption;
    var randomSelected;
    if(a === "head") {
        selectedOption = "Head";
        randomSelected = "Tail";
    }
    else{
        selectedOption = "Tail";
        randomSelected = "Head";
    };

    if(selectedUser === "User 1") {
        document.getElementById("hh").innerText = selectedOption;
        document.getElementById("gg").innerText = randomSelected;
    }
    else{
        
        document.getElementById("hh").innerText = randomSelected;
        document.getElementById("gg").innerText = selectedOption;
    };
};
function tries(b) {
    var us1 = document.getElementById("hh").innerText;
    var us2 = document.getElementById("gg").innerText;
    var rndm = Math.round(Math.random()*1);
    var get;
    if(rndm === 0){
        get = "Head";
    }
    else{
        get = "Tail";
    };
    if(b === "u1") {
        if(us1 ===get){
            document.getElementById("user1-points").innerText = "win";
        }
        else{
            document.getElementById("user1-points").innerText = "lose";
        }
    }
    else{
        if(us2 ===get){
            document.getElementById("user2-points").innerText = "win";
        }
        else{
            document.getElementById("user2-points").innerText = "lose";
        }
    }
};

