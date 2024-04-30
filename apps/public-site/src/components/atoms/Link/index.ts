import { goTo } from "@/navigation"

type LinkProps = {
    href:string,
    children:HTMLElement | SVGSVGElement,
    className?:string

}
export const createLink = ({href,children,className}:LinkProps ) => {
    const anchor = document.createElement("a")
    
    anchor.className = (`link ${className ? className : ""}`)
    anchor.href = href
    if(anchor.href.includes(window.location.host) && !href.includes("api/auth")){
        anchor.addEventListener('click',(event)=>{
            
            event.preventDefault()
            goTo(href)
        })
    }
    anchor.append(children)
    return anchor
}