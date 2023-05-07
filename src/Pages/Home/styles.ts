import { styled } from "../../styles";

export const HomeContainer = styled("section", {
  display: "flex",
  padding: "20px",
  backgroundColor: "$background",
  width: "100vw",
  minHeight: "100vh",
});

export const LeftSection = styled("section", {
  width: "350px",
  height: "900px",

  border: "2px solid #2E3A49",
  borderRadius: "10px",
  paddingTop: "2rem",
});

export const UserDiv = styled("div", {
  display: "flex",
  width: "315px",
  marginLeft: "15px",
  backgroundColor: "#407DD9",
  borderRadius: "15px",

  img: {
    padding: "10px",
    width: "60px",
    height: "60px",
  },
});

export const UserInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const MindSec = styled("section", {
  "margin-left": "20px",
  width: "1200px",
  height: "900px",

  border: "2px solid #2E3A49",
  borderRadius: "10px",
});

export const MindUserInformation = styled("div", {
  display: "flex",
  marginBottom: "2rem",
});

export const UserLogo = styled("img", {
  padding: "10px",
  width: "60px",
  height: "60px",
});

export const UserInfo2 = styled("div", {});

export const UserInfoText = styled("p", {
  variants: {
    typeOfText: {
      hello: {
        fontSize: "18px",
        color: "#909090",
      },
      username: {
        fontSize: "24px",
        color: "#494949",
      },
    },
  },
});

export const CourseTitle = styled("h1", {
  fontSize: "24px",
  color: "#6A6868",
  marginLeft: "70px",
});

export const StacksField = styled("div", {
  display: "flex",
});
