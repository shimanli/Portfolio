// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shiman",
  middleName: "",
  lastName: "Li",
  message: " Seek for beauties in the world. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/shimanli",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/ziyang.li.5",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/cynthiali0728/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/shimanli.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/shimanli.png"),
  imageSize: 375,
  message:
    "My name is Shiman Li. I graduated from Donghua University, Shanghai, China, with a Master’s degree in Art Theory (Design Art) and a Bachelor’s degree in Textile Engineering (Knitting and Apparel). I am passionate about apparel history and culture differences between western and eastern world. Meanwhile, I have a dream to become an interactive designer in future. In my spare time I like literature and histories.",
  resume: require("../editable-stuff/resume.pdf"),
  portfolio: require("../editable-stuff/portfolio.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "shimanli", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/shimanli.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/shimanli.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Coreldraw", value: 80 },
    { name: "Chinese Instrument Zheng", value: 95 },
    { name: "Photoshop", value: 85 },
    { name: "Fabric Analysis", value: 65 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "Sketch Drawing", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 70 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I’m currently seeking for PhD program of Dress History or MA degree of Interactive Design in United States. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "shimanli@outlook.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
