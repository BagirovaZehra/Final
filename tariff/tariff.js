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
 const accessName = document.querySelector("#access-name")
 const accessSurname = document.querySelector("#access-surname")
 const accessEmail = document.querySelector("#access-email")
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


const tariffBtn = document.querySelector(".slide-tariff");
const tariffPackets = document.querySelector(".tariff-packets")
const internetBtn = document.querySelector(".slide-internet");
const internetPackets = document.querySelector(".internet-packets");
const clientQuestion = document.querySelector(".client-question");
const graph = document.querySelector(".graph")
tariffBtn.addEventListener("click",()=>{
  internetPackets.style.display="none";
  clientQuestion.style.display="none"
   tariffPackets.style.display="block";
   graph.style.display="block"
})

internetBtn.addEventListener("click",()=>{
  tariffPackets.style.display="none"  
   internetPackets.style.display="block";
   clientQuestion.style.display="block";
   graph.style.display="none"
})

const tariffSelect = document.querySelectorAll(".tariff-select");
const tariffOption = document.querySelectorAll(".tariff-option");
const tariffSelectText = document.querySelectorAll(".tariff-select p");
const tariffUpdateCost = document.querySelectorAll(".tariff-option li");
const tariffCard = Array.from(document.querySelectorAll(".tariff-card"));
const internetCard = Array.from(document.querySelectorAll(".internet-packets .tariff-card"))
const internetOptions = document.querySelectorAll(".internet-options button");
const useTime = document.querySelectorAll(".use-time")


internetOptions.forEach(btn=>{
  btn.addEventListener("click",(e)=>{
    internetOptions.forEach(option => option.classList.remove("active"));
    e.target.classList.add("active")
    if(e.target.textContent=="Günlük"){
      internetCard.forEach(card=>{
        card.style.display="none"
        let cardTime = card.querySelector(".use-time p");
        if(cardTime.textContent.includes("1")){
          card.style.display="block"
        }
      })
    }
    if(e.target.textContent=="Aylıq"){
      internetCard.forEach(card=>{
        card.style.display="none"
        let cardTime = card.querySelector(".use-time p");
        if(cardTime.textContent.includes("30")){
          card.style.display="block"
        }
      })
    }
    if(e.target.textContent=="Limitsiz"){
      internetCard.forEach(card=>{
        card.style.display="none"
        let cardTime = card.querySelector(".tariff-title");
        if(cardTime.textContent.includes("Limitsiz")){
          card.style.display="block"
        }
      })
    }
  })
})



tariffSelect.forEach(option => {
  const icon = option.querySelector("img");
  const optionList = option.nextElementSibling;

  option.addEventListener("click", () => {
      const isOpen = optionList.style.display === "block";
      tariffOption.forEach(item => item.style.display = "none");
      document.querySelectorAll(".tariff-select img").forEach(img => {
          img.style.transform = "rotate(0deg)"; 
      });

      if (!isOpen) {
          optionList.style.display = "block";
          icon.style.transform = "rotate(180deg)"; 
      } else {
          icon.style.transform = "rotate(0deg)";
      }
  });
});

tariffUpdateCost.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const parentOption = e.target.parentElement; 
        const selectedText = e.target.textContent;

        tariffSelectText.forEach(text => {
            text.textContent = selectedText;
        });

        parentOption.style.display = "none"; 
        tariffSelect.forEach(select => select.querySelector("img").style.transform = "rotate(0deg)"); 

        if (selectedText === "Artan") {
            tariffCard.sort((a, b) => {
                const priceA = Number(a.querySelector(".tariff-cost span").innerText);
                const priceB = Number(b.querySelector(".tariff-cost span").innerText);
                return priceA - priceB;
            });
            tariffCard.forEach((card, index) => {
                card.style.order = index;
            });

            internetCard.sort((a, b) => {
                const priceA = Number(a.querySelector(".tariff-cost span").innerText);
                const priceB = Number(b.querySelector(".tariff-cost span").innerText);
                return priceA - priceB;
            });
            internetCard.forEach((card, index) => {
                card.style.order = index;
            });
        } else if (selectedText === "Azalan") {
            tariffCard.sort((a, b) => {
                const priceA = Number(a.querySelector(".tariff-cost span").innerText);
                const priceB = Number(b.querySelector(".tariff-cost span").innerText);
                return priceB - priceA;
            });
            tariffCard.forEach((card, index) => {
                card.style.order = index;
            });

            internetCard.sort((a, b) => {
                const priceA = Number(a.querySelector(".tariff-cost span").innerText);
                const priceB = Number(b.querySelector(".tariff-cost span").innerText);
                return priceB - priceA;
            });
            internetCard.forEach((card, index) => {
                card.style.order = index;
            });
        }
    });
});

let currentQuestion = 0;
let userAnswers = [];

const questions = [
    {
        title: "İnternet trafikinizi ən çox nəyə sərf edirsiniz?",
        answers: ["Sosial şəbəkələr", "YouTube-da videolara baxmaq"],
    },
    {
        title: "Gecələr interneti necə istifadə edirsiniz?",
        answers: ["Filmlərə baxıram", "Sosial şəbəkələrdə oluram"],
    },
    {
        title: "Sizcə, hansı internet paketi daha sərfəlidir?",
        answers: ["Aylıq paketlər", "Limitsiz paketlər"],
    },
];

const tariffs = [
    { name: "1GB", price: 5, duration: "30 gün", category: "Aylıq internet" },
    { name: "500MB", price: 1, duration: "1 gün", category: "Gündəlik paketlər" },
    { name: "200MB", price: 2, duration: "1 gün", category: "Limitsiz Yazışma" },
    { name: "10GB", price: 20, duration: "30 gün", category: "Aylıq internet" },
    { name: "1.5GB", price: 6, duration: "30 gün", category: "Aylıq internet" },
    { name: "50GB", price: 35, duration: "30 gün", category: "Aylıq internet" },
    { name: "100GB", price: 50, duration: "30 gün", category: "Aylıq internet" },
    { name: "Limitsiz", price: 2.5, duration: "5 saat", category: "Limitsiz internet" },
];

function updateQuestion() {
    const questionTitle = document.querySelector("#question-title");
    const answersContainer = document.querySelector(".answers");
    const progressIndicator = document.querySelector("#progress-indicator");

    const question = questions[currentQuestion];
    questionTitle.textContent = question.title;
    answersContainer.innerHTML = "";

    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.classList.add("answer-button");
        button.textContent = answer;
        button.addEventListener("click", () => {
            userAnswers.push(answer);
            nextQuestion();
        });
        answersContainer.appendChild(button);
    });

    progressIndicator.textContent = `${currentQuestion + 1} / ${questions.length}`;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        updateQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector(".questionnaire").classList.add("hidden");
    const resultContainer = document.querySelector(".result");
    resultContainer.classList.remove("hidden");

    const resultDetails = document.querySelector("#result-details");

    let matchedTariff;

    if (userAnswers.includes("Sosial şəbəkələr") && userAnswers.includes("Filmlərə baxıram") && userAnswers.includes("Aylıq paketlər")) {
        matchedTariff = tariffs[1]; 
    } else if (userAnswers.includes("Sosial şəbəkələr") && userAnswers.includes("Filmlərə baxıram") && userAnswers.includes("Limitsiz paketlər")) {
        matchedTariff = tariffs[7];
    } else if (userAnswers.includes("Sosial şəbəkələr") && userAnswers.includes("Sosial şəbəkələrdə oluram") && userAnswers.includes("Aylıq paketlər")) {
        matchedTariff = tariffs[2]; 
    } else if (userAnswers.includes("Sosial şəbəkələr") && userAnswers.includes("Sosial şəbəkələrdə oluram") && userAnswers.includes("Limitsiz paketlər")) {
        matchedTariff = tariffs[3]; 
    } else if (userAnswers.includes("YouTube-da videolara baxmaq") && userAnswers.includes("Filmlərə baxıram") && userAnswers.includes("Aylıq paketlər")) {
        matchedTariff = tariffs[0]; 
    } else if (userAnswers.includes("YouTube-da videolara baxmaq") && userAnswers.includes("Filmlərə baxıram") && userAnswers.includes("Limitsiz paketlər")) {
        matchedTariff = tariffs[4]; 
    } else if (userAnswers.includes("YouTube-da videolara baxmaq") && userAnswers.includes("Sosial şəbəkələrdə oluram") && userAnswers.includes("Aylıq paketlər")) {
        matchedTariff = tariffs[5]; 
    } else if (userAnswers.includes("YouTube-da videolara baxmaq") && userAnswers.includes("Sosial şəbəkələrdə oluram") && userAnswers.includes("Limitsiz paketlər")) {
        matchedTariff = tariffs[6]; 
    } else {
        resultDetails.textContent = "Sizin tələblərə uyğun internet paketi tapılmadı.";
        return;
    }

    resultDetails.textContent = `${matchedTariff.name} - Qiymət: ${matchedTariff.price} AZN, Müddət: ${matchedTariff.duration}`;
}

document.querySelector("#start-btn").addEventListener("click", () => {
    document.querySelector(".start-screen").classList.add("hidden");
    document.querySelector(".questionnaire").classList.remove("hidden");
    updateQuestion();
});

document.getElementById("restart-btn").addEventListener("click", () => {
    currentQuestion = 0;
    userAnswers = [];
    document.querySelector(".result").classList.add("hidden");
    document.querySelector(".questionnaire").classList.remove("hidden");
    updateQuestion();
});

updateQuestion();


const newtariffs = [
    { title: "UltraPlus", internetGB: 3, price: 10 },
    { title: "ZetaStart", internetGB: 5, price: 8 },
    { title: "AktivGənc", internetGB: 10, price: 15 },
    { title: "KomboMax", internetGB: 15, price: 22 },
    { title: "Tələbə Paketi", internetGB: 21, price: 8 },
    { title: "AiləPaketi", internetGB: 25, price: 25 },
    { title: "ZetaPro", internetGB: 50, price: 35 },
    { title: "TurboNet", internetGB: 100, price: 27 },
];

let weeklyUsageData = [];
let totalMonthlyUsage = 0;

const ctx = document.querySelector('.usageChart').getContext('2d');
const usageChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [], 
        datasets: [{
            label: 'İstifadə (GB)',
            data: [], 
            backgroundColor: '#f77f00',
            borderColor: '#f77f00',
            borderWidth: 1,
            barPercentage: 0.6, 
            categoryPercentage: 0.8, 
            maxBarThickness: 50, 
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Həftələr'
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'İstifadə (GB)'
                }
            }
        }
    }
});

window.addEventListener('resize', () => {
    usageChart.resize();
});

const addWeeklyBtn = document.querySelector('.addWeeklyUsageButton')
addWeeklyBtn.addEventListener('click', function () {
    const weeklyUsageInput = document.querySelector('.weeklyUsage');
    const usageValue = parseFloat(weeklyUsageInput.value);

    if (isNaN(usageValue) || usageValue <= 0) {
        alert('Xahiş edirik, düzgün bir rəqəm daxil edin.');
        return;
    }

    if (weeklyUsageData.length >= 4) {
        alert('Artıq 4 həftəlik istifadə əlavə etdiniz.');
        return;
    }
    weeklyUsageData.push(usageValue);
    totalMonthlyUsage += usageValue;

    usageChart.data.labels.push(`Həftə ${weeklyUsageData.length}`);
    usageChart.data.datasets[0].data.push(usageValue);
    usageChart.update();

    document.querySelector('.totalUsage').innerText = totalMonthlyUsage.toFixed(2);

    const recommended = getRecommendedTariff(totalMonthlyUsage);
    document.querySelector('.recommendedTariff').innerText = recommended;

    weeklyUsageInput.value = '';
    weeklyUsageInput.focus();
});

function getRecommendedTariff(monthlyUsageGB) {
    const suitableTariff = newtariffs.find(tariff => tariff.internetGB >= monthlyUsageGB);
    return suitableTariff ? `${suitableTariff.title} (${suitableTariff.internetGB}GB - ${suitableTariff.price} AZN)` : 'Uyğun tarif tapılmadı';
}

function checkInput(value) {
    value = value.replace(/,/g, ".");
    value = value.replace(/[^0-9.]/g, '');

    if (value.includes(".")) {
        let count = (value.match(/\./g) || []).length;
        if (count > 1) {
            value = value.slice(0, value.lastIndexOf('.'));
        }
        value = value.split(".");
        if (value[1].length > 5) {
            value[1] = value[1].slice(0, 5);
        }
        value = value.join(".");
    }
    if (/^0+$/.test(value)) {
        return value = "0"; 
    }
    if (value == ".") {
        return value = "0.";
    }
    if (value !== "0" && !value.startsWith("0.")) {
        value = value.replace(/^0+/, "");
    }
    return value;
}

const weeklyUsageInput = document.querySelector('.weeklyUsage');
weeklyUsageInput.addEventListener('input', function () {
    this.value = checkInput(this.value); 
});

