var navLinks = document.getElementById('nav-links');

function showMenu() {
    navLinks.style.right = 0 + 'px';
}
function hideMenu() {
    navLinks.style.right = -200 + 'px';
}

function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}
function seterror(id, error) {
    // sets error insides tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    clearErrors();
    // performe validation and if validation fails , set the value of returnval to false 
    var name = document.forms['Entery_form']["name"].value;
    if (name.length <= 3) {
        seterror("Full_name", alert("The name is too short !"));
        returnval = false;
    }
    if (name.length > 15) {
        seterror("Full_name", alert("The name is too long !"));
        returnval = false;
    }
    if (name.trim() == "") {
        seterror("Full_name", alert("Please fill ! "));
        returnval = false;
    }


    if (returnval == true) {
        
    var name = document.getElementById('Name').value;
    var email = document.getElementById('mail').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var Body = '<b>New message : </b>' + name +'<br><br>Name: ' + name +
    '<br>Email : ' + email + '<br> Subject is : '+ subject +'<br> Message from ' + name + " : " + message;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "san2722soni@gmail.com",
        Password: "ntxvoikviqpjeruo",
        To: 'prasadembro2016@gmail.com', 
        From: "san2722soni@gmail.com",
        Subject: "New message from Eduford" + name,
        Body: Body
    }).then(
        message => {
            //console.log (message);
            if (message == 'OK') {
                alert('Your mail has been send. Thank you for connecting.');
            }
            else {
                console.error(message);
                alert('There is error at sending message. ')

            }

        }
    );
    }
return returnval;
}