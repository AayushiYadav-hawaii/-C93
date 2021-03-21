 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDVkMoL0qpELros9Ry34vMeysabPdKbSDI",
      authDomain: "k-witter-71b4d.firebaseapp.com",
      projectId: "k-witter-71b4d",
      storageBucket: "k-witter-71b4d.appspot.com",
      messagingSenderId: "88317636752",
      appId: "1:88317636752:web:d499232f9e0d4e1ee26815"
    };
      // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
userNaMe=localStorage.getItem("user");
document.getElementById("welcomeuser").innerHTML="Welcome" +userNaMe;


function addRoom(){
      if(document.getElementById("roomname").value==""){
            document.getElementById("roomname").placeholder="Room is required";
        }
        else{
            room_name=document.getElementById("roomname").value;
            localStorage("rN", room_name);
            firebase.database().ref("/").child(room_name).update ({
              purpose:"add room name"
            });
        }
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function redirecttoroomname(name){
console.log(name);
localStorage.setItem("rN", name);
window.location="kwitter_page.html";
}