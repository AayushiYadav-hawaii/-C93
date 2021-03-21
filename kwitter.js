function addUser(){
    if(document.getElementById("user_name").value==""){
        document.getElementById("user_name").placeholder="Name is required";
    }
    else{
        username=document.getElementById("user_name").value;
        localStorage.setItem("user", username);
        window.location="kwitter_room.html";
    }
}