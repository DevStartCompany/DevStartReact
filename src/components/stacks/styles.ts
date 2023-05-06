import { styled } from "../../styles";

export const StacksContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  width: "160px",
  height: "60px",
  marginLeft: "70px",
  color: "white",
  padding: "5px",
  cursor: "pointer",
  strokeWidth: 0,

  "&:hover": {
    transform: "scale(1.15)",
    transition: "all 1s ease",
  },

  p: {
    fontSize: "15px",
    justifySelf: "center",
  },

  svg: {
    // marginTop: "10px",
  },

  variants: {
    borderColor: {
      yellow: {
        border: "2px solid yellow",
      },

      green: {
        border: "2px solid yellow",
      },

      blue: {
        border: "2px solid #007DD8",
      },

      pink: {
        border: "2px solid #C565C7",
      },

      orange: {
        border: "2px solid #EC7D2D",
      },
    },
  },
});
