function sendMail(){
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
}

const serviceID = "service_3cyfhlp";
const templateID = "template_ku07uhf";

emailjs
.send(serviceID, templateID, params)
.then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message is delivered to me successfully");
    }
)
.catch((err) => console.log(err));
