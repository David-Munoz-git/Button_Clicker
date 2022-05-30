function change(event){
    event.innerText = "Logout"
    
}

function display(blank){
    blank.innerText = "Remove Definition"
    }

var count = 37; 
var countlikes = document.querySelector("#bottom-like");
function addto(){
    count++
    countlikes.innerText = count + "likes"
    console.log(count);
}
