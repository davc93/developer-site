import { Button, ButtonSizes, Input, Table, Typography, TypographySize } from "ui-react";
import { createColumnHelper } from "@tanstack/react-table";
import type { Label } from "@/models/project.model";
import { useEffect, useState } from "react";
import { labelService } from "@/services/label.service";
import { Link, useNavigate } from "react-router-dom";
const columnHelper = createColumnHelper<Label[]>();

const columns = [
  columnHelper.accessor("id", {
    header: "Id",
  }),
  columnHelper.accessor("title", {
    header: "Title",
  }),
];

export const LabelsPage = () => {
  const [data, setData] = useState<Label[]>([]);
  const navigate = useNavigate();
  
  const actions = [
    {
      name: "Edit",
      fn: (label: Label) => {
        navigate(`/label/edit/${label.id}`);
      },
    },
    {
      name: "Delete",
      fn: (label: Label) => {
        alert(`Eliminar ${label.id}`);
      },
    },
  ];

  const getLabels = async () => {
    const labels = await labelService.getLabels();
    setData(labels);
  };
  useEffect(() => {
    getLabels();
  }, []);

  return (
    <div className="flex flex-col">
      <Typography size={TypographySize.titleSmall} className="mx-auto">
        Labels
      </Typography>
      <div className="">
        <div className="mb-4 flex flex-col lg:flex-row lg:justify-between items-baseline w-full">
          <div className="">
            <Input label="Search" placeholder="Enter a keyword " />
          </div>
          <Link to={"/label/create"} className="self-end">
            <Button size={ButtonSizes.LARGE}>Create Label</Button>
          </Link>
        </div>

        <Table columns={columns} data={data}  actions={actions}/>
      </div>
    </div>
  );
};
