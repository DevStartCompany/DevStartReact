<<<<<<< HEAD
import { ReactNode } from "react"
import "./styles.css"

interface BtnNavigationProps{
    img?:string
    content:string
    alt?:string
    icon:ReactNode
}

export function BtnNavigation({img, content, alt="", icon}:BtnNavigationProps) {
    return (
        <div className="btn-navigation">
            {img? <img src={img} alt={alt} /> : null}
        
            <h1 className="btn-1">{icon}{content}</h1>
        </div>
    )
} 
=======
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
>>>>>>> 7e78e53665ec5061097c9458a7723390c38e9341
