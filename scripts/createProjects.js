export function createProjects() {

  const projects = [
    {
      "name": "Pokédex",
      "stack": [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Headless UI"
      ],
      "description": "A front end for PokéAPI where people can see details about their favorite Pokémon.",
      "links": {
        "code": "https://github.com/davidherszenhaut/pokedex",
        "demo": "https://davidherszenhaut.github.io/pokedex/"
      },
      "img": {
        "src": "/assets/projects/pokedex.gif",
        "alt": "A demonstration of Pokédex the project"
      }
    },
    {
      "name": "rollgraph",
      "stack": [
        "React",
        "D3.js",
        "TypeScript"
      ],
      "description": "A website to display data visualizations based on simulated dice rolls. The projects integrates GitHub Actions to check pull requests (using Jest, ESLint, and Prettier) and automatically deploy on merges.",
      "links": {
        "code": "https://github.com/davidherszenhaut/rollgraph",
        "demo": "https://davidherszenhaut.github.io/rollgraph/"
      },
      "img": {
        "src": "/assets/projects/rollgraph.gif",
        "alt": "A demonstration of the rollgraph project"
      }
    },
    {
      "name": "Paintr",
      "stack": [
        "Java"
      ],
      "description": "A drawing program built from the ground up using the Swing toolkit for Java. Functionality includes saving and loading multiple canvases, right click gestures via the $1 recognizer algorithm, snap-to-grid movement, and canvas switching animations.",
      "links": { },
      "img": {
        "alt": "TODO"
      }
    },
    {
      "name": "SmarTrek",
      "stack": [
        "React",
        "React-Bootstrap",
        "Python"
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
        "Unity",
        "C#"
      ],
      "description": "An action role-playing game where you take control of a knight fighing different monsters on your way to treasure.",
      "links": {
        "code": "https://github.com/CS-4455-Team-Yellow-Submarine/Dungeon-Crawler"
      },
      "img": {
        "src": "https://raw.githubusercontent.com/CS-4455-Team-Yellow-Submarine/Dungeon-Crawler/715a1d51698fc66f78743aba17c40315dd8c29df/Assets/Images/DungeonCrawler.png",
        "alt": "The splash screen of the Dungeon Crawler game"
      }
    },
    {
      "name": "OpenEval",
      "stack": [
        "Node.js",
        "MongoDB",
        "Bootstrap",
        "Handlebars"
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
        "C"
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
        "D3.js",
        "HTML5",
        "CSS",
        "JavaScript"
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
      "name": "pypass",
      "stack": [
        "Python"
      ],
      "description": "Generate passwords locally with Python's secrets module.",
      "links": {
        "code": "https://github.com/davidherszenhaut/pypass"
      },
      "img": {
        "alt": "TODO"
      }
    },
    {
      "name": "PyBot",
      "stack": [
        "Python",
        "SQLite"
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
        "Python"
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
      "name": "Color Clicker",
      "stack": [
        "HTML5",
        "CSS",
        "JavaScript"
      ],
      "description": "A colorful incremental game.",
      "links": {
        "demo": "https://davidherszenhaut.github.io/color-clicker/",
        "code": "https://github.com/davidherszenhaut/color-clicker"
      },
      "img": {
        "src": "/assets/projects/color-clicker.png",
        "alt": "A screenshot of the Color Clicker project"
      }
    },
    {
      "name": "Word Clock",
      "stack": [
        "HTML5",
        "CSS",
        "JavaScript"
      ],
      "description": "A clock that tells time with words.",
      "links": {
        "demo": "https://davidherszenhaut.github.io/wordclock/",
        "code": "https://github.com/davidherszenhaut/wordclock"
      },
      "img": {
        "src": "/assets/projects/wordclock.png",
        "alt": "A screenshot of the Word Clock project"
      }
    },
    {
      "name": "hex2rgb",
      "stack": [
        "HTML5",
        "CSS",
        "JavaScript"
      ],
      "description": "A tool to convert a color code from hexadecimal to RGB.",
      "links": {
        "demo": "https://davidherszenhaut.github.io/hex2rgb/",
        "code": "https://github.com/davidherszenhaut/hex2rgb"
      },
      "img": {
        "src": "/assets/projects/hex2rgb.png",
        "alt": "A screenshot of the hex2rgb project"
      }
    },
    {
      "name": "hexclock",
      "stack": [
        "HTML5",
        "CSS",
        "JavaScript"
      ],
      "description": "A hexadecimal clock that changes color with each passing second.",
      "links": {
        "demo": "https://davidherszenhaut.github.io/hexclock/",
        "code": "https://github.com/davidherszenhaut/hexclock"
      },
      "img": {
        "src": "/assets/projects/hexclock.png",
        "alt": "A screenshot of the hexclock project"
      }
    },
    {
      "name": "Flask Web Application",
      "stack": [
        "HTML5",
        "CSS",
        "Python"
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

  const main = document.getElementsByTagName("main")[0];
  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projects";
  projects.forEach((project) => {
    const projectDiv = createProject(project);
    projectsContainer.appendChild(projectDiv);
  });
  main.appendChild(projectsContainer);
}

function createProject(project) {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  
  // name
  const projectName = document.createElement("h2");
  const projectNameText = document.createTextNode(project.name);
  projectName.appendChild(projectNameText);
  projectDiv.appendChild(projectName);
  
  // description
  const projectParagraph = document.createElement("h3");
  const projectDescription = document.createTextNode(project.description);
  projectParagraph.appendChild(projectDescription);
  projectDiv.appendChild(projectParagraph);

  // links
  if (Object.keys(project.links).length !== 0) {
    const projectLinks = createLinks(project.links);
    projectDiv.appendChild(projectLinks);
  }

  // stack
  const stack = createStack(project.stack);
  projectDiv.appendChild(stack);

  // screenshot
  if (project.img.alt !== "TODO") {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const projectImage = document.createElement("img");
    projectImage.src = project.img.src;
    projectImage.alt = project.img.alt;
    imageContainer.appendChild(projectImage);
    projectDiv.appendChild(imageContainer);
  }

  return projectDiv;
}

function createLinks(links) {
  const linksDiv = document.createElement("div");

  if ("demo" in links) {
    const demoParagraph = document.createElement("p");
    const demoLink = document.createElement("a");
    const demoLinkText = document.createTextNode("demo");
    demoLink.href = links["demo"];
    demoLink.appendChild(demoLinkText);
    demoParagraph.appendChild(demoLink);
    linksDiv.appendChild(demoParagraph);
  }

  if ("code" in links) {
    const codeParagraph = document.createElement("p");
    const codeLink = document.createElement("a");
    const codeLinkText = document.createTextNode("code");
    codeLink.href = links["code"];
    codeLink.appendChild(codeLinkText);
    codeParagraph.appendChild(codeLink);
    linksDiv.appendChild(codeParagraph);
  }

  return linksDiv;
}

function createStack(stack) {
  const stackParagraph = document.createElement("p");
  const stackText = document.createTextNode("[ " + stack.join(", ") + " ]");
  stackParagraph.appendChild(stackText);
  return stackParagraph;
}
