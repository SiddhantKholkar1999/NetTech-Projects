function myFunc(e){
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#password").value;

    console.log("Email : ",email);
    console.log("Password : ",pass);
    

    //Checking Email
    if (email.indexOf("@") <= 0) {
        document.getElementById("message_email").innerHTML = "Invalid Email";
        // return false;
    }
    else if (email.charAt(email.length - 4) !== "." && email.charAt(email.length - 3) !== ".") {
        document.getElementById("message_email").innerHTML = "Invalid Email Domain";
        // return false;
    }
    else {
        document.getElementById("message_email").innerHTML = "Valid Email";
    }

    //Checking Password
    if (pass !== null) {
        if (pass.trim() === "") {
            document.getElementById("message_password").innerHTML = "Blank Password";
            // console.log("Please Enter the value");
        }
        else if (pass.length > 8 && pass.length > 20) {
            document.getElementById("message_password").innerHTML = "Password must be between 8 to 20 characters";
            // console.log("Please Enter the Correct Length");
        }
        else {
            const hasUpperCase = /[A-Z]/.test(pass);
            const hasLowerCase = /[a-z]/.test(pass);
            const hasNumCase = /[0-9]/.test(pass);
            const hasSpecialCase = /[!@#$%^&*(),.?\":{}|<>]/.test(pass);

            if (!hasUpperCase) {
                document.getElementById("message_password").innerHTML = "Password must include at least one UpperCase Letter...";
                console.log("Password must include at least one UpperCase Letter...");
            } else if (!hasLowerCase) {
                document.getElementById("message_password").innerHTML = "Password must include at least one LowerCase Letter...";
                console.log("Password must include at least one LowerCase Letter...");
            } else if (!hasNumCase) {
                document.getElementById("message_password").innerHTML = "Password must include at least one Number...";
                console.log("Password must include at least one Number...");
            } else if (!hasSpecialCase) {
                document.getElementById("message_password").innerHTML = "Password must include at least one Special Character...";
                console.log("Password must include at least one Special Character...");
            } else {
                console.log("Valid Password");
            }
        }
    } else {
        document.getElementById("message_password").innerHTML = "Valid Password";
    }
}