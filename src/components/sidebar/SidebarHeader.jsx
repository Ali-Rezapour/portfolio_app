import { useState } from "react";

import { Avatar, Typography, Box, IconButton } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import {
  GitHub,
  Telegram,
  Instagram,
  WhatsApp,
  LinkedIn,
} from "@mui/icons-material";

import ThemeActionButton from "../ThemeActionButton";
import avatar from "../../assets/profile.jpg";
import { alphabetPersian } from "../../constants/alphabetPersian";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);

  return (
    <>
      <ThemeActionButton />
      <Avatar
        src={avatar}
        variant="rounded"
        sx={{
          height: 200,
          width: 200,
          margin: "0 auto",
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        YG
      </Avatar>
      <Typography variant="h6" color="#F93C92">
        <Typography variant="caption" color="tomato">
          {" < "}
        </Typography>
        <RandomReveal
          isPlaying
          duration={4}
          characterSet={alphabetPersian}
          characters="علی رضاپور"
          onComplete={() => setStart(true)}
        />

        <Typography variant="caption" color="tomato">
          {" /> "}
        </Typography>
      </Typography>
      {start && (
        <Typography variant="caption" color="gray">
          <Typography variant="caption" color="tomato">
            {" {{ "}{" "}
          </Typography>
          <RandomReveal
            isPlaying
            duration={4}
            characterSet={alphabetPersian}
            characters="توسعه دهنده وبسایت و وب اپلیکیشن"
          />
          <Typography variant="caption" color="tomato">
            {" "}
            {" }} "}
          </Typography>
        </Typography>
      )}

      <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
        <IconButton aria-label="Github">
          <a
            href="https://github.com/Ali-Rezapour"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub sx={{ color: "gray" }} />
          </a>
        </IconButton>
        <IconButton aria-label="Telegram">
          <a
            href="https://t.me/Ali_Rezapour_78"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram sx={{ color: "gray" }} />
          </a>
        </IconButton>
        <IconButton aria-label="WhatsApp">
          <a
            href="https://wa.me/qr/R54F7YLTJJ75I1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp sx={{ color: "gray" }} />
          </a>
        </IconButton>
        <IconButton aria-label="Instagram">
          <a
            href="https://instagram.com/ali-.rezapour._"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram sx={{ color: "gray" }} />
          </a>
        </IconButton>
        <IconButton aria-label="LinkedIn">
          <a
            href="https://www.linkedin.com/in/ali-rezapour-921532234"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn sx={{ color: "gray" }} />
          </a>
        </IconButton>
      </Box>
    </>
  );
};

export default SidebarHeader;
