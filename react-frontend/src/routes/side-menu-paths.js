import InfoIcon from "@mui/icons-material/Info";
import StoreIcon from "@mui/icons-material/Store";

export const paths = [
  {
    path: "/products",
    icon: <StoreIcon sx={{ height: 23, width: 20 }} />,
    label: "Products",
  },
  {
    path: "/about",
    icon: <InfoIcon sx={{ height: 23, width: 20 }} />,
    label: "About",
  },
];
