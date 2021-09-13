function Login()
{
    //clearing the localStroage if any additional usernames are present
    localStorage.clear();

    //creating and setting the username in localStorage
    var username = document.getElementById("usernameInput").value;
    localStorage.setItem("your username", username);

    //changing the location
    window.location = "kwitterRoom.html";
    console.log("Logged in!");
}