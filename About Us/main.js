let img = document.querySelector(".script__img");
let founderTitle = document.querySelector(".our__founder-title");
let contentTitle = document.querySelector(".content__subtitle");
let contentParagraph = document.querySelector(".content__paragraph");
let contentInfo = document.querySelector(".content__info");
function handleMediaChange() {
  if (window.innerWidth <= 730) {
    img.src = "../Team/img/founder.png";
    founderTitle.textContent = "our Founder";
    contentTitle.textContent = "Natalia Batkivna";
    contentParagraph.textContent =
      "(CCB) is a non-profit organization that uses culture as a tool against violence. Through cultural and educational events, CCB unites Spain and countries affected by armed conflict.(CCB) is a non-profit organization that uses culture as a tool against violence. Through cultural and educational events, CCB unites Spain and countries affected by armed conflict.";
  } else if (window.innerWidth <= 818) {
    document.querySelector(".volunteers__top").innerHTML = `<h1>headline</h1>
<div class="title__imgs">
  <img src="./image/holub.flamenko (1) 1.png" alt="" class="img__flamenko" />
  <img src="./image/Mask group.png" alt="" class="img__guitar" />
</div>
<p class="top__text">
  Through cultural and educational events, CCB unites Spain and countries
  affected by armed conflict. The NGO is a space for psychological
  rehabilitation and development. All of its projects are based on the work and
  support of dedicated volunteers. Led by a strong belief in humanity, we
  encourage everyone to spread kindness and inspire others!
</p>`;
  } else if (window.innerWidth <= 1024) {
    `<div class="top__title">
  <h1>headline</h1>
  <p class="top__text">
    Through cultural and educational events, CCB unites Spain and countries
    affected by armed conflict. The NGO is a space for psychological
    rehabilitation and development. All of its projects are based on the work
    and support of dedicated volunteers. Led by a strong belief in humanity, we
    encourage everyone to spread kindness and inspire others!
  </p>
</div>
<div class="title__imgs">
  <img src="./image/holub.flamenko (1) 1.png" alt="" class="img__flamenko" />
  <img src="./image/Mask group.png" alt="" class="img__guitar" />
</div>`;
    contentInfo.innerHTML = `<div class="about__us-content">
  <h1 class="about__us-title">about us</h1>
  <p class="about__us-paragraph">
    Cultura Contra Balas (CCB) is a non-profit organization that uses culture as
    a tool against violence.
  </p>
</div>
<img src="./image/Golub.krula 1.png" alt="" class="about__us-img" />`;
    founderTitle.textContent = "our Founder";
    contentTitle.textContent = "Natalia Batkivna";
    contentParagraph.textContent =
      "(CCB) is a non-profit organization that uses culture as a tool against violence. Through cultural and educational events, CCB unites Spain and countries affected by armed conflict.(CCB) is a non-profit organization that uses culture as a tool against violence. Through cultural and educational events, CCB unites Spain and countries affected by armed conflict.";
    img.src = "../Team/img/founder-adaptive.png";
  } else if (window.innerWidth <= 1190) {
    contentInfo.innerHTML = `<div class="about__us-content">
  <h1 class="about__us-title">about us</h1>
  <p class="about__us-paragraph">
    Cultura Contra Balas (CCB) is a non-profit organization that uses culture as
    a tool against violence.
  </p>
</div>
<img src="./image/Golub.krula 1.png" alt="" class="about__us-img" />`;
    img.src = "../Team/img/founder-adaptive.png";
  } else if (window.innerWidth <= 1270) {
    document.querySelector(
      ".volunteers__top"
    ).innerHTML = `<div class="top__title">
  <h1>headline</h1>
  <p class="top__text">
    Through cultural and educational events, CCB unites Spain and countries
    affected by armed conflict. The NGO is a space for psychological
    rehabilitation and development. All of its projects are based on the work
    and support of dedicated volunteers. Led by a strong belief in humanity, we
    encourage everyone to spread kindness and inspire others!
  </p>
</div>
<div class="title__imgs">
  <img src="./image/holub.flamenko (1) 1.png" alt="" class="img__flamenko" />
  <img src="./image/Mask group.png" alt="" class="img__guitar" />
</div>`;
    img.src = "../Team/img/founder-adaptive.png";
  } else if (window.innerWidth <= 1400) {
    img.src = "../Team/img/founder-adaptive.png";
  }
}

handleMediaChange();

window.addEventListener("resize", handleMediaChange);
