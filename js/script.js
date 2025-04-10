const $ = document;

const navItems = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "SQL",
  "JAVA",
  "PHP",
  "HOW TO",
  "W3.CSS",
  "C",
  "C++",
  "C#",
  "BOOTSTRAP",
  "REACT",
  "MYSQL",
  "JQUERY",
  "EXCEL",
  "XML",
  "DJANGO",
  "NUMPY",
  "PANDAS",
  "NODEJS",
  "R",
  "TYPESCRIPT",
  "ANGULAR",
  "GIT",
  "POSTGRESQL",
  "MONGODB",
  "ASP",
  "AI",
  "GO",
  "KOTLIN",
  "SASS",
  "VUE",
  "DSA",
  "GEN",
  "AI",
  "SCIPY",
  "AWS",
  "CYBERSECURITY",
  "DATA",
  "SCIENCE",
];

const navBar = $.querySelector("#tnb-courses-bar ul");

for (const i of navItems) {
  const newLi = $.createElement("li");
  newLi.innerHTML = '<a href="#">' + i + "</a>";
  navBar.append(newLi);
}