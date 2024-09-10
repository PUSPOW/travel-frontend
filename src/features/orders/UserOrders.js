/** @format */

import React from "react";
import { useGetOrderByUserQuery, useGetOrdersQuery } from "./orderApi";
import { Button, Card, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router";

const TABLE_HEAD = ["ProductId", "Total", "CreatedAt", ""];

const UserOrders = ({ user }) => {
  const { isLoading, error, data } = useGetOrdersQuery(user);
  console.log(data);
  const nav = useNavigate();
  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="col-span-2">
      <Card className="h-full w-full">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr className="hidden md:table-row">
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {data?.data.map(({ totalAmount, createdAt, _id }, index) => {
                const isLast = index === data.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={_id} className="block md:table-row mb-4">
                    <td className={`${classes} flex flex-col md:table-cell`}>
                      <div className="font-bold text-blue-gray-600 md:hidden">
                        {_id}
                      </div>
                      <div className="font-normal">{_id}</div>
                    </td>
                    <td className={`${classes} flex flex-col md:table-cell`}>
                      <div className="font-bold text-blue-gray-600 md:hidden">
                        Total Amount
                      </div>
                      <div className="font-normal">{totalAmount}</div>
                    </td>
                    <td className={`${classes} flex flex-col md:table-cell`}>
                      <div className="font-bold text-blue-gray-600 md:hidden">
                        Created At
                      </div>
                      <div className="font-normal">{createdAt}</div>
                    </td>
                    <td className={`${classes} flex flex-col md:table-cell`}>
                      <Button
                        onClick={() => nav(`/orders/${_id}`)}
                        size="sm"
                        color="green"
                      >
                        Detail
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default UserOrders;
