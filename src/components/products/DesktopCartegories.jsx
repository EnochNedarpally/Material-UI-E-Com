import { AutoStories, Checkroom, Fastfood, Home, Kitchen, Movie, MusicNote, PhoneAndroid, Restaurant, SportsCricket, SportsEsports } from '@mui/icons-material';
import { Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const DesktopCartegories = () => {
  return (
      <Box mt={2} mb={2} sx={{border:'1px solid #efefef'}}>
          <Grid spacing={1} container>
                <Grid md={1} item>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <IconButton>
                            <Checkroom/>
                        </IconButton>
                        <Typography sx={{color:'#bab5b7'}}>Clothing</Typography>
                    </Box>
                </Grid>
                <Grid md={1} item>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <IconButton>
                            <SportsCricket/>
                        </IconButton>
                        <Typography sx={{color:'#bab5b7'}}>Sports</Typography>
                    </Box>
                </Grid>
                <Grid md={1} item>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <IconButton>
                            <SportsEsports/>
                        </IconButton>
                        <Typography sx={{color:'#bab5b7'}}>Gaming</Typography>
                    </Box>
                </Grid>
                <Grid md={1} item>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <IconButton>
                            <MusicNote/>
                        </IconButton>
                        <Typography sx={{color:'#bab5b7'}}>Music</Typography>
                    </Box>
                </Grid>
                <Grid md={1} item>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <IconButton>
                            <Movie/>
                        </IconButton>
                        <Typography sx={{color:'#bab5b7'}}>Entertainment</Typography>
                    </Box>
                </Grid>
                <Grid md={1} item>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <IconButton>
                            <AutoStories/>
                        </IconButton>
                        <Typography sx={{color:'#bab5b7'}}>Books</Typography>
                    </Box>
                </Grid>
                <Grid md={1} item>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <IconButton>
                            <PhoneAndroid/>
                        </IconButton>
                        <Typography sx={{color:'#bab5b7'}}>Phone</Typography>
                    </Box>
                </Grid>
                <Grid md={1} item>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <IconButton>
                            <Kitchen/>
                        </IconButton>
                        <Typography sx={{color:'#bab5b7'}}>Electronics</Typography>
                    </Box>
                </Grid>
                <Grid md={1} item>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <IconButton>
                            <Checkroom/>
                        </IconButton>
                        <Typography sx={{color:'#bab5b7'}}>Clothing</Typography>
                    </Box>
                </Grid>
                <Grid md={1} item>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <IconButton>
                            <Home/>
                        </IconButton>
                        <Typography sx={{color:'#bab5b7'}}>Home Care</Typography>
                    </Box>
                </Grid>
                <Grid md={1} item>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <IconButton>
                            <Restaurant/>
                        </IconButton>
                        <Typography sx={{color:'#bab5b7'}}>Utensils</Typography>
                    </Box>
                </Grid>
                <Grid md={1} item>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <IconButton>
                            <Fastfood/>
                        </IconButton>
                        <Typography sx={{color:'#bab5b7'}}>Foods</Typography>
                    </Box>
                </Grid>
          </Grid>
      </Box>
  );
};

export default DesktopCartegories;
