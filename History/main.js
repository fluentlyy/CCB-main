function handleMediaChange() {
  if (window.innerWidth <= 636) {
    document.querySelector(
      ".our-history__block"
    ).innerHTML = `<div class="our-history__blocks">
  <div class="our-history__block-1">
    <div class="block-1__content">
      <p class="content__txt-top">
        At first, we were collecting humanitarian aid for the refugees from
        Ukraine. We would take clothes, blankets, hygiene products. Next step of
        our help was creating a course of Spanish for the refugees. 3 months, 3
        hours, and 5 days per week they were intensively learning Spanish to
        integrate into society as fast as possible.
      </p>
      <div class="content__txt-bot">
        <p class="txt-bot__left">
          Video has reached 230 000 views on Instagram, 40 000 on Youtube, has
          been published in 23 newspapers and has been live on 3 main Spanish TV
          channels. After this, those children (from 5 to 17 years old) came to
          sing on the main scene of the whole Spain "National Auditorium of
          Music" on the final Christmas concert of a famous compositor Juan
          Antonio Simarro. Working on this project, we understood the power of
          art, which creates a parallel reality for an artist without the war.
        </p>
        <p class="txt-bot__right">
          As the target of our organization is to unite people and helping
          violence victims through cultures, our first cultural project was an
          old children's song "Que canten los niños" ("Let the children sing")
          performed by Ukrainian children. The main goal was to call for
          solidarity and peace.
        </p>
      </div>
    </div>
  </div>
  <div class="block-1__imgs">
    <div class="block-1__img"></div>
    <div class="block-1__img"></div>
  </div>
  <div class="our-history__block-2">
    <h2 class="block-2__title">
      CCB continues to grow and help people who suffered from violence, show
      kindness through love. We have grand plans for future, so LET'S
      <span>DO GOOD TOGETHER!</span>
    </h2>
    <div class="block-2__text">
      <p class="block-2__text-top">
        We also organized charity dinners in Madrid and Javea with famous
        Ukrainian chef Yevhen Klopotenko, where we have collected 10000€ to
        donate for humanitarian aid for Ukrainians.
      </p>
      <div class="block-2__text-mid">
        <p>
          Women is one of the most vulnerable groups in this war. Many women
          were captured, experienced violence and have lost their kids, parents,
          and husbands. They require psychological help to continue the life of
          not just their family, but of the whole world. CCB has organized 3
          groups, with 90 women obtaining help in total.
        </p>
        <p>
          As our target us to help people who save others, the next group was
          dedicated to combat medics in total of 70 people. We used many
          different rehabilitation methods, from massage to cultural events.
          They exchanged and discussed their experience with Spanish doctors in
          Denia in the hospital of La Marina and restore their power.
        </p>
      </div>
      <p class="block-2__text-bot">
        Culture may be shown in different ways, including sports. We supported a
        teenage football club "Barsa" from the city of Sumy. 22 teenagers came
        to Javea and played 4 matched with teams from other towns. Social
        activity is a part of culture as well. Youth of the future could take
        some rest from military environment. 4 groups of teenagers of 136 people
        in total have been in the camp of social leadership, where they were
        improving their knowledge and skills of volunteering.
      </p>
    </div>
  </div>
</div>`;
  } else if (window.innerWidth <= 1024) {
    document.querySelector(
      ".our-history__block"
    ).innerHTML = `<div class="our-history__blocks">
  <div class="our-history__block-1">
    <div class="block-1__content">
      <p class="content__txt-top">
        At first, we were collecting humanitarian aid for the refugees from
        Ukraine. We would take clothes, blankets, hygiene products. Next step of
        our help was creating a course of Spanish for the refugees. 3 months, 3
        hours, and 5 days per week they were intensively learning Spanish to
        integrate into society as fast as possible.
      </p>
      <div class="content__txt-bot">
        <p class="txt-bot__left">
          Video has reached 230 000 views on Instagram, 40 000 on Youtube, has
          been published in 23 newspapers and has been live on 3 main Spanish TV
          channels. After this, those children (from 5 to 17 years old) came to
          sing on the main scene of the whole Spain "National Auditorium of
          Music" on the final Christmas concert of a famous compositor Juan
          Antonio Simarro. Working on this project, we understood the power of
          art, which creates a parallel reality for an artist without the war.
        </p>
        <p class="txt-bot__right">
          As the target of our organization is to unite people and helping
          violence victims through cultures, our first cultural project was an
          old children's song "Que canten los niños" ("Let the children sing")
          performed by Ukrainian children. The main goal was to call for
          solidarity and peace.
        </p>
      </div>
    </div>
  </div>
  <div class="our-history__block-2">
    <h2 class="block-2__title">
      CCB continues to grow and help people who suffered from violence, show
      kindness through love. We have grand plans for future, so LET'S
      <span>DO GOOD TOGETHER!</span>
    </h2>
    <div class="block-2__text">
      <p class="block-2__text-top">
        We also organized charity dinners in Madrid and Javea with famous
        Ukrainian chef Yevhen Klopotenko, where we have collected 10000€ to
        donate for humanitarian aid for Ukrainians.
      </p>
      <div class="block-2__text-mid">
        <p>
          Women is one of the most vulnerable groups in this war. Many women
          were captured, experienced violence and have lost their kids, parents,
          and husbands. They require psychological help to continue the life of
          not just their family, but of the whole world. CCB has organized 3
          groups, with 90 women obtaining help in total.
        </p>
        <p>
          As our target us to help people who save others, the next group was
          dedicated to combat medics in total of 70 people. We used many
          different rehabilitation methods, from massage to cultural events.
          They exchanged and discussed their experience with Spanish doctors in
          Denia in the hospital of La Marina and restore their power.
        </p>
      </div>
      <p class="block-2__text-bot">
        Culture may be shown in different ways, including sports. We supported a
        teenage football club "Barsa" from the city of Sumy. 22 teenagers came
        to Javea and played 4 matched with teams from other towns. Social
        activity is a part of culture as well. Youth of the future could take
        some rest from military environment. 4 groups of teenagers of 136 people
        in total have been in the camp of social leadership, where they were
        improving their knowledge and skills of volunteering.
      </p>
    </div>
  </div>
</div>
<div class="block-1__imgs">
  <div class="block-1__img"></div>
  <div class="block-1__img"></div>
</div>`;
  } else {
    document.querySelector(".our-history__block").style.display;
  }
}

handleMediaChange();

window.addEventListener("resize", handleMediaChange);
