function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let invalid = document.querySelector('.invalid');
    let emailInput = document.querySelector('.email-input');
    let newsletter = document.querySelector('.newsletter');
    let prompt = document.querySelector('.success-prompt');
    if(inputText.value.match(mailformat)){
        newsletter.remove()
        prompt.classList.remove('hidden')
        document.getElementById('user-email').innerText = emailInput.value;
        return true;
    }
    else{
        invalid.classList.remove('hidden')
        emailInput.classList.add('bg-Tomato')
        emailInput.classList.add('border-Tomato')
        return false;
    }
}

var form = document.getElementById("email-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

