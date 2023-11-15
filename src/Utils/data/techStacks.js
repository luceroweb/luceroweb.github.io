import proficiencies from "./proficiencies";

const techStacks = {
  title: "Technology Stacks",
  shortTitle: "Tech Stacks",
  values: {
    mern: {
      title: "MERN Stack",
      shortTitle: "MERN",
      technologies: [
        proficiencies.backend.values.mongo,
        proficiencies.backend.values.express,
        proficiencies.frontend.values.react,
        proficiencies.frontend.values.native,
        proficiencies.backend.values.node,
        proficiencies.fundamentals.values.html,
        proficiencies.javascript.values.handlebars,
        proficiencies.javascript.values.javascript,
      ],
    },
    lamp: {
      title: "WordPress LAMP Stack",
      shortTitle: "LAMP",
      technologies: [
        proficiencies.backend.values.php,
        proficiencies.backend.values.mysql,
        proficiencies.fundamentals.values.html,
        proficiencies.uiux.values.css,
        proficiencies.fundamentals.values.bootstrap,
        proficiencies.javascript.values.javascript,
        proficiencies.javascript.values.jquery,
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
        proficiencies.javascript.values.jquery,
      ],
    },
  },
};

export default techStacks;
