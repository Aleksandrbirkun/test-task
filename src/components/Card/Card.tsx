import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, SliderProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import CardImage from '../../images/CardMedia.png'
import ControlledCheckbox from '../Checkbox/Checkbox';

interface StyledSliderProps extends SliderProps {
  checked?: boolean;
}

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'checked',
})<StyledSliderProps>(({ checked }) => ({
  ...(checked &&
    {
      outline: '2px solid #21B6A8',
    }),

    width: '229px',
    border: '1px solid #EFEFEF',
    borderRadius: '10px',
    boxShadow: 'none',

    '&:hover': {
      outline: '2px solid #21B6A8',
    },

    '&:active': {
      outline: '2px solid #21B6A8',
    },

    '&.Mui-active': {
      outline: '2px solid #21B6A8',
    }
}));

const StyledCardContent = styled(CardContent)({
  height: '34px',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export default function ActionAreaCard() {
  const [checked, setChecked] = React.useState(true);

  return (
    // @ts-ignore
    <StyledCard checked={checked}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          width="229"
          image={ CardImage }
          alt="Map"
        />
      {/* @ts-ignore */}
        <StyledCardContent>
          {/* @ts-ignore */}
          <ControlledCheckbox
            checked={checked}
            setChecked={setChecked}
          />
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
};
