// ------------------------------
// SafeDrip Hospital Navigation
// ------------------------------

function goToFloor(floor){
    localStorage.setItem("selectedFloor", floor);
    window.location.href = "ward.html";
}

function goToWard(ward){
    localStorage.setItem("selectedWard", ward);
    window.location.href = "bed.html";
}

function openDashboard(link){
    window.location.href = link;
}

function goBack(){
    history.back();
}