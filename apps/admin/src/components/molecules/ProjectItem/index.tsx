import React, { useContext, useState } from "react";
import { projectService } from "../../../services/project.service";
import { AuthContext } from "../../../context/AuthContext";
import { Project } from "../../../models/project.model";
import { Link } from "react-router-dom";
import "./style.css";
import { Typography, TypographySize } from "../../atoms/Typography";
import { Button, ButtonSizes } from "../../atoms/Button";
type ProjectItemProps = {
  data: Project;
  setFilteredProjects: any;
};
export const ProjectItem = ({
  data: project,
  setFilteredProjects,
}: ProjectItemProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { token } = useContext(AuthContext);
  const handleDelete = async () => {
    setLoading(true);
    try {
      await projectService.deleteProject(token as string, project.id);
      setError(null);
      setFilteredProjects((prev: Project[]) => {
        prev.filter(
          (projectFiltered: Project) => projectFiltered.id !== project.id
        );
      });
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };
  return (
    <div className="project-list__item" key={project.id}>
      <Typography size={TypographySize.bodyLarge}>{project.id}</Typography>
      <Typography className="" size={TypographySize.bodyLarge}>{project.title}</Typography>
      <Typography size={TypographySize.bodyLarge}>{project.slug}</Typography>
      <Typography size={TypographySize.bodyLarge}>
        {project.shortDescription}
      </Typography>
      <Typography
        size={TypographySize.bodyLarge}
      >{`${project.published}`}</Typography>
      <Link target="blank" to={project.repository} title={project.repository}>
        Link
      </Link>
      <Link target="blank" to={project.link} title={project.link}>
        Link
      </Link>

      <Typography
        size={TypographySize.bodyLarge}
      >{`${project.createdAt}`}</Typography>
      <div className="project-list__buttons flex overflow-x-scroll gap-2">
        <Link to={`/projects/edit/${project.id}`}>
          
          <Button type={"button"} size={ButtonSizes.SMALL} label="Edit" />
        </Link>
        <Button
          onClick={handleDelete}
          type={"button"}
          size={ButtonSizes.SMALL}
          label="Delete"
        />
      </div>
    </div>
  );
};
