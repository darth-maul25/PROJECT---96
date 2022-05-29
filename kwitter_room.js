// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBITXNUwmsZp5DjRYBGd-xEThIKdwRT-yY",
  authDomain: "webchat-439da.firebaseapp.com",
  databaseURL: "https://webchat-439da-default-rtdb.firebaseio.com",
  projectId: "webchat-439da",
  storageBucket: "webchat-439da.appspot.com",
  messagingSenderId: "515860772168",
  appId: "1:515860772168:web:1295a8a5644a8cb11e6f7d"
};


    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !"
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
         console.log("Room_names- -"+ Room_names);
         row = "<div class = 'room_name' onclick = 'redirectToRoomName(this.id)' id = '"+Room_names+"'>#"+Room_names+"</div> <hr>";
         document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding user name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "kwitter_page.html";
  }
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }
  
  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
  
