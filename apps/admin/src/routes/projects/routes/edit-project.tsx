import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectForm } from "@/routes/projects/components/ProjectForm";
import type { Project } from "@/models/project.model";
import { projectService } from "@/services/project.service";
import {  ProjectFormProvider } from "../components/ProjectForm/Context";
export const EditProjectPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [project, setProject] = useState<Project | null>(null);

  const getProject = async () => {
    setLoading(true);
    try {
      const data = await projectService.getProject(parseInt(id as string));
      setProject(data);
    } catch (error) {
      setError(`${error as string}`);
    }
    setLoading(false);
  };
  React.useEffect(() => {
    getProject();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>{error}</p>;
  } else {
    return (
      <ProjectFormProvider>
        <ProjectForm project={project} />
      </ProjectFormProvider>
    );
  }
};
