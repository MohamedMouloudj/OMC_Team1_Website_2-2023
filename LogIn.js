setTimeout(function Rem(){
    document.getElementById("Anim").remove();
},3000)


function valid(event){
    event.preventDefault();
    var B=false;
    if(mailValid()){
        if(pwdValid()){
            B=true;
        }
    }
    if(B==true){
        event.target.submit();
        rdrct();
    }
}
function mailValid(){
    var mail=document.getElementById("mail").value;
    var regex=/^([a-zA-Z\.-]+)@(etu\.usthb)\.dz$/;
    if(regex.test(mail)){
        return true
    }else{
        alert("enter a correct email !")
    }
}
function pwdValid(){
    var pwd=document.getElementById("passwd").value;
    regex=/([a-zA-Z0-9]+){8,}$/;
    if(regex.test(pwd)){
        return true;
    }else{
        alert("enter you correct password !");
    }
}

function rdrct(){
    window.open("Profile.html");
    window.close()
}