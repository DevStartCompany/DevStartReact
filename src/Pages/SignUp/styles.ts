import { styled, keyframes } from "../../styles";

const showContainerWhenToOpen = keyframes({
  from: {
    opacity: 0.3,
  },
  to: {
    opacity: 1,
  },
});

export const SignUpContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",

  backgroundColor: "#111922",

  "*": {
    animation: `${showContainerWhenToOpen} 1s`,
  },
});
