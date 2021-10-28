import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";

const Footer = () => {
  return (
    <BottomNavigation showLabels className="mainPageLink">
      <BottomNavigationAction
        href={"/map"}
        label="Map"
        className="mainPageLinkIcon"
        icon={<MapOutlinedIcon fontSize="inherit" />}
      />
      <BottomNavigationAction
        href={"/courts"}
        label="Full List"
        className="mainPageLinkIcon"
        icon={<FormatListBulletedIcon fontSize="inherit" />}
      />
      <BottomNavigationAction
        href={"/add"}
        label="Add"
        className="mainPageLinkIcon"
        icon={<AddCircleOutlineIcon fontSize="inherit" />}
      />
    </BottomNavigation>
  );
};

export default Footer;
