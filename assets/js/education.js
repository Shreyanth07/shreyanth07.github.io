AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Statistical Learning, CS 101, Algorithms and Relational Algebra",
    cardImage: "assets/images/education-page/logos/stanford.svg",
    moocLink: "https://www.credential.net/5c7327e9-e4c2-4a11-a3fe-d94294adf0c8?username=shreyanths07",
  },
  {
    title: "CS50X, CS50P and CS50AI - CS, Python and Artificial Intelligence",
    cardImage: "assets/images/education-page/logos/harvard.png",
    moocLink: "https://www.credential.net/b5a037bd-ba43-4893-ba92-568e32ef4a8a?username=shreyanths07",
  },
  {
    title: "Applied Data Science Module I and II",
    cardImage: "assets/images/education-page/logos/wqu.png",
    moocLink: "https://www.credly.com/badges/9636f7bb-09e8-401c-95e3-d771db90ce3d/public_url",
  },
  {
    title: "Big Data, Advanced Algorithms and Complexity",
    cardImage: "assets/images/education-page/logos/ucsd.svg",
    moocLink: "https://www.credential.net/e37cb5df-43ba-44b4-a884-bbee9f834ebe?username=shreyanths07",
  },
  {
    title: "Python for Everybody",
    cardImage: "assets/images/education-page/logos/umich.svg",
    moocLink: "https://www.credential.net/747fe96b-acd5-4268-8d9e-1092585a52d5?username=shreyanths07",
  },
  {
    title: "Accelerated Computer Science Fundamentals Specialization",
    cardImage: "assets/images/education-page/logos/uiuc.svg",
    moocLink: "",
  },
  {
    title: "Computer Vision",
    cardImage: "assets/images/education-page/logos/SUNYB.svg",
    moocLink: "https://www.credential.net/38562344-6e9f-43ac-b4b1-f769006f802e?username=shreyanths07",
  },
  {
    title: "Discrete Mathematics and Machine Learning",
    cardImage: "assets/images/education-page/logos/IITM.svg",
    moocLink: "https://www.credential.net/bdc64dd6-5319-4613-ada9-1d0b81e202a2?username=shreyanths07",
  },
  {
    title: "Database Management System",
    cardImage: "assets/images/education-page/logos/IITK.svg",
    moocLink:
      "https://www.credential.net/719d462e-9f5c-4334-adc8-ba362ceb2608?username=shreyanths07",
  },
  {
    title: "Mathematics for Machine Learning",
    cardImage: "assets/images/education-page/logos/icl.png",
    moocLink: "https://www.credential.net/90b65a97-17e6-4201-8a3c-23c5b56bfeb9?username=shreyanths07",
  },
  {
    title: "Professional Diploma Program in Software Engineering",
    cardImage: "assets/images/education-page/logos/eou.png",
    moocLink: "https://www.credential.net/83c4276e-6973-454d-b52b-6db9e9658f29?username=shreyanths07",
  },
  {
    title: "Machine Learning with Python",
    cardImage: "assets/images/education-page/logos/fcc.svg",
    moocLink:
      "https://www.credential.net/27b1d1b9-f09a-43d7-9459-9dc81ee15993?username=shreyanths07",
  },
  {
    title: "AWS SAA & CCNA",
    cardImage: "assets/images/education-page/logos/networkgeek.png",
    moocLink:
      "https://www.credential.net/56ca2c1f-d9a5-4029-a57f-2e1d7cd75748?username=shreyanths07",
  },
  {
    title: "Databricks, Cloud, DBT and Business Communication",
    cardImage: "assets/images/education-page/logos/indium.png",
    moocLink:
      "https://www.credential.net/f2a0d418-08f3-472a-ab9f-23575be33656?username=shreyanths07",
  },
  {
    title: "Fundamentals of Digital Marketing and Advanced Google Analytics",
    cardImage: "assets/images/education-page/logos/googledg.png",
    moocLink:
      "https://www.credential.net/575c2b2a-84b6-45d7-aeca-0e157d01a56d?username=shreyanths",
  },
  {
    title: "Premiership in Business Management",
    cardImage: "assets/images/education-page/logos/ictrd.png",
    moocLink:
      "",
  },
  {
    title: "Software Development",
    cardImage: "assets/images/education-page/logos/pankaj.png",
    moocLink:
      "https://www.credential.net/99e5fa66-d361-4bb2-a568-496cde082fed?username=shreyanths07",
  },
  {
    title: "Software Development and Testing",
    cardImage: "assets/images/education-page/logos/qspiders.png",
    moocLink:
      "https://www.credential.net/46b4eeb5-86e2-4232-989e-cfe851e18481?username=shreyanths07",
  },
  {
    title: "AI for Everyone and Industry",
    cardImage: "assets/images/education-page/logos/aising.png",
    moocLink:
      "https://www.credential.net/8b402fd2-df89-4bf5-ae22-5ea8437c4e7d",
  },
  {
    title: "Data Science & Advanced Analytics VEP, FinTech Engineering VEP and AI VEP",
    cardImage: "assets/images/education-page/logos/forage.png",
    moocLink:
      "https://www.credential.net/e0891c6e-4368-4585-bfd0-64115eff9db0?username=shreyanths07",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
