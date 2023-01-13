   const entreada = document.querySelector("#validation-input");
   entreada.addEventListener("blur",(event) => {
    if(entreada.value.length < 6){
        entreada.classList.add("#validation-input.invalid");
    }
    else{
        entreada.classList.add("#validation-input.valid");
    }
   });