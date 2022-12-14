function sendMail(){
    var params = {
        from_name: document.getElementById("exampleFormControlInput1").value,
        email_id: document.getElementById("exampleInputEmail1").value,
        message: document.getElementById("exampleFormControlTextarea1").value,
    };
}

const serviceID = "service_3cyfhlp";
const templateID = "template_ku07uhf";

emailjs
.send(serviceID, templateID, params)
.then((res) =>{
        document.getElementById("exampleFormControlInput1").value = "";
        document.getElementById("exampleInputEmail1").value = "";
        document.getElementById("exampleFormControlTextarea1").value = "";
        console.log(res);
        alert("Your message is delivered to me successfully");
    }
)
.catch((err) => console.log(err));
