import Project from "./Project";

const projectsInformation = [
  {
    thumbnail: "",
    title: "Design Portfolio",
    tags: ["HTML", "CSS"],
  },
  {
    thumbnail: "",
    title: "Test Projects",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

console.log(projectsInformation.tags)

function Projects() {
  return projectsInformation.map((project) => <Project title={project.title} tags={project.tags} />);
}

export default Projects;
