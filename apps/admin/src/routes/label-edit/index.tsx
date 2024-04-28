import React, { useState } from "react";
import { LabelForm } from "@/containers/LabelForm";
import { Link, useParams } from "react-router-dom";
import { Label } from "@/models/label.model";
import { labelService } from "@/services/label.service";
import { Button, ButtonSizes } from "ui-react";

export const EditLabelPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [label, setLabel] = useState<Label | null>(null);

  const getLabel = async () => {
    setLoading(true);
    try {
      const data = await labelService.getLabel(parseInt(id as string));
      setLabel(data);
      setError(null);
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };
  React.useEffect(() => {
    getLabel();
  }, []);

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="h-full" style={{ alignContent: "center" }}>
        {!loading && <LabelForm label={label} />}
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
      </div>
      <Link className="mb-8" to={"/labels"}>
        <Button size={ButtonSizes.SMALL}>Back to labels</Button>
      </Link>
    </div>
  );
};
