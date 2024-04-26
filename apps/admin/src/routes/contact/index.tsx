import { config } from "@/config";
import { AuthContext } from "@/context/AuthContext";
import { MessageResponse } from "@/models/message.model";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useContext, useEffect, useState } from "react";
import { Table, Typography, TypographySize } from "ui-react";

const columnHelper = createColumnHelper<MessageResponse["results"]>();

const columns = [
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("organization", {
    header: "Organization",
  }),
  columnHelper.accessor("message", {
    header: "Message",
  }),
];
const fetchMessages = async (page: number, token: string) => {
  const response = await fetch(
    `${config.apiUri}/messages?page=${page}&results=10`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data: MessageResponse = await response.json();
  if (!response.ok) {
    throw new Error("Error");
  }
  console.log(data);

  return data.results;
};
export const ContactPage = () => {
  const { token } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const handleNextClick = () => {
    setPage(page + 1);
  };
  const handlePreviousClick = () => {
    setPage(page - 1);
  };

  const {  data,error,isError,isFetching,isPlaceholderData,isPending} = useQuery({
    queryKey: ["messages", page],
    queryFn: () => {
      return fetchMessages(page, token as string);
    },
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      <Typography size={TypographySize.titleSmall}>Contact Page</Typography>
      <div className="mt-8">
        {isError && <p style={{color:"white"}}>{error.message}</p>}
        <Table
          data={data as MessageResponse["results"]}
          columns={columns}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          isLoading={isPending}
          page={page}
        />
      </div>
    </div>
  );
};
