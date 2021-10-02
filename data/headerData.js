import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PanToolOutlinedIcon from "@material-ui/icons/PanToolOutlined";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ReviewIcon from "@material-ui/icons/AccessTimeOutlined";
import ListIcon from "@material-ui/icons/List";
import SearchIcon from "@material-ui/icons/Search";

const headerData = [
  {
    link: "/",
    icon: <HomeOutlinedIcon />,
    text: "Home",
  },
  {
    link: "/map",
    icon: <MapOutlinedIcon />,
    text: "Map",
  },
  {
    link: "/courts",
    icon: <ListIcon />,
    text: "List",
  },
  {
    link: "/search",
    icon: <SearchIcon />,
    text: "Search",
  },
  {
    link: "/add",
    icon: <AddCircleOutlineIcon />,
    text: "Add",
  },
  {
    link: "/review",
    icon: <ReviewIcon />,
    text: "Review",
  },
  {
    link: "/about",
    icon: <InfoOutlinedIcon />,
    text: "About",
  },
  {
    link: "/contact",
    icon: <PanToolOutlinedIcon />,
    text: "Contact",
  },
];

export default headerData;
