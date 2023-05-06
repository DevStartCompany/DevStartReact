import { ReactNode } from "react";
// import "./styles.css"
import { StacksContainer } from "./styles";

interface StacksProps {
  content: string;
  color: "yellow" | "green" | "blue" | "pink" | "orange";
  icon: ReactNode;
}

export function Stacks({ content, color, icon }: StacksProps) {
  return (
    <StacksContainer borderColor={color}>
      {icon}
      <p>{content}</p>
    </StacksContainer>
  );
}
