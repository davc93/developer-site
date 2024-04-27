import { config } from "@/config";
import { AuthContext } from "@/context/AuthContext";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useContext, useState } from "react";
import { Table, Typography, TypographySize } from "ui-react";
import type { MessageResponse } from "@/models/message.model";

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
const fetchMessages = async (
  page: number,
  token: string
): Promise<MessageResponse["results"]> => {
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

  return data.results;
};
export const ContactPage = (): JSX.Element => {
  const { token } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const handleNextClick = (): void => {
    setPage(page + 1);
  };
  const handlePreviousClick = (): void => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const { data, error, isError, isPending } = useQuery({
    queryKey: ["messages", page],
    queryFn: async () => {
      return await fetchMessages(page, token as string);
    },
    placeholderData: keepPreviousData,
  });

  return (
    <div>
      <Typography size={TypographySize.titleSmall}>Contact Page</Typography>
      <div className="mt-8">
        {isError && <p style={{ color: "white" }}>{error.message}</p>}
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
