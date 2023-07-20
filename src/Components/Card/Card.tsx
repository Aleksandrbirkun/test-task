import { styled } from "@mui/material/styles";
import img from "../../Assts/CardMedia.png"
import { CSSProperties, useState } from 'react';
import { borderRadius } from "@mui/system";
import Checkbox from '@mui/material/Checkbox';

const MainContainer = styled("div")(() => ({
    maxWidth: "269px",
    minHeight: "193px",
    borderRadius: "5px",
    border: "2px dashed #7B61FF",
    margin: "0 auto",
    backgroundColor: "#E5E5E5"
}))

const NestCard = styled("div")(() => ({
    maxWidth: "229px",
    minHeight: "150px",
    borderRadius: "10px",
    margin: "20px 20px 0 20px",
    backgroundColor: "#FFF",
    transition: "outline-color 0.3s",
    "&:hover": {
        outline: "2px solid #65e9d9"
    },
    "&:focus-within": {
        outline: "2px solid #65e9d9",
    }
}))

const Picture = styled("img")(() => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxHeight: "150px",
    minWidth: "229px",
    display: "block"
}))

const Div = styled("div")(() => ({
    marginLeft: "15px",
    marginTop: "5px",
    display: "flex",
    alignItems: "end"
}))

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    marginRight: "5px",
    width: '17px',
    height: '17px',
    "&.MuiCheckbox-root": {
        color: "#616161",
        '&.Mui-checked': {
            color: "#65e9d9",
        },
    },
    "& .MuiSvgIcon-root": {
        width: "17px",
        height: "17px"
    },
}))

const FoodZone = styled("div")(() => ({
    marginTop: "10px ",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: "14px"
}))

export const Card = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div>
            <MainContainer >
                <NestCard>
                    <Picture src={img}></Picture>
                    <Div>
                        <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />
                        <FoodZone>Flood zone 3</FoodZone>
                    </Div>
                </NestCard>
            </MainContainer>
        </div>
    )
}