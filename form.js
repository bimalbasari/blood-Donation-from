function validate() {

    //Read value from input  tag by id
    let username = document.getElementById("username").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    // Pattern for user name validation
  let userregxp = /^[a-zA-Z ]{2,30}$/;
// Pattern for phone number validation 
  let phoneregexp = /^[789]\d{9,12}$/;
  // Pattern for email validation
  let emailregexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Testing user name email & phone number  validation
  let usernameresult = userregxp.test(username);
  let phoneresult = phoneregexp.test(phone);
  let emailresult = emailregexp.test(email);

  // alert user if eror found
  if (!usernameresult) {
    alert("Name  not valid!");
  }
  if (!emailresult) {
    alert("Email not valid!");
  }
  if (!phoneresult) {
    alert("Phone number not valid!");
  }
}



console.log("testing");

