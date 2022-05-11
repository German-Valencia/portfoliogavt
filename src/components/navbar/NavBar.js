import * as React from "react";
import Image from "../../utils/image.png"
import Principal from "../principal/Principal";

//mui component

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";



const ResponsiveAppBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img
            src={Image}
            alt="imagen1"
            width="70"
            height="70"
            style={{
              marginRight: "20px",
              marginBottom: "20px",
              marginTop: "20px",
              borderRadius: "35px"
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginRight: "600px",
              marginLeft: "10px"
            }}
          >
            GERMAN VALENCIA
          </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                
                  <Button
                    
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    href="#proyects"
                  >
                    Proyects
                  </Button>
                  <Button
                    
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    href="#skills"
                  >
                    Skills
                  </Button>
                  <Button
                    
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    href="#about"
                  >
                    About
                  </Button>
                  <Button
                    
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    href="#contact"
                  >
                    Contact
                  </Button>
                
              </Box>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginLeft: "10px"
            }}
          >
            GERMAN
            
          </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, marginLeft: "70px" }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
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
                    paddingLeft: "90px"

                  }}
                >
                 
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Proyects</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Skills</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">About</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Contact</Typography>
                    </MenuItem>
                
                </Menu>
              </Box>
        </Toolbar>
      </Container>
    </AppBar>
      <Principal/>
    </div>
  );
};
export default ResponsiveAppBar;
