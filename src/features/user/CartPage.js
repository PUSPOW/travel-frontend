/** @format */

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Input,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../constant/constant";
import { clearCart, setToCart } from "./CartSlice";
import { useAddOrderMutation } from "../orders/orderApi";
import { toast } from "react-toastify";
import CostumDialog from "../../ui/CostumDialog";

const CartPage = () => {
  const [addOrder, { isLoading }] = useAddOrderMutation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const { carts } = useSelector((state) => state.cartSlice);
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const total = carts.reduce(
    (a, b) => a + b.qty * b.product_price * b.rooms,
    0
  );

  const handleSubmit = async () => {
    try {
      await addOrder({
        body: {
          totalAmount: total,
          email: user.email,
          reserved: carts.map((cart) => ({
            product: cart._id,
            qty: cart.qty,
            rooms: cart.rooms,
            phoneNumber: cart.phone,
            address: cart.address,
            fullName: cart.fullName,
            placeName: cart.placeName,
            placeAddress: cart.placeAddress,
            checkInDateTime: cart.checkInDate,
            checkOutDateTime: cart.checkOutDate,
          })),
        },
        token: user.token,
      }).unwrap();
      dispatch(clearCart());
      toast.success("successfully addeed");
    } catch (err) {
      toast.error(`${err}`);
    }
  };

  return (
    <div>
      <div className="p-5">
        <Typography
          variant="small"
          color="blue-gray"
          className=" leading-none font-bold opacity-70 mb-5 text-3xl text-center"
        >
          Please fill the form before reserve
        </Typography>
        {carts.map((cart) => {
          return (
            <div
              className="flex flex-col sm:flex-row lg:flex-row gap-4"
              key={cart._id}
            >
              <div className="flex justify-center px-4">
                <Card className="w-full sm:w-[600px] max-w-[48rem] flex flex-col lg:flex-row">
                  <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-full lg:w-2/5 shrink-0 rounded-b-none lg:rounded-r-none lg:rounded-b-none"
                  >
                    <img
                      src={`${imageUrl}${cart.product_image}`}
                      alt="card-image"
                      className="h-full w-full object-cover"
                    />

                    <IconButton
                      size="sm"
                      color="red"
                      variant="text"
                      className="!absolute top-4 right-4 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                    </IconButton>
                  </CardHeader>

                  <CardBody className="w-full lg:w-3/5">
                    <div className="flex justify-between">
                      <Typography
                        variant="h6"
                        color="gray"
                        className="mb-4 uppercase"
                      >
                        {cart.product_name}
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal mb-5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {cart.rating}
                      </Typography>
                    </div>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                      {cart.product_detail}
                    </Typography>
                    <p>Rs. {cart.product_price}</p>
                    <p>Available: {cart.available}</p>

                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      <Typography className="underline" color="gray">
                        {cart.product_place}
                      </Typography>
                    </div>

                    <div className="mt-2 flex gap-3">
                      {" "}
                      <Tooltip content="Free wifi">
                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Tooltip>
                      <Tooltip content={`65" HDTV`}>
                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path d="M19.5 6h-15v9h15V6z" />
                            <path
                              fillRule="evenodd"
                              d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Tooltip>
                      <Tooltip content="2 bedrooms">
                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                          </svg>
                        </span>
                      </Tooltip>
                      <Tooltip content="Fire alert">
                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Tooltip>
                      <Tooltip content="And +20 more">
                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                          +20
                        </span>
                      </Tooltip>
                    </div>
                  </CardBody>
                </Card>
              </div>

              <div className="shadow-lg shadow-blue-gray-600">
                <tr>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Place Name
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md  p-2">
                    <Input type="text" defaultValue={cart.placeName || []} />
                  </th>
                </tr>
                <tr>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md  p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Place Address
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md  p-2">
                    <Input type="text" defaultValue={cart.placeAddress || []} />
                  </th>
                </tr>

                <tr>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md  p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Phone
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md  p-2">
                    <Input
                      type="text"
                      defaultValue={cart.phone || []}
                      onChange={(e) => {
                        dispatch(
                          setToCart({ ...cart, phone: Number(e.target.value) })
                        );
                      }}
                    />
                  </th>
                </tr>
                <tr>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md  p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      address
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md  p-2">
                    <Input
                      type="text"
                      defaultValue={cart.address || []}
                      onChange={(e) => {
                        dispatch(
                          setToCart({
                            ...cart,
                            address: String(e.target.value),
                          })
                        );
                      }}
                    />
                  </th>
                </tr>
                <tr>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md  p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Full Name
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md  p-2">
                    <Input
                      type="text"
                      defaultValue={cart.fullName || []}
                      onChange={(e) => {
                        dispatch(
                          setToCart({
                            ...cart,
                            fullName: String(e.target.value),
                          })
                        );
                      }}
                    />
                  </th>
                </tr>
                <tr>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md  p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Check-In Date
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md  p-2">
                    <Input
                      type="date"
                      defaultValue={cart.checkInDate || []}
                      onChange={(e) => {
                        dispatch(
                          setToCart({
                            ...cart,
                            checkInDate: Date(e.target.value),
                          })
                        );
                      }}
                    />
                  </th>
                </tr>
                <tr>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Check-Out Date
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-gray-50 rounded-md  p-2">
                    <Input
                      type="date"
                      defaultValue={cart.checkOutDate || []}
                      onChange={(e) => {
                        dispatch(
                          setToCart({
                            ...cart,
                            checkOutDate: Date(e.target.value),
                          })
                        );
                      }}
                    />
                  </th>
                </tr>
              </div>
              <div className="bg-gray-50 shadow-md text-xl font-medium shadow-blue-gray-200 h-44 w-[300px] p-3 space-y-6">
                <div>
                  <label>Rooms:</label>
                  <select
                    defaultValue={cart.rooms || 1} // Set default rooms value
                    name="rooms"
                    id=""
                    onChange={(e) => {
                      dispatch(
                        setToCart({ ...cart, rooms: Number(e.target.value) })
                      );
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((roomCount) => (
                      <option key={roomCount} value={roomCount}>
                        {roomCount}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Qty:</label>
                  <select
                    defaultValue={cart.qty || 1}
                    name="qty"
                    id=""
                    onChange={(e) => {
                      dispatch(
                        setToCart({ ...cart, qty: Number(e.target.value) })
                      );
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((qtyCount) => (
                      <option key={qtyCount} value={qtyCount}>
                        {qtyCount}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-between">
                  <h1>Total</h1>
                  <p>NPR {total}</p>
                </div>
                <div>
                  <Button
                    loading={isLoading}
                    onClick={handleOpen}
                    className="mt-10 ml-14 items-center "
                  >
                    Place An Order
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CostumDialog
        open={open}
        handleOpen={handleOpen}
        handleConfirm={handleSubmit}
      />
    </div>
  );
};
export default CartPage;
