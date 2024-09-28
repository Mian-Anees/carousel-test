class Carousel {
  constructor(carouselElement) {
    this.carousel = carouselElement;
    this.wrapper = this.carousel.querySelector(".carousel__wrapper");
    this.slides = this.wrapper.querySelectorAll(".carousel__card");
    this.prevBtn = this.carousel.querySelector(".carousel__control--prev");
    this.nextBtn = this.carousel.querySelector(".carousel__control--next");
    this.currentIndex = 0;
    this.totalSlides = this.slides.length;

    this.init();
  }

  init() {
    this.prevBtn.addEventListener("click", () => this.goToPrevSlide());
    this.nextBtn.addEventListener("click", () => this.goToNextSlide());
    this.updateSlidePosition();
  }

  goToPrevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.totalSlides - 1;
    }
    this.updateSlidePosition();
  }

  goToNextSlide() {
    if (this.currentIndex < this.totalSlides - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const slideWidth = this.slides[0].getBoundingClientRect().width + 20;
    this.wrapper.style.transform = `translateX(-${
      this.currentIndex * slideWidth
    }px)`;
  }

  updateTotalSlides() {
    this.slides = this.wrapper.querySelectorAll(".carousel__card");
    this.totalSlides = this.slides.length;
  }
}

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Esther",
    rating: "⭐⭐⭐⭐⭐",
    age: "Rookte 34 jaar",
    content:
      "Hier komt nog een korte introductie van de persoon in het interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John",
    rating: "⭐⭐⭐⭐",
    age: "Rookte 20 jaar",
    content:
      "Hier komt nog een korte introductie van de persoon in het interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Mary",
    rating: "⭐⭐⭐⭐⭐",
    age: "Rookte 15 jaar",
    content:
      "Hier komt nog een korte introductie van de persoon in het interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Anna",
    rating: "⭐⭐⭐⭐⭐",
    age: "Rookte 15 jaar",
    content:
      "Hier komt nog een korte introductie van de persoon in het interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Michael",
    rating: "⭐⭐⭐⭐⭐",
    age: "Rookte 15 jaar",
    content:
      "Hier komt nog een korte introductie van de persoon in het interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Sophie",
    rating: "⭐⭐⭐⭐⭐",
    age: "Rookte 15 jaar",
    content:
      "Hier komt nog een korte introductie van de persoon in het interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld.",
  },
];

const carouselWrapper = document.querySelector(".carousel__wrapper");

function renderCarouselCards(testimonials) {
  testimonials.forEach((testimonial) => {
    const card = `
      <div class="carousel__card">
        <div class="testimonial">
          <img src="${testimonial.img}" alt="${testimonial.name}" class="testimonial__img">
          <div class="testimonial__content-wrapper">
            <div class="testimonial__header">
              <h3 class="testimonial__name">${testimonial.name}</h3>
              <p class="testimonial__rating">${testimonial.rating}</p>
            </div>
            <p class="testimonial__age">${testimonial.age}</p>
            <p class="testimonial__content">${testimonial.content}</p>
          </div>
        </div>
      </div>
    `;
    carouselWrapper.insertAdjacentHTML("beforeend", card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCarouselCards(testimonials);

  const carouselElement = document.querySelector(".carousel");
  const carousel = new Carousel(carouselElement);

  carousel.updateTotalSlides(); // Ensure the carousel recognizes all newly added slides
});
