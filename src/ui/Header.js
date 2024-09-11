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
} from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userLogOut } from "../features/auth/userSlice";
import { clearCart } from "../features/user/CartSlice";
import LogoutDialog from "./LogoutDialog";

const userProfile = [
  { label: "My Profile", icon: UserCircleIcon, value: "profile" },
  { label: "Carts", icon: ShoppingCartIcon, value: "carts" },
  // { label: "Help", icon: LifebuoyIcon, value: "help" },
  { label: "Sign Out", icon: PowerIcon, value: "logout" },
];

const adminProfile = [
  { label: "My Profile", icon: UserCircleIcon, value: "profile" },
  { label: "Cabins", icon: ShoppingCartIcon, value: "cabins" },
  { label: "Sign Out", icon: PowerIcon, value: "logout" },
];

function ProfileMenu({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog control
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
      case "cabins":
        nav("/allProducts");
        break;
      case "logout":
        handleDialogOpen();
        break;
      default:
        break;
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

// NavList component
const navListItems = [
  { label: "Our cabins", href: "#cards-section" },
  { label: "Get inspired", href: "#finding-section" },
  { label: "Gift a stay", href: "#questions-section" },
  { label: "About us", href: "/about" },
];

function NavList({ closeNav }) {
  const navigate = useNavigate();

  const location = window.location.pathname; // Get current route

  const handleScroll = (href) => {
    closeNav();
    if (href.startsWith("/")) {
      // Navigate to external routes
      navigate(href);
    } else {
      // Handle scrolling for internal page sections
      if (location !== "/") {
        // If not on the homepage, navigate to the homepage first
        navigate("/"); // Redirect to homepage before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100); // Adding delay to allow routing to homepage
      } else {
        // If already on the homepage, scroll smoothly to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, href }, key) => (
        <Typography
          key={label}
          as="a"
          onClick={(e) => {
            e.preventDefault();
            handleScroll(href);
            navigate(href);
          }}
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500 cursor-pointer"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            <span className="text-gray-900">{label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

// Header component
const Header = () => {
  const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
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
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          color="green"
          variant="h3"
          onClick={() => nav("/")}
          className="mr-4 ml-2 cursor-pointer py-1.5 pr-10 font-bold"
        >
          UNWINDCABINS
        </Typography>

        <div className="hidden lg:block">
          <NavList closeNav={() => setIsNavOpen(false)} />
        </div>

        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden" // Visible on small screens, hidden on lg and above
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        {/* Visible only on larger screens */}
        {user === null && (
          <div className="hidden lg:flex lg:gap-4">
            <Button onClick={() => nav("/login")} size="sm" variant="text">
              Log In
            </Button>
            <Button
              onClick={() => nav("/signup")}
              size="sm"
              color="red"
              variant="text"
            >
              Sign Up
            </Button>
          </div>
        )}

        {user !== null && <ProfileMenu user={user} />}
      </div>

      {/* Mobile Nav */}
      <MobileNav open={isNavOpen}>
        <NavList closeNav={() => setIsNavOpen(false)} />{" "}
        {/* Pass closeNav to NavList */}
        {/* Show Log In / Sign Up in Mobile Nav */}
        {user === null && (
          <div className="flex items-center gap-4 mt-4">
            <Button
              onClick={() => {
                setIsNavOpen(false);
                nav("/login");
              }}
              size="sm"
              variant="text"
              fullWidth
            >
              Log In
            </Button>
            <Button
              onClick={() => {
                setIsNavOpen(false);
                nav("/signup");
              }}
              size="sm"
              color="red"
              variant="text"
              fullWidth
            >
              Sign Up
            </Button>
          </div>
        )}
      </MobileNav>
    </Navbar>
  );
};

export default Header;
