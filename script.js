// DARK MODE SCRIPT
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
};
// DARK MODE SCRIPT

// REQUEST A QUOTE SCRIPT
let request = document.querySelector('form');
let endRequest = document.querySelector('form');

function requestForm(){
    if (request.style.display == 'none') {
        request.style.display = 'flex';
    }else {
        endRequest.style.display = 'none';
    }
}
// REQUEST A QUOTE SCRIPT

// SEND EMAIL SCRIPT
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "osmondcode@gmail.com",
        Password : "passcode$2022",
        To : 'omobrosengr@gmail.com',
        From : document.getElementById('email').value,
        Subject : "Requested A Your Service",
        Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Phone no: " + document.getElementById("phone").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert('Message sent successfully')
    );
}
// SEND EMAIL SCRIPT