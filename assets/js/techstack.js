AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStackCards2 = document.querySelector(".techstack-box-2");
const techStack = [
  {
    langImage: "assets/images/techstack-page/indium.png",
    langName: "Data Engineer (Sept 2020 - Present)",
    langDesc: "<li>Lead ETL/ELT processes, automate data pipelines to transform Source data into Target Environment. Develop dimensional models for transformed data, enhancing data quality and usability in Data warehouses.</li><li>Implementing on real-time data ingestion. Deal with semi-structured and unstructured data formats, ensuring efficient and up-to-date development.</li><li>Build comprehensive analytics platforms from scratch. Also, implement star schema-based business data models, enhancing scalability and reporting capabilities.</li>",
	compLink: "https://www.indiumsoftware.com/",
  },
  {
    langImage: "assets/images/techstack-page/newtonbox.png",
    langName: "Product Architect (May 2019 - May 2020)",
    langDesc: "<li>Responsible for end-to-end product lifecycle management, encompassing design, development, and support for both new and existing products.</li><li>Translate product vision and business needs into clear product requirements and architectural solutions, enhancing performance and scalability.</li><li>Lead new product releases, aligning them with business goals, maintaining product roadmaps, and collaborating with technical teams for effective development and issue resolution.</li>",
	compLink: "https://www.newtonbox.com/",
  },
  {
    langImage: "assets/images/techstack-page/upwork.png",
    langName: "Software Developer (Nov 2018 - May 2021)",
    langDesc: "<li>Successfully completed 19 projects, with 11 receiving a perfect 5/5 rating for both work quality and timely delivery, maintaining an impressive average rating of 4.75.</li><li>Proficiently generated data analysis charts utilizing customer data, showcasing diverse insights through D3.js and Python.</li><li>Spearheaded the enhancement of product performance, capacity, and scalability by formulating robust architectural and design principles.</li>",
	compLink: "https://www.upwork.com/",
  },
];
const techStack2 = [
  {
    langImage: "assets/images/techstack-page/ineuron.png",
    langName: "ML and Data Science Intern (May 2022 - Sept 2022)",
    langDesc: "<li>explored and visualized the data to ensure quality, validated accuracy, and performed feature engineering for model building.</li><li>Designed the network architecture, training the model, and evaluated its performance on the prepared data.</li><li>Used Docker containers and a CI/CD pipeline to deploy the machine learning solution in the cloud, ensuring scalability, and automating reporting for decision-making.</li>",
	compLink: "https://ineuron.ai/",
  },
  {
    langImage: "assets/images/techstack-page/ibm.png",
    langName: "Software Engineer Intern (Jan 2019 - Apr 2019)",
    langDesc: "<li>Designed and maintained cloud storage platforms to efficiently manage data integration, ensuring a seamless experience for users.</li><li>Collaborated with IBM Sterling OMS to implement an end-to-end pipeline for managing dynamic return policies, enhancing order processing and customer satisfaction.</li><li>Built robust APIs to facilitate smooth order transitions, from creation to shipment, through integration servers, ensuring accurate and timely order fulfillment.</li>",
	compLink: "https://www.ibm.com/in-en",
  },
  {
    langImage: "assets/images/techstack-page/allmindai.png",
    langName: "Research Assistant (Nov 2017 - Dec 2022)",
    langDesc: "<li>Gather and curate large datasets relevant to the research domain, ensuring data quality, consistency, and appropriate labeling. Clean, apply techniques to preprocess and transform raw data into suitable formats for analysis, including tasks such as data normalization, text tokenization, feature engineering, data augmentation, text embedding, and sequence modeling.</li><li>Collaborate with the research team to design, implement, and fine-tune deep learning models for complex tasks in AI, NLP, and Data Science. Conduct rigorous experiments to evaluate model performance, adjusting hyperparameters and optimizing architectures to achieve state-of-the-art results. Document methodologies, experimental setups, and outcomes for reproducibility.</li><li>Conduct comprehensive literature reviews to stay current with the latest advancements in deep learning, AI, NLP, and Data Science. Summarize relevant research findings, identify research gaps, and contribute insights to inform ongoing projects. Innovate by proposing novel approaches that leverage deep learning methodologies. Communicate research outcomes through well-structured reports, presentations, and academic publications.</li>",
	compLink: "https://zrae.global/",
  },
  {
    langImage: "assets/images/techstack-page/zrae.png",
    langName: "ML and NLP Intern (Aug 2017 - March 2019)",
    langDesc: "<li>Applied grid search and image enhancement techniques such as contrast adjustment, pixel ratio division, sharpening, and color balancing to create meaningful and descriptive image data. Implemented normalization and standardization for regression and KNN models to reduce loss.</li><li>Possessed substantial experience in working with various machine learning algorithms, including classification, regression, and ensemble models. Utilized CNN techniques like pooling, activation functions, and convolutions to enhance accuracy.</li><li>Analyzed data from diverse sources to identify patterns for predictive modeling tasks. Developed a deep learning model using TensorFlow to detect and classify anomalies in an industrial robot's manufacturing process. Conducted experiments to evaluate the performance of different machine learning models using Python's scikit-learn library.</li>",
	compLink: "https://zrae.global/",
  },
  {
    langImage: "assets/images/techstack-page/crayon.png",
    langName: "Data Scientist Intern (Aug 2018 - Nov 2018)",
    langDesc: "<li>Employed thorough data analysis and statistical modeling to uncover insights about customer behavior, preferences, and trends, forming the basis for improving customer experience and informed decision-making.</li><li>Performed predictive analysis to anticipate customer needs, preferences, and potential issues, facilitating proactive strategies and personalized approaches to elevate customer satisfaction.</li><li>Harnessed machine learning techniques, Python, and R to build customer-focused strategies and business architecture. This involved creating predictive models, recommendation systems, and customer segmentation for targeted marketing and personalized interactions.</li>",
	compLink: "https://crayondata.ai/",
  },
  {
    langImage: "assets/images/techstack-page/nsic.png",
    langName: "Cloud Engineer Intern (June 2018 - June 2018)",
    langDesc: "<li>Employed embedded system design principles to connect and gather data from devices using Raspberry Pi.</li><li>Used IoT technologies to establish smooth device-to-cloud connectivity for efficient data transfer.</li><li>Cloud-Based Data Management: Employing cloud computing infrastructure to store, process, and analyze collected data in real-time, enhancing scalability and accessibility.</li>",
	compLink: "https://www.nsic.co.in/",
  },
  {
    langImage: "assets/images/techstack-page/tcs.png",
    langName: "Artificial Intelligence Intern (May 2018 - June 2018)",
    langDesc: "<li>Collaborated with a team of AI experts to develop innovative algorithms and solutions for client projects.</li><li>Conducted research and analyzed large datasets to support the creation of effective machine learning models.</li><li>Played a role in model design, training, and evaluation, while staying informed about AI advancements to share with the team.</li>",
	compLink: "https://www.tcsion.com/dotcom/TCSSMB/index.html",
  },
  {
    langImage:"assets/images/techstack-page/kaashiv.png",
    langName:"Data Science Intern (Nov 2017 - Jan 2018)",
    langDesc:"<li>Utilized statistical methods and data visualization tools to analyze data cycles, identifying patterns and trends. Collaborated with the team to derive key insights from the data.</li><li>Developed custom algorithms and machine learning models to address data science challenges. Implemented diverse models for various tasks, enhancing problem-solving capabilities.</li><li>Designed scalable and efficient data model architectures, collaborating with the team to develop innovative solutions tailored to project needs.</li>",
	compLink: "https://www.kaashivinfotech.com/courses/"
  },
  {
    langImage:"assets/images/techstack-page/dlk.png",
    langName:"Data Science Trainee (June 2017 - Aug 2018)",
    langDesc:"<li>Employed statistical techniques to uncover patterns and insights from large datasets, enabling informed decision-making.</li><li>Contributed to the development and deployment of machine learning models to address complex business challenges.</li><li>Data Processing and Visualization: Ensured data quality through preprocessing, while creating impactful visualizations to communicate findings and drive understanding.</li>",
	compLink: "https://dlktech.co.in/"
  },
  {
    langImage:"assets/images/techstack-page/afl.png",
    langName:"Mobile Application Developer Intern (Feb 2017 - Mar 2017)",
    langDesc:"<li>Led the design and creation of an Android app focused on personal safety. Collaborated with the team to understand requirements and translate them into user-friendly features.</li><li>Developed safety-enhancing features, including danger detection and alerts to police. Designed an engaging and intuitive user interface, promoting user interaction and navigation.</li><li>Integrated APIs for location tracking, alert generation, and communication with police. Conducted comprehensive testing to ensure functionality, performance, and stability of the app.</li>",
	compLink: "https://www.accel-india.com/"
  },
  {
    langImage:"assets/images/techstack-page/gts.png",
    langName:"AI, Robotics and Big Data Trainee (June 2016 - Aug 2016)",
    langDesc:"<li>Completed comprehensive training covering AI and Robotics fundamentals. Gained expertise in machine learning, computer vision, natural language processing, and robotics.</li><li>Acquired knowledge of Big Data principles, including data handling and analysis techniques. Explored data storage, processing, and analysis methods for deriving valuable insights.</li><li>Conducted obstacle analysis for robots using computer vision and sensor data analysis. Developed a visual dashboard displaying obstacle insights, including safe vs. risky obstacles, aiding decision-making and risk assessment.</li>",
	compLink: "https://www.finalyearprojects.in/"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <a style="text-decoration: none" href="${stack.compLink}" target="_blank"><img src ="${stack.langImage}" class="featured_image"></a>
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};

const displayTechStacksCards2 = () => {
  const entireCardTemplate =
  techStack2.map((stack)=> {
      return `        
    <div class="row page-content techstackcards2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <a style="text-decoration: none" href="${stack.compLink}" target="_blank"><img src ="${stack.langImage}" class="featured_image"></a>
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards2.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
document.addEventListener("DOMContentLoaded", displayTechStacksCards2);
