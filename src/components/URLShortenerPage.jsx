import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import logger from "../middleware/logger";
import Navbar from "./Navbar";

export default function URLShortenerPage() {
  const [input, setInput] = useState({
    longUrl: "",
    validity: "",
    shortcode: "",
  });
  const [shortened, setShortened] = useState([]);

  const handleChange = (field, value) => {
    setInput({ ...input, [field]: value });
  };

  const shortenUrl = () => {
    const { longUrl, validity, shortcode } = input;

    if (!/^https?:\/\//.test(longUrl)) {
      alert("Please enter a valid URL (must start with http:// or https://)");
      return;
    }

    const code = shortcode || uuidv4().slice(0, 6);

    if (localStorage.getItem(code)) {
      alert(`Shortcode "${code}" already exists!`);
      return;
    }

    const expiry = Date.now() + (validity ? +validity : 30) * 60000;
    const data = { longUrl, expiry, clicks: [] };

    localStorage.setItem(code, JSON.stringify(data));
    logger("Shortened URL created", { code, longUrl });

    const newShort = {
      short: window.location.origin + "/" + code,
      longUrl,
      expiry,
    };

    setShortened([...shortened, newShort]);
    setInput({ longUrl: "", validity: "", shortcode: "" }); // Clear input fields
  };

  return (
    <Container>
      <Navbar shortUrl="/" />

      <Box sx={{ mb: 2 }}>
        <TextField
          label="Long URL"
          fullWidth
          margin="dense"
          value={input.longUrl}
          onChange={(e) => handleChange("longUrl", e.target.value)}
        />
        <TextField
          label="Validity (mins)"
          type="number"
          fullWidth
          margin="dense"
          value={input.validity}
          onChange={(e) => handleChange("validity", e.target.value)}
        />
        <TextField
          label="Custom Shortcode"
          fullWidth
          margin="dense"
          value={input.shortcode}
          onChange={(e) => handleChange("shortcode", e.target.value)}
        />
      </Box>

      <Button variant="contained" onClick={shortenUrl}>
        Shorten URL
      </Button>

      <div style={{ marginTop: "1rem" }}>
        {shortened.map((item, idx) => (
          <Typography key={idx}>
            {item.longUrl} ➜{" "}
            <a href={item.short} target="_blank" rel="noreferrer">
              {item.short}
            </a>{" "}
            (Expires: {new Date(item.expiry).toLocaleTimeString()})
          </Typography>
        ))}
      </div>
    </Container>
  );
}
