function myFunction() {
    let name = document.querySelector("#name").value;
    let noun1 = document.querySelector("#noun1").value;
    let place = document.querySelector("#place").value;
    let adjective = document.querySelector("#adjective").value;
    let colour = document.querySelector("#colour").value;
    let noun2 = document.querySelector("#noun2").value;

    if (!name || !noun1 || !place || !adjective || !colour || !noun2) {
        alert("Please fill the form"); 
        return; 
    }

    let message = document.querySelector("#message");
    message.innerHTML = "It was any other day when " + name + " went to " + place + " with their " + adjective + " " + colour + " " + noun1 + " and found a " + noun2 + ".";
}