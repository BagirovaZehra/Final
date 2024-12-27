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

document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");
  const titleElement = document.querySelector("#title");
  const descriptionElement = document.querySelector("#description");
  const detailsButton = document.querySelector("#details-button");
  const infoContainers = document.querySelectorAll(".info-container");
  let currentIndex = 0;

  const updateActiveThumbnail = () => {
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.classList.toggle("active", index === currentIndex);
    });
  };

  const hideAllInfoContainers = () => {
    infoContainers.forEach((container) => {
      container.style.display = "none";
    });
  };

  const updateCarousel = () => {
    const currentWidth = window.innerWidth;

    if (currentWidth <= 600) {
      thumbnails.forEach((thumbnail, index) => {
        thumbnail.style.display = index === currentIndex ? "block" : "none";
        thumbnail.style.margin = "0 auto";
      });
    } else {
      thumbnails.forEach((thumbnail) => {
        thumbnail.style.display = "block";
        thumbnail.style.margin = "";
      });
    }

    const activeThumbnail = thumbnails[currentIndex];
    titleElement.textContent = activeThumbnail.dataset.title;
    descriptionElement.textContent = activeThumbnail.dataset.description;

    updateActiveThumbnail();
    hideAllInfoContainers(); 
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateCarousel();
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateCarousel();
  };

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  detailsButton.addEventListener("click", () => {
    hideAllInfoContainers(); 

    const activeThumbnail = thumbnails[currentIndex];
    const targetId = activeThumbnail.dataset.target;
    const targetContainer = document.getElementById(targetId);

    if (targetContainer) {
      targetContainer.style.display = "block";
    }
  });

  updateCarousel();

  window.addEventListener("resize", updateCarousel);

  nextButton.addEventListener("click", showNext);
  prevButton.addEventListener("click", showPrev);
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
  let value = Number(numberInput.value)

  if (isNaN(value)) {
    value = rangeSlider.min; 
  }

  if (value < rangeSlider.min) value = rangeSlider.min;
  if (value > rangeSlider.max) value = rangeSlider.max;

  rangeSlider.value = value;
  numberInput.value = value;
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


const creditBtn = document.querySelectorAll(".credit-button button");
const creditBtnPay = document.querySelector(".credit-btn-pay");
const creditOutput = document.querySelector(".credit-output");
const creditMessage = document.querySelector("#credit-message")
const closeButton = document.querySelector(".credit-output button")
const newOverlay = document.querySelector("#overlay")
let creditBtnText =""
creditBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        creditBtn.forEach(b => b.classList.remove("credit-button-active"));
        btn.classList.add("credit-button-active");
        creditBtnText= btn.querySelector("span").textContent  
        
    })
})

creditBtnPay.addEventListener("click",()=>{
    if(creditBtnText){
       creditMessage.textContent=`Kredit götürmək üçün #${creditBtnText} yazıb *216-ya göndərin`;
       creditOutput.style.display="block"
       newOverlay.style.display = "block";
    }
})
closeButton.addEventListener("click", () => {
    creditOutput.style.display = "none";
    newOverlay.style.display = "none";
});

newOverlay.addEventListener("click", () => {
    creditOutput.style.display = "none";
    newOverlay.style.display = "none";
});

const accessBtn = document.querySelectorAll(".access-btn");
const accessModal = document.querySelector(".access-modul")
const modalOverlay = document.querySelector(".modal-overlay")

accessBtn.forEach(btn=>{
  btn.addEventListener("click",()=>{
      accessModal.style.display="block"
      modalOverlay.style.display = "block";
  })
})
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click",()=>{
  accessModal.style.display="none"
  modalOverlay.style.display = "none";
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


 const mobileInput = document.querySelector('#phoneInput');
 const searchBtn = document.querySelector('#searchBtn');
 const resetBtn = document.querySelector('#resetBtn');
 const resultsBody = document.querySelector('#resultsBody');
 
 const data = [
   { number: "016 312 18 48", price: "6 AZN" },
   { number: "016 312 18 49", price: "7 AZN" },
   { number: "016 312 18 50", price: "5 AZN" },
   { number: "016 422 88 44", price: "20 AZN" },
   { number: "016 513 89 06", price: "5 AZN" },
   { number: "016 313 11 13", price: "15 AZN" },
   { number: "016 285 22 45", price: "7 AZN" },
   { number: "016 910 01 09", price: "25 AZN" },
   { number: "016 211 05 08", price: "30 AZN" },
   { number: "016 567 56 67", price: "27 AZN" },
   { number: "016 256 25 56", price: "50 AZN" },
   { number: "016 598 16 37", price: "3 AZN" },
   { number: "016 323 82 33", price: "15 AZN" },
 ];
 
 mobileInput.addEventListener('input', (e) => {
   let value = e.target.value.replace(/[^0-9]/g, ''); 
   if (value.length > 7) value = value.slice(0, 7); 
 
   let formattedValue = '';
   if (value.length > 0) formattedValue = `${value.slice(0, 3)}`;
   if (value.length > 3) formattedValue += ` ${value.slice(3, 5)}`;
   if (value.length > 5) formattedValue += ` ${value.slice(5, 7)}`;
 
   e.target.value = formattedValue;
 });
 
 searchBtn.addEventListener('click', () => {
   const input = mobileInput.value.replace(/[^0-9]/g, ''); 
   if (input.length !== 7) {
     alert('Zəhmət olmasa tam nömrə daxil edin.');
     return;
   }
   let fullNumber = `016 ${input.slice(0, 3)} ${input.slice(3, 5)} ${input.slice(5, 7)}`
 
   const result = data.find(entry => entry.number === fullNumber);
 
   resultsBody.innerHTML = '';
   if (result) {
     resultsBody.innerHTML = `
       <tr>
         <td>1</td>
         <td>${result.number}</td>
         <td>${result.price}</td>
       </tr>
     `;
   } else {
     resultsBody.innerHTML = `<tr><td colspan="3" style="text-align:center;">Nəticə tapılmadı.</td></tr>`;
   }
 });
 
 resetBtn.addEventListener('click', () => {
   mobileInput.value = '';
   resultsBody.innerHTML = '';
 });

 
