/** @format */

import { Button, Input, Select, Option } from "@material-tailwind/react"; // Import Select and Option components
import { useFormik } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const nav = useNavigate();

  const formik = useFormik({
    initialValues: {
      query: "",
      people: "1", // Default value for people
      rooms: "1", // Default value for people
    },
    onSubmit: (values, { resetForm }) => {
      const start = startDate ? startDate.toISOString().split("T")[0] : "";
      const end = endDate ? endDate.toISOString().split("T")[0] : "";

      // Check if the search query is empty
      if (!values.query) {
        toast.error("Please enter a search query!");
        return;
      }

      // Check if dates are required
      if (!start || !end) {
        toast.error("Please select both check-in and check-out dates!");
        return;
      }

      if (!values.people || !values.rooms) {
        toast.error("Please select the number of people and rooms!");
        return;
      }

      try {
        // Navigate with encoded query, dates, and people count
        nav(
          `/search-page/${encodeURIComponent(values.query)}/${start}/${end}/${
            values.people
          }/${values.rooms}`
        );
        resetForm();
      } catch (error) {
        toast.error("Search failed. Please try again.");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="relative">
      <div className="bg-gray-100 h-auto max-w-full md:w-[950px] rounded-md shadow-md shadow-blue-gray-500 gap-3 flex flex-col md:flex-row items-center justify-center md:justify-between p-4 md:p-6 z-20">
        <div className="flex-1 md:flex-initial mb-4 md:mb-0">
          <Input
            type="search"
            name="query"
            onChange={formik.handleChange}
            value={formik.values.query}
            placeholder="Search"
            className="!border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 w-full md:w-[150px] focus:!border-blue-gray-300 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex-1 md:flex-initial mb-4 md:mb-0">
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setEndDate(null); // Reset endDate when startDate changes
            }}
            placeholderText="check-in date"
            className="p-2 border rounded-lg h-11 w-full md:w-32"
          />
        </div>
        <div className="flex-1 md:flex-initial mb-4 md:mb-0">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="check-out date"
            className="p-2 border rounded-lg h-11 w-full md:w-32"
            minDate={startDate} // End date cannot be earlier than start date
          />
        </div>
        {/* Dropdown for People */}
        <div className="flex md:flex-initial bg-white gap-2 rounded-md mb-4 md:mb-0">
          <div>
            <label
              htmlFor="people"
              className="block text-sm font-medium text-gray-700"
            >
              People
            </label>
            <select
              id="people"
              name="people"
              onChange={(e) => formik.setFieldValue("people", e.target.value)}
              value={formik.values.people}
              className="mt-1 block w-full md:w-14 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="rooms"
              className="block text-sm font-medium text-gray-700"
            >
              Rooms
            </label>
            <select
              id="rooms"
              name="rooms"
              onChange={(e) => formik.setFieldValue("rooms", e.target.value)}
              value={formik.values.rooms}
              className="mt-1 block w-full md:w-14 bg-white border border-gray-300 rounded-md shadow-sm sm:text-sm"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
        <div className="flex-1 md:flex-initial">
          <Button color="green" type="submit" className="w-full md:w-auto">
            Find available cabins
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Search;
