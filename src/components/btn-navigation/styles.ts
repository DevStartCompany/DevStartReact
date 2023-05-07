import { styled } from "../../styles";

export const ButtonNavigationContainer = styled("div", {
  width: "330px",
  marginTop: "20px",
  marginLeft: "4px",
});


export const Button = styled("h1", {
  fontSize: "20px",
  padding: "15px",
  fontWeight: 100,
  borderRadius: "15px",

  cursor: "pointer",

  transition: "background-color 150ms",

  "&:hover": {
    backgroundColor: "#407DD9",
  },

    "& > svg": {
    marginBottom: "-7px"
  },
});

