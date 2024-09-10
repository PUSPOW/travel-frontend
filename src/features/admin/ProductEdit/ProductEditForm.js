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
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { imageUrl } from "../../../constant/constant";
import { toast } from "react-toastify";
import { useUpdateProductMutation } from "../../shared/productApi";

const ProductEditForm = ({ data }) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();

  const productSchema = Yup.object({
    product_name: Yup.string().required(),
    product_place: Yup.string().required(),
    product_detail: Yup.string().required(),
    product_price: Yup.number().required(),
    available: Yup.string().required(),
    // product_image: Yup.mixed()
    //   .required()
    //   .test("fileType", "invalid image", (e) => {
    //     return ["image/jpg", "image/png", "image/jpeg"].includes(e.type);
    //   }),
  });

  const { values, handleChange, handleSubmit, errors, setFieldValue, touched } =
    useFormik({
      initialValues: {
        product_name: data.product_name,
        product_place: data.product_place,
        product_detail: data.product_detail,
        product_price: data.product_price,
        available: data.available,
        product_image: null,
        imageReview: data.product_image,
      },

      onSubmit: async (val, { resetForm }) => {
        const formData = new FormData();
        formData.append("product_name", val.product_name);
        formData.append("product_place", val.product_place);
        formData.append("product_detail", val.product_detail);
        formData.append("product_price", Number(val.product_price));
        formData.append("available", val.available);

        try {
          if (val.product_image === null) {
            await updateProduct({
              id: data._id,
              token: user.token,
              body: formData,
            }).unwrap();
          } else {
            formData.append("image", val.product_image);
            formData.append("imagePath", data.product_image);
            await updateProduct({
              id: data._id,
              token: user.token,
              body: formData,
            }).unwrap();
          }
          toast.success("successfully updated");
          nav(-1);
        } catch (err) {
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
        Edit Product
      </Typography>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">
          <Input
            size="lg"
            placeholder="product_name"
            label="product_name"
            name="product_name"
            value={values.product_name}
            onChange={handleChange}
          />
          {errors.product_name && touched.product_name && (
            <h1 className="text-pink-700">{errors.product_name}</h1>
          )}
          <Input
            size="lg"
            placeholder="product_place"
            label="product_place"
            name="product_place"
            value={values.product_place}
            onChange={handleChange}
          />
          {errors.product_place && touched.product_place && (
            <h1 className="text-pink-700">{errors.product_place}</h1>
          )}

          <Input
            size="lg"
            placeholder="product_price"
            label="product_price"
            name="product_price"
            value={values.product_price}
            onChange={handleChange}
          />
          {errors.product_price && touched.product_price && (
            <h1 className="text-pink-700">{errors.product_price}</h1>
          )}
          <Input
            size="lg"
            placeholder="available"
            label="available"
            value={values.available}
            onChange={handleChange}
            name="available"
          />
          {errors.available && touched.available && (
            <h1 className="text-pink-700">{errors.available}</h1>
          )}

          <Textarea
            size="lg"
            placeholder="product_detail"
            label="product_detail"
            name="product_detail"
            value={values.product_detail}
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
            />
            {errors.product_image && touched.product_image && (
              <h1 className="text-pink-700">{errors.product_image}</h1>
            )}

            {values.imageReview && (
              <img
                src={
                  values.product_image === null
                    ? `${imageUrl}${values.imageReview}`
                    : values.imageReview
                }
                alt=""
              />
            )}
          </div>
        </div>

        <Button loading={isLoading} type="submit" className="mt-6" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
};
export default ProductEditForm;
