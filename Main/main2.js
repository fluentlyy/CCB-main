const sliderProfiles = document.querySelector(".slider__profiles");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let nowIndex = 0; // Початково перші дві картки

// Функція для оновлення позиції слайдера
function updateSliderPosition() {
  const cardWidth = sliderProfiles.children[0].offsetWidth + 20; // Ширина картки + відступ
  sliderProfiles.style.transform = `translateX(-${nowIndex * cardWidth * 2}px)`; // Переміщуємо по дві картки
}

// Оновлення позиції слайдера при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
  updateSliderPosition(); // Позиціонуємо слайдер на перші дві картки
});

// Обробник для кнопки "вправо"
next.addEventListener("click", () => {
  if (nowIndex < sliderProfiles.children.length / 2 - 1) {
    // Максимум дві зміщені картки
    nowIndex++;
    updateSliderPosition();
  }
});

// Обробник для кнопки "вліво"
prev.addEventListener("click", () => {
  if (nowIndex > 0) {
    nowIndex--;
    updateSliderPosition();
  }
});
