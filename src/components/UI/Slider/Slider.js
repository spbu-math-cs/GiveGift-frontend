import * as React from 'react';
import Slider from '@mui/material/Slider';
import {styled, ThemeProvider} from "@mui/material";
import {redTheme} from "../../../muiThemes/themes";


const CustomSlider = styled(Slider)({
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 14,
        padding: 0,
        top: -8,
        width: 32,
        height: 24,
        borderRadius: 5,

        backgroundColor: '#ff6332',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) scale(0)',
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(0%, -100%) scale(1)',
        },
    },
});

export default function NumOfIdeasSlider({minNumOfIdeas, maxNumOfIdeas, numOfIdeas, handleChangeNumOfIdeas}) {
    return (
        <ThemeProvider theme={redTheme}>
        <CustomSlider
            valueLabelDisplay="auto"
            aria-label="num of ideas slider"
            value={numOfIdeas}
            onChange={handleChangeNumOfIdeas}
            min={minNumOfIdeas}
            max={maxNumOfIdeas}
            sx={{display: "grid", justifySelf: "center"}}
        />
        </ThemeProvider>
    )
}