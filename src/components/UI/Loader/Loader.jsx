import React from 'react';
import loading from '../../../assets/mascot_loading.png'
import styles from './Loader.module.css'
import {CircularProgress, ThemeProvider} from "@mui/material";
import {redTheme} from "../muiThemes/themes";

const Loader = ({loadingText}) => {
    return (
        <div className="slider fadein" style={{display: "grid"}}>
            <div className={styles.loader}>
                <img src={loading} alt="loading..."/>
                <div className={styles.loading_msg}>
                    <span className={styles.loading_text}>{loadingText}</span>
                    <ThemeProvider theme={redTheme}>
                        <CircularProgress size="3rem"/>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};

export default Loader;