import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const NavbarDrawer = ({openDrawer,setOpenDrawer}) => {
    return (
        <>
       
        <Drawer anchor="right" open={openDrawer}>
            <List>
                <ListItem divider button onClick={()=>setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button onClick={()=>setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>Categories</ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button onClick={()=>setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
        </>
    );
};

export default NavbarDrawer;
