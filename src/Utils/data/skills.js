const skills = {
  management: {
    title: "Management",
    values: {
      manager: {
        title: "Manager",
      },
      lead: {
        title: "Apprentice Lead",
        shortTitle: "Lead",
      },
      agile: {
        title: "Agile Methodologies",
        shortTitle: "Agile",
      },
      scrumMaster: {
        title: "Scrum Master",
      },
    },
  },
  fundamentals: {
    title: "Web Fundamentals",
    shortTitle: "Fundamentals",
    values: {
      html: {
        title: "HTML",
      },
      audio: {
        title: "Audio Tag",
        shortTitle: "<audio>",
      },
      video: {
        title: "Video Tag",
        shortTitle: "<video>",
      },
      css: {
        title: "CSS",
      },
      sass: {
        title: "SASS",
      },
      bootstrap: {
        title: "Bootstrap",
      },
    },
  },
  javascript: {
    title: "JavaScript Fundamentals",
    shortTitle: "JavaScript",
    values: {
      javascript: {
        title: "JavaScript",
        shortTitle: "JS",
      },
      jquery: {
        title: "jQuery",
      },
      fetch: {
        title: "Fetch",
      },
      axios: {
        title: "Axios",
      },
    },
  },
  frontend: {
    title: "Front End Web Development",
    shortTitle: "Front End",
    values: {
      react: {
        title: "React",
      },
      native: {
        title: "React-Native",
        shortTitle: "Native",
      },
      typescript: {
        title: "TypeScript",
        shortTitle: "TS",
      },
      redux: {
        title: "Redux Toolkit",
        shortTitle: "Redux",
      },
      handlebars: {
        title: "Handlebars",
      },
    },
  },
  backend: {
    title: "Back End Web Development",
    shortTitle: "Back End",
    values: {
      node: {
        title: "Node",
      },
      npm: {
        title: "npm",
      },
      yarn: {
        title: "yarn",
      },
      express: {
        title: "Express",
      },
      php: {
        title: "PHP",
      },
      mongo: {
        title: "Mongo DB",
        shortTitle: "Mongo",
      },
      sql: {
        title: "SQL",
      },
      mysql: {
        title: "MySQL",
      },
      apis: {
        title: "APIs",
      },
    },
  },
  serverless: {
    title: "Could Computing/Serverless Technologies",
    shortTitle: "Serverless",
    values: {
      s3: {
        title: "AWS S3",
        shortTitle: "S3",
      },
      lambda: {
        title: "AWS Lambda",
        shortTitle: "Lambda",
      },
      firebaseAuth: {
        title: "Google Firebase Authentication",
        shortTitle: "Firebase Auth",
      },
    },
  },
  operatingSystems: {
    title: "Operating Systems",
    shortTitle: "OS's",
    values: {
      linux: {
        title: "Linux",
      },
      windows: {
        title: "Windows",
      },
      android: {
        title: "Android",
      },
      ios: {
        title: "iOS",
      },
      macos: {
        title: "MacOS",
      },
    },
  },
  uiux: {
    title: "User Experience/User Interface",
    shortTitle: "UX/UI",
    values: {
      photoshop: {
        title: "Adobe Photoshop",
        shortTitle: "Photoshop",
      },
      figma: {
        title: "Figma",
      },
      accessibility: {
        title: "Web Accessibility",
        shortTitle: "Accessibility",
      },
      responsiveness: {
        title: "Mobile/Web Responsiveness",
        shortTitle: "Responsive",
      },
      crossbrowser: {
        title: "Cross Browser Optimization",
        shortTitle: "Browser Optimization",
      },
      flash: {
        title: "Adobe Flash",
        shortTitle: "Flash",
        deprecated: true,
      },
      contribute: {
        title: "Adobe Contribute",
        shortTitle: "Contribute",
        deprecated: true,
      },
    },
  },
  devTools: {
    title: "Web Development Tools",
    shortTitle: "Dev Tools",
    values: {
      vscode: {
        title: "VS Code",
      },
      visualstudio: {
        title: "Visual Studio",
      },
      notepadd: {
        title: "Notepad++",
      },
      git: {
        title: "git",
      },
      github: {
        title: "GitHub",
      },
      bitbucket: {
        title: "Bitbucket",
      },
      codecommit: {
        title: "AWS Code Commit",
        shortTitle: "Code Commit",
      },
    },
  },
};

const groupClassNames = [
  { group: "management", className: "group1" },
  { group: "fundamentals", className: "group3" },
  { group: "javascript", className: "group4" },
  { group: "frontend", className: "group5" },
  { group: "backend", className: "group6" },
  { group: "serverless", className: "group7" },
  { group: "operatingSystems", className: "group8" },
  { group: "uiux", className: "group9" },
  { group: "devTools", className: "group10" },
];

const defineClassName = (group, className) => {
  skills[group].class = className;
  const values = skills[group].values;
  Object.keys(values).forEach((key) => {
    values[key].class = className;
  });
};

const setGroupClassNames = () => {
  groupClassNames.forEach((group) => {
    defineClassName(group.group, group.className);
  });
};
setGroupClassNames();

export default skills;
