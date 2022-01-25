import { Grid } from '@mui/material';
import React from 'react';

const GridEx = () => {
  return(
    <Grid spacing={3} container>
        <Grid  sx={{background:'teal'}} md={4} sm={12} item>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maxime libero temporibus soluta placeat nisi mollitia saepe, facere natus rerum quo officiis itaque omnis, numquam enim. Quam fuga sit qui dolores at, sint, placeat similique earum voluptate voluptatum incidunt blanditiis!
        </Grid>
        <Grid spacing={2} sx={{background:'crimson'}} md={4} sm={10} item>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maxime libero temporibus soluta placeat nisi mollitia saepe, facere natus rerum quo officiis itaque omnis, numquam enim. Quam fuga sit qui dolores at, sint, placeat similique earum voluptate voluptatum incidunt blanditiis!
        </Grid>
        <Grid sx={{background:'olive'}}  md={4} item>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maxime libero temporibus soluta placeat nisi mollitia saepe, facere natus rerum quo officiis itaque omnis, numquam enim. Quam fuga sit qui dolores at, sint, placeat similique earum voluptate voluptatum incidunt blanditiis!
        </Grid>
    </Grid>
  );
};

export default GridEx;

