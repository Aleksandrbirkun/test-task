import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

const StyledCheckbox = styled(Checkbox)({
  padding: '8px',
  color: '#616161',

  '&.Mui-checked': {
    color: '#21B6A8',
  }
});

const StyledLabel = styled(FormControlLabel)({
  margin: 0,
  color: '#1B1B1B',
  fontSize: '14px',
  lineHeight: '143%',
  letterSpacing: '0.17px',
});

type Props = {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

// @ts-ignore
const ControlledCheckbox: React.FC<Props> = ({ checked, setChecked }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    // @ts-ignore
    <StyledLabel
      control={
        // @ts-ignore
          <StyledCheckbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
      }
      label="Flood zone 3"
    />
  );
};

export default ControlledCheckbox;
