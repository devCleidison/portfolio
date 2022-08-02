import { BsGithub, BsGlobe2 } from "react-icons/bs";

import { Button } from "../Button";

import "./styles.scss";

export const ProjectCard = ({ project }) => {
  const handleLinks = (link) => {
    window.open(link, "_blank");
  }

  return (
    <div className="project-card">
      <img src={project.image} alt={`Imagem do projeto ${project.name}`} />

      <div className="project-description">
        <span>{project.name}</span>
        <p>{project.description}</p>

        <div className="btn-links">
          <Button className="repo" onClick={() => handleLinks(project.repository)}>
            <BsGithub /> Repositório
          </Button>

          <Button className="site" onClick={() => handleLinks(project.deploy)}>
            <BsGlobe2 /> Site
          </Button>
        </div>
      </div>
    </div>
  );
};
