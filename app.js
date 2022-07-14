
var selectedUser;
function userToss() {
    var userNmbr = Math.round(Math.random()*1)
    switch(userNmbr) {
        case 0 :
            console.log("User1");
            selectedUser = "User 1";
            break;
        case 1 :
            console.log("User2");
            selectedUser = "User 2";
            break;
    }
    document.getElementById("selected-user").innerText = selectedUser + " can choose the option.";
}
