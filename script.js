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
        To : 'osmondcode@gmail.com',
        From : document.getElementById('email').value,
        Subject : "Requested A Quote",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
// SEND EMAIL SCRIPT