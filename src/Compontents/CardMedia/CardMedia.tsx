import {Card} from "@mui/material";
import React from "react";
import cardMedia from './CardMedia.png';


const ZoneBox = (): JSX.Element => {
  return (
    <Card variant="outlined">
      <img src={cardMedia} alt='cardMedia.png'/>
    </Card>
  )
}
export default ZoneBox;
