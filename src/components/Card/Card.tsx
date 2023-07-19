import React, { FC, memo, useCallback } from 'react';

import { Stack } from "@mui/material";
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

import cardImg from '../../assets/card.png'

type CardProps = {
    checked: boolean,
    onChange: (checked: boolean) => void
    label?: string
}

export const Card: FC<CardProps> = memo(({ checked, onChange, label }) => {
    const changeChackedHandle = useCallback(() => onChange(() => !checked), [checked])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        overflow: 'hidden',
        textAlign: 'center',
        borderRadius: '10px',
        boxShadow: checked ? "0px 0px 0px 2px #65E9D9" : 'none',

        '&:hover': {
            boxShadow: "0px 0px 0px 2px #65E9D9"
        }

    }));

    const Img = styled("img")(({ theme }) => ({
        height: '100px',
        objectFit: 'cover'
    }));

    const TextBox = styled("div")(({ theme }) => ({
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: "8px",

        "& .MuiTypography-root": {
            color: '#1B1B1B',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20.02px',
            letterSpacing: '0.17px',
        },
        "& .MuiFormControlLabel-root": {
            margin: '0px'
        },
        "& .MuiCheckbox-root": {
            padding: '8px',

            "& svg": {
                width: '18px',
                height: '18px'
            }
        }
    }));

    return (
        <Stack sx={{ width: "229px", minHeight: '150px', }}>
            <Item>
                <Img src={cardImg} alt="Some image"/>
                <TextBox>
                    <FormControlLabel
                        control={<Checkbox
                            sx={{
                                color: '#616161',
                                '&.Mui-checked': {
                                    color: "#21B6A8",
                                },
                            }}
                            size='small'
                            checked={checked}
                            onClick={changeChackedHandle}/>}
                        label={label}/>
                    {/*<Checkbox sx={{ width: "18px", height: "18px" }} defaultChecked/>*/}
                    {/*<Text>{TEXT}</Text>*/}
                </TextBox>
            </Item>
        </Stack>
    );
});


