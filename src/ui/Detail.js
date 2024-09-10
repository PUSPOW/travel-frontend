/** @format */

import React from "react";
import { useNavigate, useParams } from "react-router";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../features/shared/productApi";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  IconButton,
  Input,
  CardFooter,
  Tooltip,
} from "@material-tailwind/react";
import { imageUrl } from "../constant/constant";
import { useDispatch, useSelector } from "react-redux";
import { setToCart } from "../features/user/CartSlice";
import { useFormik } from "formik";
import ProductReview from "../features/user/ProductReview";
import Places from "./Places";
import Search from "./Search";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);
  const { user } = useSelector((state) => state.userSlice);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const product = data?.data;
  return (
    <div className="space-y-5">
      <div className="flex justify-center">
        <Search />
      </div>
      <Typography
        variant="h3"
        color="blue-gray"
        className="font-bold flex justify-center"
      >
        Please fill the form before you reserve
      </Typography>
      <div className="p-5 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 max-w-[48rem] mx-auto my-8">
          <Card className="w-full flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
            <CardHeader
              shadow={false}
              floated={false}
              className="w-full md:w-2/5 h-64 md:h-auto shrink-0"
            >
              <img
                src={`${imageUrl}${product.product_image}`}
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

            <CardBody className="flex-1 p-6">
              <div className="flex justify-between items-center mb-4">
                <Typography
                  variant="h6"
                  color="gray"
                  className="uppercase font-semibold"
                >
                  {product.product_name}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 text-sm font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {product.rating}
                </Typography>
              </div>

              <Typography variant="h4" color="blue-gray" className="mb-2">
                {product.product_detail}
              </Typography>
              <Typography className="mb-2 text-lg font-semibold">
                Rs. {product.product_price}
              </Typography>
              <Typography className="mb-4 text-sm">
                Available: {product.available}
              </Typography>

              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
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
                <Typography className="underline text-sm ml-2" color="gray">
                  {product.product_place}
                </Typography>
              </div>

              <div className="flex justify-items-center gap-3">
                <Tooltip content="Free wifi">
                  <span className="cursor-pointer p-3 rounded-full border border-gray-900/5 bg-gray-900/5 hover:bg-gray-900/10 hover:border-gray-900/10">
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
                {/* Add other tooltips similarly */}
              </div>
            </CardBody>
          </Card>

          <div className="mt-6">
            <ProductReview
              user={user}
              id={product._id}
              reviews={product.reviews}
            />
          </div>
        </div>

        <div> {product && <AddCart product={product} />}</div>
      </div>
      <div id="cards-section" className="space-y-3 ml-8 pt-10">
        <Typography
          variant="h3"
          color="blue-gray"
          className="font-bold flex justify-center"
        >
          See more cabins...
        </Typography>
      </div>
      <div>
        <Places />
      </div>
    </div>
  );
};

export default Detail;

export const AddCart = ({ product }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { carts } = useSelector((state) => state.cartSlice);
  const { user } = useSelector((state) => state.userSlice);
  const isExist = carts.find((cart) => cart._id === product._id);

  const formik = useFormik({
    initialValues: {
      qty: isExist?.qty || 1,
      rooms: isExist?.rooms || 1,
      phone: "",
      checkInDate: "",
      checkOutDate: "",
      address: "",
      fullName: "",
      placeAddress: "",
      placeName: "",
    },
  });

  const handleSubmit = () => {
    dispatch(
      setToCart({
        ...product,
        qty: Number(formik.values.qty),
        rooms: Number(formik.values.rooms),
        phone: formik.values.phone,
        address: formik.values.address,
        fullName: formik.values.fullName,
        placeAddress: product.product_place,
        placeName: product.product_name,
        checkInDate: formik.values.checkInDate,
        checkOutDate: formik.values.checkOutDate,
      })
    );
    nav("/carts");
  };

  return (
    <div>
      <Card className="w-full lg:w-1/2">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Place Name
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {product.product_name}
                </Typography>
              </th>
            </tr>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Place Address
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {product.product_place}
                </Typography>
              </th>
            </tr>

            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Qty
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <div>
                  <select
                    defaultValue={formik.values.qty}
                    name="qty"
                    id=""
                    onChange={(e) =>
                      formik.setFieldValue("qty", e.target.value)
                    }
                  >
                    {[...Array(10).keys()].map((r) => (
                      <option key={r + 1} value={r + 1}>
                        {r + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </th>
            </tr>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Rooms
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <div>
                  <select
                    defaultValue={formik.values.rooms}
                    name="rooms"
                    id=""
                    onChange={(e) =>
                      formik.setFieldValue("rooms", e.target.value)
                    }
                  >
                    {[...Array(10).keys()].map((r) => (
                      <option key={r + 1} value={r + 1}>
                        {r + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </th>
            </tr>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Phone
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Input
                  type="text"
                  value={formik.values.phone}
                  onChange={(e) =>
                    formik.setFieldValue("phone", e.target.value)
                  }
                />
              </th>
            </tr>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  address
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Input
                  type="text"
                  value={formik.values.address}
                  onChange={(e) =>
                    formik.setFieldValue("address", e.target.value)
                  }
                />
              </th>
            </tr>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Full Name
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Input
                  type="text"
                  value={formik.values.fullName}
                  onChange={(e) =>
                    formik.setFieldValue("fullName", e.target.value)
                  }
                />
              </th>
            </tr>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Check-In Date
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Input
                  type="date"
                  value={formik.values.checkInDate}
                  onChange={(e) =>
                    formik.setFieldValue("checkInDate", e.target.value)
                  }
                />
              </th>
            </tr>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Check-Out Date
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Input
                  type="date"
                  value={formik.values.checkOutDate}
                  onChange={(e) =>
                    formik.setFieldValue("checkOutDate", e.target.value)
                  }
                />
              </th>
            </tr>
          </thead>
        </table>
        <div className="flex justify-center pt-7">
          <Button onClick={handleSubmit}>Add To Cart</Button>
        </div>
      </Card>
    </div>
  );
};
