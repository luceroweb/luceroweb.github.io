const techStacks = {
  title: "Technology Stacks",
  shortTitle: "Tech Stacks",
  values: {
    mern: {
      title: "MERN Stack",
      shortTitle: "MERN",
      technologies: [
        proficiencies.backend.mongo,
        proficiencies.backend.express,
        proficiencies.frontend.react,
        proficiencies.frontend.native,
        proficiencies.backend.node,
        proficiencies.fundamentals.html,
        proficiencies.javascript.handlebars,
        proficiencies.javascript.javascript,
      ],
    },
    lamp: {
      title: "WordPress LAMP Stack",
      shortTitle: "LAMP",
      technologies: [
        proficiencies.backend.php,
        proficiencies.backend.mysql,
        proficiencies.fundamentals.html,
        proficiencies.uiux.css,
        proficiencies.fundamentals.bootstrap,
        proficiencies.javascript.javascript,
        proficiencies.javascript.jquery,
      ],
    },
    dotnet: {
      title: ".NET",
      technologies: [
        proficiencies.backend.sql,
        proficiencies.fundamentals.html,
        proficiencies.uiux.css,
        proficiencies.javascript.javascript,
        proficiencies.javascript.jquery,
      ],
    },
    joomla: {
      title: "Joomla CMS",
      shortTitle: "Joomla",
      class: "group2",
      deprecated: true,
      technologies: [
        proficiencies.backend.php,
        proficiencies.backend.sql,
        proficiencies.fundamentals.html,
        proficiencies.fundamentals.css,
      ],
    },
  },
};

export default techStacks;
