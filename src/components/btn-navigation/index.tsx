import { Button, ButtonNavigationContainer } from "./styles";

// import "./styles.css"

interface BtnNavigationProps {
  img?: string;
  content: string;
  alt?: string;
}

export function BtnNavigation({ img, content, alt = "" }: BtnNavigationProps) {
  return (
    <ButtonNavigationContainer>
      {img ? <img src={img} alt={alt} /> : null}
      <Button>{content}</Button>
    </ButtonNavigationContainer>
  );
}
