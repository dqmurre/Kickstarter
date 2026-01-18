'use strict';

const slider = {
  currentSlide: 0,
  totalSlides: 3,

  init() {
    const prevButton = document.querySelector('.features__prev');
    const nextButton = document.querySelector('.features__next');

    if (prevButton) {
      const handlePress = () => {
        prevButton.classList.add('features__prev--pressed');
      };

      const handleRelease = () => {
        prevButton.classList.remove('features__prev--pressed');
      };

      prevButton.addEventListener('mousedown', handlePress);
      prevButton.addEventListener('touchstart', handlePress);

      prevButton.addEventListener('mouseup', handleRelease);
      prevButton.addEventListener('touchend', handleRelease);
      prevButton.addEventListener('mouseleave', handleRelease);

      prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.prev();
      });
    }

    if (nextButton) {
      const handlePress = () => {
        nextButton.classList.add('features__next--pressed');
      };

      const handleRelease = () => {
        nextButton.classList.remove('features__next--pressed');
      };

      nextButton.addEventListener('mousedown', handlePress);
      nextButton.addEventListener('touchstart', handlePress);

      nextButton.addEventListener('mouseup', handleRelease);
      nextButton.addEventListener('touchend', handleRelease);
      nextButton.addEventListener('mouseleave', handleRelease);

      nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.next();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prev();
      }

      if (e.key === 'ArrowRight') {
        this.next();
      }
    });

    this.updateAll();
  },

  next() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide += 1;
      this.updateAll();
    }
  },

  prev() {
    if (this.currentSlide > 0) {
      this.currentSlide -= 1;
      this.updateAll();
    }
  },

  updateAll() {
    this.updateSlide();
    this.updatePagination();
    this.updateButtons();
  },

  updateSlide() {
    const slides = document.querySelectorAll('.features__slide');

    slides.forEach((slide, index) => {
      if (index === this.currentSlide) {
        slide.classList.add('features__slide--active');
      } else {
        slide.classList.remove('features__slide--active');
      }
    });
  },

  updatePagination() {
    const currentElement = document.querySelector('.features__current');
    const currentNumber = String(this.currentSlide + 1).padStart(2, '0');

    if (currentElement) {
      currentElement.textContent = currentNumber;
    }
  },

  updateButtons() {
    const prevButton = document.querySelector('.features__prev');
    const nextButton = document.querySelector('.features__next');

    if (prevButton) {
      if (this.currentSlide === 0) {
        prevButton.classList.add('features__prev--disabled');
      } else {
        prevButton.classList.remove('features__prev--disabled');
      }
    }

    if (nextButton) {
      if (this.currentSlide === this.totalSlides - 1) {
        nextButton.classList.add('features__next--disabled');
      } else {
        nextButton.classList.remove('features__next--disabled');
      }
    }
  },
};

slider.init();
