import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ReviewIcon from "@mui/icons-material/AccessTimeOutlined";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";

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
