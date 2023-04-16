import React from 'react'
import {Card,CardContent,CardMedia,Typography} from "@mui/material";
import { Pet } from '../types';

function PetCard({image,name,age,gender}: Pet) {
  
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia sx={{ height: 240 }} image={image} title={name} src={image} component='img'/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <div className='flex justify-between'>
          <span className='text-sm'>{age}</span>
          <span className='text-sm'>{gender}</span>
        </div>
      </CardContent>

    </Card>
  );
}

export default PetCard