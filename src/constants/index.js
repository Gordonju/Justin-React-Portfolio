import TicTacToeImage from "../assets/projects/TicTacToe.jpg"; 
import RockPaperScissorsImage from "../assets/projects/RockPaperScissors.jpg"; // Ensure the file name is correct
import GuessingNumberGameImage from "../assets/projects/GuesstheNumber.jpg"; 
import MatchingGameImage from "../assets/projects/SpaceMatchingGame.jpg";


export const HERO_CONTENT = 'I’m Justin, a dedicated full-time student at Kean University with a strong ambition to excel in the field of Cybersecurity. As a passionate developer, I specialize in building robust and scalable web applications. Through my academic journey and practical experience, I have developed proficiency in front-end technologies such as HTML, React, and Next.js, along with back-end technologies including Node.js, MySQL, and PHP. My aim is to harness my skills to devise innovative solutions that foster business growth and enhance user experiences.';

export const ABOUT_TEXT = `I am a dedicated Information technology student with a passion for creating efficient and user-friendly web applications. Looking to gain professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, and MySQL. My journey in web development began with a deep curiosity for how things work and will hopefully evolve into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jun 2024 - Aug 2024",
    role: "Information Technology Intern ",
    company: "WayUp  Allendale, NJ",
    description: `Acquired practical experience in diverse areas of information technology within a dynamic work setting. I supported the IT team in daily operations, resolved technical issues, and contributed to various ongoing projects. My responsibilities included managing hardware and software installations, aiding in network administration, and assisting in the maintenance of system security and data integrity.`,
    technologies: ["Javascript", "HTML","React.js", "Next.js", ],
  },
  {
    year: " June 2022 - Present",
    role: " Tech Volunteer ",
    company: "Hope Inc  Hillside, NJ",
    description: `As a Tech Volunteer, I actively contributed to various projects aimed at enhancing the technological capabilities of the organization. My responsibilities included providing technical support, assisting with the setup and maintenance of hardware and software, and troubleshooting issues to ensure smooth operations`,
    technologies: ["HTML", "CSS", "Python", "mySQL"],
  },
  {
    year: "Jan 2023 - May 2024",
    role: "IT Volunteer",
    company: "ACG  Parsipanny, NJ",
    description: `As an IT Volunteer, I provided essential support to the organization's technology initiatives. My role involved assisting with the installation, configuration, and maintenance of hardware and software systems. I helped troubleshoot technical issues, ensuring minimal downtime and efficient operations. Additionally, I contributed to training staff and users on software applications, improving overall technology literacy within the organization.`,
    technologies: ["Python", "HTML", "Java",],
  },
];

export const PROJECTS = [
    {
        title: "Tic Tac Toe",
        description: "A classic game of Tic Tac Toe with a unique Christmas theme and an indicator of which players turn it is as well as the result of the winner.",
        image: TicTacToeImage,
        technologies: ["HTML", "CSS", "Nodejs", ],
        link: "https://rawcdn.githack.com/Gordonju/Video-Game-/d339f2a58d2f870cf43284eda499cda909108d90/game1.html" // Add project link
    },
    {
        title: "Rock Paper Scissors",
        description: "A Rock Paper Scissors game that puts you against the computer, it has a score count as well as an indicator to let you know if you won, lost, or tied.",
        image: RockPaperScissorsImage,
        technologies: ["Nodejs", "HTML", "CSS"],
        link: "https://rawcdn.githack.com/Gordonju/Video-Game-/d339f2a58d2f870cf43284eda499cda909108d90/game2.html" // Add project link
    },
    {
        title: "Guessing Number Game",
        description: "A number guessing game, with an indicator if the number you guessed was too high or too low.It also shows how many guesses it took you to guess the correct number.",
        image: GuessingNumberGameImage,
        technologies: ["CSS", "HTML", "NodeJs", ],
        link: "https://rawcdn.githack.com/Gordonju/Video-Game-/4f24877398b0b6312257dcfed5137784a78f9911/game4.html" // Add project link
    },
    {
        title: "Matching Game",
        description: "A matching game that is space themed, has a start and reset option as well as a timer that allows you to see how long the game took you to complete.",
        image: MatchingGameImage,
        technologies: ["Nodejs", "CSS", "HTML", ],
        link: "https://rawcdn.githack.com/Gordonju/Video-Game-/d339f2a58d2f870cf43284eda499cda909108d90/game3.html" // Add project link
    },
  
];



export const CONTACT = {
  address: "555 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "111-222-3333",
  email: "gordonju@kean.edu",
};
