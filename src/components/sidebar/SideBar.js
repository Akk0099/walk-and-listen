import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";
import FastForwardIcon from "@material-ui/icons/FastForward";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import IconButton from "@material-ui/core/IconButton";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Divider from '@material-ui/core/Divider';
import PauseIcon from '@material-ui/icons/Pause';
import CloseIcon from '@material-ui/icons/Close';
import Links from "../links/links";
import Disclamer from '../disclamer/disclamer';
import "./side-bar.css";

const SideBar = ({ volume, playbackRate, muted, setVolume, setPlaybackRate, setMuted, options, option, setOption, playing, setPlaying }) => {

  const handleVolume = (event, newValue) => {
    setVolume(newValue);
  };

  const handleChange = (event, newValue) => {
    setOption(newValue);
  };

  return (
    <Container className="container" maxWidth="sm">
      <Grid
        className="grid"
        container
        spacing={3}
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Walk & Listen
          </Typography>
        </Grid>
        <Grid item className="menu">
          <Typography variant="subtitle1" className="title">
            Scroll for more places
          </Typography>
          <Divider className="divisor" />
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={option}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className="tabs"
          >
            {options.map((option) => (
              <Tab label={option.full} value={option} />
            ))}
          </Tabs>
        </Grid>
        <Grid item className="menu">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="subtitle2">Walking Speed</Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <ToggleButton
                    value={playing}
                    selected={!playing}
                    onChange={() => {
                      setPlaying(false);
                      setPlaybackRate(0);
                    }}
                  >
                    <PauseIcon />
                  </ToggleButton>
                </Grid>
                <Grid item>
                  <ToggleButton
                    value={1}
                    selected={playbackRate == 1 && playing}
                    onChange={() => {
                      setPlaybackRate(1);
                      setPlaying(true);
                    }}
                  >
                    <PlayArrowIcon />
                  </ToggleButton>
                </Grid>
                <Grid item>
                  <ToggleButton
                    value={2}
                    selected={playbackRate == 2 && playing}
                    onChange={() => {
                      setPlaybackRate(2);
                      setPlaying(true);
                    }}
                  >
                    <FastForwardIcon />
                  </ToggleButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="menu">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle2">Video Sound</Typography>
            <ToggleButton
              value={muted}
              selected={muted}
              onChange={() => {
                setMuted(!muted);
              }}
            >
              <CloseIcon />
            </ToggleButton>
          </Grid>
        </Grid>
        <Grid item className="menu">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="subtitle2">
                Volume
              </Typography>
            </Grid>
          </Grid>
          <Grid item className="volume-slider">
            <Grid container direction="row" justify="center"
              alignItems="center">
              <Grid item>
                <VolumeDown />
              </Grid>
              <Grid item xs>
                <Slider value={volume} onChange={handleVolume} aria-labelledby="continuous-slider" />
              </Grid>
              <Grid item>
                <VolumeUp />
              </Grid>
              <Grid item>
                <Typography className="volume-number" variant="subtitle2">{volume}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Links video={option.video} />
        <Disclamer/>
      </Grid>
    </Container>
  );
};

export default SideBar;
