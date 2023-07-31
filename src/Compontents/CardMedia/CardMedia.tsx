import {Box, Card, Checkbox, FormControlLabel} from "@mui/material";
import React, {useState} from "react";
import cardMedia from "./CardMedia.png";

const hoveredStyle = {
  border: "2px solid #65E9D9"
}
const cardStyle = {
  width: 229,
  height: 150,
  borderRadius: "10px",
  border: "2px solid transparent",
  "&:hover": {hoveredStyle}
}

export default function CardMedia({label, image=cardMedia}: { label: string, image: string }): React.ReactElement {
  const [isChecked, setChecked] = useState(false);
  return (
    <Card variant="outlined" sx={ isChecked ? {...cardStyle, ...hoveredStyle} : cardStyle } >
      <img src={image} alt="cardMedia.png"/>
        <FormControlLabel
          control={<Checkbox value={isChecked}
                             sx={{
                               "&.Mui-checked": {
                                 color: "#21B6A8",
                               }
                             }}
                             onChange={() => setChecked((pr) => !pr)}/>} label={label} sx={{marginLeft:'8px'}}/>
    </Card>
  )
}
