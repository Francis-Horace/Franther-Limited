const form =
document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();
emailjs.init("YOUR_PUBLIC_KEY");

emailjs.send(

"YOUR_SERVICE_ID",

"YOUR_TEMPLATE_ID",

{

name:
document.getElementById("name").value,

email:
document.getElementById("email").value,

message:
document.getElementById("message").value

}

)

.then(function(){

alert("Message Sent Successfully!");

form.reset();

})

.catch(function(error){

alert("Unable to send message.");

console.log(error);

});

});