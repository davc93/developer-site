import { config } from "@/config";
import { AuthContext } from "@/context/AuthContext";
import { MessageResponse } from "@/models/message.model";
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
export const ContactPage = () => {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState<MessageResponse["results"]>([]);
  const getMessages = async () => {
    const response = await fetch(
      `${config.apiUri}/messages?page=1&results=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data: MessageResponse = await response.json();
    if (!response.ok) {
      alert("Something went wrong");
    }
    setData(data.results);
  };
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
        <Typography size={TypographySize.titleSmall}>Contact Page</Typography>
        <div className="mt-8">
      <Table data={data} columns={columns} />

        </div>
    </div>
  );
};
