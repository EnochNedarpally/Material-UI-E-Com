import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const Header = () => {
    return (
        <Box sx={{ height: '80vh', background: 'linear-gradient(90deg, rgba(224,255,245,0.7235936610972514) 0%, rgba(238,222,234,0.49670290479473034) 59%, rgba(232,204,224,0.7011846975118172) 100%)' }}>
            <Box sx={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Typography variant='h4' sx={{color:'#878aa1',mb:3}}>
                    Winter Sale
                </Typography>
                <Typography variant='h4' sx={{color:'#878aa1',mb:3}}>
                    New Deals
                </Typography>
                <Typography variant='h4' sx={{color:'#878aa1',mb:3}}>
                    Save on Big Brands
                </Typography>
            </Box>

        </Box>
    );
};

export default Header;
