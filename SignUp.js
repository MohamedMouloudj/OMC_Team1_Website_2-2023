let PWD;
function valid(event){
    var B=false;
    event.preventDefault();
    if(mailValid()){
        if(gmailValid()){
            if(pwd()){
                if(Cpwd()){
                    B=true;
                }
            }
        }
    }
    if(B==true){
        event.target.submit();
        redirect();
    }
}
function redirect(){
    window.location = "mindchat.html"
}
function mailValid(){
    var USTHB=document.getElementById("USTHB").value;
    var regex= /^([a-zA-Z0-9\.-]+)@(etu.usthb\.)dz$/

    if(regex.test(USTHB)){
        return true
    }else{
        alert("Enter you USTHB email: FirstName-LastName@etu.usthb.dz");
        return false;
    }
}
function gmailValid(){
    var mail=document.getElementById("mail").value;
    var Regex= /^([a-zA-Z0-9\._]+)@((gmail\.)|(hotmail\.))com$/

    if(Regex.test(mail)){
        console.log(true);
        return true
    }else{
        alert("Enter you personal email: example@'gmail/hotmail'.com");
        return false;
    }
}
function pwd(){
    var passwd=document.getElementById("passwd").value;
    var regex=/([a-zA-Z0-9 ]+){8,}$/
    if(regex.test(passwd)){
        console.log(true);
        PWD=passwd;
        return true
    }else{
        alert("Password must includ 8 charachter:[a-z][A-Z][0-9]")
        return false
    }
}
function Cpwd(){
    var cpasswd=document.getElementById("cpasswd").value;
    if(cpasswd==PWD){
        console.log(true);
        return true
    }else{
        alert("This does not match with your password !")
        return false;
    }

}
function redirect(){
    window.open("mindchat.html");
    window.close()
}