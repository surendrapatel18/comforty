
document.addEventListener("DOMContentLoaded", () => {
  const toggleMenu = document.getElementById("toggle-menu");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-link");

  // Toggle navbar
  toggleMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling
  navItems.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        navLinks.classList.remove("active"); // Close the menu after clicking
      }
    });
  });




  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const paginationContainer = document.querySelector('.pagination');
  let currentIndex = 0;

  // Create Pagination Dots
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(index));
    paginationContainer.appendChild(dot);
  });

  const updateActiveDot = () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  };

  const moveToSlide = (index) => {
    currentIndex = index;

    if (index == 0) {
      slider.classList.add('remove')
    } else {
      slider.classList.remove('remove')

    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateActiveDot();
  };

  // Navigation Arrows
  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
  });

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(currentIndex);
  });

  // Auto-Slide
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
  }, 2000);


  document.addEventListener("DOMContentLoaded", () => {
    const sliderLogo = document.querySelector(".slider-logo");
    const slides = document.querySelectorAll(".slide-logo");
    const slideWidth = slides[0].offsetWidth;
    let currentPosition = 0;


    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      sliderLogo.appendChild(clone);
    });
    // Automatic scrolling function

    const autoScroll = () => {
      currentPosition += 1;
      if (currentPosition >= slideWidth * slides.length) {

        currentPosition = 0;
      }
      sliderLogo.style.transform = `translateX(-${currentPosition}px)`;
    };


    setInterval(autoScroll, 10);
  });




  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Default for larger screens
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      546: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });



  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    on: {
      init: function () {

        this.update();
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 3.5,
      },
      546: {
        slidesPerView: 2.5,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });



  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      769: {
        slidesPerView: 2,
      },

    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });



  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      546: {
        slidesPerView: 2,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },

    },

  });


  var swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      546: {
        slidesPerView: 2,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },

    },

  });






  // Get the current year 
  document.getElementById('current-year').textContent = new Date().getFullYear();


})