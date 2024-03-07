function check_password() {
    var password = document.getElementById("userpwd").value;
    var list_carac = ["_","-",";",":","!","?",".","/","*","&","$","@"];
    for(var i = 0; i < list_carac.length; i++){
        if(password.includes(list_carac[i])){
            console.log("Le mot de passe est valide");
            return true;
        }
    }
    alert("Le mot de passe doit contenir au moins un caractère spécial");
    return false;
}

function check_birthdate() {
    var birthdate = document.getElementById("birthdate").value;
    if(birthdate.length==0){
        return true;
    }
    if(birthdate[2] != "/"){
        alert("Le format de la date de naissance doit être JJ/MM/AAAA");
        return false;
        }
    if(birthdate[5] != "/"){
        alert("Le format de la date de naissance doit être JJ/MM/AAAA");
        return false;
        }
    var year = birthdate.substring(6,10);
    var month = birthdate.substring(3,5);
    var day = birthdate.substring(0,2);

    var date = new Date(year, month, day);
    var date_now = new Date();
    if(date > date_now){
        alert("La date de naissance doit être inférieure à la date actuelle");
        return false;
    }
    return true;
}

function check_email(){
    var email = document.getElementById("email").value;
    if(email.includes("@") && email.includes(".")){
        return true;
    }
    alert("L'adresse mail doit contenir un @ et un .");
    return false;
}



function check(){
    if(check_password() && check_birthdate() && check_email()){
        return true;
        console.log("Vous avez bien été enregistré");
    }
    return false;
}