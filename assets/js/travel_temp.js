document.addEventListener("DOMContentLoaded", () => {
  /* dynamic load */
  const travelSummary = document.querySelector(".main");

  // json variable for injecting html into DOM
  const travel_data = [
    {
      day: "Day 1",
      description: "description",
      background_image: "assets/images/travel/trip1/street.jpg"
    },
    {
      day: "Day 2",
      description: "description",
      background_image: "assets/images/travel/trip1/qutub_minar.jpg"
    },
    {
      day: "Day 3",
      description: "description",
      background_image: "assets/images/travel/trip1/lotus_temple.jpg"
    },
    {
      day: "Day 4",
      description: "description",
      background_image: "assets/images/travel/trip1/old_fort.jpg"
    },
    {
      day: "Day 5",
      description: "description",
      background_image: "assets/images/travel/trip1/red_fort.jpg"
    },
    {
      day: "Day 6",
      description: "description",
      background_image: "assets/images/travel/trip1/street.jpg"
    },
    {
      day: "Day 7",
      description: "description",
      background_image: "assets/images/travel/trip1/qutub_minar.jpg"
    },
    {
      day: "Day 8",
      description: "description",
      background_image: "assets/images/travel/trip1/lotus_temple.jpg"
    },
    {
      day: "Day 9",
      description: "description",
      background_image: "assets/images/travel/trip1/old_fort.jpg"
    },
    {
      day: "Day 10",
      description: "description",
      background_image: "assets/images/travel/trip1/red_fort.jpg"
    }
  ];

  const fillData = () => {
    let output = "";
    travel_data.forEach(({ day, description, background_image }, index) => {
      output += `
        <div class="el" data-index="${index}">
          <div class="el__overflow">
            <div class="el__inner">
              <div class="el__bg" style="background-image: url('${background_image}')"></div>
              <div class="el__preview-cont">
                <h2 class="el__heading">${day}</h2>
              </div>
              <div class="el__content">
                <div class="el__text">${description}</div>
                <div class="el__close-btn"></div>
              </div>
            </div>
          </div>
          <div class="el__index">
            <div class="el__index-back">${index + 1}</div>
            <div class="el__index-front">
              <div class="el__index-overlay" data-index="${index + 1}">${index + 1}</div>
            </div>
          </div>
        </div>`;
    });

    travelSummary.innerHTML = output;
  };

  fillData();

  const $cont = document.querySelector('.cont');
  const $elsArr = [].slice.call(document.querySelectorAll('.el'));
  const $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

  setTimeout(() => {
    $cont.classList.remove('s--inactive');
  }, 200);

  $elsArr.forEach(($el) => {
    $el.addEventListener('click', function () {
      if (this.classList.contains('s--active')) return;

      const mediaQuery = window.matchMedia('(max-width: 700px)');
      $cont.style.height = mediaQuery.matches ? "80vh" : "120vh";

      const index = this.getAttribute('data-index');
      const background_image = travel_data[index].background_image;

      const styleRule = `.el[data-index="${index}"] .el__bg:before { background-image: url('${background_image}') !important; }`;
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(styleRule, styleSheet.cssRules.length);

      $cont.classList.add('s--el-active');
      this.classList.add('s--active');
    });
  });

  $closeBtnsArr.forEach(($btn) => {
    $btn.addEventListener('click', function (e) {
      $cont.style.height = "70vh";

      const index = this.closest('.el').getAttribute('data-index');
      const styleRule = `.el[data-index="${index}"] .el__bg:before { background-image: none !important; }`;
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(styleRule, styleSheet.cssRules.length);

      e.stopPropagation();
      $cont.classList.remove('s--el-active');
      document.querySelector('.el.s--active').classList.remove('s--active');
    });
  });

});