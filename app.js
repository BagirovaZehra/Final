
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
    setInterval(nextSlide, 4000); 
});

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

const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.tariff-card');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let minIndex;
let currentIndex = 0


function slideCarousel() {
  const currentWidth = window.innerWidth;
  let result;
  if(currentWidth>1280){
    result = 50;
    minIndex = cards.length-2
  }
  else if(currentWidth>=850 && currentWidth<=1280){
    result=50;
    minIndex = cards.length-2
  }
  else if (currentWidth >= 601 && currentWidth < 850) {
    result = 100;
    minIndex = cards.length - 1;
  }
  slider.style.transform = `translateX(-${currentIndex * result}%)`;
}

leftArrow.addEventListener("click", () => {
  if(currentIndex===0){
    currentIndex=minIndex
  }
  else{
    currentIndex--;
  }
  slideCarousel();
});

rightArrow.addEventListener("click", () => {
  if(currentIndex===minIndex){
    currentIndex=0
  }
  else{
    currentIndex++
  }
  slideCarousel();
});


const firstBtn = document.querySelectorAll(".first button")
firstBtn.forEach(btn=>{
    let firstSpan = document.querySelector(".first1");
    let secondSpan = document.querySelector(".first2")
    btn.addEventListener("click",(e)=>{
        if(e.target.textContent=="15m"){
            firstSpan.textContent="250"
            secondSpan.textContent="15"
        }
        if(e.target.textContent=="18m"){
            firstSpan.textContent="300"
            secondSpan.textContent="20"
        }
        if(e.target.textContent=="20m"){
            firstSpan.textContent="350"
            secondSpan.textContent="25"
        }
    })
})
const secondBtn = document.querySelectorAll(".second button")
secondBtn.forEach(btn=>{
    let firstSpan = document.querySelector(".second1");
    let secondSpan = document.querySelector(".second2")
    btn.addEventListener("click",(e)=>{
        if(e.target.textContent=="6m"){
            firstSpan.textContent="70"
            secondSpan.textContent="35"
        }
        if(e.target.textContent=="8m"){
            firstSpan.textContent="100"
            secondSpan.textContent="50"
        }
        if(e.target.textContent=="10m"){
            firstSpan.textContent="130"
            secondSpan.textContent="65"
        }
    })
})
const thirdBtn = document.querySelectorAll(".third button")
thirdBtn.forEach(btn=>{
    let firstSpan = document.querySelector(".third1");
    let secondSpan = document.querySelector(".third2")
    btn.addEventListener("click",(e)=>{
        if(e.target.textContent=="10m"){
            firstSpan.textContent="170"
            secondSpan.textContent="8"
        }
        if(e.target.textContent=="12m"){
            firstSpan.textContent="200"
            secondSpan.textContent="10"
        }
        if(e.target.textContent=="14m"){
            firstSpan.textContent="250"
            secondSpan.textContent="15"
        }
    })
})
const fourthBtn = document.querySelectorAll(".fourth button")
fourthBtn.forEach(btn=>{
    let firstSpan = document.querySelector(".fourth1");
    let secondSpan = document.querySelector(".fourth2")
    btn.addEventListener("click",(e)=>{
        if(e.target.textContent=="20m"){
            firstSpan.textContent="425"
            secondSpan.textContent="30"
        }
        if(e.target.textContent=="25m"){
            firstSpan.textContent="600"
            secondSpan.textContent="50"
        }
        if(e.target.textContent=="30m"){
            firstSpan.textContent="750"
            secondSpan.textContent="100"
        }
    })
})

const servicesBtn = document.querySelectorAll(".services-button button");
const serviceTitle = document.querySelectorAll(".services-title h3");
servicesBtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        serviceTitle.forEach(title=>{
            title.parentElement.parentElement.parentElement.classList.add("services-hidden")
            if(e.target.textContent==title.textContent){
                title.parentElement.parentElement.parentElement.classList.remove("services-hidden")
            }
        })
    })
})


const appCards = document.querySelector(".app-cards");
const appCard = document.querySelectorAll(".app-card")
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const pagination = document.querySelector(".pagination")
let currentNumber = 0;

function updateCarousel() {
  const currentWidth = window.innerWidth;
  let result;

  if (currentWidth >= 1280) {
    result = 51;
    minIndex = appCard.length - 2;
    const dynamicDot = document.querySelector(".dot.dynamic");
    if (dynamicDot) {
      dynamicDot.remove();
    }
  } else if (currentWidth >= 850 && currentWidth < 1280) {
    result = 50;
    minIndex = appCard.length - 2;

    const dynamicDot = document.querySelector(".dot.dynamic");
    if (dynamicDot) {
      dynamicDot.remove();
    }
  } else if (currentWidth >= 601 && currentWidth < 850) {
    result = 100;
    minIndex = appCard.length - 1;

    if (!document.querySelector(".dot.dynamic")) {
      let newDot = document.createElement("span");
      newDot.classList.add("dot", "dynamic"); 
      pagination.append(newDot);
      newDot.addEventListener("click", () => {
        currentNumber = minIndex;
        updateCarousel();
      });
    }
  }

  appCards.style.transform = `translateX(-${currentNumber * result}%)`;

  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentNumber);

    if (dot.classList.contains("dynamic") && index === currentNumber) {
      dot.style.backgroundColor = "#1A418C";
    } else if (dot.classList.contains("dynamic")) {
      dot.style.backgroundColor = ""; 
    }
  });
}
window.addEventListener("resize", () => {
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
if(currentNumber===0){
      currentNumber=minIndex
    }
    else{
      currentNumber--;
    }
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  if(currentNumber===minIndex){
        currentNumber=0
      }
      else{
        currentNumber++
      }
  updateCarousel();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentNumber = index;
    updateCarousel();
  });
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


const numberInput = document.querySelector("#amount");
const rangeSlider = document.querySelector("#range-slider");

rangeSlider.addEventListener("input", () => {
  numberInput.value = rangeSlider.value;
  if(numberInput.value === ""){
    rangeSlider.value = 1;
    numberInput.value = 1;
  }
});

numberInput.addEventListener("input", () => {
  let value = Number(numberInput.value);

  if (isNaN(value)) {
    value = rangeSlider.min; 
  }

  if (value < rangeSlider.min) value = rangeSlider.min;
  if (value > rangeSlider.max) value = rangeSlider.max;

  rangeSlider.value = value;
  numberInput.value = value;
});


const infoMenuHeader = document.querySelectorAll(".info-header");
infoMenuHeader.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("blue")
    const content = btn.nextElementSibling;
    content.classList.toggle("info-content");
    const icon = btn.querySelector("img");
    if (icon.style.transform === "rotate(0deg)") {
      icon.style.transform = "rotate(180deg)";
    } else {
      icon.style.transform = "rotate(0deg)";
    }
  });
});

const accessBtn = document.querySelectorAll(".access-btn");
const accessModal = document.querySelector(".access-modul");
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

 const accessForm = document.querySelector(".access-main-modul form");
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



 const cardInput = document.querySelector(".card-number input");

cardInput.addEventListener("input", (e) => {
  const rawValue = e.target.value.replace(/[^0-9]/g, ""); 
  const cursorPosition = e.target.selectionStart; 
  const trimmedValue = rawValue.slice(0, 16); 

  const maskedValue = trimmedValue.padEnd(16, "X").replace(/(\d{4})(?=\d)/g, "$1 ");

  let spacesBeforeCursor = (e.target.value.slice(0, cursorPosition).match(/\s/g) || []).length;

  let spacesAfterMask = (maskedValue.slice(0, cursorPosition).match(/\s/g) || []).length;

  e.target.value = maskedValue;
  let newCursorPosition = cursorPosition + (spacesAfterMask - spacesBeforeCursor);

  e.target.setSelectionRange(newCursorPosition, newCursorPosition); 
});

const firstNum =  document.querySelector("#first")
const payBtn = document.querySelector(".pay-btn")
const payOverlay = document.querySelector(".pay-overlay h2")
const closePayBtn = document.querySelector(".pay-overlay button")
const payHidden = document.querySelector(".pay-hidden-back")
payBtn.addEventListener("click",()=>{
  if(cardInput.value&&numberInput.value&&firstNum.value){    
    cardInput.value = ""
    numberInput.value = ""
    firstNum.value = ""
    payOverlay.parentElement.style.display="block";
    payOverlay.textContent = "Ödəniş edildi!"
    payHidden.style.display = "block";
  }
  else{
    payOverlay.parentElement.style.display="block";
    payOverlay.textContent = "Telefon nömrənizi, kartınızı, məbləği daxil edin"
    payHidden.style.display = "block";
  }

})
closePayBtn.addEventListener("click",()=>{
  payOverlay.parentElement.style.display="none";
  payHidden.style.display = "none"
})



