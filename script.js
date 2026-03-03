const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

let autoSlide = setInterval(nextSlide, 5000);

function nextSlide(){
    current = (current + 1) % slides.length;
    showSlide(current);
}

function resetAutoSlide(){
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);//5000ミリ秒は5秒
}

next.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

function prevSlide(){
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}

prev.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});


