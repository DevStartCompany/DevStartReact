import { styled } from "../../styles";

export const CourseContainer = styled("div", {
  display: "grid",

  gridTemplateAreas: `
    ".       TITLE  ."
    "SECTION MAIN   MODULES"
    ".       MAIN   ."
  `,

  minHeight: "100vh",

  paddingLeft: "46px",
});

export const Section = styled("section", {
  gridArea: "SECTION",
  display: "flex",
  flexDirection: "column",

  gap: "12px",
  marginRight: "24px",
});

export const ToolsButton = styled("button", {
  backgroundColor: "#343E53",
  border: "none",
  borderRadius: "3px",
  fontSize: "1rem",

  width: "286px",
  height: "36px",

  transition: "box-shadow 50ms",

  "&:hover": {
    cursor: "pointer",
    boxShadow: "2px 2px 5px rgba(255, 255, 255, .1)",
  },
});

export const TitleField = styled("div", {
  gridArea: "TITLE",
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-end",
});

export const Main = styled("div", {
  gridArea: "MAIN",
  width: "1000px",
  height: "600px",
});

export const VideoPreviewField = styled("iframe", {
  width: "100%",
  height: "550px",

  backgroundColor: "#2E3A49",
});

export const DescriptionField = styled("div", {});

export const ModulesField = styled("div", {
  gridArea: "MODULES",

  height: "705px",
  width: "318px",
  borderRadius: "3px",

  overflowY: "scroll",

  "&::-webkit-scrollbar": {
    width: "5px",
    height: "8px",
    backgroundColor: "#aaa",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "blue",
    borderRadius: "8px",
    border: "3px solid orange",
  },

  background:
    "linear-gradient(179.54deg, #2E3A49 0.37%, rgba(46, 58, 73, 0.5) 99.6%)",
});
