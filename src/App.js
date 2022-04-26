import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { ToggleButton, IconButton, Grid, Typography } from "@mui/material";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import InfiniteIcon from "@mui/icons-material/AllInclusiveRounded";

function App() {
  // const classes = useStyles();
  const [selected, setselected] = useState(false);
  const [hours, sethours] = useState(new Date().getHours());
  const [minutes, setminutes] = useState(new Date().getMinutes());
  const [seconds, setseconds] = useState(new Date().getSeconds());

  function refreshClock() {
    sethours(new Date().getHours());
    setminutes(new Date().getMinutes());
    setseconds(new Date().getSeconds());
  }

  useEffect(() => {
    const updateFakeClock = setInterval(refreshClock, 100);
    return function cleanup() {
      clearInterval(updateFakeClock);
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <Grid container direction='column' justifyContent='center'>
          <Grid item>
            <GlitchClip duration='5'>
              <Typography variant='h1'>
                {`${hours < 10 ? "0" + hours : hours}:${
                  minutes < 10 ? "0" + minutes : minutes
                }:${seconds < 10 ? "0" + seconds : seconds}`}
              </Typography>
            </GlitchClip>
          </Grid>
          <Grid item>
            <ToggleButton
              // sx={
              //   {
              //   backgroundColor: "#000000",
              //   "&:hover, &.Mui-focusVisible": { backgroundColor: "#050300" },
              // }}
              value='check'
              selected={selected}
              onChange={() => {
                setselected(!selected);
              }}>
              <InfiniteIcon sx={{ color: "#FFFFFF", fontSize: 55 }} />
            </ToggleButton>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
