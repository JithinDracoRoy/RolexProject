function sendMail() {
  console.log("Hiii");
  alert(document.getElementById("email").value)
    var params = {
      name: document.getElementById("name").value,
      to_email: document.getElementById("email").value,
      message: document.getElementById("feedback").value,
    };
    console.log("Hiii");
    const serviceID = "service_v8fzvpy";
    const templateID = "template_qpcjlsb";
    console.log("Hiii");
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          console.log("Hiii");
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("feedback").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

  document.getElementById("btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    sendMail();
});
  