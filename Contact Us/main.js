document.getElementById("agree").addEventListener("change", function() {
    const submitButton = document.querySelector("input[type='submit']");
    submitButton.disabled = !this.checked;
});




function emailSend(){


	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;


	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "hacerpc330@gmail.com",
    Password : "653639AD2ACA6A77F2A4502AFAEC5B002DDB",
    To : 'hopab28824@regishub.com',
    From : "hacerpc330@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}
}
