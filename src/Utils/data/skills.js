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
      techLead: {
        title: "Technical Lead",
        shortTitle: "Tech Lead",
      },
      devLead: {
        title: "Development Lead",
        shortTitle: "Dev Lead",
      },
      agile: {
        title: "Agile Methodologies",
        shortTitle: "Agile",
      },
      scrumMaster: {
        title: "Scrum Master",
      },
      triage: {
        title: "Triage",
      },
      prioritization: {
        title: "Prioritization",
      },
      userStories: {
        title: "User Story Development",
        shortTitle: "User Stories",
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
      docs: {
        title: "Documentation Writing",
        shortTitle: "Doc Writing",
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
      django: {
        title: "Django",
      },
      vue: {
        title: "Vue JS",
        shortTitle: "Vue",
      },
      wpthemes: {
        title: "WordPress Themes",
        shortTitle: "WP Themes",
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
      python: {
        title: "Python",
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
      wpplugin: {
        title: "WordPress Plugin",
        shortTitle: "WP Plugin",
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
      wordpress: {
        title: "WordPress CMS",
        shortTitle: "WordPress",
      },
      joomla: {
        title: "Joomla CMS",
        shortTitle: "Joomla",
      },
      tridion: {
        title: "Tridion CMS",
        shortTitle: "Tridion",
      },
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
      usability: {
        title: "Usability",
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
      dreamweaver: {
        title: "Dreamweaver",
        deprecated: true,
      },
      notepad: {
        title: "Notepad++",
        deprecated: true,
      },
      git: {
        title: "git",
      },
      gitLab: {
        title: "GitLab",
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
      svn: {
        title: "SVN",
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
