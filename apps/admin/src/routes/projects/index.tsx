// import { ListOfProjects } from '../../components/organisms/ListOfProjects'
import { Link } from "react-router-dom";
import { ButtonSizes, Typography, TypographySize } from "ui-react";
import { Button } from "ui-react";
import { Input } from "ui-react";
import { Table } from "ui-react";
export const ProjectsPage = () => {
  return (
    <section className="flex flex-col">
      <Typography size={TypographySize.titleMedium} className="">
        Projects Page
      </Typography>
      {/* <ListOfProjects/> */}
      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row lg:justify-between items-baseline w-full">
          <div className="">
            <Input label="Search" placeholder="Enter a keyword " />
          </div>
          <Link to={"/create-project"} className="self-end">
            <Button size={ButtonSizes.LARGE}>Create project</Button>
          </Link>
        </div>
        <Table />
      </div>
    </section>
  );
};
