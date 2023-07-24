import React, { FC, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Card, CardMedia } from '@mui/material';
import CardMediaSvg from '../../assets/CardMedia.svg';
import { CheckMarkStyle, CardContentNoPadding } from './card.style';

const Cards: FC = () => {
  const [checkboxState, setCheckboxState] = useState(false);

  return (
    <Card sx={{ outline: '2px solid transparent', borderRadius: '10px', '&:hover': { outline: '2px solid #21B6A8' } }}>
      <CardMedia component="img" height="100" width="229" image={CardMediaSvg} alt="card" />
      <CardContentNoPadding>
        <CheckMarkStyle>
          <div className="check-mark">
            <Checkbox
              onClick={() => {
                setCheckboxState(!checkboxState);
              }}
              checked={checkboxState}
              sx={{
                color: '#616161',
                '&.Mui-checked': {
                  color: '#21B6A8',
                },
              }}
            />
          </div>
          <div className="check-mark-title">Flood zone 3</div>
        </CheckMarkStyle>
      </CardContentNoPadding>
    </Card>
  );
};

export default Cards;
