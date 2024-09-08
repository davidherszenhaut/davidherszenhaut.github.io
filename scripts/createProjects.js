export function createProjects() {

  const projects = [
    {
      "name": "Pokédex",
      "stack": [
        "react",
        "typescript",
        "tailwind",
        "headless ui"
      ],
      "description": "A place where people can see details about their favorite Pokémon.",
      "links": {
        "code": "https://github.com/davidherszenhaut/pokedex",
        "demo": "https://davidherszenhaut.github.io/pokedex/"
      },
      "img": {
        "src": "/images/pokedex.gif",
        "alt": "A demonstration of Pokédex the project"
      }
    },
    {
      "name": "rollgraph",
      "stack": [
        "react",
        "d3.js",
        "typescript"
      ],
      "description": "A website to display data visualizations based on simulated dice rolls. The projects integrates GitHub Actions to check pull requests (using Jest, ESLint, and Prettier) and automatically deploy on merges.",
      "links": {
        "code": "https://github.com/davidherszenhaut/rollgraph",
        "demo": "https://davidherszenhaut.github.io/rollgraph/"
      },
      "img": {
        "src": "/images/rollgraph.gif",
        "alt": "A demonstration of the rollgraph project"
      }
    },
    {
      "name": "Paintr",
      "stack": [
        "java"
      ],
      "description": "A simple drawing program built from the ground up using the Swing toolkit for Java. Functionality includes saving and loading multiple canvases, right click gestures via the $1 recognizer algorithm, snap-to-grid movement, and canvas switching animations.",
      "links": { },
      "img": {
        "alt": "TODO"
      }
    },
    {
      "name": "SmarTrek",
      "stack": [
        "react",
        "react-bootstrap",
        "python"
      ],
      "description": "SmarTrek is a web application built for the Summer 2019 ITC Hackathon that helps you pick the safest route to your destination using data from the NYPD Traffic and Google Maps APIs. Supports several routes for each mode of transportation: walking, bicycling, driving, and public transit.",
      "links": {
        "code": "https://github.com/ethanbin/SmarTrek/tree/master/smartrek-web-app"
      },
      "img": {
        "alt": "TODO"
      }
    },
    {
      "name": "Dungeon Crawler",
      "stack": [
        "unity",
        "c#"
      ],
      "description": "A basic action role-playing game where you take control of a knight fighing different monsters on your way to treasure.",
      "links": {
        "code": "https://github.com/CS-4455-Team-Yellow-Submarine/Dungeon-Crawler"
      },
      "img": {
        "alt": "TODO"
      }
    },
    {
      "name": "OpenEval",
      "stack": [
        "node.js",
        "mongodb",
        "bootstrap",
        "handlebars"
      ],
      "description": "An anonymous survey web application that allows Georgia Tech professors to receive feedback on their teaching.",
      "links": {
        "code": "https://github.com/davidherszenhaut/OpenEvalWebApplication"
      },
      "img": {
        "alt": "TODO"
      }
    },
    {
      "name": "Possibility of Precipitation",
      "stack": [
        "c"
      ],
      "description": "A Game Boy Advance game written in C that takes inspiration from the game 'Risk of Rain'.",
      "links": { },
      "img": {
        "alt": "TODO"
      }
    },
    {
      "name": "Dota Data",
      "stack": [
        "d3.js",
        "html5",
        "css3",
        "javascript"
      ],
      "description": "Data visualizations based on video game statistics.",
      "links": {
        "demo": "https://davidherszenhaut.github.io/dota-data/",
        "code": "https://github.com/davidherszenhaut/dota-data"
      },
      "img": {
        "alt": "TODO"
      }
    },
    {
      "name": "PyBot",
      "stack": [
        "python",
        "sqlite"
      ],
      "description": "A chat bot for Discord built using the discord.py API wrapper.",
      "links": {},
      "img": {
        "alt": "TODO"
      }
    },
    {
      "name": "metal_concerts",
      "stack": [
        "python"
      ],
      "description": "A Python script to find interesting metal concerts near me.",
      "links": {
        "code": "https://github.com/davidherszenhaut/metal_concerts"
      },
      "img": {
        "alt": "TODO"
      }
    },
    {
      "name": "Word Clock",
      "stack": [
        "html5",
        "css3",
        "javascript"
      ],
      "description": "A clock that tells time with words.",
      "links": {
        "demo": "https://davidherszenhaut.github.io/wordclock/",
        "code": "https://github.com/davidherszenhaut/wordclock"
      },
      "img": {
        "src": "/images/wordclock.png",
        "alt": "A screenshot of the Word Clock project"
      }
    },
    {
      "name": "hex2rgb",
      "stack": [
        "html5",
        "css3",
        "javascript"
      ],
      "description": "A tool to convert a color code from hexadecimal to RGB.",
      "links": {
        "demo": "https://davidherszenhaut.github.io/hex2rgb/",
        "code": "https://github.com/davidherszenhaut/hex2rgb"
      },
      "img": {
        "src": "/images/hex2rgb.png",
        "alt": "A screenshot of the hex2rgb project"
      }
    },
    {
      "name": "hexclock",
      "stack": [
        "html5",
        "css3",
        "javascript"
      ],
      "description": "A hexadecimal clock that changes color with each passing second.",
      "links": {
        "demo": "https://davidherszenhaut.github.io/hexclock/",
        "code": "https://github.com/davidherszenhaut/hexclock"
      },
      "img": {
        "src": "/images/hexclock.png",
        "alt": "A screenshot of the hexclock project"
      }
    },
    {
      "name": "Flask Web Application",
      "stack": [
        "html5",
        "css3",
        "python"
      ],
      "description": "A simple website built using the Flask framework.",
      "links": {
        "code": "https://github.com/davidherszenhaut/hexclock"
      },
      "img": {
        "alt": "TODO"
      }
    }
  ];


  projects.forEach((project) => createProject(project));
}

function createProject(project) {
  // console.log(project);
  const projectDiv = document.createElement("div");
  
  // name
  const projectName = document.createTextNode(project.name);
  projectDiv.appendChild(projectName);
  
  // links
  if (Object.keys(project.links).length !== 0) {
    const projectLinks = createLinks(project.links);
    projectDiv.appendChild(projectLinks);
  }

  // stack
  const stack = createStack(project.stack);
  projectDiv.appendChild(stack);

  // description
  const projectDescription = document.createTextNode(project.description);
  projectDiv.appendChild(projectDescription);

  // screenshot
  if (project.img.alt !== "TODO") {
    const projectImage = document.createElement("img");
    projectImage.src = project.img.src;
    projectImage.alt = project.img.alt;
    projectDiv.appendChild(projectImage);
  }

  document.body.appendChild(projectDiv);
}

function createLinks(links) {
  const linksDiv = document.createElement("div");

  if ("demo" in links) {
    const demoLink = document.createElement("a");
    const demoLinkText = document.createTextNode("demo");
    demoLink.href = links["demo"];
    demoLink.appendChild(demoLinkText);
    linksDiv.appendChild(demoLink);
  }

  if ("code" in links) {
    const codeLink = document.createElement("a");
    const codeLinkText = document.createTextNode("code");
    codeLink.href = links["code"];
    codeLink.appendChild(codeLinkText);
    linksDiv.appendChild(codeLink);
  }

  return linksDiv;
}

function createStack(stack) {
  const stackDiv = document.createElement("div");
  const stackText = document.createTextNode(stack.join(", "));
  stackDiv.appendChild(stackText);
  return stackDiv;
}
