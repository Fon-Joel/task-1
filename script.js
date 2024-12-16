document.addEventListener("DOMContentLoaded", function(){
   
})

function submitForm(event){
    event.preventDefault();
    if(checkPasswords()){
        alert("Form submitted");
        document.querySelectorAll('input').forEach((El) => {
            El.value = "";
        })
    }
}

function checkPasswords() {
    const password = document.getElementById('password');
    const confirm_password = document.getElementById('confirm_password');

    if(password.value != confirm_password.value){
        errorEl = document.getElementById("error");
        errorEl.textContent = "Password do not Match";
        return false;
    } else {
        return true;
    }

}