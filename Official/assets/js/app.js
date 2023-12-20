function openForm(){
    document.getElementById("subscribe").style.display = "block";
    document.getElementById("spawn").style.display = "none";
}
function closeForm(){
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("spawn").style.display = "block";
}
function subscribe(){
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let date  = document.getElementById("Date").value;
    let error = document.getElementById("error");
    let thankyou = document.getElementById("thankyou");
    if(name && email && date === "" || name === "" || email === "" || date === ""){
        error.innerHTML = "Please fill in the fields";
        name === "";
        email === "";
        date === "";
    }
    else{    
    document.getElementById("subscribe").style.display = "none";
    document.getElementById("spawn").style.display = "none";
        thankyou.innerHTML = name + " "+ "we thank you for subscribing";
    }
}