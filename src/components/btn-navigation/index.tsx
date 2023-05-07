import { ReactNode } from "react";
import { Button, ButtonNavigationContainer } from "./styles";

// import "./styles.css"

interface BtnNavigationProps {
  img?: string;
  content: string;
  alt?: string;
  icon:ReactNode
}

export function BtnNavigation({ img, content, alt = "", icon }: BtnNavigationProps) {
  return (
    <ButtonNavigationContainer>
      {img ? <img src={img} alt={alt} /> : null}
      <Button>{icon}{content}</Button>
    </ButtonNavigationContainer>
  );
}
