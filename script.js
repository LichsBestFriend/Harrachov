// === CAROUSEL FOTOGALERIE ===

// SEZNAM FOTEK - všech 38 fotek z tvé složky
const photos = [
    'images/303140520.jpg',
    'images/303140529.jpg',
    'images/303140532.jpg',
    'images/303140536.jpg',
    'images/303140538.jpg',
    'images/303140542.jpg',
    'images/303140543.jpg',
    'images/303140547.jpg',
    'images/303140549.jpg',
    'images/303140550.jpg',
    'images/303140551.jpg',
    'images/303140556.jpg',
    'images/303140558.jpg',
    'images/303140566.jpg',
    'images/303140573.jpg',
    'images/303140575.jpg',
    'images/303140580.jpg',
    'images/303140584.jpg',
    'images/361970358.jpg',
    'images/361970486.jpg',
    'images/361970579.jpg',
    'images/361970598.jpg',
    'images/361972333.jpg',
    'images/362929944.jpg',
    'images/362929999.jpg',
    'images/362930000.jpg',
    'images/362930001.jpg',
    'images/362930003.jpg',
    'images/362930004.jpg',
    'images/362930840.jpg',
    'images/362930841.jpg',
    'images/362930843.jpg',
    'images/362931034.jpg',
    'images/362931035.jpg',
    'images/362931036.jpg',
    'images/363478834.jpg',
    'images/363481547.jpg',
    'images/hero.jpg'
];

let currentSlide = 0;

// Inicializace carouselu při načtení stránky
function initCarousel() {
    document.getElementById('carousel-image').src = photos[0];
}

function changeSlide(direction) {
    currentSlide += direction;
    
    // Zabalení (loop) - když dojdeš na konec, vrať se na začátek
    if (currentSlide >= photos.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = photos.length - 1;
    }
    
    // Změň obrázek
    document.getElementById('carousel-image').src = photos[currentSlide];
}

// Spusť inicializaci když se stránka načte
window.addEventListener('load', initCarousel);

// === KONTROLA DOSTUPNOSTI ===
function checkAvailability() {
    const apartment = document.getElementById('apartment').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const resultDiv = document.getElementById('availability-result');
    
    // Validace
    if (!apartment || !checkin || !checkout) {
        resultDiv.innerHTML = '<p style="color: red;">⚠️ Vyplňte všechna pole</p>';
        return;
    }
    
    // PLACEHOLDER odpověď (později nahradíš skutečnou logikou)
    resultDiv.innerHTML = '<p style="color: green;">✅ Apartmán je k dispozici v těchto datech!</p>';
    
    // Tady později přidáš kontrolu proti Google Sheets
}