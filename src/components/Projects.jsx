import Project from "./Project";

const projectsInformation = [
  {
    img: "/images/project.png",
    title: "Design Portfolio",
    tags: ["HTML", "CSS"],
  },
  {
    img: "/images/project.png",
    title: "Test Projects",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    img: "/images/project.png",
    title: "Test Projects",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    img: "/images/project.png",
    title: "Test Projects",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

console.log(projectsInformation.tags)

function Projects() {
  return projectsInformation.map((project) => <Project title={project.title}  img={project.img} tags={project.tags} />);
}

export default Projects;
