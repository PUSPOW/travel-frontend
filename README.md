https://www.figma.com/proto/lgogCZEyT2ytYlpYBEZ8IS/Travel-Website-(Free-template)-(Community)?node-id=1-1553&t=DDFf55RTUDb0RATP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1

export const AddCart = ({ product }) => {
const dispatch = useDispatch();
const nav = useNavigate();
const { carts } = useSelector((state) => state.cartSlice);
const { user } = useSelector((state) => state.userSlice);
const isExist = carts.find((cart) => cart.\_id === product.\_id);

const formik = useFormik({
initialValues: {
qty: isExist?.qty || 1,
},
});

const handleSubmit = () => {
dispatch(setToCart({ ...product, qty: Number(formik.values.qty) }));
nav("/carts");
};

return (
<Card className="h-full w-full overflow-scroll">

<table className="w-full min-w-max table-auto text-left">
<thead>
<tr>
<th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
<Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
Product Name
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
                Qty
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <div>
                <select
                  defaultValue={formik.values.qty}
                  name="qty"
                  id=""
                  onChange={(e) => formik.setFieldValue("qty", e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((c) => {
                    return (
                      <option key={c + 1} value={c + 1}>
                        {c + 1}
                      </option>
                    );
                  })}
                </select>
              </div>
            </th>
          </tr>
        </thead>
      </table>
      <div className="flex justify-center pt-7">
        <Button disabled={user?.isAdmin || !user} onClick={handleSubmit}>
          Add To Cart
        </Button>
      </div>
    </Card>

);
};

        {product && <AddCart product={product} />}

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

/\*_ @format _/

import { Button, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";
const Search = () => {
const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);
const nav = useNavigate();
const [rooms, setRooms] = useState(1);
const [adults, setAdults] = useState(1);
const [children, setChildren] = useState(0);
const [childrenAges, setChildrenAges] = useState([]);
const [isOpen, setIsOpen] = useState(false);

const handleDropdownToggle = () => setIsOpen(!isOpen);
const formik = useFormik({
initialValues: {
query: "",
},
onSubmit: (val, { resetForm }) => {
nav(`/search-page/${val.query}`);
resetForm();
},
});
// Handle the change in the number of children
const handleChildrenChange = (e) => {
const count = parseInt(e.target.value);
setChildren(count);

    // Initialize or reset children ages based on the selected number of children
    const newChildrenAges = Array(count).fill(null); // Create an array of 'null' with length 'count'
    setChildrenAges(newChildrenAges);

};

// Handle the change in a specific child's age
const handleChildAgeChange = (index, age) => {
const updatedAges = [...childrenAges];
updatedAges[index] = age;
setChildrenAges(updatedAges);
};

return (
// <div className="bg-gray-100 space-x-6 h-36 w-[950px] rounded-md shadow-lg shadow-blue-gray-500   flex items-center justify-center z-30 ">
// <div className="flex h-14 gap-2">
<form onSubmit={formik.handleSubmit} className="relative">
<div className="bg-gray-100 h-36 w-[950px] rounded-md shadow-lg shadow-blue-gray-500  gap-2 flex items-center justify-center z-30">
<div>
<Input
type="search"
name="query"
onChange={formik.handleChange}
value={formik.values.query}
placeholder="Search"
containerProps={{
              className: "min-w-[288px]",
            }}
className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 w-[150px] focus:!border-blue-gray-300 ml-10"
labelProps={{
              className: "before:content-none after:content-none",
            }}
/>
</div>
<div>
<DatePicker
selected={startDate}
onChange={(date) => {
setStartDate(date);
setEndDate(null); // Reset end date if start date changes
}}
placeholderText="Select a date"
className="p-2 border rounded-lg h-14 w-28"
/>
</div>
<div>
<DatePicker
selected={endDate}
onChange={(date) => setEndDate(date)}
placeholderText="Select a date"
className="p-2 border rounded-lg h-14 w-28"
minDate={startDate}
/>
</div>
<div className="relative">
<button
            onClick={handleDropdownToggle}
            className="w-full p-2 border rounded-lg  flex justify-between items-center h-14"
          >
{rooms} Room{rooms > 1 ? "s" : ""}, {adults} Adult
{adults > 1 ? "s" : ""}, {children} Child
{children !== 1 ? "ren" : ""}
<svg
className={`w-5 h-5 transform ${isOpen ? "rotate-180" : ""}`}
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor" >
<path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
</svg>
</button>

          {isOpen && (
            <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg">
              <div className="p-4 space-y-4">
                {/* Rooms Selection */}
                <div className="flex justify-between items-center">
                  <label htmlFor="rooms" className="text-sm font-medium">
                    Rooms
                  </label>
                  <select
                    id="rooms"
                    value={rooms}
                    onChange={(e) => setRooms(parseInt(e.target.value))}
                    className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Adults Selection */}
                <div className="flex justify-between items-center">
                  <label htmlFor="adults" className="text-sm font-medium">
                    Adults
                  </label>
                  <select
                    id="adults"
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value))}
                    className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Children Selection */}
                <div className="flex justify-between items-center">
                  <label htmlFor="children" className="text-sm font-medium">
                    Children
                  </label>
                  <select
                    id="children"
                    value={children}
                    onChange={handleChildrenChange}
                    className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i}>
                        {i} {i === 1 ? "Child" : "Children"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Age Selection for Each Child */}
                {children > 0 && (
                  <div className="space-y-2">
                    {childrenAges.map((age, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <label className="text-sm font-medium">
                          Child {index + 1} Age
                        </label>
                        <select
                          value={age || ""}
                          onChange={(e) =>
                            handleChildAgeChange(
                              index,
                              parseInt(e.target.value)
                            )
                          }
                          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="" disabled>
                            Select age
                          </option>
                          {[...Array(18)].map((_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div>
          <Button color="green" type="submit">
            Find available cabins
          </Button>
        </div>
      </div>
    </form>

);
};

export default Search;
