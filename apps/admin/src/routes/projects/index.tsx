// import { ListOfProjects } from '../../components/organisms/ListOfProjects'
import { Link } from "react-router-dom";
import { ButtonSizes, Typography, TypographySize } from "ui-react";
import { Button } from "ui-react";
import { Input } from "ui-react";
export const ProjectsPage = () => {
  return (
    <section className="flex flex-col">
      <Typography size={TypographySize.titleMedium} className="">
        Projects Page
      </Typography>
      {/* <ListOfProjects/> */}
      <div className="space-y-4">
        <div className="flex justify-between items-baseline w-full">
          <div className="w-96">
            <Input label="Search" placeholder="Enter a keyword " />
          </div>
          <Link to={"/create-project"} className="self-end">
            <Button size={ButtonSizes.LARGE}>Create project</Button>
          </Link>
        </div>

        <div className="w-full" style={{ height: 420 }}>
          <table>
            <thead>
              <tr>
                <th>
                  Name
                </th>

                <th>
                  Date
                </th>

                <th>
                  Short Description
                </th>

                <th>

                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Proyecto 1
                </td>

                <td>
                  24-04-2023
                </td>

                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit mollitia debitis.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
