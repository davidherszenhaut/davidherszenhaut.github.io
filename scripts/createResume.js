export function createResume() {

  const experience = [
    {
      "title": "Automated Logic, Software Engineer",
      "date": "September 2021–Present",
      "text": [
        "Developed a custom Java annotation processor that reduced system startup time by over 20 seconds",
        "Worked with product managers to draft and complete user stories for a BACnet-based HVAC system",
        "Designed CI pipeline to analyze codebase for potential defects and security vulnerabilities using Coverity",
        "Created a file encryption system to securely store customer license files and prevent unauthorized editing",
        "Implemented a functional testing setup running on TeamCity with over 90% code coverage",
        "Conducted research on the life expectancy of onboard flash memory to be installed on BACnet controllers"
      ]
    },
    {
      "title": "Zuora, Software Engineer",
      "date": "March 2020–September 2021",
      "text": [
        "Implemented Level 3 credit card payment processing for payment gateways which reduced interchange fees by over 1% per transaction",
        "Built integrations for alternative payment methods to be used by payment service providers (such as SEPA for Stripe and payment tokens for Adyen) using Apache Velocity and REST APIs",
        "Designed automated unit test plans with over 85% code coverage to catch errors in development and prevent regressions in production",
        "Published customer-facing technical specification documents with the support of product management",
        "Collaborated with customer support to diagnose and resolve customer issues in a timely manner"
      ]
    },
    {
      "title": "Anodot, Software Developer Intern",
      "date": "June 2019–August 2019",
      "text": [
        "Developed new pages in existing web application using React, Redux, and Node.js",
        "Improved administrator workflow by introducing new REST API endpoints for database operations",
        "Designed user-friendly data visualizations with Highcharts to display live database usage information"
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


  const main = document.getElementsByTagName("main")[0];
  const resumeContainer = document.createElement("div");
  resumeContainer.id = "resume";

  const pdfButtonContainer = document.createElement("button-container");
  pdfButtonContainer.id = "pdf-button-container";
  const pdfButton = document.createElement("button");
  pdfButton.addEventListener("click", function() {
    window.open("/assets/resume/David Herszenhaut - Resume.pdf");
  })
  const pdfButtonText = document.createTextNode("View as a PDF");
  pdfButton.appendChild(pdfButtonText);
  pdfButtonContainer.appendChild(pdfButton);

  resumeContainer.appendChild(pdfButtonContainer);

  const jobs = document.createElement("div");
  const jobsTitle = document.createElement("h2");
  const jobsTitleText = document.createTextNode("Experience");
  jobsTitle.appendChild(jobsTitleText);
  jobs.appendChild(jobsTitle);
  experience.forEach((job) => {
    const jobInstance = createJob(job);
    jobs.appendChild(jobInstance);
  });
  const jobsHR = document.createElement("hr");
  jobs.appendChild(jobsHR);
  resumeContainer.appendChild(jobs);

  const skills = {
    "Programming Languages": [
      "Java",
      "JavaScript",
      "Python"
    ],
    "Libraries/Frameworks": [
      "React",
      "Redux",
      "Node.js",
      "Highcharts",
      "D3.js"
    ],
    "Tools": [
      "Git",
      "Postman",
      "Perforce",
      "Wireshark",
      "Visual Test Shell for BACnet"
    ],
    "Spoken Languages": [
      "English (Native)",
      "Portuguese (Conversational)",
      "Spanish (Beginner)"
    ]
  };

  const skillsContainer = document.createElement("div");
  const skillsTitle = document.createElement("h2");
  const skillsTitleText = document.createTextNode("Skills");
  skillsTitle.appendChild(skillsTitleText);
  skillsContainer.appendChild(skillsTitle);
  for (const [skillType, skillList] of Object.entries(skills)) {
    const skillLine = createSkill(skillType, skillList);
    skillsContainer.appendChild(skillLine);
  }
  const skillsHR = document.createElement("hr");
  skillsContainer.appendChild(skillsHR);
  resumeContainer.appendChild(skillsContainer);

  const education = [
    {
      "name": "Georgia Institute of Technology",
      "date": "December 2019",
      "text": [
        "Bachelor of Science in Computer Science",
        "3.74 Major GPA"
      ]
    }
  ];

  const eduContainer = document.createElement("div");
  const eduTitle = document.createElement("h2");
  const eduTitleText = document.createTextNode("Education");
  eduTitle.appendChild(eduTitleText);
  eduContainer.appendChild(eduTitle);
  education.forEach((school) => {
    const edu = createEducation(school);
    eduContainer.appendChild(edu);
  });
  const eduHR = document.createElement("hr");
  eduContainer.appendChild(eduHR);
  resumeContainer.appendChild(eduContainer);

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

  const extrasContainer = document.createElement("div");
  const extrasTitle = document.createElement("h2");
  const extrasTitleText = document.createTextNode("Extracurriculars");
  extrasTitle.appendChild(extrasTitleText);
  extrasContainer.appendChild(extrasTitle);
  extracurriculars.forEach((extra) => {
    const extraInstance = createExtra(extra)
    extrasContainer.appendChild(extraInstance);
  });
  const extrasHR = document.createElement("hr");
  extrasContainer.appendChild(extrasHR);
  resumeContainer.appendChild(extrasContainer);

  const coursework = {
    "Computer Science": [
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
    "Mathematics": [
      "MATH 1552 - Integral Calculus",
      "MATH 1501 - Calculus I",
      "MATH 1554 - Linear Algebra",
      "MATH 2550 - Introduction to Multivariable Calculus",
      "MATH 3012 - Applied Combinatorics",
      "MATH 3670 - Statistics and Applications"
    ],
    "Psychology": [
      "PSYC 1101 - General Psychology",
      "PSYC 2015 - Research Methods",
      "PSYC 2210 - Social Psychology"
    ]
  };

  const coursesContainer = document.createElement("div");
  const coursesTitle = document.createElement("h2");
  const coursesTitleText = document.createTextNode("Relevant Coursework");
  coursesTitle.appendChild(coursesTitleText);
  coursesContainer.appendChild(coursesTitle);
  for (const [type, list] of Object.entries(coursework)) {
    const courses = createCourses(type, list);
    coursesContainer.appendChild(courses);
  }
  resumeContainer.appendChild(coursesContainer);

  main.appendChild(resumeContainer);
}

function createJob(job) {
  const jobDiv = document.createElement("div");
  const jobHeadingDiv = document.createElement("div");
  jobHeadingDiv.classList.add("job-heading");
  const jobNameP = document.createElement("p");
  const jobName = document.createTextNode(job.title);
  jobNameP.appendChild(jobName);
  jobNameP.classList.add("job-name");
  jobHeadingDiv.appendChild(jobNameP);
  const jobDatesP = document.createElement("p");
  const jobDates = document.createTextNode(job.date);
  jobDatesP.appendChild(jobDates);
  jobHeadingDiv.appendChild(jobDatesP);
  jobDiv.appendChild(jobHeadingDiv);
  const jobInfo = createJobInfo(job.text);
  jobDiv.appendChild(jobInfo);
  return jobDiv;
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
  const skillLine = document.createElement("p");
  const skillTypeSpan = document.createElement("span");
  skillTypeSpan.innerHTML = type;
  skillTypeSpan.classList.add("skill-type")
  const skillLineText = document.createTextNode(": " + list.join(", "));
  skillLine.appendChild(skillTypeSpan);
  skillLine.appendChild(skillLineText);
  return skillLine;
}

function createEducation(school) {
  const schoolDiv = document.createElement("div");
  const schoolHeadingDiv = document.createElement("div");
  schoolHeadingDiv.classList.add("school-heading");
  const schoolName = document.createElement("p");
  schoolName.classList.add("school-name");
  const schoolNameText = document.createTextNode(school.name);
  schoolName.appendChild(schoolNameText)
  schoolHeadingDiv.appendChild(schoolName);
  const schoolDate = document.createElement("p");
  const schoolDateText = document.createTextNode(school.date);
  schoolDate.appendChild(schoolDateText);
  schoolHeadingDiv.appendChild(schoolDate);
  const schoolInfo = createSchoolInfo(school.text);
  schoolDiv.appendChild(schoolHeadingDiv);
  schoolDiv.appendChild(schoolInfo);
  return schoolDiv;
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
  extraDiv.classList.add("extra-heading");
  const nameP = document.createElement("p");
  const name = document.createTextNode(extra.name);
  nameP.appendChild(name);
  nameP.classList.add("extra-name");
  extraDiv.appendChild(nameP);
  const dateP = document.createElement("p");
  const date = document.createTextNode(extra.date);
  dateP.appendChild(date);
  extraDiv.appendChild(dateP);
  return extraDiv;
}

function createCourses(type, list) {
  const courseDiv = document.createElement("div");

  const typeDiv = document.createElement("div");
  typeDiv.classList.add("course-type")
  const typeText = document.createTextNode(type);
  typeDiv.appendChild(typeText);
  courseDiv.appendChild(typeDiv);

  const listDiv = document.createElement("ul");
  list.sort();
  list.forEach((course) => {
    const courseLineItem = document.createElement("li");
    const courseLineText = document.createTextNode(course);
    courseLineItem.appendChild(courseLineText);
    listDiv.appendChild(courseLineItem);
  });
  courseDiv.appendChild(listDiv);

  return courseDiv;
}
