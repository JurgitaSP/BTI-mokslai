const slides = document.querySelectorAll(".card");
const totalSlides = slides.length; //slaido ilgis-korteles
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let slideIndex = 0;
let slideInterval; //laiko intervalui

showSlides(slideIndex); //pirminis rodymas
startSlider();//iskvieciam auto slideri

//f-ja rodyti slidus, perduosim slaido indeksa ir perrinkinesim musu masyva
// ir uzdesim arba nuimsim active klase vienam is slaidu
//rodo ta skaidre, kurios indeksas paduodamas
function showSlides(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index)//jei slaido indeksas lygus, uzd active
    });
}
// showSlides(0); rodo slaidus pagal pasirinkta indeksa

//f-ja atlieka slaido indekso patikriima/pakeitima ar jis pasieke krastus masyvo, 
//pakoreguoja indeksa ++
function autoSlide() {
    slideIndex++; //didinam vienetu paleidus automatine karusele
    //atliekam tikrinima, kad jei slaido indeksas pasiekia masyvo ilgi, slaidas  
    // grista i masyvo[0]
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    showSlides(slideIndex); //rodome slaida paduodami indeksa
}

//slaideri "suks" automatiskai pasirinkto laiko intervalu

function startSlider() { //automatinis sukimasis
    slideInterval = setInterval(autoSlide, 3000); //iskviecia auto slida ir suka kas 3 sek
}

//fu-ja slaiderios sustabdymui
function stopSlider(){
    clearInterval(slideInterval);
}


prev.addEventListener("click", () => {
    stopSlider();
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    showSlides(slideIndex);
    startSlider();

})
next.addEventListener("click", () => {
    stopSlider();
    slideIndex++;
    if (slideIndex >= totalSlides) { //kodel
        slideIndex = 0;
    }
    showSlides(slideIndex);
    startSlider();

})