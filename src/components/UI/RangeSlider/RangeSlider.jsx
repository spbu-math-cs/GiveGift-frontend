import * as React from 'react';
import Slider from '@mui/material/Slider';
import {useState} from "react";
import {TextField, ThemeProvider} from "@mui/material";
import {checkPrice} from "../../../utils/checkers";
import styles from "./RangeSlider.module.css"
import {redTheme} from "../../../muiThemes/themes";


export default function RangeSlider() {
    const minPrice = 0, maxPrice = 150000;
    const [priceRangeValue, setPriceRangeValue] = useState([minPrice, maxPrice]);

    const handlePriceRangeChange = (event, newValue) => {
        setPriceRangeValue(newValue);
    };

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
                        InputLabelProps={{shrink: true}}
                        sx={{width: "100px"}}
                        size={"small"}
                        value={priceRangeValue[0]}
                        onChange={(e) => {
                            setPriceRangeValue(checkPrice(minPrice, maxPrice, Number(e.target.value), priceRangeValue[1]));
                        }}
                    />
                    <TextField
                        label="до"
                        type="number"
                        variant="outlined"
                        InputLabelProps={{shrink: true}}
                        sx={{width: "100px"}}
                        size={"small"}
                        value={priceRangeValue[1]}
                        onChange={(e) => {
                            setPriceRangeValue(checkPrice(minPrice, maxPrice, priceRangeValue[0], Number(e.target.value)));
                        }}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
}
