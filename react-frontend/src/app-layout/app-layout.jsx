import { styled } from "@mui/material";
import Grid from "@mui/material/Grid2";

import Visible from "../common/visible/Visible";
import Header from "../components/layout-component/HeaderView";
import SideMenu from "../components/layout-component/SideMenuView";
import { paths } from "../routes/side-menu-paths";

const HeaderSpacing = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const AppLayout = (children) => {
  return (
    <Grid
      container
      direction="column"
      sx={{ height: "100%", minHeight: "100vh", background: "whitesmoke" }}
    >
      <Grid item xs={12}>
        <Header />
      </Grid>
      <HeaderSpacing />

      <Visible when={paths.length > 0}>
        <Grid item container sx={{ flexGrow: 1 }}>
          <Grid item>
            <SideMenu menus={paths.filter((path) => path.forMenu)} />
          </Grid>

          <Grid item xs sm md lg>
            {children}
          </Grid>
        </Grid>
      </Visible>
    </Grid>
  );
};

export default AppLayout;
