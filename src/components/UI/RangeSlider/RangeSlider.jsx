import * as React from 'react';
import Slider from '@mui/material/Slider';
import {TextField, ThemeProvider} from "@mui/material";
import styles from "./RangeSlider.module.css"
import {redTheme} from "../muiThemes/themes";
import {maxPrice, minPrice} from "../../../utils/constants";


export default function RangeSlider(props) {
    return (
        <ThemeProvider theme={redTheme}>
            <div className={styles.range_slider_content}>
                <Slider
                    getAriaLabel={() => "range_slider"}
                    value={props.priceRangeValue}
                    onChange={props.handlePriceRangeChange}
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
                        value={props.priceRangeValue[0]}
                        onChange={(e) => {
                            props.handlePriceRangeChange(e, [Number(e.target.value), props.priceRangeValue[1]]);
                        }}
                    />
                    <TextField
                        label="до"
                        type="number"
                        variant="outlined"
                        InputLabelProps={{shrink: true}}
                        sx={{width: "100px"}}
                        size={"small"}
                        value={props.priceRangeValue[1]}
                        onChange={(e) => {
                            props.handlePriceRangeChange(e, [props.priceRangeValue[0], Number(e.target.value)]);
                        }}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
}
