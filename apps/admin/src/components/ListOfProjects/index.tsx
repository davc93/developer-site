import React, { useContext, useEffect, useState } from "react";
import { Project } from "@/models/project.model";
import { projectService } from "@/services/project.service";
import "./style.css";
import { ProjectItem } from "../../molecules/ProjectItem";
import { useInputValue } from "../../../hooks/useInputValue";
import { Typography, TypographySize } from "../../atoms/Typography";
import { TextField, TextFieldInputType } from "../../atoms/TextField";

export const useGetProjects = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const getProjects = async () => {
    setLoading(true);
    try {
      const projects = await projectService.getProjects();
      setProjects(projects);
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getProjects();
  }, []);

  return {
    projects,
    loading,
    error,
    getProjects,
  };
};
export const ListOfProjects = () => {
  const { projects, loading, error } = useGetProjects();
  const searchInput = useInputValue("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  useEffect(() => {
    const filter = projects.filter((project) =>
      project.title.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    setFilteredProjects(filter);
  }, [searchInput.value]);
  useEffect(()=>{
    setFilteredProjects(projects)
  },[projects])
  return (
    <section className="">

      <div className="project-list__options mb-12 w-72">
        <form className="project-list__searchbar">
          <TextField
            {...searchInput}
            inputType={TextFieldInputType.TEXT}
            name="Project name"
            label="Project name"
            required
          />
        </form>
      </div>
      <div className="project-list__headers">
        <Typography size={TypographySize.bodyLarge}>Id</Typography>
        <Typography size={TypographySize.bodyLarge}>Title</Typography>
        <Typography size={TypographySize.bodyLarge}>Slug</Typography>
        <Typography size={TypographySize.bodyLarge}>Short Description</Typography>
        <Typography size={TypographySize.bodyLarge}>Published</Typography>
        <Typography size={TypographySize.bodyLarge}>Repository</Typography>
        <Typography size={TypographySize.bodyLarge}>App Link</Typography>
        <Typography size={TypographySize.bodyLarge}>Created At</Typography>
        <Typography size={TypographySize.bodyLarge}>Options</Typography>
      </div>
      <div className="project-list__items grid overflow-y-scroll gap-2 mt-3">
        {filteredProjects.map((project) => (
          <ProjectItem key={project.id} data={project} setFilteredProjects={setFilteredProjects} />
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </section>
  );
};
