import * as React from "react";
import Slider from "@mui/material/Slider";
import { TextField, ThemeProvider } from "@mui/material";
import styles from "./RangeSlider.module.css";
import { redTheme } from "../muiThemes/themes";
import { maxPrice, minPrice } from "../../../utils/constants";

export default function RangeSlider({
  priceRangeValue,
  handlePriceRangeChange,
}) {
  return (
    <ThemeProvider theme={redTheme}>
      <div className={styles.range_slider_content}>
        <Slider
          getAriaLabel={() => "range_slider"}
          value={priceRangeValue}
          onChange={handlePriceRangeChange}
          min={minPrice}
          max={maxPrice}
        />
        <div className={styles.range_slider_inputs}>
          <TextField
            label="от"
            type="number"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={{ width: "100px" }}
            size={"small"}
            value={priceRangeValue[0].toString()}
            onChange={(e) => {
              handlePriceRangeChange(e, [
                Number(e.target.value),
                Number(priceRangeValue[1]),
              ]);
            }}
          />
          <TextField
            label="до"
            type="number"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={{ width: "100px" }}
            size={"small"}
            value={priceRangeValue[1].toString()}
            onChange={(e) => {
              handlePriceRangeChange(e, [
                Number(priceRangeValue[0]),
                Number(e.target.value),
              ]);
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
