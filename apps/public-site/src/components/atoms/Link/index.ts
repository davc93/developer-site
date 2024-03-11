import { goTo } from "@/navigation"

export interface LinkProps {
    href:string,
    children:HTMLElement | SVGSVGElement

}

export const createLink = ({href,children}:LinkProps) => {
    const anchor = document.createElement("a")
    anchor.className = "link"
    anchor.href = href
    if(anchor.href.includes(window.location.host) && !href.includes("api")){
        anchor.addEventListener('click',(event)=>{
            
            event.preventDefault()
            goTo(href)
        })
    }
    anchor.append(children)
    return anchor
}