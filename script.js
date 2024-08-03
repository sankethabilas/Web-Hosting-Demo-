function signup() {
    var fname = document.getElementById("fname");    
    var lname = document.getElementById("lname");    
    var email = document.getElementById("email");    
    var pw = document.getElementById("pw");    
    var city = document.getElementById("city");  

    var f = new FormData();

    f.append("fname",fname.value);
    f.append("lname",lname.value);
    f.append("email",email.value);
    f.append("pw",pw.value);
    f.append("city",city.value);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function () {
        if (r.readyState==4&&r.status==200) {
            var t = r.responseText;
            alert(t);
            
        }
        
    }

    r.open("POST","signupprocess.php",true);
    r.send(f);
    
    

}