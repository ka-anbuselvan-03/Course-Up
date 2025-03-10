// change navbar styles on scroll//

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)
})

//show and hide the faq answer//

const faqs= document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        
        //change icon of + to -//
        const icon=faq.querySelector('.faq_icon i');
        if(icon.className==='uil uil-plus'){
            icon.className = "uil uil-minus"
        }

    })
})

//show or hide the nav menu//

const menu = document.querySelector(".nav_menu");
const menuBtn =  document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',()=> {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display="none";
})

//close nav menu

const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display= "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click',closeNav)













//register page 

const form = document.getElementById('form');
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname')
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const password2 = document.getElementById('password2');
  
  //Show input error messages
  function showError(input, message) {
      const formControl = input.parentElement;
      formControl.className = 'form-control error';
      const small = formControl.querySelector('small');
      small.innerText = message;
  }
  
  //show success colour
  function showSucces(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-control success';
  }
  
  //check email is valid
  function checkEmail(input) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(input.value.trim())) {
          showSucces(input)
      }else {
          showError(input,'Email is not invalid');
      }
  }
  
  //checkRequired fields
  function checkRequired(inputArr) {
      inputArr.forEach(function(input){
          if(input.value.trim() === ''){
              showError(input,`${getFieldName(input)} is required`)
          }else {
              showSucces(input);
          }
      });
  }
  
  
  //check input Length
  function checkLength(input, min ,max) {
      if(input.value.length < min) {
          showError(input, `${getFieldName(input)} must be at least ${min} characters`);
      }else if(input.value.length > max) {
          showError(input, `${getFieldName(input)} must be les than ${max} characters`);
      }else {
          showSucces(input);
      }
  }
  
  //get FieldName
  function getFieldName(input) {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }
  
  // check passwords match
  function checkPasswordMatch(input1, input2) {
      if(input1.value !== input2.value) {
          showError(input2, 'Passwords do not match');
      }
  }
  
  
  //Event Listeners
  form.addEventListener('submit',function(e) {
      e.preventDefault();
  
      checkRequired([username, email, password, password2]);
      checkLength(fname,3,20);
      checkLength(lname,3,15)
      checkLength(username,3,15);
      checkLength(password,6,25);
      checkEmail(email);
      checkPasswordMatch(password, password2);
  });      
        



  //Course tab0 for the course tabs that gonna pop up

  const showContainers = document.querySelectorAll(".show-replies");

showContainers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let parentContainer = e.target.closest(".comment__container");
    let _id = parentContainer.id;
    if (_id) {
      let childrenContainer = parentContainer.querySelectorAll(
        `[dataset=${_id}]`
      );
      childrenContainer.forEach((child) => child.classList.toggle("opened"));
    }
  })
);
