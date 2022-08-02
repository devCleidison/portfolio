import { projects } from "../../data/data";

import Person from "../../assets/coding.png";
import { ProjectCard } from "../../components/ProjectCard";

import "./styles.scss";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="content">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
