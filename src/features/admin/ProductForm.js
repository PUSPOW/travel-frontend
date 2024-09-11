/** @format */

import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Option,
  Select,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useAddProductsMutation } from "../shared/productApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProductForm = () => {
  const [addProduct, { isLoading }] = useAddProductsMutation();
  const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();
  const productSchema = Yup.object({
    product_name: Yup.string().required(),
    product_place: Yup.string().required(),
    product_detail: Yup.string().required(),
    product_price: Yup.number().required(),
    available: Yup.boolean().required(),
    product_image: Yup.mixed()
      .required()
      .test("fileType", "invalid image", (e) => {
        return ["image/jpg", "image/png", "image/jpeg"].includes(e.type);
      }),
  });

  const { values, handleChange, handleSubmit, errors, setFieldValue, touched } =
    useFormik({
      initialValues: {
        product_name: "",
        product_place: "",
        product_detail: "",
        product_price: "",
        available: true,
        product_image: null,
        imageReview: "",
      },

      onSubmit: async (val, { resetForm }) => {
        const formData = new FormData();
        formData.append("product_name", val.product_name);
        formData.append("product_place", val.product_place);
        formData.append("product_detail", val.product_detail);
        formData.append("product_price", Number(val.product_price));
        formData.append("available", val.available);
        formData.append("product_image", val.product_image);
        try {
          await addProduct({
            body: formData,
            token: user.token,
          }).unwrap();
          toast.success("add success");
          nav(-1);
        } catch (err) {
          console.log(err);
          toast.error(`${err.data?.message}`);
        }
      },
      validationSchema: productSchema,
    });

  return (
    <Card
      color="transparent"
      shadow={false}
      className="max-w-sm  mx-auto mt-4 mb-4"
    >
      <Typography variant="h4" color="blue-gray">
        Add Cabin
      </Typography>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">
          <Input
            size="lg"
            placeholder="cabin_name"
            label="cabin_name"
            name="product_name"
            onChange={handleChange}
          />
          {errors.product_name && touched.product_name && (
            <h1 className="text-pink-700">{errors.product_name}</h1>
          )}

          <Input
            size="lg"
            placeholder="cabin_place"
            label="cabin_place"
            name="product_place"
            onChange={handleChange}
          />
          {errors.product_place && touched.product_place && (
            <h1 className="text-pink-700">{errors.product_place}</h1>
          )}

          <Input
            size="lg"
            placeholder="cabin_price"
            label="cabin_price"
            name="product_price"
            onChange={handleChange}
          />
          {errors.product_price && touched.product_price && (
            <h1 className="text-pink-700">{errors.product_price}</h1>
          )}
          <Select
            label="Available"
            name="available"
            onChange={(value) => setFieldValue("available", value === "yes")}
          >
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
          {errors.available && touched.available && (
            <h1 className="text-pink-700">{errors.available}</h1>
          )}

          <Textarea
            size="lg"
            placeholder="cabin_detail"
            label="cabin_detail"
            name="product_detail"
            onChange={handleChange}
          />

          <div className="space-y-2">
            <h1>Select An Image</h1>

            <Input
              label="Image File"
              onChange={(e) => {
                const file = e.target.files[0];
                setFieldValue("imageReview", URL.createObjectURL(file));
                setFieldValue("product_image", file);
              }}
              type="file"
              name="image"
              multiple
              accept="image/*"
            />
            {errors.product_image && touched.product_image && (
              <h1 className="text-pink-700">{errors.product_image}</h1>
            )}
            {values.imageReview && <img src={values.imageReview} alt="" />}
          </div>
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
};
export default ProductForm;
