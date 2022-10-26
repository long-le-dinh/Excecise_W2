function login(){
   event.preventDefault;
    const username = document.getElementById("user").value;
    const password = document.getElementById("psw").value;
    if(username==""){
        window.alert("Username is empty!");
    }
    else if(password==""){
        window.alert("Password is empty!");
    }
    else{
        if(username=="john" && password=="1234"){
            window.location.replace("dashboard.html");
        }
        else
            window.alert("Username or password is not correct!");
    }
}

