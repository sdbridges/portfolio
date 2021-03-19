import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Stuart Bridges',
  subtitle: "I'm a full-stack developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://github.com/sdbridges/portfolio/raw/master/Resum%C3%A9.doc', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'face-detection-app.jpg',
    title: 'Face Detection AI',
    info: 'React App that detects a face in an image using a machine learning API.  Batteries included with full authentication features on the persistent backend. ',
    info2: 'Technology:  React, Node, Express, PostgreSQL, Clarifai, NPM, bcrypt, cors, ajax, javascript, css, html',
    url: 'https://face-detection--ai.herokuapp.com/',
    repo: 'https://face-detection--ai.herokuapp.com/',
    repo: 'https://github.com/sdbridges/', // if no repo, the button will not show up
  }
//,   {
//     id: nanoid(),
//     img: 'project.jpg',
//     title: '',
//     info: '',
//     info2: '',
//     url: '',
//     repo: 'https://github.com/sdbridges/', // if no repo, the button will not show up
//   },
//   {
//     id: nanoid(),
//     img: 'project.jpg',
//     title: '',
//     info: '',
//     info2: '',
//     url: '',
//     repo: 'https://github.com/sdbridges/', // if no repo, the button will not show up
//   },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sdbridge@uncg.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
