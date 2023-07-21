import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Checkbox, FormControlLabel } from "@mui/material";

// @ts-ignore
import cardMedia from "../../assets/CardMedia.png";

interface MyComponenetWrapperProp {
  checked?: boolean;
}

const MyComponenetWrapper = styled("div", {
  shouldForwardProp: (checked) =>
    checked !== "3px solid #21B6A8" && checked !== "none",
})<MyComponenetWrapperProp>(({ checked }) => ({
  width: "229px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  margin: "0 auto",
  cursor: "pointer",
  outline: checked ? "3px solid #21B6A8" : "none",

  "&:hover": {
    outline: "3px solid #21B6A8",
  },
}));

const MyImage = styled("img")({
  width: "100%",
  borderRadius: "10px 10px 0 0",
});

const MyWrapperCheckbox = styled("div")({
  padding: "6px 0 6px 20px",
  display: "flex",
  alignItems: "center",
});

const Card = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#E5E5E5" }}>
      <MyComponenetWrapper
        checked={checked}
        onClick={() => setChecked(!checked)}
      >
        <MyImage src={cardMedia} alt="cardMedia"></MyImage>
        <MyWrapperCheckbox>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#616161",
                  "&.Mui-checked": {
                    color: "#21B6A8",
                  },
                }}
                size="small"
                checked={checked}
              ></Checkbox>
            }
            label="Flood Zone 3"
          ></FormControlLabel>
        </MyWrapperCheckbox>
      </MyComponenetWrapper>
    </div>
  );
};

export default Card;
