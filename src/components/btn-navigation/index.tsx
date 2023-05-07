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