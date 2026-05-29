   const menuBtn = document.getElementById("menuBtn");

    menuBtn.addEventListener("click", () => {

      menuBtn.classList.toggle("active");

    });
  

    const menuBtn = document.getElementById("menuBtn");

    menuBtn.addEventListener("click", () => {

      menuBtn.classList.toggle("active");

    });

    

    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");

    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlider() {

      slider.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    }

    /* NEXT BUTTON */

    nextBtn.addEventListener("click", () => {

      currentSlide++;

      if (currentSlide >= totalSlides) {
        currentSlide = 0;
      }

      updateSlider();

    });

    /* PREV BUTTON */

    prevBtn.addEventListener("click", () => {

      currentSlide--;

      if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
      }

      updateSlider();

    });


    /* AUTO SLIDE */

    setInterval(() => {

      currentSlide++;

      if (currentSlide >= totalSlides) {
        currentSlide = 0;
      }

      updateSlider();

    }, 5000);
