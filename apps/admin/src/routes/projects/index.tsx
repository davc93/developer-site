// import { ListOfProjects } from '../../components/organisms/ListOfProjects'
import { projectService } from "@/services/project.service";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonSizes, Typography, TypographySize } from "ui-react";
import { Button } from "ui-react";
import { Input } from "ui-react";
import { Table } from "ui-react";
import type { Project } from "@/models/project.model";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Project[]>();

const columns = [
  columnHelper.accessor("id", {
    header: "Id",
  }),
  columnHelper.accessor("title", {
    header: "Title",
  }),
  columnHelper.accessor("shortDescription", {
    header: "Short description",
  }),
  columnHelper.accessor("published", {
    header: "Publicado",
  }),
  columnHelper.accessor("slug", {
    header: "Slug",
  }),
  columnHelper.accessor("repository", {
    header: "Repository Url",
  }),
  columnHelper.accessor("link", {
    header: "Environment Url",
  }),
];

export const ProjectsPage = () => {
  const [data, setData] = useState<Project[]>([]);
  const navigate = useNavigate();
  const actions = [
    {
      name: "Edit",
      fn: (project: Project) => {
        navigate(`/project/edit/${project.id}`);
      },
    },
    {
      name: "Delete",
      fn: (project: Project) => {
        alert(`Eliminar ${project.id}`);
      },
    },
  ];
  const getProjects = async () => {
    const projects = await projectService.getProjects();
    console.log(projects);

    setData(projects);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="flex flex-col">
      <Typography size={TypographySize.titleMedium} className="">
        Projects Page
      </Typography>
      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row lg:justify-between items-baseline w-full">
          <div className="">
            <Input label="Search" placeholder="Enter a keyword " />
          </div>
          <Link to={"/project/create"} className="self-end">
            <Button size={ButtonSizes.LARGE}>Create project</Button>
          </Link>
        </div>
        <Table columns={columns} data={data} actions={actions} />
      </div>
    </section>
  );
};
