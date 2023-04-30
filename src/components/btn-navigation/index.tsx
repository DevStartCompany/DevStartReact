import "./styles.css"

interface BtnNavigationProps{
    img?:string
    content:string
    alt?:string
}

export function BtnNavigation({img, content, alt=""}:BtnNavigationProps) {
    return (
        <div className="btn-navigation">
            {img? <img src={img} alt={alt} /> : null}
            <h1 className="btn-1">{content}</h1>
        </div>
    )
} 