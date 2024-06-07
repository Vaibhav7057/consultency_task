let form = document.querySelector(".contactform");
let footeremail = document.querySelector(".submitemail");

form.addEventListener("submit",function(event){
    event.preventDefault();
    const user = {};
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let website = document.getElementById("website").value;
    let message = document.getElementById("message").value;
    user.name=name;
    user.email= email;
    user.website=website;
    user.message = message;
    console.log(user);
    form.reset();
})
footeremail.addEventListener("submit",function(event){
    event.preventDefault();
    let email = document.getElementById("footeremail").value;
    console.log("email: ",email);
    footeremail.reset();
})

