import "./style.css";
import React, {
  FormEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { Input } from "ui-react";
import { Typography, TypographySize } from "ui-react";
import { labelService } from "@/services/label.service";
import { Label } from "@/models/label.model";

import { LabelItem } from "@/components/LabelItem";
import { useInputValue } from "@/hooks/useInputValue";
import { Pagination } from "@/components/Pagination";
export const useGetLabels = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [labels, setLabels] = useState<Label[]>([]);

  const getLabels = async () => {
    setLoading(true);
    try {
      const data = await labelService.getLabels();
      setLabels(data);
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };
  React.useEffect(() => {
    getLabels();
  }, []);
  return {
    loading,
    error,
    labels,
    getLabels,
  };
};

export const ListOfLabels = () => {
  const { loading, error, labels, getLabels } = useGetLabels();
  const [filteredLabels, setFilteredLabels] = useState<Label[]>(labels);
  const searchInput = useInputValue("");
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const handleShowFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };
  // End Hooks
  useEffect(() => {
    setFilteredLabels(labels);
  }, [labels]);
  useEffect(() => {
    const filter = labels.filter((label) =>
      label.title.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    setFilteredLabels(filter);
  }, [searchInput.value]);

  return (
    <section className="label-list">
      <div className="label-list__options my-4">
        <form className="label-list__searchbar">
          <Input
          required
            label="write a label name"
            {...searchInput}
          />
        </form>
      </div>
      <div className="label-list__headers">
        <div>
          <Typography size={TypographySize.bodyLarge}>Id</Typography>
        </div>
        <div>
        <Typography size={TypographySize.bodyLarge}>Title</Typography>

        </div>
        <div className="flex relative gap-2">
          <Typography size={TypographySize.bodyLarge}>Type</Typography>
          <div className="absolute" style={{ right: -35 }}>
            <button onClick={handleShowFilter}>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z"
                  fill="#000000"
                />
              </svg>
            </button>
            {isOpenFilter && (
              <div className="bg-white p-3 absolute">
                <li className="flex justify-end gap-2">
                  <p>text</p>
                  <input type="checkbox" name="" id="" placeholder="text" />
                </li>
                <li className="flex">
                  <p>other</p>
                  <input type="checkbox" name="" id="" placeholder="other" />
                </li>
              </div>
            )}
          </div>
        </div>
        <div>
          <Typography size={TypographySize.bodyLarge}>Image</Typography>
        </div>
        <div>
          <Typography size={TypographySize.bodyLarge}>Created At</Typography>
        </div>
        <div>
          <Typography size={TypographySize.bodyLarge}>Options</Typography>
        </div>
      </div>
      <div className="label-list__items">
        {loading && <p>Loading</p>}
        {error && <p>{error}</p>}
        <Pagination>
          {filteredLabels.map((label) => {
            return (
              <LabelItem
                key={label.id}
                data={label}
                getLabels={getLabels}
                filteredLabels={filteredLabels}
                setFilteredLabels={setFilteredLabels}
              />
            );
          })}
        </Pagination>
      </div>
    </section>
  );
};
