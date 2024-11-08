document.querySelectorAll(".slider__cards").forEach((sliderCards) => {
  const leftButton = sliderCards.parentElement.querySelector(".arrow__left");
  const rightButton = sliderCards.parentElement.querySelector(".arrow__right");

  let currentIndex = 0;

  // Функція для оновлення позиції слайдера
  function updateSliderPosition() {
    const cardWidth = sliderCards.children[0].offsetWidth + 20; // Ширина картки + відступ
    sliderCards.style.transform = `translateX(-${
      currentIndex * cardWidth * 2
    }px)`; // Переміщуємо по дві картки
  }

  // Оновлення позиції слайдера при завантаженні сторінки
  updateSliderPosition();

  // Обробник для кнопки "вправо"
  rightButton.addEventListener("click", () => {
    if (currentIndex < sliderCards.children.length / 2 - 1) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  // Обробник для кнопки "вліво"
  leftButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });
});
