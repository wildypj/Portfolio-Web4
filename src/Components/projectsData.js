const  podcast = require("../library/img/podcast-summary-app.png");
const  chatApp = require("../library/img/chat-app.png");
const  weatherApp = require("../library/img/Weather-App.png");
const toDoApp = require("../library/img/To-Do-App.png")
const calc = require("../library/img/Calculator-web-app.png");
const movieApp = require("../library/img/Movie-Quote.png");
 

const projectsData = [
  {
    title: "PodCast Summary Web App",
    description: "Podcast Summarizer is a versatile web application integrating HTML, CSS, JavaScript, and Flask. Utilizing AssemblyAI and ListenNotes APIs, this Python-based tool transcribes and summarizes podcast episodes effortlessly. Its user-friendly interface enables seamless input of episode IDs, facilitating the generation of concise summaries and transcripts for an enhanced listening experience.",
    imgUrl: podcast,
    githubUrl:'https://github.com/wildypj/Podcast_Flask' ,
  },
  {
    title: "Open Chat Web App",
    description: "The Open Chat Web App is a real-time communication platform that facilitates seamless interaction among users. Developed with Python for the backend and JavaScript, HTML, and CSS for the frontend, it employs Flask to bridge the gap between client and server. Utilizing Flask-SocketIO, it ensures instantaneous communication, providing users with a fluid and dynamic chatting experience.",
    imgUrl: chatApp,
    githubUrl:'https://github.com/wildypj/chat_app' ,
  },
  {
    title: "Weather Forecast Web App",
    description: "The Weather Web App offers instant weather updates worldwide. With a simple search feature and responsive design, users can quickly check current conditions on any device. Built with JavaScript, HTML, and CSS, this intuitive platform ensures quick access to current conditions. Powered by the OpenWeatherMap API, it provides accurate data on temperature, humidity, and wind speed. ",
    imgUrl: weatherApp,
    githubUrl:'https://github.com/wildypj/weather-app' ,
  },
  {
    title: "To-Do Web Application",
    description: `Welcome to the To-Do List Web App, a user-friendly platform designed to streamline task management effortlessly. Users can seamlessly add, complete, and delete tasks using mouse clicks or keyboard shortcuts. Key features include adding tasks with the "Add" button or "Enter" key, marking tasks as completed with a check button, deleting tasks, and undoing completed tasks. Built with HTML, CSS, and JavaScript, the app offers a clean interface and keyboard support for enhanced accessibility.`,
    imgUrl: toDoApp,
    githubUrl:'https://github.com/wildypj/To-Do-List' ,
  },
  {
    title: "Calculator Web-App",
    description: "Welcome to the Web Calculator App, crafted with JavaScript, HTML, and CSS for seamless arithmetic operations. This intuitive calculator boasts a user-friendly interface supporting mouse and keyboard inputs. Enjoy effortless addition, subtraction, multiplication, and division, complemented by features like decimal point functionality and error handling. Whether clicking buttons or using keyboard shortcuts, this app ensures swift and accurate calculations for all your needs.",
    imgUrl: calc,
    githubUrl:'https://github.com/wildypj/Web-Calculator-App' ,
  },
  {
    title: "Movie Quote Generator",
    description: "Experience the magic of cinema with the Movie Quote Generator Web App. With a simple click, immerse yourself in iconic movie lines paired with their respective film origins. Built with HTML, CSS, and JavaScript, this user-friendly app offers a seamless and entertaining experience for movie enthusiasts.",
    imgUrl: movieApp,
    githubUrl:'https://github.com/wildypj/Quote-Generator' ,
  },
];

export default projectsData;
