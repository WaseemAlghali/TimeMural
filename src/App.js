import "./App.css";
import React, { useState, useEffect } from "react";
import song from "./assets/muralsong.mp3";
import mural from "./assets/mural.gif";
import empty from "./assets/empty.jpg";
import { Grid, Typography, Button, Tooltip } from "@mui/material";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import InfiniteIcon from "@mui/icons-material/AllInclusiveRounded";
const url =
  "https://drive.google.com/uc?export=view&id=1ZBpWLu4WjMSWgFpQJ-w6Ma86H4OYmGsY";
function App() {
  function actualSeconds() {
    return Math.floor(Math.random() * (59 - 0 + 1) + 0);
  }
  function actualMinutes() {
    return Math.floor(Math.random() * (59 - 0 + 1) + 0);
  }
  function actualHours() {
    return Math.floor(Math.random() * (24 - 0 + 1) + 0);
  }
  const [brokenSecond, setbrokenSecond] = useState(actualSeconds());
  const [brokenMinute, setbrokenMinute] = useState(actualMinutes());
  const [brokenHour, setbrokenHour] = useState(actualHours());
  const [selected, setselected] = useState(false);
  const [hours, sethours] = useState(new Date().getHours());
  const [minutes, setminutes] = useState(new Date().getMinutes());
  const [seconds, setseconds] = useState(new Date().getSeconds());
  const audio = new Audio(song);

  const start = () => {
    audio.play();
  };

  function refreshClock() {
    sethours(new Date().getHours());
    setminutes(new Date().getMinutes());
    setseconds(new Date().getSeconds());
    setbrokenHour(actualHours());
    setbrokenMinute(actualMinutes());
    setbrokenSecond(actualSeconds());
  }

  useEffect(() => {
    const updateFakeClock = setInterval(refreshClock, 100);
    return function cleanup() {
      clearInterval(updateFakeClock);
    };
  }, []);

  useEffect(() => {
    audio.addEventListener(
      "ended",
      function () {
        audio.currentTime = 1;
        audio.play();
      },
      false
    );
  }, [start]);

  return (
    <>
      {selected ? (
        <div
          className='App'
          style={{
            cursor: "none",
            pointerEvents: "none",
            backgroundImage: "url(" + empty + ")",
            backgroundSize: "95%",
          }}>
          <header
            className='App-header'
            style={{
              backgroundImage: "url(" + mural + ")",
              backgroundSize: "75%",
              cursor: "none",
              pointerEvents: "none",
            }}>
            {/* <img src={logo} className='App-logo' alt='logo' /> */}
            <Grid container direction='column' justifyContent='center'>
              <Grid item>
                {selected ? (
                  <GlitchClip duration={5}>
                    <Typography
                      variant='h1'
                      sx={{ boxShadow: 20, fontSize: 200 }}>
                      {`${brokenHour < 10 ? "0" + brokenHour : brokenHour}:${
                        brokenMinute < 10 ? "0" + brokenMinute : brokenMinute
                      }:${
                        brokenSecond < 10 ? "0" + brokenSecond : brokenSecond
                      }`}
                    </Typography>
                  </GlitchClip>
                ) : (
                  <GlitchClip disabled duration={5}>
                    <Typography
                      variant='h1'
                      sx={{ boxShadow: 20, fontSize: 200 }}>
                      {`${hours < 10 ? "0" + hours : hours}:${
                        minutes < 10 ? "0" + minutes : minutes
                      }:${seconds < 10 ? "0" + seconds : seconds}`}
                    </Typography>
                  </GlitchClip>
                )}
              </Grid>

              {!selected ? (
                <Grid item>
                  <Button
                    // sx={
                    //   {
                    //   backgroundColor: "#000000",
                    //   "&:hover, &.Mui-focusVisible": { backgroundColor: "#050300" },
                    // }}
                    onClick={() => {
                      setselected(true);
                      start();
                    }}>
                    <InfiniteIcon sx={{ color: "#FFFFFF", fontSize: 55 }} />
                  </Button>
                </Grid>
              ) : (
                <>
                  <br />
                </>
              )}
            </Grid>
          </header>
        </div>
      ) : (
        <div
          className='App'
          style={{
            backgroundImage: "url(" + empty + ")",
            backgroundSize: "95%",
          }}>
          <header
            className='App-header'
            style={{
              backgroundImage: "url(" + empty + ")",
              backgroundSize: "95%",
            }}>
            {/* <img src={logo} className='App-logo' alt='logo' /> */}
            <Grid container direction='column' justifyContent='center'>
              <Grid item>
                {selected ? (
                  <GlitchClip duration={5}>
                    <Typography
                      variant='h1'
                      sx={{ boxShadow: 20, fontSize: 200 }}>
                      {`${brokenHour < 10 ? "0" + brokenHour : brokenHour}:${
                        brokenMinute < 10 ? "0" + brokenMinute : brokenMinute
                      }:${
                        brokenSecond < 10 ? "0" + brokenSecond : brokenSecond
                      }`}
                    </Typography>
                  </GlitchClip>
                ) : (
                  <GlitchClip disabled duration={5}>
                    <Typography
                      variant='h1'
                      sx={{ boxShadow: 20, fontSize: 200 }}>
                      {`${hours < 10 ? "0" + hours : hours}:${
                        minutes < 10 ? "0" + minutes : minutes
                      }:${seconds < 10 ? "0" + seconds : seconds}`}
                    </Typography>
                  </GlitchClip>
                )}
              </Grid>

              {!selected ? (
                <Grid item>
                  <Tooltip
                    title={
                      <h4
                        style={{
                          fontSize: 15,
                        }}>{`This button activates the Time Mural, once activated, the mural cannot be deactivated. If you have any extensions running on your web browser, turn them off to avoid lagging in the first few 'moments'.`}</h4>
                    }>
                    <Button
                      variant='contained'
                      sx={{
                        marginTop: 2,
                        backgroundColor: "#26161F",
                        color: "#354437",
                        "&:hover, &.Mui-focusVisible": {
                          backgroundColor: "#354437",
                        },
                        borderRadius: "100px",
                      }}
                      onClick={() => {
                        start();
                        setselected(true);
                      }}>
                      <InfiniteIcon sx={{ color: "#FFFFFF", fontSize: 55 }} />
                    </Button>
                  </Tooltip>
                </Grid>
              ) : (
                <>
                  <br />
                </>
              )}
            </Grid>
          </header>
        </div>
      )}
    </>
  );
}

export default App;
