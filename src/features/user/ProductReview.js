/** @format */

import { Button, Rating, Textarea, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useReviewAddMutation } from "../shared/productApi";
import { toast } from "react-toastify";

const ProductReview = ({ user, id, reviews }) => {
  const [addReview, { isLoading }] = useReviewAddMutation();

  const commentSchema = Yup.object({
    rating: Yup.number().required("required"),
    comment: Yup.string().min(5).required(),
  });

  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      rating: 0,
      comment: "",
    },
    onSubmit: async (val) => {
      try {
        const response = await addReview({
          body: {
            rating: val.rating,
            comment: val.comment,
          },
          id,
          token: user.token,
        }).unwrap();
        toast.success("review added");
      } catch (err) {
        toast.error(`${err.data?.message}`);
      }
    },
    validationSchema: commentSchema,
  });

  return (
    <div className="space-y-2 p-7">
      {!user?.isAdmin && user && (
        <div className="space-y-3">
          <Typography className="flex items-center" variant="h3">
            Rating and Reviews
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="w-96  flex justify-between">
              <h1>Tap to rate:</h1>
              <Rating
                className="items-center"
                onChange={(e) => setFieldValue("rating", e)}
                name="rating"
              />
            </div>
            <div className="w-96">
              <Textarea
                label="Write a review"
                name="comment"
                onChange={handleChange}
              />
            </div>
            <div className="justify-end flex w-96">
              <Button
                className="flex w-[20%]"
                loading={isLoading}
                type="submit"
                size="sm"
                fullWidth
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      )}

      <div className="mt-5">
        {reviews.map(({ _id, comment, rating, user }) => {
          return (
            <div key={_id} className=" space-y-4 w-96">
              <div className="flex justify-between">
                <Rating value={rating} readonly />
                <h1>{user.username}</h1>
              </div>
              <p>{comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductReview;
