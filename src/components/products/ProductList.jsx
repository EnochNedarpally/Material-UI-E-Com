import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DesktopCartegories from './DesktopCartegories';
import MobileCategories from './MobileCategories';
import Products from './Products';

const ProductList = () => {
  return (
      <Box sx={{minHeight:'50vh',mt:-10,mr:2,ml:2}}>
          <Grid  container>
                <Grid sx={{
                    display:'flex',
                    flexDirection:{xs:'column',md:'row'}
                }} md={6} item>
                   <Box sx={{width:{xs:'100%',sm:'100%',md:'40%'}}} component='img' src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />
                   <Box component='div' sx={{
                       mt:11,
                   }}>
                        <Typography variant='h6' >Jessie Thunder Shoes</Typography>
                        <Typography sx={{fontSize:'0.9rem', mt:2,mb:2,fontWeight:'300'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae dignissimos velit sequi maxime magni!</Typography>
                        <Typography variant='h6' sx={{color:'#de92b3',mb:1}}>
                            Rs 1399
                        </Typography>
                        <Button variant='outlined'>Add to Cart</Button>
                   </Box>
                </Grid>
                <Grid sx={{
                    display:'flex',
                    flexDirection:{xs:'column',md:'row'}
                }} md={6} item>
                   <Box sx={{width:{xs:'100%',sm:'100%',md:'40%'}}} component='img' src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' />
                   <Box component='div' sx={{
                       mt:{md:11,sm:2},
                   }}>
                        <Typography variant='h6' >Hakura T-Shirt</Typography>
                        <Typography sx={{fontSize:'0.9rem', mt:2,mb:2,fontWeight:'300'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae dignissimos velit sequi maxime magni!</Typography>
                        <Typography variant='h6' sx={{color:'#de92b3',mb:1}}>
                            Rs 849
                        </Typography>
                        <Button variant='outlined'>Add to Cart</Button>
                   </Box>
                </Grid> 
          </Grid>
          <Box sx={{display:{xs:'none',md:'block' ,lg:'block'}}}>
            <DesktopCartegories/>
          </Box>
          <Box mt={2} mb={2} sx={{display:{xs:'block',md:'none',lg:'none'}}}>
          <MobileCategories/>
          </Box>
          <Products/>
      </Box>
  );
};

export default ProductList;
