/** @format */

import React, { useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  MobileNav,
  Collapse,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
  ShoppingCartIcon,
  CubeTransparentIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../features/auth/userSlice";
import { useNavigate } from "react-router";
import { clearCart } from "../features/user/CartSlice";
import LogoutDialog from "./LogoutDialog";

const userProfile = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    value: "profile",
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    value: "edit profile",
  },
  {
    label: "Carts",
    icon: ShoppingCartIcon,
    value: "carts",
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
    value: "help",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    value: "logout",
  },
];
const adminProfile = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    value: "profile",
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    value: "edit profile",
  },
  {
    label: "Admin box",
    icon: InboxArrowDownIcon,
    value: "box",
  },
  {
    label: "products",
    icon: ShoppingCartIcon,
    value: "products",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    value: "logout",
  },
];

function ProfileMenu({ user }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false); // Dialog control

  const dispatch = useDispatch();
  const nav = useNavigate();
  const closeMenu = () => setIsMenuOpen(false);
  const handleDialogOpen = () => setIsDialogOpen(!isDialogOpen); // Toggle dialog

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(userLogOut());
    nav("/");
  };
  const menuItem = user.isAdmin ? adminProfile : userProfile;

  const handleClick = (val) => {
    switch (val) {
      case "profile":
        nav("/userProfile");
        break;

      case "carts":
        nav("/carts");
        break;

      case "products":
        nav("/allProducts");
        break;

      case "logout":
        handleDialogOpen();
    }
  };
  return (
    <>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {menuItem.map(({ label, icon, value }, key) => {
            const isLastItem = key === menuItem.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={() => handleClick(value)}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <LogoutDialog
        open={isDialogOpen}
        handleOpen={handleDialogOpen}
        handleConfirm={handleLogout} // Call logout when confirmed
      />
    </>
  );
}

// nav list component
const navListItems = [
  {
    label: "Our cabins",
    href: "#cards-section", // Scrolls to "Discover our idyllic countryside cabins"
  },
  {
    label: "Get inspired",
    href: "#finding-section", // Scrolls to the Cards section
  },
  {
    label: "Gift a stay",
    href: "#questions-section", // Scrolls to the Video section
  },
  {
    label: "About us",
    href: "#about-us", // You can add this section if needed
  },
];

function NavList() {
  const navigate = useNavigate();
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-5 md:ms-50 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, href }) => (
        <Typography
          key={label}
          as="a"
          onClick={() => {
            handleScroll(href);
            navigate(href); // Updates the URL hash without reloading the page
          }}
          variant="medium"
          color="gray"
          className="font-medium flex text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            <span className="text-gray-900 font-bold"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

const Header = () => {
  const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();

  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll to show/hide navbar
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false); // Scrolling down, hide navbar
    } else {
      setShowNavbar(true); // Scrolling up, show navbar
    }

    setLastScrollY(currentScrollY);
  };

  React.useEffect(() => {
    // Resize listener (already present in your code)
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Scroll listener (newly added for scroll detection)
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up both listeners on unmount
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Navbar
      className={`sticky z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-green-100 mx-auto shadow-none p-3 lg:rounded lg:pl-6 top-0 left-0 right-0 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900 ">
        <div className="pr-40">
          <Typography
            as="a"
            variant="h3"
            href="#"
            color="green"
            onClick={() => nav("/")}
            className="mr-4 ml-2  cursor-pointer py-1.5 pr-10 font-bold"
          >
            UNWINCABINS
          </Typography>
        </div>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 pl-14 w-6" />
        </IconButton>
        {user === null ? (
          <div className="pr-14">
            <Button onClick={() => nav("/login")} size="sm" variant="text">
              <span>Log In</span>
            </Button>
            <Button
              onClick={() => nav("/signup")}
              size="sm"
              color="red"
              variant="text"
            >
              <span>Sign Up</span>
            </Button>
          </div>
        ) : (
          <ProfileMenu user={user} />
        )}
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
};
export default Header;
