function handleMediaChange() {
  if (window.innerWidth <= 568) {
    document.querySelector(
      ".contact__us-form"
    ).innerHTML = `<h2 class="form__title">Hello, nice to meet you)</h2>
<div class="form__inputs-top">
  <input class="name__input" placeholder="Name\Surname" type="text" />
  <input class="email__input" placeholder="Email" type="text" />
  <input class="mid__input" placeholder="Your message" type="text" />
  <p></p>
</div>
<div class="form__bot">
  <div class="form__confirm">
    <label class="custom-checkbox">
      <input type="checkbox" />
      <span></span>
    </label>
    <p>i accept the terms&conditions</p>
  </div>
  <button class="form__but">SEND</button>
</div>`;
  } else if (window.innerWidth <= 1024) {
    document.querySelector(
      ".contact__us-form"
    ).innerHTML = `<h2 class="form__title">Hello, nice to meet you)</h2>
          <div class="form__inputs-top">
            <input class="name__input" placeholder="Name\Surname" type="text" />
            <input class="email__input" placeholder="Email" type="text" />
          </div>
          <input class="mid__input" placeholder="Your message" type="text" />
          <p></p>
          <div class="form__bot">
            <div class="form__confirm">
              <label class="custom-checkbox">
                <input type="checkbox" />
                <span></span>
              </label>
              <p>i accept the terms&conditions</p>
            </div>
            <button class="form__but">SEND</button>
          </div>`;
  } else {
    document.querySelector(
      ".contact__us-form"
    ).innerHTML = `<h2 class="form__title">Hello, nice to meet you)</h2>
          <div class="form__inputs-top">
            <input class="name__input" placeholder="Name\Surname" type="text" />
            <input class="email__input" placeholder="Email" type="text" />
          </div>
          <input class="mid__input" placeholder="Your message" type="text" />
          <p></p>
          <div class="form__bot">
            <div class="form__confirm">
              <label class="custom-checkbox">
                <input type="checkbox" />
                <span></span>
              </label>
              <p>i accept the terms&conditions</p>
            </div>
            <button class="form__but">SEND</button>
          </div>`;
  }
}

handleMediaChange();

window.addEventListener("resize", handleMediaChange);
