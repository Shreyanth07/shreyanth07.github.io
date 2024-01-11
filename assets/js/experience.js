AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "EY Ripples Member (Education and Environment)",
    cardImage: "assets/images/experience-page/eycsr.jpeg",
    place: "EY Ripples - EY",
    time: "(October, 2023 - Present)",
    desp: "<li></li>",
	socLink: "https://www.ey.com/en_in/corporate-responsibility",
  },
  {
    title: "CSR Member",
    cardImage: "assets/images/experience-page/kanaa.jpg",
    place: "Kanaa - Indium Software",
    time: "(July, 2022 - October, 2023)",
    desp: "<li>Design engaging SEML modules tailored to the students' age and needs, covering topics like self-awareness, empathy, stress management, and communication.</li><li>Develop assessment tools to measure changes in students' socio-emotional well-being, capturing both qualitative and quantitative data.</li><li>Conduct regular sessions in schools, utilizing a variety of teaching methods such as discussions, role-playing, and experiential activities.</li><li>Foster a supportive atmosphere, encouraging students to share their experiences and concerns while guiding them through reflective exercises.</li><li>Analyze collected data to identify trends and areas for improvement, providing recommendations to enhance the program's outcomes over time.</li>",
	socLink: "https://www.indiumsoftware.com/",
  },
  {
    title: "Teach Volunteer and Circle Leader",
    cardImage: "assets/images/experience-page/u&i.png",
    place: "U&I Org",
    time: "(July, 2018 - March, 2023)",
    desp: "<li>Delivered engaging and impactful educational sessions to underprivileged children, following U&I's curriculum and educational goals, fostering a love for learning and contributing to the NGO's mission of positive social change.</li><li>Developed and executed fundraising strategies to secure financial support from corporate and social organizations, contributing to the sustainability of U&I's initiatives in education, anti-trafficking, women welfare, and mental health.</li><li>Provided leadership and guidance to a team of 35 volunteers, fostering a collaborative and motivated environment to efficiently manage educational programs for 50 children, while also aligning the team with U&I's broader mission of positive social change.</li>",
	socLink: "https://www.indiumsoftware.com/",
  },
  {
    title: "Distribution and Organising Committee Member",
    cardImage: "assets/images/experience-page/rha.jpg",
    place: "Robin Hood Army",
    time: "(Jan, 2020 - April, 2021)",
    desp: "<li>As a Distribution and Organizing Committee Member for RHA, my primary responsibility was to efficiently coordinate the distribution of food and essential supplies to impoverished communities. This involved meticulous planning, scheduling, and ensuring that all logistics, including transportation and storage, are in place for seamless operations.</li><li>Foster strong relationships with the communities we serve. Actively engage with beneficiaries, local leaders, and volunteers to assess their needs, gather feedback, and adapt distribution strategies accordingly that includes creating a sense of trust and empathy within the communities, promoting the values and mission of the NGO.</li><li>Recruit, train, and manage a team of volunteers who will assist in the distribution and organizing efforts. This included assigning tasks, providing guidance, and ensuring that all volunteers adhere to safety and ethical guidelines.</li>",
	socLink: "https://www.indiumsoftware.com/",
  },
  {
    title: "Volunteer",
    cardImage: "assets/images/experience-page/wayv.png",
    place: "We Are Your Voice",
    time: "(December, 2019 - December, 2020)",
    desp: "<li>As a volunteer for WAYV, my primary responsibility was to provide mentorship and support to differently-abled budding professionals. This involved sharing my expertise as a socially responsible professional, offering guidance on career development, resume building, interview preparation, and helping them navigate the job market.</li><li>Act as a bridge between socially responsible HR professionals and employers to create opportunities for differently-abled individuals. My role included organizing networking events, workshops, and seminars that bring together HR experts and employers willing to embrace diversity and inclusion in the workplace. Foster collaborations that lead to internships, job placements, and skill-building opportunities.</li><li>Raise awareness about the challenges faced by differently-abled professionals in the job market and advocate for inclusive hiring practices. My responsibility was to be a vocal advocate for the cause, working towards a more inclusive and equitable society where all individuals have equal access to professional opportunities.</li>",
	socLink: "https://www.indiumsoftware.com/",
  },
  {
    title: "Volunteer",
    cardImage: "assets/images/experience-page/ku.png",
    place: "Kindness Unlimited",
    time: "(July, 2019 - December, 2019)",
    desp: "<li>As a volunteer for KU, my primary responsibility was to actively promote and engage in various kindness initiatives aimed at fostering unity among India's citizens. This may include organizing community events, conducting outreach programs, and encouraging acts of kindness within our local area. By serving as a role model for kindness, we contribute to building a more harmonious society.</li><li>Volunteer responsibilities also entail building strong relationships within our community and beyond. We network with individuals, local organizations, and potential partners to expand the reach of Kindness Unlimited's initiatives. By connecting with like-minded people and groups, we played a vital role in uniting diverse communities across India through the common goal of spreading kindness.</li><li>Another crucial aspect of volunteering for KU was advocating for kindness and unity at both the local and national levels. This involved raising awareness about the organization's mission and projects, participating in awareness campaigns, and utilizing social media platforms to inspire others to join the cause. Our advocacy efforts contribute to the overall success of the NGO in creating a more compassionate and unified India.</li>",
	socLink: "https://www.indiumsoftware.com/",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp, socLink }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Streamline Snowflake Error Logs with Real-time Notifications to Slack Channel",
    cardImage: "assets/images/blogs-page/snowflake.jpg",
	blogLink: "https://www.indiumsoftware.com/blog/streamline-snowflake-error-logs-with-real-time-notifications-to-slack-channel/",
    description:
      "Read More",
  },
  {
    title: "GitHub Event Request Notification to Teams Channel",
    cardImage: "assets/images/blogs-page/github.png",
	blogLink: "https://www.indiumsoftware.com/blog/github-event-request-notification-to-teams-channel/",
    description:
      "Read More",
  },
  {
    title: "Enhancing Healthcare Decision-Making: Harnessing the Power of NLP in CDSS",
    cardImage: "assets/images/blogs-page/cdss.gif",
	blogLink: "https://datacaffee.com/enhancing-healthcare-decision-making-harnessing-the-power-of-nlp-in-clinical-decision-support-systems-cdss/",
    description:
      "Read More",
  },
  {
    title: "How Banks Can Harness AI for Data Modernization and Operational Excellence",
    cardImage: "assets/images/blogs-page/modernisation.jpg",
	blogLink: "https://datacaffee.com/ai-for-data-modernization-in-banks/",
    description:
      "Read More",
  },
  {
    title: "Report Publishing in PowerBI to a Larger user base (Part-1)",
    cardImage: "assets/images/blogs-page/Market-Research.jpg",
	blogLink: "https://www.indiumsoftware.com/blog/report-publishing-in-powerbi-to-a-larger-user-base/",
    description:
      "Read More",
  },
  {
    title: "Leveraging Power BI Reports through QR Code (Part-2)",
    cardImage: "assets/images/blogs-page/powerbi.png",
	blogLink: "https://datacaffee.com/leveraging-power-bi-reports-through-qr-code/",
    description:
      "Read More",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, blogLink, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <a href="${blogLink}" target="_blank"><p class="copy">${description}</p></a></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Walmart Converge Sparkathon",
    subtitle: "Participant and Pre-Finalist",
    image: "assets/images/experience-page/sparkathon.png",
    desp: "",
    href: "https://walmart.converge.tech/content/converge/en_in/sparkathon.html",
  },
  {
    title: "Databricks Spark-wars",
    subtitle: "Finalist - One of the Top Performer",
    image: "assets/images/experience-page/sparkwars.jpg",
    desp: "",
    href: "https://xathon.mettl.com/event/Celebal_Databricks_Spark_Wars",
  },
  {
    title: "FutureSkills Prime 24Hr AI Challenge",
    subtitle: "Participant and innovative solution approacher",
    image: "assets/images/experience-page/openweaver.jpg",
    desp: "",
    href: "https://scholasticworld.blogspot.com/2022/07/24-hr-ai-challenge-to-discover-future.html",
  },
  {
    title: "hackCBS 4.0 - India's Largest Student run Hackathon",
    subtitle: "Participant",
    image: "assets/images/experience-page/hackcbs.png",
    desp: "",
    href: "https://v4.hackcbs.tech/",
  },
  {
    title: "TechGig Code Gladiators",
    subtitle: "Participant",
    image: "assets/images/experience-page/techgig.jpg",
    desp: "",
    href: "https://www.techgig.com/codegladiators2021",
  },
  {
    title: "Google Cloud Community Days",
    subtitle: "Participant",
    image: "assets/images/experience-page/gccd.jpg",
    desp: "",
    href: "https://gdg.community.dev/events/details/google-gdg-cloud-new-delhi-presents-google-cloud-community-days-india/",
  },
  {
    title: "Hacktoberfest",
    subtitle: "Participant",
    image: "assets/images/experience-page/hacktober.jpg",
    desp: "",
    href: "https://hacktoberfest.com/",
  },
  {
    title: "TeamCodeManiac - National Level Coding Competition",
    subtitle: "Participant",
    image: "assets/images/experience-page/codemaniac.jpg",
    desp: "",
    href: "https://www.facebook.com/events/353761582478780",
  },
  {
    title: "Smart India Hackathon (SIH)",
    subtitle: "Winner of the intercollege hackathon and Participant",
    image: "assets/images/experience-page/sih.png",
    desp: "",
    href: "https://www.sih.gov.in/sih2019",
  },
  {
    title: "HackerTech",
    subtitle: "Finalist",
    image: "assets/images/experience-page/hackertech.jpeg",
    desp: "",
    href: "http://www.hackertech.ecellvit.in/",
  },
  {
    title: "Kurukshetra",
    subtitle: "Participant",
    image: "assets/images/experience-page/kurukshetra.jpg",
    desp: "",
    href: "https://www.hackathon.com/event/kurukshetra-2017-31506881932",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button" target="_blank">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
