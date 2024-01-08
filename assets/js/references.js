/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
	sl1: 1,
	name1 : "Dr. Karthikeyan Saminathan",
        designation1 : "Associate Professor & HoD (AIML) at KPRIET | CEO & Founder - AIQuantalytics (Research Guide)",
        image1 : "assets/images/recommendations-page/karthik.jpg",
        message1 : "I am delighted to provide an enthusiastic recommendation for Mr. Shreyanth S, a standout student with whom I have had the pleasure of collaborating on various academic and research projects. Shreyanth's contributions to our research endeavors and coursework have consistently exceeded expectations, showcasing his exceptional intellect and dedication. What sets Shreyanth apart is not only his academic prowess but also his proactive involvement in enhancing the academic environment. He has delivered insightful industry talks, bridging the gap between theory and practice, and actively participated as a committee member in restructuring course curriculums, demonstrating remarkable leadership qualities. Shreyanth's commitment to the academic community is further highlighted through his role as a guest lecturer, where he selflessly shared his knowledge and expertise with fellow students as part of their curriculum for the minors degree in AI. In light of Shreyanth's outstanding academic record, collaborative spirit, and dedication to education, I wholeheartedly endorse him for any assistantship role in a university setting. His diverse skill set and proactive contributions make him an ideal candidate who would undoubtedly excel and positively impact any academic institution or organization. I strongly believe that, Shreyanth is a top-tier applicant, and I recommend him without reservation, confident that he will continue to make significant contributions in all his future academic and professional endeavors. Moreover, I want to express that I am not only willing but genuinely delighted to reconsider Shreyanth for any assistance or collaboration in his post-doctoral career. His passion, dedication, and expertise make him an asset, and I believe he will continue to thrive in advanced academic pursuits.",
	absbox_for_linkedin1 : "https://www.linkedin.com/in/karthikdecodes/",
        
        sl1:2,
        name2 : "Dr. Selvi R",
        designation2 : "Research Scientist (Information Technology) at Dr. MGR Educational and Research Institute (UG Professor)",
        image2 : "assets/images/recommendations-page/selvi.jpeg",
        message2 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
	absbox_for_linkedin2 : "mailto:rcelve@gmail.com",
    },
  {
	sl1: 3,
	name1 : "Mr. Venkat Cherukupalli",
        designation1 : "VP, Data Engineering and Intelligence at GiddyUp (Client)",
        image1 : "assets/images/recommendations-page/venkat.jpg",
        message1 : "Shreyanth is a great technology guy! He's really strong in building Data Solutions(DBT, Snowflake, SQL, Python). He brings-in a much required strong technology skills to the table to resolve data and AI challenges. He will be an asset to any company. He quickly understands the issue and moves to resolve it. He does not shy away from any technical challenge, and has a zeal for his work. His architectural judgement is wise, and can easily be trusted to create a sound data solutions. I would confidently recommend Shreyanth any time, and hope to have the opportunity to work with him again.",
	absbox_for_linkedin1 : "https://www.linkedin.com/in/venkataramacherukupalli/",
        
        sl1:4,
        name2 : "Mr. Ashish Kumar",
        designation2 : "Chief Data Scientist - Advanced Data & Analytics at Indium Software USA (Ex-Reporting Head)",
        image2 : "assets/images/recommendations-page/ashish.jpg",
        message2 : "Shreyanth is an asset to have in the team. Today's data teams require multitude of skills. Shreyanth excels in a lot of them like Snowflake, DBT, Tableau, problem solving through SQL. But what makes Shreyanth stand out is his character - navigating tough/tense moments with a cool head, treating all team members with respect and humility and last but not the least ability to learn new skills very quickly. He learnt Kafka and Advanced Analytics in Python very quickly when the need arose. His learning and curious mindset would make him a great addition to any academic or professional cohort. I wish Shreyanth the best and recommend him to any Data Engineering /Science based cohorts. Best wishes!!",
	absbox_for_linkedin2 : "https://www.linkedin.com/in/ashishk64/",
    },
    {
        sl1:5,
        name1 : "Mr. Sidhartha Sarangi",
        designation1 : "Associate project manager - Data management at Indium Software USA (Ex-Reporting Head)", 
        image1: "assets/images/recommendations-page/sid.jpg",
        message1 : "Shreyanth is an excellent resource to our Organization. He is quick-witted and has also got an ingenious mind for modern technology. Moreover, Shreyanth has always shown steadfast commitment and passion to learning and getting the work done prior to the deadline along with his proficient skills to complete any problem statement or tasks. His ardent and matured attitude to deliver the work assigned to him no matter how hard it is makes him distinctive. He is copious and has an exceptional ability to clench the opportunities quicker and provide solutions which is a step ahead of the expectation. I am sure that Shreyanth will be a very useful and a remarkable asset to any organization or institution he is taken into. I wish him all success for his career and future.",
	absbox_for_linkedin1 : "https://www.linkedin.com/in/sidhartha-sarangi-89933130/",
        

        sl2:6,
        name2 : "Ms. Nikita Hiremath",
        designation2 : "Project Lead - Data & Analytics, Indium (Ex-Reporting Head)",
        image2 : "assets/images/recommendations-page/nikita.jpg",
        message2 : "Shreyanth is one of the hard-working and inquisitive minds I have worked with. He has a very positive attitude towards learning new things and taking the ownership of the tasks he has at hand. Within a very short period of time he had become the critical resource to the project. His SQL and Python skills are commendable. He also has great experience in BI tools. Shreyanth will surely be a great asset for any project and organisation he would be working in!",
	absbox_for_linkedin2 : "https://www.linkedin.com/in/nikitahiremath/",
  },
    {
        sl1:7,
        name1 : "Mrs. Karthigaa Vijayakumar",
        designation1 : "Senior Data Engineer - Big Data, Indium (Senior Colleague)",
        image1 : "assets/images/recommendations-page/karthigaa.jpg",
        message1 : "I have had the pleasure to work with Shreyanth through my role as a Senior Data Engineer at Indium Software. During that period, Shreyanth demonstrated that he is hard working and has a commitment for learning on his own. He has showed his hands on problem solving skills using his sql, python, datawarehousing big data technologies for the business use case that was given by our supply chain client. His communication, availability, and timeliness is highly appreciated. Shreyanth would be a great asset to any team and organization. I wish him to be successful in his future endeavors.",
	absbox_for_linkedin1 : "https://www.linkedin.com/in/karthigaavj/",
        

        sl2:8,
        name2 : "Mr. Narendran Asokan",
        designation2 : "Founder, Sciencotonic Edu & Newton Box (Ex-Reporting Head)",
        image2 : "assets/images/recommendations-page/narendran.jpg",
        message2 : "I am gratified to recommend Shreyanth S to any Organisation or University he is to be accepted. As the co-founder of the organization, I was also the reporting head for Shreyanth along with Vijay Sethuraman. He has always been innovative to solve any business problem. Moreover, Shreyanth always made sure he and his team know their responsibilities and their accountability. He was one of the strongest pillars of our Organization to expand and flourish swiftly. He always had a keen interest in exploring new fields and learning new skills. His coding skills are commendable and out of box. His vision in business understanding, design and development is always mind blowing. He is also brilliant in planning his work, schedule and tasks efficiently and making sure they are promptly delivered. His knowledge and expertise in product design, development, architecture and enhancement along with his software skills has helped Sciencotonic and Newton Box to achieve linearly to greater heights. I firmly assure that he will be the best and excellent choice of selection to any organization or University to bring pride and massive growth. I wish him all success in his life and future endeavors.",
	absbox_for_linkedin2 : "https://www.linkedin.com/in/narendran-asokan/",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="${absbox_for_linkedin1}" class="paperTitle" target="_blank"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="${absbox_for_linkedin2}" class="paperTitle" target="_blank">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
