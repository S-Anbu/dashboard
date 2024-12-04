import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ThemeProvider } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function SidebarWithLogo() {


  const theme = {
    list: {
      defaultProps: {
        ripple: true,
        className: "",
      },
      styles: {
        base: {
          list: {
            display: "flex",
            flexDirection: "flex-col",
            gap: "gap-1",
            minWidth: "min-w-[240px]",
            p: "p-2",
            fontFamily: "font-sans",
            fontSize: "text-base",
            fontWeight: "font-normal",
            color: "text-gray-500",
          },
          item: {
            initial: {
              display: "flex",
              alignItems: "items-center",
              width: "w-full",
              padding: "p-3",
              borderRadius: "rounded-lg",
              textAlign: "text-start",
              lightHeight: "leading-tight",
              transition: "transition-all",
              bg: "hover:bg-orange-800  focus:bg-orange-800  active:bg-orange-800 ",
              color: "hover:text-white focus:text-white active:text-white",
              outline: "outline-none",
            },
            selected: {
              bg: "bg-orange-800/50",
              color: "text-white",
            },
            disabled: {
              opacity: "opacity-50",
              cursor: "cursor-not-allowed",
              pointerEvents: "pointer-events-none",
              userSelect: "select-none",
              bg: "hover:bg-transparent focus:bg-transparent active:bg-transparent",
              color: "hover:text-blue-gray-500 focus:text-blue-gray-500 active:text-blue-gray-500",
            },
          },
          itemPrefix: {
            display: "grid",
            placeItems: "place-items-center",
            marginRight: "mr-4",
          },
          itemSuffix: {
            display: "grid",
            placeItems: "place-items-center",
            marginRight: "ml-auto justify-self-end",
          },
        },
      },
    },
  };
  return (
    <Card className=" w-full max-w-[16rem] p-4  rounded-none bg-black fixed h-full ">
      <div className="mb-2 p-4 flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="stroke-orange-900"  viewBox="0 0 48 48"><g fill="none"  stroke-linejoin="round" stroke-width="4"><path d="M2 17.4L23.022 9l21.022 8.4l-21.022 8.4z"/><path stroke-linecap="round" d="M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825"/></g></svg>
        <Typography variant="h5" color="white">
          Logo Here
        </Typography>
      </div>
      <hr />
      <ThemeProvider value={theme}>
      <List >
      <Link to="/">
        <ListItem className=" ">
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        </Link>
        <Link to="/MyCourse">
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Create New Course
          
        </ListItem>
        </Link>
        <Link to="/ViewDetails">
        <ListItem  >
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          My Courses
        </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Earning
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Message
          <ListItemSuffix>
            <Chip  value="3" size="sm" variant="ghost" color="orange" c className=" text-white bg-orange-800 rounded-full w-6 h-6" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
      </ThemeProvider>
    </Card>
  );
}