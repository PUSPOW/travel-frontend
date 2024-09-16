/** @format */
import React from "react";
import {
  Checkbox,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  return (
    <div>
      <Typography
        variant="h2"
        color="blue-gray"
        className="font-bold flex justify-center"
      >
        Contact our team{" "}
      </Typography>
      <div className=" flex justify-center">
        <div className="w-[600px] pl-5 pt-5 gap-5">
          <div className="w-72 flex pr-5 pt-5 gap-5">
            <Input
              variant="static"
              label="Name"
              readOnly
              placeholder="Puspow Magar"
            />{" "}
          </div>
          <div className="pr-5 pt-10 w-72">
            <Input
              variant="static"
              label="Address"
              readOnly
              placeholder="Kamakbinayak,Bhaktapur-03"
            />{" "}
          </div>
          <div className="pr-5 pt-10 w-72">
            <Input
              type="email"
              readOnly
              label="Phone Number"
              placeholder="puspowmogor203@gmail.com"
              variant="static"
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
          </div>
          <div className="pr-5 pt-10">
            <div className="relative flex w-[200px] max-w-[30rem]">
              <Input
                type="email"
                readOnly
                label="Email Address"
                placeholder="+9779843467662"
                variant="static"
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="pt-5">
            <Typography
              as="a"
              color="black"
              variant="h4"
              className="mr-4 ml-2 cursor-pointer py-1.5 pr-10 font-bold"
            >
              Chat with us
            </Typography>
            <Typography
              as="a"
              color="black"
              className="mr-4 ml-2 cursor-pointer py-1.5 pr-10"
            >
              Speak to our friendly team via live chat
            </Typography>
            <Typography
              as="a"
              color="black"
              variant="h6"
              className="mr-4 ml-2 flex cursor-pointer pr-10 font-bold"
            >
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
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>

              <p className="underline">Start a live chat</p>
            </Typography>
            <Typography
              as="a"
              color="black"
              variant="h6"
              className="mr-4 ml-2 flex cursor-pointer  pr-10 font-bold"
            >
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
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>

              <NavLink className="underline">Shoot us on email</NavLink>
            </Typography>
            <Typography
              as="a"
              color="black"
              variant="h6"
              className="mr-4 ml-2 flex cursor-pointer pr-10 font-bold"
            >
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
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>

              <NavLink className="underline">Message on Whatsup</NavLink>
            </Typography>
          </div>
          <div className="pt-5">
            <Typography
              as="a"
              color="black"
              variant="h4"
              className="mr-4 ml-2 flex cursor-pointer py-1.5 pr-10 font-bold"
            >
              <NavLink className="underline">Call us</NavLink>
            </Typography>
            <Typography
              as="a"
              color="black"
              className="mr-4 ml-2 flex cursor-pointer py-1.5 pr-10"
            >
              <NavLink>Call our team mon-fri 8am to 5pm</NavLink>{" "}
            </Typography>

            <Typography
              as="a"
              color="black"
              variant="h6"
              className="mr-4 ml-2 flex cursor-pointer pr-10 font-bold"
            >
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
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
              <NavLink className="underline">Call us +9779843467662</NavLink>
            </Typography>
          </div>
          <div className="pt-5">
            <Typography
              as="a"
              color="black"
              variant="h4"
              className="mr-4 ml-2 cursor-pointer py-1.5 pr-10 font-bold"
            >
              Visit us
            </Typography>
            <Typography
              as="a"
              color="black"
              className="mr-4 ml-2 cursor-pointer py-1.5 pr-10"
            >
              Chat to us in person at our Puspows HQ
            </Typography>

            <Typography
              as="a"
              color="black"
              variant="h6"
              className="mr-4 ml-2 flex cursor-pointer pr-10 font-bold"
            >
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
              <p className="underline">100 Kamalbinak,Bhaktapur VIC 203</p>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
