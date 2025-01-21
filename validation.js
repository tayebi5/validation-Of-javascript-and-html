document.getElementById('btn').addEventListener('click',(event)=>{
    event.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const phone=document.getElementById('phone').value;
    const Age=document.getElementById('age').value;
    const country=document.getElementById('Country').value;
    const dob=document.getElementById('dob').value;
    const file=document.getElementById('file').value;
    const gender=document.querySelector('input[name="Gender"]:checked');

    if(name===''){
        alert("enter the valid name");
        return false;
    }
    if(email===''|| !email.includes("@")){
        alert("enter the valid Email");
        return false;
    }
if(password===''){
        alert("enter the valid  password");
        return false;
}
 if(phone.length<11 || phone.length>11){
        alert("enter the valid  11 digit phone ");
        return false;
 }
 if(Age<1){
    alert("enter the valid age");
    return false;
}
 if(country===''){
    alert("enter the valid country");
    return false;
}
 if(dob===''){
    alert("enter the date of birth");
    return false;
}
 if(file===''){
    alert("enter the file");
    return false;
}
    
 if(!gender){
        alert("enter the Gender");
        return false;
    }
    alert("submit Successful");
    document.getElementById('SignUp').onsubmit();
})