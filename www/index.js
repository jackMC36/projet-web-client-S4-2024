function check_password() {
    var password = document.getElementById("userpwd").value;
    var list_carac = ["_","-",";",":","!","?",".","/","*","&","$","@"];
    for(var i = 0; i < list_carac.length; i++){
        if(password.includes(list_carac[i])){
            return true;
        }
    }
    return false;
}

function check_birthdate() {
    var birthdate = document.getElementById("birthdate").value;
    if(birthdate.length==0){
        return true;
    }
    if(birthdate[2] != "/"){
        return false;
        }
    if(birthdate[5] != "/"){
        return false;
        }
    var year = birthdate.substring(6,10);
    var month = birthdate.substring(3,5);
    var day = birthdate.substring(0,2);
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        return false;
    }

    var date = new Date(year, month, day);
    var date_now = new Date();
    if(date > date_now){
        return false;
    }
    return true;
}

function check_email(){
    var email = document.getElementById("email").value;
    if(email.includes("@") && email.includes(".")){
        return true;
    }
    return false;
}



function check() {
    if(check_password() && check_birthdate() && check_email()){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/htbin/register.py", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(this.responseText); 
                document.body.innerHTML = this.responseText;
            }
        }
        xhr.send("username=" + username + "&password=" + password);
        return false;
    }
    return false;
}


