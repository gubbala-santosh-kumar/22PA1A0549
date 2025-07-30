import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ shortUrl = "/" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isOnStatsPage = location.pathname === "/stats";

  const handleClick = () => {
    if (isOnStatsPage) {
      navigate(shortUrl);
    } else {
      navigate("/stats");
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          URL Shortener
        </Typography>
        <Box>
          <Button color="inherit" onClick={handleClick}>
            {isOnStatsPage ? "Home" : "View Stats"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
