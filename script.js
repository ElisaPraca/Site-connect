const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector ('.toggle_btn i')
const dropDownMenu = document.querySelector ('.dropdown_menu')

toggleBtn.onclick = function (){
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 50)
})


var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
cont++
if(cont > 3 ){
    cont = 1
}

document.getElementById('radio'+cont).checked = true
}




const track = document.querySelector('.carousel-track1');
const images = document.querySelectorAll('.carousel-track1 img');
const totalImages = images.length;
let currentIndex = 0;
const imagesPerSlide = 10; // Número de imagens exibidas por vez

const prevButton = document.getElementById('prev-btn1');
const nextButton = document.getElementById('next-btn1');

// Clonar as imagens para o efeito circular
function cloneImages() {
  const clonedImages = [...images].map(image => image.cloneNode(true));
  clonedImages.forEach(img => track.appendChild(img)); // Adiciona as imagens clonadas no final
}

// Função para mover para o próximo conjunto de imagens
function moveToNext() {
  if (currentIndex + imagesPerSlide < totalImages * 2) {
    currentIndex++;
    track.style.transition = 'transform 0.3s ease-out'; // Transição rápida
    track.style.transform = `translateX(-${currentIndex * (images[0].width + 10)}px)`;
  } else {
    // Quando chegar no final, volta rapidamente para o início
    track.style.transition = 'none';
    currentIndex = 0;
    track.style.transform = `translateX(-${currentIndex * (images[0].width + 10)}px)`;
    
    // Aguarda um pequeno tempo e reativa a transição para continuar o movimento
    setTimeout(() => {
      track.style.transition = 'transform 0.3s ease-out';
      track.style.transform = `translateX(-${currentIndex * (images[0].width + 10)}px)`;
    }, 50);
  }
}

// Função para mover para o conjunto anterior de imagens
function moveToPrev() {
  if (currentIndex === 0) {
    currentIndex = totalImages - imagesPerSlide;
  } else {
    currentIndex--;
  }
  track.style.transform = `translateX(-${currentIndex * (images[0].width + 10)}px)`;
}

// Mover automaticamente para o próximo conjunto a cada 3 segundos
let carouselInterval = setInterval(moveToNext, 3000);

// Event listeners para os botões de navegação
nextButton.addEventListener('click', () => {
  moveToNext();
  resetInterval();
});

prevButton.addEventListener('click', () => {
  moveToPrev();
  resetInterval();
});

// Função para reiniciar o intervalo de rotação automática
function resetInterval() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(moveToNext, 3000);
}

// Chama a função de clonagem de imagens assim que o script for executado
cloneImages();



  window.onload = function() {
    var balloon = document.getElementById('balloon');

    // Aguarda 10 segundos antes de exibir o balão
    setTimeout(function() {
      balloon.style.display = 'block';

      // Faz o balão desaparecer após 4 segundos
      setTimeout(function() {
        balloon.style.display = 'none';
      }, 4000);

    }, 10000); // 10 segundos
  };

  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true, // Mantém o slide centralizado
    slidesPerView: "auto", // Ajusta dinamicamente
    loop: true, // Ativa o loop
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 4,
      slideShadows: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    breakpoints: {
      320: { slidesPerView: 1 },  // No mobile, mostra 1 slide
      560: { slidesPerView: 1.5 }, // Ajusta no mobile maior
      768: { slidesPerView: 2 },  // Dois slides visíveis no tablet
      1024: { slidesPerView: 3 }  // No desktop, 3 slides aparecem
    }
});




