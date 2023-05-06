import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    lineHeight: 1.5,
    fontWeight: 400,
    margin: "0",
    padding: "0",

    colorScheme: "light dark",
    color: "rgba(255, 255, 255, 0.87)",

    fontSynthesis: "none",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "-webkit-text-size-adjust": "100%",
    boxSizing: "border-box",
  },

  a: {
    fontWeight: 500,
    color: "#646cff",
    textDecoration: "inherit",

    ":hover": {
      color: "#535bf2",
    },
  },
});
