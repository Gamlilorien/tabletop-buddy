//Sample email format
//window.open('mailto:test@example.com?subject=subject&body=body');
function sendMail() {
    email = $("#email-input").val();
    console.log(email);
    window.open('mailto:' +email +'?subject=Join%20us%20at%20RPG%20Buddy&body=https://gamlilorien.github.io/rpg-buddy/');
    //then empty the form value
    $("#email-input").empty();
}

$(document).on("click", "#send-mail", sendMail);