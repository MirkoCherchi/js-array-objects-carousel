'use strict';


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg',];
const items = document.querySelector('.items');
let currentItem = 0;

const carouselInfo = [
  {
    urlImg: 'img/01.jpg',
    titolo: 'Paesaggio 1',
    descrizione: 'In questa foto possiamo osservare un lago e delle montagne innevate di sfondo',
  },
  {
    urlImg: 'img/02.jpg',
    titolo: 'Paesaggio 2',
    descrizione: 'Questa foto mette in risalto la bellezza di queste case a ridosso del mare',
  },
  {
    urlImg: 'img/03.jpg',
    titolo: 'Paesaggio 3',
    descrizione: 'Semplicemente London, in questa foto siamo separati dal big ben dal fiume tamigi',
  },
  {
    urlImg: 'img/04.jpg',
    titolo: 'Paesaggio 4',
    descrizione: 'Una città illuminata',
  },
  {
    urlImg: 'img/05.jpg',
    titolo: 'Paesaggio 5',
    descrizione: 'Il sogno di tutti gli amanti del mare',
  },
];



for (let i = 0; i < carouselInfo.length; i++) {

    // creazione item
    const item = document.createElement('div');
    item.classList.add('item');

    if (i === currentItem){
        item.classList.add('active');
    }

    // creazione img
    const img = document.createElement('img');
    img.src = carouselInfo[i].urlImg;
    img.alt = `img ${i}`;

    item.append(img);
    items.append(item);
    
}

const domItem = document.querySelectorAll('.item');
const thumbnail = document.querySelectorAll('.opacity');
if (currentItem === 0) {
    thumbnail[currentItem].classList.remove('opacity');
}

// esecuzione in avanti

next.addEventListener('click', function(){
    if (currentItem < domItem.length - 1){
        
        domItem[currentItem].classList.remove('active');
        currentItem++;
        domItem[currentItem].classList.add('active');
        thumbnail[currentItem].classList.remove('opacity');
        thumbnail[currentItem - 1].classList.add('opacity');
        document.querySelector('.titolo').innerText = carouselInfo[currentItem].titolo;
        document.querySelector('.descrizione').innerText = carouselInfo[currentItem].descrizione;
        
    
    } else if (currentItem === 4){
        domItem[currentItem].classList.remove('active');
        thumbnail[currentItem].classList.add('opacity')
        currentItem = 0;
        domItem[currentItem].classList.add('active');
        thumbnail[currentItem].classList.remove('opacity');
        
    }

})

// esecuzione indietro

prev.addEventListener('click', function(){
    stopAutoplay();
    if (currentItem > 0 ){
        domItem[currentItem].classList.remove('active');
        currentItem--;
        domItem[currentItem].classList.add('active');
        thumbnail[currentItem].classList.remove('opacity');
        thumbnail[currentItem + 1].classList.add('opacity');
        document.querySelector('.titolo').innerText = carouselInfo[currentItem].titolo;
        document.querySelector('.descrizione').innerText = carouselInfo[currentItem].descrizione;
    
    }  else if (currentItem === 0){
        domItem[currentItem].classList.remove('active');
        thumbnail[currentItem].classList.add('opacity')
        currentItem = 4;
        domItem[currentItem].classList.add('active');
        thumbnail[currentItem].classList.remove('opacity');
    }
    
})


let autoplayStart = 3000;
let autoplay;

function startAutoplay() {
    autoplay = setInterval(() => {
        next.click();
    }, autoplayStart);
}

function stopAutoplay() {
    clearInterval(autoplay);
}


const bottoneStart = document.querySelector('.btn-start');
const bottoneStop = document.querySelector('.btn-stop');

bottoneStart.addEventListener('click', startAutoplay);
bottoneStop.addEventListener('click', stopAutoplay);









    
    
        







