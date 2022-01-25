import { AppBar, Badge, Button, IconButton, Toolbar, Typography, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { ShoppingBag, ShoppingCart,Menu as MenuIcon } from '@mui/icons-material'
import React, { useState } from 'react';
import { Box } from '@mui/system';
import NavbarDrawer from './NavbarDrawer';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const open = Boolean(anchorEl);


    const theme = useTheme();
    const matchesBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));


    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = (e) => {
        setAnchorEl(null);
    }
    return (
        <>

            <Box elevation={0} sx={{ background: 'white' }}>
                <Toolbar>
                    <Box component='div' sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <IconButton
                                sx={{
                                    mr: 2,
                                    color: "#616161"
                                }}
                            >
                                <ShoppingBag />
                            </IconButton>
                        </Box>
                        {!matchesBreakpoint ?
                            <>
                                <Box sx={{ display: 'flex', }}>
                                    <Typography sx={{ mr: 2, color: '#616161', cursor: 'pointer' }}>Home</Typography>
                                    <Typography
                                        sx={{ mr: 2, color: '#616161', cursor: 'pointer' }}
                                        aria-controls={open ? "basic-menu" : undefined}
                                        aria-haspopup='true'
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >Categories</Typography>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Electronics</MenuItem>
                                        <MenuItem onClick={handleClose}>Fashion</MenuItem>
                                        <MenuItem onClick={handleClose}>Phone</MenuItem>
                                    </Menu>
                                    <Typography sx={{ mr: 2, color: '#616161', cursor: 'pointer' }}>Men</Typography>
                                    <Typography sx={{ mr: 2, color: '#616161', cursor: 'pointer' }}>Women</Typography>
                                    <Typography sx={{ mr: 2, color: '#616161', cursor: 'pointer' }}>Profile</Typography>
                                    <Typography sx={{ mr: 2, color: '#616161', cursor: 'pointer' }}>FAQ</Typography>
                                </Box>
                            </> : <NavbarDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
                        }
                        <Box>
                            <Button sx={{ background: 'crimson' }} variant='contained'>Account</Button>
                            <IconButton>
                                <Badge badgeContent={4} color="primary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                            {
                                matchesBreakpoint && 
                                <IconButton sx={{ ml:1 }} onClick={()=>setOpenDrawer((prev)=>!prev)}>
                                        <MenuIcon/>
                                </IconButton>
                            }
                        </Box>
                    </Box>
                </Toolbar>
            </Box>
        </>
    )
        ;
};

export default Navbar;
