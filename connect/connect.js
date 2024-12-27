
const accessBtn = document.querySelectorAll(".access-btn");
const accessModal = document.querySelector(".access-modul")
const modalOverlay = document.querySelector(".modal-overlay")

accessBtn.forEach(btn=>{
  btn.addEventListener("click",()=>{
      accessModal.style.display="block"
      modalOverlay.style.display="block"
  })
})
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click",()=>{
  accessModal.style.display="none"
  modalOverlay.style.display="none"

})
const connectBtn = document.querySelector(".connect");
const connectText = document.querySelector(".connect a");
connectBtn.addEventListener("mouseenter",()=>{
  connectBtn.style.backgroundColor="#0077b6"
  connectText.style.color="white"
})
connectBtn.addEventListener("mouseleave",()=>{
  connectBtn.style.backgroundColor="white"
  connectText.style.color="black"
})

 const burgerIcon = document.querySelectorAll('.menu-toggle');
const menuWrapper = document.querySelector(".menu-wrapper")
const overlay = document.querySelector('.overlay');
burgerIcon.forEach(btn=>{
  btn.addEventListener("click",()=>{
    menuWrapper.classList.toggle("show")
    overlay.classList.toggle('show');
  })
})

overlay.addEventListener('click', () => {
  menuWrapper.classList.remove('show'); 
  overlay.classList.remove('show'); 
});

 const phone = document.querySelector("#phone"); 
phone.addEventListener("input", function (e) {  
  let input = e.target.value.replace(/\D/g, ""); 
  if (!input.startsWith("994")) {
    input = "994" + input; 
  }
  if (input.length > 12) {
    input = input.substring(0, 12); 
  }

  let formatted = "+994";
  if (input.length > 3) {
    formatted += " (" + input.substring(3, 5) + ")";
  }
  if (input.length > 5) {
    formatted += " " + input.substring(5, 8);
  }
  if (input.length > 8) {
    formatted += " " + input.substring(8, 10);
  }
  if (input.length > 10) {
    formatted += " " + input.substring(10, 12);
  }

  e.target.value = formatted;
});




const form = document.querySelector(".connect-form form");
const nameInput = document.querySelector("#name");
const mobileInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const topicInput = document.querySelector("#topic");

const popupOverlay = document.createElement("div");
const popup = document.createElement("div");

popupOverlay.classList.add("popup-overlay");
popup.classList.add("popup");

document.body.appendChild(popupOverlay);
document.body.appendChild(popup);

function showPopup(message, success) {
    popup.textContent = message;
    if (success) {
        popup.style.backgroundColor = "#4CAF50"; 
        popup.style.color = "#fff"; 
    } else {
        popup.style.backgroundColor = "#F44336"; 
        popup.style.color = "#fff"; 
    }

    popupOverlay.classList.add("show");
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
        popupOverlay.classList.remove("show");
    }, 3000);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const mobile = mobileInput.value.trim();
    const email = emailInput.value.trim();
    const topic = topicInput.value.trim();

    if (name && mobile && email && topic) {
        showPopup("Məlumat uğurla göndərildi!", true);
        form.reset();
    } else {
        showPopup("Xanaları doldurun!", false);
    }
});
const accessForm = document.querySelector(".access-modul form")
 const accessName = document.querySelector("#access-name")
 const accessSurname = document.querySelector("#access-surname")
 const accessEmail = document.querySelector("#access-email")
 const accessMobile = document.querySelector("#mobile")

accessForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = accessName.value.trim();
  const mobile = accessMobile.value.trim();
  const email = accessEmail.value.trim();
  const surname = accessSurname.value.trim()
  if (name && mobile && email && surname) {
      showPopup("Məlumat uğurla göndərildi!", true);
      accessName.value=""
      accessMobile.value=""
      accessEmail.value=""
      accessSurname.value=""
      
  } else {
      showPopup("Xanaları doldurun!", false);
  }
  
});

const phoneInput = document.querySelectorAll(".mobile");
phoneInput.forEach(input=>{
  input.addEventListener("input",(e)=>{
    let value = e.target.value.replace(/[^0-9]/g, ''); 
  if (!value.startsWith('99416')) {
    value = '99416' + value.replace(/^99416/, '');
  }
  value = value.slice(0, 12);

  let formattedValue = '+994 (16) ';
  if (value.length > 5) formattedValue += `${value.slice(5, 8)}`;
  if (value.length > 8) formattedValue += ` ${value.slice(8, 10)}`;
  if (value.length > 10) formattedValue += ` ${value.slice(10, 12)}`;

  e.target.value = formattedValue;
  })
})

phoneInput.forEach(input=>{
  input.addEventListener("blur",(e)=>{
    if (e.target.value === '') {
      e.target.value = '+994 (16) ___ __ __';
    }
  })
})
