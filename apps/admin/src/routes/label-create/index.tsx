import { LabelForm } from "@/containers/LabelForm";
import { Link } from "react-router-dom";
import { Button, ButtonSizes } from "ui-react";

export const CreateLabelPage = () => {
  return (
      <div className="flex flex-col justify-center ">
        <LabelForm label={null} />
        <Link className="mt-8" to={"/labels"}>
          <Button size={ButtonSizes.SMALL}>Back to labels</Button>
        </Link>
      </div>
  );
};
