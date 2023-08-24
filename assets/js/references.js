/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
		sl1: 1,
		name1 : "Venkat Cherukupalli",
        designation1 : "VP, Data Engineering and Intelligence at GiddyUp (Client)",
        image1 : "assets/images/recommendations-page/venkat.jpg",
        message1 : "Shreyanth is a great technology guy! He's really strong in building Data Solutions(DBT, Snowflake, SQL, Python). He brings-in a much required strong technology skills to the table to resolve data and AI challenges. He will be an asset to any company. He quickly understands the issue and moves to resolve it. He does not shy away from any technical challenge, and has a zeal for his work. His architectural judgement is wise, and can easily be trusted to create a sound data solutions. I would confidently recommend Shreyanth any time, and hope to have the opportunity to work with him again.",
        
        sl1:2,
        name2 : "Ashish Kumar",
        designation2 : "Chief Data Scientist - Advanced Data & Analytics at Indium Software USA (Ex-Reporting Head)",
        image2 : "assets/images/recommendations-page/ashish.jpg",
        message2 : "Shreyanth is an asset to have in the team. Today's data teams require multitude of skills. Shreyanth excels in a lot of them like Snowflake, DBT, Tableau, problem solving through SQL. But what makes Shreyanth stand out is his character - navigating tough/tense moments with a cool head, treating all team members with respect and humility and last but not the least ability to learn new skills very quickly. He learnt Kafka and Advanced Analytics in Python very quickly when the need arose. His learning and curious mindset would make him a great addition to any academic or professional cohort. I wish Shreyanth the best and recommend him to any Data Engineering /Science based cohorts. Best wishes!!",
    },
    {
        sl1:3,
        name1 : "Sidhartha Sarangi",
        designation1 : "Associate project manager - Data management at Indium Software USA (Ex-Reporting Head)", 
        image1: "assets/images/recommendations-page/sid.jpg",
        message1 : "Shreyanth is an excellent resource to our Organization. He is quick-witted and has also got an ingenious mind for modern technology. Moreover, Shreyanth has always shown steadfast commitment and passion to learning and getting the work done prior to the deadline along with his proficient skills to complete any problem statement or tasks. His ardent and matured attitude to deliver the work assigned to him no matter how hard it is makes him distinctive. He is copious and has an exceptional ability to clench the opportunities quicker and provide solutions which is a step ahead of the expectation. I am sure that Shreyanth will be a very useful and a remarkable asset to any organization or institution he is taken into. I wish him all success for his career and future.",
        

        sl2:4,
        name2 : "Nikita Hiremath",
        designation2 : "Project Lead - Data & Analytics, Indium (Ex-Reporting Head)",
        image2 : "assets/images/recommendations-page/nikita.jpg",
        message2 : "Shreyanth is one of the hard-working and inquisitive minds I have worked with. He has a very positive attitude towards learning new things and taking the ownership of the tasks he has at hand. Within a very short period of time he had become the critical resource to the project. His SQL and Python skills are commendable. He also has great experience in BI tools. Shreyanth will surely be a great asset for any project and organisation he would be working in!",
  },
    {
        sl1:5,
        name1 : "Karthigaa Vijayakumar",
        designation1 : "Senior Data Engineer - Big Data, Indium (Senior Colleague)",
        image1 : "assets/images/recommendations-page/karthigaa.jpg",
        message1 : "I have had the pleasure to work with Shreyanth through my role as a Senior Data Engineer at Indium Software. During that period, Shreyanth demonstrated that he is hard working and has a commitment for learning on his own. He has showed his hands on problem solving skills using his sql, python, datawarehousing big data technologies for the business use case that was given by our supply chain client. His communication, availability, and timeliness is highly appreciated. Shreyanth would be a great asset to any team and organization. I wish him to be successful in his future endeavors.",
        

        sl2:6,
        name2 : "Narendran Asokan",
        designation2 : "Founder, Sciencotonic Edu & Newton Box (Ex-Reporting Head)",
        image2 : "assets/images/recommendations-page/narendran.jpg",
        message2 : "I am gratified to recommend Shreyanth S to any Organisation or University he is to be accepted. As the co-founder of the organization, I was also the reporting head for Shreyanth along with Vijay Sethuraman. He has always been innovative to solve any business problem. Moreover, Shreyanth always made sure he and his team know their responsibilities and their accountability. He was one of the strongest pillars of our Organization to expand and flourish swiftly. He always had a keen interest in exploring new fields and learning new skills. His coding skills are commendable and out of box. His vision in business understanding, design and development is always mind blowing. He is also brilliant in planning his work, schedule and tasks efficiently and making sure they are promptly delivered. His knowledge and expertise in product design, development, architecture and enhancement along with his software skills has helped Sciencotonic and Newton Box to achieve linearly to greater heights. I firmly assure that he will be the best and excellent choice of selection to any organization or University to bring pride and massive growth. I wish him all success in his life and future endeavors.",
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
                    <a href="#0" class="paperTitle"> ${name1} </a> 
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
                            <a href="#0" class="paperTitle">${name2} </a> 
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
