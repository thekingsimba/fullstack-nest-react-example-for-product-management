import { Button, Stack, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ menus = [] }) => {
  const [parentPath, setParentPath] = useState("/product");
  const navigate = useNavigate();
  const navigateTo = (e, path) => {
    e.preventDefault();
    navigate(`${path}`);
  };
  const handleClick = (e, path) => {
    navigateTo(e, path);
    setParentPath(path);
  };
  return (
    <MenuStackContainer direction="column" textAlign="center">
      {menus.map(({ path = "", icon = "", label = "" }) => (
        <MenuButtonContainer
          onClick={(e) => handleClick(e, path)}
          key={path}
          isactive={parentPath == path ? "true" : "false"}
        >
          <Stack alignItems="center">
            {icon}
            <MenuLabel variant="body2">{label}</MenuLabel>
          </Stack>
        </MenuButtonContainer>
      ))}
    </MenuStackContainer>
  );
};

export default SideMenu;

SideMenu.propTypes = {
  menus: PropTypes.array.isRequired,
};

const MenuButtonContainer = styled(Button)(({ isactive }) => ({
  background: isactive.toString() == "true" ? "#FFCC00" : null,
  color: "#161237",
  borderRadius: "0px",
  paddingBlock: "8px",
  "&:hover": {
    background: "#E1BB3F",
    color: "white",
  },
}));
const MenuLabel = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "13px",
}));
const MenuStackContainer = styled(Stack)(() => ({
  width: "86px",
  background: "white",
  height: "100%",
}));
