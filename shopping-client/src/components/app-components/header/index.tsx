import React, { useEffect, useMemo, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HomePage from "../../pages/homePage";
import AboutPage from "../../pages/aboutPage";
import SettingsPage from "../../pages/settingsPage";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import ProductsPage from "../../pages/productsPage";

export const routingConfiguration = [
  {
    key: "home",
    path: "/",
    label: "Home",
    element: <HomePage />,
  },
  {
    key: "about",
    path: "/about",
    label: "About",
    element: <AboutPage />,
  },
  {
    key: "settings",
    path: "/settings",
    label: "Settings",
    element: <SettingsPage />,
  },
  {
    key: "prodcuts",
    path: "/prodcuts",
    label: "Prodcuts",
    element: <ProductsPage />,
  },
];

export type RouteConfig = typeof routingConfiguration[0];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const fontSize = useAppSelector((state) => state.settings.fontSize);
  const numberOfOperations = useAppSelector(
    (state) => state.settings.numberOfOperations
  );

  const calc = useMemo(
    () => longCalculation(numberOfOperations),
    [numberOfOperations]
  );

  console.log("Header is Render");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    },
    [anchorElNav]
  );

  const handleOpenUserMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    },
    [anchorElUser]
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize: fontSize,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO {calc}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routingConfiguration.map((route: RouteConfig) => (
                <MenuItem key={route.key}>
                  <Typography textAlign="center">
                    <Link to={route.path}>{route.label}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routingConfiguration.map((route: RouteConfig) => (
              <Button key={route.key}>
                <Typography textAlign="center">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={route.path}
                  >
                    {route.label}
                  </Link>
                </Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
function longCalculation(num: number) {
  console.log("long calculation");
  return num * 9999;
}

export default Header;
