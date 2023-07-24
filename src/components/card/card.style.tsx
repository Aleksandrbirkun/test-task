import { CardContent, styled } from '@mui/material';

export const CheckMarkStyle = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const CardWrapperStyle = styled('div')({
  '&:hover': {
    border: '1px solid #21B6A8',
  },
});

export const CardContentNoPadding = styled(CardContent)`
  padding: 4px;
  &:last-child {
    padding-bottom: 4px;
  }
  max-width: 229px;
`;
