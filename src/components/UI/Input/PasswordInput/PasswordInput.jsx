import React, {useState} from 'react';
import {IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const PasswordInput = ({password, setPassword}) => {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <OutlinedInput
            id="current-password"
            name={'current-password'}
            autoComplete={'current-password'}
            type={showPassword ? 'text' : 'password'}
            placeholder={'Пароль'}

            style={{borderRadius: '10px'}}
            sx={{width: '100%'}}

            onChange={e => setPassword(e.target.value)}
            value={password}

            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                </InputAdornment>
            }
        />
    );
};

export default PasswordInput;