const cards = [
  {
    title: "The Maze",
    subtitle: "Find Dora & Diego",
    description: `
      ◻️ The project was implemented by using the Client-Server model based on multi-threading.\n
      ◻️ Written in Java for the back-end side, and JavaFX code for the front-end side.\n
      ◻️ Implemented by MVVM architecture.\n
      Skills: JavaFX · Java
      `,
    images: ["/Dora1.jpeg","/Dora2.jpeg"],
    usedTools: ["Java", "JavaFX"],
  },
  {
    title: "Pacman Game",
    subtitle: "",
    description: "Skills: HTML5 · Cascading Style Sheets (CSS) · JavaScript",
    images: ["/pacman1.jpeg", "/pacman2.jpeg"],
    usedTools: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tasty",
    subtitle: "Recipes Web",
    description: `
      This site consists of client and server-side. The client can receive recipes randomly, and look for specific recipes.
      - Using Client-server architecture.\n
      - The client-side is written in Vue.js.
      - The server-side is written in Node.js.
      - The client-side demonstrates a RESTful architecture to access and use data from the server via HTTP requests.
      Skills: Vue.js, Node.js, HTML5, Cascading Style Sheets (CSS), REST APIs, JavaScript
    `,
    images: ["/Tasty1.jpeg","/Tasty2.jpeg","/Tasty3.jpeg","/Tasty4.jpeg"],
    usedTools: ["Vue.js", "Node.js", "HTML5", "CSS", "REST APIs", "JavaScript"],
  },
  {
    title: "Trends Detection",
    subtitle: "Analyze political tweets",
    description: `
        Using NLP and Machine learning algorithms to detect political tweets which become to trends.
        Skills: Natural Language Processing (NLP) · Python (Programming Language)
        `,
    images: ["/trendDet.jpg","https://res.cloudinary.com/dfgjujaok/video/upload/v1699347894/Final_project_video_2_imp4pk.mp4"],
    usedTools: ["Python", "NLP"],
  },
  {
    title: "Analyzing Big Data",
    subtitle: "",
    description: `
      The purpose of our research is to try to find a correlation between the life events that a certain singer went through, and the information culture he represents and shares with the world
      
      We will make a comparison for each singer between his life events in relation to three different sources of information:
      
      1️⃣ The singer's lyrics
      
      2️⃣ The pictures of the singer
      
      3️⃣ The tweets he uploads on social networks
      
      Skills: Gensim · BERT (Language Model) · Web Scraping · Data Analysis · Big Data · Data Modeling · NumPy · JSON · Seaborn · NLTK · Kaggle · Natural Language Processing (NLP) · Python (Programming Language) · Data Science
      `,
    images: ["/Data-Analysis.jpg","/Data-Analysis2.jpg","/Data-Analysis3.jpg","/Data-Analysis4.jpg","/Data-Analysis5.jpg","/Data-Analysis6.jpg","/Data-Analysis7.jpg","/Data-Analysis8.jpg"],
    usedTools: ["Python", "NLP", "Web Scraping", "Data Analysis", "NumPy"],
  },
  {
    title: "Vulnerabilities Scanner",
    subtitle: "",
    description: "",
    images: ["/Vulnerability-Scanning.png"],
    usedTools: ["Python", "MongoDB"],
  },
];

export default cards;
