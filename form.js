window.addEventListener("load", function(){
    function sendData(){
        const sendReq = new XMLHttpRequest();
        const signup = new URLSearchParams(new FormData(form));

        sendRequest.addEventListener("load", function(event){
            alert("Your account was created.");
        });

        sendRequest.addEventListener("error", function(event){
            alert("Unsuccessful.");
        });

        sendRequest.open("POST", "http://localhost:5000/app/new/user");

        sendRequest.send(signup);
    }
    const form = document.getElementById("register");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        sendData();
    });
});