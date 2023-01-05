import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import FlexBetween from './FlexBetween';
import MenuIcon from "@mui/icons-material/Menu";
import { DarkModeOutlined, LightModeOutlined, Search, SettingsOutlined } from '@mui/icons-material';
import { setMode } from 'State';

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
  
    return (
        <AppBar sx={{
            position:'static',
            background: 'none',
            boxShadow:'none'
        }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <FlexBetween>
                    
                </FlexBetween>
                {/* Left side  */}
                <FlexBetween>
                    <IconButton onClick={() => console.log('first')} >
                        <MenuIcon/> 
                    </IconButton>
                    <FlexBetween backgroundColor={theme.palette.background.alt}
                        borderRadius='9px'
                        gap="3rem"
                        p='0.1rem 1.5rem'
                    >
                        <InputBase placeholder='search...' />
                        <IconButton >
                            <Search/> 
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>
                {/* right sidee  */}

                <FlexBetween gap="1.5rem">
                    <IconButton onClick={() => dispatch(setMode())}>
                        {
                            theme.palette.mode === "dark" ? <DarkModeOutlined sx={{fontSize:'25px'}}/> : <LightModeOutlined sx="25rem" />
                        }
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined sx='25rem'/> 
                    </IconButton>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;