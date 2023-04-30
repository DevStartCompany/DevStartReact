import { ReactNode } from "react"
import "./styles.css"

interface StacksProps{
    content:string
    color:"yellow" | "green" | "blue" | "pink" | "orange"
    icon:ReactNode
}

export function Stacks({content, color, icon}:StacksProps) {
    return (
        <div>
            {icon}
            <p className={`stacksContainer ${color}`}>{content}</p>
        </div>
        
    )
} 