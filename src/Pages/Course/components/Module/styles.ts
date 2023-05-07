import { styled } from "../../../../styles";

export const ModulesContainer = styled("div", {
  "*": {
    listStyleType: "none",
  },
});

export const Ul = styled("ul", {});

export const Li = styled("li", {
  fontSize: "1.375rem",

  paddingLeft: ".25rem",

  variants: {
    isFocused: {
      true: {
        backgroundColor: "#1F2832",
      },
      false: {},
    },
  },
});

export const LessonField = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  paddingLeft: "2rem",
  border: "2px solid transparent",

  variants: {
    isFocused: {
      true: {},
      false: {},
    },
  },
});
