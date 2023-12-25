import React from "react";
import { redTheme } from "../muiThemes/themes";
import styles from "../../AccountInfo/EditAccInfo/EditMainInfo/EditAvatar/EditAvatarModal/EditAvatarModal.module.css";
import { IconButton, ThemeProvider } from "@mui/material";
import { checkZoom } from "../../../utils/checkers";
import {maxScale, minScale, scaleStep} from "../../../utils/constants";
import ZoomOutRoundedIcon from "@mui/icons-material/ZoomOutRounded";
import Slider from "@mui/material/Slider";
import ZoomInRoundedIcon from "@mui/icons-material/ZoomInRounded";

const ZoomSlider = ({ slideValue, setSlideValue }) => {
  return (
    <ThemeProvider theme={redTheme}>
      <div className={styles.size_slider}>
        <IconButton
          onClick={() =>
            setSlideValue(checkZoom(minScale, maxScale, slideValue - scaleStep))
          }
        >
          <ZoomOutRoundedIcon fontSize={"large"} sx={{ color: "#ff6332" }} />
        </IconButton>
        <Slider
          min={minScale}
          max={maxScale}
          size="medium"
          defaultValue={slideValue}
          value={slideValue}
          onChange={(e) => setSlideValue(e.target.value)}
        />
        <IconButton
          onClick={() =>
            setSlideValue(checkZoom(minScale, maxScale, slideValue + scaleStep))
          }
        >
          <ZoomInRoundedIcon fontSize={"large"} sx={{ color: "#ff6332" }} />
        </IconButton>
      </div>
    </ThemeProvider>
  );
};

export default ZoomSlider;