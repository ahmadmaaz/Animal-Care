import React from 'react'
import { AdoptionStory } from '../../../../../shared/types'
import {Card,Chip,CardContent,CardMedia,Typography} from "@mui/material";
type Props = {}

function AdoptStory({url,title,caption}: AdoptionStory) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia sx={{ height: 240 }}  src={url} title={title} component='iframe'/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {caption}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AdoptStory