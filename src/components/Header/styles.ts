import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  display: "flex",
  alignItems: "center",

  width: "100%",
  height: "80px",
  backgroundColor: "#202830",
  border: "2px solid #2E3A49",
  boxSizing: "border-box",
  paddingInline: "2rem",

  justifyContent: "space-between",
});

export const Logo = styled("img", {
  height: "60px",
  willChange: "filter",
  transition: "filter 300ms",
});

export const RoutersField = styled("div", {
  display: "flex",
  justifyContent: "flex-end",

  gap: "20px",
  color: "white",
  cursor: "pointer",
  fontSize: "1.25rem",

  a: {
    color: "White",
  },
});

export const AuthField = styled("div", {
  display: "flex",
  gap: "40px",

  color: "white",
  cursor: "pointer",
  fontSize: "1.25rem",
  marginRight: "2rem",

  a: {
    color: "White",
  },
});
