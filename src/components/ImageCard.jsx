import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Fab, Skeleton, Typography } from "@mui/material"
const ImageCard = () => {
    const [loading, setLoading] = useState(true);
 
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  },[loading])
//   {
//     loading ? <ImageCard />: 
//     <Stack  sx={{ maxWidth: 345, m:'0 auto' ,mt:3}} >
      
//       <Skeleton variant="text" sx={{ width: "60%", m:"5px auto",height:30}} />
//       <Skeleton variant="text" sx={{ width: "70%", m:" auto"}} />
//       <Skeleton variant="text" sx={{ width: "80%", m:" auto"}} />
//       <Skeleton variant="text" sx={{ width: "70%", m:"auto"}} />
//       <CardActions  sx={{ maxWidth: 345 ,mt:3, }}>
//         <Skeleton variant="circle" sx={{ width: "20%",mr:'10px'}} />
//         <Skeleton variant="circle" sx={{ width: "20%",marginLeft:'10px' }} />
//       </CardActions>
//   </Stack>  
    
// }
    return (
        <Card sx={{ maxWidth: 345, m:'0 auto' ,mt:3}}>
            {!loading ?
            <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
             /> :
             <Skeleton variant="rectangular" width="100%" height={118} />
            }
            
            <CardContent sx={{padding:"14px 20px"}}> 
            {
                !loading ?
                <>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </> :
                <>
                 <Skeleton variant="text" sx={{ width: "60%", m:"5px auto",height:30}} />
                 <Skeleton variant="text" sx={{ width: "70%", m:" auto"}} />
                 <Skeleton variant="text" sx={{ width: "80%", m:" auto"}} />
                 <Skeleton variant="text" sx={{ width: "70%", m:"auto"}} />
                 </>
            }
            </CardContent>
            <CardActions>
                {
                    !loading ?
                        <>
                            <Fab size="small" color="primary" variant="extended">Share</Fab>
                            <Fab size="small" color="secondary" variant="extended">Learn More</Fab>
                        </> :
                        <>
                            <Skeleton variant="circle" sx={{ width: "20%",ml:'10px'}} />
                            <Skeleton variant="circle" sx={{ width: "20%",marginLeft:'10px' }} />
                        </>
                    
                }
            </CardActions>
        </Card>
    );
};

export default ImageCard;
