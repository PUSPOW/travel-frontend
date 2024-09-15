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
              label="First name"
              placeholder="First name"
            />{" "}
            <Input variant="static" label="Last name" placeholder="Last name" />{" "}
          </div>
          <div className="pr-5 pt-10 w-72">
            <Input
              type="email"
              label="Email Address"
              placeholder="some@gmail.com"
              variant="static"
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
          </div>
          <div className="pr-5 pt-5">
            <Typography
              as="a"
              color="black"
              className="mr-4 ml-2 cursor-pointer py-1.5 pr-10 font-bold"
            >
              Phone number
            </Typography>
            <div className="relative flex w-[200px] max-w-[30rem]">
              <Menu placement="bottom-start">
                <MenuHandler>
                  <Button
                    ripple={false}
                    variant="text"
                    color="blue-gray"
                    className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                  >
                    <img
                      src={flags.svg}
                      alt={name}
                      className="h-4 w-4 rounded-full object-cover"
                    />
                    {countryCallingCode}
                  </Button>
                </MenuHandler>
                <MenuList className="max-h-[20rem] max-w-[18rem]">
                  {countries.map(
                    ({ name, flags, countryCallingCode }, index) => {
                      return (
                        <MenuItem
                          key={name}
                          value={name}
                          className="flex items-center gap-2"
                          onClick={() => setCountry(index)}
                        >
                          <img
                            src={flags.svg}
                            alt={name}
                            className="h-5 w-5 rounded-full object-cover"
                          />
                          {name}{" "}
                          <span className="ml-auto">{countryCallingCode}</span>
                        </MenuItem>
                      );
                    }
                  )}
                </MenuList>
              </Menu>
              <Input
                type="tel"
                placeholder="Mobile Number"
                className="rounded-l-none !border-t-blue-gray-200 w-[200px] focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0",
                }}
              />
            </div>
          </div>
          <div className="w-96 pr-5 pt-5">
            {" "}
            <Typography
              as="a"
              color="black"
              className="mr-4 ml-2 cursor-pointer py-1.5 pr-10 font-bold"
            >
              Message
            </Typography>
            <Textarea label="Leave us a message" />
          </div>
          <div className="pr-5 pt-5">
            <Typography
              as="a"
              color="black"
              className="mr-4 ml-2 cursor-pointer py-1.5 pr-10 font-bold"
            >
              Services
            </Typography>
            <div className="grid grid-cols-2">
              <Checkbox defaultChecked label="Remember Me" />
              <Checkbox defaultChecked label="Remember Me" />
              <Checkbox defaultChecked label="Remember Me" />
              <Checkbox defaultChecked label="Remember Me" />
            </div>
            <Button>sumbit</Button>
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
              className="mr-4 ml-2 cursor-pointer pr-10 font-bold"
            >
              Start a live chat{" "}
            </Typography>
            <Typography
              as="a"
              color="black"
              variant="h6"
              className="mr-4 ml-2 cursor-pointer  pr-10 font-bold"
            >
              Shoot us on email{" "}
            </Typography>
            <Typography
              as="a"
              color="black"
              variant="h6"
              className="mr-4 ml-2 cursor-pointer pr-10 font-bold"
            >
              Message on Whatsup{" "}
            </Typography>
          </div>
          <div className="pt-5">
            <Typography
              as="a"
              color="black"
              variant="h4"
              className="mr-4 ml-2 cursor-pointer py-1.5 pr-10 font-bold"
            >
              Call us
            </Typography>
            <Typography
              as="a"
              color="black"
              className="mr-4 ml-2 cursor-pointer py-1.5 pr-10"
            >
              Call our team mon-fri 8am to 5pm{" "}
            </Typography>

            <Typography
              as="a"
              color="black"
              variant="h6"
              className="mr-4 ml-2 cursor-pointer pr-10 font-bold"
            >
              Call us +9779843467662
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
              className="mr-4 ml-2 cursor-pointer pr-10 font-bold"
            >
              100 Kamalbinak,Bhaktapur VIC 203
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
