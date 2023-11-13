// Project Thumbnail Images
import wpplugin from "../../Components/Portfolio/ContentAdWordPressPlugin/screenshot-1.png";
import jswidgets from "../../Components/Portfolio/ContentAdWidgets/mobileslideup.jpeg";
import remotelive from "../../Components/Portfolio/RemoteLive/remotelive_thumb.jpg";
import aventage from "../../Components/Portfolio/Aventage/aventage_thumb.jpg";
import usb from "../../Components/Portfolio/UnitedSecurityBank/usb_thumb.jpg";
import smittcamp from "../../Components/Portfolio/Smittcamp/smittcamp_thumb.jpg";
import safe from "../../Components/Portfolio/StraightAdvocatesForEquality/layout_thumb.jpg";
import meetinthemiddle from "../../Components/Portfolio/MeetInTheMiddle4Equality/meetinthemiddle_thumb.jpg";
import karot from "../../Components/Portfolio/Karot/karot1login.png";
import triviachill from "../../Components/Portfolio/Trivia&Chill/tc0title.png";
import hauntedhouse from "../../Components/Portfolio/HauntedHouse/hh1intro.png";

const projects = [
  {
    title: "Karot: Saving Smart.",
    description: "An envelope savings app",
    thumb: karot,
    stack: [
      proficiencies.serverless.firebaseAuth,
      proficiencies.frontend.native,
      proficiencies.frontend.redux,
      proficiencies.javascript.typescript,
      proficiencies.javascript.axios,
      proficiencies.fundamentals.html,
      proficiencies.fundamentals.css,
    ],
    shortStack: [
      proficiencies.serverless.firebaseAuth,
      proficiencies.frontend.native,
      proficiencies.frontend.redux,
      proficiencies.javascript.typescript,
    ],
    uri: "https://karot-saving-smart.netlify.app/",
    code: "https://github.com/luceroweb/karot-saving-smart",
    details: "/portfolio/karotsavingsmart",
  },
  {
    title: "Trivia & Chill",
    description: "Movie Trivia Game",
    thumb: triviachill,
    stack: [
      proficiencies.frontend.react,
      proficiencies.frontend.redux,
      proficiencies.javascript.axios,
      proficiencies.fundamentals.html,
      proficiencies.fundamentals.css,
    ],
    uri: "https://luceroweb.github.io/trivia-and-chill/",
    code: "https://github.com/luceroweb/trivia-and-chill",
    details: "/portfolio/triviachill",
  },
  {
    title: "Haunted House Game",
    description: "Choose your own adventure game",
    thumb: hauntedhouse,
    stack: [
      proficiencies.frontend.react,
      proficiencies.fundamentals.html,
      proficiencies.fundamentals.css,
      proficiencies.fundamentals.audio,
      proficiencies.fundamentals.video,
    ],
    shortStack: [
      proficiencies.frontend.react,
      proficiencies.fundamentals.html,
      proficiencies.fundamentals.css,
    ],
    uri: "https://luceroweb.github.io/haunted-house-game",
    code: "https://github.com/luceroweb/haunted-house-game",
    details: "/portfolio/hauntedhousegame",
  },
  {
    title: "WordPress Plugin",
    description: "for Content.ad",
    thumb: wpplugin,
    stack: [
      techStacks.wordpress,
      proficiencies.backend.php,
      proficiencies.fundamentals.html,
      proficiencies.fundamentals.css,
      proficiencies.javascript.jquery,
    ],
    uri: "https://wordpress.org/plugins/contentad/",
    uriLabel: "Plugin",
    code: "https://plugins.trac.wordpress.org/browser/contentad/",
    codeIcon: `<i class="bi bi-wordpress"></i>`,
    details: "/portfolio/wordpressplugin",
  },
  {
    title: "JavaScript Ad Widgets",
    description: "for Content.ad",
    thumb: jswidgets,
    stack: [
      proficiencies.javascript.javascript,
      proficiencies.serverless.s3,
      proficiencies.uiux.photoshop,
      proficiencies.fundamentals.html,
      proficiencies.fundamentals.css,
    ],
    details: "/portfolio/javascriptadwidgets",
  },
  {
    title: "RemoteLive",
    description: "Your Disklavier plays along",
    thumb: remotelive,
    stack: [
      techStacks.dotnet,
      proficiencies.fundamentals.html,
      proficiencies.fundamentals.css,
      proficiencies.javascript.jquery,
    ],
    details: "/portfolio/remotelive",
  },
  {
    title: "AVENTAGE",
    description: "Yamaha Receivers",
    thumb: aventage,
    stack: [
      proficiencies.uiux.flash,
      proficiencies.fundamentals.html,
      proficiencies.javascript.jquery,
    ],
    details: "/portfolio/aventage",
  },
  {
    title: "United Security Bank",
    description: "WordPress marketing site",
    thumb: usb,
    stack: [
      techStacks.joomla,
      proficiencies.backend.php,
      proficiencies.backend.sql,
      proficiencies.fundamentals.html,
      proficiencies.fundamentals.css,
    ],
    details: "/portfolio/unitedsecuritybank",
  },
  {
    title: "SAFE:",
    description: "Straight Advocates for Equality",
    thumb: safe,
    stack: [
      techStacks.wordpress,
      proficiencies.backend.php,
      proficiencies.backend.mysql,
      proficiencies.fundamentals.html,
      proficiencies.fundamentals.css,
      proficiencies.javascript.jquery,
    ],
    details: "/portfolio/straightadvocatesforequality",
  },
  {
    title: "Meet in the Middle 4 Equality",
    thumb: meetinthemiddle,
    stack: [
      techStacks.joomla,
      proficiencies.uiux.flash,
      proficiencies.backend.php,
      proficiencies.backend.sql,
      proficiencies.fundamentals.html,
      proficiencies.fundamentals.css,
      proficiencies.javascript.jquery,
    ],
  },
  {
    title: "Smittcamp Family:",
    description: "CSU, Fresno Honors College",
    thumb: smittcamp,
    stack: [
      proficiencies.uiux.flash,
      proficiencies.uiux.conribute,
      proficiencies.fundamentals.html,
      proficiencies.fundamentals.css,
      proficiencies.javascript.jquery,
    ],
  },
];

export default projects;
