/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Hardik Kothari",
  title: "Hi all, I'm Hardik",
  subTitle: emoji(
    "I'm a web & Mobile app developer. I have more than 5 years of experience in the software development field.I have been working in the electron framework from the last two years so good in that.I have been certified in Electron Framework. I have a very good experience in front end technologies like Vue , React , Angular.Only live in JS world."
  ),
  resumeLink:"https://drive.google.com/file/d/15Ds9kvFzHrVt9t2LMZkZsak1G9dTW5GA/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hardikk94?tab=repositories",
  linkedin: "https://www.linkedin.com/in/hardik-kothari-42404213b",
  gmail: "hardikkothari46@gmail.com",
  // gitlab: "https://gitlab.com/",
  // medium: "https://medium.com/@asifvora",
  facebook: "https://www.facebook.com/hardik.kothari.100",
  stackoverflow: "https://stackoverflow.com/users/5997390/hardik-kothari",
  instagram: 'https://www.instagram.com/Beinghardikk/',
  twitter: 'https://twitter.com/hardikkothari8',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Only live in JS world. Hands-on experience in Ionic , Angular , React , Xamarin , Electron , Vue , Rxjs , NGRX , Redux , Mobex , Vuex , Typescript , Webpack , Node JS , MEAN Stack , MERN Stack , Rest API, AWS services.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web , mobile and desktop applications"
    ),
    emoji("⚡ Experience in configuration of automated build process for creating MAC/Window/Linux distribution package"),
    emoji(
      "⚡ Integration of third party services such as Firebase, Intercom , Mixpanel, Fullstory, Sentry, amplitude and many more to track app performance and user's feedbacks."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "styled component",
      fontAwesomeClassname: "fas fa-palette"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "react native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular7",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "electronjs",
      fontAwesomeClassname: "fas fa-atom"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "intercom",
      fontAwesomeClassname: "fab fa-intercom"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },{
      skillName: "AWS services",
      fontAwesomeClassname: "fab fa-aws"      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "K S School of Business Management and Technical Research",
      logo: require("./assets/images/kscollge.jpeg"),
      subHeader: "Master of Science in Information Technology (Msc.IT)",
      duration: "2014 - 2016",
      desc: "3.31 GPA out of 5",
      descBullets: []
    },
    {
      schoolName: "K S School of Business Management and Technical Research",
      logo:require("./assets/images/kscollge.jpeg"),
      subHeader: "Bachelor of Science in Information Technology (Bsc.IT)",
      duration: "2011 - 2014",
      desc: "3.47 GPA out of 5",
      descBullets: []
    },
    {
      schoolName: "RajstRajasthan English Higher Secondary School (RHHS)",
      logo: require("./assets/images/rhhs.jpeg"),
      subHeader: "HSC",
      duration: "2010 - 2011",
      desc: "84.33%",
      descBullets: []
    },
    {
      schoolName: "Rajasthan English Higher Secondary School (RHHS)",
      logo: require("./assets/images/rhhs.jpeg"),
      subHeader: "SSC",
      duration: "2008 - 2009",
      desc: "86.09%",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tech Lead",
      company: "Simform",
      companylogo: require("./assets/images/simform.png"),
      date: "January 2022 – Present",
      desc: "This year I got promoted to Tech lead and was assigned to Hopscotch. It is a fin-tech application. I developed this project from the scratch and after getting some funding  Now, I am developing as well as managing a small team of 20 members with QA, Frontend, and backend. Major roles & responsibilities in this project are client communication, requirement gathering, sprint grooming, constantly communicating and supporting onshore's backend team, managing team, and release process on DEV, QAT, UAT, and PROD.",
    //   descBullets: [
    //   "Involved in sprint planning, sprint grooming, and code review process",      
    //   "Communicate with backend team constantly and discussion on the features to achieve a complete features.",      
    // ]
    },
    {
      role: "Lead Engineer",
      company: "Simform",
      companylogo: require("./assets/images/simform.png"),
      date: "January 2021 – December 2021",
      desc: "Simform takeover the Cloud-magic and I was assigned to the \"Newton Mail app\".Newton is email based product that provides many features like read receipts, link receipts, and shortcuts etc. I was the only developer for the desktop side build development(IOS, Windows, Linux). Major roles & responsibilities are communication with the CEO (Maitrik Katariya) and team, constantly supporting the backend team, release window, mac, Linux, Mac M1 & M2, and customer support for debugging the issue. ",
    //   descBullets: [
    //   "Involved in sprint planning, sprint grooming, and code review process",
    //   "Experience in handling the team and deliver a sprint goal within the time in the Agile Working environment.",
    //   "Experience in configuration of automated build process for creating MAC/Window/Linux distribution package",
    //   "Communicate with backend team constantly and discussion on the features to achieve a complete features."
    // ]
    },
    {
      role: "Fullstack Developer",
      company: "Simform",
      companylogo: require("./assets/images/simform.png"),
      date: "January 2019 – December 2020",
      desc: "I joined Simform as Fullstack developer but mostly I worked in the desktop applications which based on ElectronJS Framework.I was assigned into the Slack-backed \"YAC\" for 1 and half year which is a voice messaging app.It is developed by me from the scratch.I was the key developer in desktop app side development.Major roles & responsibilities are communication with CEO (Justin mitchell), contantly working with backend onshore team in USA, release build Mac and Windows",
      // descBullets: [
      //   "Communication with clients and parity with developer(US Team) to achieve client goals",
      //   "Created a automated build process for creating MAC/Window/Linux distribution package",
      //   "Communicate with backend team constantly and discussion on the features to achieve a complete features.",
      //   "Coordination with various teams for the successful delivery of the product"
      // ]
    },
    {
      role: "Senior Mobile Application Developer",
      company: "BiztechCS",
      companylogo: require("./assets/images/biztech.png"),
      date: "July 2018 – May 2019",
      desc: "I joined Biztech as junior software engineer and in the three years, I was lead JS Department.I worked in many of front end technologies like Ionic , AngularJS, Angular2, TypeScript, electron and Xamarin, RXJS, NGRX. I was part of the Major project of the company the name was \"Water Expert\" which was a enterprise level IOT app.In that my role was mobile app developer.",
      // descBullets:[
      //     "Participating in requirement gathering, converting requirements into a technical specification and sprint planning",
      //     "Experience in handling the team and deliver a sprint goal within the time in the Agile Working environment.",
      //     "Involved in sprint planning, sprint grooming, and code review process",
      //     "Managed the automated release process for mobile applications and desktop applications",
      //     "Trained to junior engineers and freshers", 
      //     "Setup front end project architectures with CICD",
      // ]
    },
    {
      role: "Software Engineer",
      company: "BiztechCS",
      companylogo: require("./assets/images/biztech.png"),
      date: "January 2017 – January 2018",
      desc: "I switched my technology and start to work on Ionic, Electron , Angular JS. I was allocated in major project of the comapny."
    },
    {
      role: "Junior Software Engineer",
      company: "BiztechCS",
      companylogo: require("./assets/images/biztech.png"),
      date: "January 2016 – January 2017",
      desc: "I started my journy with junior software engineer in Dot Net Technologies like C#, Xamarin, Windows Universal app"
    },
    {
      role: "Intern",
      company: "Bhaskaracharya Institute For Space Applications and Geo-Informatics",
      companylogo: require("./assets/images/bisag.jpeg"),
      date: "January 2015 – January 2015",
      desc: "In BISAG I was joined as intern for the 4th year's college project.There I allocated in \"Workplace\" project which was based on .Net web application with MVC, Razor, Sql Server 2012, Fusion chart.",
    },
    {
      role: "Intern",
      company: "Dexter Consultancy Pvt. Ltd.",
      companylogo: require("./assets/images/dexter.jpeg"),
      date: "January 2013 – January 2013",
      desc: "Dexter company is a research & IT company and I started my career as Intern with this company in ASP.Net Technology. There I worked in coaching institute project which was based on ASP.Net web application with c#,Sql server 2008 and structured in three tier architecture."
    },  
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "hardikk94", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  // title: "SERVICES",
  // subtitle: "I can make this awesome things",
  // projects: [
  //   {
  //     image: require("./assets/images/service2.jpeg"),
  //     projectName: "Web Development",
  //     projectDesc: "A complete web app solution for business",
  //     footerLink: [      
  //     ]
  //   },
  //   {
  //     image: require("./assets/images/service1.jpeg"),
  //     projectName: "Mobile & Desktop App Development",
  //     projectDesc: "A complete mobile & Desktop app solution for business",
  //     footerLink: [     
  //     ]
  //   },
  //   {
  //     image: require("./assets/images/service3.jpeg"),
  //     projectName: "Web Designing",
  //     projectDesc: "A complete web designing solution for business",
  //     footerLink: [     
  //     ]
  //   },
  //   {
  //     image: require("./assets/images/service4.jpeg"),
  //     projectName: "Software Development",
  //     projectDesc: "A complete software development solution for business",
  //     footerLink: [     
  //     ]
  //   },    
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Achievement in Learning & Development",
      subtitle:
        "Awarded for \"Achievement in Learning & Development\" in the year of 2018 by Biztech.",
      image: require("./assets/images/cert1.JPG"),
      footerLink: [  
      ]
    },
    {
      title: "Master Electron: Desktop Apps with HTML, JavaScript & CSS",
      subtitle:
        "Certfied for electron framework with HTML, Javscript, CSS by Udemy ",
      image: require("./assets/images/udemy.jpeg"),
      footerLink: [
        {
          name: "View Certificate",
          url:
            "https://www.udemy.com/certificate/UC-258a1b0a-ec45-4b18-8b8c-215329a01d59/"
        }
      ]
    },
    {
      title: "Unsung Hero",
      subtitle:
        "Nominated for \"Unsung Hero\" in 2017 for providing a significant contribution in the year of 2017 by Biztech ",
      image: require("./assets/images/cert2.JPG"),
      footerLink: [   
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+91) 7016533746",
  email_address: "hardikkothari46@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "hardikkothari8", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
