/*Research Details Table*/

const researchTable = document.querySelector(".main");
const researchTable2 = document.querySelector(".main2");
const researchTable3 = document.querySelector(".main3");

const research = [
  {
    title: "Accurate Brain Tumor Segmentation and Detection using Multi-Task Learning with GlobalNet and FusionNet",
    authors:
      "S Shreyanth, S Niveditha, V Kathiroli",
    conferences:
      "IEEE 12th International Conference on Communication Systems and Network Technologies (CSNT)",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/papers/braintumor.png",
	resLink: "https://doi.org/10.1109/CSNT57126.2023.10134722",
    citation: {
      vancouver:
        "S. Shreyanth, S. Niveditha and V. Kathiroli, Accurate Brain Tumor Segmentation and Detection using Multi-Task Learning with GlobalNet and FusionNet, 2023 IEEE 12th International Conference on Communication Systems and Network Technologies (CSNT), Bhopal, India, 2023, pp. 478-485, doi: 10.1109/CSNT57126.2023.10134722.",
    },
    abstract:
      "Accurate and quick brain tumor diagnosis and treatment are critical for the successful management of these disorders, which can have a substantial influence on an individual’s quality of life and even be deadly. This work describes a novel technique for brain tumor segmentation and classification that employs three deep learning architectures: GlobalNet, Multi-task Learning, and FusionNet. GlobalNet is a convolutional neural network that incorporates global context information into the model via a global pooling layer, whereas Multi-task Learning allows the model to do numerous tasks concurrently, enhancing each task’s performance by using shared knowledge among them. FusionNet is a deep fully residual convolutional neural network that combines information extracted from multiple CNNs trained on various medical imaging modalities to improve the accuracy and resilience of brain tumor segmentation. The proposed method is shown to be robust and accurate in segmenting and categorizing brain tumors, providing an effective solution with better accuracy in predicting the brain tumors and segmenting the affected part.",
    absbox: "absPopup1",
  },

  {
    title: "Kernelized Deep Networks for Speech Signal Segmentation Using Clustering and Artificial Intelligence in Neural Networks",
    authors:
      "S Niveditha, S Shreyanth, V Kathiroli, Priyanka Agarwal, S Ram Abishek",
    conferences:
      "IEEE 12th International Conference on Communication Systems and Network Technologies (CSNT)",
    researchYr: 2023,
    citebox: "popup2",
    image: "assets/images/research-page/papers/dnnkernalized.png",
	resLink: "https://doi.org/10.1109/CSNT57126.2023.10134609",
    citation: {
      vancouver:
        "S. Niveditha, S. Shreyanth, V. Kathiroli, P. Agarwal and S. Ram Abishek, Kernelized Deep Networks for Speech Signal Segmentation Using Clustering and Artificial Intelligence in Neural Networks, 2023 IEEE 12th International Conference on Communication Systems and Network Technologies (CSNT), Bhopal, India, 2023, pp. 667-674, doi: 10.1109/CSNT57126.2023.10134609.",
    },
    abstract:
      "Speech signal segmentation is a key component of speech processing tasks, such as speaker recognition, speech recognition, and emotion recognition. Traditional approaches often have low accuracy and high computational complexity. To address this issue, we propose a novel approach using kernelized deep networks. The method utilizes Mel-Frequency Cepstral Coefficients (MFCC) and Linear Predictive Coding (LPC) for feature extraction, with Spectral subtraction, wavelet denoising and Wiener filtering as preprocessing techniques. Principal Component Analysis (PCA) and Linear Discriminant Analysis (LDA) are used for dimensionality reduction. Spectral clustering using the graph Laplacian and normalized Laplacian matrix is then employed to cluster the speech signals into different segments. The Lanczos algorithm, Implicitly Restarted Arnoldi Method and Krylov subspace is used to train the networks and classify the signals. Results on TIMIT and BURN corpus demonstrate that the proposed approach outperforms traditional techniques in terms of segmentation accuracy and reduces computational complexity. This research highlights the potential of kernelized deep networks for speech segmentation and contributes to the field of speech processing.",
    absbox: "absPopup2",
  },

  {
    title:
      "Developing Controller Algorithm for an Active Cell Balancing Topology through Model-based Design",
    authors: "V Kathiroli, S Farvez Farook, S Shreyanth",
    conferences:
      "IEEE Fifth International Conference on Electrical, Computer and Communication Technologies (ICECCT)",
    researchYr: 2023,
    citebox: "popup3",
    image: "assets/images/research-page/papers/bms.png",
	resLink: "https://doi.org/10.1109/ICECCT56650.2023.10179786",
    citation: {
      vancouver:
        "V. Kathiroli, S. Farvez Farook and S. Shreyanth, Developing Controller Algorithm for an Active Cell Balancing Topology through Model-based Design, 2023 Fifth International Conference on Electrical, Computer and Communication Technologies (ICECCT), Erode, India, 2023, pp. 1-8, doi: 10.1109/ICECCT56650.2023.10179786.",
    },
    abstract:
      "A battery balancer or battery regulator is an electrical device in a battery pack that performs battery balancing. Balancers are often found in lithium-ion battery packs for laptop computers, and electrical vehicles. etc. There are 2 types of Balancing, Passive and active. Passive balancing dissipates the exceeded energy of high SoC cells by parallel connecting shunt resistors. Passive balancing has the advantages of low costs, low complexity, and easy control algorithms. But since unbalanced cell energy is wasted in the form of heat, cell cycle efficiency is reduced and there are also thermal problems if balancing currents are too high. Many active balancing methods have been developed to avoid many energy losses in passive balancing. The main idea of active balancing is to use energy storage components, such as capacitors, inductors, or transformers, to store charges from high SoC cells and transfer them to low SoC cells. Active balancing has the advantage of utilizing battery energy much more but it always needs more complex configurations and control algorithms. This study aims to develop an active cell balancing mechanism and document the methodology and possible roadblocks.",
    absbox: "absPopup3",
  },

  {
    title:
      "Cluster-based Grid Computing on Wireless Network Data Transmission with Routing Analysis Protocol and Deep Learning",
    authors:
      "Shreyanth S. and Niveditha S.",
    conferences:
      "International Journal of Advanced Research (IJAR)",
    researchYr: 2023,
    citebox: "popup4",
    image: "assets/images/research-page/papers/gridcomput.png",
	resLink: "http://dx.doi.org/10.21474/IJAR01/17096",
    citation: {
      vancouver:
        "Shreyanth S. and Niveditha S. (2023); CLUSTER-BASED GRID COMPUTING ON WIRELESS NETWORK DATA TRANSMISSION WITH ROUTING ANALYSIS PROTOCOL AND DEEP LEARNING Int. J. of Adv. Res. 11 (Jun). 517-534. http://dx.doi.org/10.21474/IJAR01/17096",
    },
    abstract:
      "Grid computing based on clusters has emerged as a promising strategy for improving the efficacy of wireless network data transmission. This study examines the incorporation of cluster-based grid computing, routing analysis protocols, and deep learning techniques to optimize data transmission in wireless networks. The proposed method utilizes clusters to distribute computing duties and enhance resource utilization, resulting in efficient data transmission. To further improve the routing process, a novel routing analysis protocol is introduced, which dynamically adapts to network conditions and chooses the most optimal routes. In addition, deep learning algorithms are used to analyze network data patterns, allowing for intelligent data routing and resource allocation decisions. Experiment results exhibit the efficacy of the proposed method, revealing substantial enhancements in network performance metrics such as throughput, latency, and energy consumption. This research contributes to the development of cluster-based grid computing and offers valuable insights for the design of efficient wireless network data transmission systems.",
    absbox: "absPopup4",
  },

  {
    title: "Enhanced Credit Card Fraud Detection: A Novel Approach Integrating Bayesian Optimized Random Forest Classifier with Advanced Feature Analysis and Real-time Data Adaptation",
    authors: "Rajesh PK, Shreyanth S and Sarveshwaran R",
    conferences:
      "International Journal For Innovative Engineering and Management Research (IJIEMR)",
    researchYr: 2023,
    citebox: "popup5",
    image: "assets/images/research-page/papers/bayesian.png",
	resLink: "https://doi.org/10.48047/IJIEMR/V12/ISSUE05/52",
    citation: {
      vancouver:
        "Rajesh PK, Shreyanth S and Sarveshwaran R; Enhanced Credit Card Fraud Detection: A Novel Approach Integrating Bayesian Optimized Random Forest Classifier with Advanced Feature Analysis and Real-time Data Adaptation; Volume-12; ISSUE-5; 2023; pp. 537-561. https://doi.org/10.48047/IJIEMR/V12/ISSUE05/52",
    },
    abstract:
      "In the financial industry, credit card fraud is a widespread issue that costs both individuals and businesses a lot of money. Using their capacity to spot patterns and abnormalities in huge datasets, machine learning algorithms have demonstrated their effectiveness as tools for fraud detection. This paper suggests a cutting-edge method, specifically an enhanced Bayesian random forest classifier, to improve the detection of credit card fraud. We solve the shortcomings and difficulties of conventional random forest classifiers by applying Bayesian optimization to optimize the model's hyperparameters. Using a publicly available dataset on credit card fraud, we ran experiments to assess the efficacy of the suggested strategy. The effectiveness of our improved Bayesian random forest classifier was evaluated in comparison to cutting-edge methods. The findings demonstrate a fantastic area under the curve (AUC) of 0.99 and a remarkable accuracy of 99.6%, demonstrating the superiority of our proposed classifier above traditional random forest and benchmark techniques. We also investigate the model's interpretability by looking at the importance of characteristics in fraud detection. This research improves the proposed approach's openness and interpretability by offering useful insights into the underlying components that contribute to fraud detection. Our work shows the effectiveness of the optimized Bayesian random forest classifier, but it's crucial to recognize its limitations and the room for improvement in the future. The application of this method to situations other than credit card fraud detection could be explored in more detail. Additionally, it is important to test the proposed classifier's scalability and robustness on bigger and more varied datasets. Ultimately, our study aids in the creation of trustworthy and efficient fraud detection tools for the financial industry. For fraud analysts and investigators, the proposed Bayesian optimized random forest classifier can be used as a decision support tool. Its versatility makes it a plausible answer for a variety of fraud detection problems that go beyond credit card theft.",
    absbox: "absPopup5",
  },

  {
    title: "Neural Image Caption Generation with Visual Attention : Enabling Image Accessibility for the Visually Impaired",
    authors: "Priyanka Agarwal, Niveditha S, Shreyanth S, Sarveshwaran R and Rajesh P K",
    conferences:
      "International Journal of Scientific Research in Science, Engineering and Technology (IJSRSET)",
    researchYr: 2023,
    citebox: "popup6",
    image: "assets/images/research-page/papers/neuralimg.png",
	resLink: "https://doi.org/10.32628/ijsrset23103151",
    citation: {
      vancouver:
        "Priyanka Agarwal, Niveditha S, Shreyanth S, Sarveshwaran R, Rajesh P K, Neural Image Caption Generation with Visual Attention : Enabling Image Accessibility for the Visually Impaired, International Journal of Scientific Research in Science, Engineering and Technology(IJSRSET), Print ISSN : 2395-1990, Online ISSN : 2394-4099, Volume 10, Issue 3, pp.562-575, May-June-2023. doi : https://doi.org/10.32628/IJSRSET23103151",
    },
    abstract:
      "The internet is saturated with images that convey messages and emotions more effectively than words alone in today's digital age. Individuals with visual impairments, who are unable to perceive and comprehend these images, face significant obstacles in this visual-centric online environment. As there are millions of visually impaired people around the globe, it is essential to close this accessibility gap and enable them to interact with online visual content. We propose a novel model for neural image caption generation with visual attention to address this pressing issue. Our model uses a combination of CNNs and RNNs to convert the content of images into aural descriptions, making them accessible to the visually impaired. The primary objective of our project is to generate captions that accurately and effectively describe the visual elements of an image. The model proposed operates in two phases. First, a text-to-speech API is utilized to convert the image's content into a textual description. The extracted textual description is then converted to audio, allowing visually impaired individuals to perceive visual information through sound. Through exhaustive experimentation and evaluation, we intend to achieve a high level of precision and descriptivism in our system for image captioning. We will evaluate the performance of the model by undertaking comprehensive qualitative and quantitative assessments, comparing its generated captions to ground truth captions annotated by humans. By enabling visually impaired individuals to access and comprehend online images, our research promotes digital inclusion and equality. It has the potential to improve the online experience for millions of visually impaired people, enabling them to interact with visual content and enriching their lives through meaningful image-based interactions.",
    absbox: "absPopup6",
  },

  {
    title:
      "Fintech, Crisis, and Marketing: How Technology-Driven Financial Firms Adapt Their Approach to Retain Customers",
    authors: "S. Shreyanth, P.T. Suwetha, V. Kathiroli, S. Niveditha and Harshitha Jayaprakash",
    conferences:
      "International Conference on Emerging Trends in Business & Management (ICETBM)",
    researchYr: 2023,
    citebox: "popup7",
    image: "assets/images/research-page/papers/fintech.png",
	resLink: "https://doi.org/10.2991/978-94-6463-162-3_28",
    citation: {
      vancouver:
        "S. Shreyanth, P.T. Suwetha, V. Kathiroli, S. Niveditha and Harshitha Jayaprakash; Fintech, Crisis, and Marketing: How Technology-Driven Financial Firms Adapt Their Approach to Retain Customers; Proceedings of the International Conference on Emerging Trends in Business & Management (ICETBM 2023); Atlantis Press; ISSN: 2352-5428; 2023; pp. 309-321. https://doi.org/10.2991/978-94-6463-162-3_28",
    },
    abstract:
      "Fintech, or financial technology, has revolutionized the way consumers access and manage their finances. In times of crisis, retaining customers becomes even more important for financial firms to maintain market share and minimize financial losses. This research aims to explore how technology-driven financial firms adapt their marketing strategies to retain customers during times of crisis. Through a literature review and case studies, this study will examine the methods used by fintech companies to maintain customer loyalty and engagement during economic downturns. It will also examine the tactics, techniques and models used by fintech companies to retain customers, with a focus on the role of financial risk management, CRM systems and customer data analysis. The paper will also discuss the importance of customer retention in the context of the fintech industry and its impact on financial stability. It will also delve into the evaluation methods and models used by the firms like the Pareto principle, Kano model, RFM analysis and Entropy-weighted CLV for identifying and prioritizing their most valuable customers and tailoring their retention strategies accordingly. Additionally, this research will investigate the role of digital marketing channels, such as social media and email marketing, in fintech crisis management. The findings of this study will provide valuable insights for fintech companies, as well as marketers and practitioners in the financial industry, on how to effectively navigate crisis situations and maintain customer relationships.",
    absbox: "absPopup7",
  },

  {
    title:
      "Multi-Sensor Data Fusion-based Parallel Manipulator with IoT Monitoring Employing Machine Learning",
    authors: "S. Shreyanth",
    conferences:
      "SN Computer Science",
    researchYr: 2023,
    citebox: "popup7",
    image: "assets/images/research-page/papers/datafusion.png",
	resLink: "https://doi.org/10.1007/s42979-022-01600-4",
    citation: {
      vancouver:
        "Shreyanth, S. Multi-Sensor Data Fusion-based Parallel Manipulator with IoT Monitoring Employing Machine Learning. SN COMPUT. SCI. 4, 165 (2023). https://doi.org/10.1007/s42979-022-01600-4",
    },
    abstract:
      "A robotic parallel manipulator is implemented by employing embedded systems integrated with a set of sensors. More than one type of sensor are implemented together with the control input data from a human limb. Initially, a data set is collected on the map to certain equivalent actuations at the manipulator, and then using an appropriate machine learning algorithm, the control data value for the continuous position of the actuator is generated. A substantial amount of work is done on mapping the position of the limb to the actuator position by creating a three-dimensional model conventional 3D conversion, which is used on the boundary values of the input and output matched with a certain level of intermediate values, a proper training dataset for a machine learning algorithm can be created. The position of the manipulator is monitored by an IoT system and a set of sensors installed at the end. In addition, applied sciences transmits the possession date of the equator, and this information can be viewed remotely from any device connected to the internet.",
    absbox: "absPopup7",
  },

  {
    title:
      "Implementation of Machine Learning in VLSI Integrated Circuit Design",
    authors:
      "S. Shreyanth, D. S. Harshitha and S. Niveditha",
    conferences:
      "SN Computer Science",
    researchYr: 2023,
    citebox: "popup8",
    image: "assets/images/research-page/papers/vlsi.png",
	resLink: "https://doi.org/10.1007/s42979-022-01580-5",
    citation: {
      vancouver:
        "Shreyanth, S., Harshitha, D.S. & Niveditha, S. Implementation of Machine Learning in VLSI Integrated Circuit Design. SN COMPUT. SCI. 4, 137 (2023). https://doi.org/10.1007/s42979-022-01580-5",
    },
    abstract:
      "Machine learning has made an impact on the area attributed to microchip, and it is initially used in automation. These techniques will eventually supplant the current VLSI design concept. Design creation has been automated by substituting time-consuming traditional concepts developed by experts. This development could result in a tremendous change in the realm of hardware computation and AI’s powerful analysis tools. As a result, during the last four decades, several tasks have been computerized, and a plethora of sophisticated tasks have been mechanized. And then if someone has invented a new concept (in terms of computing, analyzing, optimization, and inter-relationship manufacturing) and the invention process is computerized, major firms like IBM and Intel have their own CAD division to handle these issues for design automation. Several firms, including major electronic design automation company, sell CAD software’s based on the employment of intelligent tools at circuit development. ML had broadened the present reach by assisting with plausible solutions for an extensive kind on the subject problems as well as challenges in a different range of technical domains. Importance of machine learning in the EDA solutions industry has increased its capabilities by lowering the man-hours spent on design confirmation and its implementation, cost reductions, and design product productivity. In this article we have discussed the importance of the application of machine learning in VLSI chip design and development and how we implemented ML-oriented BIST.",
    absbox: "absPopup8",
  },

  {
    title:
      "Big Data Predictive Analysis for Type-2 Diabetes Based Heart Disease Using Feature Extraction and Classification by Machine Learning Architectures",
    authors:
      "Arvind Kumar Pandey, Shreyanth S, Dr.J.Prabhakaran, Aniruddha Bodhankar, Avadhesh Kumar and Nayani Sateesh",
    conferences:
      "International Journal of Intelligent Systems and Applications in Engineering (IJISAE) & European Chemical Bulletin (ECB)",
    researchYr: 2022,
    citebox: "popup8",
    image: "assets/images/research-page/papers/predictive.png",
	resLink: "https://doi.org/10.48047/ecb/2023.12.si7.168",
    citation: {
      vancouver:
        "A. K. . Pandey, Shreyanth S., J. Prabhakaran, A. . Bodhankar, A. . Kumar, and N. . Sateesh, Big Data Predictive Analysis for Type-2 Diabetes Based Heart Disease Using Feature Extraction and Classification by Machine Learning Architectures, Int J Intell Syst Appl Eng, vol. 10, no. 3s, pp. 138 –, Dec. 2022. https://doi.org/10.48047/ecb/2023.12.si7.168",
    },
    abstract:
      "Machine learning (ML), a branch of AI, enables computers to learn without being explicitly programmed. ML is widely applied in the healthcare industry to forecast a variety of chronic conditions. For improved clinical paths to prevent complications and postpone the onset of diabetes, earlier diabetes prediction is essential. This research propose novel technique in type 2 diabetes based heart disease detection in big data predictive analysis using machine learning method. Input data has been collected as type 2 diabetes and processed for noise removal and dimensionality reduction. Then the processed data features has been extracted for detecting the abnormality of type 2 diabetes using regression model based linear discriminant analysis. The extracted features shows the abnormal type 2 diabetes and for predicting heart disease by classifying the extracted data using VGG-16 Net_gradient NN. Experimental analysis has been carried out in terms of accuracy, precision, recall, F-1 score, RMSE and MAP for various diabetes dataset. Proposed technique attained accuracy of 96%, precision of 67%, recall of 79%, F-1 score of 63%, RMSE of 66% and MAP of 68%.",
    absbox: "absPopup8",
  },

  {
    title:
      "Machine Learning Algorithms in Big Data Analytics for Social Media Data Based Sentimental Analysis",
    authors:
      "Yogendra Narayan Prajapati, Dr.U.Sesadri, Mahesh T R, Shreyanth S, Dr.Ashish Oberoi and Dr Khel Prakash Jayant",
    conferences:
      "International Journal of Intelligent Systems and Applications in Engineering (IJISAE) & European Chemical Bulletin (ECB)",
    researchYr: 2022,
    citebox: "popup8",
    image: "assets/images/research-page/papers/sentimental.png",
	resLink: "https://doi.org/10.48047/ecb/2023.12.si7.165",
    citation: {
      vancouver:
        "Yogendra Narayan Prajapati, U. Sesadri, M. . T. R., Shreyanth S., Ashish Oberoi, and Khel Prakash Jayant, Machine Learning Algorithms in Big Data Analytics for Social Media Data Based Sentimental Analysis, Int J Intell Syst Appl Eng, vol. 10, no. 2s, pp. 264 –, Dec. 2022. https://doi.org/10.48047/ecb/2023.12.si7.165",
    },
    abstract:
      "Due to the extensive usage of the Internet, social media has grown to play a significant role in our daily lives. Twitter is one of the most popular social media platforms in use today. People express their ideas through tweets on a variety of topics, including politics, sports, the economy, and more. The massive dataset produced by the daily millions of tweets caught the interest of data scientists, who decided to concentrate on it for sentiment analysis. This research propose novel technique in machine learning algorithm in big data for social media based sentimental analysis. Here the input data has been collected as social media based sentimental data and processed for noise removal. Then this data has been clustered using Fuzzy-C means clustering and feature extracted using differential multi-layer whale optimization. The experimental analysis has been carried out in terms of accuracy, precision, recall, AUC and RMSE. The proposed technique attained accuracy of 95%, precision of 72%, recall of 62%, AUC of 44%, RMSE of 52%.",
    absbox: "absPopup8",
  },

  {
    title:
      "Undecimated Wavelet Transform for Word Embedded Semantic Marginal Autoencoder in Security improvement and Denoising different Languages",
    authors:
      "Shreyanth S",
    conferences:
      "International Journal of Research and Innovation in Engineering Technology (IJRIET)",
    researchYr: 2019,
    citebox: "popup8",
    image: "assets/images/research-page/papers/undecimated.png",
	resLink: "https://doi.org/10.48550/arxiv.2307.03679",
    citation: {
      vancouver:
        "Shreyanth S, Undecimated Wavelet Transform for Word Embedded Semantic Marginal Autoencoder in Security improvement and Denoising different Languages, International Journal of Research and Innovation in Engineering Technology (IJRIET), Vol. 05, No. 12, October 2019, pp. 18-28. https://doi.org/10.48550/arXiv.2307.03679",
    },
    abstract:
      "By combining the undecimated wavelet transform within a Word Embedded Semantic Marginal Autoencoder (WESMA), this research study provides a novel strategy for improving security measures and denoising multiple languages. The incorporation of these strategies is intended to address the issues of robustness, privacy, and multilingualism in data processing applications. The undecimated wavelet transform is used as a feature extraction tool to identify prominent language patterns and structural qualities in the input data. The proposed system may successfully capture significant information while preserving the temporal and geographical links within the data by employing this transform. This improves security measures by increasing the system's ability to detect abnormalities, discover hidden patterns, and distinguish between legitimate content and dangerous threats. The Word Embedded Semantic Marginal Autoencoder also functions as an intelligent framework for dimensionality and noise reduction. The autoencoder effectively learns the underlying semantics of the data and reduces noise components by exploiting word embeddings and semantic context. As a result, data quality and accuracy are increased in following processing stages. The suggested methodology is tested using a diversified dataset that includes several languages and security scenarios. The experimental results show that the proposed approach is effective in attaining security enhancement and denoising capabilities across multiple languages. The system is strong in dealing with linguistic variances, producing consistent outcomes regardless of the language used. Furthermore, incorporating the undecimated wavelet transform considerably improves the system's ability to efficiently address complex security concerns.",
    absbox: "absPopup8",
  },

  {
    title:
      "Quadcopter based Robotic Injection Lubricator for High Altitude Mechanical Structures employing Image Processing based Ensemble Machine Learning",
    authors:
      "Shreyanth S",
    conferences:
      "International Research Journal of Engineering and Management Studies (IRJEMS)",
    researchYr: 2019,
    citebox: "popup8",
    image: "assets/images/research-page/papers/quadcopter.png",
	resLink: "https://doi.org/10.5281/zenodo.8047977",
    citation: {
      vancouver:
        "Shreyanth S. (2019). Quadcopter based Robotic Injection Lubricator for High Altitude Mechanical Structures employing Image Processing based Ensemble Machine Learning. International Research Journal of Engineering and Management Studies (IRJEMS), 3(5), 15–24. https://doi.org/10.5281/zenodo.8047977",
    },
    abstract:
      "To govern dynamical systems online, an adaptive artificial neural network (ANN)-based proportional integral derivative (PID) controller is designed. The traditional PID controller is employed for linear time invariant processes, however it has drawbacks when controlling plants with significant nonlinearity or whose parameters change over time. The related information about the plant's dynamics is required to determine the parameters of PID controllers. If plant parameters are perturbed, the PID controller may function if the changes are not severe. However, most plants are either non-linear or change regularly over time, necessitating the need of a highly robust controller, which is where ANN comes into play. With the simple structure and mathematical calculation of the PID controller and the powerful capability of CNN to manage parameter variations with time and non-linearity, the PID and ANN work well together. Along with the study effort in the creation of lubricated drone with a wired controlling system or by wireless controlling, an ensemble Artificial Intelligence approach that employs both rule-based systems and learning algorithms is developed.",
    absbox: "absPopup8",
  },

  {
    title:
      "Prevention of cyberattacks in WSN and packet drop by CI framework and information processing protocol using AI and Big Data",
    authors:
      "Shreyanth S",
    conferences:
      "International Journal of Computer Networks and Wireless Communications (IJCNWC)",
    researchYr: 2018,
    citebox: "popup8",
    image: "assets/images/research-page/papers/cyberattacks.png",
	resLink: "https://doi.org/10.48550/arxiv.2306.09448",
    citation: {
      vancouver:
        "Shreyanth S, Prevention of cyberattacks in WSN and packet drop by CI framework and information processing protocol using AI and Big Data, International Journal of Computer Networks and Wireless Communications (IJCNWC) - Vol. 08, No. 04, August 2018, pp.57-63. https://doi.org/10.48550/arXiv.2306.09448",
    },
    abstract:
      "As the reliance on wireless sensor networks (WSNs) rises in numerous sectors, cyberattack prevention and data transmission integrity become essential problems. This study provides a complete framework to handle these difficulties by integrating a cognitive intelligence (CI) framework, an information processing protocol, and sophisticated artificial intelligence (AI) and big data analytics approaches. The CI architecture is intended to improve WSN security by dynamically reacting to an evolving threat scenario. It employs artificial intelligence algorithms to continuously monitor and analyze network behavior, identifying and mitigating any intrusions in real time. Anomaly detection algorithms are also included in the framework to identify packet drop instances caused by attacks or network congestion. To support the CI architecture, an information processing protocol focusing on efficient and secure data transfer within the WSN is introduced. To protect data integrity and prevent unwanted access, this protocol includes encryption and authentication techniques. Furthermore, it enhances the routing process with the use of AI and big data approaches, providing reliable and timely packet delivery. Extensive simulations and tests are carried out to assess the efficiency of the suggested framework. The findings show that it is capable of detecting and preventing several forms of assaults, including as denial-of-service (DoS) attacks, node compromise, and data tampering. Furthermore, the framework is highly resilient to packet drop occurrences, which improves the WSN's overall reliability and performance.",
    absbox: "absPopup8",
  },

  {
    title:
      "Distributed Multi Scale Hashing on Efficient Nearest Keyword Set Search for peer-to-peer Multidimensional Dataset Model",
    authors:
      "Shreyanth S",
    conferences:
      "International Journal Of Advancement In Engineering Technology, Management and Applied Science (IJAETMAS)",
    researchYr: 2018,
    citebox: "popup8",
    image: "assets/images/research-page/papers/distributed.png",
	resLink: "https://doi.org/10.31224/3073",
    citation: {
      vancouver:
        "Shreyanth S, Distributed Multi Scale Hashing on Efficient Nearest Keyword Set Search for peer-to-peer Multidimensional Dataset Model, International Journal Of Advancement In Engineering Technology, Management and Applied Science (IJAETMAS), Volume05, Issue04, April-2018, pp. 73-85. https://doi.org/10.31224/3073",
    },
    abstract:
      "The growing rise of peer-to-peer (P2P) multidimensional dataset models has boosted demand for effective nearest keyword set search approaches. In this paper, we suggest a novel approach termed Distributed Multi-Scale Hashing (DMSH) to overcome the issues associated with keyword-based search in P2P systems. DMSH combines the advantages of multi-scale hashing and distributed computing to accomplish scalable and accurate nearest keyword set retrieval. DMSH's distributed architecture efficiently distributes the computational burden across numerous nodes, ensuring efficient and parallel processing. The multi-scale hashing algorithm offers effective indexing and retrieval of multidimensional datasets, reducing search space and enhancing search efficiency. We illustrate the effectiveness and scalability of DMSH in comparison to existing techniques using extensive experiments on real-world datasets. The study contributes to the area by offering a distributed method for effective nearest keyword set search in P2P multidimensional dataset models. The suggested DMSH algorithm has higher performance, allowing users to efficiently extract relevant data from large-scale dispersed datasets.",
    absbox: "absPopup8",
  },

  {
    title:
      "Design and Development of Smart Wearable-Technology Enhanced Learning for Specially Abled Students",
    authors:
      "Shreyanth S, Harshitha D S, Priyanka Agarwal, Kathiroli V and Niveditha S",
    conferences:
      "2nd International Conference on Best Innovative Teaching Strategies (ICON-BITS)",
    researchYr: 2023,
    citebox: "popup8",
    image: "assets/images/research-page/papers/smart-wearable.png",
	resLink: "",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "",
    absbox: "absPopup8",
  },
  {
    title:
      "Bayesian Optimized Random Forest Classifier for Improved Credit Card Fraud Detection: Overcoming Challenges and Limitations",
    authors:
      "Rajesh PK, Shreyanth S, Sarveshwaran R and Nithin Chary V",
    conferences:
      "2nd International Conference on Data Science and AI (ICDSAI)",
    researchYr: 2023,
    citebox: "popup8",
    image: "assets/images/research-page/papers/bayesian.png",
	resLink: "",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "",
    absbox: "absPopup8",
  },
  {
    title:
      "Predicting Malware Classification and Family using Machine Learning: A Cuckoo Environment Approach with Automated Feature Selection",
    authors:
      "Niveditha S, Prianka RR, Sathya K, Shreyanth S, Nandhagopal Subramani, Balakrishnan Deivasigamani and Karthikeyan S",
    conferences:
      "International Conference on Machine Learning and Data Engineering (ICMLDE)",
    researchYr: 2023,
    citebox: "popup8",
    image: "assets/images/research-page/papers/cuckoo.png",
	resLink: "",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "",
    absbox: "absPopup8",
  },
  {
    title:
      "NLP Based AI-Driven Resume Screening Solution for Efficient Candidate Selection",
    authors:
      "Sarveshwaran R, Karthikeyan S, Meenalosini V. Cruz, Shreyanth S, Niveditha S and PK Rajesh",
    conferences:
      "9th International Congress on Information and Communication Technology (ICICT)",
    researchYr: 2023,
    citebox: "popup8",
    image: "assets/images/research-page/papers/resume.png",
	resLink: "",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "",
    absbox: "absPopup8",
  },
  {
    title:
      "An Advanced Fully Residual Convolutional Neural Network for Segmentation and Classification of Brain Tumors Across Diverse Medical Image Modalities",
    authors:
      "Karthikeyan S, Shreyanth S, Niveditha S, Naveen S, Santhi G B and Gopirajan PV",
    conferences:
      "Journal of Computational Science",
    researchYr: 2023,
    citebox: "popup8",
    image: "assets/images/research-page/papers/braintum.png",
	resLink: "",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "",
    absbox: "absPopup8",
  },
  {
    title:
      "Memory-Augmented Deep Recurrent Neural Networks for Long-Term Dependency Learning in Natural Language Processing",
    authors:
      "Shreyanth S, Karthikeyan S, Prianka RR and Niveditha S",
    conferences:
      "Advanced Intelligent Systems",
    researchYr: 2023,
    citebox: "popup8",
    image: "assets/images/research-page/papers/memory.png",
	resLink: "",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "",
    absbox: "absPopup8",
  },
  {
    title:
      "Attention-based Quantum Transfer Learning and Transformers for Accurate Autism Detection in Children through Facial Image Analysis",
    authors:
      "Soham Bhoir, Harshal Dave, Karthikeyan S, Meenaloshini Vimal Cruz, Shreyanth S and Nandhagopal S",
    conferences:
      "IEEE Transactions on Cognitive and Developmental Systems",
    researchYr: 2023,
    citebox: "popup8",
    image: "assets/images/research-page/papers/autism.png",
	resLink: "",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "",
    absbox: "absPopup8",
  },
  {
    title:
      "Generative Adversarial Networks with Fused Attention method for Low-Resolution Images and Classification of Disease Severity Stages in Rice Plants",
    authors:
      "Sathya K, Rajalakshmi M, Shreyanth S and ",
    conferences:
      "",
    researchYr: 2023,
    citebox: "popup8",
    image: "assets/images/research-page/papers/GAN.png",
	resLink: "",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "",
    absbox: "absPopup8",
  },
  {
    title:
      "Machine Learning with Unsupervised Quantum Models",
    authors:
      "Sathya K, Rajalakshmi M, Shreyanth S and ",
    conferences:
      "Book titled 'Quantum Machine Learning: A Modern Approach' - CRC Press",
    researchYr: 2023,
    citebox: "popup8",
    image: "assets/images/research-page/papers/quantum.png",
	resLink: "",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "",
    absbox: "absPopup8",
  },
  {
    title:
      "Advancing Digital Forensic Intelligence: Leveraging EdgeAI Techniques for Real-time Threat Detection and Privacy Protection",
    authors:
      "Niveditha S, Shreyanth S, Delshi Howsalya Devi R, Sarveshwaran R and Rajesh P K",
    conferences:
      "Book titled 'Big Data & Edge Intelligence for Enhanced Cyber Defence: Principles and Research' - CRC Press",
    researchYr: 2023,
    citebox: "popup8",
    image: "assets/images/research-page/papers/edgeai.png",
	resLink: "",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "",
    absbox: "absPopup8",
  },
  {
    title:
      "Artificial Intelligence and Blockchain over Edge for Sustainable Cities",
    authors:
      "Delshi Howsalya Devi R, Thanapal P, Asis Jovin, Shreyanth S and Shoba R",
    conferences:
      "Book titled 'Big Data & Edge Intelligence for Enhanced Cyber Defence: Principles and Research' - CRC Press",
    researchYr: 2023,
    citebox: "popup8",
    image: "assets/images/research-page/papers/blockchain.png",
	resLink: "",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "",
    absbox: "absPopup8",
  },
];
const research2 = [
  {
    title: "AI based Walking Stick for Visually Impaired People",
    authors:
      "Chandan Kumar Dubey, Shreyanth S, Dr. Arpita Aggarwal, G. Ramachandran, Sarveshwaran R",
    conferences:
      "Application Number: IN 387581-001",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/patents/walkstick.png",
	/*patLink: "",*/
  },
  {
    title: "AI & IOT based Pedestrian Traffic Display",
    authors:
      "Dinesh Mendhe, Akriti Dogra, Shreyanth Srikanth, Madugula Rithvik, Dr. K. Narasimha Raju, Sarveshwaran Rajagopal, Mrs.S. Jothimani and Dr.S.N. Sangeethaa",
    conferences:
      "Design Number: UK 6302396",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/patents/pedestrian.png",
	/*patLink: "",*/
  },
  {
    title: "Computer Webcam with Motion Detection Unit",
    authors:
      "Chilamakuru Nagesh, Dr. Charushila Axay Patel, Trupti Ulhas Ramteke, Thilak Sayila, Dr. Gopal Ghosh, Dr.Sunil Hanmant Khilari, Shreyanth Srikanth, Shaik Mahammad Rameez Arhan",
    conferences:
      "Design number: UK 6308357",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/patents/webcam.png",
	patLink: "https://www.registered-design.service.gov.uk/find/6308357",
  },
  {
    title: "IOT based Wearable Device for Monitoring of Vital Body Health Information",
    authors:
      "Hitendra Kumar Lautre, Dr. Govindan Vediyappan, Dr.MMary Adline Priya, Shreyanth Srikanth, Dr. Ravichandran Subramanian, Mr. Kunal Singla, Dinesh Kumar",
    conferences:
      "Design number: UK 6293790",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/patents/wearable_device.png",
	patLink: "https://www.registered-design.service.gov.uk/find/6293790",
  },
  {
    title: "Artificial Intelligence based nano robotic arm to operate endoscope motion",
    authors:
      "Shreyanth Srikanth , Renangi Sandeep, Dr. Jayachandran Shanmuga Sundaram, Rajesh Perinkulam Krishnan, Niveditha Srikanth, Manpreet Singh, Dr. Ashok Kumar Katta",
    conferences:
      "Design number: UK 6291782",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/patents/robotic_arm.png",
	patLink: "https://www.registered-design.service.gov.uk/find/6291782",
  },
  {
    title: "ML based Hierarchical Grid Intelligence within a Power Grid to Control Distribution of Power",
    authors:
      "Jaydeep Pravinbhai Parmar, Shreyanth S, V.G.Anisha Gnana Vincy, T.Suganya, Sarthak singh and Dr. Anu Tonk",
    conferences:
      "Application Number: IN 202321028592",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/patents/power_grid.png",
	/*patLink: "",*/
  },
  {
    title: "System and Method for an Architectural Framework for Design of an Interactive Content Delivery System using Machine Learning Model",
    authors:
      "Shreyanth S, Rajesh P K, Sarveshwaran R, Dr. Amar Saraswat, Nupur Aggarwal and Naveen Kumar",
    conferences:
      "Application Number: IN 202311027575",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/patents/content_delivery.png",
	/*patLink: "",*/
  },
];
const research3 = [
  {
    title: "SentixAI: Enhancing Investment Decisions through Real Time AI-Driven Financial Sentiment Analysis Application",
    authors:
      "Shreyanth S and Suwetha PT",
    conferences:
      "ROC Number: SW-17174/2023",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/copyrights/sentix.png",
	/*copyLink: "",*/
  },
  {
    title: "AI-Driven Email Distrubution Analysis and Market Prediction Application for Enhanced Customer-Centric Product Value Optimization",
    authors:
      "Shreyanth S and Sandiya S",
    conferences:
      "ROC Number: SW-16884/2023",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/copyrights/email_dist.png",
	/*copyLink: "",*/
  },
  {
    title: "AI Automated Data Quality and Data Lineage Builder Tool for Accurate Data Management, Pipeline and Architecture",
    authors:
      "Shreyanth S",
    conferences:
      "ROC Number: SW-16910/2023",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/copyrights/data_quality.png",
	/*copyLink: "",*/
  },
  {
    title: "An Effective and Improvised Application for Detection of Brain Tumor using Deep Convolution Neural Network",
    authors:
      "Shreyanth S",
    conferences:
      "ROC Number: SW-16854/2023",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/copyrights/brain_tumor.png",
	/*copyLink: "",*/
  },
  {
    title: "Enhanced Tool for Efficient Video Organizer and Splitter with Multithreading",
    authors:
      "Shreyanth S and Niveditha S",
    conferences:
      "ROC Number: SW-16203/2023",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/copyrights/video_organiser.png",
	/*copyLink: "",*/
  },
  {
    title: "Anomaly detection and report of the jobs posted by scammers using Machine Learning and NLP Algorithm",
    authors:
      "Shreyanth S",
    conferences:
      "ROC Number: SW-16202/2023",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/copyrights/anomaly.png",
	/*copyLink: "",*/
  },
  {
    title: "Multi-Sensor Data Fusion-based Parallel Manipulator with IoT monitoring employing Machine Learning",
    authors:
      "Shreyanth S",
    conferences:
      "ROC Number: SW-15536/2022",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/copyrights/multi_sensor.png",
	/*copyLink: "",*/
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
	  resLink,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${resLink}" class="paperTitle" target="_blank"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
const fillData2 = () => {
  let output2 = "";
  research2.forEach(
    ({
      image,
      title,
      patLink,
      authors,
      conferences,
      researchYr,
    }) =>
      (output2 += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
		    <a href="${patLink}" class="paperTitle" target="_blank"> ${title} </a>
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable2.innerHTML = output2;
};
const fillData3 = () => {
  let output3 = "";
  research3.forEach(
    ({
      image,
      title,
      /*copyLink,*/
      authors,
      conferences,
      researchYr,
    }) =>
      (output3 += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable3.innerHTML = output3;
};
document.addEventListener("DOMContentLoaded", fillData);
document.addEventListener("DOMContentLoaded", fillData2);
document.addEventListener("DOMContentLoaded", fillData3);
