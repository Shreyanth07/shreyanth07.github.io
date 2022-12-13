let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

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
