import { styled, keyframes } from "../../styles";

const showContainerWhenToOpen = keyframes({
  from: {
    opacity: 0.3,
  },
  to: {
    opacity: 1,
  },
});

const showTitleWhenToOpen = keyframes({
  from: {
    opacity: 0.3,
    transform: "translate(-10px, 0px)",
  },
  to: {
    opacity: 1,
    transform: "translate(0px, 0px)",
  },
});

export const SignInContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",

  "*": {
    animation: `${showContainerWhenToOpen} 1s`,
  },

  backgroundColor: "$background",
});

export const Title = styled("h1", {
  animation: `${showTitleWhenToOpen} 1s`,
});

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const TextFormField = styled("label", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "0.75rem",
  color: "gray",
});

export const TextInput = styled("input", {
  fontSize: "1rem",
  padding: "0.5rem 0.25rem 0.25rem 0.5rem",
  width: "500px",
  // border: "none",
  borderRadius: "3px",
  backgroundColor: "#202830",
  border: "#2e3a49",
  outline: "none",

  boxShadow: "2px 2px 10px rgb(32, 40, 48, 0.3)",
  transition: "box-shadow 100ms",

  color: "white",
});

export const FooterForm = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  // justifyContent: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const SubmitButton = styled("button", {
  padding: "0.5rem 1rem",
  backgroundColor: "#646cff",
  color: "white",
  border: "1px solid #2e3a49",
  borderRadius: "6px",

  fontSize: "1rem",
  fontWeight: "bold",

  transition: "background-color 150ms",

  "&:hover": {
    backgroundColor: "#5059f3",
    cursor: "pointer",
  },
});
