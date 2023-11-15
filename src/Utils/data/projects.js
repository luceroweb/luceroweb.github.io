import proficiencies from "./proficiencies";
import techStacks from "./techStacks";

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
    parent: "alphaworks",
    slug: "karotsavingsmart",
    stack: [
      proficiencies.serverless.values.firebaseAuth,
      proficiencies.frontend.values.native,
      proficiencies.frontend.values.redux,
      proficiencies.frontend.values.typescript,
      proficiencies.javascript.values.axios,
      proficiencies.fundamentals.values.html,
      proficiencies.fundamentals.values.css,
    ],
    shortStack: [
      proficiencies.serverless.values.firebaseAuth,
      proficiencies.frontend.values.native,
      proficiencies.frontend.values.redux,
      proficiencies.frontend.values.typescript,
    ],
    uri: "https://karot-saving-smart.netlify.app/",
    code: "https://github.com/luceroweb/karot-saving-smart",
  },
  {
    title: "Trivia & Chill",
    description: "Movie Trivia Game",
    thumb: triviachill,
    parent: "alphaworks",
    slug: "triviachill",
    stack: [
      proficiencies.frontend.values.react,
      proficiencies.frontend.values.redux,
      proficiencies.javascript.values.axios,
      proficiencies.fundamentals.values.html,
      proficiencies.fundamentals.values.css,
    ],
    uri: "https://luceroweb.github.io/trivia-and-chill/",
    code: "https://github.com/luceroweb/trivia-and-chill",
  },
  {
    title: "Haunted House Game",
    description: "Choose your own adventure game",
    thumb: hauntedhouse,
    parent: "alphaworks",
    slug: "hauntedhousegame",
    stack: [
      proficiencies.frontend.values.react,
      proficiencies.fundamentals.values.html,
      proficiencies.fundamentals.values.css,
      proficiencies.fundamentals.values.audio,
      proficiencies.fundamentals.values.video,
    ],
    shortStack: [
      proficiencies.frontend.values.react,
      proficiencies.fundamentals.values.html,
      proficiencies.fundamentals.values.css,
    ],
    uri: "https://luceroweb.github.io/haunted-house-game",
    code: "https://github.com/luceroweb/haunted-house-game",
  },
  {
    title: "WordPress Plugin",
    description: "for Content.ad",
    thumb: wpplugin,
    parent: "content-ad",
    slug: "wordpressplugin",
    stack: [
      techStacks.values.lamp,
      proficiencies.backend.values.php,
      proficiencies.fundamentals.values.html,
      proficiencies.fundamentals.values.css,
      proficiencies.javascript.values.jquery,
    ],
    uri: "https://wordpress.org/plugins/contentad/",
    uriLabel: "Plugin",
    code: "https://plugins.trac.wordpress.org/browser/contentad/",
    codeIcon: `bi-wordpress`,
  },
  {
    title: "JavaScript Ad Widgets",
    description: "for Content.ad",
    thumb: jswidgets,
    parent: "content-ad",
    slug: "javascriptadwidgets",
    stack: [
      proficiencies.javascript.values.javascript,
      proficiencies.serverless.values.s3,
      proficiencies.uiux.values.photoshop,
      proficiencies.fundamentals.values.html,
      proficiencies.fundamentals.values.css,
    ],
  },
  {
    title: "RemoteLive",
    description: "Your Disklavier plays along",
    thumb: remotelive,
    parent: "yamaha",
    slug: "remotelive",
    stack: [
      techStacks.values.dotnet,
      proficiencies.fundamentals.values.html,
      proficiencies.fundamentals.values.css,
      proficiencies.javascript.values.jquery,
    ],
  },
  {
    title: "AVENTAGE",
    description: "Yamaha Receivers",
    thumb: aventage,
    parent: "yamaha",
    slug: "aventage",
    stack: [
      proficiencies.uiux.values.flash,
      proficiencies.fundamentals.values.html,
      proficiencies.javascript.values.jquery,
    ],
  },
  {
    title: "United Security Bank",
    description: "WordPress marketing site",
    thumb: usb,
    parent: "edesign",
    slug: "unitedsecuritybank",
    stack: [
      techStacks.values.joomla,
      proficiencies.backend.values.php,
      proficiencies.backend.values.sql,
      proficiencies.fundamentals.values.html,
      proficiencies.fundamentals.values.css,
    ],
  },
  {
    title: "SAFE:",
    description: "Straight Advocates for Equality",
    thumb: safe,
    parent: "lucerowebdesign",
    slug: "straightadvocatesforequality",
    stack: [
      techStacks.values.lamp,
      proficiencies.backend.values.php,
      proficiencies.backend.values.mysql,
      proficiencies.fundamentals.values.html,
      proficiencies.fundamentals.values.css,
      proficiencies.javascript.values.jquery,
    ],
  },
  {
    title: "Meet in the Middle 4 Equality",
    thumb: meetinthemiddle,
    parent: "lucerowebdesign",
    slug: "meetinthemiddle4equality",
    stack: [
      techStacks.values.joomla,
      proficiencies.uiux.values.flash,
      proficiencies.backend.values.php,
      proficiencies.backend.values.sql,
      proficiencies.fundamentals.values.html,
      proficiencies.fundamentals.values.css,
      proficiencies.javascript.values.jquery,
    ],
  },
  {
    title: "Smittcamp Family:",
    description: "CSU, Fresno Honors College",
    thumb: smittcamp,
    parent: "csufresno",
    slug: "smittcamp",
    stack: [
      proficiencies.uiux.values.flash,
      proficiencies.uiux.values.contribute,
      proficiencies.fundamentals.values.html,
      proficiencies.fundamentals.values.css,
      proficiencies.javascript.values.jquery,
    ],
  },
];

export default projects;
