export function createResume() {

  const experience = [
  {
    "title": "Automated Logic, Software Engineer",
      "date": "September 2021–Present",
      "text": [
        "More to come!"
      ]
  },
  {
    "title": "Zuora, Software Engineer",
    "date": "March 2020–September 2021",
    "text": [
      "Implemented line item payment processing for payment gateways to reduce credit card interchange fees",
    "Built integrations for alternative payment methods for payment service providers using Apache Velocity and REST APIs",
    "Created automated test plans to catch errors in development and prevent regressions in production",
    "Wrote technical specification documents with the support of product management",
    "Collaborated with customer support to diagnose and resolve customer issues in a timely manner"
    ]
  },
  {
    "title": "Anodot, Junior Software Developer Intern",
    "date": "June 2019–August 2019",
    "text": [
      "Developed new pages in existing React application to improve administrator workflow",
    "Improved user productivity by creating new API calls using Node.js and Redux",
    "Created Highcharts graphs to display live contract usage information in a convenient format"
    ]
  },
  {
    "title": "Georgia Tech Research Institute, Student Researcher",
    "date": "March 2018–July 2018",
    "text": [
      "Built a Django web application to demonstrate blockchain application’s proof of concept",
    "Assisted with research detailing the potential use of blockchain technology in healthcare",
    "Contributed to white paper discussing blockchain architecture and consensus protocols"
    ]
  }
  ];

  experience.forEach((job) => createJob(job));

  const skills = {
    "Programming Languages": [
      "JavaScript",
    "Java",
    "Python"
    ],
    "Libraries/Frameworks": [
      "React",
    "Redux",
    "Node.js",
    "Spring",
    "D3.js"
    ],
    "Tools": [
      "Git",
    "Linux (Debian and Fedora based)",
    "Perfoce"
    ],
    "Spoken Languages": [
      "English (Native)",
    "Portuguese (Conversational)",
    "Spanish (Beginner)"
    ]
  };

  for (const [skillType, skillList] of Object.entries(skills)) {
    const skillLine = createSkill(skillType, skillList);
    document.body.appendChild(skillLine);
  }

  const education = [
  {
    "name": "Georgia Institute of Technology",
      "date": "August 2014–December 2019",
      "text": [
        "Bachelor of Science in Computer Science",
      "3.74 Major GPA"
      ]
  }
  ];

  education.forEach((school) => createEducation(school));

  const extracurriculars = [
  {
    "name": "Georgia Tech Symphony Orchestra, Cellist",
      "date": "August 2014–May 2016"
  },
  {
    "name": "Georgia Tech Chamber Orchestra, Cellist",
    "date": "August 2015–May 2016"
  },
  {
    "name": "Under the Couch Musicians Club, Guitarist",
    "date": "August 2014–May 2015"
  },
  {
    "name": "Tri-M Music Honor Society, Secretary",
    "date": "August 2013–May 2014"
  },
  {
    "name": "Joseph Wheeler High School (Magnet Program), Volunteer Tutor",
    "date": "August 2013–May 2014"
  }
  ];

  extracurriculars.forEach((extra) => createExtra(extra));

  const coursework = {
    "cs": [
      "CS 1371 - Computing for Engineers",
    "CS 2050 - Introduction to Discrete Mathematics",
    "CS 1331 - Introduction to Object Oriented Programming",
    "CS 1332 - Data Structures and Algorithms",
    "CS 2340 - Objects and Design",
    "CS 4001 - Computing and Society",
    "CS 3311 - Project Design",
    "CS 3312 - Project Implementation",
    "CS 2261 - Media Device Architecture",
    "CS 3451 - Computer Graphics",
    "CS 4590 - Computer Audio",
    "CS 3750 - User Interface Design",
    "CS 4460 - Introduction to Information Visualization",
    "CS 4470 - User Interface Software",
    "CS 4455 - Video Game Design",
    "CS 2316 - Data Input and Manipulation",
    "CS 1301 - Introduction to Computing"
    ],
    "math": [
      "MATH 1552 - Integral Calculus",
    "MATH 1501 - Calculus I",
    "MATH 1554 - Linear Algebra",
    "MATH 2550 - Introduction to Multivariable Calculus",
    "MATH 3012 - Applied Combinatorics",
    "MATH 3670 - Statistics and Applications"
    ],
    "psyc": [
      "PSYC 1101 - General Psychology",
    "PSYC 2015 - Research Methods",
    "PSYC 2210 - Social Psychology"
    ]
  };

  for (const [type, list] of Object.entries(coursework)) {
    const courses = createCourses(type, list);
    document.body.appendChild(courses);
  }
}

function createJob(job) {
  const jobDiv = document.createElement("div");
  const jobName = document.createTextNode(job.title);
  jobDiv.appendChild(jobName);
  const jobDates = document.createTextNode(job.date);
  jobDiv.appendChild(jobDates);
  const jobInfo = createJobInfo(job.text);
  jobDiv.appendChild(jobInfo);
  document.body.appendChild(jobDiv);
}

function createJobInfo(jobText) {
  const jobInfoDiv = document.createElement("ul");
  jobText.forEach((line) => {
    const lineItem = document.createElement("li");
    const lineText = document.createTextNode(line);
    lineItem.appendChild(lineText);
    jobInfoDiv.appendChild(lineItem);
  });
  return jobInfoDiv;
}

function createSkill(type, list) {
  const skillLine = document.createElement("div");
  const skillLineText = document.createTextNode(type + ": " + list.join(", "));
  skillLine.appendChild(skillLineText);
  return skillLine;
}

function createEducation(school) {
  const schoolDiv = document.createElement("div");
  const schoolName = document.createTextNode(school.name);
  schoolDiv.appendChild(schoolName);
  const schoolDate = document.createTextNode(school.date);
  schoolDiv.appendChild(schoolDate);
  const schoolInfo = createSchoolInfo(school.text);
  schoolDiv.appendChild(schoolInfo);
  document.body.appendChild(schoolDiv);
}

function createSchoolInfo(schoolText) {
  const schoolInfoDiv = document.createElement("ul");
  schoolText.forEach((line) => {
    const lineItem = document.createElement("li");
    const lineItemText = document.createTextNode(line);
    lineItem.appendChild(lineItemText);
    schoolInfoDiv.appendChild(lineItem);
  });
  return schoolInfoDiv;
}

function createExtra(extra) {
  const extraDiv = document.createElement("div");
  const name = document.createTextNode(extra.name);
  extraDiv.appendChild(name);
  const date = document.createTextNode(extra.date);
  extraDiv.appendChild(date);
  document.body.appendChild(extraDiv);
}

function createCourses(type, list) {
  const courseDiv = document.createElement("div");

  const typeDiv = document.createElement("div");
  const typeText = document.createTextNode(type.toUpperCase());
  typeDiv.appendChild(typeText);
  courseDiv.appendChild(typeDiv);

  const listDiv = document.createElement("ul");
  list.forEach((course) => {
    const courseLineItem = document.createElement("li");
    const courseLineText = document.createTextNode(course);
    courseLineItem.appendChild(courseLineText);
    listDiv.appendChild(courseLineItem);
  });
  courseDiv.appendChild(listDiv);

  return courseDiv;
}
