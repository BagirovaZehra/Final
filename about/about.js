document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "previous");
            if (i === index) {
                slide.classList.add("active");
            } else if (i === (index - 1 + slides.length) % slides.length) {
                slide.classList.add("previous");
            }
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    showSlide(currentIndex);
    setInterval(nextSlide, 5000); 
});

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

const servicesButtons = document.querySelectorAll(".services-button button");
const technology = document.querySelector(".technology");
const digitalService = document.querySelector(".digital-service");
const cloudService = document.querySelector(".cloud-service");

servicesButtons.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.textContent=="Texnoloji yeniliklər"){
            technology.style.display="flex";
            digitalService.style.display="none";
            cloudService.style.display="none"
        }
        if(e.target.textContent=="Rəqəmsal xidmətlər"){
            technology.style.display="none";
            digitalService.style.display="flex";
            cloudService.style.display="none"
        }
        if(e.target.textContent=="Bulud texnologiyaları və təhlükəsizlik"){
            technology.style.display="none";
            digitalService.style.display="none";
            cloudService.style.display="flex"
        }
    })
})
const accessBtn = document.querySelector(".access-btn");
const accessModal = document.querySelector(".access-modul")
const modalOverlay = document.querySelector(".modal-overlay")
accessBtn.addEventListener("click",()=>{
      accessModal.style.display="block"
      modalOverlay.style.display="block"
  })

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click",()=>{
  accessModal.style.display="none"
  modalOverlay.style.display="none"

})
 const accessForm = document.querySelector(".access-main-modul form");
//  const accessInputs = accessForm.querySelectorAll("input");
 const accessName = document.querySelector("#name")
 const accessSurname = document.querySelector("#surname")
 const accessEmail = document.querySelector("#email")
 const accessMobile = document.querySelector("#mobile")

 const popupOverlay = document.createElement("div");
 const popup = document.createElement("div");
 
 popupOverlay.classList.add("popup-overlay");
 popup.classList.add("popup");
 
 document.body.appendChild(popupOverlay);
 document.body.appendChild(popup);
 
 function showPopup(message, success = true) {
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
function animateNumber(element, targetValue) {
    let currentValue = 0;
    const increment = targetValue / 100;
    const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);
        }
        element.textContent = `${currentValue.toFixed(1)}%`;
    }, 30);
}

const numbers = document.querySelectorAll(".indicators-item h3");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target;
            const targetValue = parseFloat(number.getAttribute("data-target"));
            animateNumber(number, targetValue);
            observer.unobserve(number); 
        }
    });
}, { threshold: 0.5 }); 

numbers.forEach(number => {
    observer.observe(number);
});


   

 