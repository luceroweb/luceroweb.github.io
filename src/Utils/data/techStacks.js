import skills from "./skills";

const techStacks = {
  title: "Technology Stacks",
  shortTitle: "Tech Stacks",
  class: "group2",
  values: {
    mern: {
      title: "MERN Stack",
      shortTitle: "MERN",
      class: "group2",
      technologies: [
        skills.backend.values.mongo,
        skills.backend.values.express,
        skills.frontend.values.react,
        skills.frontend.values.native,
        skills.backend.values.node,
        skills.fundamentals.values.html,
        skills.javascript.values.handlebars,
        skills.javascript.values.javascript,
      ],
    },
    lamp: {
      title: "WordPress LAMP Stack",
      shortTitle: "LAMP",
      class: "group2",
      technologies: [
        skills.backend.values.php,
        skills.backend.values.mysql,
        skills.fundamentals.values.html,
        skills.uiux.values.css,
        skills.fundamentals.values.bootstrap,
        skills.javascript.values.javascript,
        skills.javascript.values.jquery,
      ],
    },
    djangoVue: {
      title: "Django/Vue Stack",
      shortTitle: "Django/Vue",
      class: "group2",
      technologies: [
        skills.backend.values.sql,
        skills.backend.values.python,
        skills.frontend.values.django,
        skills.frontend.values.vue,
        skills.fundamentals.values.bootstrap,
        skills.javascript.values.javascript,
        skills.fundamentals.values.html,
        skills.uiux.values.css,
      ],
    },
    dotnet: {
      title: ".NET Front End",
      class: "group2",
      technologies: [
        skills.backend.sql,
        skills.fundamentals.html,
        skills.uiux.css,
        skills.javascript.javascript,
        skills.javascript.jquery,
      ],
    },
    joomla: {
      title: "Joomla CMS",
      shortTitle: "Joomla",
      class: "group2",
      deprecated: true,
      technologies: [
        skills.backend.php,
        skills.backend.sql,
        skills.fundamentals.html,
        skills.fundamentals.css,
        skills.javascript.values.jquery,
      ],
    },
  },
};

export default techStacks;
