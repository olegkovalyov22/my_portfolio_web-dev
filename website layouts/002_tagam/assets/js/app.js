$(function(){
    
    var header = $("#header"),
        introHeight = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Header -> fixed header
    cheakScroll(scrollOffset);

    $(window).on("scroll", function() {
        // console.log(introHeight);
        // console.log(scrollOffset);
        
        scrollOffset = $(this).scrollTop();

        cheakScroll(scrollOffset);
    });

    function cheakScroll(scrollOffset) {
        if(scrollOffset >= introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };

    // Header -> smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#navbar a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    // Header -> Menu nav toggle
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#navbar").toggleClass("active");
    });



    // Header -> Menu nav toggle -> сворачивание после выбора "пути"
    $("#navbar a").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active", false);
        $("#navbar").toggleClass("active", false);
        $("#nav-toggle").toggleClass("active", false);
    });




    // Reviews -> slider

    // reviews version 01
    // $('[slider-for]').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false, // false
    //     fade: false, // true
    //     asNavFor: '[slider-nav]'
    // });
    // $('[slider-nav]').slick({
    //     slidesToShow: 5, // 5
    //     slidesToScroll: 1,
    //     asNavFor: '[slider-for]',
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    // });


    






  });


  // reviews version 02

  document.addEventListener("DOMContentLoaded", function () {
    const reviews = [
      { text: "Absolutely fantastic service! The team was professional, attentive, and delivered exactly what I needed. I’ll definitely be coming back for more!", name: "Ollivia Bennett", profession: "Graphic Design" },
      { text: "Great experience from start to finish. Communication was clear, the process was smooth, and the final result exceeded my expectations. Highly recommended!", name: "Ethan Carter", profession: "Front-end Developer" },
      { text: "I was a bit skeptical at first, but I’m so glad I gave it a try. The work was done with great expertise, and every detail was taken into account. I felt heard and understood throughout the entire process. Highly recommended! The quality of work was outstanding, and the attention to detail was impressive. I’ve already recommended this to my colleagues!", name: "Jane Galadriel", profession: "Ceo Tengkurep" },
      { text: "Excellent work! The project was completed on time, and the results were even better than I had imagined. I’m beyond satisfied with the outcome! The team was friendly, professional, and always available to answer my questions.", name: "Emma Richardson", profession: "Photographer" },
      { text: "I couldn’t be happier with the service! From the very first interaction, I felt valued as a customer. The final product was delivered with precision and care. Definitely a 10/10 experience!", name: "Liam Anderson", profession: "3D-Artist" },
      { text: "Top-notch service! Everything was done quickly and efficiently. I appreciate the hard work and dedication put into the project. Looking forward to working together again!", name: "Noah Sullivan", profession: "Manager" },
      { text: "The best experience I’ve had in a long time! The quality, speed, and professionalism were all on point. I’m beyond satisfied with the outcome!", name: "Lucas Hayes", profession: "Writer" },

      { text: "A truly outstanding experience. The work was done with great expertise, and every detail was taken into account. I felt heard and understood throughout the entire process. Highly recommended!", name: "Benjamin Foster", profession: "Branding/UX design" },
      { text: "Superb quality! The results speak for themselves. Everything was handled professionally, and the customer support was amazing. A pleasure to work with!", name: "Henry Wallace", profession: "Back-end Developer" },
      { text: "I can’t say enough good things about this service! It was fast, efficient, and the final product was exactly what I envisioned. Thank you for your hard work!", name: "James Harrington", profession: "Photographer" },
    ];
  
    const textEl = document.querySelector(".reviews__text");
    const nameEl = document.querySelector(".reviews__name");
    const professionEl = document.querySelector(".reviews__profession");

    // const textEl = document.querySelector(".reviewsinfo .reviewstext");
    // const nameEl = document.querySelector(".reviewsinfo .reviewsname");
    // const professionEl = document.querySelector(".reviewsinfo .reviewsprofession");

    const gallery = document.querySelector(".reviews__gallery");
    const leftArrow = document.querySelector(".reviews__arrow.left");
    const rightArrow = document.querySelector(".reviews__arrow.right");
  
    let currentIndex = 2;
    let visibleCount = 5; // Число видимых элементов
    let totalItems = reviews.length;
  
    // не работает // теперь работает
    function updateReview(index) {
      textEl.textContent = reviews[index].text;
      nameEl.textContent = reviews[index].name;
      professionEl.textContent = reviews[index].profession;
      
      console.log("Текущий отзыв:", reviews[index]); // Проверка

      document.querySelector(".reviews__img.active")?.classList.remove("active");
      gallery.children[2].classList.add("active"); // Центрируем активный элемент
    }

    // тоже работает, но дёргается если количество строк текста разное
    // function updateReview(index) {
    //     textEl.textContent = ""; // Очистка перед обновлением
    //     nameEl.textContent = ""; 
      
    //     setTimeout(() => { // Небольшая задержка, чтобы обновление сработало
    //       textEl.textContent = reviews[index].text;
    //       nameEl.textContent = reviews[index].name;
    //       professionEl.textContent = reviews[index].profession;
    //     }, 10); 
      
    //     document.querySelector(".reviews__img.active")?.classList.remove("active");
    //     gallery.children[2].classList.add("active");

    //     console.log("textEl:", textEl); // Проверка
    //     console.log("nameEl:", nameEl); // Проверка
    //     console.log("professionEl:", professionEl); // Проверка
    // }


  
    function updateGallery() {
      gallery.innerHTML = ""; // Очистка перед обновлением
  
      // Формируем новые элементы с учетом кругового сдвига
      for (let i = 0; i < visibleCount; i++) {
        let realIndex = (currentIndex + i - 2 + totalItems) % totalItems; // Центрируем
        let img = document.createElement("img");
        img.classList.add("reviews__img");
        img.src = `assets/images/reviews/tester${realIndex + 1}.png`;
        img.alt = reviews[realIndex].name;
        img.dataset.index = realIndex;
  
        if (i === 2) img.classList.add("active"); // Центральный элемент
  
        img.addEventListener("click", () => {
          currentIndex = realIndex;
          updateReview(currentIndex);
          updateGallery();
        });
  
        gallery.appendChild(img);
      }
    }
  
    leftArrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateReview(currentIndex);
      updateGallery();
    });
  
    rightArrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateReview(currentIndex);
      updateGallery();
    });
  
    updateReview(currentIndex);
    updateGallery();
});
